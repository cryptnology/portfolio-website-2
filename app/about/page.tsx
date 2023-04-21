import Image from 'next/image';
import {
  AnimatedNumber,
  AnimatedText,
  Container,
  Education,
  Experience,
  Skills,
  TransitionEffect,
} from '@/components';
import { profileImg } from '@/public/images';
import { aboutPage, experienceNumbers } from '@/constants';

export const metadata = aboutPage.metadata;

const About = () => {
  return (
    <>
      <TransitionEffect />
      <Container className="mt-36 mb-28 md:mb-36">
        <main className="flex w-full flex-col items-center justify-center">
          <AnimatedText
            className="mb-8 sm:mb-16 !text-4xl sm:!text-6xl lg:!text-7xl"
            text={aboutPage.heading}
          />
          <div className="grid w-full grid-cols-8 gap-8 md:gap-10 xl:gap-16">
            <div className="col-span-8 md:col-span-3 lg:col-span-4 xl:col-span-3 flex flex-col items-start justify-start order-2 md:order-1">
              <h2 className="mb-4 text-lg md:text-base lg:text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                {aboutPage.aboutMe.heading}
              </h2>
              {aboutPage.aboutMe.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-4 last:mb-0 font-medium md:text-sm lg:text-base text-dark dark:text-light"
                >
                  {paragraph.content}
                </p>
              ))}
            </div>
            <div className="col-span-8 md:col-span-5 lg:col-span-4 xl:col-span-3 relative h-max rounded-3xl border-2 border-r-[10px] border-b-[10px] border-dark bg-light p-8 dark:bg-dark dark:border-light order-1 md:order-2">
              <Image
                className="w-full h-auto rounded-2xl"
                src={profileImg}
                alt="Cryptnology"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-8 md:mt-10 xl:col-span-2 xl:flex-col xl:items-end flex items-center justify-between order-3">
              {experienceNumbers.map((experience, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center xl:items-end justify-center"
                >
                  <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark dark:text-light">
                    <AnimatedNumber value={experience.number} />+
                  </span>
                  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-center xl:text-right">
                    {experience.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <Education />
          <Experience />
          <Skills />
        </main>
      </Container>
    </>
  );
};

export default About;
