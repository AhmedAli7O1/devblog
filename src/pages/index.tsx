import PostListing from '../components/post-listing';
import { getPostsPage } from '../lib/posts';
import { PaginationInfo, Post } from '../types';


export async function getStaticProps() {
  return {
    props: getPostsPage(1)
  };
}

export default function Home({ posts, pagination } : { posts: Post[], pagination: PaginationInfo[] }) {
  return (
    <PostListing posts={posts} pagination={pagination}></PostListing>
  )
}
