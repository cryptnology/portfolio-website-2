'use client';

import { useRef } from 'react';
import { StaticImageData } from 'next/image';
import { useMotionValue } from 'framer-motion';
import { MotionImage, VideoModal } from '.';

interface Props {
  img: StaticImageData;
  title: string;
  link: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const MovingImage = ({ img, title, link, isOpen, setIsOpen }: Props) => {
  const ref = useRef<HTMLImageElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouse = (event: { pageX: number }) => {
    if (ref.current !== null) ref.current.style.display = 'inline-block';
    x.set(event.pageX - 100);
    y.set(-10);
  };

  const handleMouseLeave = () => {
    if (ref.current !== null) ref.current.style.display = 'none';
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="hidden lg:block lg:cursor-pointer"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsOpen(true)}
    >
      <h2 className="capitalize text-lg sm:text-xl font-semibold hover:underline underline-offset-2 text-dark dark:text-light">
        {title}
      </h2>
      <MotionImage
        ref={ref}
        className="z-10 w-96 h-auto hidden absolute rounded-lg border-2 border-transparent dark:border-light"
        height={600}
        width={600}
        style={{ x, y }}
        src={img}
        alt={title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
      />
      <VideoModal isOpen={isOpen} setIsOpen={setIsOpen} link={link} />
    </div>
  );
};

export default MovingImage;
