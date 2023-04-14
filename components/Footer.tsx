import Link from 'next/link';
import { CustomLink } from '.';

const Footer = () => {
  return (
    <footer className="flex py-8 px-32 w-full items-center justify-between border-t-2 border-dark mt-auto">
      <div>{new Date().getFullYear()} &copy; All Rights Reserved</div>
      <div>
        Built With<span className="text-primary px-1">&#9825;</span>By{' '}
        <CustomLink
          title="Cryptnology.Dev"
          href="https://github.com/cryptnology"
          target="_blank"
          underline
        />
      </div>
      <div>
        <CustomLink
          title="Say Hello"
          href="https://twitter.com/CryptnologyDev"
          target="_blank"
          underline
        />
      </div>
    </footer>
  );
};

export default Footer;
