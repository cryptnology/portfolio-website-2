import Link from 'next/link';
import {
  AnimatedText,
  Container,
  CustomLink,
  EarthCanvas,
  EmailMe,
  TransitionEffect,
} from '@/components';
import { LinkArrow } from '@/Icons';
import { homePage } from '@/constants';

export const metadata = homePage.metadata;

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
              text={homePage.heading}
            />
            <p className="my-4 text-sm md:text-base font-medium text-center lg:text-left">
              {homePage.subheading}
            </p>
            <div className="flex items-center lg:self-start mt-2 self-center">
              <Link
                className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2 px-4 rounded-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2.5 md:px-6 text-base md:text-lg transition-colors cursor-default lg:cursor-pointer"
                href="/resume-anderson.pdf"
                target="_blank"
                download
              >
                {homePage.resumeBtn} <LinkArrow className=" w-5 md:w-6 ml-1" />
              </Link>
              <div>
                <CustomLink
                  className="ml-8 text-base md:text-lg font-medium capitalize text-dark dark:text-light cursor-default lg:cursor-pointer"
                  href="mailto:jamie@cryptnology.dev"
                  title={homePage.contact}
                  target="_blank"
                  underline
                />
              </div>
            </div>
          </div>
        </Container>
        <EmailMe />
      </main>
    </>
  );
};

export default Home;
