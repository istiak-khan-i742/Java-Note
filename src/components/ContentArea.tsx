import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Lesson, Quiz } from '../data/lessons';
import { QuizCard } from './QuizCard';
import { ExamArchive } from './ExamArchive';
import { CodeBlock } from './CodeBlock';
import { CourseOverviewDashboard } from './CourseOverviewDashboard';
import { motion } from 'motion/react';
import { BookOpen, Check, ArrowRight, ArrowLeft, Bookmark, GraduationCap, ChevronRight, Award } from 'lucide-react';
import { clsx } from 'clsx';

interface ContentAreaProps {
  lesson: Lesson | null;
  quizzes?: Quiz[];
  completedLessons: string[];
  onToggleCompletion: (lessonId: string) => void;
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

// Custom static markdown components mapping for custom layouts
const markdownComponents = {
  pre: ({ children }: any) => {
    const childArray = React.Children.toArray(children);
    const codeChild = childArray[0] as any;
    
    let codeValue = '';
    let language = 'java';
    
    if (codeChild && codeChild.props) {
      codeValue = String(codeChild.props.children || '');
      const className = codeChild.props.className || '';
      const match = /language-(\w+)/.exec(className);
      if (match) {
        language = match[1];
      }
    } else {
      const extractText = (node: any): string => {
        if (!node) return '';
        if (typeof node === 'string') return node;
        if (Array.isArray(node)) return node.map(extractText).join('');
        if (node.props && node.props.children) return extractText(node.props.children);
        return '';
      };
      codeValue = extractText(children);
    }

    // If we got valid code, render our ultimate interactive playground CodeBlock!
    if (codeValue.trim()) {
      return <CodeBlock language={language} value={codeValue.trim()} />;
    }

    // Default fallback
    return (
      <pre className="bg-[#0b0e1a] border border-white/5 p-5 rounded-2xl overflow-x-auto font-mono text-xs md:text-[13px] leading-relaxed text-zinc-300">
        {children}
      </pre>
    );
  },
  h1: ({ children }: any) => (
    <h1 className="text-xl font-extrabold text-white mt-12 mb-5 tracking-tight border-b border-white/5 pb-2.5 uppercase text-indigo-300 font-sans">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-lg font-bold text-white mt-8 mb-4 border-l-4 border-indigo-500 pl-3.5 flex items-center gap-2 font-sans">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-base font-bold text-[#a5b4fc] mt-6 mb-3 font-sans">
      {children}
    </h3>
  ),
  p: ({ children }: any) => (
    <p className="text-zinc-300 leading-relaxed text-[15px] mb-4.5 font-normal font-sans">
      {children}
    </p>
  ),
  ul: ({ children }: any) => (
    <ul className="list-disc pl-5 mb-5 space-y-2 text-zinc-300 text-[15px] font-sans">
      {children}
    </ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal pl-5 mb-5 space-y-2 text-zinc-300 text-[15px] font-sans">
      {children}
    </ol>
  ),
  li: ({ children }: any) => (
    <li className="pl-1 text-zinc-300 leading-relaxed font-sans">
      {children}
    </li>
  ),
  code: ({ className, children, ...props }: any) => {
    // Standard inline code highlight snippet style
    return (
      <code className="bg-indigo-500/10 border border-indigo-500/15 text-indigo-200 font-mono text-[12.5px] px-1.5 py-0.5 rounded font-medium" {...props}>
        {children}
      </code>
    );
  },
  table: ({ children }: any) => (
    <div className="overflow-x-auto my-7 rounded-xl border border-white/5 shadow-2xl bg-[#070c1e]/60">
      <table className="min-w-full divide-y divide-white/5 text-[13px] leading-relaxed font-sans">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: any) => (
    <thead className="bg-[#0b1129] text-zinc-200 font-bold uppercase text-[10px] tracking-wider select-none">
      {children}
    </thead>
  ),
  tbody: ({ children }: any) => (
    <tbody className="divide-y divide-white/[0.03] text-zinc-300">
      {children}
    </tbody>
  ),
  tr: ({ children }: any) => (
    <tr className="hover:bg-white/[0.01] transition-colors">
      {children}
    </tr>
  ),
  th: ({ children }: any) => (
    <th className="px-5 py-3 text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="px-5 py-3 prose prose-invert font-sans">
      {children}
    </td>
  ),
};

export const ContentArea: React.FC<ContentAreaProps> = ({ 
  lesson, 
  quizzes,
  completedLessons,
  onToggleCompletion,
  onNavigateNext,
  onNavigatePrev,
  hasNext,
  hasPrev
}) => {
  if (!lesson && !quizzes) return null;

  const isCompleted = lesson ? completedLessons.includes(lesson.id) : false;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="px-5 py-10 md:px-10 md:py-16 max-w-[850px] mx-auto w-full flex flex-col min-h-full"
    >
      {lesson && (
        <>
          {/* Header Area */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 select-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-300 uppercase tracking-widest font-mono">
              📦 Module · {lesson.id.split('-').join(' ')}
            </span>

            {/* Quick Toggle Complete indicator in the header */}
            <button
              onClick={() => onToggleCompletion(lesson.id)}
              className={clsx(
                "flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider font-mono transition-all border cursor-pointer",
                isCompleted 
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/35" 
                  : "bg-white/[0.02] text-zinc-500 border-white/5 hover:text-zinc-300 hover:bg-white/[0.05]"
              )}
            >
              {isCompleted ? (
                <>
                  <Check size={11} className="stroke-[3]" /> Completed
                </>
              ) : (
                <>
                  <Bookmark size={11} /> Mark as Done
                </>
              )}
            </button>
          </div>
          
          {lesson.id === 'course-overview' ? (
            <CourseOverviewDashboard />
          ) : (
            <>
              <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight select-text">
                {lesson.title}
              </h1>
              
              <p className="text-[15px] md:text-[17px] text-zinc-400 mb-8 leading-relaxed select-text font-normal">
                {lesson.description}
              </p>

              <div className="h-[1px] w-full bg-gradient-to-r from-indigo-500/30 to-transparent mb-10" />

              {/* Core Concept Cards */}
              {lesson.cards && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 select-none">
                  {lesson.cards.map((card, i) => (
                    <div 
                      key={i} 
                      className="group relative rounded-xl bg-gradient-to-b from-[#0d1430] to-[#080d21] p-5 border border-white/5 shadow-md hover:shadow-2xl hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                      <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full group-hover:bg-indigo-500/20 transition-all duration-300 pointer-events-none" />
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xl mb-3.5 transition-transform group-hover:scale-110 duration-300">
                        {card.icon}
                      </div>
                      <h4 className="font-bold text-sm text-zinc-200 mb-1 leading-snug group-hover:text-white transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Primary Lecture Document Content */}
              <div className="markdown-body select-text text-zinc-200 pr-0.5">
                <ReactMarkdown components={markdownComponents}>
                  {lesson.content}
                </ReactMarkdown>
              </div>
            </>
          )}

          {/* Review Questions Section */}
          {lesson.reviewQuestions && lesson.reviewQuestions.length > 0 && (
            <div className="mt-14 p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#0a1024] to-[#060a17] border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/5 blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-inner">
                  <BookOpen size={16} />
                </div>
                <h3 className="text-md font-bold text-white uppercase tracking-wider select-none">Review Questions</h3>
              </div>
              <ul className="space-y-4">
                {lesson.reviewQuestions.map((q, i) => (
                  <li key={i} className="flex gap-4 text-zinc-300 hover:text-white transition-colors group">
                    <span className="font-mono text-zinc-600 group-hover:text-indigo-400 font-bold select-none">Q{i + 1}.</span>
                    <span className="flex-1 leading-relaxed text-[14px] font-sans">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}


        </>
      )}

      {quizzes && (
        <ExamArchive />
      )}

      {/* Sequential Lesson Flow Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-white/5 select-none font-sans">
        <button
          onClick={onNavigatePrev}
          disabled={!hasPrev}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:text-white text-zinc-400 disabled:opacity-20 disabled:pointer-events-none text-xs font-semibold transition-all cursor-pointer select-none active:scale-95"
        >
          <ArrowLeft size={14} /> Previous Lesson
        </button>

        {lesson && (
          <button
            onClick={() => onToggleCompletion(lesson.id)}
            className={clsx(
              "w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-bold text-xs transition-all cursor-pointer shadow-lg select-none active:scale-95",
              isCompleted 
                ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25" 
                : "bg-indigo-650 hover:bg-indigo-600 border-indigo-500/30 text-white shadow-indigo-600/10"
            )}
          >
            {isCompleted ? (
              <>
                <Check size={14} className="stroke-[3]" /> Lesson Completed
              </>
            ) : (
              <>
                <Bookmark size={14} /> Check Complete
              </>
            )}
          </button>
        )}

        <button
          onClick={onNavigateNext}
          disabled={!hasNext}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-605 to-violet-650 hover:from-indigo-500 hover:to-violet-600 text-white border border-indigo-550/30 disabled:opacity-20 disabled:pointer-events-none text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-md"
        >
          {quizzes ? 'Return to Home' : lesson && !hasNext ? 'Proceed to Board Exams' : 'Next Lesson'}{' '}
          <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
};
