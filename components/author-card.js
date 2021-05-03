import Image from 'next/image';
import SocialIcons from './social-icons';


export default function AuthorCard() {
  return (
    <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
      <Image
        src="/images/cover.jpg"
        className="w-full"
        height={144}
        width={320}
        alt="Author cover photo"
      />
      <div className="flex justify-center -mt-8">
        <Image
          src="/images/profile.jpg"
          className="rounded-full border-solid border-white border-2 mt-3"
          height={144}
          width={144}
          alt="Author profile picture"
        />
      </div>
      <div className="text-center px-3 pb-6 pt-2">
        <h3 className="text-black text-lg bold">Ahmed Ali</h3>
        <p className="mt-2 font-light text-grey-dark">I'm a Self-taught Software developer. Programming and coding are my hoppy since 2003. later 2008, I started my professional career as a freelance web developer. And then, in 2016, I started my first full-time job as a Backend web developer.</p>
      </div>
      <div className="flex justify-center pb-4 pt-4 border-t">
        <SocialIcons />
      </div>
    </div>
  )
}