import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Award, 
  Check, 
  Layers, 
  GraduationCap, 
  Calendar, 
  Clock, 
  Target, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  Sparkles, 
  TrendingUp, 
  BookMarked, 
  ListTodo, 
  HelpCircle, 
  Trophy,
  ArrowRight,
  BookOpenCheck,
  Compass,
  AlertCircle
} from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

interface CLOMap {
  id: string;
  statement: string;
  statementBn: string;
  taxonomy: string;
  plo: string;
  color: string;
  details: string[];
}

interface SyllabusTopic {
  lectures: string;
  title: string;
  titleBn: string;
  topics: string[];
  clos: string[];
  tutorials: number;
  isMidterm: boolean;
  section: string;
}

export const CourseOverviewDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'clos' | 'syllabus' | 'marks' | 'books'>('overview');
  const [syllabusFilter, setSyllabusFilter] = useState<'all' | 'mid' | 'see'>('all');
  const [expandedLectures, setExpandedLectures] = useState<Record<string, boolean>>({});

  const toggleLecture = (id: string) => {
    setExpandedLectures(prev => ({ ...prev, [id]: !prev[id] }));
    triggerHaptic('light');
  };

  // 1. CLO Data Mapping
  const clos: CLOMap[] = [
    {
      id: "CLO-1",
      statement: "Define the concept of OOP as well as the purpose and usage principles of inheritance, polymorphism, encapsulation, and method overloading.",
      statementBn: "অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP)-এর মৌলিক ধারণাসমূহ এবং ইনহেরিটেন্স, পলিমরফিজম, এনক্যাপসুলেশন ও মেথড ওভারলোডিং-এর ব্যবহারিক নীতিমালা ব্যাখ্যা করা।",
      taxonomy: "Cognitive (Understand / Bloom Level 2)",
      plo: "PLO-1 (Engineering Knowledge)",
      color: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400",
      details: [
        "মৌলিক OOP ধারণার বিশ্লেষণ",
        "ইনহেরিটেন্স ও পলিমরফিজম ব্যাখ্যা করা",
        "এনক্যাপসুলেশন ও মেথড ওভারলোডিং বুঝা",
        "জাভার বেসিক সুবিধাসমূহ ও Buzzwords ধারণা"
      ]
    },
    {
      id: "CLO-2",
      statement: "Identify classes, objects, members of a class and the relationships among them needed for a specific problem.",
      statementBn: "যেকোনো বাস্তবমুখী সমস্যার জন্য প্রয়োজনীয় ক্লাস, অবজেক্ট, ক্লাসের সদস্য এবং তাদের মধ্যকার পারস্পরিক সম্পর্ক সঠিকভাবে সনাক্ত করা।",
      taxonomy: "Cognitive (Identify / Bloom Level 3)",
      plo: "PLO-2 (Problem Analysis)",
      color: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400",
      details: [
        "ক্লাস এবং অবজেক্ট সনাক্তকরণ",
        "মেথড, ভ্যারিয়েবল ও ক্লাসের রিলেশন প্যারামিটার",
        "স্টেটিক ও ফাইনাল ডিক্লারেশন সম্পর্ক",
        "বাস্তব প্রবলেম ডোমেন ম্যাপিং"
      ]
    },
    {
      id: "CLO-3",
      statement: "Develop Java application programs using sound OOP practices (e.g., interfaces and APIs) and proper program structuring (e.g., by using access control identifiers, multithreading, error exception handling).",
      statementBn: "সঠিক OOP অনুশীলনী (যেমন ইন্টারফেস ও এপিআই) এবং উপযুক্ত প্রোগ্রাম স্ট্রাকচারিং (যেমন অ্যাক্সেস কন্ট্রোল, মাল্টিথ্রেডিং, এবং এক্সেপশন হ্যান্ডলিং) ব্যবহার করে কার্যকর জাভা অ্যাপ্লিকেশন তৈরি করা।",
      taxonomy: "Cognitive (Analysis, Evaluate / Bloom Level 4 & 5)",
      plo: "PLO-2 (Problem Solving / Modern Tool Usage)",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
      details: [
        "মাল্টিথ্রেডেড জাভা অ্যাপ্লিকেশন তৈরি",
        "ইন্টারফেস ও প্যাকেজ দিয়ে কোড মডুলারাইজেশন",
        "কমপ্লেক্স এক্সেপশন বা এরর হ্যান্ডলিং ফ্রেমওয়ার্ক",
        "ফাইল স্ট্রিম প্রসেসিং ও ইভেন্ট হ্যান্ডলিং ইমপ্লিমেন্টেশন"
      ]
    }
  ];

  // 2. Comprehensive Lecture Timeline Data
  const syllabus: SyllabusTopic[] = [
    {
      lectures: "L1",
      title: "Introduction to the Course",
      titleBn: "কোর্স পরিচিতি ও বেসিক গাইডলাইনস",
      topics: [
        "CCE-1207 কোর্স পরিধি এবং সিলেবাস পর্যালোচনা",
        "Discussion about environment setup and JDK overview",
        "Basic academic requirements & advises for Java OOP learning"
      ],
      clos: ["General"],
      tutorials: 0,
      isMidterm: true,
      section: "Section I"
    },
    {
      lectures: "L2",
      title: "Fundamentals of OOP & Java Buzzwords",
      titleBn: "OOP এর ভিত্তি ও জাভা Buzzwords",
      topics: [
        "Core OOP Pillars: Class, Object, Encapsulation, Abstraction, Inheritance, Polymorphism",
        "Why OOP over procedural programming (Security & Reusability)",
        "Java features, Advantages & 12 crucial buzzwords"
      ],
      clos: ["CLO-1"],
      tutorials: 0,
      isMidterm: true,
      section: "Section I"
    },
    {
      lectures: "L3 - L5",
      title: "JVM Architecture & First Program",
      titleBn: "JVM আর্কিটেকচার, প্রথম প্রোগ্রাম ও ভ্যারিয়েবল",
      topics: [
        "JDK vs JRE vs JVM difference and tasks",
        "How compilation works (High-Level to Bytecode)",
        "Creating simple classes in Java, nested classes, and Java applications vs Applets",
        "Dynamic initialization of variables"
      ],
      clos: ["CLO-1", "CLO-2"],
      tutorials: 0,
      isMidterm: true,
      section: "Section I"
    },
    {
      lectures: "L6 - L7",
      title: "Data Types, Arrays & Operators",
      titleBn: "ডাটা টাইপস, ওয়ান/টু-ডাইমেনশনাল অ্যারে ও অপারেটরসমূহ",
      topics: [
        "8 Primitive data types, widths (bits) and strongly typed nature",
        "One-Dimensional and Multidimensional Array (arrays of arrays) declaration",
        "Arithmetic, Relational, Logical, Assignment and Ternary operator highlights",
        "Prefix vs Postfix (++x vs x++) expressions"
      ],
      clos: ["CLO-1"],
      tutorials: 1,
      isMidterm: true,
      section: "Section II"
    },
    {
      lectures: "L8 - L10",
      title: "Control Flow & String Vectors",
      titleBn: "কন্ট্রোল স্টেটমেন্টস, লুপস এবং স্ট্রিং ভেক্টর",
      topics: [
        "If-else, switch, and loop variants: for, while, do-while",
        "Jump statements (break, continue, return)",
        "Strong string vectors and basics of String class manipulation"
      ],
      clos: ["CLO-1", "CLO-2", "CLO-3"],
      tutorials: 0,
      isMidterm: true,
      section: "Section II"
    },
    {
      lectures: "L11 - L13",
      title: "Classes, Objects & Keywords",
      titleBn: "ক্লাস, অবজেক্ট মেথড, ফাইনাল ও স্ট্যাটিক কিওয়ার্ড",
      topics: [
        "Instance variables, state, behavior and identity of objects",
        "Object initialization via reference variables, methods & constructors",
        "Using methods with parameters, final variables and static keywords"
      ],
      clos: ["CLO-2"],
      tutorials: 1,
      isMidterm: true,
      section: "Section III"
    },
    {
      lectures: "L14 - L15",
      title: "Method Calling & Parameter Passing",
      titleBn: "মেথড কলিং, প্যারামিটার পাসিং ও নেস্টেড ক্লাসসমূহ",
      topics: [
        "By-Value and By-Reference parameters passing behaviors",
        "Calling class methods, scope bounds",
        "Introduction to Nested and Inner classes"
      ],
      clos: ["CLO-2"],
      tutorials: 1,
      isMidterm: true,
      section: "Section III"
    },
    {
      lectures: "L16 - L17",
      title: "Abstract Classes & Overloading/Overriding",
      titleBn: "অ্যাবস্ট্রাক্ট ক্লাস, মেথড ওভারলোডিং ও মেথড ওভাররাইডিং",
      topics: [
        "Method Overloading (Compile-Time / Static Polymorphism)",
        "Method Overriding (Runtime / Dynamic Polymorphism)",
        "Abstract classes implementation vs concrete class structures"
      ],
      clos: ["CLO-1", "CLO-2", "CLO-3"],
      tutorials: 0,
      isMidterm: false,
      section: "Section IV"
    },
    {
      lectures: "L18 - L20",
      title: "Exception Handling Framework",
      titleBn: "এক্সেপশন হ্যান্ডলিং, ট্রাই-ক্যাচ ও কাস্টম এক্সেপশন",
      topics: [
        "Exception model hierarchy (Checked vs Unchecked exceptions)",
        "Keywords: try, catch, finally, throw, throws",
        "Creating user-defined exception subclasses & chained exceptions"
      ],
      clos: ["CLO-3"],
      tutorials: 1,
      isMidterm: false,
      section: "Section IV"
    },
    {
      lectures: "L21 - L23",
      title: "Multithreading & Thread Model",
      titleBn: "জাভা মাল্টিথ্রেডিং, সিংক্রোনাইজেশন ও থ্রেড লাইফসাইকেল",
      topics: [
        "Java thread model, main thread, creating single vs multiple threads",
        "Thread priorites, thread lifecycle states",
        "Synchronization blocks/methods and Inter-thread Communication (wait, notify, notifyAll)",
        "Suspending, resuming, and stopping threads"
      ],
      clos: ["CLO-1", "CLO-2", "CLO-3"],
      tutorials: 1,
      isMidterm: false,
      section: "Advanced SEE"
    },
    {
      lectures: "L24 - L25",
      title: "Java Packages",
      titleBn: "প্যাকেজ ডিক্লারেশন, অ্যাক্সেস প্রটেকশন ও ইমপোর্ট",
      topics: [
        "Creating and using packages inside modular directory layouts",
        "Sleek access safety rules (public, private, protected, default package-private)",
        "Java library imports and modular namespaces"
      ],
      clos: ["CLO-1", "CLO-2"],
      tutorials: 0,
      isMidterm: false,
      section: "Advanced SEE"
    },
    {
      lectures: "L26 - L27",
      title: "Interfaces in Java",
      titleBn: "ইন্টারফেস ইমপ্লিমেন্টেশন ও মাল্টিপল ইনহেরিটেন্স",
      topics: [
        "Defining and implementing interfaces with loose coupling rules",
        "Solving Multiple Inheritance Diamond problem via Interfaces",
        "Interface reference variables and dynamic runtime method invocation"
      ],
      clos: ["CLO-1", "CLO-2", "CLO-3"],
      tutorials: 0,
      isMidterm: false,
      section: "Advanced SEE"
    },
    {
      lectures: "L28 - L29",
      title: "AWT Event Handling",
      titleBn: "ইভেন্ট ডেলিগেশন মডেল ও বিভিন্ন ইভেন্ট লিসেনার",
      topics: [
        "Event Handling delegation model",
        "Event sources, listener interfaces (ActionListener, MouseListener, KeyListener)",
        "Event adaptation and writing interface callback hooks"
      ],
      clos: ["CLO-3"],
      tutorials: 0,
      isMidterm: false,
      section: "GUI Development"
    },
    {
      lectures: "L30 - L32",
      title: "AWT Components & File Streams",
      titleBn: "AWT GUI উপাদানসমূহ এবং ফাইল আইও (I/O) স্ট্রিমস",
      topics: [
        "Core graphical GUI component tree (Button, Label, Checkbox, Choice, List, Scrollbar)",
        "File inputs and output operations",
        "Data hierarchies, streams, files directory handling"
      ],
      clos: ["CLO-3"],
      tutorials: 0,
      isMidterm: false,
      section: "GUI Development"
    },
    {
      lectures: "L33 - L35",
      title: "Serialization & Random Access Files",
      titleBn: "অবজেক্ট সিরিয়ালাইজেশন, টেক্সট ফাইল ও জাভা ভেক্টরস",
      topics: [
        "Sequential-access text files, Class File bytecode storage",
        "Object Serialization interface to save object states (Serializable)",
        "Random-access files and robust Vectors collections utilities"
      ],
      clos: ["CLO-3"],
      tutorials: 0,
      isMidterm: false,
      section: "Data & Files"
    },
    {
      lectures: "L36 - L37",
      title: "Advanced I/O byte streams",
      titleBn: "বাইট স্ট্রিম ও বাফার্ড ক্যারেক্টার স্ট্রিমস",
      topics: [
        "Byte Streams (FileInputStream, FileOutputStream)",
        "Chaining Buffered streams for extreme high-performance disk access",
        "Character Streams (FileReader, FileWriter) encoding conversions"
      ],
      clos: ["CLO-3"],
      tutorials: 0,
      isMidterm: false,
      section: "Data & Files"
    }
  ];

  const filteredSyllabus = syllabus.filter(item => {
    if (syllabusFilter === 'mid') return item.isMidterm;
    if (syllabusFilter === 'see') return !item.isMidterm;
    return true;
  });

  return (
    <div className="w-full text-zinc-100 font-sans select-none">
      {/* 🚀 Academic Title Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c102a] via-[#080b20] to-[#040612] border border-indigo-500/15 p-6 md:p-8 shadow-2xl mb-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-550/10 blur-[130px] rounded-full -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/5 blur-[100px] rounded-full -ml-32 -mb-32 pointer-events-none" />
        
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-[10px] font-extrabold text-indigo-300 tracking-widest uppercase font-mono">
            🎓 ISCED Code: 0613
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-[10px] font-extrabold text-[#7b8bf7] tracking-widest uppercase font-mono">
            🏦 Department of Computer & Communication Engineering (CCE), IIUC
          </span>
        </div>

        <h1 className="text-3.5xl md:text-5xl font-black text-white hover:text-indigo-200 transition-colors tracking-tight leading-tight mb-3">
          Object Oriented Programming with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 animate-gradient">JAVA</span>
        </h1>
        <p className="text-sm md:text-[15.5px] text-zinc-400 leading-relaxed font-normal max-w-2xl mb-6">
          Department of Computer & Communication Engineering (CCE), IIUC-এর CCE-1207: Object Oriented Programming with Java কোর্সের সম্পূর্ণ একাডেমিক লার্নিং পোর্টাল। এখানে কোর্স সিলেবাস, CLO–PLO Mapping, Lecture Notes, Interactive Code Playground, Previous Questions, Quiz এবং Study Resources একটি সমন্বিত প্ল্যাটফর্মে উপস্থাপন করা হয়েছে।
        </p>

        {/* 📋 Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Award size={18} />
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider font-mono">Course Code</div>
              <div className="text-sm font-extrabold text-white">CCE-1207</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
              <Clock size={18} />
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider font-mono">Credit Hours</div>
              <div className="text-sm font-extrabold text-white">3.0 Credits</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Calendar size={18} />
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider font-mono">Prerequisite</div>
              <div className="text-xs font-bold text-teal-400 border border-teal-500/30 px-2 py-0.5 rounded-md bg-teal-500/5 inline-block">CCE-1105</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <GraduationCap size={18} />
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider font-mono">Instructor</div>
              <div className="text-[11.5px] font-bold text-white truncate max-w-[130px]" title="MD Jiabul Hoque">Jiabul Hoque</div>
            </div>
          </div>
        </div>
      </div>

      {/* 🧭 Tab Navigation */}
      <div className="flex items-center gap-1 bg-[#060814] p-1 rounded-xl border border-white/5 shadow-inner mb-6 overflow-x-auto scrollbar-none select-none">
        <button
          onClick={() => {
            setActiveTab('overview');
            triggerHaptic('light');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'overview' ? 'bg-[#0e122b] text-white shadow-md border border-white/5' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Compass size={14} /> Course Overview
        </button>
        <button
          onClick={() => {
            setActiveTab('clos');
            triggerHaptic('light');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'clos' ? 'bg-[#0e122b] text-white shadow-md border border-white/5' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Target size={14} /> CLO / PLO Mapping
        </button>
        <button
          onClick={() => {
            setActiveTab('marks');
            triggerHaptic('light');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'marks' ? 'bg-[#0e122b] text-white shadow-md border border-white/5' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <TrendingUp size={14} /> Mark Distribution
        </button>
        <button
          onClick={() => {
            setActiveTab('syllabus');
            triggerHaptic('light');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'syllabus' ? 'bg-[#0e122b] text-white shadow-md border border-white/5' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <ListTodo size={14} /> Lecture & Syllabus Outline
        </button>
        <button
          onClick={() => {
            setActiveTab('books');
            triggerHaptic('light');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'books' ? 'bg-[#0e122b] text-white shadow-md border border-white/5' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <BookMarked size={14} /> Materials & Books
        </button>
      </div>

      {/* 🔮 Dynamic Tab Content Rendering */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="focus-outline-none"
        >
          {/* TAB 1: OVERVIEW & GENERAL */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Introduction Box */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="col-span-1 md:col-span-2 space-y-4">
                  <div className="bg-[#070c1e]/60 rounded-xl border border-white/5 p-6 shadow-lg">
                    <h2 className="text-base font-extrabold text-white mb-3 tracking-wide flex items-center gap-2 font-mono">
                      <GraduationCap className="text-indigo-400" size={18} /> Course Objective & Mission
                    </h2>
                    <p className="text-zinc-300 text-[13.5px] leading-relaxed mb-4 font-sans">
                      Java Object-Oriented Programming (OOP) এর নিখুঁত থিওরিটিক্যাল ভিত্তি ও রিয়েল-ওয়ার্ল্ড ইমপ্লিমেন্টেশনকে সংযুক্ত করতে এই প্রোগ্রাম ডিজাইন করা হয়েছে। এর মাধ্যমে ক্লাস হায়ারার্কি, মেমোরি কন্ট্রোল স্ট্রাকচার ও মডার্ন এপ্লিকেশন আর্কিটেকচার ইমপ্লিমেন্ট করতে সক্ষম হবে শিক্ষার্থীরা। 
                    </p>
                    <div className="flex gap-2.5 flex-wrap">
                      <span className="text-xs font-medium text-indigo-300 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 shadow-sm font-sans"># ClassHierarchy</span>
                      <span className="text-xs font-medium text-[#7b8bf7] px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 shadow-sm font-sans"># MultiThreading</span>
                      <span className="text-xs font-medium text-emerald-300 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 shadow-sm font-sans"># FileStreamsIo</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#070c1e]/40 rounded-xl border border-white/5 p-5 flex flex-col justify-between">
                      <div className="text-lg font-bold text-white mb-1.5">Midterm Scope</div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-3">L1–L15 পর্যন্ত লেকচারের সিলেবাস। ক্লাস, অবজেক্ট, ডাটা টাইপ, কন্ট্রোল লুপ, অপারেটর এবং মেথড কলিং কভার করে।</p>
                      <button 
                        onClick={() => { 
                          setActiveTab('syllabus'); 
                          setSyllabusFilter('mid'); 
                          triggerHaptic('medium');
                        }}
                        className="text-[11px] font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 mt-auto self-start cursor-pointer transition-all"
                      >
                        Explore Topics <ArrowRight size={12} />
                      </button>
                    </div>
                    <div className="bg-[#070c1e]/40 rounded-xl border border-white/5 p-5 flex flex-col justify-between">
                      <div className="text-lg font-bold text-white mb-1.5">Semester End (SEE)</div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-3">L16–L37 লেকচার সম্পূর্ণ। অ্যাবস্ট্রাক্ট ক্লাস, এক্সেপশন থ্রেড মডেল, ইভেন্ট ডেলিগেশন, ফাইল আইও এবং প্যাকেজ ও ইন্টারফেস।</p>
                      <button 
                        onClick={() => { 
                          setActiveTab('syllabus'); 
                          setSyllabusFilter('see'); 
                          triggerHaptic('medium');
                        }}
                        className="text-[11px] font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1 mt-auto self-start cursor-pointer transition-all"
                      >
                        Explore Topics <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Side: Highlighting Features */}
                <div className="bg-gradient-to-b from-[#0c102c] to-[#040614] rounded-xl border border-indigo-500/15 p-6 shadow-xl flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full" />
                  <div>
                    <h3 className="text-xs font-extrabold text-indigo-300 uppercase tracking-widest font-mono mb-4 flex items-center gap-1.5">
                      <Sparkles size={11} className="text-indigo-400 animate-spin" style={{ animationDuration: '8s' }} /> Advanced Study Guide
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                        <p className="text-xs text-zinc-300 leading-normal">
                          <strong className="text-zinc-100">Live Java IDE Support</strong>: থিওরি পড়ার সাথে সাথেই সরাসরি কোড রান এবং মডিফাই করার আধুনিক সুবিধা।
                        </p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                        <p className="text-xs text-zinc-300 leading-normal">
                          <strong className="text-zinc-100">CIE & SEE Target Tracking</strong>: কুইজ স্কোর ও লেকচার কমপ্লিশনে কোর্সের লাইভ প্রগ্রেস ট্র্যাকার।
                        </p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                        <p className="text-xs text-zinc-300 leading-normal">
                          <strong className="text-zinc-100">Bengali & English Mixed</strong>: অত্যন্ত প্রাণবন্ত ও সাবলীল বাংলা ভাষা এবং একাডেমিক ইংরেজিতে সহজবোধ্য থিম।
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-white/5 mt-6">
                    <button 
                      onClick={() => {
                        setActiveTab('syllabus');
                        triggerHaptic('medium');
                      }}
                      className="w-full py-2.5 rounded-lg bg-indigo-650 hover:bg-indigo-600 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer border border-indigo-500/20 active:scale-95"
                    >
                      Start Technical Syllabus <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Section Highlights Card Grid */}
              <div>
                <h3 className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-mono mb-4">
                  4 Core Curricular Pillars
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-[#070c1e]/40 hover:bg-[#090f2b]/60 transition-all border border-white/5 hover:border-blue-500/20 p-5 rounded-xl flex flex-col justify-between group">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-sm mb-3 font-bold group-hover:scale-105 transition-all">01</div>
                      <div className="text-sm font-bold text-white mb-1">Section I: Java Basics</div>
                      <p className="text-xs text-zinc-400 leading-relaxed">Introduction to OOP, JVM compilation flows, variables, writing first application classes & nested Applets.</p>
                    </div>
                  </div>
                  <div className="bg-[#070c1e]/40 hover:bg-[#090f2b]/60 transition-all border border-white/5 hover:border-purple-500/20 p-5 rounded-xl flex flex-col justify-between group">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-sm mb-3 font-bold group-hover:scale-105 transition-all">02</div>
                      <div className="text-sm font-bold text-white mb-1">Section II: Variables & Control</div>
                      <p className="text-xs text-zinc-400 leading-relaxed">8 primitives data values memory bounds, single/multidimensional array initialization and control-flow jumps.</p>
                    </div>
                  </div>
                  <div className="bg-[#070c1e]/40 hover:bg-[#090f2b]/60 transition-all border border-white/5 hover:border-teal-500/20 p-5 rounded-xl flex flex-col justify-between group">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-sm mb-3 font-bold group-hover:scale-105 transition-all">03</div>
                      <div className="text-sm font-bold text-white mb-1">Section III: OOP Pillars</div>
                      <p className="text-xs text-zinc-400 leading-relaxed">Classes deep structures, instance vectors parameters passing, Constructors and overloading mechanisms.</p>
                    </div>
                  </div>
                  <div className="bg-[#070c1e]/40 hover:bg-[#090f2b]/60 transition-all border border-white/5 hover:border-pink-500/20 p-5 rounded-xl flex flex-col justify-between group">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 text-sm mb-3 font-bold group-hover:scale-105 transition-all">04</div>
                      <div className="text-sm font-bold text-white mb-1">Section IV: Polishing System</div>
                      <p className="text-xs text-zinc-400 leading-relaxed">Abstract classes, Inheritance details, custom Exception subclasses, MultiThread model synchronizer and GUI events.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CLO & PLO MAPPING */}
          {activeTab === 'clos' && (
            <div className="space-y-6">
              <div className="bg-[#060814]/40 p-5 rounded-xl border border-white/5">
                <h3 className="text-sm font-extrabold text-white mb-2.5 flex items-center gap-2">
                  <Target size={16} className="text-indigo-400" /> Course Learning Outcomes (CLOs)
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  আউটকাম-বেসড এডুকেশন (OBE) কাঠামো অনুসারে নিচে ৩টি মূল CLO এবং সেগুলোর ট্যাক্সোনমি লেভেল ও প্রোগ্রাম লার্নিং আউটকাম (PLO) ম্যাপিং দেওয়া হল:
                </p>

                {/* CLO Grid with Visual Cards */}
                <div className="space-y-4">
                  {clos.map((clo, index) => (
                    <div 
                      key={clo.id} 
                      className={`relative overflow-hidden rounded-xl border p-5 bg-gradient-to-r ${clo.color} transition-all duration-300 hover:shadow-lg`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        {/* Shield ID */}
                        <div className="flex-shrink-0 select-none">
                          <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 text-xs font-black font-mono tracking-tight text-white shadow-md">
                            {clo.id}
                          </span>
                        </div>

                        {/* Statement Body */}
                        <div className="flex-1 space-y-2.5">
                          <div>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold font-mono tracking-wide uppercase bg-black/30 border border-white/10 text-zinc-300 mb-1.5">
                              {clo.taxonomy}
                            </span>
                            <h4 className="text-sm font-extrabold text-white leading-snug">{clo.statement}</h4>
                          </div>
                          
                          <p className="text-xs text-zinc-400 leading-relaxed font-sans">{clo.statementBn}</p>

                          {/* Specific target details sub-bulleted list */}
                          <div className="pt-3 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-zinc-300 font-sans">
                            {clo.details.map((item, id) => (
                              <div key={id} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Program Educational Outcome mapped directly */}
                        <div className="md:text-right border-t md:border-t-0 md:border-l border-white/5 pt-3 md:pt-0 md:pl-4 flex-shrink-0 flex md:flex-col justify-between items-center md:items-end gap-1 min-w-[120px]">
                          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider font-mono">Map Link</span>
                          <span className="text-xs font-extrabold text-indigo-300 bg-indigo-500/10 border border-indigo-500/25 px-2.5 py-1 rounded-md mb-1.5 text-center block md:inline-block">
                            {clo.plo}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MARK DISTRIBUTION */}
          {activeTab === 'marks' && (
            <div className="space-y-6">
              {/* Mark Distribution System Dashboard Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* Visual Overview Ring Chart */}
                <div className="bg-[#070c1e]/60 rounded-xl border border-white/5 p-6 flex flex-col justify-between shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full" />
                  <h3 className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-mono mb-4">
                    Evaluation Weight Ratio
                  </h3>
                  
                  {/* Custom SVG Ring Representation */}
                  <div className="flex justify-center items-center py-4 relative select-none">
                    <svg className="w-36 h-36 transform -rotate-90">
                      {/* SEE: 50% */}
                      <circle cx="72" cy="72" r="58" strokeWidth="8" stroke="rgba(91, 110, 245, 0.4)" fill="transparent" strokeDasharray="364.4" strokeDashoffset="182.2" />
                      {/* Midterm: 30% */}
                      <circle cx="72" cy="72" r="58" strokeWidth="8" stroke="#5b6ef5" fill="transparent" strokeDasharray="364.4" strokeDashoffset="255.08" />
                      {/* Classes: 10% */}
                      <circle cx="72" cy="72" r="58" strokeWidth="8" stroke="#10b981" fill="transparent" strokeDasharray="364.4" strokeDashoffset="327.96" />
                      {/* Attendance: 10% */}
                      <circle cx="72" cy="72" r="58" strokeWidth="8" stroke="#eab308" fill="transparent" strokeDasharray="364.4" strokeDashoffset="364.4" />
                    </svg>
                    <div className="absolute flex flex-col justify-center items-center">
                      <span className="text-2xl font-black text-white font-mono">100</span>
                      <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase font-mono">Total Marks</span>
                    </div>
                  </div>

                  {/* Micro legend */}
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-zinc-400 font-sans">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#5b6ef5] shadow-inner" />
                      <span>Mid-term: 30%</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-600/40 shadow-inner" />
                      <span>SEE terminal: 50%</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-inner" />
                      <span>Assignment: 10%</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 shadow-inner" />
                      <span>Attendance: 10%</span>
                    </div>
                  </div>
                </div>

                {/* CIE Details Card */}
                <div className="bg-[#070c1e]/60 rounded-xl border border-white/5 p-6 shadow-lg space-y-4">
                  <h3 className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-mono">
                    ১. CIE - Continuous Evaluation
                  </h3>

                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono bg-yellow-500/10 text-yellow-400 px-1.5 py-0.5 rounded font-bold border border-yellow-500/20">CIE-1</span>
                        <div className="text-xs font-bold text-white font-sans">Class Attendance</div>
                      </div>
                      <div className="text-xs font-black text-yellow-400 font-mono">10 Marks</div>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-normal -mt-2 font-sans">
                      ক্লাসে অংশগ্রহণ এবং উপস্থিতির ভিত্তিতে ১০ নম্বর নির্ধারিত থাকবে। (CIE attendance criteria)।
                    </p>

                    <div className="flex items-center justify-between border-b border-white/5 pb-2 pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-bold border border-emerald-500/20">CIE-2</span>
                        <div className="text-xs font-bold text-white font-sans">Class Test / Assignment</div>
                      </div>
                      <div className="text-xs font-black text-emerald-400 font-mono">10 Marks</div>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-normal -mt-2 font-sans">
                      অধ্যায় শেষে কুইজ স্কোর, ক্লাস টেস্ট এবং ইন্টারেক্টিভ কাস্টম অ্যাসাইনমেন্ট প্রজেক্ট এর উপর ১০ নম্বর ভিত্তিক মূল্যায়ন।
                    </p>

                    <div className="flex items-center justify-between border-b border-white/5 pb-2 pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded font-bold border border-indigo-500/20">CIE-3</span>
                        <div className="text-xs font-bold text-white font-sans">Mid-term Examination</div>
                      </div>
                      <div className="text-xs font-black text-indigo-400 font-mono">30 Marks</div>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-normal -mt-2 font-sans">
                      প্রথম ১৫টি লেকচারের থিওরি সিলেবাসের ওপর পরীক্ষা এবং কন্টিনিউয়াস প্রজেক্ট ইভ্যালুয়েশন।
                    </p>
                  </div>
                </div>

                {/* SEE Details Card */}
                <div className="bg-[#070c1e]/60 rounded-xl border border-white/5 p-6 shadow-lg space-y-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-mono mb-4">
                      ২. SEE - Semester End Examination
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-[#060815] border border-white/5 rounded-lg p-3 flex justify-between items-center">
                        <div className="text-xs font-bold text-white font-sans">Part-A Written Section</div>
                        <div className="text-xs font-extrabold text-indigo-300 font-mono">20 Marks</div>
                      </div>
                      <ul className="text-[11px] text-zinc-400 pl-3 list-disc space-y-1 font-sans">
                        <li>অ্যাবস্ট্রাক্ট ক্লাস এবং পলিমরফিজম উদাহরণ</li>
                        <li>এক্সেপশন হ্যান্ডলিং এবং ইভেন্ট ডেলিগেশন কাঠামো</li>
                      </ul>

                      <div className="bg-[#060815] border border-white/5 rounded-lg p-3 flex justify-between items-center">
                        <div className="text-xs font-bold text-white font-sans">Part-B Written Section</div>
                        <div className="text-xs font-extrabold text-emerald-300 font-mono">30 Marks</div>
                      </div>
                      <ul className="text-[11px] text-zinc-400 pl-3 list-disc space-y-1 font-sans">
                        <li>মাল্টিথ্রেড মডেল, সিনক্রোনাইজেশন আর্কিটেকচার</li>
                        <li>প্যাকেজ এবং ইন্টারফেস ডাইনামিক কলিং</li>
                        <li>GUI ইভেন্ট হ্যান্ডলিং, ফাইল আইও এবং ক্যারেক্টার স্ট্রিমস</li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 mt-4 text-[10.5px] text-zinc-500 font-sans text-center">
                    📖 SEE কন্ডাকশন ও কোয়ালিটি কন্ট্রোল IIUC পরীক্ষা কমিটি দ্বারা নিয়ন্ত্রিত হবে।
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: LECTURES & SYLLABUS TIMELINE */}
          {activeTab === 'syllabus' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
                {/* Mini filters inside timeline */}
                <div className="flex items-center gap-1 bg-[#060814] p-1 rounded-xl border border-white/5 shadow-inner">
                  <button
                    onClick={() => {
                      setSyllabusFilter('all');
                      triggerHaptic('light');
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      syllabusFilter === 'all' ? 'bg-[#0e122b] text-white border border-white/5' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    All Lectures
                  </button>
                  <button
                    onClick={() => {
                      setSyllabusFilter('mid');
                      triggerHaptic('light');
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      syllabusFilter === 'mid' ? 'bg-[#0e122b] text-white border border-white/5' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Midterm Exam Scope (L1-15)
                  </button>
                  <button
                    onClick={() => {
                      setSyllabusFilter('see');
                      triggerHaptic('light');
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      syllabusFilter === 'see' ? 'bg-[#0e122b] text-white border border-white/5' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    SEE Exam Scope (L16-37)
                  </button>
                </div>

                <div className="text-xs text-zinc-500 font-mono font-bold">
                  Showing {filteredSyllabus.length} Syllabus Node blocks
                </div>
              </div>

              {/* Graphical Timeline Accordion Tree */}
              <div className="relative border-l-2 border-[#12193b] pl-4 md:pl-6 ml-3 space-y-5 select-none">
                {filteredSyllabus.map((item, index) => {
                  const id = item.lectures;
                  const isExpanded = !!expandedLectures[id];
                  return (
                    <div key={id} className="relative group">
                      {/* Timeline Dot Indicator */}
                      <span className={`absolute -left-[27px] md:-left-[35px] top-1.5 w-4 h-4 rounded-full border-3 border-[#050810] flex items-center justify-center transition-all duration-300 ${
                        item.isMidterm ? 'bg-indigo-500 shadow-[0_0_8px_#5b6ef5]' : 'bg-violet-600 shadow-[0_0_8px_#9f7aea]'
                      } group-hover:scale-110`} />

                      {/* Accordion Card Wrapper */}
                      <div className={`rounded-xl border transition-all duration-300 bg-[#070c1e]/40 hover:bg-[#070c1e]/60 overflow-hidden ${
                        isExpanded ? 'border-indigo-500/30 ring-1 ring-indigo-500/10' : 'border-white/5 hover:border-white/10'
                      }`}>
                        
                        {/* Header Trigger */}
                        <div 
                          onClick={() => toggleLecture(id)}
                          className="px-5 py-4 flex items-center justify-between gap-4 cursor-pointer select-none"
                        >
                          <div className="flex items-center gap-3.5 flex-1 min-w-0">
                            <span className="text-xs font-black font-mono tracking-tight text-zinc-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                              {id}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <span className={`text-[9px] font-bold font-mono uppercase px-2 py-0.5 rounded-full border ${
                                  item.isMidterm 
                                    ? 'bg-indigo-550/10 text-indigo-300 border-indigo-500/20' 
                                    : 'bg-violet-500/10 text-[#a5b4fc] border-violet-500/20'
                                }`}>
                                  {item.isMidterm ? 'Midterm Goal' : 'SEE Terminal Goal'}
                                </span>
                                {item.tutorials > 0 && (
                                  <span className="text-[9px] font-bold font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                                    + {item.tutorials} Tutorial
                                  </span>
                                )}
                                <span className="text-[10px] text-zinc-500 font-bold tracking-wide uppercase font-mono bg-white/[0.02] border border-white/[0.04] px-2 py-0.5 rounded">
                                  {item.section}
                                </span>
                              </div>
                              <h4 className="text-sm font-extrabold text-white leading-tight truncate">{item.title}</h4>
                            </div>
                          </div>

                          <div className="text-zinc-500 group-hover:text-zinc-300 transition-colors flex-shrink-0">
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </div>
                        </div>

                        {/* Expandable Topic Details with Smooth Transition */}
                        {isExpanded && (
                          <div className="px-5 pb-5 pt-1 border-t border-white/[0.03] bg-[#020511]/40 animate-[expReveal_0.25s_ease-out]">
                            <div className="space-y-4">
                              <div>
                                <span className="text-[9px] font-bold font-mono uppercase text-zinc-500 tracking-widest block mb-1">Lecture Topic Summary:</span>
                                <p className="text-xs text-zinc-300 font-sans italic">{item.titleBn}</p>
                              </div>

                              <div>
                                <span className="text-[9px] font-bold font-mono uppercase text-indigo-400 tracking-widest block mb-2">Technical Syllabus Mapping:</span>
                                <ul className="space-y-1.5 pl-3 list-disc font-sans">
                                  {item.topics.map((topic, tid) => (
                                    <li key={tid} className="text-xs text-zinc-300 leading-relaxed font-sans">{topic}</li>
                                  ))}
                                </ul>
                              </div>

                              <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-white/5 select-none font-sans">
                                <div className="flex items-center gap-1 flex-wrap">
                                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider font-mono mr-1">Target Outcomes:</span>
                                  {item.clos.map(mClo => (
                                    <span key={mClo} className="text-[9px] font-bold font-mono tracking-wide uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/15 px-2 py-0.5 rounded">
                                      {mClo}
                                    </span>
                                  ))}
                                </div>

                                <span className="text-[10px] text-zinc-500 items-center gap-1 inline-flex uppercase tracking-wider font-mono">
                                  Tutorial Hrs: <strong className="text-zinc-300">{item.tutorials}hr</strong>
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: BOOKS & LITERATURE */}
          {activeTab === 'books' && (
            <div className="space-y-6 select-text">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Major Primary Textbook */}
                <div className="relative overflow-hidden rounded-xl border border-indigo-500/15 p-6 bg-gradient-to-b from-[#0c102c] to-[#040614] shadow-xl flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full" />
                  
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold font-mono tracking-wide uppercase bg-indigo-500/20 border border-indigo-500/35 text-indigo-300 mb-3 select-none">
                      📚 Essential Path Textbook
                    </span>
                    <h4 className="text-lg font-extrabold text-white mb-2 leading-snug">Programming with Java</h4>
                    <p className="text-xs text-zinc-400 font-sans italic mb-4">Authored by E. Balagurusamy. McGraw-Hill Education, 3rd/6th Edition.</p>
                    
                    <div className="h-[1px] w-full bg-white/5 my-4" />
                    
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans mb-3 select-text">
                      এটি এই কোর্সের জন্য নির্ধারিত প্রদেয় প্রধান সিলেবাস অনুসরণকারী বই। আমাদের লার্নিং মডিউলের মেথড ওভারলোডিং, অ্যারে ভ্যারিয়েবল এবং অ্যাপলেট ধারণা সরাসরি এই বইয়ের সিলেবাসের সাথে খাপ খাইয়ে নেওয়া হয়েছে।
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 mt-4 flex justify-between items-center select-none font-sans">
                    <span className="text-[10.5px] text-zinc-500 font-mono">Chapter coverage: 1 to 16</span>
                    <span className="text-xs font-bold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 cursor-pointer">
                      Get Notes <ArrowRight size={13} />
                    </span>
                  </div>
                </div>

                {/* Other standard Reference books */}
                <div className="bg-[#070c1e]/60 rounded-xl border border-white/5 p-6 shadow-lg space-y-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold font-mono tracking-wide uppercase bg-zinc-700/20 border border-white/10 text-zinc-400 mb-1 select-none">
                    📖 Recommended References
                  </span>

                  <div className="space-y-4 font-sans select-text">
                    <div className="border-b border-white/5 pb-3">
                      <div className="text-xs font-bold text-white mb-1">
                        Java 2: The Complete Reference
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-normal">
                        By P. Naughton and H. Schildt. Osborne Publishing. (মাল্টিথ্রেডিং, ইভেন্ট হ্যান্ডলিং, এবং ডেটা স্ট্রাকচার রিফাইনড রেফারেন্স)।
                      </p>
                    </div>

                    <div className="border-b border-white/5 pb-3">
                      <div className="text-xs font-bold text-white mb-1">
                        Java: How to Program
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-normal">
                        By Deitel & Deitel. Prentice Hall, 9th Edition. (মডার্ন প্রবলেম সলভিং ও কোড মডুলারিটির কড়া রিসোর্স)।
                      </p>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-zinc-300 mb-1">
                        Classical OOP References:
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-normal">
                        Robert Lafore — *Object Oriented Programming in C++*, Herbert Schildt — *Teach yourself C++*. (কনসেপ্টাল সিমেট্রি বিশ্লেষণে সহায়ক)।
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
