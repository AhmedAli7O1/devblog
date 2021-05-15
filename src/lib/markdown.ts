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


export function getIds(dataDir: string): string[] {
  const dirPath = path.join(process.cwd(), 'data', dataDir);
  const fileNames = fs.readdirSync(dirPath);
  
  return fileNames.map(fileName => {
    return fileName.replace(/\.md$/, '');
  });
}

export function getPagesCount(dataDir: string) {
  return Math.ceil(getIds(dataDir).length / blogConfig.posts.perPage);
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
