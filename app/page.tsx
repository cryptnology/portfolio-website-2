import Image from 'next/image';
import Link from 'next/link';
import { developer, lightBulb } from '@/public/images';
import {
  AnimatedText,
  Container,
  CustomLink,
  HireMe,
  TransitionEffect,
} from '@/components';
import { LinkArrow } from '@/Icons';

export const metadata = {
  title: 'Jamie Anderson | Cryptnology',
  description: 'This is my portfolio.',
};

const Home = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full dark:text-light">
        <Container className="flex justify-between items-center w-full py-12 flex-col lg:flex-row">
          <div className="w-full md:w-[80%] lg:w-1/2">
            <Image
              className="w-full h-auto"
              src={developer}
              alt="Cryptnology"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center self-center lg:text-center">
            <AnimatedText
              className="!text-3xl !text-center lg:!text-left md:!text-4xl lg:!text-5xl xl:!text-6xl"
              text="Turning Vision Into Reality With Code And Design."
            />
            <p className="my-4 text-xs md:text-sm lg:text-base font-medium text-center lg:text-left">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center lg:self-start mt-2 self-center">
              <Link
                className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2 px-4 rounded-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2.5 md:px-6 text-base md:text-lg"
                href="/dummy.pdf"
                target="_blank"
                download
              >
                Resume <LinkArrow className=" w-5 md:w-6 ml-1" />
              </Link>
              <div>
                <CustomLink
                  className="ml-4 text-base md:text-lg font-medium capitalize text-dark dark:text-light"
                  href="mailto:jamie@cryptnology.dev"
                  title="Contact"
                  target="_blank"
                  underline
                />
              </div>
            </div>
          </div>
        </Container>
        <HireMe />
        <div className="fixed right-8 bottom-8 lg:inline-block w-24 hidden">
          <Image
            src={lightBulb}
            alt="Cryptnology"
            className="w-full h-auto"
            priority
          />
        </div>
      </main>
    </>
  );
};

export default Home;
