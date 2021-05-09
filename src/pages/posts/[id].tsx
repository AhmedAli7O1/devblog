import Layout from '../../components/layout';
import Date from '../../components/date';
import {
  CalendarIcon,
  PencilIcon,
  UserIcon
} from '@heroicons/react/solid'
import Image from 'next/image';
import { getPaths } from '../../lib/markdown';
import { PageParams, Post } from '../../types';
import { getPost } from '../../lib/posts';


export function getStaticPaths() {
  return {
    paths: getPaths('posts'),
    fallback: false
  }
}

export function getStaticProps({ params }: { params: PageParams }) {
  const post = getPost(params.id);

  return {
    props: {
      post
    }
  }
}

export default function PostPage({ post }: { post: Post }) {
  return (
    <Layout>
      <article className="w-full md:w-9/12 md:max-w-4xl">
        <h2 className="whitespace-normal text-2xl font-bold leading-7 text-gray-900 sm:text-3xl min-w-0 md:w-9/12">{post.title}</h2>

        {/* Icons */}
        <div className="mt-8 flex flex-row flex-wrap space-x-6">
          <div className="flex justify-center">
            <Image
              src="/images/authors/ahmedali7o1/profile.jpg"
              className="rounded-full border-solid border-white border-2"
              height={60}
              width={60}
              alt="Author profile picture"
            />
          </div>
          
          <div className="flex flex-col">
            <div className="flex flex-row text-sm text-gray-500 mt-2">
              <UserIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                Ahmed Ali
            </div>
          
            <div className="flex flex-row flex-wrap space-x-6">

              <div className="mt-2 flex items-center text-sm text-gray-500">
                <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <Date dateString={post.date} />
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <PencilIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                Suggest Edit
              </div>

            </div>
          </div>

        </div>

        {/* <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
              Edit
            </button>
          </span>
        </div> */}

        <div className="mt-8 prose md:max-w-none" dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>
    </Layout>
  )



  // return (
  //   <Layout>
  //     <Head>
  //       <title>{postData.title}</title>
  //     </Head>
  //     <article>
  //       <h1 className={utilStyles.headingXl}>{postData.title}</h1>
  //       <div className={utilStyles.lightText}>
  //         <Date dateString={postData.date} />
  //       </div>
  //       <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  //     </article>
  //   </Layout>
  // )
}