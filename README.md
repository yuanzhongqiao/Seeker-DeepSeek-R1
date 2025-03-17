<div class="Box-sc-g0xbh4-0 QkQOb js-snippet-clipboard-copy-unpositioned undefined" data-hpc="true"><article class="markdown-body entry-content container-lg" itemprop="text"><br>
<div dir="auto">
  <div dir="auto">
    <a target="_blank" rel="noopener noreferrer" href="/s000ik/Seeker-DeepSeek-R1/blob/main/images/Seeker.png"><img src="/s000ik/Seeker-DeepSeek-R1/raw/main/images/Seeker.png" style="width: 48%; max-width: 100%;"></a>
    <a target="_blank" rel="noopener noreferrer" href="/s000ik/Seeker-DeepSeek-R1/blob/main/images/Seekerv2.png"><img src="/s000ik/Seeker-DeepSeek-R1/raw/main/images/Seekerv2.png" style="width: 48%; max-width: 100%;"></a>
  </div>
</div>
<br>
<div class="markdown-heading" dir="auto"><h1 tabindex="-1" class="heading-element" dir="auto" _msttexthash="131678183" _msthash="244">Seeker：VS Code 的 DeepSeek-R1（+ 其他 LLM）集成</h1><a id="user-content-seeker-deepseek-r1--other-llms-integration-for-vs-code" class="anchor" aria-label="永久链接： Seeker： DeepSeek-R1 （+ 其他 LLM） VS Code 集成" href="#seeker-deepseek-r1--other-llms-integration-for-vs-code" _mstaria-label="2695901" _msthash="245"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto" _msttexthash="3926563524" _msthash="246">Seeker 利用 Ollama 本地运行时的强大功能，直接在 Visual Studio Code 中与 DeepSeek-R1 推理模型无缝交互。Seeker 专为隐私、性能和可用性而设计，提供现代 AI 辅助编码体验，无需互联网连接。无论您是在资源受限的硬件还是高端系统上工作，Seeker 都支持一系列 DeepSeek-R1 模型以满足您的需求。<a href="https://marketplace.visualstudio.com/items?itemName=SatwikSingh.seeker" rel="nofollow" _istranslated="1">在此处发布。</a></p>
<hr>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto" _msttexthash="12663456" _msthash="247">主要特点</h2><a id="user-content-key-features" class="anchor" aria-label="永久链接：主要功能" href="#key-features" _mstaria-label="473057" _msthash="248"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<blockquote>
<p dir="auto" _msttexthash="338829244" _msthash="249">🚀 <strong _istranslated="1">新：</strong>Seeker 现在是 <strong _istranslated="1">LLM 不可知</strong>论者！<br _istranslated="1">支持 Ollama 提供的所有模型，包括 Llama、DeepSeek、Gemma 和 Mistral。</p>
</blockquote>
<ul dir="auto">
<li _msttexthash="472957316" _msthash="250"><strong _istranslated="1">本地模型执行</strong>：使用 Ollama 运行时完全在本地计算机上运行 DeepSeek-R1 模型。不会有任何数据离开您的环境。</li>
<li _msttexthash="239967884" _msthash="251"><strong _istranslated="1">LLM 不可知</strong>性：与 Ollama 提供的任何模型（Llama、DeepSeek、Gemma、Mistral 等）兼容</li>
<li _msttexthash="138611382" _msthash="252"><strong _istranslated="1">模型灵活性</strong>：支持所有 DeepSeek-R1 模型大小 — 从 1.5B 到 671B 参数。</li>
<li _msttexthash="122382260" _msthash="253"><strong _istranslated="1">隐私优先 AI</strong>：离线功能确保完全的数据隐私。</li>
<li _msttexthash="277597359" _msthash="254"><strong _istranslated="1">集成聊天界面</strong>：使用直接嵌入到 VS Code 中的简洁、现代的聊天界面进行互动。</li>
<li _msttexthash="129242542" _msthash="255"><strong _istranslated="1">基于硬件的性能</strong>：根据计算机的功能选择型号。</li>
<li _msttexthash="288953639" _msthash="256"><strong _istranslated="1">情境感知协助</strong>：通过为您的编码环境量身定制的 AI 驱动型见解提高工作效率。</li>
</ul>
<hr>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto" _msttexthash="29119064" _msthash="257">DeepSeek-R1 模型概述</h2><a id="user-content-deepseek-r1-model-overview" class="anchor" aria-label="永久链接：DeepSeek-R1 模型概述" href="#deepseek-r1-model-overview" _mstaria-label="1015677" _msthash="258"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto" _msttexthash="1914519854" _msthash="259">DeepSeek-R1 是 DeepSeek 的第一代推理模型系列，在数学、编程和逻辑推理等各种任务中的性能可与 OpenAI-o1 相媲美。该系列包括针对较小硬件占用空间优化的精简变体，以及用于最大功能的大型服务器级型号。</p>
<div class="markdown-heading" dir="auto"><h3 tabindex="-1" class="heading-element" dir="auto" _msttexthash="10490922" _msthash="260">可用型号</h3><a id="user-content-available-models" class="anchor" aria-label="永久链接：可用型号" href="#available-models" _mstaria-label="620919" _msthash="261"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<div align="center" dir="auto">
<markdown-accessiblity-table data-catalyst=""><table>
<thead>
<tr>
<th align="center" _msttexthash="10850450" _msthash="262">型号名称</th>
<th align="center" _msttexthash="4651894" _msthash="263">参数</th>
<th align="center" _msttexthash="10537124" _msthash="264">模型大小</th>
<th align="center" _msttexthash="4847024" _msthash="265">用例</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center" _msttexthash="19000527" _msthash="266">DeepSeek-R1-蒸馏-Qwen-1.5B</td>
<td align="center" _msttexthash="2622854" _msthash="267">1.5乙</td>
<td align="center" _msttexthash="33644" _msthash="268">1.1GB</td>
<td align="center" _msttexthash="54485717" _msthash="269">基本任务、资源受限的系统</td>
</tr>
<tr>
<td align="center" _msttexthash="18964192" _msthash="270">DeepSeek-R1-蒸馏-Qwen-7B</td>
<td align="center" _msttexthash="11869" _msthash="271">7B</td>
<td align="center" _msttexthash="41395055" _msthash="272">4.7千兆字节（GB）</td>
<td align="center" _msttexthash="63678719" _msthash="273">通用型，建议大多数用户使用</td>
</tr>
<tr>
<td align="center" _msttexthash="41972632" _msthash="274">DeepSeek-R1-蒸馏-骆驼-8B</td>
<td align="center" _msttexthash="11960" _msthash="275">8B</td>
<td align="center" _msttexthash="34853" _msthash="276">4.9GB</td>
<td align="center" _msttexthash="76837670" _msthash="277">稍微复杂一些的任务，中等的硬件</td>
</tr>
<tr>
<td align="center" _msttexthash="18981872" _msthash="278">DeepSeek-R1-蒸馏-Qwen-14B</td>
<td align="center" _msttexthash="17589" _msthash="279">14B</td>
<td align="center" _msttexthash="41394691" _msthash="280">9.0千兆字节（GB）</td>
<td align="center" _msttexthash="46612098" _msthash="281">高级推理，更大的模型</td>
</tr>
<tr>
<td align="center" _msttexthash="18981846" _msthash="282">DeepSeek-R1-蒸馏-Qwen-32B</td>
<td align="center" _msttexthash="17563" _msthash="283">32B</td>
<td align="center" _msttexthash="26429" _msthash="284">20GB</td>
<td align="center" _msttexthash="44298241" _msthash="285">高性能工作负载、AI 研究</td>
</tr>
<tr>
<td align="center" _msttexthash="41989389" _msthash="286">DeepSeek-R1-蒸馏-骆驼-70B</td>
<td align="center" _msttexthash="7089108" _msthash="287">70 字节</td>
<td align="center" _msttexthash="26923" _msthash="288">43GB</td>
<td align="center" _msttexthash="57328778" _msthash="289">复杂的推理，企业级的使用</td>
</tr>
<tr>
<td align="center" _msttexthash="12271519" _msthash="290">深度搜索-R1</td>
<td align="center" _msttexthash="7878572" _msthash="291">671B 系列</td>
<td align="center" _msttexthash="34476" _msthash="292">404GB</td>
<td align="center" _msttexthash="45561243" _msthash="293">服务器等级，最大能力</td>
</tr>
</tbody>
</table></markdown-accessiblity-table>
</div>
<hr>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto" _msttexthash="6085547" _msthash="294">要求</h2><a id="user-content-requirements" class="anchor" aria-label="永久链接： 要求" href="#requirements" _mstaria-label="524849" _msthash="295"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<ol dir="auto">
<li _msttexthash="148882279" _msthash="296"><strong _istranslated="1">Ollama</strong>：从 <a href="https://ollama.ai/" rel="nofollow" _istranslated="1">ollama.ai</a> 安装 Ollama 以启用本地模型执行。</li>
<li _msttexthash="151377746" _msthash="297"><strong _istranslated="1">硬件</strong>：确保根据您选择的模型提供足够的系统资源。</li>
<li _msttexthash="124340112" _msthash="298"><strong _istranslated="1">Visual Studio Code</strong>：确保您已安装最新版本。</li>
</ol>
<hr>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto" _msttexthash="5773755" _msthash="299">安装</h2><a id="user-content-installation" class="anchor" aria-label="永久链接：安装" href="#installation" _mstaria-label="519259" _msthash="300"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<div class="markdown-heading" dir="auto"><h3 tabindex="-1" class="heading-element" dir="auto" _msttexthash="23517273" _msthash="301">第 1 步：安装 Seeker</h3><a id="user-content-step-1-install-seeker" class="anchor" aria-label="永久链接：第 1 步：安装 Seeker" href="#step-1-install-seeker" _mstaria-label="780533" _msthash="302"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<ul dir="auto">
<li _msttexthash="128298469" _msthash="303">从 VS Code Marketplace 或通过 VSIX 文件下载并安装 Seeker。</li>
</ul>
<div class="markdown-heading" dir="auto"><h3 tabindex="-1" class="heading-element" dir="auto" _msttexthash="24906817" _msthash="304">第 2 步：设置 Ollama</h3><a id="user-content-step-2-set-up-ollama" class="anchor" aria-label="永久链接：第 2 步：设置 Ollama" href="#step-2-set-up-ollama" _mstaria-label="676208" _msthash="305"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<ul dir="auto">
<li _msttexthash="41269969" _msthash="306">从 <a href="https://ollama.ai" rel="nofollow" _istranslated="1">ollama.ai</a> 下载并安装 Ollama。</li>
<li _msttexthash="180992903" _msthash="307">[可选]使用以下命令下载您喜欢的 DeepSeek-R1 或任何其他模型：</li>
</ul>
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto"><pre>ollama run deepseek-r1:1.5b   <span class="pl-c"><span class="pl-c">#</span> Smallest model</span>
ollama run deepseek-r1:7b     <span class="pl-c"><span class="pl-c">#</span> Recommended model</span>

