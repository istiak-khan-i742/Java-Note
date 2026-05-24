import React, { useState, useEffect, useMemo } from 'react';
import { sections, Lesson } from '../data/lessons';
import { ChevronDown, ChevronRight, GraduationCap, Check, Search, X, BookOpen, Layers } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'motion/react';
import { BinaryIcon } from './BinaryIcon';

interface SidebarProps {
  activeLessonId: string;
  onLessonSelect: (lessonId: string) => void;
  onQuizSelect: () => void;
  isQuizActive: boolean;
  completedLessons: string[];
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeLessonId, 
  onLessonSelect, 
  onQuizSelect,
  isQuizActive,
  completedLessons
}) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    // Open the first section by default
    return { 'home': true, 'section-1': true };
  });

  // Auto-expand the section containing the active lesson
  useEffect(() => {
    if (isQuizActive) return;
    const activeSection = sections.find(s => s.lessons.some(l => l.id === activeLessonId));
    if (activeSection) {
      setExpandedSections(prev => ({
        ...prev,
        [activeSection.id]: true
      }));
    }
  }, [activeLessonId, isQuizActive]);

  // Expand all sections if the user is filtering, so matches are visible
  useEffect(() => {
    if (filterQuery.trim()) {
      const allExpanded: Record<string, boolean> = {};
      sections.forEach(s => {
        allExpanded[s.id] = true;
      });
      setExpandedSections(allExpanded);
    }
  }, [filterQuery]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Filter sections and lessons
  const filteredSections = useMemo(() => {
    const q = filterQuery.toLowerCase().trim();
    if (!q) return sections;

    return sections.map(section => {
      const matchingLessons = section.lessons.filter(lesson =>
        lesson.title.toLowerCase().includes(q) ||
        lesson.description.toLowerCase().includes(q)
      );
      return {
        ...section,
        lessons: matchingLessons
      };
    }).filter(section => section.lessons.length > 0);
  }, [filterQuery]);

  // Calculate completed section progress
  const getSectionProgress = (sectionId: string, sectionLessons: Lesson[]) => {
    if (sectionLessons.length === 0) return { completed: 0, total: 0 };
    const completed = sectionLessons.filter(l => completedLessons.includes(l.id)).length;
    return { completed, total: sectionLessons.length };
  };

  // Theme helper for distinct section highlights
  const getSectionThemeClass = (sectionId: string, element: 'containerActive' | 'accentBar' | 'text' | 'bg' | 'glow') => {
    switch (sectionId) {
      case 'home':
        return {
          containerActive: "from-indigo-500/[0.04] to-transparent border-indigo-500/15 shadow-[0_4px_20px_rgba(99,102,241,0.03)] bg-[var(--surface-card)]",
          accentBar: "bg-[#6366f1] shadow-[0_0_8px_rgba(99,102,241,0.45)]",
          text: "text-indigo-300",
          bg: "bg-[#6366f1]",
          glow: "bg-indigo-400/10"
        }[element];
      case 'section-1':
        return {
          containerActive: "from-[#10b981]/[0.04] to-transparent border-[#10b981]/15 shadow-[0_4px_20px_rgba(16,185,129,0.03)] bg-[var(--surface-card)]",
          accentBar: "bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.45)]",
          text: "text-emerald-300",
          bg: "bg-[#10b981]",
          glow: "bg-emerald-400/10"
        }[element];
      case 'section-2':
        return {
          containerActive: "from-[#06b6d4]/[0.04] to-transparent border-[#06b6d4]/15 shadow-[0_4px_20px_rgba(6,182,212,0.03)] bg-[var(--surface-card)]",
          accentBar: "bg-[#06b6d4] shadow-[0_0_8px_rgba(6,182,212,0.45)]",
          text: "text-cyan-300",
          bg: "bg-[#06b6d4]",
          glow: "bg-cyan-400/10"
        }[element];
      case 'section-3':
        return {
          containerActive: "from-[#8b5cf6]/[0.04] to-transparent border-[#8b5cf6]/15 shadow-[0_4px_20px_rgba(139,92,246,0.03)] bg-[var(--surface-card)]",
          accentBar: "bg-[#8b5cf6] shadow-[0_0_8px_rgba(139,92,246,0.45)]",
          text: "text-violet-300",
          bg: "bg-[#8b5cf6]",
          glow: "bg-violet-400/10"
        }[element];
      case 'section-4':
        return {
          containerActive: "from-[#f43f5e]/[0.04] to-transparent border-[#f43f5e]/15 shadow-[0_4px_20px_rgba(244,63,94,0.03)] bg-[var(--surface-card)]",
          accentBar: "bg-[#f43f5e] shadow-[0_0_8px_rgba(244,63,94,0.45)]",
          text: "text-rose-300",
          bg: "bg-[#f43f5e]",
          glow: "bg-rose-400/10"
        }[element];
      case 'section-5':
        return {
          containerActive: "from-[#f59e0b]/[0.04] to-transparent border-[#f59e0b]/15 shadow-[0_4px_20px_rgba(245,158,11,0.03)] bg-[var(--surface-card)]",
          accentBar: "bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.45)]",
          text: "text-amber-300",
          bg: "bg-[#f59e0b]",
          glow: "bg-amber-400/10"
        }[element];
      case 'section-6':
        return {
          containerActive: "from-[#14b8a6]/[0.04] to-transparent border-[#14b8a6]/15 shadow-[0_4px_20px_rgba(20,184,166,0.03)] bg-[var(--surface-card)]",
          accentBar: "bg-[#14b8a6] shadow-[0_0_8px_rgba(20,184,166,0.45)]",
          text: "text-teal-300",
          bg: "bg-[#14b8a6]",
          glow: "bg-teal-400/10"
        }[element];
      case 'section-7':
        return {
          containerActive: "from-[#4f46e5]/[0.04] to-transparent border-[#4f46e5]/15 shadow-[0_4px_20px_rgba(79,70,229,0.03)] bg-[var(--surface-card)]",
          accentBar: "bg-[#4f46e5] shadow-[0_0_8px_rgba(79,70,229,0.45)]",
          text: "text-indigo-300",
          bg: "bg-[#4f46e5]",
          glow: "bg-indigo-500/10"
        }[element];
      default:
        return {
          containerActive: "from-zinc-500/[0.04] to-transparent border-zinc-500/15 shadow-[0_4px_20px_rgba(113,113,122,0.03)] bg-[var(--surface-card)]",
          accentBar: "bg-zinc-500",
          text: "text-zinc-300",
          bg: "bg-zinc-500",
          glow: "bg-zinc-400/10"
        }[element];
    }
  };

  return (
    <div id="sidebar" className="w-[300px] min-w-[300px] bg-[var(--bg-sidebar)] border-r border-[var(--border-subtle)] h-screen sticky top-0 flex flex-col z-40 shadow-2xl overflow-hidden">
      {/* Brand Section */}
      <div className="p-6 pb-5 border-b border-[var(--border-subtle)] bg-gradient-to-b from-[var(--bg-sidebar-header)] to-[var(--bg-sidebar)] relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-strong)]/30 to-transparent pointer-events-none" />
        <div className="flex items-center gap-3">
          <BinaryIcon className="w-10 h-10 select-none flex-shrink-0 filter drop-shadow-[0_4px_12px_rgba(34,226,147,0.15)] hover:scale-105 transition-transform duration-300" />
          <div>
            <div className="font-extrabold text-[14.5px] tracking-wide uppercase text-[var(--text-white)]">
              Java Masterclass
            </div>
            <div className="text-[9px] text-[var(--accent)] font-mono font-bold tracking-widest flex items-center gap-1 mt-0.5">
              <Layers size={10} className="text-[var(--accent)]" /> OOP ARCHITECTURE
            </div>
          </div>
        </div>
      </div>

      {/* Filter Lessons Input with premium clean style */}
      <div className="px-4 py-3.5 border-b border-[var(--border-subtle)] bg-gradient-to-b from-[var(--bg-sidebar-header)]/80 to-[var(--bg-sidebar)]/40 backdrop-blur-md">
        <div className="relative group/search">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within/search:text-[var(--accent)] transition-colors" />
          <input
            type="text"
            placeholder="Search masterclass lessons..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-[var(--bg-app)]/45 border border-[var(--border-subtle)] font-sans text-[11.5px] focus:bg-[var(--surface-card)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]/40 focus:ring-1 focus:ring-[var(--accent)]/20 shadow-inner transition-all font-medium placeholder-[var(--text-muted)]/60"
          />
          {filterQuery && (
            <button
              onClick={() => setFilterQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--border-subtle)] hover:bg-[var(--border-strong)] rounded-full p-0.5 transition-colors"
            >
              <X size={10} />
            </button>
          )}
        </div>
      </div>
      
      {/* Scrollable Document Tree */}
      <div className="flex-1 overflow-y-auto px-3.5 py-5 space-y-3.5 custom-scrollbar bg-transparent">
        {filteredSections.map((section) => {
          const isExpanded = expandedSections[section.id];
          const progress = getSectionProgress(section.id, section.lessons);
          const isEntireSectionCompleted = progress.total > 0 && progress.completed === progress.total;

          return (
            <div 
              key={section.id} 
              className={clsx(
                "rounded-xl overflow-hidden border transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.15)]",
                isExpanded 
                  ? getSectionThemeClass(section.id, 'containerActive')
                  : "bg-[var(--bg-sidebar-header)]/30 border-[var(--border-subtle)] hover:bg-[var(--bg-sidebar-hover)] hover:border-[var(--border-strong)]/40"
              )}
            >
              {/* Collapsible Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className={clsx(
                  "w-full flex items-center justify-between px-3.5 py-3 text-left transition-all group relative overflow-hidden",
                  isExpanded ? "bg-[var(--bg-sidebar-hover)]/30" : "hover:bg-[var(--bg-sidebar-hover)]/20"
                )}
              >
                {/* Accent mini glow line */}
                {isExpanded && (
                  <div className={clsx("absolute top-0 left-0 right-0 h-[1.5px]", getSectionThemeClass(section.id, 'accentBar'))} />
                )}

                <div className="flex-1 pr-2">
                  <div className="text-[11px] font-bold text-[var(--text-secondary)] group-hover:text-[var(--text-white)] transition-colors tracking-wide line-clamp-1 uppercase font-sans">
                    {section.title}
                  </div>
                  
                  {/* Clean gradient progress row bar */}
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex-1 h-[3.5px] bg-[var(--border-strong)]/30 rounded-full overflow-hidden">
                      <div 
                        className={clsx(
                          "h-full transition-all duration-500 rounded-full",
                          isEntireSectionCompleted 
                            ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
                            : getSectionThemeClass(section.id, 'bg')
                        )}
                        style={{ width: `${(progress.completed / (progress.total || 1)) * 100}%` }}
                      />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors flex-shrink-0">
                      {progress.completed}/{progress.total}
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0 ml-1">
                  {isExpanded ? (
                    <ChevronDown size={13} className="text-[var(--text-muted)] group-hover:text-[var(--text-white)] transition-colors" />
                  ) : (
                    <ChevronRight size={13} className="text-[var(--text-muted)] group-hover:text-[var(--text-white)] transition-colors" />
                  )}
                </div>
              </button>

              {/* Lesson buttons */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="overflow-hidden bg-[var(--bg-app)]/45 border-t border-[var(--border-subtle)] py-2 px-1.5 space-y-1 pl-4 relative"
                  >
                    {/* Vertical timeline guide bar */}
                    <div className="absolute left-2.5 top-0 bottom-0 w-[1px] bg-[var(--border-strong)]/30" />

                    {section.lessons.length === 0 ? (
                      <div className="px-3.5 py-2 text-xs text-[var(--text-muted)] italic font-sans font-medium">No matches found</div>
                    ) : (
                      section.lessons.map((lesson) => {
                        const isSelected = !isQuizActive && activeLessonId === lesson.id;
                        const isCompleted = completedLessons.includes(lesson.id);
                        const themeBar = getSectionThemeClass(section.id, 'accentBar');

                        return (
                          <button
                            key={lesson.id}
                            onClick={() => onLessonSelect(lesson.id)}
                            className={clsx(
                              "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[11.5px] transition-all text-left relative overflow-hidden group/item",
                              isSelected 
                                ? clsx("text-[var(--text-white)] font-semibold shadow-sm bg-gradient-to-r to-transparent", 
                                    section.id === 'home' ? 'from-indigo-500/[0.12] bg-indigo-500/[0.04]' :
                                    section.id === 'section-1' ? 'from-emerald-500/[0.12] bg-emerald-500/[0.04]' :
                                    section.id === 'section-2' ? 'from-cyan-500/[0.12] bg-cyan-500/[0.04]' :
                                    section.id === 'section-3' ? 'from-violet-500/[0.12] bg-violet-500/[0.04]' :
                                    section.id === 'section-4' ? 'from-rose-500/[0.12] bg-rose-500/[0.04]' :
                                    section.id === 'section-5' ? 'from-amber-500/[0.12] bg-amber-500/[0.04]' :
                                    section.id === 'section-6' ? 'from-teal-500/[0.12] bg-teal-500/[0.04]' :
                                    'from-indigo-500/[0.12] bg-indigo-500/[0.04]'
                                  ) 
                                : "text-[var(--text-secondary)] hover:bg-[var(--bg-sidebar-hover)] hover:text-[var(--text-white)]"
                            )}
                          >
                            {/* Thin vertical border glow bar for active state */}
                            {isSelected && (
                              <div className={clsx("absolute left-0 top-0 bottom-0 w-[2px]", themeBar)} />
                            )}

                            {/* Complete State Circle Indicators */}
                            <div className="relative flex items-center justify-center flex-shrink-0">
                              {isCompleted ? (
                                <div className="w-[14px] h-[14px] rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-500 dark:text-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.15)]">
                                  <Check size={9} className="stroke-[3]" />
                                </div>
                              ) : (
                                <div className={clsx(
                                  "w-[14px] h-[14px] rounded-full border flex-shrink-0 transition-all duration-300 relative flex items-center justify-center",
                                  isSelected 
                                    ? clsx("border-opacity-65", 
                                        section.id === 'home' ? 'border-indigo-400 bg-indigo-500/5' :
                                        section.id === 'section-1' ? 'border-emerald-400 bg-emerald-500/5' :
                                        section.id === 'section-2' ? 'border-cyan-400 bg-cyan-500/5' :
                                        section.id === 'section-3' ? 'border-violet-400 bg-violet-500/5' :
                                        section.id === 'section-4' ? 'border-rose-400 bg-rose-500/5' :
                                        section.id === 'section-5' ? 'border-amber-400 bg-amber-500/5' :
                                        section.id === 'section-6' ? 'border-teal-400 bg-teal-500/5' :
                                        'border-indigo-400 bg-indigo-500/5'
                                      ) 
                                    : "border-[var(--border-strong)] group-hover/item:border-[var(--accent)]/50"
                                )}>
                                  {/* Center high tech dot indicator on hover */}
                                  <div className={clsx(
                                    "w-[5px] h-[5px] rounded-full transition-transform duration-300 scale-0 group-hover/item:scale-100",
                                    section.id === 'home' ? 'bg-indigo-400' :
                                    section.id === 'section-1' ? 'bg-emerald-400' :
                                    section.id === 'section-2' ? 'bg-cyan-400' :
                                    section.id === 'section-3' ? 'bg-violet-400' :
                                    section.id === 'section-4' ? 'bg-rose-400' :
                                    section.id === 'section-5' ? 'bg-amber-400' :
                                    section.id === 'section-6' ? 'bg-teal-400' :
                                    'bg-indigo-400'
                                  )} />
                                </div>
                              )}
                            </div>

                            <span className="flex-1 truncate font-medium">{lesson.title}</span>
                          </button>
                        );
                      })
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Final Assessment Premium Cosmic Card Section */}
        <div className="pt-5 border-t border-[var(--border-subtle)] space-y-2 mt-2">
          <div className="px-3.5 text-[9px] font-mono font-bold text-[var(--text-muted)] tracking-widest uppercase mb-1">
            Exam Preparation
          </div>
          <button
            onClick={onQuizSelect}
            className={clsx(
              "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs transition-all text-left border relative overflow-hidden group",
              isQuizActive 
                ? "bg-[var(--quiz-bg-active)] border-[var(--quiz-border-active)] text-[var(--quiz-text-active)] font-bold shadow-[0_0_24px_rgba(245,158,11,0.08)] scale-[1.01]" 
                : "bg-gradient-to-r from-[var(--bg-app)]/10 to-transparent border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--quiz-border-hover)] hover:bg-[var(--quiz-bg-hover)] hover:text-[var(--quiz-text-hover)]"
            )}
          >
            {/* Dynamic ambient hover glow */}
            <div className={clsx(
              "absolute -right-4 -top-4 w-12 h-12 rounded-full blur-md opacity-20 pointer-events-none transition-all duration-500",
              isQuizActive ? "bg-amber-500 scale-125" : "bg-amber-500/10 group-hover:scale-110 group-hover:opacity-30"
            )} />

            <div className={clsx(
              "w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0",
              isQuizActive 
                ? "bg-amber-500/15 text-[var(--quiz-text-active)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]" 
                : "bg-[var(--border-subtle)] text-[var(--text-muted)] group-hover:bg-[var(--quiz-bg-active)] group-hover:text-[var(--quiz-text-hover)]"
            )}>
              <GraduationCap size={15} className={isQuizActive ? "animate-bounce" : ""} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[var(--text-white)] group-hover:text-[var(--quiz-text-hover)] transition-colors">🏛️ Semester Exam Archive</div>
              <div className="text-[9.5px] text-[var(--text-muted)] font-medium mt-0.5 group-hover:text-[var(--quiz-text-hover)]/70 transition-colors">Practice previous years' questions</div>
            </div>
          </button>
        </div>
      </div>

      {/* Developer Credits Footer */}
      <div id="developer-footer" className="py-3 border-t border-[var(--border-subtle)] bg-[var(--bg-sidebar-header)]/40 text-center flex items-center justify-center select-none">
        <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
          made by : <span className="text-[var(--accent)] font-bold">&lt;Istiak Khan /&gt;</span>
        </span>
      </div>
    </div>
  );
};

