'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from '@/Icons';
import { BaseComponentProps } from '@/types';

interface Props extends BaseComponentProps {
  toggle?: () => void;
}

const ToggleThemeButton = ({ className, toggle }: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={`${className} cursor-default lg:cursor-pointer`}
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        toggle && toggle();
      }}
    >
      {theme === 'light' ? (
        <Sun className="fill-dark" />
      ) : (
        <Moon className="fill-dark" />
      )}
    </button>
  );
};

export default ToggleThemeButton;
