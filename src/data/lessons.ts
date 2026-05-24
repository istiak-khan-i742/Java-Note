import { section1Lessons } from './section1';
import { section2Lessons } from './section2';
import { section3Lessons } from './section3';
import { section4Lessons } from './section4';
import { section5Lessons } from './section5';
import { section6Lessons } from './section6';
import { section7Lessons } from './section7';

export interface Option {
  label: string;
  isCorrect: boolean;
}

export interface Quiz {
  question: string;
  options: Option[];
  explanation: string;
}

export interface Card {
  icon: string;
  title: string;
  desc: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  cards?: Card[];
  quizzes?: Quiz[];
  reviewQuestions?: string[];
}

export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

// Unified master list of sequentially organized sections
export const sections: Section[] = [
  {
    id: "home",
    title: "🏠 Course Home",
    lessons: [
      {
        id: "course-overview",
        title: "Course Overview",
        description: "Welcome to Java OOP Masterclass. Get an overview of CCE-1207 course contents, marks, and syllabus.",
        content: `
# 📚 CCE-1207 · IIUC
## Object Oriented Programming with JAVA

স্বাগতম! এটি **International Islamic University Chittagong (IIUC)**-এর কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং / টেলিকমিউনিকেশন ইঞ্জিনিয়ারিং বিভাগের **CCE-1207** (Object Oriented Programming with JAVA) কোর্সের জন্য প্রস্তুতকৃত একটি অত্যন্ত সমৃদ্ধ নির্দেশিকা।

---

## 🏛️ Course Specifications

| Parameter | Specification Details |
| :--- | :--- |
| **Course Code** | **CCE-1207** |
| **Course Title** | **Object Oriented Programming with JAVA** |
| **ISCED Code** | 0613 |
| **Credit Hours** | 3.0 Credits |
| **Contact Hours** | 3 Contact Hours per Week |
| **Prerequisite** | **CCE-1105** (Structured Programming) |
| **Host System** | Department of ETE/CSE, IIUC |
| **Primary Textbook** | E. Balagurusamy — *Programming with Java*, McGraw-Hill, 3rd/6th Ed. |

---

## 🎯 Course Learning Outcomes (CLOs) & PLOs

সফলভাবে এই কোর্সটি সম্পন্ন করার পর শিক্ষার্থীরা নিম্নোক্ত দক্ষতাগুলো অর্জন করবে:

| CLO ID | CLO Objective Statement | Taxonomy Domain / Level | PLO Map |
| :--- | :--- | :--- | :--- |
| **CLO-1** | Define the concept of OOP as well as the purpose and usage principles of inheritance, polymorphism, encapsulation, and method overloading. | Cognitive (Understand) | PLO-1 |
| **CLO-2** | Identify classes, objects, members of a class and the relationships among them needed for a specific problem. | Cognitive (Identify) | PLO-2 |
| **CLO-3** | Develop Java application programs using sound OOP practices (e.g., interfaces and APIs) and proper program structuring (e.g., by using access control identifiers, multithreading, error exception handling). | Cognitive (Analysis, Evaluate) | PLO-2 |

---

## 📊 Mark Distribution & Evaluation System

কোর্সের মূল্যায়ন পদ্ধতি মোট **১০০ নম্বরে** বিভক্ত, যা নিম্নরূপ:

### ১. Continuous Internal Evaluation (CIE) — ৫০ মার্কস
* 📝 **Mid-term Examination:** ৩০ মার্কস
* 📋 **Class Test / Assignment / Quizzes:** ১০ মার্কস
* 👥 **Class Attendance:** ১০ মার্কস

### ২. Semester End Examination (SEE) — ৫০ মার্কস
* ✍️ **Written Terminal Exam:** ৫০ মার্কস (Part A: ২০ মার্কস + Part B: ৩০ মার্কস)

---

## 📖 Complete Lecture & Syllabus Outline

কোর্সটিকে দুটি প্রধান ভাগে ভাগ করা হয়েছে — **Midterm Topics** এবং **Semester End (SEE) Topics**।

### 🔴 Midterm Examination Syllabus (Lectures 1–15)

| Lectures | Syllabus Target Topics | CLO Scope | Tutorial / Practical |
| :--- | :--- | :--- | :--- |
| **L1** | Introduction to the course, Basic Guidelines and advises for the course, Discussion about specifications. | — | — |
| **L2** | Java Features and advantages, Class, Object, Abstraction, Encapsulation, Inheritance, Polymorphism. | CLO-1 | — |
| **L3 - L5** | JVM, Creating classes with Java, Nested Class, Java application and Applet, Variables. | CLO-1 & 2 | — |
| **L6 - L7** | Data Types, Arrays, Operators. | — | 1 Tutorial |
| **L8 - L10** | Control Flow, String vector. | CLO-1, 2 & 3 | — |
| **L11 - L13** | Classes, Object, Instance variables, Using methods, Final, Static Keywords. | — | 1 Tutorial |
| **L14 - L15** | Calling a class method, Passing parameters, Nested Class. | — | 1 Tutorial |

### 🔵 Semester End Examination (SEE) Syllabus (Lectures 16–40)

#### **Part-A (২০ মার্কস)**
* 🧠 **Lectures 16-17:** Abstract classes, Method overloading, Polymorphism examples. *(CLO-1, 2 & 3)*
* ⚠️ **Lectures 18-20:** Overview of exception handling, Hierarchy of Event classes, \`throw\` clause, \`throws\` statement, \`try-catch\` block, User-defined exception subclasses, Chained exceptions, Use of exceptions. *(1 Tutorial)*

#### **Part-B (৩০ মার্কস)**
* 🧵 **Lectures 21-23:** Java thread model, Main thread, creating single and multiple threads, Thread priorities, Synchronization, Interthread Communication, Suspending, Resuming, and Stopping threads, Using multithreading. *(CLO-1, 2 & 3 / 1 Tutorial)*
* 📦 **Lectures 24-25:** Packages in Java. *(CLO-1 & 2)*
* 🧩 **Lectures 26-27:** Interfaces in Java. *(CLO-1, 2 & 3)*
* 🖱️ **Lectures 28-29:** Event handling of various components.
* 🖥️ **Lectures 30-32:** AWT components, Data Hierarchy, Files and streams.
* 💾 **Lectures 33-35:** Class File, Sequential-access text files, Object Serialization, Random-access files, Vectors.
* 🌊 **Lectures 36-37:** Byte streams, Buffer Streams, Character streams.

---

## 📚 Textbooks & Reference Literature

### Primary Textbook:
1. **E. Balagurusamy**, *Programming with Java*, McGraw-Hill Education, 3rd/6th Edition.

### Recommended Reference Books:
* **P. Naughton and H. Schildt**, *Java 2: The Complete Reference*, Osborne Publishing.
* **Deitel & Deitel**, *Java: How to Program*, Prentice Hall, 9th Edition.
* **Robert Lafore**, *Object Oriented Programming in C++*, Sams Publishing, 4th Edition.
* **Herbert Schildt**, *Teach yourself C++*, MHC, 3rd Edition.

---

> 💡 **কিভাবে পড়বেন?**
> ডান পাশের sidebar ব্যবহার করে প্রতিটি সেকশন এবং লেকচার বেছে নিন। প্রতিটি মডিউলে রয়েছে বাংলা-ইংরেজি মিশ্রিত সহজ ব্যাখ্যা, রিয়েল-টাইম রান বা এডিট করার জন্য সমৃদ্ধ **IDE Playground**, গুরুত্বপূর্ণ টেকনিক্যাল টিপস এবং প্রতিটি বিষয়ের শেষে সেলফ-অ্যাসেসমেন্ট কুইজ! 
`
      }
    ]
  },
  {
    id: "section-1",
    title: "Section I: Concept of OOP & Java Basics",
    lessons: section1Lessons
  },
  {
    id: "section-2",
    title: "Section II: Variables, Operators & Control Flow",
    lessons: section2Lessons
  },
  {
    id: "section-3",
    title: "Section III: Objects & Classes",
    lessons: section3Lessons
  },
  {
    id: "section-4",
    title: "Section IV: Inheritance & Polymorphism",
    lessons: section4Lessons
  },
  {
    id: "section-5",
    title: "Section V: Abstraction",
    lessons: section5Lessons
  },
  {
    id: "section-6",
    title: "Section VI: Multithreaded Programming",
    lessons: section6Lessons
  },
  {
    id: "section-7",
    title: "Section VII: Packages & Encapsulation",
    lessons: section7Lessons
  }
];

