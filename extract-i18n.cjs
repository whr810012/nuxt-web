const fs = require('fs');
const path = require('path');

const vueDirs = [
  path.join(__dirname, 'app', 'components'),
  path.join(__dirname, 'app', 'pages')
];
const localeDir = path.join(__dirname, 'app', 'locales');
const enJsonPath = path.join(localeDir, 'en.json');
const zhJsonPath = path.join(localeDir, 'zh.json');

function walk(dir, ext = '.vue') {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath, ext));
    } else if (file.endsWith(ext)) {
      results.push(filePath);
    }
  });
  return results;
}

function extractTextFromVue(content) {
  // 简单正则提取模板中的中文或英文静态文本（不含变量表达式）
  const templateMatch = content.match(/<template>[\s\S]*?<\/template>/);
  let texts = [];
  if (templateMatch) {
    // 匹配标签之间的纯文本
    const template = templateMatch[0];
    const textMatches = template.match(/>([^<>{}\$\n\r\t]+)</g);
    if (textMatches) {
      texts = texts.concat(textMatches.map(t => t.slice(1, -1).trim()).filter(Boolean));
    }
  }
  // 可扩展：提取 <script> 中的静态文本
  return texts;
}

function replaceTextWithT(content, textKeyMap) {
  // 只替换模板部分
  return content.replace(/<template>[\s\S]*?<\/template>/, tpl => {
    let replaced = tpl;
    Object.entries(textKeyMap).forEach(([txt, key]) => {
      // 只替换完全匹配的文本
      replaced = replaced.replace(new RegExp(`>(\s*)${txt}(\s*)<`, 'g'), `>{{$t('${key}')}}<`);
    });
    return replaced;
  });
}

function main() {
  let enJson = {};
  let zhJson = {};
  if (fs.existsSync(enJsonPath)) enJson = JSON.parse(fs.readFileSync(enJsonPath, 'utf8'));
  if (fs.existsSync(zhJsonPath)) zhJson = JSON.parse(fs.readFileSync(zhJsonPath, 'utf8'));

  vueDirs.forEach(dir => {
    const files = walk(dir);
    files.forEach(file => {
      const relPath = path.relative(__dirname, file).replace(/\\/g, '/');
      const content = fs.readFileSync(file, 'utf8');
      const texts = extractTextFromVue(content);
      if (!texts.length) return;
      const textKeyMap = {};
      texts.forEach(txt => {
        const key = `${relPath}:${txt}`;
        textKeyMap[txt] = key;
        if (!enJson[key]) enJson[key] = txt;
        if (!zhJson[key]) zhJson[key] = txt;
      });
      const newContent = replaceTextWithT(content, textKeyMap);
      fs.writeFileSync(file, newContent, 'utf8');
    });
  });
  fs.writeFileSync(enJsonPath, JSON.stringify(enJson, null, 2), 'utf8');
  fs.writeFileSync(zhJsonPath, JSON.stringify(zhJson, null, 2), 'utf8');
  console.log('i18n extraction complete.');
}

if (require.main === module) {
  main();
}