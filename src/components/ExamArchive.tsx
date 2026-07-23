import React, { useState, useMemo, useEffect } from 'react';
import { examsData, ExamQuestion, SemesterExam } from '../data/exams';
import { 
  Search, Calendar, Award, Sparkles, BookOpen, Terminal, CheckCircle2, 
  Check, ChevronDown, ChevronRight, X, FileText, Bookmark, 
  Activity, Filter, Layers, CheckSquare, GraduationCap, ArrowUpDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { triggerHaptic } from '../utils/haptics';

export const ExamArchive: React.FC = () => {
  // Active semester selection ('all' or specific semester id)
  const [selectedSemester, setSelectedSemester] = useState<string>('all');
  // Selected tag filter
  const [selectedTag, setSelectedTag] = useState<string>('all');
  // Localized search input query text
  const [searchQuery, setSearchQuery] = useState<string>('');
  // Expanded question card IDs for showing answer blueprints
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  // List of completed/studied question IDs
  const [studiedQuestions, setStudiedQuestions] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('java_oop_studied_questions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist studied state progress
  useEffect(() => {
    localStorage.setItem('java_oop_studied_questions', JSON.stringify(studiedQuestions));
  }, [studiedQuestions]);

  // Aggregate all unique tag lists across all exam questions
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    examsData.forEach(exam => {
      exam.parts.forEach(part => {
        part.questions.forEach(q => {
          q.tags.forEach(tag => tags.add(tag));
        });
      });
    });
    return Array.from(tags).sort();
  }, []);

  // Filter and gather semester exams
  const filteredExams = useMemo(() => {
    return examsData.map(exam => {
      // Check if this exam matches semester filter
      if (selectedSemester !== 'all' && exam.id !== selectedSemester) {
        return { ...exam, parts: [] };
      }

      const filteredParts = exam.parts.map(part => {
        const filteredQ = part.questions.filter(q => {
          // Check search query matches text or tags
          const searchLower = searchQuery.toLowerCase();
          const matchesSearch = 
            q.text.toLowerCase().includes(searchLower) ||
            q.qNumber.toLowerCase().includes(searchLower) ||
            q.tags.some(tag => tag.toLowerCase().includes(searchLower));

          // Check tag matches
          const matchesTag = selectedTag === 'all' || q.tags.includes(selectedTag);

          return matchesSearch && matchesTag;
        });

        return { ...part, questions: filteredQ };
      }).filter(part => part.questions.length > 0);

      return { ...exam, parts: filteredParts };
    }).filter(exam => exam.parts.length > 0);
  }, [selectedSemester, selectedTag, searchQuery]);

  // Total available questions in dataset
  const totalQuestionsCount = useMemo(() => {
    let count = 0;
    examsData.forEach(exam => {
      exam.parts.forEach(part => {
        count += part.questions.length;
      });
    });
    return count;
  }, []);

  // Matching questions in current filter
  const matchingQuestionsCount = useMemo(() => {
    let count = 0;
    filteredExams.forEach(exam => {
      exam.parts.forEach(part => {
        count += part.questions.length;
      });
    });
    return count;
  }, [filteredExams]);

  // Studied percentage score
  const readinessPercentage = useMemo(() => {
    if (totalQuestionsCount === 0) return 0;
    return Math.round((studiedQuestions.length / totalQuestionsCount) * 100);
  }, [studiedQuestions, totalQuestionsCount]);

  const toggleQuestionExpanded = (id: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    triggerHaptic('light');
  };

  const toggleStudiedStatus = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering accordion expansion
    const isRemoving = studiedQuestions.includes(id);
    setStudiedQuestions(prev => {
      if (prev.includes(id)) {
        return prev.filter(qId => qId !== id);
      } else {
        return [...prev, id];
      }
    });
    triggerHaptic(isRemoving ? 'medium' : 'success');
  };

  const markAllSemesterStudied = (semesterId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const exam = examsData.find(ex => ex.id === semesterId);
    if (!exam) return;

    const semesterQuestionIds: string[] = [];
    exam.parts.forEach(part => {
      part.questions.forEach(q => semesterQuestionIds.push(q.id));
    });

    const allAreCompleted = semesterQuestionIds.every(id => studiedQuestions.includes(id));
    
    if (allAreCompleted) {
      // Remove all questions of this semester
      setStudiedQuestions(prev => prev.filter(id => !semesterQuestionIds.includes(id)));
      triggerHaptic('medium');
    } else {
      // Add missing questions of this semester
      setStudiedQuestions(prev => {
        const added = [...prev];
        semesterQuestionIds.forEach(id => {
           if (!added.includes(id)) added.push(id);
        });
        return added;
      });
      triggerHaptic('success');
    }
  };

  // Quick reset for all filters
  const resetFilters = () => {
    setSelectedSemester('all');
    setSelectedTag('all');
    setQuerySafe('');
    triggerHaptic('light');
  };

  const setQuerySafe = (val: string) => {
    setSearchQuery(val);
  };

  return (
    <div className="exam-archive-container space-y-8 pb-10">
      {/* Immersive Header Banner */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#0d1430] to-[#080d21] p-6 md:p-8 border border-white/5 shadow-2xl relative overflow-hidden select-none">
        {/* Abstract design vector glows */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute left-1/3 bottom-0 w-44 h-44 bg-violet-600/5 blur-3xl rounded-full" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest font-mono">
              <Award size={12} className="animate-spin-slow text-amber-500" /> Academic Exam Repository
            </span>
            <h1 className="text-2xl md:text-3.5xl font-extrabold text-white tracking-tight leading-none">
              Java Semester Exam Archive
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans font-medium">
              A comprehensive study dashboard containing authentic exam papers from previous semesters. Filter by concepts, explore clean blueprint solutions, and trace your prep readiness score.
            </p>
          </div>

          {/* Exam Readiness Tracker widget */}
          <div className="flex-shrink-0 bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 md:p-5 flex items-center gap-4 shadow-xl backdrop-blur-md">
            <div className="relative flex items-center justify-center">
              {/* Retro Radial Progress loop */}
              <svg className="w-16 h-16 transform -rotate-90">
                <circle 
                  cx="32" 
                  cy="32" 
                  r="26" 
                  stroke="rgba(255,255,255,0.03)" 
                  strokeWidth="5.5" 
                  fill="transparent" 
                />
                <circle 
                  cx="32" 
                  cy="32" 
                  r="26" 
                  stroke="var(--quiz-text-active)" 
                  strokeWidth="5.5" 
                  fill="transparent" 
                  strokeDasharray={2 * Math.PI * 26}
                  strokeDashoffset={2 * Math.PI * 26 * (1 - readinessPercentage / 100)}
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <span className="absolute text-sm font-bold font-mono text-[var(--quiz-text-active)]">
                {readinessPercentage}%
              </span>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                Course Prep Score
              </div>
              <div className="text-md font-extrabold text-zinc-200 mt-0.5">
                {studiedQuestions.length} of {totalQuestionsCount} Solved
              </div>
              <div className="text-[9px] text-[#22e293] font-bold flex items-center gap-1 mt-1">
                <CheckCircle2 size={10} /> Continuous Evaluation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of study control center filters */}
      <div className="bg-[#080d21]/50 border border-white/[0.04] p-5 rounded-2xl shadow-lg space-y-4 relative select-none">
        
        {/* Row 1: Unified interactive filter bars of semesters and search */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Semester Toggle Grid */}
          <div className="lg:col-span-8 flex flex-col gap-2">
            <label className="text-[9px] font-mono font-black text-zinc-500 uppercase tracking-widest flex items-center gap-1.5 matches-badge">
              <Calendar size={10} className="text-indigo-400" /> Filter by Academic Session
            </label>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => {
                  setSelectedSemester('all');
                  triggerHaptic('light');
                }}
                className={`px-3 py-2 rounded-xl text-xs font-semibold select-none cursor-pointer transition-all ${
                  selectedSemester === 'all'
                    ? 'bg-indigo-600 border border-indigo-500/30 text-white shadow-md'
                    : 'bg-white/[0.02] border border-white/5 text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
                }`}
              >
                All Semesters
              </button>
              {examsData.map((exam) => (
                <button
                  key={exam.id}
                  onClick={() => {
                    setSelectedSemester(exam.id);
                    triggerHaptic('light');
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold select-none cursor-pointer transition-all ${
                    selectedSemester === exam.id
                      ? 'bg-indigo-600 border border-indigo-500/30 text-white shadow-md'
                      : 'bg-white/[0.02] border border-white/5 text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
                  }`}
                >
                  {exam.semester}
                </button>
              ))}
            </div>
          </div>

          {/* Search box implementation */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <label className="text-[9px] font-mono font-black text-zinc-500 uppercase tracking-widest flex items-center gap-1.5 matches-badge">
              <Search size={10} className="text-indigo-400" /> Live Question Query Search
            </label>
            <div className="relative group/examsearch">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within/examsearch:text-indigo-400 transition-colors" />
              <input
                type="text"
                placeholder="Search by keywords (e.g. scanner, thread)..."
                value={searchQuery}
                onChange={(e) => setQuerySafe(e.target.value)}
                className="w-full pl-10 pr-9 py-2 rounded-xl bg-white/[0.02] border border-white/5 font-sans text-xs focus:bg-[#0c1126] text-white focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 shadow-inner transition-all font-medium placeholder-zinc-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setQuerySafe('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 bg-white/5 hover:bg-white/10 rounded-full p-0.5 transition-colors cursor-pointer"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Row 2: Dynamic horizontally scrollable concept badges selector */}
        <div className="flex flex-col gap-2 pt-2 border-t border-white/[0.03]">
          <label className="text-[9px] font-mono font-black text-zinc-500 uppercase tracking-widest flex items-center gap-1.5 matches-badge">
            <Filter size={10} className="text-indigo-400" /> Filter by Core OOP Concepts / Topics
          </label>
          <div className="flex flex-wrap gap-1.5 overflow-x-auto py-1 custom-scrollbar">
            <button
              onClick={() => {
                setSelectedTag('all');
                triggerHaptic('light');
              }}
              className={`px-2.5 py-1.5 rounded-lg text-[10.5px] font-semibold flex-shrink-0 cursor-pointer select-none transition-all ${
                selectedTag === 'all'
                  ? 'bg-[var(--quiz-bg-active)] border border-[var(--quiz-border-active)] text-[var(--quiz-text-active)] shadow-sm'
                  : 'bg-white/[0.015] border border-white/[0.03] text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200'
              }`}
            >
              💼 All Concepts
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(tag);
                  triggerHaptic('light');
                }}
                className={`px-2.5 py-1.5 rounded-lg text-[10.5px] font-semibold flex-shrink-0 cursor-pointer select-none transition-all ${
                  selectedTag === tag
                    ? 'bg-[var(--quiz-bg-active)] border border-[var(--quiz-border-active)] text-[var(--quiz-text-active)] shadow-sm animate-pulse-subtle'
                    : 'bg-white/[0.015] border border-white/[0.03] text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Row 3: Status check filter metadata stats */}
        <div className="flex items-center justify-between py-1 px-1 bg-white/[0.01] rounded-lg border border-white/[0.02] text-xs font-mono select-none">
          <div className="text-zinc-500 text-[10px] flex items-center gap-2">
            <Activity size={12} className="text-emerald-400" />
            Showing <span className="text-indigo-300 font-bold">{matchingQuestionsCount}</span> of <span className="text-zinc-400">{totalQuestionsCount}</span> Total Questions
          </div>
          {(selectedSemester !== 'all' || selectedTag !== 'all' || searchQuery !== '') && (
            <button
              onClick={resetFilters}
              className="text-[10px] text-amber-500 font-bold flex items-center gap-1 hover:text-amber-400 transition-colors cursor-pointer select-none"
            >
              Reset Filters <X size={10} />
            </button>
          )}
        </div>
      </div>

      {/* Main interactive exams explorer timeline cards */}
      <div className="space-y-10">
        {filteredExams.length === 0 ? (
          <div className="text-center py-16 bg-white/[0.01] rounded-2xl border border-dashed border-white/5 select-none">
            <FileText size={40} className="text-zinc-600 mx-auto mb-4 animate-bounce-slow" />
            <h3 className="text-lg font-bold text-zinc-300">No Matching Exam Questions Found</h3>
            <p className="text-xs text-zinc-500 max-w-sm mx-auto mt-1 font-medium">
              Try readjusting your conceptual filters, changing semesters, or clearing up your search input keywords.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl hover:bg-indigo-500 transition-colors shadow-lg cursor-pointer"
            >
              Reset Search Parameters
            </button>
          </div>
        ) : (
          filteredExams.map((exam) => {
            // Check if all filtered questions of this semester are completed/studied
            const allSemesterQuestions: string[] = [];
            exam.parts.forEach(part => {
              part.questions.forEach(q => allSemesterQuestions.push(q.id));
            });
            const allSemesterStudied = allSemesterQuestions.every(id => studiedQuestions.includes(id));

            return (
              <div 
                key={exam.id} 
                className="semester-group bg-[#060a17]/40 border border-white/[0.03] rounded-2xl p-5 md:p-6 shadow-xl relative overflow-hidden"
              >
                {/* Horizontal dynamic color line based on semester */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-[#22e293] to-indigo-500" />
                
                {/* Semester Header section */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.03] mb-6 select-none">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold font-mono">
                      {exam.semester.substring(0, 2)}
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold text-white tracking-tight">{exam.semester} Semester</h2>
                      <p className="text-[10px] text-zinc-500 font-mono font-medium mt-0.5">COMPLETE IIUC EXAM PAPER RECORD</p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => markAllSemesterStudied(exam.id, e)}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all cursor-pointer flex items-center gap-1.5 select-none ${
                      allSemesterStudied
                        ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25'
                        : 'bg-white/[0.01] border-white/5 text-zinc-400 hover:bg-white/[0.03] hover:text-white'
                    }`}
                  >
                    {allSemesterStudied ? (
                      <>
                        <Check size={10} className="stroke-[3]" /> All Solved
                      </>
                    ) : (
                      <>
                        <CheckSquare size={10} /> Mark Semester Solved
                      </>
                    )}
                  </button>
                </div>

                {/* Exam Parts sections iteration */}
                <div className="space-y-6">
                  {exam.parts.map((part) => (
                    <div key={part.name} className="space-y-3">
                      <div className="flex items-center gap-2 select-none">
                        <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#22e293] bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/15">
                          {part.name}
                        </span>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-emerald-500/20 to-transparent" />
                      </div>

                      {/* Questions list inside specific Part */}
                      <div className="grid grid-cols-1 gap-3.5">
                        {part.questions.map((q) => {
                          const isExpanded = !!expandedQuestions[q.id];
                          const isStudied = studiedQuestions.includes(q.id);

                          return (
                            <div
                              key={q.id}
                              id={q.id}
                              className={`question-card rounded-xl border transition-all duration-300 overflow-hidden ${
                                isExpanded
                                  ? 'bg-[#0d1430]/40 border-indigo-500/30 shadow-[0_4px_24px_rgba(99,102,241,0.06)]'
                                  : 'bg-[#040713]/70 border-white/[0.03] hover:border-white/10 hover:bg-[#070b1a]/90'
                              }`}
                            >
                              {/* Card Header Accordion Trigger */}
                              <div
                                onClick={() => toggleQuestionExpanded(q.id)}
                                className="px-5 py-4 flex items-start gap-4 cursor-pointer select-none"
                              >
                                {/* estudiado tracker checkbox */}
                                <button
                                  onClick={(e) => toggleStudiedStatus(q.id, e)}
                                  className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all border flex-shrink-0 mt-0.5 cursor-pointer ${
                                    isStudied
                                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.15)]'
                                      : 'bg-white/[0.01] border-white/10 text-zinc-600 hover:border-indigo-500/40 hover:text-zinc-400'
                                  }`}
                                  title={isStudied ? "Selected: Solved!" : "Mark as Solved"}
                                >
                                  {isStudied && <Check size={12} className="stroke-[3.5]" />}
                                </button>

                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <span className="font-mono text-[11px] font-black text-indigo-400 tracking-wider bg-indigo-500/5 border border-indigo-500/15 px-2 py-0.5 rounded-md">
                                      {q.qNumber}
                                    </span>
                                    {q.tags.map(tag => (
                                      <span 
                                        key={tag}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setSelectedTag(tag);
                                        }}
                                        className="text-[9px] font-mono text-zinc-500 font-bold hover:text-white hover:bg-indigo-650 transition-colors bg-white/[0.02] border border-white/[0.04] px-1.5 py-0.5 rounded"
                                      >
                                        #{tag}
                                      </span>
                                    ))}
                                    {isStudied && (
                                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded font-black tracking-wider flex items-center gap-1 select-none">
                                        ✓ STUDIED SOLVED
                                      </span>
                                    )}
                                  </div>

                                  <p className="text-xs md:text-[13.5px] text-zinc-300 font-medium leading-relaxed select-text">
                                    {q.text}
                                  </p>
                                </div>

                                <div className="text-zinc-500 hover:text-zinc-300 transition-colors p-1 flex-shrink-0">
                                  {isExpanded ? (
                                    <ChevronDown size={16} className="text-indigo-400 rotate-180 transition-transform duration-300" />
                                  ) : (
                                    <ChevronRight size={16} className="text-zinc-600 transition-transform duration-300" />
                                  )}
                                </div>
                              </div>

                              {/* Accordion solutions contents */}
                              <AnimatePresence initial={false}>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.28, ease: "easeInOut" }}
                                  >
                                    <div className="px-5 pb-5 pt-1.5 border-t border-white/[0.02] bg-black/[0.15]">
                                      
                                      {/* Banner helper titles */}
                                      <div className="flex items-center gap-2 mb-4 select-none">
                                        <Sparkles size={11} className="text-amber-400 animate-pulse" />
                                        <span className="text-[10px] font-mono font-black text-amber-400 uppercase tracking-widest bg-amber-500/5 border border-amber-500/10 px-2 py-0.5 rounded">
                                          Java Masterclass Solved Blueprint
                                        </span>
                                      </div>

                                      {/* Rendered answers markdown */}
                                      <div className="markdown-body text-xs md:text-[13px] text-zinc-300 leading-relaxed pr-0.5 select-text">
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                          {q.answer}
                                        </ReactMarkdown>
                                      </div>

                                      {/* Footer studied confirm action toggle bar */}
                                      <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.03] select-none text-[10.5px]">
                                        <div className="text-zinc-500 font-medium">
                                          Did you understand this explanation? Code it yourself to practice.
                                        </div>
                                        <button
                                          onClick={(e) => toggleStudiedStatus(q.id, e)}
                                          className={`px-3 py-1.5 rounded-lg font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                                            isStudied
                                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                                              : 'bg-indigo-600 hover:bg-indigo-500 border-indigo-500/30 text-white shadow-indigo-650/10'
                                          }`}
                                        >
                                          {isStudied ? 'Solved Practiced ✓' : 'Mark as Solved Task'}
                                        </button>
                                      </div>

                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