// Comprehensive 10-Question Masterclass Final Quiz representing all PDF lectures
export const section4Quiz: Quiz[] = [
  {
    question: "Java তে Inheritance কোন keyword দিয়ে implement করা হয়?",
    options: [
      { label: "implements", isCorrect: false },
      { label: "extends", isCorrect: true },
      { label: "inherits", isCorrect: false },
      { label: "super", isCorrect: false }
    ],
    explanation: "extends keyword দিয়ে java তে inheritance করা হয়। printable বা drawable interface ইমপ্লিমেন্ট করতে implements ব্যবহৃত হয়।"
  },
  {
    question: "Method Overloading কোন ধরনের Polymorphism?",
    options: [
      { label: "Compile-time (Static) Polymorphism", isCorrect: true },
      { label: "Runtime (Dynamic) Polymorphism", isCorrect: false },
      { label: "Late Binding Polymorphism", isCorrect: false },
      { label: "শুধুমাত্র C++ এ সম্ভব", isCorrect: false }
    ],
    explanation: "Method Overloading কম্পাইল টাইমে কুয়েরি ম্যাচ করে বাইন্ডিং সম্পন্ন করে তাই এটি Compile-time Polymorphism। আর Overriding হলো Runtime Polymorphism।"
  },
  {
    question: "নিচের কোনটি Java-র buzzwords বা অনন্য ফিচারের অন্তর্ভুক্ত নয়?",
    options: [
      { label: "Platform Independence", isCorrect: false },
      { label: "Explicit Pointers (সরাসরি মেমরি এড্রেসিং)", isCorrect: true },
      { label: "Robust Memory Management", isCorrect: false },
      { label: "Architecture-Neutral model", isCorrect: false }
    ],
    explanation: "জাভাকে সহজ এবং সিকিউর রাখার জন্য Explicit pointers এবং অপারেটর ওভারলোডিং সম্পূর্ণ বাদ দেয়া হয়েছে।"
  },
  {
    question: "Java class-ভিত্তিক multiple inheritance সরাসরি সাপোর্ট করে না কেন?",
    options: [
      { label: "ডায়মন্ড প্রবলেম বা মেথড ম্যাচিং অ্যাম্বিগুইটি (Ambiguity) এড়াতে", isCorrect: true },
      { label: "মেমরি স্পেস বাঁচানোর জন্য", isCorrect: false },
      { label: "কারণ মাল্টিপল ইনহেরিটেন্স করতে অনেক টাইপিং করতে হয়", isCorrect: false },
      { label: "এটি সিকিউরিটির জন্য হুমকি", isCorrect: false }
    ],
    explanation: "যখন দুটি প্যারেন্ট ক্লাসে একই নামের মেথড থাকে এবং একটি চাইল্ড ক্লাস দুটিকে একযোগে ইনহেরিট করে, তখন কোন মেথডটি রান হবে তা ডিসাইড করতে পারে না। ওওপিতে একে Diamond Ambiguity প্রবলেম বলে।"
  },
  {
    question: "একটি synchronized মেথড কল করার সাথে সাথে থ্রেডটি কোন লকটি লাভ করে?",
    options: [
      { label: "Monitor Lock / Object Lock", isCorrect: true },
      { label: "Thread Key Lock", isCorrect: false },
      { label: "Semaphore Memory Lock", isCorrect: false },
      { label: "CPU Scheduler Priority Lock", isCorrect: false }
    ],
    explanation: "জাভাতে প্রতিটি অবজেক্টের একটি ইউনিক মনিতর লক থাকে। কোনো থ্রেড সিঙ্ক্রোনাইজড মেথড কল করার সাথে সাথে অবজেক্ট লক রিজার্ভ করে কাজ সম্পন্ন না করা পর্যন্ত লক ছাড়ে না।"
  },
  {
    question: "Java-তে thread priority-র ডিফল্ট প্রায়োরিটি বা মান কত?",
    options: [
      { label: "MIN_PRIORITY (1)", isCorrect: false },
      { label: "NORM_PRIORITY (5)", isCorrect: true },
      { label: "MAX_PRIORITY (10)", isCorrect: false },
      { label: "0 (Zero Priority)", isCorrect: false }
    ],
    explanation: "জাভায় থ্রেড প্রায়োরিটি ১ থেকে ১০ পরিমাপের হয় এবং থ্রেডের স্বাভাবিক ও ডিফল্ট মান হচ্ছে NORM_PRIORITY যা মূলত ৫।"
  },
  {
    question: "Parent class-এর member variable বা constructor-কে child class থেকে কল করতে কোন keyword ব্যবহৃত হয়?",
    options: [
      { label: "this", isCorrect: false },
      { label: "parent", isCorrect: false },
      { label: "super", isCorrect: true },
      { label: "extends", isCorrect: false }
    ],
    explanation: "super কিওয়ার্ডটি তার ঠিক পূর্ববর্তী ইমিডিয়েট পেরেন্ট ক্লাসের ভেরিয়েবল, মেথড অথবা কনস্ট্রাক্টর ইনভোক করার জন্য ব্যবহৃত হয়।"
  },
  {
    question: "Private মেম্বার বা ভেরিয়েবল কোন রেঞ্জ থেকে অ্যাক্সেস করা সম্ভব?",
    options: [
      { label: "শুধুমাত্র সংশ্লিষ্ট নিজস্ব ক্লাসের ভেতর থেকে", isCorrect: true },
      { label: "একই প্যাকেজের যেকোনো সাব-ক্লাস থেকে", isCorrect: false },
      { label: "বাহিরের প্যাকেজের চাইল্ড ক্লাস থেকে", isCorrect: false },
      { label: "সম্পূর্ণ প্রোজেক্টের যেকোনো মেথড থেকে", isCorrect: false }
    ],
    explanation: "অ্যাক্সেস মেম্বর প্রাইভেট (private) হলে সেটির ভিজিবিলিটি কেবল নিজস্ব ক্লাসের ব্র্যাকেটের ভেতরেই সীমাবদ্ধ।"
  },
  {
    question: "Blank Final Variable কোথায় এবং কখন ইনিশিয়ালাইজ করা সম্ভব?",
    options: [
      { label: "শুধুমাত্র ক্লাসের Constructor-এর ভেতরে", isCorrect: true },
      { label: "যেকোনো সাধারণ Getter মেথডে", isCorrect: false },
      { label: "শুধুমাত্র main() মেথডে", isCorrect: false },
      { label: "মেমরি ডিক্লেয়ারেশনের পরপরই অ্যাসাইনমেন্টের মাধ্যমে", isCorrect: false }
    ],
    explanation: "Blank Final Variable হলো এমন ফাইনাল ভেরিয়েবল যা ডিক্লেয়ার করার সময় মান দেয়া হয় না। এটি কেবল অবজেক্ট তৈরির সময় Constructor-এর ভেতর ইনিশিয়ালাইজ করা সম্ভব।"
  },
  {
    question: "Interface-এর সকল ভেরিয়েবল বা ক্যারেক্টার ডিফল্টভাবে কি কি হয়ে থাকে?",
    options: [
      { label: "public, static, and final", isCorrect: true },
      { label: "private, static, and final", isCorrect: false },
      { label: "protected and concrete", isCorrect: false },
      { label: "volatile and transient", isCorrect: false }
    ],
    explanation: "জাভা ইন্টারফেসের সকল ভেরিয়েবল বাই-ডিফল্ট public (সবার অ্যাক্সেসযোগ্য), static (সরাসরি কলযোগ্য) এবং final (কনস্ট্যান্ট বা অপরিবর্তনীয়)।"
  }
];
