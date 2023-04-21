import Link from 'next/link';

import { MotionImage } from '.';
import { ArticleProps } from './Article';

const FeaturedArticle = ({ img, title, time, summary, link }: ArticleProps) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-dark border-r-[12px] border-b-[12px] rounded-2xl relative dark:bg-dark dark:border-light">
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
        <div className="mb-7">
          <h2 className="capitalize text-lg sm:text-2xl font-bold my-2 mt-4 text-dark dark:text-light hover:underline underline-offset-4">
            {title}
          </h2>
          <p className="text-xs sm:text-sm mb-2 text-dark dark:text-light">
            {summary}
          </p>
        </div>
        <div className="text-primary text-sm sm:text-base dark:text-primaryDark font-semibold absolute bottom-3">
          {time}
        </div>
      </Link>
    </li>
  );
};

export default FeaturedArticle;
