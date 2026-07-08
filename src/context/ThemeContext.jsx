import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggle = () => setDark(d => !d);

  return React.createElement(ThemeContext.Provider, { value: { dark, toggle } }, children);
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

export function DarkModeToggle() {
  const { dark, toggle } = useTheme();
  return React.createElement('button', {
    onClick: toggle,
    className: 'fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-lg',
    'aria-label': dark ? 'Switch to light mode' : 'Switch to dark mode',
    title: dark ? 'Light mode' : 'Dark mode',
  }, dark ? '☀️' : '🌙');
}
