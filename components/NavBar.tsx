'use client';

import { useState } from 'react';
import { CircularText, GitHub, LinkedIn, Twitter, YouTube } from '@/Icons';

import {
  Container,
  CustomLink,
  Logo,
  MobileMenu,
  MotionLink,
  ToggleThemeButton,
} from '.';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container className="w-full lg:py-3 font-medium flex items-center justify-between bg-light dark:bg-dark z-10 text-dark dark:text-light fixed top-0 left-0">
      <MobileMenu isOpen={isOpen} handleClick={handleClick} />
      <div className="w-full justify-between items-center hidden lg:flex">
        <nav>
          <CustomLink href="/" title="Home" />
          <CustomLink className="mx-8" href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink className="ml-8" href="/articles" title="Articles" />
        </nav>
        <Logo href="/" />
        <nav className="flex items-center justify-center">
          <MotionLink className="w-6" href="https://twitter.com/CryptnologyDev">
            <Twitter />
          </MotionLink>
          <MotionLink
            className="mx-6 w-7"
            href="https://www.youtube.com/channel/UC1ksb5e9FEqKB3Tl3NvaCIw"
          >
            <YouTube />
          </MotionLink>
          <MotionLink
            className="mr-6 w-7"
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
          <ToggleThemeButton className="ml-6 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark" />
        </nav>
      </div>
      <Logo className="hidden md:inline-block lg:hidden" href="/" />
      {/* <div className="flex items-center justify-center overflow-hidden left-auto z-10 top-0 bottom-auto absolute right-1 sm:right-7 md:right-14 lg:hidden"> */}
      <div className="h-auto relative w-24 lg:hidden">
        <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
        <Link
          href="mailto:jamie@cryptnology.dev"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light dark:text-dark shadow-md border border-dark dark:bg-light rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light w-12 h-12 text-[10px] lg:text-sm"
        >
          Hire Me
        </Link>
      </div>
      {/* </div> */}
    </Container>
  );
};

export default NavBar;
