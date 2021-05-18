import PostListing from '../../components/post-listing';
import { getCount, getIds } from '../../lib/markdown';
import { getPathsFromCount } from '../../lib/paths';
import { getPosts, postsPagination } from '../../lib/posts';
import { PaginationInfo, PaginationOptions, Post } from '../../types';

export function getStaticPaths() {
  const count = getCount('posts');
  const paths = getPathsFromCount(count);

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const pageNumber = parseInt(params.id);

  const count = getCount('posts');
  const posts = getPosts(pageNumber);
  
  const paginationInfo = postsPagination(count, pageNumber);

  return {
    props: {
      posts,
      paginationInfo
    }
  };
}

export default function Home({ posts, paginationInfo } : { posts: Post[], paginationInfo: PaginationInfo[] }) {
  return (
    <PostListing posts={posts} paginationInfo={paginationInfo}></PostListing>
  )
}
