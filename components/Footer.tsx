import { Container, CustomLink } from '.';

const Footer = () => {
  return (
    <footer className="border-t-2 border-dark mt-auto">
      <Container className="flex py-8 w-full items-center justify-between">
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
      </Container>
    </footer>
  );
};

export default Footer;
