import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import AuthorCard from './author-card';

const name = 'Ahmed Ali';
export const siteTitle = 'Next.js Sample Website';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Open Source', href: '#', current: false },
  { name: 'Backend', href: '#', current: false },
  { name: 'Security', href: '#', current: false },
  { name: 'About', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="images/logo.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="/images/logo-text.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  { /* Here goes the social icons */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {
        home ? (
          <main className="px-4 py-6 flex flex-row flex-wrap">
            <div className="w-full md:w-9/12">{children}</div>
            <div className="w-full md:w-3/12">
              <AuthorCard />
            </div>
          </main>
        ) : (
          <main className="px-12 py-6 flex">
            <div className="w-full">{children}</div>
          </main>
        )
      }
      <footer className="bg-gray-100 sm:py-6">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/2 xl:w-1/3">
              <h5 className="text-xl font-bold mb-6">Features</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Cool stuff</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Random feature</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team feature</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Stuff for developers</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another one</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Last time</a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/2 xl:w-1/3 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6">Resources</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource name</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another resource</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Final resource</a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/2 xl:w-1/3 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">About</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:flex justify-center sm:flex-wrap sm:-mx-4 sm:mt-6 sm:pt-6 border-t">
            <p>
              Copyright ©
              {" "}
              <Link href="https://github.com/ahmedali7o1"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Ahmed Ali</a></Link>
              {". "}
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}




  //     {/* <header className="styles.header">
  //       {home ? (
  //         <>
  //           <Image 
  //             priority
  //             src="/images/profile.jpg"
  //             className={utilStyles.borderCircle}
  //             height={144}
  //             width={144}
  //             alt={name}
  //           />
  //           <h1 className={utilStyles.heading2Xl}>{name}</h1>
  //         </>
  //       ) : (
  //         <>
  //           <Link href="/">
  //             <a>
  //               <Image 
  //                 src="/images/profile.jpg"
  //                 className={utilStyles.borderCircle}
  //                 height={108}
  //                 width={108}
  //                 alt={name}
  //               />
  //             </a>
  //           </Link>
  //           <h2 className={utilStyles.headingLg}>
  //             <Link href="/">
  //               <a className={utilStyles.colorInherit}>{name}</a>
  //             </Link>
  //           </h2>
  //         </>
  //       )}
  //     </header> */}
  // {/* <main>{children}</main> */ }
  // {
  //   !home && (
  //     <div className={styles.backToHome}>
  //       <Link href="/">
  //         <a>← Back to home</a>
  //       </Link>
  //     </div>
  //   )
  // }
