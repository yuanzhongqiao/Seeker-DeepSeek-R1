import * as vscode from 'vscode';
import axios from 'axios';
import { exec } from 'child_process';
import { promisify } from 'util';

let statusBarItem: vscode.StatusBarItem | undefined;
const execAsync = promisify(exec);
const OLLAMA_API_URL = 'http://localhost:11434/api/generate';

function getModelName(): string {
    return vscode.workspace.getConfiguration('seeker').get('model') || 'deepseek-r1:1.5b';
}

function createStatusBarItem() {
    if (statusBarItem) {
        return statusBarItem;
    }
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    statusBarItem.text = "$(sync~spin) Seeker is running...";
    return statusBarItem;
}

async function startOllama(): Promise<void> {
    try {
        await axios.get('http://localhost:11434/api/tags');
        
        try {
            await axios.post(OLLAMA_API_URL, {
                model: getModelName(),
                prompt: "test",
                stream: false
            });
        } catch {
            // Create and show status bar immediately
            const statusBar = createStatusBarItem();
            statusBar.text = "$(sync~spin) Initializing download...";
            statusBar.show();
            
            console.log('Starting model download...');
            const child = exec(`ollama pull ${getModelName()}`);
            
            // Debug stderr output
            child.stderr?.on('data', (data: string) => {
                const output = data.toString();
                console.log('stderr:', output);
                
                // Updated pattern to handle both MB and GB
                const progressMatch = output.match(/(\d+)%.*?(\d+(?:\.\d+)?)\s*(MB|GB)\/(\d+(?:\.\d+)?)\s*(MB|GB)/);
                if (progressMatch) {
                    const [, progress, downloaded, downloadedUnit, total, totalUnit] = progressMatch;
                    console.log('Progress match:', { progress, downloaded, downloadedUnit, total, totalUnit });
                    
                    // Convert everything to GB for display
                    const downloadedGB = downloadedUnit === 'GB' ? 
                        parseFloat(downloaded) : 
                        parseFloat(downloaded) / 1024;
                        
                    const totalGB = totalUnit === 'GB' ? 
                        parseFloat(total) : 
                        parseFloat(total) / 1024;
                    
                    if (statusBarItem) {
                        const newText = `$(sync~spin) Downloading DeepSeek model: ${downloadedGB.toFixed(2)}GB / ${totalGB.toFixed(2)}GB (${progress}%)`;
                        console.log('Updating status bar:', newText);
                        statusBarItem.text = newText;
                    } else {
                        console.log('Status bar item is undefined');
                    }
                } else {
                    console.log('No progress match found in:', output);
                }
            });

            await new Promise<void>((resolve, reject) => {
                child.on('close', (code) => {
                    console.log('Process closed with code:', code);
                    if (code === 0) {
                        if (statusBarItem) {
                            statusBarItem.text = "$(check) Model ready";
                            setTimeout(() => {
                                if (statusBarItem) {
                                    statusBarItem.hide();
                                    statusBarItem.dispose();
                                    statusBarItem = undefined;
                                }
                            }, 2000);
                        }
                        resolve();
                    } else {
                        reject(new Error(`Download failed with code ${code}`));
                    }
                });
                child.on('error', (error) => {
                    console.error('Process error:', error);
                    reject(error);
                });
            });
        }
    } catch (error) {
        console.error('Start Ollama error:', error);
        if (statusBarItem) {
            statusBarItem.hide();
            statusBarItem.dispose();
            statusBarItem = undefined;
        }
        vscode.window.showErrorMessage('Failed to start Ollama. Please make sure it is installed and running.');
        throw error;
    }
}

