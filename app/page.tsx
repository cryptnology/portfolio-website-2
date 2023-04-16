import Image from 'next/image';
import Link from 'next/link';
import { developer, lightBulb } from '@/public/images';
import { AnimatedText, Container, CustomLink, HireMe } from '@/components';
import { LinkArrow } from '@/Icons';

export const metadata = {
  title: 'Jamie Anderson | Cryptnology',
  description: 'This is my portfolio.',
};

const Home = () => {
  return (
    <main className="flex items-center text-dark w-full dark:text-light">
      <Container className="flex justify-between items-center w-full pt-0">
        <div className="w-1/2">
          <Image
            className="w-full h-auto"
            src={developer}
            alt="Cryptnology"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
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
              className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light"
              href="/dummy.pdf"
              target="_blank"
              download
            >
              Resume <LinkArrow className="w-6 ml-1" />
            </Link>
            <div>
              <CustomLink
                className="ml-4 text-lg font-medium capitalize text-dark dark:text-light"
                href="mailto:jamie@cryptnology.dev"
                title="Contact"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </Container>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image
          src={lightBulb}
          alt="Cryptnology"
          className="w-full h-auto"
          priority
        />
      </div>
    </main>
  );
};

export default Home;
