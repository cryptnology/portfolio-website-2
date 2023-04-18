import Link from 'next/link';

import { MotionImage } from '.';
import { ArticleProps } from './Article';

const FeaturedArticle = ({ img, title, time, summary, link }: ArticleProps) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-dark rounded-2xl relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl dark:bg-light" />
      <Link
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <MotionImage
          className="w-full h-auto"
          src={img}
          alt={title}
          priority
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-lg sm:text-2xl font-bold my-2 mt-4 text-dark dark:text-light">
          {title}
        </h2>
        <p className="text-xs sm:text-sm mb-2 text-dark dark:text-light">
          {summary}
        </p>
        <span className="text-primary text-sm sm:text-base dark:text-primaryDark font-semibold">
          {time}
        </span>
      </Link>
    </li>
  );
};

export default FeaturedArticle;
