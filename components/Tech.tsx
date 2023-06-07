'use client';

import { StaticImageData } from 'next/image';
import { BallCanvas } from './canvas';

interface Technology {
  name: string;
  icon: StaticImageData;
}

interface Props {
  technologies: Technology[];
}

const Tech = ({ technologies }: Props) => {
  return (
    <>
      <h2 className="font-bold text-4xl md:text-6xl lg:text-8xl mt-28 lg:mt-32 mb-16 md:mb-24 lg:mb-28 w-full text-center text-dark dark:text-light">
        Technologies
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-14 sm:gap-8 md:gap-10 max-w-[300px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[700px]">
        {technologies.map((technology) => (
          <div
            className="flex flex-col gap-y-2 items-center text-center text-dark dark:text-light font-semibold"
            key={technology.name}
          >
            <div className="w-24 h-24 lg:w-28 lg:h-28 cursor-grab active:cursor-grabbing drop-shadow-2xl rounded-full">
              <BallCanvas icon={technology.icon} />
            </div>
            <div>{technology.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tech;