<span class="pl-c"><span class="pl-c">#</span> Seeker supports all Open Source LLMs available on Ollama</span>
ollama pull llama2:7b      <span class="pl-c"><span class="pl-c">#</span> Meta's Llama 2</span>
ollama pull mistral:7b     <span class="pl-c"><span class="pl-c">#</span> Mistral AI</span>
ollama pull gemma:7b       <span class="pl-c"><span class="pl-c">#</span> Google's Gemma</span></pre><div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w" value="ollama run deepseek-r1:1.5b   # Smallest model
ollama run deepseek-r1:7b     # Recommended model

# Seeker supports all Open Source LLMs available on Ollama
ollama pull llama2:7b      # Meta's Llama 2
ollama pull mistral:7b     # Mistral AI
ollama pull gemma:7b       # Google's Gemma" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div></div>
<hr>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto" _msttexthash="5626816" _msthash="308">用法</h2><a id="user-content-usage" class="anchor" aria-label="永久链接：用法" href="#usage" _mstaria-label="270712" _msthash="309"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<ol dir="auto">
<li>
<p dir="auto" _msttexthash="35396985" _msthash="310"><strong _istranslated="1">在 VS Code 中打开 Seeker</strong>：</p>
<ul dir="auto">
<li _msttexthash="8506303" _msthash="311">启动 Visual Studio Code。</li>
<li><font _mstmutation="1" _msttexthash="84398054" _msthash="312">按 （Windows/Linux） 或 （Mac）。</font><code>Ctrl+Shift+P</code><code>Cmd+Shift+P</code></li>
<li _msttexthash="22296417" _msthash="313">选择 <strong _istranslated="1">Seeker： Query</strong>。</li>
</ul>
</li>
<li>
<p dir="auto" _msttexthash="21219510" _msthash="314"><strong _istranslated="1">型号选择</strong>：</p>
<ul dir="auto">
<li><font _mstmutation="1" _msttexthash="22180587" _msthash="315">默认型号： .</font><code>deepseek-r1:1.5b</code></li>
<li><font _mstmutation="1" _msttexthash="63283714" _msthash="316">通过 VS Code 设置更改模型：</font><ul dir="auto">
<li _msttexthash="33510451" _msthash="317">打开设置并搜索 “Seeker”。</li>
<li _msttexthash="73000278" _msthash="318">从预设模型中选择或选择“自定义”</li>
<li><font _mstmutation="1" _msttexthash="235287013" _msthash="319">对于自定义模型，请输入任何 Ollama 模型名称（例如 ， ， ）。</font><code>qwen:0.5b</code><code>mistral:7b</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p dir="auto" _msttexthash="20752290" _msthash="320"><strong _istranslated="1">开始聊天</strong>：</p>
<ul dir="auto">
<li _msttexthash="98401056" _msthash="321">在现代、直观的界面中与选定的模型互动。</li>
<li _msttexthash="55375008" _msthash="322">使用流式处理进行实时响应。</li>
<li _msttexthash="144650051" _msthash="323">键盘快捷键（Enter 键发送，Shift+Enter 键换行）</li>
</ul>
</li>
</ol>
<hr>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto" _msttexthash="227630" _msthash="324">Running Seeker</h2><a id="user-content-running-seeker" class="anchor" aria-label="永久链接：Running Seeker" href="#running-seeker" _mstaria-label="549055" _msthash="325"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto" _msttexthash="10497227" _msthash="326">屏幕截图</h2><a id="user-content-screenshots" class="anchor" aria-label="永久链接： 屏幕截图" href="#screenshots" _mstaria-label="484146" _msthash="327"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<br>
<div dir="auto">
  <div dir="auto">
    <a href="/s000ik/Seeker-DeepSeek-R1/blob/main/ss/SS1.png">
      <img src="/s000ik/Seeker-DeepSeek-R1/raw/main/ss/SS1.png" style="width: 100%; max-width: 100%;">
    </a>
    <p align="center" dir="auto"><b _msttexthash="7930039" _msthash="328">主聊天 UI</b></p>
  </div>
  <div dir="auto">
    <a href="/s000ik/Seeker-DeepSeek-R1/blob/main/ss/sidebar.png">
      <img src="/s000ik/Seeker-DeepSeek-R1/raw/main/ss/sidebar.png" style="width: 100%; max-width: 100%;">
    </a>
    <p align="center" dir="auto"><b _msttexthash="16237715" _msthash="329">侧边栏菜单</b></p>
  </div>
  <div dir="auto">
    <a href="/s000ik/Seeker-DeepSeek-R1/blob/main/ss/custom-models.png">
      <img src="/s000ik/Seeker-DeepSeek-R1/raw/main/ss/custom-models.png" style="width: 100%; max-width: 100%;">
    </a>
    <p align="center" dir="auto"><b _msttexthash="11880752" _msthash="330">型号选择</b></p>
  </div>
  <div dir="auto">
    <a href="/s000ik/Seeker-DeepSeek-R1/blob/main/ss/customdemo1.png">
      <img src="/s000ik/Seeker-DeepSeek-R1/raw/main/ss/customdemo1.png" style="width: 100%; max-width: 100%;">
    </a>
    <p align="center" dir="auto"><b _msttexthash="24236498" _msthash="331">自定义模型演示 1</b></p>
  </div>
  <div dir="auto">
    <a href="/s000ik/Seeker-DeepSeek-R1/blob/main/ss/customdemo2.png">
      <img src="/s000ik/Seeker-DeepSeek-R1/raw/main/ss/customdemo2.png" style="width: 100%; max-width: 100%;">
    </a>
    <p align="center" dir="auto"><b _msttexthash="24236680" _msthash="332">自定义模型演示 2</b></p>
  </div>
  <div dir="auto">
    <a href="/s000ik/Seeker-DeepSeek-R1/blob/main/ss/statusbar.png">
      <img src="/s000ik/Seeker-DeepSeek-R1/raw/main/ss/statusbar.png" style="width: 100%; max-width: 100%;">
    </a>
    <p align="center" dir="auto"><b _msttexthash="16597477" _msthash="333">状态栏进度</b></p>
  </div>
