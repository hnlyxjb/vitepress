import fs from 'fs';
import path from 'path';

// 提取 Markdown 文件的一级标题，如果没有则返回文件名
function extractTitle(filePath, fallbackFileName) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/^#\s+(.*)/); // 匹配一级标题 (开头是 `#`)
  return match ? match[1] : fallbackFileName; // 没有标题时使用文件名
}

// 动态生成单个文件夹的侧边栏
function getSidebarForFolder(folderPath, basePath) {
  const files = fs
    .readdirSync(folderPath)
    .filter((file) => file.endsWith('.md') && !file.startsWith('index')); // 忽略 index.md

  return files.map((file) => {
    const filePath = path.join(folderPath, file);
    const fileName = file.replace(/\.md$/, ''); // 去掉 .md 扩展名
    const title = extractTitle(filePath, fileName); // 优先使用一级标题，若无则使用文件名
    return {
      text: title,
      link: `${basePath}/${fileName}`,
    };
  });
}

// 主函数：按路径生成不同模块的侧边栏
export function getSidebar() {
  const docsDir = path.resolve(__dirname, '../../'); // docs 文件夹路径
  const folders = fs
    .readdirSync(docsDir)
    .filter((folder) => {
      const folderPath = path.join(docsDir, folder);
      return (
        fs.statSync(folderPath).isDirectory() &&
        !folder.startsWith('.') && // 忽略隐藏文件夹
        folder !== 'public'        // 忽略 public 文件夹
      );
    });

  const sidebar = {};

  const sidebarCache = {};

  for (const folder of folders) {
    const folderPath = path.join(docsDir, folder);
    if (!sidebarCache[folderPath]) {
      sidebarCache[folderPath] = getSidebarForFolder(folderPath, `/${folder}`);
    }
    sidebar[`/${folder}/`] = [
      {
        text: folder,
        collapsible: true,
        items: sidebarCache[folderPath],
      },
    ];
  }

  return sidebar;
}
