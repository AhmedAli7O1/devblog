import Image from 'next/image';
import Link from 'next/link';
import { AuthorCardParams } from '../types';
import SocialIcons from './social-icons';


export default function AuthorCard(params: AuthorCardParams) {
  return (
    <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
      <Image
        src={params.author.cover}
        className="w-full"
        height={144}
        width={320}
        alt="Author cover photo"
      />
      <div className="flex justify-center -mt-20">
        <Image
          src={params.author.avatar}
          className="rounded-full border-solid border-white border-2 mt-3"
          height={144}
          width={144}
          alt="Author profile picture"
        />
      </div>
      <div className="text-center px-3 pb-6 pt-2">
        <h3 className="text-black text-lg bold">
          <Link
            href={`/authors/${params.author.id}`}
          >
            <a>{params.author.name}</a>
          </Link>
        </h3>
        <p className="mt-2 py-1 font-light text-grey-dark line-clamp-7 h-44">{params.author.bio}</p>
      </div>
      <div className="flex justify-center pb-4 pt-4 border-t">
        <SocialIcons social={params.author.social} />
      </div>
    </div>
  )
}