async function queryOllama(prompt: string, webview: vscode.Webview): Promise<string> {
    try {
        const response = await axios.post(OLLAMA_API_URL, {
            model: getModelName(),
            prompt: prompt,
            stream: true,
        }, {
            responseType: 'stream'
        });

        let fullResponse = '';

        return new Promise((resolve, reject) => {
            response.data.on('data', (chunk: Buffer) => {
                try {
                    const chunkStr = chunk.toString();
                    const parsed = JSON.parse(chunkStr);
                    fullResponse += parsed.response;
                    webview.postMessage({ type: 'response', content: fullResponse });
                } catch (e) {
                    console.error('Error parsing chunk:', e);
                }
            });

            response.data.on('end', () => {
                resolve(fullResponse);
            });

            response.data.on('error', (err: Error) => {
                reject(err);
            });
        });
    } catch (error) {
        console.error('Error querying Ollama:', error);
        throw error;
    }
}

// Create a new webview panel
async function createChatPanel() {
    const panel = vscode.window.createWebviewPanel(
        'seekerChat',
        'Seeker Chat',
        vscode.ViewColumn.Beside,
        { enableScripts: true }
    );

    panel.webview.html = getWebviewContent();

    panel.webview.onDidReceiveMessage(async message => {
        if (message.type === 'prompt') {
            try {
                await startOllama();
                await queryOllama(message.content, panel.webview);
            } catch (error) {
                vscode.window.showErrorMessage('Failed to query DeepSeek. Make sure Ollama is running.');
            }
        }
    });
}

class SeekerViewProvider implements vscode.WebviewViewProvider {
    constructor(private readonly _extensionUri: vscode.Uri) {}

    public async resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken
    ) {
        webviewView.webview.options = {
            enableScripts: true
        };

        webviewView.webview.html = getWebviewContent();

        webviewView.webview.onDidReceiveMessage(async message => {
            if (message.type === 'prompt') {
                try {
                    await startOllama();
                    await queryOllama(message.content, webviewView.webview);
                } catch (error) {
                    vscode.window.showErrorMessage('Failed to query DeepSeek. Make sure Ollama is running.');
                }
            }
        });
    }
}

export function activate(context: vscode.ExtensionContext) {
    // Register the sidebar webview provider
    const provider = new SeekerViewProvider(context.extensionUri);
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider('seekerChat', provider)
    );

    // Register the command to open the chat panel
    let disposable = vscode.commands.registerCommand('seeker.query', createChatPanel);
    context.subscriptions.push(disposable);
}

