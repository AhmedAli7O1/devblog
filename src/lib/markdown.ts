import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import recommended from 'remark-preset-lint-recommended';
import headings from 'remark-autolink-headings';
import slug from 'remark-slug';
import remarkPrism from 'remark-prism';
import { MarkdownMetadataBase, PagePath } from '../types';
import blogConfig from '../../data/config';


function getFiles(dataDir: string) {
  const dirPath = path.join(process.cwd(), 'data', dataDir);
  return fs.readdirSync(dirPath);
}

export function getCount(dataDir: string) {
  return getFiles(dataDir).length;
}

export function getIds(dataDir: string): string[] {
  const fileNames = getFiles(dataDir);
  
  return fileNames.map(fileName => {
    return fileName.replace(/\.md$/, '');
  });
}

export function loadFile(fullPath: string) {
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents);
}

export function getMetadata<T extends MarkdownMetadataBase>(dataDir: string, id: string): T {
  const fullPath = path.join(process.cwd(), 'data', dataDir, id + '.md');
  const matterResult = loadFile(fullPath);

  return {
    content: matterResult.content,
    ...matterResult.data
  } as T;
}


// export function getMetadata<T extends MarkdownMetadataBase>(dataDir: string, ids: string[]): T[] {
//   const result: T[] = [];
  
//   ids.forEach(id => {
//     const fullPath = path.join(process.cwd(), 'data', dataDir, id + '.md');
//     const matterResult = loadFile(fullPath);

//     result.push({
//       id,
//       content: matterResult.content,
//       ...matterResult.data
//     } as T);
//   });

//   return result;
// }

export function getHtml(markdown: string) {
  return remark()
    .use(recommended)
    
    .use(slug)
    .use(headings, { behavior: 'wrap' })
    .use(remarkPrism)

    .use(html)
    .processSync(markdown)
    .toString();
}
