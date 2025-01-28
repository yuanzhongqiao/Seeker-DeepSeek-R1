<p align="center">
  <img src="images/Seeker.png" width="900" alt="Seeker">
</p>

# Seeker: DeepSeek-R1 Integration for VS Code

Seeker enables seamless interaction with DeepSeek-R1 reasoning models directly within Visual Studio Code, leveraging the power of Ollama's local runtime. Designed for privacy, performance, and usability, Seeker offers a modern AI-assisted coding experience with no internet connection required. Whether you’re working on resource-constrained hardware or high-end systems, Seeker supports a range of DeepSeek-R1 models to fit your needs.

---

## Key Features

- **Local Model Execution**: Run DeepSeek-R1 models entirely on your local machine using Ollama. No data ever leaves your environment.
- **Privacy-First AI**: Offline functionality ensures complete data privacy.
- **Model Flexibility**: Supports all DeepSeek-R1 model sizes—from 1.5B to 671B parameters.
- **Integrated Chat Interface**: Engage with a clean, modern chat interface embedded directly into VS Code.
- **Hardware-Based Performance**: Select models based on your machine’s capabilities.
- **Context-Aware Assistance**: Enhance productivity with AI-driven insights tailored to your coding environment.

---

## DeepSeek-R1 Model Overview

DeepSeek-R1 is DeepSeek’s first-generation reasoning model series, rivaling the performance of OpenAI-o1 across diverse tasks like mathematics, programming, and logical reasoning. The series includes distilled variants optimized for smaller hardware footprints, as well as massive server-grade models for maximum capability.

### Available Models

<div align="center">

| Model Name | Parameters | Model Size | Use Case |
|:----------:|:----------:|:----------:|:----------:|
| DeepSeek-R1-Distill-Qwen-1.5B | 1.5B | 1.1GB | Basic tasks, resource-constrained systems |
| DeepSeek-R1-Distill-Qwen-7B | 7B | 4.7GB | General-purpose, recommended for most users |
| DeepSeek-R1-Distill-Llama-8B | 8B | 4.9GB | Slightly more complex tasks, moderate hardware |
| DeepSeek-R1-Distill-Qwen-14B | 14B | 9.0GB | Advanced reasoning, larger models |
| DeepSeek-R1-Distill-Qwen-32B | 32B | 20GB | High-performance workloads, AI research |
| DeepSeek-R1-Distill-Llama-70B | 70B | 43GB | Complex reasoning, enterprise-grade usage |
| DeepSeek-R1 | 671B | 404GB | Server grade, maximum capability |

</div>

---

## Requirements

1. **Ollama**: Install Ollama from [ollama.ai](https://ollama.ai/) to enable local model execution.
2. **Hardware**: Ensure sufficient system resources based on your chosen model.
3. **Visual Studio Code**: Ensure you have the latest version installed.

---

## Installation

### Step 1: Install Seeker
- Download and install Seeker from the VS Code Marketplace or via the VSIX file.

### Step 2: Set Up Ollama
- Download and install Ollama from [ollama.ai](https://ollama.ai).
- [Optional] Use the following command to download your preferred DeepSeek-R1 model:

```bash
ollama run deepseek-r1:1.5b   # Smallest model
ollama run deepseek-r1:7b     # Recommended model
```

---

## Usage

1. **Open Seeker in VS Code**:
   - Launch Visual Studio Code.
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
   - Select **Seeker: Query DeepSeek**.

2. **Start Chatting**:
   - Engage with DeepSeek-R1 models in a modern, intuitive interface.

3. **Model Selection**:
   - Default model: `deepseek-r1:1.5b`.
   - Change model via VS Code settings:
     - Open settings and search for “Seeker”.
     - Update the model name (e.g., `deepseek-r1:7b`).

---

## Known Issues

- **First-Time Setup**: Initial model downloads may take some time.
- **Memory Usage**: Ensure your system meets the requirements of your chosen model.

---

## Privacy & Security

- **Local Execution**: All processing occurs on your machine.
- **No Internet Required**: Full offline functionality ensures your prompts and responses remain private.
- **Data Sovereignty**: No data is sent to external servers.

---

## License

Seeker is licensed under the MIT License, allowing for commercial use, modifications, and derivative works. For details, see the [LICENSE](LICENSE) file.

DeepSeek-R1 models are similarly available for commercial use and modification, with additional licensing information for Qwen and Llama-derived models:
- **Qwen Models**: Based on Apache 2.0 License.
- **Llama Models**: Licensed under Llama3 series licenses.

---

## Contributing

Contributions are welcome! If you have ideas, bug fixes, or feature requests, feel free to submit a Pull Request or open an issue.

---

## Acknowledgments

- **DeepSeek AI**: For developing the cutting-edge DeepSeek-R1 models.
- **Ollama**: For providing a seamless local runtime.

---

Experience the future of AI-assisted coding with Seeker. Unlock the full potential of DeepSeek-R1 models, privately and efficiently, right in your editor.

