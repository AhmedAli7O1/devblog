import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { Fragment } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <article className="flex flex-col">
        <h2 className="whitespace-normal text-2xl font-bold leading-7 text-gray-900 sm:text-3xl min-w-0 max-w-4xl">{postData.title}</h2>

        {/* Icons */}          
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            <Date dateString={postData.date} />
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

        { /* https://github.com/tailwindlabs/tailwindcss-typography */ }

        <div className="max-w-4xl mt-5 prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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