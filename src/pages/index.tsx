import Layout from '../components/layout';
import PostCard from '../components/post-card';
import PostListing from '../components/post-listing';
import { getPost, getPosts } from '../lib/posts';
import { PaginationOptions, Post } from '../types';


export async function getStaticProps() {
  const posts = getPosts(1);
  const pagination: PaginationOptions = {
    pages: [
      { label: '1', url: '/pages/1' },
      { label: '2', url: '/pages/2' },
      { label: '3', url: '/pages/3' },
      { label: '...' },
      { label: '5', url: '/pages/5', current: true },
      { label: '6', url: '/pages/6' },
      { label: '7', url: '/pages/7' },
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
