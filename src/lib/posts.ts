import { PaginationInfo, Post, PostMetadata } from '../types';
import { getAuthor } from './authors';
import { getMetadata, getIds, getCount } from './markdown';
import blogConfig from '../../data/config';
import { paginate } from './pagination';
import { getPathsFromCount } from './paths';


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

export function getPostsPage(page: number | string): { posts: Post[], pagination: PaginationInfo } {
  if (typeof page === 'string') {
    page = parseInt(page);
  }

  const to = page * blogConfig.posts.pagination.perPage;
  const from = to - blogConfig.posts.pagination.perPage;
  const ids = getIds('posts');

  const posts = ids
    .map(id => getPost(id))
    .sort((a, b) => {
      return +new Date(b.date) - +new Date(a.date);
    })
    .slice(from, to);

  const pagination = paginate({
    ...blogConfig.posts.pagination,
    indexPath: '/',
    pathPrefix: '/pages/',
    total: ids.length,
    selected: page
  });

  return {
    posts,
    pagination
  };
}

export function getPagesPaths() {
  const paths = getPathsFromCount(getCount('posts'))

  if (blogConfig.posts.pagination.firstPageIndex) {
    paths.shift();
  }

  return paths;
}

export function getPostsPaths() {
  return getIds('posts').map(id => ({ params: { id } }));
}
