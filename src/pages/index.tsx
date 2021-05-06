import Head from 'next/head';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import PostCard from '../components/post-card';
import { getAuthor } from '../lib/authors';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {allPostsData.map(({ id, date, title, author, description }) => (
            <PostCard
              id={id}
              title={title}
              date={date}
              author={getAuthor(author)}
              category="Uncategorized"
              description={description}
            />
        ))}
      </section>
    </Layout>
  )
}
