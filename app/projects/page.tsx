import {
  AnimatedText,
  Container,
  TransitionEffect,
  FeaturedProject,
  Project,
} from '@/components';
import { cryptoScreener } from '@/public/images';

export const metadata = {
  title: 'Cryptnology | Projects',
  description: 'My projects.',
};

const Projects = () => {
  return (
    <>
      <TransitionEffect />
      <Container className="pt-16 pb-32">
        <main className="flex w-full flex-col items-center justify-center">
          <AnimatedText
            className="mb-8 !text-4xl sm:mb-16 sm:!text-6xl lg:!text-7xl"
            text="Imagination Trumps Knowledge!"
          />
          <div className="grid grid-col-12 gap-24 gap-y-24 md:gap-y-32 gap-x-0 lg:gap-x-8 xl:gap-x-16">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                type="Featured Project"
                img={cryptoScreener}
                github="/"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Project
                title="Crypto Screener Application"
                link="/"
                type="Project"
                img={cryptoScreener}
                github="/"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
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
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                type="Featured Project"
                img={cryptoScreener}
                github="/"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Project
                title="Crypto Screener Application"
                link="/"
                type="Project"
                img={cryptoScreener}
                github="/"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
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
    </>
  );
};

export default Projects;
