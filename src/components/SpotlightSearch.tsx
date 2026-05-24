import React, { useState, useEffect, useRef } from 'react';
import { Search, X, FileText, ArrowRight, CornerDownLeft } from 'lucide-react';
import { sections, Lesson } from '../data/lessons';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'motion/react';

interface SpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLesson: (lessonId: string) => void;
}

interface MatchResult {
  sectionTitle: string;
  lesson: Lesson;
  type: 'title' | 'description' | 'content';
  snippet: string;
}

export const SpotlightSearch: React.FC<SpotlightSearchProps> = ({ isOpen, onClose, onSelectLesson }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Global hotkey: Cmd+K / Ctrl+K or /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === '/' && !isOpen && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search logic
  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const matches: MatchResult[] = [];
    sections.forEach(section => {
      section.lessons.forEach(lesson => {
        const title = lesson.title.toLowerCase();
        const desc = lesson.description.toLowerCase();
        const content = lesson.content.toLowerCase();

        if (title.includes(q)) {
          matches.push({
            sectionTitle: section.title,
            lesson,
            type: 'title',
            snippet: lesson.description
          });
        } else if (desc.includes(q)) {
          matches.push({
            sectionTitle: section.title,
            lesson,
            type: 'description',
            snippet: lesson.description
          });
        } else if (content.includes(q)) {
          // Find search index and extract snippet
          const matchIdx = content.indexOf(q);
          const start = Math.max(0, matchIdx - 40);
          const end = Math.min(content.length, matchIdx + q.length + 50);
          let snippet = lesson.content.substring(start, end).replace(/[\n#*`_-]+/g, ' ');
          if (start > 0) snippet = '...' + snippet;
          if (end < content.length) snippet = snippet + '...';
          
          matches.push({
            sectionTitle: section.title,
            lesson,
            type: 'content',
            snippet
          });
        }
      });
    });

    return matches.slice(0, 10); // Limit to 10 matching results
  }, [query]);

  // Keep index in bound
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle keys for navigating list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(results.length - 1, prev + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(0, prev - 1));
    } else if (e.key === 'Enter') {
      if (results[selectedIndex]) {
        onSelectLesson(results[selectedIndex].lesson.id);
        onClose();
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (resultsRef.current) {
      const container = resultsRef.current;
      const selectedElement = container.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        const cTop = container.scrollTop;
        const cBottom = cTop + container.clientHeight;
        const eTop = selectedElement.offsetTop;
        const eBottom = eTop + selectedElement.clientHeight;

        if (eTop < cTop) {
          container.scrollTop = eTop;
        } else if (eBottom > cBottom) {
          container.scrollTop = eBottom - container.clientHeight;
        }
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 md:p-20">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#04060f]/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Box */}
      <div className="mx-auto max-w-2xl transform divide-y divide-white/5 overflow-hidden rounded-2xl bg-[#090e24] border border-white/10 shadow-2xl transition-all relative">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            className="h-14 w-full border-0 bg-transparent pl-12 pr-12 focus:outline-none text-zinc-100 font-sans text-sm placeholder-zinc-500 focus:ring-0 focus:ring-offset-0"
            placeholder="Type keywords (e.g. inheritance, thread, final)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button 
            type="button" 
            onClick={onClose}
            className="absolute right-4 top-4 text-zinc-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {query && results.length === 0 && (
          <div className="py-14 px-6 text-center text-sm sm:px-14">
            <span className="block font-medium text-zinc-400">No core notes matching "{query}"</span>
            <span className="mt-1 block text-xs text-zinc-500">Try searching for other keywords such as Override, Sync, or OOP.</span>
          </div>
        )}

        {results.length > 0 && (
          <div 
            ref={resultsRef}
            className="max-h-96 overflow-y-auto p-2 scrollbar-thin space-y-1"
          >
            {results.map((result, index) => {
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={result.lesson.id}
                  onClick={() => {
                    onSelectLesson(result.lesson.id);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={clsx(
                    "w-full flex flex-col p-3 rounded-xl text-left transition-all leading-normal relative group",
                    isSelected 
                      ? "bg-indigo-600/15 border-l-2 border-indigo-500 pl-3.5 shadow" 
                      : "hover:bg-white/[0.02]"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-zinc-500 uppercase tracking-widest leading-none">
                      <FileText size={10} className="text-zinc-500 group-hover:text-zinc-400" />
                      <span>{result.sectionTitle}</span>
                    </div>
                    {isSelected && (
                      <span className="text-[10px] text-indigo-400 font-mono font-bold flex items-center gap-1">
                        Select <CornerDownLeft size={8} />
                      </span>
                    )}
                  </div>

                  <h4 className={clsx(
                    "text-xs font-bold font-sans mt-1.5",
                    isSelected ? "text-white" : "text-zinc-200"
                  )}>
                    {result.lesson.title}
                  </h4>

                  <p className={clsx(
                    "text-[11px] leading-normal line-clamp-1 mt-1 font-sans",
                    isSelected ? "text-indigo-200/70" : "text-zinc-500"
                  )}>
                    {result.snippet}
                  </p>
                </button>
              );
            })}
          </div>
        )}

        {/* Keyboard shortcut legend footer */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#070b1c] text-[10px] font-mono text-zinc-500 select-none">
          <div className="flex items-center gap-3">
            <span>Use <kbd className="bg-white/5 px-1 rounded">↑</kbd> <kbd className="bg-white/5 px-1 rounded">↓</kbd> to navigate</span>
            <span><kbd className="bg-white/5 px-1 rounded">Enter</kbd> to select</span>
          </div>
          <div>
            <span><kbd className="bg-white/5 px-1 rounded">Esc</kbd> to exit</span>
          </div>
        </div>
      </div>
    </div>
  );
};
