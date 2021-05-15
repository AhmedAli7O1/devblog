import Layout from '../../components/layout';
import Date from '../../components/date';
import {
  CalendarIcon,
  PencilIcon,
  UserIcon
} from '@heroicons/react/solid'
import Image from 'next/image';
import { getHtml, getIds } from '../../lib/markdown';
import { PageParams, Post } from '../../types';
import { getPost } from '../../lib/posts';
import Link from 'next/link';
import blogConfig from '../../../data/config';


export function getStaticPaths() {
  return {
    paths: getIds('posts').map(id => ({ params: { id } })),
    fallback: false
  }
}

export function getStaticProps({ params }: { params: PageParams }) {
  const post = getPost(params.id);
  const html = getHtml(post.content);
  const editUrl = blogConfig.editUrl ? `${blogConfig.editUrl}/data/posts/${post.id}.md` : null;

  return {
    props: {
      post,
      html,
      editUrl
    }
  }
}

export default function PostPage({ post, html, editUrl }: { post: Post, html: string, editUrl?: string }) {
  return (
    <Layout>
      <article className="w-full md:w-9/12 md:max-w-4xl bg-white min-h-screen p-12">
        <h2 className="whitespace-normal text-2xl font-bold leading-7 text-gray-900 sm:text-3xl min-w-0 md:w-9/12">{post.title}</h2>

        <div className="mt-8 flex flex-row flex-wrap space-x-6">
          <div className="flex justify-center">
            <Link href={`/authors/${post.author.id}`}>
            <a>
              <Image
                src={post.author.avatar}
                className="rounded-full border-solid border-white border-2 hover:opacity-80"
                height={60}
                width={60}
                alt="Author profile picture"
              />
            </a>
            </Link>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row text-sm text-gray-500 mt-2">
              <UserIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              <Link href={`/authors/${post.author.id}`}>
                <a className="hover:underline">{post.author.name}</a>
              </Link>
            </div>

            <div className="flex flex-row flex-wrap space-x-6">

              <div className="mt-2 flex items-center text-sm text-gray-500">
                <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <Date dateString={post.date} />
              </div>
              {editUrl && (
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <PencilIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <Link href={editUrl}>
                    <a className="hover:underline">Suggest Edit</a>
                  </Link>
                </div>
              )}
            </div>

          </div>
        </div>
        <div className="mt-8 prose md:max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
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