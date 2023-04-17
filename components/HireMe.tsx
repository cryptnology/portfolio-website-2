import Link from 'next/link';
import { CircularText } from '@/Icons';

const HireMe = () => {
  return (
    <>
      <div className="fixed left-4 bottom-4 items-center justify-center overflow-hidden hidden lg:flex">
        <div className="lg:w-48 h-auto flex items-center justify-center relative w-24">
          <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
          <Link
            href="mailto:jamie@cryptnology.dev"
            className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light dark:text-dark shadow-md border border-dark dark:bg-light lg:w-20 lg:h-20 rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light w-12 h-12 text-[10px] lg:text-sm"
          >
            Hire Me
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center overflow-hidden left-auto top-0 bottom-auto absolute right-1 sm:right-7 md:right-14 lg:hidden">
        <div className="lg:w-48 h-auto flex items-center justify-center relative w-24">
          <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
          <Link
            href="mailto:jamie@cryptnology.dev"
            className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light dark:text-dark shadow-md border border-dark dark:bg-light lg:w-20 lg:h-20 rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light w-12 h-12 text-[10px] lg:text-sm"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </>
  );
};

export default HireMe;
