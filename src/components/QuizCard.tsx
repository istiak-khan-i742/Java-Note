import React, { useState } from 'react';
import { Quiz } from '../data/lessons';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, AlertCircle, Sparkles, HelpCircle } from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

interface QuizCardProps {
  quiz: Quiz;
  index: number;
}

export const QuizCard: React.FC<QuizCardProps> = ({ quiz, index }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (optIndex: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optIndex);
    setShowExplanation(true);
    
    const isCorrect = quiz.options[optIndex]?.isCorrect;
    if (isCorrect) {
      triggerHaptic('success');
    } else {
      triggerHaptic('warning');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-b from-[#0c1228] to-[#080d21] border border-white/[0.05] rounded-2xl p-6 md:p-8 mb-6 shadow-xl relative overflow-hidden"
    >
      {/* Background glow overlay */}
      {selectedOption !== null && (
        <div className={clsx(
          "absolute right-0 top-0 w-36 h-36 blur-3xl pointer-events-none opacity-40 rounded-full transition-all duration-700",
          quiz.options[selectedOption].isCorrect ? "bg-emerald-500/10" : "bg-rose-500/10"
        )} />
      )}

      {/* Flag / Header info */}
      <div className="flex items-center justify-between mb-4 select-none">
        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-[#a5b4fc] font-mono leading-none">
          <HelpCircle size={10} className="text-indigo-400" /> QUESTION {index + 1}
        </span>
        <AnimatePresence>
          {selectedOption !== null && (
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className={clsx(
                "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider font-mono shadow-sm",
                quiz.options[selectedOption].isCorrect 
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" 
                  : "bg-rose-500/10 text-rose-300 border border-rose-500/20"
              )}
            >
              {quiz.options[selectedOption].isCorrect ? (
                <>
                  <Sparkles size={8} className="animate-spin" /> CORRECT
                </>
              ) : (
                <>
                  <AlertCircle size={8} /> WRONG
                </>
              )}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <h3 className="text-[15px] md:text-[16px] font-bold text-white mb-6 leading-relaxed select-text font-sans">
        {quiz.question}
      </h3>
      
      {/* Choice Buttons */}
      <div className="flex flex-col gap-3 select-none">
        {quiz.options.map((option, i) => {
          const isSelected = selectedOption === i;
          const isCorrect = option.isCorrect;
          const showResult = selectedOption !== null;

          return (
            <motion.button
              key={i}
              onClick={() => handleOptionClick(i)}
              disabled={showResult}
              whileHover={!showResult ? { x: 4, backgroundColor: 'rgba(255,255,255,0.02)' } : {}}
              whileTap={!showResult ? { scale: 0.995 } : {}}
              className={clsx(
                "group flex items-start gap-4 p-4 rounded-xl border text-left text-xs md:text-sm transition-all relative overflow-hidden cursor-pointer",
                !showResult && "bg-[#090e24]/40 border-white/5 text-zinc-300 hover:border-indigo-500/40 hover:text-white",
                showResult && isCorrect && "bg-emerald-500/[0.06] border-emerald-500/30 text-emerald-300 font-medium",
                showResult && isSelected && !isCorrect && "bg-rose-500/[0.04] border-rose-500/20 text-rose-300 font-medium",
                showResult && !isSelected && !isCorrect && "opacity-35 border-white/[0.02]"
              )}
            >
              {/* Option Index Badge Logo A, B, C, D */}
              <div className={clsx(
                "w-6 h-6 rounded-lg flex items-center justify-center font-mono text-[10px] font-bold flex-shrink-0 transition-all shadow-sm leading-none mt-0.5",
                !showResult && "bg-[#0f1530] border border-white/5 text-zinc-400 group-hover:bg-indigo-505 group-hover:text-white group-hover:border-indigo-500/30",
                showResult && isCorrect && "bg-emerald-500 text-white border border-emerald-400/20 shadow-emerald-500/25",
                showResult && isSelected && !isCorrect && "bg-rose-500 text-white border border-rose-450/20 shadow-rose-500/25"
              )}>
                {String.fromCharCode(65 + i)}
              </div>

              <span className="flex-1 text-[13px] leading-relaxed pt-0.5">{option.label}</span>
              
              {/* Icon badges inside button */}
              {showResult && isCorrect && (
                <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 ml-2 shadow-sm mt-0.5" />
              )}
              {showResult && isSelected && !isCorrect && (
                <XCircle size={16} className="text-rose-400 flex-shrink-0 ml-2 shadow-sm mt-0.5" />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Answer Explanations card */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-5 pt-5 border-t border-white/5">
              <div className="flex gap-3 bg-[#0d1430]/70 p-4.5 rounded-xl border border-white/5 shadow-inner">
                <div className="w-5 h-5 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-0.5 font-bold font-mono text-[9px] border border-indigo-500/20 leading-none">
                  💡
                </div>
                <div className="text-[13px] leading-relaxed text-zinc-300">
                  <span className="text-white font-black mr-1 font-sans">Explanation:</span>
                  <span className="italic font-sans">{quiz.explanation}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
