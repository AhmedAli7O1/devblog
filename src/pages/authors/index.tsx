import Layout from '../../components/layout';
import { Author } from '../../types';
import AuthorCard from '../../components/author-card';
import { getPaths } from '../../lib/markdown';
import { getAuthor } from '../../lib/authors';


export async function getStaticProps() {
  const authors = getPaths('authors').map(x => {
    return getAuthor(x.params.id);
  });

  return {
    props: {
      authors
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
