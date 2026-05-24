import { Lesson } from './lessons';

export const section6Lessons: Lesson[] = [
  {
    id: "s6-overview",
    title: "Section Overview",
    description: "Syllabus Checklist and Masterclass Navigations for Section VI: Multithreaded Programming",
    content: `
# 📙 Section VI: Multithreaded Programming Masterclass

Welcome to **Section VI: Multithreaded Programming**. In Java, multithreading is a core capability that lets you build high-performance, asynchronous applications by running multiple execution paths concurrently. This masterclass guide compiles complete textbook concepts, verbatim classroom slide examples, interactive diagrams, and curated exercises to fully prepare you for university exams and hands-on production system designs.

---

### 📋 Section VI Course Syllabus Checklist
Below is a checkbox matrix indicating how every topic in the official course syllabus on Multithreaded Programming is systematically structured across our lectures:

- [x] **Core Concept of Multithreading & Thread Model** ➜ Covered in *Lesson 28: Introduction & Thread Models*
- [x] **Thread-based vs. Process-based Multitasking** ➜ Covered in *Lesson 28: Introduction & Thread Models*
- [x] **Main Thread Mechanics & Lifecycle Hook** ➜ Covered in *Lesson 28: Introduction & Thread Models*
- [x] **Option 1: Extending the Thread Class** ➜ Covered in *Lesson 29: Thread Creating & Runnable Blueprints*
- [x] **Option 2: Implementing the Runnable Interface** ➜ Covered in *Lesson 29: Thread Creating & Runnable Blueprints*
- [x] **Verbatim Concurrent A, B, C Threads Example** ➜ Covered in *Lesson 29: Thread Creating & Runnable Blueprints*
- [x] **Stop, Suspend, Resume and Block Operations** ➜ Covered in *Lesson 30: Thread Lifecycles, Blockings & Priorities*
- [x] **Thread Priorities Scale & Constants (MIN, NORM, MAX)** ➜ Covered in *Lesson 30: Thread Lifecycles, Blockings & Priorities*
- [x] **Preemptive Thread Scheduling Mechanics** ➜ Covered in *Lesson 30: Thread Lifecycles, Blockings & Priorities*
- [x] **Critical Thread Interference & Consistency Problems** ➜ Covered in *Lesson 31: Synchronization & Monitor Locks*
- [x] **Monitor Locks & Object Lock Internals** ➜ Covered in *Lesson 31: Synchronization & Monitor Locks*
- [x] **Verbatim Table-Printer Synchronization Experiments** ➜ Covered in *Lesson 31: Synchronization & Monitor Locks*
- [x] **Single-Task by Multiple Threads Execution** ➜ Covered in *Lesson 32: Advanced Multitasking & Anonymous Forms*
- [x] **Multiple-Tasks (Simple1, Simple2) Concurrences** ➜ Covered in *Lesson 32: Advanced Multitasking & Anonymous Forms*
- [x] **Anonymous Subclasses and Inline Runnable Lambdas** ➜ Covered in *Lesson 32: Advanced Multitasking & Anonymous Forms*

---

### 🗺️ Masterclass Lesson Navigation
Each lesson has been engineered to provide an engaging learning experience:

1. **Lesson 28: Introduction to Multithreaded Programming**
   * Fundamentals of multithreading, lightweight execution units, thread vs. process comparison, and the role of the main thread.
2. **Lesson 29: Option 1: Thread Extension & Option 2: Runnable Implementation**
   * Master the two approaches to creating active threads, analyzing verbatim slide code from the university's curriculum.
3. **Lesson 30: Thread Life Cycle (5 States), Stopping, Blocking & Priorities**
   * Delve into the five states a thread goes through, examine \`sleep()\`, \`suspend()\`, and \`wait()\`, and explore priorities.
4. **Lesson 31: Thread Synchronization, Race Conditions & Monitor Locks**
   * Learn how thread interference corrupts shared memory state, and solve it using synchronized methods.
5. **Lesson 32: Advanced Multitasking & Anonymous Thread Architectures**
   * Study advanced patterns including anonymous inner styles, single-task vs. multi-task structures, and lambda equivalents.
`,
    cards: [
      {
        icon: "🧵",
        title: "Thread Model",
        desc: "Harnessing lightweight sub-processes that share address spaces to yield maximum multitasking performance."
      },
      {
        icon: "🔄",
        title: "Creation Modes",
        desc: "Exploring both Thread class inheritance and implements Runnable options with state dispatching."
      },
      {
        icon: "🚦",
        title: "Thread States",
        desc: "Tracing thread transitions across New, Runnable, Running, Blocked, and Terminated states."
      },
      {
        icon: "🔒",
        title: "Synchronization",
        desc: "Enforcing mutual exclusion with synchronized methods and object monitor locks to solve race conditions."
      }
    ]
  },
  {
    id: "thread-introduction",
    title: "Lesson 28: Introduction & Thread Models",
    description: "Learn the core fundamentals of Java multithreading, lightweight execution units, and process-based vs. thread-based multitasking.",
    cards: [
      {
        icon: "🧠",
        title: "Lightweight Process",
        desc: "Threads are the smallest independent units of execution within a single application."
      },
      {
        icon: "💾",
        title: "Shared Memory",
        desc: "Threads share the same program address space, avoiding heavyweight memory allocations."
      },
      {
        icon: "⚡",
        title: "Async Magic",
        desc: "Ensures UI handles background fetches, animations, or computations without blocking users."
      },
      {
        icon: "👑",
        title: "Main Thread",
        desc: "The entry point thread triggered automatically by the JVM to launch nested execution points."
      }
    ],
    content: `
# 📦 Lesson 28: Introduction to Multithreaded Programming

## 🔍 1. What is Multithreading in Java?
**Multithreading** in Java is a process of executing multiple threads simultaneously. 

A **thread** is a lightweight sub-process, the smallest unit of processing. It represents a separate path of execution inside a running application.

Both **multiprocessing** and **multithreading** are used to achieve multitasking. However, we prefer multithreading because threads share a single, common memory area. They do not allocate separate memory spaces, which saves memory and avoids high-overhead context-switching.

---

## 🏛️ 2. Process-Based vs. Thread-Based Multitasking

In systems architecture, multitasking is split into two models:

### A. Process-based Multitasking (Multiprocessing)
* **Separate Address Space**: Each process is allocated its own separate region of memory by the operating system.
* **Heavyweight**: Creating or terminating a process requires high resource overhead.
* **High Communication Cost**: Exchanging data between processes involves slow Inter-Process Communication (IPC) techniques.
* **Slow Context Switching**: Switching CPU focus between processes is slow because it requires saving and loading memory maps, hardware registers, and lists.

### B. Thread-based Multitasking (Multithreading)
* **Shared Address Space**: All threads of a single process share the exact same memory space.
* **Lightweight**: Thread creation is fast since no brand new OS memory space is generated.
* **Low Communication Cost**: Threads communicate cheaply and instantly through shared object state and references.
* **Fast Context Switching**: Switching execution focus between threads takes very little time.

---

## 🗺️ 3. Single-Threaded vs. Multithreaded flow of control

Let's look at how instructions run under both architectures:

### 1. Single-Threaded Program
A single-threaded program has a single flow of control. It has a beginning, a body, an end, and executes commands sequentially (one block after the other). A standard console app executing sequence-based lines is single-threaded.

\`\`\`
                  ┌──────────────────────┐
                  │      class ABC       │
                  ├──────────────────────┤
                  │ ──► [Beginning]      │
                  │   │                  │
                  │   ▼                  │
                  │ [Single-Threaded]    │
                  │   │  Execution Body  │
                  │   ▼                  │
                  │ ──► [End]            │
                  └──────────────────────┘
\`\`\`

### 2. Multithreaded Program
A multithreaded program contains **multiple flows of control**. In this model, a single program spawns separate concurrent execution channels:

\`\`\`
                                  ┌───────────────┐
                                  │  Main Thread  │
                                  └───────┬───────┘
                                          │
                     ┌────────────────────┼────────────────────┐
                     │ start()            │ start()            │ start()
                     ▼                    ▼                    ▼
              ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
              │   Thread A   │◄───►│   Thread B   │◄───►│   Thread C   │
              └──────────────┘     └──────────────┘     └──────────────┘
                       (Concurrently Switching on Shared Resources)
\`\`\`

The **Main Thread** represents the JVM's \`main()\` method entrance. It starts running first. 
Once initiated, it creates and starts secondary threads (A, B, and C). These sibling threads run fully concurrently, switching context rapidly to perform distinct parallel jobs.

---

## 🚀 4. Distinct Advantages of Java Multithreading
1. **Non-blocking UX**: It keeps the application responsive. For example, a heavy file download can run in the background while the user continues typing inside the interface.
2. **Time Efficiency**: Complex operations are processed together, saving time.
3. **Isolating Errors**: Threads are independent. If an unexpected \`Exception\` crashes a background thread, the other threads and the main thread keep running undisturbed.
`,
    quizzes: [
      {
        question: "Multitasking অর্জনের ক্ষেত্রে Multiprocessing-এর চেয়ে Multithreading বেশি সুবিধাজনক কেন?",
        options: [
          { label: "কারণ থ্রেডগুলো প্রত্যেকে আলাদা আলাদা মেমরি স্পেস ব্যবহার করে", isCorrect: false },
          { label: "কারণ থ্রেডগুলো একটি কমন শেয়ারড মেমরি স্পেস ব্যবহার করে এবং কনটেক্সট-সুইচিং অতি দ্রুত হয়", isCorrect: true },
          { label: "কারণ থ্রেড সরাসরি সিপিইউ ওভাররাইড করতে পারে", isCorrect: false },
          { label: "থ্রেড রান করালে কম্পিউটারের হার্ডওয়্যার গরম হয় না", isCorrect: false }
        ],
        explanation: "থ্রেডগুলো আলাদা মেমরি বরাদ্দ না করে একটি প্রসেসের কমন মেমরি এরিয়া শেয়ার করে কাজ করে। ফলে মেমরির অপচয় কমে এবং থ্রেডগুলোর মধ্যে কনটেক্সট সুইচিং করতে অত্যন্ত কম সময় লাগে।"
      },
      {
        question: "যদি আপনার মাল্টিথ্রেডেড অ্যাপ্লিকেশনের একটি ব্যাকগ্রাউন্ড থ্রেডে রানটাইম এক্সেপশন ঘটে, তবে মূল অ্যাপ্লিকেশনটির উপর কী প্রভাব পড়বে?",
        options: [
          { label: "সম্পূর্ণ জাভা অ্যাপ্লিকেশন ক্র্যাশ হয়ে বন্ধ হয়ে যাবে", isCorrect: false },
          { label: "অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে রিবুট হবে", isCorrect: false },
          { label: "ভুল ঘটা থ্রেডটি বাদে বাকি অন্য সকল থ্রেড সচল থাকবে", isCorrect: true },
          { label: "জাভা ভার্চুয়াল মেশিন অটোমেটিক্যালি কোড ঠিক করে রিস্টার্ট করবে", isCorrect: false }
        ],
        explanation: "জাভায় থ্রেডগুলো একে অপরের থেকে সম্পূর্ণ স্বাধীন। একটি সুনির্দিষ্ট থ্রেডে রানটাইম এরর বা এক্সেপশন ঘটলে উক্ত থ্রেড ব্যাহত হলেও অন্য সুস্থ থ্রেডগুলো এবং মূল মেইন থ্রেডটি সচল থাকে।"
      }
    ],
    reviewQuestions: [
      "Compare Process-based Multitasking and Thread-based Multitasking with at least four distinct parameters.",
      "Explain the concept of 'Context Switching' and discuss why it is highly lightweight inside multithreaded systems.",
      "Summarize the role of the JVM 'Main Thread' in spawning and coordinating secondary threads."
    ]
  },
  {
    id: "thread-creation",
    title: "Lesson 29: Thread Creation & Runnable Blueprints",
    description: "Master the two textbook options to create single and multiple active threads in Java: extending Thread versus implementing Runnable.",
    cards: [
      {
        icon: "🏗️",
        title: "run() Method",
        desc: "The heart and soul of any thread; contains the code block that executes concurrently."
      },
      {
        icon: "🚀",
        title: "start() Method",
        desc: "Prepares system registers and triggers the JVM to invoke the run() code asynchronously."
      },
      {
        icon: "🧬",
        title: "Option 1: Class Extend",
        desc: "Directly extends java.lang.Thread and overrides run() for direct access to operations."
      },
      {
        icon: "🔗",
        title: "Option 2: Runnable",
        desc: "Implements the Runnable interface, leaving the class free to extend other parents."
      }
    ],
    content: `
# 📦 Lesson 29: Creating Single and Multiple Threads

## 🫀 1. The Core Engine: \`run()\` and \`start()\`
Threads are implemented in the form of objects that contain a dedicated method called \`run()\`. 

The \`run()\` method is the **heart and soul** of any thread. It defines the entire execution body and contains all the logic that runs concurrently.

To execute a thread, we invoke the \`start()\` method on its object. \`start()\` is a native method in the \`Thread\` class that registers the thread with the JVM's scheduler and triggers \`run()\` asynchronously.

⚠️ **CRITICAL WARNING**: Never call \`run()\` directly (e.g., \`myThread.run();\`). Calling \`run()\` directly executes it synchronously on the *current thread*, bypassing the thread scheduler completely. Always use \`start()\` to create a new thread of execution!

---

## 🏛️ 2. Option 1: Extending the \`Thread\` Class
To create a thread using this approach, we:
1. Declare a class that inherits from \`java.lang.Thread\`.
2. Override the \`public void run()\` method.
3. Instantiate the class and call \`start()\`.

### Verbatim Classroom Example (ThreadTest.java)
Let's study the textbook code implementing three distinct threads (A, B, and C) running in parallel:

\`\`\`java
class A extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("\\t From Thread A: i = " + i);
        }
        System.out.println(" Exit From A ");
    }
}

class B extends Thread {
    public void run() {
        for (int j = 1; j <= 5; j++) {
            System.out.println("\\t From Thread B: j = " + j);
        }
        System.out.println(" Exit From B ");
    }
} 

class C extends Thread {
    public void run() {
        for (int k = 1; k <= 5; k++) {
            // Note: In university slides, class C contained a slight typo:
            // "From Thread A: k=" instead of C. We document this real classroom quirk!
            System.out.println("\\t From Thread C: k = " + k);
        }
        System.out.println(" Exit From C ");
    }
} 

class ThreadTest {
    public static void main(String args[]) {
        // Instantiate and initiate execution paths
        new A().start();
        new B().start();
        new C().start();
    }
}
\`\`\`

### 💡 Execution Trace Analysis
When you run \`ThreadTest\`, you will notice that the printed outputs from A, B, and C are interleaved and unpredictable:
\`\`\`
     From Thread A: i = 1
     From Thread B: j = 1
     From Thread A: i = 2
     From Thread C: k = 1
     From Thread B: j = 2
\`\`\`
This is because all three threads run concurrently. The JVM's thread scheduler decides how to allocate CPU slices to each thread, meaning the exact output order changes on every run.

---

## 🔗 3. Option 2: Implementing the \`Runnable\` Interface
Java supports single inheritance; a class can extend only one superclass. If your class needs to inherit from a parent class like \`Vehicle\`, it cannot also extend \`Thread\`.

In this case, you use a second approach: implementing the \`Runnable\` interface.

### The 4-Step Runnable Blueprint
1. Declare your class as implementing the \`Runnable\` interface.
2. Override the \`public void run()\` method.
3. Create an instance of your class, e.g., \`MyRunnable target = new MyRunnable();\`.
4. Wrap this target in a \`Thread\` object by passing it to the thread constructor: \`Thread worker = new Thread(target);\`.
5. Call \`worker.start()\`.

### Verbatim Runnable Example (RunnableTest.java)
\`\`\`java
class X implements Runnable {
    public void run() {
        for (int i = 1; i <= 10; i++) {
            System.out.println("\\t ThreadX : " + i);
        }
        System.out.println("End of ThreadX");
    }
}

class RunnableTest {
    public static void main(String args[]) {
        X runnable = new X();
        // Passing the runnable object as the execution target of the thread
        Thread threadX = new Thread(runnable); 
        threadX.start();
        
        System.out.println("End of main Thread");
    }
}
\`\`\`

### 💡 Execution Trace Analysis:
In \`RunnableTest\`, \`main()\` starts executing. It spawns the secondary thread \`threadX\` and prints \`"End of main Thread"\`. The main thread may finish and die before \`threadX\` completes its loop. This shows that independent thread execution channels run concurrently alongside the main thread.
`,
    quizzes: [
      {
        question: "জাভাতে একটি থ্রেড অবজেক্ট 't' তৈরি করার পর সেটিকে কনকারেন্টলি সক্রিয় বা সচল করার সঠিক উপায় কোনটি?",
        options: [
          { label: "t.run();", isCorrect: false },
          { label: "t.start();", isCorrect: true },
          { label: "t.execute();", isCorrect: false },
          { label: "t.launch();", isCorrect: false }
        ],
        explanation: "t.start() মেথড কল করলে তা ব্যাকগ্রাউন্ডে নতুন থ্রেড রেজিস্ট্রি রেডি করে run() মেথডকে ডাক দেয়। কিন্তু সরাসরি t.run() কল করলে এটি মেইন থ্রেডেই সাধারণ মেথড কলের মতোই সিঙ্ক্রোনাসভাবে লাইন বাই লাইন এক্সিকিউট হবে।"
      },
      {
        question: "কেন Thread ক্লাস এক্সটেন্ড করার চাইতে Runnable ইন্টারফেস ইমপ্লিমেন্ট করা বেশি বিশ্বস্ত এবং বহুল ব্যবহৃত?",
        options: [
          { label: "কারণ Runnable ব্যবহার করলে র‍্যাম মেমোরি খরচ হয় না", isCorrect: false },
          { label: "কারণ জাভায় কোনো ক্লাস কেবল একটি ক্লাসকেই ইনহেরিট করতে পারে, তাই অন্যান্য হায়ারার্কিক্যাল ইনহেরিটেন্স অপরিবর্তিত রাখতে ইন্টারফেস ইমপ্লিমেন্ট ব্যবহার করা হয়", isCorrect: true },
          { label: "কারণ Runnable ইন্টারফেসে সরাসরি 'start()' মেথড ওভাররাইড মেমোরিতে থাকে", isCorrect: false },
          { label: "কারণ Runnable ব্যবহার করলে থ্রেডগুলো একসাথে লক হয়ে যায়", isCorrect: false }
        ],
        explanation: "জাভায় মাল্টিপল ইনহেরিটেন্স নিষিদ্ধ। যদি কোনো সাব-ক্লাস অন্য কোনো ক্লাসকে এক্সটেন্ড করে ফেলে, তবে সে আর Thread ক্লাসকে এক্সটেন্ড করতে পারবে না। তাই এই সীমাবদ্ধতা দূর করতে Runnable ইন্টারফেস ব্যবহার করা হয়।"
      }
    ],
    reviewQuestions: [
      "Demonstrate with clean code compilation blocks both Option 1 (Extending Thread) and Option 2 (Implementing Runnable).",
      "Explain why direct invocation of the 'run()' method fails to produce thread parallelism.",
      "How does the JVM handle thread execution once the main thread finishes? Support your answer with a visual diagram."
    ]
  },
  {
    id: "thread-lifecycle",
    title: "Lesson 30: Life Cycle, Suspending & Priorities",
    description: "Understand the five primary states of the Thread Lifecycle, learn blocking behaviors, and explore priority metrics.",
    cards: [
      {
        icon: "🚦",
        title: "Lifecycle States",
        desc: "New, Runnable, Running, Non-Runnable (Blocked), and Terminated state flows."
      },
      {
        icon: "🛑",
        title: "Stopping Thread",
        desc: "Using the now deprecated .stop() method to move a running thread into the dead state."
      },
      {
        icon: "⏳",
        title: "Blocking",
        desc: "Temporarily suspending execution threads using sleep(), suspend(), or wait()."
      },
      {
        icon: "⭐",
        title: "Priority Level",
        desc: "Assigning integer priorities (MIN=1, NORM=5, MAX=10) to guide the CPU scheduler."
      }
    ],
    content: `
# 📦 Lesson 30: Life Cycle, Suspending & Priorities

## 🔄 1. The 5 States of the Thread Life Cycle
A thread's lifecycle is managed by the JVM and consists of 5 states:

1. **New**: The thread has been instantiated, but \`start()\` has not been called yet.
2. **Runnable**: \`start()\` has been called, and the thread is waiting for the JVM scheduler to allocate CPU time.
3. **Running**: The thread scheduler has selected the thread, and its \`run()\` method is actively executing code on the CPU.
4. **Non-Runnable (Blocked)**: The thread is alive, but it cannot run. This happens when the thread is waiting for an I/O operation, sleeping, or waiting for a synchronization lock.
5. **Terminated / Dead**: The thread has finished executing its \`run()\` method, or \`stop()\` was explicitly called.

\`\`\`
                  ┌──────────────────────┐
                  │         New          │
                  └──────────┬───────────┘
                             │ start()
                             ▼
                  ┌──────────────────────┐
            ┌────►│       Runnable       │◄───────────────────┐
            │     └──────────┬───────────┘                    │
            │                │ Scheduler Selects              │ Notify, Resume,
            │                ▼                                │ Timer Elapse
            │     ┌──────────────────────┐                    │
            │     │       Running        ├─────────┐          │
            │     └──────────┬───────────┘         │          │
            │                │                     │ Sleep,   │
            │                │ run() exits         │ Suspend, │
            │                ▼                     │ Wait     │
            │     ┌──────────────────────┐         │          │
            │     │      Terminated      │         ▼          │
            │     └──────────────────────┘   ┌────────────────┴─────┐
            │                                │ Blocked / Suspension │
            └────────────────────────────────┤     Non-Runnable     │
                  Resume, Notify, Wakeup     └──────────────────────┘
\`\`\`

---

## 🚫 2. Controlling Thread States

### A. Stopping a Thread
To stop a thread before its loop finishes, we can call:
\`\`\`java
aThread.stop();
\`\`\`
This forces the thread to enter the **Dead** state.
*Note*: The \`.stop()\` method is technically deprecated in modern Java because it causes thread instability and leaks locked monitor states. However, it is a core concept covered in class exams.

### B. Blocking a Thread
You can temporarily block execution using three primary methods:

1. **\`sleep(time)\`**: Blocks the thread for a specified number of milliseconds.
2. **\`suspend()\`**: Blocks the thread indefinitely until another thread calls \`resume()\`.
3. **\`wait()\`**: Causes the thread to wait until another thread calls \`notify()\` or \`notifyAll()\`.

---

## 🏎️ 3. Thread Priorities
Each thread has a priority value that helps the JVM schedule CPU execution. Priority is represented by an integer between **1 and 10**:

* **\`Thread.MIN_PRIORITY\`** = \`1\`
* **\`Thread.NORM_PRIORITY\`** = \`5\` *(Default option for all spawned threads)*
* **\`Thread.MAX_PRIORITY\`** = \`10\`

### Preemptive Scheduling
The thread scheduler uses **preemptive scheduling**: if a thread with high priority comes into the runnable state, it is scheduled to run before lower-priority threads. However, because scheduling depends on the underlying host operating system, priority is a hint rather than an absolute guarantee.

### Verbatim Priority Demo Class (TestMultiPriority1.java)
\`\`\`java
class TestMultiPriority1 extends Thread {
    public void run() {
        System.out.println("running thread name is:" + Thread.currentThread().getName());
        System.out.println("running thread priority is:" + Thread.currentThread().getPriority());
    }
    
    public static void main(String args[]) {
        TestMultiPriority1 m1 = new TestMultiPriority1();
        TestMultiPriority1 m2 = new TestMultiPriority1();
        
        // Setting distinct priorities
        m1.setPriority(Thread.MIN_PRIORITY); // priority = 1
        m2.setPriority(Thread.MAX_PRIORITY); // priority = 10
        
        m1.start();
        m2.start();
    }
}
\`\`\`

### *Expected Output Sample*:
\`\`\`
running thread name is: Thread-1
running thread priority is: 10
running thread name is: Thread-0
running thread priority is: 1
\`\`\`
*(Notice how the thread with priority 10 runs and finishes its output first, even though m1's start was called before m2's).*
`,
    quizzes: [
      {
        question: "জাভাতে একটি নতুন থ্রেড 'new Thread()' দিয়ে তৈরি করার পর কিন্তু 'start()' কল করার পূর্ব মুহূর্ত পর্যন্ত তার স্টেট কোনটি?",
        options: [
          { label: "Runnable State", isCorrect: false },
          { label: "Running State", isCorrect: false },
          { label: "New State", isCorrect: true },
          { label: "Blocked State", isCorrect: false }
        ],
        explanation: "থ্রেডের অবজেক্ট কেবল মেমরি হিপে তৈরি হয়েছে কিন্তু কনকারেন্টলি রেজিস্ট্রি হয়নি, এই প্রাথমিক অবস্থাকে 'New' বা 'New-born' স্টেট বলা হয়।"
      },
      {
        question: "থ্রেড প্রায়োরিটি সম্পর্কিত নিচের কোন তথ্যটি সঠিক নয়?",
        options: [
          { label: "থ্রেড প্রায়োরিটি সর্বোচ্চ ১০ এবং সর্বনিম্ন ১ হতে পারে", isCorrect: false },
          { label: "ডিফল্ট স্বাভাবিক প্রায়োরিটির মান ৫ (NORM_PRIORITY)", isCorrect: false },
          { label: "উচ্চ প্রায়োরিটি ওয়ালা থ্রেড সর্বদা গ্যারান্টিড উপরিভাগে আগে রান হবেই, ওএস প্ল্যাটফর্ম নির্বিশেষে", isCorrect: true },
          { label: "setPriority() মেথডের সাহায্যে ভ্যালু পরিবর্তন করা যায়", isCorrect: false }
        ],
        explanation: "জাভাতে থ্রেড প্রায়োরিটি একটি গাইডলাইন বা প্রেফারেন্স হিসেবে কাজ করে। হোস্ট অপারেটিং সিস্টেমের থ্রেড শিডিউলিং পলিসির কারণে উচ্চ প্রায়োরিটি সম্পন্ন থ্রেডও কখনো কখনো ওএস শিডিউলারের জন্য সামান্য পরে রান হতে পারে।"
      }
    ],
    reviewQuestions: [
      "Explain the five states of a thread lifetime using a clean visual state transition diagram.",
      "Detail the differences between sleep(), suspend(), and wait() methods.",
      "What are the predefined priority levels in Java? Show how they are integrated into TestMultiPriority1."
    ]
  },
  {
    id: "thread-synchronization",
    title: "Lesson 31: Thread Synchronization & Object Locks",
    description: "Learn how to prevent thread interference and data inconsistency using synchronized blocks and monitor locks.",
    cards: [
      {
        icon: "⚡",
        title: "Race Condition",
        desc: "Occurs when multiple concurrent threads read and write a shared resource at the same time."
      },
      {
        icon: "🔒",
        title: "synchronized",
        desc: "Restricts access to a method or block, ensuring only one thread can execute it at a time."
      },
      {
        icon: "🧿",
        title: "Monitor Lock",
        desc: "An internal, unique lock associated with every Java object used to serialize thread execution."
      },
      {
        icon: "📈",
        title: "Consistency",
        desc: "Guarantees clean, predictable operations across shared memory structures."
      }
    ],
    content: `
# 📦 Lesson 31: Thread Synchronization & Object Locks

## 🔍 1. Why do we need Synchronization?
In a multithreaded application, multiple threads share the same variables, fields, and hardware channels:

\`\`\`
                  ┌──────────────┐          ┌──────────────┐
                  │   Thread 1   │          │   Thread 2   │
                  └──────┬───────┘          └──────┬───────┘
                         │ Try to                  │ Try to
                         │ Access                  │ Access
                         ▼                         ▼
                  ┌────────────────────────────────────────┐
                  │   Shared Global Class Instance Table   │
                  └────────────────────────────────────────┘
\`\`\`

If we don't coordinate this access, threads will interleave their execution unpredictably. This can lead to:
1. **Thread Interference**: Sibling operations interrupting and corrupting each other.
2. **Data Inconsistency**: Corrupted internal memory states because of incomplete reads/writes (often called **race conditions**).

---

## 🏛️ 2. Memory Corruption: Table Printing WITHOUT Synchronization
Let's analyze what happens when multiple threads print to a single, shared resources class without synchronization:

\`\`\`java
class Table {
    void printTable(int n) { // Not synchronized!
        for (int i = 1; i <= 5; i++) {
            System.out.println(n * i);
            try {
                Thread.sleep(400); // Artificial delay to expose context switching
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}

class MyThread1 extends Thread {
    Table t;
    MyThread1(Table t) { this.t = t; }
    public void run() { t.printTable(5); }
}

class MyThread2 extends Thread {
    Table t;
    MyThread2(Table t) { this.t = t; }
    public void run() { t.printTable(100); }
}

class TestSynchronization1 {
    public static void main(String args[]) {
        Table obj = new Table(); // Shared resource
        MyThread1 t1 = new MyThread1(obj);
        MyThread2 t2 = new MyThread2(obj);
        t1.start();
        t2.start();
    }
}
\`\`\`

### *Inconsistent Output Result*:
\`\`\`
5
100
10
200
15
300
20
400
25
500
\`\`\`
*(Notice how the numbers of the 5-times-table and the 100-times-table mingle. This output is corrupted and hard to read!).*

---

## 🛡️ 3. The Solution: Table Printing WITH \`synchronized\`
To resolve this, we declare the method using the **\`synchronized\`** keyword:

\`\`\`java
class Table {
    // Declared as synchronized!
    synchronized void printTable(int n) { 
        for (int i = 1; i <= 5; i++) {
            System.out.println(n * i);
            try {
                Thread.sleep(400); 
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}
\`\`\`

### *Consistent Output Result (TestSynchronization2)*:
\`\`\`
5
10
15
20
25
100
200
300
400
500
\`\`\`
*(The 5-times-table completes printing perfectly, and only after it finishes does the 100-times-table begin).*

---

## 🔮 4. The Lock (Monitor) Lifecycle
Java's synchronization is built around an internal entity called the **lock** or **monitor**:
1. Every object created in Java has a unique lock associated with it.
2. When a thread invokes a \`synchronized\` method, it automatically attempts to acquire that object's lock.
3. If the lock is free, the thread acquires it and can execute the method's code. Sibling threads attempting to enter *any* synchronized method on that object are blocked, entering a **Lock/Wait Pool**.
4. Once the executing thread completes the method (exits or throws an exception), it releases the lock.
5. Sibling threads then compete for the released lock, allowing the winner to proceed.
`,
    quizzes: [
      {
        question: "জাভাতে একটি মেথড 'synchronized' ঘোষণা করার সাথে সাথে রানটাইমে কোন লক মেকানিজমটি সক্রিয় হয়?",
        options: [
          { label: "মেথড রিড-রাইট লক (Method Lock)", isCorrect: false },
          { label: "সংশ্লিষ্ট অবজেক্টের মনিতর লক (Monitor Lock/Object Lock)", isCorrect: true },
          { label: "সিপিইউ ভার্চুয়াল থ্রেড রেজিস্টার লক", isCorrect: false },
          { label: "গ্লোবাল ডিরেক্টরি ফাইল হোল ক্র্যাশ পলিসি", isCorrect: false }
        ],
        explanation: "জাভায় প্রতি অবজেক্টের একটি মনিতর বা অবজেক্ট লক থাকে। কোনো থ্রেড সিনক্রোনাইজড মেথড কল করলে সে ওই অবজেক্ট লকটি ধারণ করে এবং মেথডের কাজ শেষ না হওয়া পর্যন্ত লক রিলিজ করে না।"
      },
      {
        question: "যদি Table ক্লাসের printTable() মেথডটি synchronized না থাকে, তবে আউটপুট এলোমেলো হওয়ার প্রধান কারণ কী?",
        options: [
          { label: "কারণ জাভা কম্পাইলার র্যান্ডম প্রিন্ট করা পছন্দ করে", isCorrect: false },
          { label: "কারণ থ্রেড ১ কাজ শেষ করার আগেই থ্রেড ২ রান অবজেক্টে ইন্টারফেয়ার শুরু করে এবং সিপিইউ কন্সট্যান্ট সুইচ করতে থাকে (Race Condition)", isCorrect: true },
          { label: "থ্রেডগুলোর প্রায়োরিটি সমান ছিল তাই এমন হয়েছিল", isCorrect: false },
          { label: "মেথডে রিটার্ন টাইপ ভ্যালু না থাকা", isCorrect: false }
        ],
        explanation: "মেথড সিঙ্ক্রোনাইজড না থাকলে থ্রেড ইন্টারফেয়ারেন্স ঘটে। থ্রেড ১ স্লিপে যাওয়ার সাথে সাথেই সিপিইউ থ্রেড ২ কে অগ্রাধিকার দিয়ে টেবিলে প্রিন্ট করতে শুরু করে, যার ফলে ডাটা করাপশন বা রেস কন্ডিশন তৈরি হয়।"
      }
    ],
    reviewQuestions: [
      "Define 'Race Condition' and discuss the consistency issues that arise in multi-user applications.",
      "Explain the concept of 'Monitor Lock/Object Lock' in Java synchronization structures.",
      "What happens to a blocked thread while it is waiting in the Lock Pool to acquire an object lock?"
    ]
  },
  {
    id: "thread-multitasking",
    title: "Lesson 32: Advanced Multitasking & Anonymous Forms",
    description: "Learn how to perform single and multiple tasks using Thread and Runnable, with a look at Anonymous Classes and Lambda shortcuts.",
    cards: [
      {
        icon: "🧭",
        title: "Single Task Model",
        desc: "Multiple concurrent worker threads executing the same unified run() contract."
      },
      {
        icon: "🚥",
        title: "Multi-Task Model",
        desc: "Spawning distinct threads with customized run() blocks to execute different tasks."
      },
      {
        icon: "🚀",
        title: "Anonymous Threads",
        desc: "Defining and starting threads inline using anonymous inner classes."
      },
      {
        icon: "⚛️",
        title: "Lambda Syntax",
        desc: "Developing lean execution pathways using modern Java code structures."
      }
    ],
    content: `
# 📦 Lesson 32: Advanced Multitasking & Anonymous Forms

## 🔍 1. Defining Tasks in Multithreading
When using multithreading, we can design execution structures around two primary models:

### A. Performing a Single Task by Multiple Threads
Multiple threads are instantiated, but they all share and execute the same unified \`run()\` logic. This is useful for load balancing, where multiple workers pull tasks from a single queue.

\`\`\`java
// Multiple threads running the same run() method
class TestMultitasking1 extends Thread {
    public void run() {
        System.out.println("task one");
    }
    
    public static void main(String args[]) {
        TestMultitasking1 t1 = new TestMultitasking1();
        TestMultitasking1 t2 = new TestMultitasking1();
        TestMultitasking1 t3 = new TestMultitasking1();
        
        t1.start();
        t2.start();
        t3.start();
    }
}
\`\`\`

- **Runnable Equivalent**:
\`\`\`java
class TestMultitasking2 implements Runnable {
    public void run() {
        System.out.println("task one");
    }
    
    public static void main(String args[]) {
        Thread t1 = new Thread(new TestMultitasking2());
        Thread t2 = new Thread(new TestMultitasking2());
        t1.start();
        t2.start();
    }
}
\`\`\`

---

### B. Performing Multiple Tasks by Multiple Threads (Multitasking)
Threads run concurrently, but they execute **different tasks** by using distinct \`run()\` method structures.

\`\`\`java
class Simple1 extends Thread {
    public void run() {
        System.out.println("task one");
    }
}

class Simple2 extends Thread {
    public void run() {
        System.out.println("task two");
    }
}

class TestMultitasking3 {
    public static void main(String args[]) {
        Simple1 t1 = new Simple1();
        Simple2 t2 = new Simple2();
        
        t1.start();
        t2.start();
    }
}
\`\`\`

---

## 🚀 2. Anonymous Inner Class Implementations & Snippets
Sometimes, writing full class declarations for simple thread tasks is unnecessary. In these cases, we use **Anonymous Inner Classes** to declare and start threads inline:

### A. Anonymous Class extending Thread
\`\`\`java
class TestMultitasking4 {
    public static void main(String args[]) {
        // Dynamic anonymous thread 1
        Thread t1 = new Thread() {
            public void run() {
                System.out.println("task one");
            }
        };
        
        // Dynamic anonymous thread 2
        Thread t2 = new Thread() {
            public void run() {
                System.out.println("task two");
            }
        };
        
        t1.start();
        t2.start();
    }
}
\`\`\`

### B. Anonymous Class implementing Runnable
If we are using implementing structures, we write:
\`\`\`java
class TestMultitasking5 {
    public static void main(String args[]) {
        // Anonymous Runnable object assignment
        Runnable r1 = new Runnable() {
            public void run() {
                System.out.println("task one");
            }
        };
        
        Runnable r2 = new Runnable() {
            public void run() {
                System.out.println("task two");
            }
        };
        
        Thread t1 = new Thread(r1);
        Thread t2 = new Thread(r2);
        
        t1.start();
        t2.start();
    }
}
\`\`\`

---

## ⚡ 3. Compilation Target: Modern Lambda Shortcuts
Since the \`Runnable\` interface contains only a single abstract method, it is classified as a **Functional Interface**. In modern Java (Java 8+), this allows you to completely bypass anonymous inner class declarations and use **Lambda Expressions**:

\`\`\`java
class TestLambdaMultithreading {
    public static void main(String args[]) {
        // Modern Lambda expression shortcut
        Thread t1 = new Thread(() -> System.out.println("task one"));
        Thread t2 = new Thread(() -> System.out.println("task two"));
        
        t1.start();
        t2.start();
    }
}
\`\`\`

---

## 🎓 4. Practice Homework Challenge (Section VI Conclusion)
**Problem Statement**: 
Build a multithreaded simulation demonstrating a shared **Bank ATM Vault**. Write a class \`Vault\` with a field \`balance = 5000;\`. Implement a synchronized method \`withdraw(String threadName, int amount)\`. If the balance is sufficient, print the withdrawal message and perform a 400ms sleep before updating the balance. Finally, spawn two persistent threads (Alice & Bob) pulling resources from the same shared ATM Vault. Run this sandbox inside our interactive playground to observe real-time mutual exclusion!
`,
    quizzes: [
      {
        question: "Anonymous Thread ক্লাস ব্যবহারের মূল সুবিধা বা উদ্দেশ্য কোনটি?",
        options: [
          { label: "এটি রানিং মেমরি ডাটা সম্পূর্ণ সিঙ্ক্রোনাইজ রাখে", isCorrect: false },
          { label: "আলাদা করে নতুন ক্লাস ফাইল ডিক্লেয়ার না করে সরাসরি কোডের ভেতরেই দ্রুত ইন-লাইন থ্রেড তৈরি করা যায়", isCorrect: true },
          { label: "এটি সিঙ্গেল ইনহেরিটেন্সের বাধাকে বাইপাস করে", isCorrect: false },
          { label: "এটি থ্রেডের প্রায়োরিটি স্বয়ংক্রিয়ভাবে বুস্ট করে", isCorrect: false }
        ],
        explanation: "অ্যানোনিমাস মেকানিজমে আলাদা চাইল্ড ক্লাস ডিফাইন করার প্রয়োজন পড়ে না। সরাসরি মেইন কোডের ভেতরেই থ্রেড মেম্বার ইনস্ট্যান্ট ডিক্লেয়ার ও রান করা যায়, যা ডেভেলপার টাইপিং ও ফাইলের ক্লটার কমায়।"
      },
      {
        question: "নিচের কোন কোড স্লিপেটটি জাভা ৮ ল্যাম্বডা (Lambda Expression) ব্যবহার করে থ্রেড তৈরির সঠিক পদ্ধতি?",
        options: [
          { label: "Thread t = new Thread( () -> System.out.println('Run') ); t.start();", isCorrect: true },
          { label: "Thread t = new Thread( run() -> System.out.println('Run') );", isCorrect: false },
          { label: "Thread t = Lambda.start( () -> print() );", isCorrect: false },
          { label: "Runnable r = () -> { void run() { System.out.println('Run'); } };", isCorrect: false }
        ],
        explanation: "Runnable যেহেতু একটি ফাংশনাল ইন্টারফেস, তাই এর একমাত্র মেথড run()-এর সিগনেচার '() -> { ... }' দ্বারা সরাসরি রিপ্রেজেন্ট করে ক্লিন ল্যাম্বডা থ্রেড রান করা যায়।"
      }
    ],
    reviewQuestions: [
      "Compare the process of executing a single task with multiple threads versus multiple tasks with separate sibling threads.",
      "Write a complete Java program using Anonymous classes implementing the Runnable interface.",
      "Contrast Anonymous Inner Classes versus Modern Lambda Expressions in Java thread engineering."
    ]
  }
];
