import { Lesson } from './lessons';

export const section5Lessons: Lesson[] = [
  {
    id: "s5-overview",
    title: "Section Overview",
    description: "Overview of Section V: Abstraction, Abstract Classes, and Interfaces Hierarchy",
    content: `
# 📙 Section V: Abstraction, Abstract Classes & Interfaces

Welcome to **Section V: Abstraction**. This section covers how Java forces design contracts upon classes. In Java Object-Oriented Programming, Abstraction is the key to creating loosely coupled, robust systems by separating **what an object does** from **how it does it**.

---

### 📋 Section V Course Syllabus Checklist
Below is a checklist showing how every topic in the official section syllabus on Abstraction is mapped to our masterclass lessons:

- [x] **Core Concept of Abstraction** ➜ Covered in *Lesson 23: Abstraction & Abstract Classes*
- [x] **Abstract Class with Abstract Keyword** ➜ Covered in *Lesson 23: Abstraction & Abstract Classes*
- [x] **Abstract vs. Non-abstract Methods Rules** ➜ Covered in *Lesson 23: Abstraction & Abstract Classes*
- [x] **Instantiation Barriers (Cannot Instantiate)** ➜ Covered in *Lesson 23: Abstraction & Abstract Classes*
- [x] **Constructors, Static, and Final Methods in Abstract Classes** ➜ Covered in *Lesson 23: Abstraction & Abstract Classes*
- [x] **Real-world Shape & Factory Method Scenarios** ➜ Covered in *Lesson 24: Practical Shapes & Bank ROI Analyzing*
- [x] **Dynamic Interest-Rate Analyst Execution (Bank-SBI-PNB)** ➜ Covered in *Lesson 24: Practical Shapes & Bank ROI Analyzing*
- [x] **Interface Concept as 100% Pure Abstract Blueprint** ➜ Covered in *Lesson 25: Interfaces & Compiler Modifications*
- [x] **Compiler Auto-Transformations (public static final & public abstract)** ➜ Covered in *Lesson 25: Interfaces & Compiler Modifications*
- [x] **Class-Interface Relationship Diagram (extends vs. implements)** ➜ Covered in *Lesson 25: Interfaces & Compiler Modifications*
- [x] **Verbatim printable-A6 and Drawable-TestInterface Examples** ➜ Covered in *Lesson 25: Interfaces & Compiler Modifications*
- [x] **Multiple Inheritance Support in Interfaces & Class Diamon Ambiguity** ➜ Covered in *Lesson 26: Multiple Inheritance & Diamond Ambiguity*
- [x] **Ambiguity Resolution Case Study (TestInterface3)** ➜ Covered in *Lesson 26: Multiple Inheritance & Diamond Ambiguity*
- [x] **Interface inheritance using extends Keyword** ➜ Covered in *Lesson 27: Interface Inheritance & Comparison Matrix*
- [x] **Comprehensive Academic Compare Matrix (Abstract Class vs. Interface)** ➜ Covered in *Lesson 27: Interface Inheritance & Comparison Matrix*

---

### 🗺️ Masterclass Lesson Navigation
Each lesson has been architected to provide a masterclass learning experience, containing complete verbatim notes and diagrams from official slides, blended with beginner-friendly guides, full annotated code examples, and practice checkpoints.

1. **Lesson 23: Abstraction & Abstract Classes**
   * Detailed breakdown of the concept of abstraction and how abstract classes serve as partial blueprints (0-100% abstraction).
2. **Lesson 24: Practical Shapes & Bank ROI Analyzing**
   * Executable shape and bank modules representing realistic polymorphism and decoupling with factory patterns.
3. **Lesson 25: Interfaces & Compiler Modifications**
   * Discovering pure blueprints (100% pure abstractions), compiler auto-transpositions, and the rules of the \`implements\` keyword.
4. **Lesson 26: Multiple Inheritance & Diamond Ambiguity**
   * Logical dissection of why multiple inheritance is prohibited in Java classes because of state inheritance, but perfectly solved by interfaces.
5. **Lesson 27: Interface Inheritance & Comparison Matrix**
   * Learning interface chain developments using the extends keyword, plus the ultimate 10-point academic matrix comparing abstract classes and interfaces.
`,
    cards: [
      {
        icon: "🧩",
        title: "Abstraction",
        desc: "Hiding complexity to focus strictly on functionality and contract definitions."
      },
      {
        icon: "🏗️",
        title: "Abstract Classes",
        desc: "Partial blueprints supporting both abstract specifications and concrete implementations."
      },
      {
        icon: "📋",
        title: "Interfaces",
        desc: "Pure API blueprints enforcing 100% abstract standards with zero implementation state."
      },
      {
        icon: "💎",
        title: "Diamond Ambiguity",
        desc: "How interfaces completely side-step method conflict errors that crash class inheritance."
      }
    ]
  },
  {
    id: "abstract-classes-basics",
    title: "Lesson 23: Abstraction & Abstract Classes",
    description: "Learn the core fundamentals of Java abstraction, the 'abstract' keyword, instantiation barriers, and compilation rules.",
    cards: [
      {
        icon: "🔒",
        title: "abstract Keyword",
        desc: "Applied to classes to inhibit direct instantiation, and to methods to omit code body."
      },
      {
        icon: "🚫",
        title: "No Instantiation",
        desc: "Attempting to run 'new MyAbstractClass()' triggers a fatal compiler error."
      },
      {
        icon: "⚙️",
        title: "Hybrid Methods",
        desc: "Can securely preserve concrete helper methods alongside unwritten abstract contracts."
      },
      {
        icon: "🏗️",
        title: "Constructor Rules",
        desc: "Abstract classes CAN have constructors, executed upon subclass instantiation."
      }
    ],
    content: `
# 📦 Lesson 23: Abstraction & Abstract Classes

## 🔍 1. What is Abstraction in Java?
**Abstraction** is the process of hiding implementation details from the user and showing only essential functionality. By establishing abstraction, the consumer focuses on **what the object does** instead of **how it does it**.

### 📲 A Real-world Analogy (SMS Sending System)
When you send an SMS to a friend:
1. You type the text Message.
2. You click the Send button.
3. The message is instantly dispatched and delivered.
*What is hidden from you?* The complex network handshakes, GSM routing, tower frequency allocations, cellular encryption protocols, and remote SMS gateway processes. You only know and interact with the simple \`send()\` interface!

---

## 🏛️ 2. Two Ways to Achieve Abstraction in Java
Java provides two distinct structures to introduce abstraction:

| Dimension | Abstract Class | Interface |
| :--- | :--- | :--- |
| **Abstraction Level** | **0% to 100%** (Hybrid Blueprint) | **100%** (Pure Blueprint) |
| **Methods Allowed** | Can have both abstract and concrete methods. | Can only have abstract methods (and default/static in modern Java). |
| **State Fields** | Can have instance variables, fields, constants. | Variables are strictly \`public static final\` constants. |

---

## 🧱 3. Abstract Class in Java
A class declared with the **abstract** keyword is known as an abstract class. It needs to be extended by a subclass, which provides concrete implementations for its missing behaviors.

### 📌 Critical Rules of Abstract Classes (Points to Remember)
1. **Must be declared** with the \`abstract\` keyword.
2. **No direct Instantiation**: Correct, you cannot instantiate it with the \`new\` keyword (e.g., \`new Bike()\` is a compiler crash!).
3. **Hybrid Methods**: It can contain abstract methods (methods without a body) as well as non-abstract (concrete) methods with a full body code block.
4. **Constructors**: It can have constructors, block operations, and static methods securely.
5. **Final Methods**: It can contain \`final\` methods, which prohibits the extending subclasses from altering those critical behavioral pathways.

---

## 🚀 4. Verbatim Bike & Honda Blueprint Simulation
Let's study the slide's classic abstract implementation. We declare an abstract parent class \`Bike\` with an abstract method \`run()\`. A concrete subclass \`Honda\` extends \`Bike\` to provide its implementation details.

\`\`\`
                 ┌───────────────────────────┐
                 │        «abstract»         │
                 │           Bike            │
                 ├───────────────────────────┤
                 │ + abstract run(): void    │
                 └───────────────────────────┘
                               ▲
                               │ extends
                 ┌───────────────────────────┐
                 │           Honda           │
                 ├───────────────────────────┤
                 │ + run(): void             │
                 └───────────────────────────┘
\`\`\`

### Verbatim Executable Code:
\`\`\`java
abstract class Bike { 
    // No implementation body, declared with a semicolon
    abstract void run(); 
} 

class Honda extends Bike { 
    // Implementing the inherited contract
    void run() {
        System.out.println("running safely");
    } 
    
    public static void main(String args[]) { 
        // Cannot write: Bike b = new Bike(); (Compile-time Error)
        // We write: Upcasting pointing parent variable to child instance
        Bike obj = new Honda(); 
        obj.run(); 
    } 
}
\`\`\`

### 💡 Execution Mechanics:
* **Instantiation Crash**: The line \`Bike obj = new Bike();\` triggers \`Bike is abstract; cannot be instantiated\` compile-time error. Why? Because the JVM cannot construct an object whose methods have no runtime instructions to execute.
* **Upcasting**: We safely use a polymorphic assignment: \`Bike obj = new Honda();\`. The variable \`obj\` is type \`Bike\` (compile-time type), but it points to a dynamic heap instance of \`Honda\` (runtime type). At runtime, virtual method dispatch pulls \`Honda\`'s concrete \`run()\` method.
`,
    quizzes: [
      {
        question: "একটি abstract class-এর অবজেক্ট সরাসরি তৈরি করা সম্ভব কি?",
        options: [
          { label: "হ্যাঁ, 'new' কিওয়ার্ড সরাসরি ব্যবহার করে অবজেক্ট বানানো যায়", isCorrect: false },
          { label: "না, abstract class-কে সরাসরি instantiate বা অবজেক্ট বানানো যায় না", isCorrect: true },
          { label: "শুধুমাত্র main() মেথডের ভেতরে সম্ভব", isCorrect: false },
          { label: "শুধুমাত্র static ব্র্যাকেটের ভেতর সম্ভব", isCorrect: false }
        ],
        explanation: "অ্যাবস্ট্র্যাক্ট ক্লাসের কোনো ইনস্ট্যান্স সরাসরি 'new' দিয়ে তৈরি করা যায় না। এটিকে চাইল্ড ক্লাস দিয়ে এক্সটেন্ড করে চাইল্ড ক্লাসের অবজেক্ট তৈরি করা যায়।"
      },
      {
        question: "Abstract Class কত পার্সেন্ট ( % ) অ্যাবস্ট্রাকশন সাপোর্ট করতে পারে?",
        options: [
          { label: "সর্বদা অবধারিতভাবে ১০০%", isCorrect: false },
          { label: "০% থেকে ১০০% পর্যন্ত যেকোনো লেভেল", isCorrect: true },
          { label: "শুধুমাত্র ৫০% স্থির পরিমাণ", isCorrect: false },
          { label: "০% ছাড়া অন্য কিছু সম্ভব নয়", isCorrect: false }
        ],
        explanation: "অ্যাবস্ট্র্যাক্ট ক্লাসে সম্পূর্ণ বডিহীন অ্যাবস্ট্র্যাক্ট মেথড যেমন থাকতে পারে, তেমনি সম্পূর্ণ বডি ওয়ালা কনক্রিট মেথডও থাকতে পারে। তাই এটি ০% থেকে ১০০% যেকোনো লেভেলের অ্যাবস্ট্রাকশন দিতে পারে।"
      }
    ],
    reviewQuestions: [
      "Define Abstraction. Illustrate with a clean real-world SMS analogy.",
      "List the 5 primary constraints and rules regarding Java abstract class definitions.",
      "Explain compile-time upcasting and how JVM dispatches concrete methods on polymorphic assignments."
    ]
  },
  {
    id: "abstract-classes-patterns",
    title: "Lesson 24: Practical Shapes & Bank ROI Analyzing",
    description: "Build robust polymorphic systems using abstract Shape class draw protocols and the Bank Rate-of-Interest (ROI) dynamic systems.",
    cards: [
      {
        icon: "🎨",
        title: "Shape System",
        desc: "A generic parent template setting design specifications for rectangles and circles."
      },
      {
        icon: "🏦",
        title: "Bank Analyst",
        desc: "Polymorphically evaluating ROI across distinct financial institutes like SBI and PNB."
      },
      {
        icon: "🏭",
        title: "Factory Pattern",
        desc: "Hiding instantiations from the consumer to ensure secure clean loose coupling."
      }
    ],
    content: `
# 📦 Lesson 24: Shape Blueprints & Bank Interest Rates

## 🔍 1. Real-world Shape Drawing Scenario
Consider a painting app where we draw shapes (Circle, Rectangle, Triangle). Each shape draws differently, but they all share the concept of \`draw()\`. Mostly, we don't know about the implementation class (which is hidden to the end-user). Objects are dynamically returned via factory methods, hiding initiation details.

Let's study the verbatim hierarchy from Slide Page 6:

### Verbatim Executable Code (TestAbstraction1.java):
\`\`\`java
abstract class Shape { 
    abstract void draw(); 
} 

// First implementation provider
class Rectangle extends Shape { 
    void draw() {
        System.out.println("drawing rectangle");
    } 
} 

// Second implementation provider
class Circle1 extends Shape { 
    void draw() {
        System.out.println("drawing circle");
    } 
} 

// In a real scenario, method is called by programmer or system factory
class TestAbstraction1 { 
    public static void main(String args[]) { 
        // Dynamic assignment: Object is provided through client-level methods
        Shape s = new Circle1(); 
        s.draw(); 
    } 
}
\`\`\`

### 💡 Behavioral Analysis & Trace:
1. We declare a general polymorphic container variable \`Shape s\`.
2. We assign a new child class instance: \`new Circle1()\`.
3. When \`s.draw()\` is called, the compiler only checks if the method exists in class \`Shape\`. It passes!
4. At runtime, the JVM looks up the actual object on the heap (which is \`Circle1\`) and executes its overriding \`draw()\` method.
5. **Output**: \`drawing circle\`

---

## 🏦 2. Financial System Audit: Bank Interest Rates
Let's see the classic Slide Page 8 example. We establish a financial base abstraction class \`Bank\` which exposes an abstract integer method \`getRateOfInterest()\`. Diverse commercial subsidiaries (SBI, PNB) override this to return their customized interest yields.

\`\`\`
                       ┌─────────────────────────┐
                       │       «abstract»        │
                       │          Bank           │
                       ├─────────────────────────┤
                       │  + getRateOfInterest()  │
                       └─────────────────────────┘
                                    ▲
                         ┌──────────┴──────────┐
                         │                     │
            ┌────────────────────────┐    ┌────────────────────────┐
            │          SBI           │    │          PNB           │
            ├────────────────────────┤    ├────────────────────────┤
            │  + getRateOfInterest() │    │  + getRateOfInterest() │
            │    { return 7; }       │    │    { return 8; }       │
            └────────────────────────┘    └────────────────────────┘
\`\`\`

### Verbatim Executable Code (TestBank.java):
\`\`\`java
abstract class Bank { 
    abstract int getRateOfInterest(); 
} 

class SBI extends Bank { 
    int getRateOfInterest() {
        return 7;
    } 
} 

class PNB extends Bank { 
    int getRateOfInterest() {
        return 8;
    } 
} 
 
class TestBank { 
    public static void main(String args[]) { 
        Bank b; 
        
        // Polymorphic reference assignment 1
        b = new SBI(); 
        System.out.println("Rate of Interest is: " + b.getRateOfInterest() + " %"); 
        
        // Polymorphic reference assignment 2
        b = new PNB(); 
        System.out.println("Rate of Interest is: " + b.getRateOfInterest() + " %"); 
    }
}
\`\`\`

### *Expected Terminal Output*:
\`\`\`
Rate of Interest is: 7 %
Rate of Interest is: 8 %
\`\`\`

---

## 🏗️ 3. Critical Rule: Abstract Constructors & Methods
It is frequently asked in university examinations: *Can an abstract class have constructors, static methods, or final methods?*
**YES!**
Let's examine why:
* **Constructors**: An abstract class constructor is executed when you instantiate a concrete child class (via \`super()\` chaining). High-level variables declared in the abstract class are securely initialized there.
* **Static Methods**: Static methods can be invoked directly on the abstract class name without constructing any objects! You can cleanly write \`MyAbstractClass.myStaticMethod();\`.
* **Final Methods**: If you declare \`final void securityGuard() { ... }\` in an abstract parent, extending classes will inherit this method but are strictly blocked from writing an override. This guarantees critical logic remains uncorrupted across inheritance structures.
`,
    quizzes: [
      {
        question: "নিচের কোন কোড স্লিপেটটি কম্পাইল সাকসেসফুল হবে?",
        options: [
          { label: "abstract class Test { abstract void display() {} }", isCorrect: false },
          { label: "abstract class Test { abstract void display(); }", isCorrect: true },
          { label: "class Test { abstract void display(); }", isCorrect: false },
          { label: "abstract class Test { void display(); }", isCorrect: false }
        ],
        explanation: "অ্যাবস্ট্র্যাক্ট মেথডের কোনো বডি '{}' থাকতে পারবে না এবং মেথডটির শেষে সেমিকোলন ';' দিতে হবে। তাছাড়া অ্যাবস্ট্র্যাক্ট মেথড থাকলে ক্লাসটিকেও অবশ্যই abstract ঘোষণা করতে হবে।"
      },
      {
        question: "TestBank উদাহরণে, b.getRateOfInterest() এর মান কীভাবে পরিবর্তিত হচ্ছে?",
        options: [
          { label: "এটি কম্পাইল টাইমে স্ট্যাটিকভাবে ফিক্স হয়ে যাচ্ছে", isCorrect: false },
          { label: "b ভেরিয়েবলটি রানটাইমে যে অবজেক্টকে পয়েন্ট করছে (SBI নাকি PNB) তা দেখে dynamic dispatch হচ্ছে", isCorrect: true },
          { label: "Bank ক্লাসের ডিফল্ট মান ৮ প্রিন্ট হচ্ছে", isCorrect: false },
          { label: "শুধুমাত্র SBI এর ডাটা প্রিন্ট হচ্ছে কারণ সেটি সবার উপরে আছে", isCorrect: false }
        ],
        explanation: "এখানে Runtime Polymorphism ঘটে। কম্পাইল টাইমে মেথডটি Bank এর হলেও রানটাইমে বডি খোঁজা হয় dynamic binding এর মাধ্যমে dynamic heap references ব্যবহার করে।"
      }
    ],
    reviewQuestions: [
      "Why is Shape declared as abstract in TestAbstraction1.java? What problem would occur if it was a normal class?",
      "Design a Bank system where Axis bank gives a 9% interest rate alongside SBI and PNB.",
      "Explain the compile-time checks and runtime lookup sequence during Method Dispatch."
    ]
  },
  {
    id: "interfaces-basics",
    title: "Lesson 25: Interfaces & Compiler Modifications",
    description: "Discover Java Interfaces, their 100% pure abstract nature, compiler auto-transpositions, and multi-implementations.",
    cards: [
      {
        icon: "📝",
        title: "Pure Blueprint",
        desc: "An interface contains exclusively unimplemented abstract method signatures."
      },
      {
        icon: "🪄",
        title: "Compiler Prepends",
        desc: "Automatically adds public, static, dynamic modifiers before methods and variables."
      },
      {
        icon: "🔗",
        title: "implements Rule",
        desc: "Classes implement templates via the implements keyword, providing full body overrides."
      },
      {
        icon: "🤝",
        title: "Loose Coupling",
        desc: "Enables secure structural mock layers, separating interfaces from business logic."
      }
    ],
    content: `
# 📦 Lesson 25: Interfaces & Compiler Transformations

## 🔍 1. What is an Interface in Java?
An **Interface** in Java is a behavioral blueprint of a class. It represents a strict API specification containing static constants and abstract methods. 

Unlike classes which can store local heap instance variables, an interface is purely a design interface that specifies **what a class MUST do**, but has zero concern with **how** the class fulfills that task.

---

## 🏛️ 2. Why use Java Interfaces?
Academics emphasize three major reasons why interfaces are indispensable:
1. **Total Abstraction**: By constraint, it guarantees 100% pure abstraction. No concrete method bodies can exist to dilute the contract.
2. **Multiple Inheritance**: Java classes cannot extend more than one parent class. Interfaces bypass this completely, allowing a single class to implement multiple interfaces simultaneously!
3. **Loose Coupling**: Subsystems talk exclusively to interfaces. We can easily swap out implementation providers without altering the calling client classes.

---

## 🛠️ 3. How to Declare an Interface
An interface is declared using the **interface** keyword:

\`\`\`java
interface InterfaceName {
    // Declare constant fields
    int MIN_VALUE = 5; 
    
    // Declare abstract method signatures (no body)
    void show(); 
}
\`\`\`

---

## 🪄 4. Internal Additions by the Java Compiler
A crucial question in technical interviews and academic tests is: *What modifications does the Java compiler apply to interface code during compile-time?*

The Java compiler automatically completes class definitions behind the scenes:
1. **Fields/Variables**: It prepends **public static final** to all declared member variables.
2. **Methods**: It prepends **public abstract** to all declared method signatures.

Let's study the beautiful classic slide diagram illustrating this transformation:

\`\`\`
  ┌─────────────────────────────────┐               ┌─────────────────────────────────┐
  │         Source File:            │               │         Class File:             │
  │          Printable.java         │   compiler    │          Printable.class        │
  ├─────────────────────────────────┤  ──────────►  ├─────────────────────────────────┤
  │ interface Printable {           │               │ interface Printable {           │
  │     int MIN = 5;                │               │     public static final MIN=5;  │
  │     void print();               │               │     public abstract void print; │
  │ }                               │               │ }                               │
  └─────────────────────────────────┘               └─────────────────────────────────┘
\`\`\`

---

## 🧬 5. Relationship Structures (extends vs. implements)
A class can inherit from another class, but classes and interfaces have unique rules:
* A class **extends** another class.
* A class **implements** an interface.
* An interface **extends** another interface.

\`\`\`
   ┌─────────────┐             ┌─────────────┐             ┌─────────────┐
   │    class    │             │  interface  │             │  interface  │
   └─────────────┘             └─────────────┘             └─────────────┘
          ▲                           ▲                           ▲
          │ extends                   │ implements                │ extends
   ┌─────────────┐             ┌─────────────┐             ┌─────────────┐
   │    class    │             │    class    │             │  interface  │
   └─────────────┘             └─────────────┘             └─────────────┘
\`\`\`

---

## 🚀 6. Verbatim printable and A6 Implementation Study
Let's trace the implementation of our very first slide-verbatim interface example:

### Verbatim Executable Code (A6.java)
\`\`\`java
interface printable {
    void print();
}

class A6 implements printable {
    // Explicit public modifier required!
    public void print() {
        System.out.println("Hello");
    }
    
    public static void main(String args[]) {
        A6 obj = new A6();
        obj.print();
    }
}
\`\`\`
- **Expected Output**: \`Hello\`

⚠️ **CRITICAL TRAP ALERT**: When overriding methods from an interface, you must explicitly declare them as **public**! Why? Because interface methods are dynamically converted to \`public\` by the compiler. In Java, overrides can never assign more restrictive access parameters than parent declarations. Omitting \`public\` triggers a compile-time crash: \`Cannot reduce the visibility of the inherited method\`.

---

## 🚀 7. Verbatim Drawable & Dynamic Subclass Providers
Let's see another slide-verbatim polymorphic drawing system:

### Verbatim Executable Code (TestInterface1.java)
\`\`\`java
interface Drawable { 
    void draw(); 
} 

// First implementation provider
class Rectangle implements Drawable { 
    public void draw() {
        System.out.println("drawing rectangle");
    } 
} 

// Second implementation provider
class Circle implements Drawable { 
    public void draw() {
        System.out.println("drawing circle");
    } 
} 

// Dynamic interface execution call
class TestInterface1 { 
    public static void main(String args[]) { 
        Drawable d = new Circle(); 
        d.draw(); 
    } 
}
\`\`\`
- **Expected Output**: \`drawing circle\`
`,
    quizzes: [
      {
        question: "Interface-এ ডিক্লেয়ার করা ভেরিয়েবলে কম্পাইলার স্বয়ংক্রিয়ভাবে কী কী কিওয়ার্ড যুক্ত করে?",
        options: [
          { label: "private static volatile", isCorrect: false },
          { label: "protected final transient", isCorrect: false },
          { label: "public static final", isCorrect: true },
          { label: "কোনো কিওয়ার্ড যুক্ত করে না, এটি সাধারণ ভেরিয়েবল হিসেবেই থাকে", isCorrect: false }
        ],
        explanation: "জাভা ইন্টারফেসের সকল ভেরিয়েবল বা মেম্বার ডিফল্টভাবেই কনস্ট্যান্ট বা অপরিবর্তনীয় এবং সরাসরি গ্লোবাল স্কোপ থেকে কলযোগ্য। তাই কম্পাইলার স্বয়ংক্রিয়ভাবে 'public static final' জোড়া দিয়ে দেয়।"
      },
      {
        question: "ইন্টারফেসের মেথড ইমপ্লিমেন্ট করার সময় চাইল্ড ক্লাসের মেথড সিগনেচারে 'public' কিওয়ার্ড বাদ দিলে কী ঘটবে?",
        options: [
          { label: "কোডটি নির্বিঘ্নে কম্পাইল ও রান হবে", isCorrect: false },
          { label: "মেথডটি প্রাইভেট হয়ে যাবে", isCorrect: false },
          { label: "কম্পাইল-টাইম ইরর ঘটবে (Cannot reduce visibility)", isCorrect: true },
          { label: "রানিং আউটপুট উল্টো প্রিন্ট হবে", isCorrect: false }
        ],
        explanation: "জাভায় কোনো ওভাররাইড মেথডের ভিজিবিলিটি বা অ্যাক্সেস রেঞ্জ পেরেন্ট ডিক্লেয়ারেশনের চেয়ে কমানো যায় না। যেহেতু ইন্টারফেসের মেথড ডিফল্টভাবেই 'public abstract', তাই চাইল্ড ক্লাসে ইমপ্লিমেন্ট করার সময় মেথডের শুরুতে অবশ্যই 'public' লিখতে হবে।"
      }
    ],
    reviewQuestions: [
      "Why is Java Interface considered a 100% pure abstraction mechanism?",
      "Draw the compile-time auto modifications that happen behind the scenes for variables and methods of an interface.",
      "Compare extends vs implements keywords. Write out the valid combinations of relationships between interface and class."
    ]
  },
  {
    id: "multiple-inheritance-interfaces",
    title: "Lesson 26: Multiple Inheritance & Diamond Ambiguity",
    description: "Analyze the Diamond Ambiguity crash in class-based multiple inheritance, and master how Java interfaces securely bypass and solve this problem.",
    cards: [
      {
        icon: "💎",
        title: "Diamond Problem",
        desc: "Ambiguity crash when sibling parent classes write conflict concrete method bodies."
      },
      {
        icon: "🔄",
        title: "Interface Bypass",
        desc: "Since interfaces contain no concrete implementation logic, duplicate contracts unify seamlessly."
      },
      {
        icon: "📋",
        title: "comma-Separated",
        desc: "Classes use comma syntax to implement multiple interfaces simultaneously."
      }
    ],
    content: `
# 📦 Lesson 26: Multiple Inheritance & Diamond Ambiguity

## 🔍 1. The Proscribed Matrix: Class Multiple Inheritance
In Java, a class cannot inherit (extends) from more than one class. Let's trace why this restriction is mathematically necessary to prevent the **Diamond Problem** (Method Resolution Ambiguity).

### 💥 Sibling Conflict Code Simulation (Theoretical Crash)
Assume Java hypothetically allowed multiple class inheritance:

\`\`\`java
// Hypothetical Illegal Java Code!
class Printable {
    void print() { System.out.println("Printing..."); }
}

class Showable {
    void print() { System.out.println("Showing..."); }
}

// If this compiled:
class A extends Printable, Showable {
    public static void main(String args[]) {
        A obj = new A();
        obj.print(); // CRASH! Ambiguity! Which parent print() method runs?
    }
}
\`\`\`
**The Ambiguity Crash**: If child class \`A\` invokes \`print()\`, the JVM has no logical rule to choose between \`Printable\`'s implementation and \`Showable\`'s implementation. This ambiguity is known as the **Diamond Problem**.

---

## 🏛️ 2. How Interfaces Bypass the Diamond Problem
Interfaces bypass the Diamond Problem completely. Why? Because interfaces contain **no runtime method bodies**. 

If class \`A\` implements both \`Printable\` and \`Showable\` which share the *exact same method signature*, the child class is forced to write a single, unified method override. Thus, at runtime, there is only ONE concrete method body in existence! Ambiguity successfully resolved.

---

## 🚀 3. Verbatim Dual-Interface printable and Showable
Let's see the classic Slide Page 9 multiple inheritance solution in Java:

### Verbatim Executable Code (A7.java)
\`\`\`java
interface Printable { 
    void print(); 
} 

interface Showable { 
    void show(); 
} 

// Concrete class implementing both interfaces
class A7 implements Printable, Showable { 
    public void print() {
        System.out.println("Hello");
    } 
    
    public void show() {
        System.out.println("Welcome");
    } 
    
    public static void main(String args[]) { 
        A7 obj = new A7(); 
        obj.print(); 
        obj.show(); 
    } 
}
\`\`\`

### *Expected Terminal Output*:
\`\`\`
Hello
Welcome
\`\`\`

---

## 🚀 4. Interface Ambiguity Sandbox Case Study: Same Signatures
Let's analyze the exact question raised on Slide Page 10: *What happens if two implemented interfaces contain the exact same method signature?* Let's inspect this code verbatim:

### Verbatim Executable Code (TestInterface3.java)
\`\`\`java
interface Printable { 
    void print(); 
} 

interface Showable { 
    void print(); // Identical signature!
} 

class TestInterface3 implements Printable, Showable { 
    // Single override satisfies both interfaces!
    public void print() {
        System.out.println("Hello");
    } 
    
    public static void main(String args[]) { 
        TestInterface3 obj = new TestInterface3(); 
        obj.print(); 
    } 
}
\`\`\`
- **Expected Output**: \`Hello\`

### 💡 Architectural Explanation:
As Printable and Showable have the same method signature, the compiler simply treat them as a single, unified contract demand. The concrete class \`TestInterface3\` writes one \`print()\` block, resolving all implementation constraints with zero compile-time ambiguity!
`,
    quizzes: [
      {
        question: "জাভায় ক্লাস-ভিত্তিক Multiple Inheritance নিষিদ্ধ কেন?",
        options: [
          { label: "কারণ এটি অতিরিক্ত মেমরি অপচয় করে", isCorrect: false },
          { label: "Diamond Problem বা মেথড রেজোলিউশন অ্যাম্বিগুইটি এড়াতে", isCorrect: true },
          { label: "জাভা ডেভেলপ করতে কোডিং বেশি করতে হয় তাই", isCorrect: false },
          { label: "এটি সিকিউরিটির জন্য হুমকি স্বরুপ", isCorrect: false }
        ],
        explanation: "যদি দুটি পেরেন্ট ক্লাসে একই নামের মেথড থাকে এবং একটি চাইল্ড ক্লাস দুটিকেই extends করে, তবে চাইল্ড ক্লাসের অবজেক্ট থেকে সেই মেথড কল করলে কোন পেরেন্টের মেথডটি রান হবে তা নিয়ে কম্পাইলার দ্বিধায় পড়ে যায় (Ambiguity)। ওওপিতে একে Diamond Problem বলে।"
      },
      {
        question: "যদি Printable এবং Showable নামক দুটি ইন্টারফেসে হুবহু একই নামের ও সিগনেচারের 'print()' মেথড থাকে, তবে চাইল্ড ক্লাসে কয়টি বডি লিখতে হবে?",
        options: [
          { label: "প্রতিটির জন্য আলাদা করে দুটি বডি লিখতে হবে", isCorrect: false },
          { label: "একটিমাত্র সাধারণ 'print()' বডি লিখলেই উভয় ইন্টারফেসের মেথড ইমপ্লিমেন্ট হয়ে যাবে", isCorrect: true },
          { label: "কম্পাইল ইরর এড়াতে মেথডগুলোর নাম পরিবর্তন করতেই হবে", isCorrect: false },
          { label: "ইন্টারফেসে ডুপ্লিকেট মেথড থাকলে কোড কম্পাইলই হবে না", isCorrect: false }
        ],
        explanation: "যেহেতু ইন্টারফেসের কোনো মেথড বডি থাকে না, তাই দুটি ইন্টারফেসে হুবহু একই নামের মেথড থাকলেও চাইল্ড ক্লাসে একটিমাত্র ওভাররাইড মেথড লিেখ দিলেই কাজ হয়ে যায়, কোনো অ্যাম্বিগুইটি ছাড়াই কোড রান করবে।"
      }
    ],
    reviewQuestions: [
      "Explain the 'Diamond Problem' with a visual diagram showing sibling parent concrete inheritance clashes.",
      "Why do Java Interfaces completely eliminate concrete Diamond Ambiguities?",
      "Write a complete, compiled class implementing interface 'Traveler' and 'Citizen' where both demand 'void getIdentity();'."
    ]
  },
  {
    id: "interface-inheritance-matrix",
    title: "Lesson 27: Interface Inheritance & Comparison Matrix",
    description: "Explore interface extension using the 'extends' keyword, and master the academic comparison matrix for semester-end examinations.",
    cards: [
      {
        icon: "📈",
        title: "Interface extend",
        desc: "An interface inherits contracts from other interfaces by using the extends keyword."
      },
      {
        icon: "⚖️",
        title: "Core Comparison",
        desc: "The definitive differences between abstract classes and interfaces regarding fields, speed, and inheritance."
      },
      {
        icon: "🎓",
        title: "Academic Focus",
        desc: "Master key definitions and matrices highly targeted in semester-end exams."
      }
    ],
    content: `
# 📦 Lesson 27: Interface Inheritance & Comparison Matrix

## 🔍 1. Interface Inheritance (extends keyword)
Just as a class can extend another class, an **interface can extend another interface**! This is done using the standard **extends** keyword. 

Any concrete class implementing the child interface is bound by code contract to implement all behaviors declared across the entire inheritance chain!

### Verbatim Executable Code (TestInterface4.java):
\`\`\`java
interface Printable { 
    void print(); 
} 

// Showable inherits the contract of Printable
interface Showable extends Printable { 
    void show(); 
} 

class TestInterface4 implements Showable { 
    // Satisfying Printable contract
    public void print() {
        System.out.println("Hello");
    } 
    
    // Satisfying Showable contract
    public void show() {
        System.out.println("Welcome");
    } 
    
    public static void main(String args[]) { 
        TestInterface4 obj = new TestInterface4(); 
        obj.print(); 
        obj.show(); 
    } 
}
\`\`\`

### *Expected Terminal Output*:
\`\`\`
Hello
Welcome
\`\`\`

---

## 🏛️ 2. The Definitive Core Comparison Matrix
For your semester exams, memorize this high-contrast master difference matrix comparing Abstract Classes versus Interfaces.

| Dimension / Aspect | Abstract Class | Interface |
| :--- | :--- | :--- |
| **Primary Keyword** | Declared using the \`abstract\` keyword. | Declared using the \`interface\` keyword. |
| **Abstraction Level** | Supports partial (0% to 100%) abstraction. | Supports absolute (100%) pure abstraction. |
| **Variables / State** | Can have final, non-final, static, and transient variables. | Variables are strictly \`public static final\` constants. |
| **Methods Allowed** | Can contain abstract, non-abstract, final, or static methods. | Can only contain abstract methods (with modern exception of default/static). |
| **Multiple Inheritance** | Classes can only extend (\`extends\`) one abstract class. | A class can implement (\`implements\`) multiple interfaces. |
| **Constructor** | Can have constructor methods declared securely. | Cannot contain any constructor methods. |
| **Execution Performance** | Faster execution speed (direct method lookup). | Slightly slower due to dynamic lookup indirection. |
| **Main Method** | Can contain a \`public static void main\` method. | Absolute no main method execution allowed. |

---

## 🎓 3. Homework Challenge: Exam Prep
**Problem Statement**: Write a Java system establishing an abstract class \`Vehicle\` with a static count variable, concrete constructor, and abstract \`steer()\` protocol. Then, establish a \`FuelEngine\` interface declaring final \`OCTANE = 95;\`. Finally, write a subclass \`Truck\` that extends \`Vehicle\` and implements \`FuelEngine\` with compile-clean main tests.

*Let's sketch a solution inside our interactive IDE Playground above! Feel free to modify, test, and run the sandbox dynamically to confirm your understanding.*
`,
    quizzes: [
      {
        question: "একটি ইন্টারফেস আরেকটি ইন্টারফেসকে নিজের সাথে যুক্ত করার জন্য কোন কিওয়ার্ড ব্যবহার করবে?",
        options: [
          { label: "implements", isCorrect: false },
          { label: "extends", isCorrect: true },
          { label: "exports", isCorrect: false },
          { label: "super", isCorrect: false }
        ],
        explanation: "জাভায় ক্লাস ইন্টারফেসকে ইমপ্লিমেন্ট করার সময় 'implements' ব্যবহার হলেও, একটি ইন্টারফেস আরেকটি ইন্টারফেসকে ইনহেরিট করার সময় ক্লাস-লিংকের মতোই 'extends' কিওয়ার্ডটি ব্যবহার করতে হয়।"
      },
      {
        question: "নিচের কোনটি কেবল Abstract Class-এ সম্ভব কিন্তু Interface-এ সম্পূর্ণ নিষিদ্ধ?",
        options: [
          { label: "মেথড ওভাররাইড করা", isCorrect: false },
          { label: "কনস্ট্যান্ট ভেরিয়েবল ঘোষণা করা", isCorrect: false },
          { label: "Constructor বা কনস্ট্রাক্টর ডিক্লেয়ার করা", isCorrect: true },
          { label: "Static মেথড ডিক্লেয়ার করা", isCorrect: false }
        ],
        explanation: "ইন্টারফেস কখনোই কোনো মেমরি ইনস্ট্যান্স বডি বা হিপ প্যারামিটার ধারণ করে না, তাই ইন্টারফেসে কোনো কনস্ট্রাক্টর বা 'Constructor' ডিক্লেয়ার করা সম্পূর্ণভাবে নিষিদ্ধ।"
      }
    ],
    reviewQuestions: [
      "Compare Abstract Class and Interface on 6 key academic dimensions.",
      "Explain the exact code demands placed upon class TestInterface4 due to inheritance chaining.",
      "Summarize why interface execution and dynamic virtual lookup of method dispatch requires extra overhead compared to standard class extensions."
    ]
  }
];
