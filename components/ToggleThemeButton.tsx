'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from '@/Icons';
import { BaseComponentProps } from '@/types';

interface Props extends BaseComponentProps {}

const ToggleThemeButton = ({ className }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
