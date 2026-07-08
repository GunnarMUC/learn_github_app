import { useEffect, useCallback } from 'react';

const SHORTCUTS = {
  'j': 'nextLesson',
  'k': 'prevLesson',
  'h': 'goHome',
  's': 'toggleSearch',
  'd': 'toggleDark',
  '?': 'showHelp',
  'Escape': 'closeModal',
};

export function useKeyboard(handlers = {}) {
  const handleKey = useCallback((e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const action = SHORTCUTS[e.key] || handlers[e.key];
    if (action && typeof handlers[action] === 'function') {
      e.preventDefault();
      handlers[action]();
    }
    if (handlers[e.key] && typeof handlers[e.key] === 'function') {
      e.preventDefault();
      handlers[e.key]();
    }
  }, [handlers]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleKey]);
}
