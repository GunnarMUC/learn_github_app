import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';

const SearchContext = React.createContext(null);

export function SearchProvider({ children, lessons }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const results = useMemo(() => {
    if (!query || !lessons) return [];
    const q = query.toLowerCase();
    const items = [];
    for (const course of lessons) {
      for (const lesson of course.lessons || []) {
        if (lesson.title.toLowerCase().includes(q) || (lesson.content || '').toLowerCase().includes(q)) {
          items.push({ course: course.title, ...lesson });
        }
      }
    }
    return items.slice(0, 10);
  }, [query, lessons]);

  return React.createElement(SearchContext.Provider, { value: { query, setQuery, open, setOpen, results } }, children);
}

export function useSearch() {
  return React.useContext(SearchContext);
}

export function SearchBar() {
  const { query, setQuery, open, setOpen, results } = useSearch();

  return React.createElement('div', { className: 'relative' },
    React.createElement('div', {
      className: 'flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer border border-gray-200 dark:border-gray-700',
      onClick: () => setOpen(true),
    },
      React.createElement(Search, { size: 18, className: 'text-gray-400' }),
      React.createElement('span', { className: 'text-sm text-gray-400' }, 'Search lessons... (s)'),
    ),
    open && React.createElement('div', {
      className: 'fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50',
      onClick: () => setOpen(false),
    },
      React.createElement('div', {
        className: 'w-full max-w-xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden',
        onClick: e => e.stopPropagation(),
      },
        React.createElement('div', { className: 'flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700' },
          React.createElement(Search, { size: 20, className: 'text-gray-400' }),
          React.createElement('input', {
            className: 'flex-1 bg-transparent outline-none text-gray-900 dark:text-gray-100 text-lg',
            placeholder: 'Search lessons...',
            value: query,
            onChange: e => setQuery(e.target.value),
            autoFocus: true,
          }),
          React.createElement('button', { onClick: () => setOpen(false) },
            React.createElement(X, { size: 20, className: 'text-gray-400' }),
          ),
        ),
        query && React.createElement('div', { className: 'max-h-80 overflow-y-auto p-2' },
          results.length === 0
            ? React.createElement('p', { className: 'p-4 text-gray-500 text-center' }, 'No results found')
            : results.map((r, i) =>
                React.createElement('a', {
                  key: i,
                  href: '#',
                  className: 'block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
                  onClick: () => setOpen(false),
                },
                  React.createElement('p', { className: 'font-medium text-gray-900 dark:text-gray-100' }, r.title),
                  React.createElement('p', { className: 'text-sm text-gray-500' }, r.course),
                )
              ),
        ),
      ),
    ),
  );
}
