import Layout from '../../components/layout';
import { Author } from '../../types';
import AuthorCard from '../../components/author-card';
import { getAuthor, getAuthors } from '../../lib/authors';


export async function getStaticProps() {
  return {
    props: {
      authors: getAuthors()
    }
  };
}

export default function Authors({ authors }: { authors: Author[] }) {
  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}

      </section>
    </Layout>
  )
}
