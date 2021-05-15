import PostListing from '../../components/post-listing';
import { getPagesCount } from '../../lib/markdown';
import { getPaginationPaths } from '../../lib/paths';
import { getPosts } from '../../lib/posts';
import { PaginationOptions, Post } from '../../types';

export function getStaticPaths() {
  const pagesCount = getPagesCount('posts');
  const paths = getPaginationPaths(pagesCount);

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const posts = getPosts(params.id);
  
  const pagination: PaginationOptions = {
    pages: [
      { label: '1', url: '/pages/1' },
      { label: '2', url: '/pages/2' },
      { label: '3', url: '/pages/3' },
      { label: '4', url: '/pages/4' },
      { label: '5', url: '/pages/5' },
    ],
    prevUrl: '/pages/1',
    nextUrl: '/pages/3'
  };

  return {
    props: {
      posts,
      pagination
    }
  };
}

export default function Home({ posts, pagination } : { posts: Post[], pagination: PaginationOptions }) {
  return (
    <PostListing posts={posts} pagination={pagination}></PostListing>
  )
}
