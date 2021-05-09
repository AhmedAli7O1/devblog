import { Author, AuthorMetadata } from '../types';
import { getHtml, getMetadata } from './markdown';


export function getAuthor(id: string): Author {
  const authorMetadata = getMetadata<AuthorMetadata>('authors', id);
  const htmlContent = getHtml(authorMetadata.content);
  
  return {
    id,
    name: authorMetadata.name,
    bio: authorMetadata.bio,
    avatar: authorMetadata.avatar,
    cover: authorMetadata.cover,
    body: htmlContent,
    social: {
      github: authorMetadata.github,
      linkedIn: authorMetadata.linkedIn
    }
  };
}