</div>
<br>
<hr>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto" _msttexthash="14949636" _msthash="334">已知问题</h2><a id="user-content-known-issues" class="anchor" aria-label="永久链接：已知问题" href="#known-issues" _mstaria-label="481078" _msthash="335"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<ul dir="auto">
<li _msttexthash="172648359" _msthash="336"><strong _istranslated="1">首次设置或模型切换</strong>：初始模型下载可能需要一些时间。</li>
<li _msttexthash="154005891" _msthash="337"><strong _istranslated="1">内存使用情况</strong>：确保您的系统满足所选模型的要求。</li>
<li><font _mstmutation="1" _msttexthash="162735703" _msthash="338"><strong _mstmutation="1" _istranslated="1">下载问题</strong>：如果下载失败或中断，您可能需要：</font><ol dir="auto">
<li _msttexthash="82390503" _msthash="339">停止 Ollama 服务（或退出扩展）</li>
<li><font _mstmutation="1" _msttexthash="53860690" _msthash="340">删除 的内容以删除部分下载</font><code>~\.ollama\models\blobs</code></li>
<li _msttexthash="15271932" _msthash="341">重启 Ollama 服务</li>
<li _msttexthash="20751939" _msthash="342">再次尝试下载</li>
</ol>
</li>
<li><font _mstmutation="1" _msttexthash="139884147" _msthash="343"><strong _mstmutation="1" _istranslated="1">手动模型清理</strong>：要释放磁盘空间，您可以：</font><ol dir="auto">
<li _msttexthash="82390503" _msthash="344">停止 Ollama 服务（或退出扩展）</li>
<li><font _mstmutation="1" _msttexthash="15537717" _msthash="345">删除 的内容</font><code>~\.ollama\models\blobs</code></li>
<li _msttexthash="15271932" _msthash="346">重启 Ollama 服务</li>
</ol>
</li>
</ul>
<hr>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto" _msttexthash="30076319" _msthash="347">为什么选择 Seeker？</h2><a id="user-content-why-seeker" class="anchor" aria-label="永久链接：为什么选择 Seeker？" href="#why-seeker" _mstaria-label="420043" _msthash="348"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<div class="markdown-heading" dir="auto"><h3 tabindex="-1" class="heading-element" dir="auto" _msttexthash="13346632" _msthash="349">现代界面</h3><a id="user-content-modern-interface" class="anchor" aria-label="永久链接： 现代界面" href="#modern-interface" _mstaria-label="624247" _msthash="350"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<ul dir="auto">
<li _msttexthash="65830349" _msthash="351">时尚的侧边栏与自定义图标集成</li>
<li _msttexthash="55526432" _msthash="352">带有消息时间戳的简洁聊天 UI</li>
<li _msttexthash="46533721" _msthash="353">自动调整消息输入的大小</li>
<li _msttexthash="23311236" _msthash="354">VS Code 主题集成</li>
</ul>
<div class="markdown-heading" dir="auto"><h3 tabindex="-1" class="heading-element" dir="auto" _msttexthash="12367316" _msthash="355">模型管理</h3><a id="user-content-model-management" class="anchor" aria-label="永久链接： 模型管理" href="#model-management" _mstaria-label="624676" _msthash="356"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<ul dir="auto">
<li _msttexthash="47169408" _msthash="357">状态栏中的实时下载进度</li>
<li _msttexthash="17615364" _msthash="358">自动型号切换</li>
<li _msttexthash="38014184" _msthash="359">下载大小和进度跟踪</li>
<li _msttexthash="22870991" _msthash="360">自定义模型支持</li>
</ul>
<div class="markdown-heading" dir="auto"><h3 tabindex="-1" class="heading-element" dir="auto" _msttexthash="17008927" _msthash="361">隐私与性能</h3><a id="user-content-privacy--performance" class="anchor" aria-label="永久链接：隐私与性能" href="#privacy--performance" _mstaria-label="983606" _msthash="362"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<ul dir="auto">
<li _msttexthash="36552737" _msthash="363">所有处理均在本地完成</li>
<li _msttexthash="27734902" _msthash="364">无需互联网连接</li>
<li _msttexthash="33820124" _msthash="365">高效的基于流的响应</li>
<li _msttexthash="21798933" _msthash="366">自动资源清理</li>
</ul>
<hr>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto" _msttexthash="9675445" _msthash="367">许可证</h2><a id="user-content-license" class="anchor" aria-label="永久链接：许可证" href="#license" _mstaria-label="331903" _msthash="368"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto" _msttexthash="867198098" _msthash="369">Seeker 根据 MIT 许可证获得许可，允许商业用途、修改和衍生作品。有关详细信息，请参阅 <a href="/s000ik/Seeker-DeepSeek-R1/blob/main/LICENSE" _istranslated="1">LICENSE</a> 文件。个人模型许可证根据您选择的 LLM 适用。</p>
<p dir="auto" _msttexthash="452079576" _msthash="370">DeepSeek-R1 模型同样可用于商业用途和修改，并为 Qwen 和 Llama 衍生模型提供额外的许可信息：</p>
<ul dir="auto">
<li _msttexthash="62585874" _msthash="371"><strong _istranslated="1">Qwen 模型</strong>：基于 Apache 2.0 许可证。</li>
<li _msttexthash="127390536" _msthash="372"><strong _istranslated="1">Llama 模型</strong>：根据 Llama3 系列许可证获得许可。</li>
</ul>
<hr>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto" _msttexthash="6354283" _msthash="373">贡献</h2><a id="user-content-contributing" class="anchor" aria-label="永久链接： 贡献" href="#contributing" _mstaria-label="521066" _msthash="374"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto" _msttexthash="294794357" _msthash="375">欢迎贡献！如果您有想法、错误修复或功能请求，请随时提交 Pull Request 或打开一个 issue。</p>
<hr>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto" _msttexthash="6523322" _msthash="376">确认</h2><a id="user-content-acknowledgments" class="anchor" aria-label="永久链接：致谢" href="#acknowledgments" _mstaria-label="642798" _msthash="377"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<ul dir="auto">
<li _msttexthash="94284294" _msthash="378"><strong _istranslated="1">DeepSeek AI</strong>：用于开发尖端的 DeepSeek-R1 模型。</li>
<li _msttexthash="100463870" _msthash="379"><strong _istranslated="1">Ollama</strong>：用于提供无缝的本地运行时。</li>
<li _msttexthash="67969577" _msthash="380"><strong _istranslated="1">Model Creators</strong> ：用于开源模型。</li>
</ul>
<hr>
<p dir="auto" _msttexthash="212171037" _msthash="381">使用 Seeker 直接在编辑器中使用任何 LLM 体验以隐私为中心的 AI 帮助。</p>
</article></div>
