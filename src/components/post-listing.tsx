import { PaginationInfo, Post } from '../types';
import Layout from './layout';
import Pagination from './pagination';
import PostCard from './post-card';

export default function PostListing({ posts, pagination } : { posts: Post[], pagination: PaginationInfo }) {
  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
      <section className="relative mt-12">
        {pagination.pages.length > 0 && (
          <Pagination options={pagination}></Pagination>
        )}
      </section>
    </Layout>
  );
}