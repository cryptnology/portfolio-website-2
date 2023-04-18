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
import { profilePic } from '@/public/images';

export const metadata = {
  title: 'Cryptnology | About',
  description: 'About me',
};

const About = () => {
  return (
    <>
      <TransitionEffect />
      <Container className="mt-36">
        <main className="flex w-full flex-col items-center justify-center">
          <AnimatedText
            className="mb-8 sm:mb-16 !text-4xl sm:!text-6xl lg:!text-7xl"
            text="Passion Fuels Purpose!"
          />
          <div className="grid w-full grid-cols-8 gap-8 md:gap-10 xl:gap-16">
            <div className="col-span-8 md:col-span-3 lg:col-span-4 xl:col-span-3 flex flex-col items-start justify-start order-2 md:order-1">
              <h2 className="mb-4 text-lg md:text-base lg:text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About me
              </h2>
              <p className="font-medium md:text-sm lg:text-base text-dark dark:text-light">
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="my-4 font-medium md:text-sm lg:text-base text-dark dark:text-light">
                I believe that design is about more than just making things look
                pretty - it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium md:text-sm lg:text-base text-dark dark:text-light">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-8 md:col-span-5 lg:col-span-4 xl:col-span-3 relative h-max rounded-3xl border-2 border-r-[10px] border-b-[10px] border-dark bg-light p-8 dark:bg-dark dark:border-light order-1 md:order-2">
              <Image
                className="w-full h-auto rounded-2xl"
                src={profilePic}
                alt="Cryptnology"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-8 md:mt-10 xl:col-span-2 xl:flex-col xl:items-end flex items-center justify-between order-3">
              <div className="flex flex-col items-center xl:items-end justify-center">
                <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark dark:text-light">
                  <AnimatedNumber value={50} />+
                </span>
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-center xl:text-right">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-center xl:items-end justify-center">
                <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark dark:text-light">
                  <AnimatedNumber value={40} />+
                </span>
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-center xl:text-right">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-center xl:items-end justify-center">
                <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark dark:text-light">
                  <AnimatedNumber value={4} />+
                </span>
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-center xl:text-right">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Education />
          <Experience />
        </main>
      </Container>
    </>
  );
};

export default About;
