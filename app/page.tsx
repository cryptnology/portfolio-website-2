import Image from 'next/image';
import Link from 'next/link';
import { developer } from '@/public/images';
import { AnimatedText } from '@/components';
import { LinkArrow } from '@/Icons';

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full">
      <div className="flex justify-between items-center w-full pt-0">
        <div className="w-1/2">
          <Image className="w-full h-auto" src={developer} alt="Cryptnology" />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center">
          <AnimatedText
            className="!text-6xl !text-left"
            text="Turning Vision Into Reality With Code And Design."
          />
          <p className="my-4 text-base font-medium">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex items-center self-start mt-2">
            <Link
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
              href="/dummy.pdf"
              target="_blank"
              download
            >
              Resume <LinkArrow className="w-6 ml-1" />
            </Link>
            <Link
              className="ml-4 text-lg font-medium capitalize text-dark underline hover:no-underline"
              href="mailto:jamie@cryptnology.dev"
              target="_blank"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
