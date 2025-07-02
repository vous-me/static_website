// Node.js 脚本：自动生成 manifest.json
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const manifestPath = path.join(dir, 'manifest.json');

function getCategory(filename) {
  // 取下划线前缀作为分类（如 kimi、gemini、gemin）
  const match = filename.match(/^([a-zA-Z]+)\d?_?/);
  return match ? match[1].toLowerCase() : 'other';
}

function extractTitle(fileContent) {
  // 提取 <title>...</title> 内容
  const match = fileContent.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? match[1].trim() : '';
}

function main() {
  const files = fs.readdirSync(dir)
    .filter(f => f.endsWith('.html') && f !== 'index.html');

  const manifest = files.map(filename => {
    const filePath = path.join(dir, filename);
    const content = fs.readFileSync(filePath, 'utf-8');
    return {
      filename,
      title: extractTitle(content),
      category: getCategory(filename)
    };
  });

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`manifest.json 已生成，包含 ${manifest.length} 个报告。`);
}

main(); 