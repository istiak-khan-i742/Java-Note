import React, { useState, useMemo, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { SpotlightSearch } from './components/SpotlightSearch';
import { ThemeSwitcher, Theme } from './components/ThemeSwitcher';
import { sections, section4Quiz, Lesson } from './data/lessons';
import { Menu, ArrowUp, Search, Compass, LogIn, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('java_oop_theme');
      return (saved as Theme) || 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('java_oop_theme', theme);
  }, [theme]);

  const [activeLessonId, setActiveLessonId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('java_oop_active_lesson');
      return saved || sections[0].lessons[0].id;
    } catch {
      return sections[0].lessons[0].id;
    }
  });

  const [isQuizActive, setIsQuizActive] = useState<boolean>(() => {
    return localStorage.getItem('java_oop_quiz_active') === 'true';
  });

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Lesson completions
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('java_oop_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist active state
  useEffect(() => {
    localStorage.setItem('java_oop_active_lesson', activeLessonId);
    localStorage.setItem('java_oop_quiz_active', String(isQuizActive));
  }, [activeLessonId, isQuizActive]);

  // Track scrolling (reading progress)
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back-to-top visibility
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Calculate viewport reading progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLesson = useMemo(() => {
    for (const section of sections) {
      const lesson = section.lessons.find(l => l.id === activeLessonId);
      if (lesson) return lesson;
    }
    return null;
  }, [activeLessonId]);

  const activeSection = useMemo(() => {
    if (isQuizActive) return null;
    return sections.find(s => s.lessons.some(l => l.id === activeLessonId)) || null;
  }, [activeLessonId, isQuizActive]);

  // Flattened ordered structures for linear scrolling
  const allLessons = useMemo(() => {
    return sections.flatMap(s => s.lessons);
  }, []);

  const currentLessonIndex = useMemo(() => {
    if (isQuizActive) return -1;
    return allLessons.findIndex(l => l.id === activeLessonId);
  }, [allLessons, activeLessonId, isQuizActive]);

  const hasPrev = currentLessonIndex > 0;
  const hasNext = currentLessonIndex !== -1 && currentLessonIndex < allLessons.length - 1;

  const handleLessonSelect = (id: string) => {
    setActiveLessonId(id);
    setIsQuizActive(false);
    setIsMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleQuizSelect = () => {
    setIsQuizActive(true);
    setIsMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleToggleCompletion = (lessonId: string) => {
    setCompletedLessons(prev => {
      const next = prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId];
      localStorage.setItem('java_oop_completed', JSON.stringify(next));
      return next;
    });
  };

  const handleNavigatePrev = () => {
    if (hasPrev) {
      const prevLesson = allLessons[currentLessonIndex - 1];
      setActiveLessonId(prevLesson.id);
      setIsQuizActive(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleNavigateNext = () => {
    if (hasNext) {
      const nextLesson = allLessons[currentLessonIndex + 1];
      setActiveLessonId(nextLesson.id);
      setIsQuizActive(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (currentLessonIndex === allLessons.length - 1) {
      setIsQuizActive(true);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Aggregated progress stats
  const totalLessons = allLessons.length;
  const completionPercentage = useMemo(() => {
    if (totalLessons === 0) return 0;
    return Math.round((completedLessons.length / totalLessons) * 100);
  }, [completedLessons, totalLessons]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="layout flex min-h-screen bg-[#04060f] text-[#ccd6f6] relative font-sans antialiased selection:bg-indigo-500/35 selection:text-white">
      {/* Dynamic Animated Atmospheric Blur Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/[0.04] blur-[150px] rounded-full pointer-events-none select-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-violet-500/[0.03] blur-[180px] rounded-full pointer-events-none select-none z-0" />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-indigo-600/[0.03] blur-[120px] rounded-full pointer-events-none select-none z-0" />

      {/* Spotlighting Search Overlay box */}
      <SpotlightSearch 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectLesson={handleLessonSelect}
      />

      {/* Mobile sidebar overlay backdrop */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar - sliding drawer on mobile and stationary menu on desk */}
      <div className={clsx(
        "fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-out lg:static lg:translate-x-0",
        isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <Sidebar 
          activeLessonId={activeLessonId} 
          onLessonSelect={handleLessonSelect} 
          onQuizSelect={handleQuizSelect}
          isQuizActive={isQuizActive}
          completedLessons={completedLessons}
        />
      </div>
      
      {/* Main Core Document Container */}
      <main className="flex-1 flex flex-col min-w-0 z-10 relative">
        {/* Top Header - Glassmorphic fixed panel */}
        <header className="sticky top-0 z-30 bg-[#04060f]/80 backdrop-blur-xl border-b border-white/[0.05] h-16 flex items-center justify-between px-6 lg:px-8 select-none">
          {/* Section Breadcrumbs */}
          <div className="flex items-center gap-3">
            {/* Mobile Sidebar Trigger icon */}
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="p-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-zinc-300 hover:text-white hover:bg-white/[0.08] lg:hidden transition-all focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
              title="Open Navigation"
            >
              <Menu size={18} />
            </button>

            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono tracking-wide">
              <span className="text-zinc-500 font-bold hover:text-zinc-400 transition-colors cursor-pointer">JAVA</span>
              <span className="text-zinc-600">/</span>
              {isQuizActive ? (
                <>
                  <span className="text-zinc-500 uppercase">PREPARATION</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-[#a5b4fc] font-bold">EXAM ARCHIVE</span>
                </>
              ) : (
                <>
                  <span className="text-zinc-500 uppercase max-w-[120px] md:max-w-xs truncate leading-none" title={activeSection?.title}>
                    {activeSection?.id.replace('-', ' ')}
                  </span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-[#a5b4fc] font-bold max-w-[150px] md:max-w-xs truncate leading-none">
                    {activeLesson?.title}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Interactive controls and status pills */}
          <div className="flex items-center gap-2.5 sm:gap-3 lg:gap-4">
            {/* Spotlight Search search activator container */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all text-xs font-mono select-none"
              title="Search Lessons (Ctrl+K)"
            >
              <Search size={13} />
              <span className="hidden md:inline text-[11px] text-zinc-500">Search notes...</span>
              <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded bg-[#0b1022] text-[9px] text-zinc-500 border border-white/5">⌘K</kbd>
            </button>

            {/* Multi-Theme Segmented Control Switcher */}
            <ThemeSwitcher theme={theme} onThemeChange={setTheme} />

            {/* Overall course progression element */}
            <div 
              onClick={handleQuizSelect}
              className="flex items-center gap-2.5 bg-indigo-500/[0.03] border border-indigo-500/10 hover:border-indigo-500/25 py-1.5 px-3 rounded-full transition-all cursor-pointer group"
              title="Click to view course evaluation"
            >
              <div className="text-[10px] font-mono font-bold text-zinc-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Completed: <span className="text-indigo-300 font-black group-hover:text-white transition-colors">{completionPercentage}%</span>
              </div>
              <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden hidden sm:block">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500" 
                  style={{ width: `${completionPercentage}%` }} 
                />
              </div>
            </div>
          </div>

          {/* Scrolling Reading Progress Line - Absolute bottom boundary of the header */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/[0.02]">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-400 transition-all duration-100 ease-out" 
              style={{ width: `${scrollProgress}%` }} 
            />
          </div>
        </header>

        {/* Dynamic Screen/View Port */}
        <div className="flex-1 overflow-y-auto w-full">
          <ContentArea 
            lesson={isQuizActive ? null : activeLesson} 
            quizzes={isQuizActive ? section4Quiz : undefined}
            completedLessons={completedLessons}
            onToggleCompletion={handleToggleCompletion}
            onNavigateNext={handleNavigateNext}
            onNavigatePrev={handleNavigatePrev}
            hasNext={hasNext || (currentLessonIndex === allLessons.length - 1)}
            hasPrev={hasPrev}
          />
        </div>
      </main>

      {/* Elegant scroll back up activator */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-700 text-white shadow-xl shadow-indigo-600/20 hover:from-indigo-500 hover:to-indigo-600 hover:scale-110 active:scale-95 transition-all outline-none border border-indigo-400/30 cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp size={16} className="stroke-[3]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
