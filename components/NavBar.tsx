import { GitHub, LinkedIn, Twitter, YouTube } from '@/Icons';

import { Container, CustomLink, Logo, MotionLink, ToggleThemeButton } from '.';

const NavBar = () => {
  return (
    <Container>
      <header className="w-full py-8 font-medium flex items-center justify-between text-dark dark:text-light">
        <nav>
          <CustomLink href="/" title="Home" />
          <CustomLink className="mx-8" href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink className="ml-8" href="/articles" title="Articles" />
        </nav>
        <Logo
          className="absolute left-[50%] top-2 translate-x-[-50%]"
          href="/"
        />
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
      </header>
    </Container>
  );
};

export default NavBar;
