import PostListing from '../../components/post-listing';
import { getPagesPaths, getPostsPage } from '../../lib/posts';
import { PaginationInfo, Post } from '../../types';

export function getStaticPaths() {
  return {
    paths: getPagesPaths(),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  return {
    props: getPostsPage(params.id)
  };
}

export default function Home({ posts, pagination } : { posts: Post[], pagination: PaginationInfo }) {
  return (
    <PostListing posts={posts} pagination={pagination}></PostListing>
  )
}
