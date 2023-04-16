import Image from 'next/image';
import {
  AnimatedNumber,
  AnimatedText,
  Container,
  Education,
  Experience,
  Skills,
} from '@/components';
import { profilePic } from '@/public/images';

export const metadata = {
  title: 'Cryptnology | About',
  description: 'About me',
};

const About = () => {
  return (
    <Container className="pt-16 pb-32">
      <main className="flex w-full flex-col items-center justify-center">
        <AnimatedText className="mb-16" text="Passion Fuels Purpose!" />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              About me
            </h2>
            <p className="font-medium text-dark dark:text-light">
              Hi, I'm CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients'
              visions to life.
            </p>
            <p className="my-4 font-medium text-dark dark:text-light">
              I believe that design is about more than just making things look
              pretty - it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium text-dark dark:text-light">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-dark bg-light p-8 dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image
              className="w-full h-auto rounded-2xl"
              src={profilePic}
              alt="Cryptnology"
              priority
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between">
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold text-dark dark:text-light">
                <AnimatedNumber value={50} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                Satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold text-dark dark:text-light">
                <AnimatedNumber value={40} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                Projects completed
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold text-dark dark:text-light">
                <AnimatedNumber value={4} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
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
  );
};

export default About;
