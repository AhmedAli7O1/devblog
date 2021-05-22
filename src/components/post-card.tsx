import Image from 'next/image';
import Link from 'next/link';
import Date from '../components/date';
import { Post } from '../types';


export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="max-w-md px-10 py-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600"><Date dateString={post.date} /></span>
        <a className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">{post.category}</a>
      </div>
      <div className="flex flex-col mt-2 h-32 md:h-44">
        <Link href={`/${post.id}`}>
          <a className="line-clamp-2 text-lg md:text-xl lg:text-2xl text-gray-700 font-bold hover:text-gray-600">{post.title}</a>
        </Link>
        <p className="line-clamp-2 md:line-clamp-4 mt-2 text-gray-600">{post.description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Link href={`/${post.id}`}>
          <a className="text-blue-600 hover:underline">Read more</a>
        </Link>
        <div>
          <a className="flex items-center space-x-2" href="#">
            <Image 
              src={post.author.avatar}
              className="rounded-full"
              alt="avatar"
              width={32}
              height={32}
            />
            <h1 className="text-gray-700 font-bold">{post.author.name}</h1>
          </a>
        </div>
      </div>
    </div>
  )
}