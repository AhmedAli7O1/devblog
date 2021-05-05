import Layout from '../components/layout';
import { getAuthors } from '../lib/authors';
import { Author } from '../types';
import AuthorCard from '../components/author-card';


export async function getStaticProps() {
  const authors = getAuthors();

  return {
    props: {
      authors
    }
  };
}

export default function Authors(params: { authors: Author[] }) {
  return (
    <Layout>
      <section className="text-center">
        
        <ul className="flex flex-row flex-wrap">
          {params.authors.map((author) => (
            <li key={author.id}>
              <AuthorCard author={author} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
