# 大模型深度研究报告静态网站

本项目为"大模型深度研究报告"系列的静态网站，收录了 Kimi、Gemini 等系列的深度调研与分析报告，涵盖大模型、AI、算法、社会科学等多个领域。所有报告均以交互式 HTML 形式呈现，支持可视化与动态目录。

## 目录结构

- `index.html`：网站首页，动态展示所有报告的目录。
- `manifest.json`：报告元数据清单，由脚本自动生成，供首页动态加载。
- `generate_manifest.js`：Node.js 脚本，用于自动扫描目录下的 HTML 报告并生成 manifest.json。
- `*.html`：各类交互式报告文件，按系列（如 kimi、gemini）命名。

## 主要功能

- **动态目录**：首页自动读取 `manifest.json`，按系列分类展示所有报告。
- **交互式报告**：每份报告均为独立 HTML 文件，内容丰富，支持交互与可视化。
- **自动化管理**：通过脚本一键生成/更新报告清单，无需手动维护目录。

## 如何自动生成 manifest.json

1. 确保已安装 [Node.js](https://nodejs.org/)。
2. 在本目录下运行：

   ```bash
   node generate_manifest.js
   ```

   该脚本会自动扫描所有 HTML 报告文件（排除 index.html），提取标题和系列分类，生成最新的 `manifest.json`。

## 本地预览

直接用浏览器打开 `index.html` 即可浏览全部报告及动态目录。

如需本地服务器（推荐，避免部分浏览器跨域限制）：

```bash
# 使用 Python 3
python -m http.server 8080
# 或使用 Node.js 的 http-server
npx http-server . -p 8080
```

然后访问 [http://localhost:8080/](http://localhost:8080/)。

## 依赖说明

- 前端样式：使用 [Tailwind CSS CDN](https://cdn.tailwindcss.com)。
- 字体：Google Fonts Noto Sans SC。
- 无需后端依赖，纯静态部署。

## 版权声明

- 所有报告内容版权归原作者所有，仅供学习交流使用，禁止商业用途。
- 商务合作请联系：tian7uio@qq.com 