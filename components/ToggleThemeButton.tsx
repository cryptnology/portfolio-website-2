'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from '@/Icons';
import { BaseComponentProps } from '@/types';

interface Props extends BaseComponentProps {}

const ToggleThemeButton = ({ className }: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={className}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
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
