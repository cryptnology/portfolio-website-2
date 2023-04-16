import { StaticImageData } from 'next/image';
import Link from 'next/link';
import {
  AnimatedText,
  Container,
  CustomLink,
  MotionLink,
  MotionImage,
} from '@/components';
import { cryptoScreener } from '@/public/images';
import { GitHub } from '@/Icons';

export const metadata = {
  title: 'Cryptnology | Projects',
  description: 'My projects.',
};

interface ProjectProps {
  type: string;
  title: string;
  summary?: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const FeatureProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: ProjectProps) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-dark bg-light p-12 relative rounded-br-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-2xl dark:bg-light" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <MotionImage
          className="w-full h-auto"
          src={img}
          alt={title}
          priority
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <MotionLink className="w-10" href={github}>
            <GitHub />
          </MotionLink>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-1.5 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }: ProjectProps) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl dark:bg-light" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <MotionImage
          className="w-full h-auto"
          src={img}
          alt={title}
          priority
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-3xl font-bold text-dark dark:text-light">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <div>
            <CustomLink
              title="Visit"
              className="text-lg font-semibold text-dark dark:text-light"
              href={link}
              target="_blank"
              underline
            />
          </div>
          <MotionLink className="w-8" href={github}>
            <GitHub />
          </MotionLink>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <Container className="pt-16 pb-32">
      <main className="flex w-full flex-col items-center justify-center">
        <AnimatedText className="mb-16" text="Imagination Trumps Knowledge!" />
        <div className="grid grid-col-12 gap-24 gap-y-32">
          <div className="col-span-12">
            <FeatureProject
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              link="/"
              type="Featured Project"
              img={cryptoScreener}
              github="/"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              link="/"
              type="Project"
              img={cryptoScreener}
              github="/"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              link="/"
              type="Project"
              img={cryptoScreener}
              github="/"
            />
          </div>
          <div className="col-span-12">
            {' '}
            <FeatureProject
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              link="/"
              type="Featured Project"
              img={cryptoScreener}
              github="/"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              link="/"
              type="Project"
              img={cryptoScreener}
              github="/"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              link="/"
              type="Project"
              img={cryptoScreener}
              github="/"
            />
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Projects;
