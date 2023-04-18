'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import { useMotionValue } from 'framer-motion';
import { MotionImage } from '.';

interface Props {
  img: StaticImageData;
  title: string;
  link: string;
}

const MovingImage = ({ img, title, link }: Props) => {
  const ref = useRef<HTMLImageElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouse = (event: { pageX: number }) => {
    if (ref.current !== null) ref.current.style.display = 'inline-block';
    x.set(event.pageX - 130);
    y.set(-10);
  };

  const handleMouseLeave = () => {
    if (ref.current !== null) ref.current.style.display = 'none';
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-lg sm:text-xl font-semibold hover:underline text-dark dark:text-light">
        {title}
      </h2>
      <MotionImage
        ref={ref}
        className="z-10 w-96 h-auto hidden absolute rounded-lg border-2 border-transparent dark:border-light"
        style={{ x, y }}
        src={img}
        alt={title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
      />
    </Link>
  );
};

export default MovingImage;
