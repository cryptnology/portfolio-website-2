'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CircularText } from '@/Icons';
import { links, socialLinks } from '@/constants';

import {
  Container,
  CustomLink,
  Logo,
  MobileMenu,
  MotionLink,
  ToggleThemeButton,
} from '.';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container className="w-full py-5 lg:py-3 font-medium flex items-center justify-between bg-light dark:bg-dark z-10 text-dark dark:text-light fixed top-0 left-0">
      <MobileMenu isOpen={isOpen} handleClick={handleClick} />
      <div className="w-full justify-between items-center hidden lg:flex">
        <nav>
          {links.map((link, i) => (
            <CustomLink
              className="mr-8 last:mr-0"
              key={i}
              href={link.link}
              title={link.title}
            />
          ))}
        </nav>
        <Logo href="/" />
        <nav className="flex items-center justify-center">
          {socialLinks.map((link, i) => (
            <MotionLink
              key={i}
              className={`mr-6 last:mr-0 ${link.width}`}
              href={link.link}
            >
              {<link.icon />}
            </MotionLink>
          ))}
          <ToggleThemeButton className="flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark" />
        </nav>
      </div>
      <Logo className="hidden mx-auto md:inline-block lg:hidden" href="/" />
      <div className="h-auto absolute right-0 sm:right-5 md:right-10 w-32 lg:hidden">
        <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
        <Link
          href="mailto:jamie@cryptnology.dev"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light dark:text-dark shadow-md border border-dark dark:bg-light rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light w-[3.5rem] h-[3.5rem] text-[9px] transition-colors"
        >
          Email Me
        </Link>
      </div>
    </Container>
  );
};

export default NavBar;
