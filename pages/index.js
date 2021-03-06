import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import PostCard from '../components/post-card';


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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-center">
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section>
        <h2>Blog</h2>
        
        <ul className="flex flex-col">
          {allPostsData.map(({ id, date, title, author, author_pic }) => (
            <li key={id}>
              <PostCard 
                id={id}
                title={title} 
                date={date} 
                author={author} 
                author_pic={author_pic} 
                category="Uncategorized"
              />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
