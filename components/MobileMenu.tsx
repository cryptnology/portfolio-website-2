'use client';

import { motion } from 'framer-motion';
import { links, socialLinks } from '@/constants';

import {
  CheckOutsideClick,
  CustomMobileLink,
  MotionLink,
  ToggleThemeButton,
} from '.';

interface Props {
  isOpen: boolean;
  handleClick: () => void;
}

const MobileMenu = ({ isOpen, handleClick }: Props) => {
  return (
    <>
      {/* Hamburger menu */}
      <button
        className={`flex-col justify-center items-center flex py-8 lg:hidden cursor-default ${
          isOpen && 'pointer-events-none'
        }`}
        onClick={!isOpen ? handleClick : undefined}
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
        <CheckOutsideClick handleClick={handleClick}>
          <motion.div
            className="min-w-[70vw] flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-20 xs:py-32 text-light dark:text-dark flex lg:hidden"
            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <nav className="flex items-center justify-center flex-wrap mb-6">
              {socialLinks.map((link, i) => (
                <MotionLink
                  key={i}
                  className="mr-4 xs:mr-6 last:mr-0 w-7"
                  href={link.link}
                  toggle={handleClick}
                >
                  <link.icon />
                </MotionLink>
              ))}
              <ToggleThemeButton
                className="flex items-center justify-center rounded-full p-1 bg-light text-dark dark:bg-dark dark:text-light w-[1.65rem] h-[1.65rem]"
                toggle={handleClick}
              />
            </nav>
            <nav className="flex items-center flex-col justify-center">
              {links.map((link, i) => (
                <CustomMobileLink
                  key={i}
                  href={link.link}
                  title={link.title}
                  toggle={handleClick}
                />
              ))}
            </nav>
          </motion.div>
        </CheckOutsideClick>
      )}
    </>
  );
};

export default MobileMenu;
