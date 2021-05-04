import Image from 'next/image';
import Link from 'next/link';
import Date from '../components/date';


export default function PostCard({ date, category, title, author, author_pic, id }) {
  return (
    <div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600"><Date dateString={date} /></span>
        <a className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">{category}</a>
      </div>
      <div className="mt-2">
        <Link href={`/posts/${id}`}>
          <a className="text-2xl text-gray-700 font-bold hover:text-gray-600">{title}</a>
        </Link>
        <p className="mt-2 text-gray-600">{title}{title}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Link href={`/posts/${id}`}>
          <a className="text-blue-600 hover:underline">Read more</a>
        </Link>
        <div>
          <a className="flex items-center space-x-2" href="#">
            <Image 
              src={author_pic}
              className="rounded-full"
              alt="avatar"
              width={32}
              height={32}
            />
            <h1 className="text-gray-700 font-bold">{author}</h1>
          </a>
        </div>
      </div>
    </div>
  )
}