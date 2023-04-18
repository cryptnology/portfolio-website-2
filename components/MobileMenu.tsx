'use client';

import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Twitter, YouTube } from '@/Icons';

import { CustomMobileLink, MotionLink, ToggleThemeButton } from '.';

interface Props {
  isOpen: boolean;
  handleClick: () => void;
}

const MobileMenu = ({ isOpen, handleClick }: Props) => {
  return (
    <>
      {/* Hamburger menu */}
      <button
        className="flex-col justify-center items-center flex py-8 lg:hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          className="min-w-[70vw] flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-20 xs:py-32 text-light dark:text-dark flex lg:hidden"
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex items-center justify-center flex-wrap mb-6">
            <MotionLink
              className="w-6"
              href="https://twitter.com/CryptnologyDev"
            >
              <Twitter />
            </MotionLink>
            <MotionLink
              className="mx-4 xs:mx-6 w-7"
              href="https://www.youtube.com/channel/UC1ksb5e9FEqKB3Tl3NvaCIw"
            >
              <YouTube />
            </MotionLink>
            <MotionLink
              className="mr-4 xs:mr-6 w-7"
              href="https://github.com/cryptnology"
            >
              <GitHub />
            </MotionLink>
            <MotionLink
              className="w-6"
              href="https://www.linkedin.com/in/jamie-anderson-121061200"
            >
              <LinkedIn />
            </MotionLink>
            <ToggleThemeButton className="ml-4 xs:ml-6 flex items-center justify-center rounded-full p-1 bg-light text-dark dark:bg-dark dark:text-light" />
          </nav>
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" toogle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              toogle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toogle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              toogle={handleClick}
            />
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default MobileMenu;
