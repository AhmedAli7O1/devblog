import Image from 'next/image';
import Layout from '../../components/layout';
import { getAuthorsIds, getAuthor } from '../../lib/authors';
import { Author } from '../../types';


export async function getStaticPaths() {
  const authorsIds = getAuthorsIds();

  return {
    paths: authorsIds.map(authorId => {
      return {
        params: { id: authorId }
      };
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  const authorInfo = getAuthor(params.id);

  return {
    props: {
      authorInfo: authorInfo
    }
  }
}

export default function AuthorPage(params: { authorInfo: Author }) {
  return (
    <Layout>

      <div className="bg-white h-72 w-full md:w-9/12 md:max-w-4xl">
        {/* <div className="h-48 w-full bg-cover bg-black" style={{backgroundImage: 'url(/images/authors/ahmedali7o1/cover.jpg)'}}></div> */}
        
        <div className="h-48 relative">
          <Image 
            src="/images/authors/ahmedali7o1/cover.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

          <div className="px-6 md:px-32 flex justify-between lg:flex-row flex-col">
            <div className="flex lg:flex-row flex-col">
              <div className="w-36 h-36 bg-cover bg-black rounded-full bg-center absolute transform -translate-y-1/2 ring-4 ring-white">
                <Image 
                  priority
                  className="rounded-full"
                  src="/images/authors/ahmedali7o1/profile.jpg"
                  width={144}
                  height={144}
                />
              </div>
              <p className="lg:ml-36 mt-16 lg:mt-0 pl-4 text-3xl font-semibold py-5">
                Ahmed Ali
              </p>
            </div>
            
          </div>
      </div>

    </Layout>
  )
}