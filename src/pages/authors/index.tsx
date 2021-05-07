import Layout from '../../components/layout';
import { getAuthors } from '../../lib/authors';
import { Author } from '../../types';
import AuthorCard from '../../components/author-card';


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
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        
          {params.authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}

      </section>
    </Layout>
  )
}
