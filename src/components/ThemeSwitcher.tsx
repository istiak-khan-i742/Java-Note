import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, BookOpen, Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { triggerHaptic } from '../utils/haptics';

export type Theme = 'dark' | 'light' | 'paper';

interface ThemeSwitcherProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const themes = [
    { 
      id: 'dark' as const, 
      label: 'Developer Mode', 
      desc: 'Dark theme (Monaco/VS Code Vibe)',
      icon: <Moon size={14} className="stroke-[2.5]" />,
    },
    { 
      id: 'light' as const, 
      label: 'Academic Mode', 
      desc: 'Notion & Stripe clean light doc look',
      icon: <Sun size={14} className="stroke-[2.5]" />,
    },
    { 
      id: 'paper' as const, 
      label: 'Reading Mode', 
      desc: 'Warm paper, low eye strain text layout',
      icon: <BookOpen size={14} className="stroke-[2.5]" />,
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const activeThemeObj = themes.find(t => t.id === theme) || themes[0];

  return (
    <div className="relative select-none" ref={containerRef} id="theme-switcher-wrapper">
      {/* Trigger Button - Highly polished and compact */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          triggerHaptic('light');
        }}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-indigo-500/20 active:scale-95 cursor-pointer bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.05] shadow-sm theme-switcher-trigger"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          borderColor: 'var(--border-subtle)',
          color: 'var(--text-primary)'
        }}
        id="theme-switcher-trigger-btn"
        title="Change theme mode"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="flex items-center justify-center p-0.5" style={{ color: 'var(--accent)' }}>
          {activeThemeObj.id === 'dark' && <Moon size={13} className="stroke-[2.5]" />}
          {activeThemeObj.id === 'light' && <Sun size={13} className="stroke-[2.5]" />}
          {activeThemeObj.id === 'paper' && <BookOpen size={13} className="stroke-[2.5]" />}
        </span>
        <span className="hidden md:inline text-[11px] font-semibold tracking-wide capitalize leading-none select-none">
          {activeThemeObj.id === 'dark' ? 'Developer' : activeThemeObj.id === 'light' ? 'Academic' : 'Reading'}
        </span>
        <ChevronDown 
          size={11} 
          className={`stroke-[2.5] text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`} 
        />
      </button>

      {/* Floating Glassmorphic Dropdown Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 mt-2.5 w-64 rounded-2xl p-1.5 z-50 shadow-2xl border backdrop-blur-xl flex flex-col gap-1 overflow-hidden pointer-events-auto theme-switcher-dropdown"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(7, 11, 26, 0.92)' : theme === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(245, 241, 232, 0.96)',
              borderColor: 'var(--border-strong)',
              boxShadow: 'var(--shadow-premium)'
            }}
            id="theme-dropdown-menu"
            role="menu"
          >
            {/* Header label in dropdown */}
            <div className="px-3.5 pt-2 pb-1.5 select-none opacity-80 flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 font-mono select-none">Select Theme</span>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-mono select-none">v1.2</span>
            </div>

            <div className="h-[1px] bg-white/[0.04] mb-1 select-none" style={{ backgroundColor: 'var(--border-subtle)' }} />

            {themes.map((t) => {
              const isActive = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    onThemeChange(t.id);
                    setIsOpen(false);
                    triggerHaptic('success');
                  }}
                  className={`w-full flex items-center justify-between text-left px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-200 select-none border border-transparent ${
                    isActive 
                      ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/10' 
                      : 'hover:bg-white/[0.04] text-zinc-400 hover:text-white'
                  }`}
                  style={{
                    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  }}
                  role="menuitem"
                  id={`theme-option-${t.id}`}
                >
                  <div className="flex items-start gap-3 select-none">
                    <span 
                      className={`flex items-center justify-center w-7 h-7 rounded-lg shrink-0 ${
                        isActive ? 'bg-indigo-500/15 text-indigo-400' : 'bg-white/[0.03] text-zinc-400'
                      }`}
                      style={{
                        backgroundColor: isActive ? 'rgba(var(--accent-rgb), 0.12)' : 'var(--border-subtle)',
                        color: isActive ? 'var(--accent)' : 'var(--text-muted)'
                      }}
                    >
                      {t.icon}
                    </span>
                    <div className="flex flex-col gap-0.5 min-w-0 select-none">
                      <span className="text-[12px] font-bold leading-tight select-none">
                        {t.label}
                      </span>
                      <span className="text-[10px] text-zinc-500 font-normal leading-tight truncate max-w-[155px] select-none" style={{ color: 'var(--text-muted)' }}>
                        {t.desc}
                      </span>
                    </div>
                  </div>
                  {isActive && (
                    <span className="shrink-0 text-indigo-400 select-none pl-2" style={{ color: 'var(--accent)' }}>
                      <Check size={14} className="stroke-[3]" />
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
