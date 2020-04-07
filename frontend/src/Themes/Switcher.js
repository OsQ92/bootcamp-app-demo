import { useEffect, useState } from 'react';

export const Switcher = () => {
  const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light');
  
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  };
//Get theme (if previously saved) from browsers localstorage
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme]
};