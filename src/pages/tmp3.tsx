import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import blogConfig from '../../data/config';
import SocialIcons from '../components/social-icons';
import { transformMdURL } from '../lib/utils';


export default function Tmp2() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={blogConfig.description}
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            blogConfig.title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={blogConfig.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{blogConfig.title}</title>
        {/* Add this to Markdown pages only */}
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
          rel="stylesheet"
        />
      </Head>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              priority
              src="/images/logo.svg"
              width={40}
              height={40}
            />
            <span className="ml-3 text-xl">{blogConfig.title}</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">Second Link</a>
            </Link>
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">Third Link</a>
            </Link>
            <Link href="/authors">
              <a className="mr-5 hover:text-gray-900">Authors</a>
            </Link>
          </nav>
          {/* <a href={blogConfig.editUrl} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a> */}
        </div>
      </header>

      <main className="min-h-screen w-full"></main>

      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {
              blogConfig.footer.links.categories.map(category => (
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{category.name}</h2>
                  <nav className="list-none mb-10">
                    {
                      category.items.map(item => (
                        <li>
                          <Link href={item.url}>
                            <a className="text-gray-600 hover:text-gray-800">{item.label}</a>
                          </Link>
                        </li>
                      ))
                    }
                  </nav>
                </div>
              ))
            }
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
                  <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-np-checked={1} />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
          <br className="lg:block hidden" />waistcoat green juice
        </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image
                src="/images/logo.svg"
                width={40}
                height={40}
              />
              <span className="ml-3 text-xl">Tailblocks</span>
            </a>
            <p
              className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4"
              dangerouslySetInnerHTML={{
                __html: transformMdURL(
                  blogConfig.footer.copyright,
                  (label, href) => `<a href="${href}" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">${label}</a>`)
              }}></p>
            <SocialIcons social={blogConfig.social}></SocialIcons>
          </div>
        </div>
      </footer>
    </>
  )
}