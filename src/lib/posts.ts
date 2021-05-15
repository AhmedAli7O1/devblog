import { Post, PostMetadata } from '../types';
import { getAuthor } from './authors';
import { getMetadata, getIds } from './markdown';
import blogConfig from '../../data/config';


export function getPost(id: string): Post {
  const postMetadata = getMetadata<PostMetadata>('posts', id);
  const author = getAuthor(postMetadata.authorId);

  return {
    id,
    author,
    date: postMetadata.date,
    title: postMetadata.title,
    description: postMetadata.description,
    category: postMetadata.category,
    content: postMetadata.content
  };
}

export function getPosts(page: number): Post[] {
  const to = page * blogConfig.posts.perPage;
  const from = to - blogConfig.posts.perPage;

  return getIds('posts')
    .map(id => getPost(id))
    .sort((a, b) => {
      return +new Date(b.date) - +new Date(a.date);
    })
    .slice(from, to);
}