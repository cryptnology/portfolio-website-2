import Link from 'next/link';
import {
  AnimatedText,
  Container,
  CustomLink,
  EarthCanvas,
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
      <main className="mt-24 mb-16 flex items-center text-dark w-full dark:text-light">
        <Container className="lg:grid lg:grid-cols-2 pb-8 md:pb-10 lg:pb-0 lg:py-8 2xl:py-0 w-full">
          <div className="cursor-grab active:cursor-grabbing z-0 col-span-1 items-start h-[450px] md:h-[680px] lg:h-[510px] xl:h-[580px] 2xl:h-[620px]">
            <EarthCanvas />
          </div>
          <div className="w-full flex flex-col items-center self-center lg:text-center col-span-1 lg:pl-2 lg:pr-5 xl:pr-[4rem] 2xl:pr-24">
            <AnimatedText
              className="!text-3xl !text-center lg:!text-left md:!text-5xl xl:!text-6xl"
              text="Turning Vision Into Reality With Code And Design."
            />
            <p className="my-4 text-xs md:text-sm xl:text-base font-medium text-center lg:text-left">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center lg:self-start mt-2 self-center">
              <Link
                className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2 px-4 rounded-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2.5 md:px-6 text-base md:text-lg transition-colors cursor-default lg:cursor-pointer"
                href="/dummy.pdf"
                target="_blank"
                download
              >
                Resume <LinkArrow className=" w-5 md:w-6 ml-1" />
              </Link>
              <div>
                <CustomLink
                  className="ml-8 text-base md:text-lg font-medium capitalize text-dark dark:text-light cursor-default lg:cursor-pointer"
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
      </main>
    </>
  );
};

export default Home;
