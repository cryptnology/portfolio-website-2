import { Container, CustomLink } from '.';

const Footer = () => {
  return (
    <footer className="border-t-2 border-dark mt-auto text-dark dark:text-light dark:border-light text-sm lg:text-base">
      <Container className="flex py-8 md:py-6 w-full items-center justify-between flex-col md:flex-row">
        <div>{new Date().getFullYear()} &copy; All Rights Reserved</div>
        <div className="my-3">
          Built With
          <span className="text-primary dark:text-primaryDark px-1">
            &#9825;
          </span>
          By{' '}
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
      </Container>
    </footer>
  );
};

export default Footer;
