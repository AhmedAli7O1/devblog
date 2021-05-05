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
      <section className="text-center">
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className="grid grid-cols-3 gap-4">
        {allPostsData.map(({ id, date, title, author, description }) => (
          <div>
            <PostCard
              id={id}
              title={title}
              date={date}
              author={getAuthor(author)}
              category="Uncategorized"
              description={description}
            />
          </div>
        ))}
      </section>
    </Layout>
  )
}
