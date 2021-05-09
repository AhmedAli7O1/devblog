import Layout from '../components/layout';
import PostCard from '../components/post-card';
import { getPaths } from '../lib/markdown';
import { getPost } from '../lib/posts';
import { Post } from '../types';


export async function getStaticProps() {
  const posts = getPaths('posts').map(x => {
    return getPost(x.params.id);
  }); 

  return {
    props: {
      posts
    }
  };
}

export default function Home({ posts } : { posts: Post[] }) {
  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {posts.map((post) => (
            <PostCard key={post.id} post={post} />
        ))}
      </section>
    </Layout>
  )
}
