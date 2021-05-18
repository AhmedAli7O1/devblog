import PostListing from '../components/post-listing';
import { getCount } from '../lib/markdown';
import { getPosts, postsPagination } from '../lib/posts';
import { PaginationInfo, Post } from '../types';


export async function getStaticProps() {
  const count = getCount('posts');
  const posts = getPosts(1);

  const paginationInfo: PaginationInfo[] = postsPagination(count, 1);

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
