import Image from 'next/image';
import Layout from '../../components/layout';
import { getAuthor, getAuthorsPaths } from '../../lib/authors';
import { getHtml } from '../../lib/markdown';
import { Author, PageParams } from '../../types';


export function getStaticPaths() {
  return {
    paths: getAuthorsPaths(),
    fallback: false
  }
}

export function getStaticProps({ params }: { params: PageParams }) {

  const author = getAuthor(params.id);
  const html = getHtml(author.content);

  return {
    props: {
      author,
      html
    }
  }
}

export default function AuthorPage({ author, html }: { author: Author, html: string }) {
  return (
    <Layout>

      <div className="bg-white min-h-screen w-full md:w-9/12 md:max-w-4xl">
        <div className="h-48 relative">
          <Image 
            src={author.cover}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

          {/* <div className="px-6 md:px-32 flex justify-between lg:flex-row flex-col"> */}
            <div className="flex lg:flex-row flex-col px-12 md:px32 justify-between border-b">
              <div className="w-36 h-36 bg-cover bg-black rounded-full bg-center absolute transform -translate-y-1/2 ring-4 ring-white">
                <Image 
                  priority
                  className="rounded-full"
                  src={author.avatar}
                  width={144}
                  height={144}
                />
              </div>
              <p className="lg:ml-36 mt-16 lg:mt-0 pl-4 text-3xl font-semibold py-6">
                {author.name}
              </p>
            </div>
            <div className="p-12 mt-8 prose md:max-w-none" dangerouslySetInnerHTML={{ __html: html }} />

          {/* </div> */}
          
      </div>

    </Layout>
  )
}