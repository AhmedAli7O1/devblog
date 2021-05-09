import { Post, PostMetadata } from '../types';
import { getAuthor } from './authors';
import { getHtml, getMetadata } from './markdown';


export function getPost(id: string): Post {
  const postMetadata = getMetadata<PostMetadata>('posts', id);
  const htmlContent = getHtml(postMetadata.content);
  const author = getAuthor(postMetadata.author);

  return {
    id,
    author,
    body: htmlContent,
    title: postMetadata.title,
    description: postMetadata.description,
    date: postMetadata.date,
    category: postMetadata.category
  };
}