export function deactivate() {
    // Clean up status bar item
    if (statusBarItem) {
        statusBarItem.hide();
        statusBarItem.dispose();
        statusBarItem = undefined;
    }

    // Kill any running Ollama processes
    return new Promise<void>((resolve) => {
        exec('taskkill /F /IM ollama.exe', (error) => {
            if (error) {
                console.log('Ollama process not found or already terminated');
            }
            resolve();
        });
    });
}
function getWebviewContent() {
	return /*html*/`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
				html, body { 
                    margin: 0;
                    padding: 0;
                    height: 100vh;
                    overflow: hidden; /* Prevent outer scrolling */
                }
                body { 
                    padding: 20px; 
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Helvetica Neue', 
                                sans-serif;
                    max-width: 900px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    height: calc(100vh - 40px); /* Account for padding */
                    line-height: 1.5;
                    box-sizing: border-box;
                }
                #chat-container {
                    flex: 1;
                    overflow-y: auto;
                    margin-bottom: 24px;
                    padding: 16px;
                    background: var(--vscode-editor-background);
                    border: 1px solid var(--vscode-widget-border);
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }
                .message {
    padding: 12px 16px;
    border-radius: 12px;
    max-width: 85%;
    font-size: 14px;
    white-space: pre-wrap;
    word-wrap: break-word;
}
                .message-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
}
                .user-message {
                    background: var(--vscode-button-background);
                    color: var(--vscode-button-foreground);
                    align-self: flex-end;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .assistant-message {
                    background: var(--vscode-editor-inactiveSelectionBackground);
                    color: var(--vscode-editor-foreground);
                    align-self: flex-start;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
				.assistant-message-container {
                    align-items: flex-start;
                }
                #input-container {
                    display: flex;
                    gap: 12px;
                    background: var(--vscode-editor-background);
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }
                #prompt-input { 
                    flex: 1;
                    padding: 12px 16px;
                    border: 1px solid var(--vscode-input-border);
                    background: var(--vscode-input-background);
                    color: var(--vscode-input-foreground);
                    border-radius: 8px;
                    resize: none;
                    height: 50px;
                    font-family: inherit;
                    font-size: 14px;
                    line-height: 1.5;
                    transition: border-color 0.2s ease;
                }
                #prompt-input:focus {
                    outline: none;
                    border-color: var(--vscode-focusBorder);
                }
                #submit-button { 
                    padding: 12px 24px;
                    background: var(--vscode-button-background);
                    color: var(--vscode-button-foreground);
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 500;
                    transition: background-color 0.2s ease;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                #submit-button:hover {
                    background: var(--vscode-button-hoverBackground);
                }
                #submit-button:active {
                    transform: translateY(1px);
                }
                .message-time {
					font-size: 11px;
					color: var(--vscode-descriptionForeground);
					margin-top: 4px;
					padding: 0 4px;
				}
                /* Scrollbar styling */
                ::-webkit-scrollbar {
                    width: 4px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent; /* Hidden track */
                    margin: 4px 0;
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb {
                    background: var(--vscode-scrollbarSlider-background);
                    border-radius: 4px;
                    transition: background 0.2s ease;
                }
				::-webkit-scrollbar-thumb:hover {
                    background: var(--vscode-scrollbarSlider-hoverBackground);
                }
            </style>
        </head>
        <body>
            <div id="chat-container"></div>
            <div id="input-container">
                <textarea 
                    id="prompt-input" 
                    placeholder="Type your message here..."
                    rows="1"
                ></textarea>
                <button id="submit-button">
                    <span>Send</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                </button>
            </div>
            <script>
                const vscode = acquireVsCodeApi();
                const chatContainer = document.getElementById('chat-container');
                const promptInput = document.getElementById('prompt-input');
                const submitButton = document.getElementById('submit-button');

                function getFormattedTime() {
                    return new Date().toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                    });
                }

                function addMessage(content, isUser = false) {
    const messageContainer = document.createElement('div');
    messageContainer.className = \`message-container \${isUser ? 'user-message-container' : 'assistant-message-container'}\`;
    
    const messageWrapper = document.createElement('div');
    messageWrapper.style.cssText = \`display: flex; flex-direction: column; \${isUser ? 'align-items: flex-end;' : 'align-items: flex-start;'}\`;

    const messageDiv = document.createElement('div');
    messageDiv.className = \`message \${isUser ? 'user-message' : 'assistant-message'}\`;
    messageDiv.textContent = content;

    const timeDiv = document.createElement('div');
    timeDiv.className = 'message-time';
    timeDiv.textContent = getFormattedTime();

    messageWrapper.appendChild(messageDiv);
    messageWrapper.appendChild(timeDiv);
    messageContainer.appendChild(messageWrapper);
    chatContainer.appendChild(messageContainer);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}
                
                submitButton.addEventListener('click', () => {
                    const prompt = promptInput.value.trim();
                    if (prompt) {
                        addMessage(prompt, true);
                        vscode.postMessage({ type: 'prompt', content: prompt });
                        promptInput.value = '';
                    }
                });

                promptInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        submitButton.click();
                    }
                });

                window.addEventListener('message', event => {
                    const message = event.data;
                    if (message.type === 'response') {
                        const lastMessage = chatContainer.lastElementChild;
                        if (lastMessage?.querySelector('.assistant-message')) {
                            lastMessage.remove();
                        }
                        addMessage(message.content);
                    }
                });

                // Auto-resize textarea
                promptInput.addEventListener('input', () => {
                    promptInput.style.height = 'auto';
                    promptInput.style.height = Math.min(promptInput.scrollHeight, 150) + 'px';
                });
            </script>
        </body>
        </html>
    `;
}
