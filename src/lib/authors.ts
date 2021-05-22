import { Author, AuthorMetadata } from '../types';
import { getCount, getHtml, getIds, getMetadata } from './markdown';
import { getPathsFromCount } from './paths';


export function getAuthor(id: string): Author {
  const authorMetadata = getMetadata<AuthorMetadata>('authors', id);
  
  return {
    id,
    name: authorMetadata.name,
    bio: authorMetadata.bio,
    avatar: authorMetadata.avatar,
    cover: authorMetadata.cover,
    content: authorMetadata.content,
    social: {
      github: authorMetadata.github,
      linkedIn: authorMetadata.linkedIn
    }
  };
}

export function getAuthors(): Author[] {
  const ids = getIds('authors');

  return ids
    .map(id => getAuthor(id));
}


export function getAuthorsPaths() {
  return getIds('authors').map(id => ({ params: { id } }));
}