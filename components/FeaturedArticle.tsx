import Link from 'next/link';

import { MotionImage } from '.';
import { ArticleProps } from './Article';

const FeaturedArticle = ({ img, title, time, summary, link }: ArticleProps) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-dark rounded-2xl relative">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl" />
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
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4">{title}</h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold">{time}</span>
      </Link>
    </li>
  );
};

export default FeaturedArticle;
