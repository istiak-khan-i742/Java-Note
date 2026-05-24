import { Lesson } from './lessons';

export const section4Lessons: Lesson[] = [
  {
    id: "s4-overview",
    title: "Section Overview",
    description: "Overview of Section IV: Inheritance & Polymorphism System",
    content: `
# 📙 Section IV: Inheritance and Polymorphism
## Complete Syllabus Map (Lessons 17 to 22)

Welcome to **Section IV: Inheritance and Polymorphism**. In Java Object-Oriented Programming (OOP), code reusability and dynamic behavior customization are powered by inheritance and polymorphism systems. This section covers parent-child relationships, sub-class structural designs, method overloading (compile-time polymorphism), method overriding (runtime polymorphism), the multi-purpose pointer \`super\`, constructor linking, and the security rules of the \`final\` keyword.

---

### 📋 Section IV Course Syllabus Checklist
Below is a checklist showing how every topic in the official section syllabus is thoroughly mapped to our masterclass lessons:

- [x] **Implementation of Inheritance & Basics** ➜ Covered in *Lesson 17: Inheritance Basics*
- [x] **IS-A Parent-Child Relationship** ➜ Covered in *Lesson 17: Inheritance Basics*
- [x] **Types of Inheritance (Single, Multilevel, Hierarchical)** ➜ Covered in *Lesson 18: Types of Inheritance*
- [x] **Why Multiple Inheritance is Blocked (Diamond Ambiguity)** ➜ Covered in *Lesson 18: Types of Inheritance*
- [x] **Method Overloading (Compile-Type Optimization)** ➜ Covered in *Lesson 19: Method Overloading*
- [x] **Overloading via Count vs. Type Variation** ➜ Covered in *Lesson 19: Method Overloading*
- [x] **Return Type Overload Ambiguity Trap** ➜ Covered in *Lesson 19: Method Overloading*
- [x] **Overloading main() Method in Java** ➜ Covered in *Lesson 19: Method Overloading*
- [x] **Type Promotion Rules & Promotion Collision Ambiguities** ➜ Covered in *Lesson 19: Method Overloading*
- [x] **Method Overriding (Runtime Behavior Override)** ➜ Covered in *Lesson 20: Method Overriding*
- [x] **The Three Golden Overriding Guardrails** ➜ Covered in *Lesson 20: Method Overriding*
- [x] **Overloading vs. Overriding Technical Comparison Matrix** ➜ Covered in *Lesson 20: Method Overriding*
- [x] **The Triad of 'super' (Variables, Methods, Constructors)** ➜ Covered in *Lesson 21: Super Keyword in Java*
- [x] **Constructor Chaining Mechanics** ➜ Covered in *Lesson 21: Super Keyword in Java*
- [x] **The Triad of 'final' (Constants, Methods, Classes)** ➜ Covered in *Lesson 22: Final Keyword in Java*
- [x] **Blank (Uninitialized) Final Variables Injection** ➜ Covered in *Lesson 22: Final Keyword in Java*

---

### 🗺️ Masterclass Lesson Navigation
Each lesson has been architected to provide a masterclass learning experience, containing complete verbatim notes and diagrams from official slides, blended with beginner-friendly guides, full annotated code examples, and practice checkpoints.

1. **Lesson 17: Inheritance Basics**
   * Detailed breakdown of the IS-A parental relationship and the Employee-Programmer field reuse walkthrough.
2. **Lesson 18: Types of Inheritance**
   * Executable single, chain-multilevel, and branch-hierarchical models, with logical teardowns of why Multiple Inheritance triggers compile errors.
3. **Lesson 19: Method Overloading & Type Promotion**
   * Compile-time polymorphic mechanics, main method overloading, type-promoting progression paths, and ambiguity crashes.
4. **Lesson 20: Method Overriding**
   * Runtime polymorphism, Vehicle-Bike custom execution states, and comparison differences.
5. **Lesson 21: Super Keyword in Java**
   * Accessing overridden characteristics, referencing parent class variables, and compiler-inserted constructor sequences.
6. **Lesson 22: Final Keyword in Java**
   * Securing code pathways, locking values with constants, declaring blanket uninitialized parameters, and inheriting final methods.
`
  },
  {
    id: "inheritance-basics-deep",
    title: "Lesson 17: Inheritance Basics",
    description: "Definition of inheritance in Java, code reuse, IS-A parental relationships, and Employee-Programmer verbatim studies.",
    content: `
# 📦 Lesson 17: Inheritance Basics

## 🔍 1. What is Inheritance in Java?
**Inheritance in Java** is a fundamental mechanism of Object-Oriented Programming (OOP) in which one object dynamically acquires all the properties (fields/state) and behaviors (methods/actions) of a parent object. 

The core idea is that you can create new classes that are constructed directly upon existing classes. When you inherit from an existing class, you can reuse its methods and fields. Moreover, you are free to add custom fields and methods in your new subclass to extend the parent blueprint.

---

### 📐 Structural characteristics of Inheritance:
* **The IS-A Relationship**: Inheritance establishes a strict **IS-A** relationship, which is also popularly known as a **parent-child relationship** (e.g., Dog is-an Animal, Programmer is-an Employee).
* **The extends Keyword**: This keyword is used to establish the inheritance bond. The word "extends" literally means *to increase functionality*.

---

## 🏛️ 2. Why Use Inheritance in Java?
Academics and software architectures implement inheritance for two main reasons:
1. **For Method Overriding**: This allows subclasses to define custom behaviors for inherited methods, directly enabling **Runtime Polymorphism**.
2. **For Code Reusability**: Rather than copy-pasting duplicate fields and methods across multiple classes, you write them once in a superclass and reuse them across all subclasses.

---

## 🧩 3. Key Ontological Terms to Memorize
To perform exceptionally in exams, write out these clean definitions:
* **Class**: A logical template, blueprint, or group of objects displaying common characteristics. It occupies no dynamic memory.
* **Super Class / Parent Class**: The class from which a subclass inherits variables and capabilities. Also referred to as a **base class**.
* **Sub Class / Child Class**: The newly declared class that inherits from another class. Also called a **derived class** or **extended class**.
* **Reusability**: The mechanism facilitating the reuse of existing fields and methods without repeating the declarations.

---

## 🧱 4. Syntax of Java Inheritance
\`\`\`java
class Subclass-name extends Superclass-name 
{ 
    // Additional methods and fields 
}
\`\`\`

In the terminology of Java, the class being inherited is called the parent or superclass, and the new inheriting class is called the child or subclass.

---

## 🚀 5. Verbatim Slide Walkthrough: Employee & Programmer
Let's study the slide's classic inheritance relationship. We establish an \`Employee\` parent class and a \`Programmer\` child class.

\`\`\`
                       ┌─────────────────────────┐
                       │        Employee         │
                       ├─────────────────────────┤
                       │  salary: float = 40000  │
                       └─────────────────────────┘
                                    ▲
                                    │  IS-A Employee (extends)
                       ┌─────────────────────────┐
                       │       Programmer        │
                       ├─────────────────────────┤
                       │  bonus: int = 10000     │
                       └─────────────────────────┘
\`\`\`

### Verbatim Executable Code:
\`\`\`java
// Verbatim from official slide Page 4
class Employee
{
    float salary = 40000;
}

class Programmer extends Employee
{
    int bonus = 10000;
    
    public static void main(String args[])
    {
        Programmer p = new Programmer();
        System.out.println("Programmer salary is:" + p.salary);
        System.out.println("Bonus of Programmer is:" + p.bonus);
    }
}
\`\`\`

### *Expected Terminal Output*:
\`\`\`
Programmer salary is:40000.0
Bonus of Programmer is:10000
\`\`\`

### 💡 Behavioral Analysis:
* **Heap Allocation**: When you write \`new Programmer()\`, the JVM allocates memory on the heap for the \`Programmer\` instance. Because it extends \`Employee\`, the allocated space contains both the subclass's fields (\`bonus\`) and the parent class's fields (\`salary\`).
* **Code Reusability**: The \`Programmer\` class did not explicitly declare a \`salary\` field. It inherits the field directly from \`Employee\`, drastically reducing code duplication!

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **Inheritance (উত্তরাধিকার)**: বাবা যেমন তার সম্পত্তি ছেলেকে দিয়ে যায়, ঠিক তেমনি জাভাতে Parent Class তার কোড (variables and methods) Child Class-কে ইনহারিট করতে দেয়। চাইল্ড ক্লাস তখন নিজের ভেরিয়েবল ব্যবহারের পাশাপাশি বাপের ঘরের সব ভ্যারিয়েবলও ইজিলি অ্যাক্সেস করতে পারে।
> * **Reusability (পুনর্ব্যবহার)**: একই ভ্যারিয়েবল যদি বারবার না লিখে এক জায়গায় লিখে শেয়ার করা যায়, তবে কোডের সাইজ কমে এবং কোনো পরিবর্তন করতে হলে কেবল এক জায়গাতেই হাত দিলেই হয়।

### ⚠️ Common Academic Trap:
> **Question**: *Can a Subclass access the private members of its Superclass inside Java?*
> **Answer**: **No**. Private fields and methods are restricted to their declaring class. Although they are physically present in the subclass object on the heap, the subclass has no authorization to access them directly. To access them, the parent class must expose public or protected getters/setters!

### 🎓 IIUC Exams Spotlight:
> *Explain inheritance basics with a neat diagram and appropriate Java expressions.*
> Draw the UML diagram showing Programmer pointing with an unfilled arrowhead pointing directly upward to Employee. Clearly point out how the 'extends' keyword binds the classes.
`,
    reviewQuestions: [
      "Define Inheritance in Java and explain why it is classified as an 'IS-A' relationship.",
      "Detail the advantages of implementing class inheritance inside software architecture.",
      "Present a neat UML representation and code implementation of the Employee and Programmer relationship."
    ],
    quizzes: [
      {
        question: "জাভাতে 'extends' কিওয়ার্ড ব্যবহারের মূল উদ্দেশ্য কোনটি?",
        options: [
          { label: "এটি ডাটাবেজের সাথে যোগাযোগ বৃদ্ধির কাজে লাগে", isCorrect: false },
          { label: "এটি একটি নতুন চাইল্ড ক্লাসকে পেরেন্ট ক্লাসের ভেরিয়েবল ও মেথড অ্যাক্সেস তথা ইনহেরিট করতে সাহায্য করে", isCorrect: true },
          { label: "এটি অবজেক্টের মেমরি সাইজ কমাতেও ডিফল্ট মেথড ডিলিট করতে সাহায্য করে", isCorrect: false },
          { label: "এটি স্ট্যাটিক ভেরিয়েবল লক করে দেয়", isCorrect: false }
        ],
        explanation: "'extends' কিওয়ার্ডটি ব্যবহারের মানে হলো ফাংশনালিটি সম্প্রসারিত করা। এর মাধ্যমে চাইল্ড ক্লাসটি পেরেন্ট ক্লাসের বৈশিষ্ট্যাবলী সরাসরি ব্যবহারের সুযোগ পায়।"
      },
      {
        question: "Employee ক্লাসে 'float salary' ডিক্লেয়ার করা আছে এবং Programmer ক্লাসটি Employee ক্লাসকে extends করেছে। 'new Programmer()' ব্যবহার করে অবজেক্ট তৈরি করার পর memory-তে কী ঘটে?",
        options: [
          { label: "শুধুমাত্র Programmer-এর নিজস্ব ফিল্ডগুলো স্ট্যাকে স্পেস পায়", isCorrect: false },
          { label: "হিপ মেমরি ব্লকে একই সাথে চাইল্ডের নিজস্ব ফিল্ড (যেমন bonus) এবং পেরেন্ট ক্লাসের ফিল্ড (যেমন salary) উভয়ের জন্য স্পেস বরাদ্দ হয়", isCorrect: true },
          { label: "কম্পাইলার সাথে সাথে ইনহেরিটেন্স ডিলিট করে দেয়", isCorrect: false },
          { label: "এটি রানটাইম মেমরি ওভারফ্লো এরর প্রদর্শন করবে", isCorrect: false }
        ],
        explanation: "ইনহেরিট করা অবজেক্ট তৈরি হলে JVM হিপে যে জায়গা বরাদ্দ করে, তার ভেতর চাইল্ডের নিজস্ব ভেরিয়েবল এবং পেরেন্ট থেকে পাওয়া ভেরিয়েবল উভয়ই মেমরি স্পেস লাভ করে।"
      },
      {
        question: "নিচের কোন রিলেশনশিপটি Java Inheritance নির্দেশ করে?",
        options: [
          { label: "HAS-A রিলেশনশিপ", isCorrect: false },
          { label: "IS-A রিলেশনশিপ", isCorrect: true },
          { label: "USES-A রিলেশনশিপ", isCorrect: false },
          { label: "DEPENDS-ON রিলেশনশিপ", isCorrect: false }
        ],
        explanation: "জাভাতে ইনহেরিটেন্সকে 'IS-A' রিলেশনশিপ বলা হয় (যেমন: Programmer IS-A Employee বা Dog IS-A Animal)।"
      }
    ]
  },
  {
    id: "inheritance-types-deep",
    title: "Lesson 18: Types of Inheritance",
    description: "Single, Multilevel, and Hierarchical designs, and logical teardowns of why Multiple Inheritance through Class causes Diamond crashes.",
    content: `
# 🛠️ Lesson 18: Types of Inheritance

Based on class configurations, Java supports three major categories of inheritance. However, there are also combinations that are restricted to preserve structural safety.

---

## 🗂️ 1. Core Classes-Based Inheritance Types

\`\`\`
  1) Single                 2) Multilevel              3) Hierarchical
   ┌───────┐                 ┌───────┐                  ┌───────┐
   │Class A│                 │Class A│                  │Class A│
   └───┬───┘                 └───┬───┘                  └───┬───┘
       ▼                         ▼                          ├──────────────┐
   ┌───────┐                 ┌───────┐                      ▼              ▼
   │Class B│                 │Class B│                  ┌───────┐      ┌───────┐
   └───────┘                 └───┬───┘                  │Class B│      │Class C│
                                 ▼                      └───────┘      └───────┘
                             ┌───────┐
                             │Class C│
                             └───────┘
\`\`\`

---

### I. Single Inheritance
A simple configuration where one child class inherits directly from a single parent class.

#### Verbatim Slide Code Details (\`TestInheritance.java\`):
\`\`\`java
// Verbatim from official slide Page 6
class Animal {
    void eat() {
        System.out.println("eating...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("barking...");
    }
}

class TestInheritance {
    public static void main(String args[]) {
        Dog d = new Dog();
        d.bark();
        d.eat();
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  barking...
  eating...
  \`\`\`

---

### II. Multilevel Inheritance
A chain inheritance pattern where a child class itself acts as a parent to another class (Parent ➜ Child ➜ Sub-child).

#### Verbatim Slide Code Details (\`TestInheritance2.java\`):
\`\`\`java
// Verbatim from official slide Page 6-7
class Animal {
    void eat() {
        System.out.println("eating...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("barking...");
    }
}

class BabyDog extends Dog {
    void weep() {
        System.out.println("weeping...");
    }
}

class TestInheritance2 {
    public static void main(String args[]) {
        BabyDog d = new BabyDog();
        d.weep();
        d.bark();
        d.eat();
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  weeping...
  barking...
  eating...
  \`\`\`

---

### III. Hierarchical Inheritance
A branching pattern where two or more disjoint child classes extend from a single parent class.

#### Verbatim Slide Code Details (\`TestInheritance3.java\`):
\`\`\`java
// Verbatim from official slide Page 7
class Animal {
    void eat() {
        System.out.println("eating...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("barking...");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println("meowing...");
    }
}

class TestInheritance3 {
    public static void main(String args[]) {
        Cat c = new Cat();
        c.meow();
        c.eat();
        // c.bark(); // Compile Time Error because bark() belongs to sibling Dog class!
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  meowing...
  eating...
  \`\`\`

---

## 🚫 2. Multiple & Hybrid Inheritance Limits
* **Interface Only**: Multiple and hybrid inheritance patterns are supported in Java **strictly through interfaces** only.
* **Class Ban**: Multiple inheritance is **absolutely not supported** in Java through class models.

\`\`\`
       Multiple Inheritance               Hybrid (Diamond Pattern)
       ┌───────┐   ┌───────┐                     ┌───────┐
       │Class A│   │Class B│                     │Class A│
       └───┬───┘   └───┬───┘                     └───┬───┘
           └─────┬─────┘                             ▼
                 ▼                               ┌───┴───┐
             ┌───────┐                           │Class B│
             │Class C│                           └───┬───┘
             └───────┘                               ▼
                                                 ┌───┴───┐
                                                 │Class C│
                                                 └───────┘
\`\`\`

---

### ❓ Question: Why is multiple inheritance not supported in Java classes?
To reduce structure complexity and simplify language rules, Java blocks multiple class inheritance. The primary culprit is **ambiguity** (the infamous **Diamond Problem**).

#### Verbatim Slide Explanation:
Consider a scenario where A, B, and C are three classes. The class C inherits from both A and B. If A and B classes have the exact same method signature (e.g. \`msg()\`) and you call that method from a child class C object, the JVM cannot logically decide which class's version of the method should be executed.

Because compile-time safety is infinitely better than runtime crashes, Java triggers a compile-time error whenever a class attempts to inherit from more than one class.

#### Verbatim Colliding Simulation Code:
\`\`\`java
// Verbatim from official slide Page 8
class A {
    void msg() {
        System.out.println("Hello");
    }
}

class B {
    void msg() {
        System.out.println("Welcome");
    }
}

class C extends A, B { // Supposing it were legal in Java (it is not!)
    public static void main(String args[]) {
        C obj = new C();
        obj.msg(); // ❌ Which msg() method would be invoked? Ambiguity!
    }
}
\`\`\`

* **Expected Compiler Error**:
  \`\`\`
  C.java:11: error: '{' expected or ',' expected
  class C extends A, B
                   ^
  \`\`\`

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **Core Classes Types**: সিঙ্গেল ইনহেরিটেন্স মানে ১টা বাবা থেকে ১টা সন্তান। মাল্টিলেভেল ইনহেরিটেন্স মানে দাদা থেকে বাবা এবং বাবার থেকে নাতি (Animal -> Dog -> BabyDog)। আর হায়ারার্কিকাল ইনহেরিটেন্স মানে একই বাবার দুই সন্তান (যেমন— Animal পেরেন্ট থেকে Dog এবং Cat চাইল্ড)।
> * **No Multiple Classes**: একই সাথে ২টা ভিন ভিন্ন বাবা থেকে ছেলে ইনহারিট করা (যেমন- class C extends A, B) জাভাতে কঠোরভাবে নিষিদ্ধ। যদি A এবং B দুজনের বাড়িতেই \`msg()\` নামের একই কাজের টুল থাকে, তবে নতুন ক্লাসে এসে ওটা কল করলে জাভা বুঝতে পারবে না কার টুলটা run করা উচিত। এই দ্বিমুখী বিভ্রান্তিকে আমরা বলি **Diamond Problem** বা **Ambiguity Problem**।

### ⚠️ Common Academic Trap:
> **Question**: *Can a class extend a class and implement multiple interfaces simultaneously?*
> **Answer**: **Yes**. Java allows a class to extend exactly *one* parent class while implementing *any number* of interfaces. This hybrid architecture completely bypasses class ambiguity while preserving the multi-interface modular design!

### 🎓 IIUC Exams Spotlight:
> *Detail why Java doesn't support multiple inheritance with class diagrams.*
> Map Class A, B at the high table level, both pointing down to Child Class C. Draw a big red cross through the double inheritance pointer to explain the Diamond Collision. Use the slide's A-B-C method ambiguity code to prove your answer.
`,
    reviewQuestions: [
      "Categorize the three class-based inheritance types supported natively in Java with structural definitions.",
      "Explain the exact concept of the Diamond Problem in Multiple Inheritance with a colliding Java simulation.",
      "Identify the compilation results when trying to compile a class declared as 'class Dog extends Sibling1, Sibling2'."
    ],
    quizzes: [
      {
        question: "নিচের কোন কোড ডিক্লেয়ারেশনটি জাভাতে কম্পাইল টাইম এরর তৈরি করবে?",
        options: [
          { label: "class BabyDog extends Dog { ... }", isCorrect: false },
          { label: "class Dog extends Animal, Mammal { ... }", isCorrect: true },
          { label: "class Cat extends Animal implements Groomable { ... }", isCorrect: false },
          { label: "class TestInheritance { ... }", isCorrect: false }
        ],
        explanation: "জাভা ক্লাস হায়ারার্কিতে 'Multiple Inheritance' সাপোর্ট করে না। তাই এক সাথে একাধিক ক্লাসকে (যেমন: Animal এবং Mammal) একই ক্লাসের পেছনে extends করতে বসানো আইনত নিষিদ্ধ।"
      },
      {
        question: "জাভায় ক্লাস বেইজড 'Multiple Inheritance' নিষিদ্ধ হওয়ার প্রধান কারণ কী?",
        options: [
          { label: "এটির মাধ্যমে কম্পিউটারের হার্ডডিস্ক মেমরি নষ্ট হয়ে যায়", isCorrect: false },
          { label: "দুটি পেরেন্ট ক্লাসে একই নামের মেথড থাকলে চাইল্ড ক্লাসে কলিং অ্যাম্বিগুইটি বা Diamond Problem তৈরি হয়", isCorrect: true },
          { label: "ইন্টারফেস ব্যবহার করা অনেক সহজ বলে", isCorrect: false },
          { label: "জাভায় মেথড ওভাররাইড মেকানিজম জেনারেট করানো সম্ভব হয় না", isCorrect: false }
        ],
        explanation: "যদি দুটি পেরেন্ট ক্লাসের একই সিগনেচারের মেথড থাকে, তবে চাইল্ড অবজেক্ট থেকে ওটা কল দিলে কোন ক্লাসের মেথডটি চলবে তা নির্ধারণ করতে গিয়ে কম্পাইলার বিভ্রান্ত হয়। একে 'Diamond Problem' বা 'Ambiguity' রিলেটেড সমস্যা বলে।"
      },
      {
        question: "Multilevel Inheritance এর নিখুঁত ধারা নিচের কোনটি প্রকাশ করে?",
        options: [
          { label: "একটি পেরেন্ট ক্লাস থেকে একাধিক সরাসরি চাইল্ড ক্লাস তৈরি", isCorrect: false },
          { label: "একটি ক্লাস তার পেরেন্ট ক্লাসকে এবং সেই পেরেন্ট ক্লাস তার উপরের আরেকটি ক্লাসকে ইনহেরিট করার চেইন ধারা", isCorrect: true },
          { label: "স্ট্যাটিক ক্লাসের সাহায্য ছাড়াই অবজেক্ট তৈরি", isCorrect: false },
          { label: "কোনো ইনহেরিটেন্স রিলেশন না থাকা", isCorrect: false }
        ],
        explanation: "মাল্টিলেভেল ইনহেরিটেন্সে প্যারেন্ট-চাইল্ড রিলেশন চেইন বা একের পর এক ধাপে তৈরি হয় (যেমন: BabyDog inherits Dog, and Dog inherits Animal)।"
      }
    ]
  },
  {
    id: "overloading-deep-full",
    title: "Lesson 19: Method Overloading",
    description: "Method overloading by arguments count vs type variation, return type traps, main() overloading, and type promotion hierarchies.",
    content: `
# 🌀 Lesson 19: Method Overloading

**Method Overloading** represents static Polymorphism in Java. Calling multiple methods with identical naming within a single context allows flexible and readable applications.

---

## 🔍 1. Defining Method Overloading
If a class contains multiple methods having the **same name but different parameter signatures**, it is classified as **Method Overloading**.

### 📈 Structural Advantages:
* **Increases Readability**: Rather than inventing confusing custom names for similar operations (e.g. \`addInt()\`, \`addDouble()\point\`, \`addThreeInts()\`), using a unified method name increases the clarity of the client API.

---

## ⚙️ 2. Two Ways to Overload Methods
To successfully overload a method, its compiler signature must differ. Java compiles overloaded targets based on:

### I. Changing the Number of Arguments
We declare two static \`add()\` methods inside an \`Adder\` class with differing argument counts.

#### Verbatim Slide Code Example (\`TestOverloading.java\`):
\`\`\`java
// Verbatim from official slide Page 10
class Adder {
    static int add(int a, int b) {
        return a + b;
    }
    
    static int add(int a, int b, int c) {
        return a + b + c;
    }
}

class TestOverloading {
    public static void main(String[] args) {
        System.out.println(Adder.add(11, 11));
        System.out.println(Adder.add(11, 11, 11));
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  22
  33
  \`\`\`

---

### II. Changing the Data Type of Arguments
We declare two methods inside the \`Adder\` class that receive different data types (e.g. \`int\` vs. \`double\`).

#### Verbatim Slide Code Example (\`TestOverloading2.java\`):
\`\`\`java
// Verbatim from official slide Page 11
class Adder {
    static int add(int a, int b) {
        return a + b;
    }
    
    static double add(double a, double b) {
        return a + b;
    }
}

class TestOverloading2 {
    public static void main(String[] args) {
        System.out.println(Adder.add(11, 11));
        System.out.println(Adder.add(12.3, 12.6));
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  22
  24.9
  \`\`\`

---

## 🚫 3. Return Type Variation Trap
### ❓ Question: Why is Method Overloading NOT possible by changing the return type of the method only?
Method overloading requires a signature difference to allow the compiler to distinguish between candidate methods when a call is evaluated.

If two methods have identical parameters but different return types, the compiler cannot determine which method to invoke, as return types are resolved after method selection. This triggers a compile-time collision.

#### Verbatim Collision Code:
\`\`\`java
// Verbatim from official slide Page 12
class Adder {
    static int add(int a, int b) {
        return a + b;
    }
    
    static double add(int a, int b) { // ❌ Duplicate signature!
        return a + b;
    }
}

class TestOverloading3 {
    public static void main(String[] args) {
        System.out.println(Adder.add(11, 11)); // ❌ Complete ambiguity!
    }
}
\`\`\`
* **Expected Compiler Error**:
  \`\`\`
  Adder.java:7: error: method add(int,int) is already defined in class Adder
    static double add(int a, int b) {
                  ^
  \`\`\`

---

## 🚀 4. Overloading the Java main() Method
**Yes**, we can completely overload the static \`main()\` method of a Java entrance class. You can declare any number of overloaded \`main()\` methods with custom parameter lists.

However, the JVM looks *exclusively* for the predefined signature: \`public static void main(String[] args)\` to begin program state execution. Other variations remain as ordinary callable static methods.

#### Verbatim Overload Program Example:
\`\`\`java
// Verbatim from official slide Page 13
class TestOverloading {
    public static void main(String[] args) {
        System.out.println("main with String[]");
    }
    
    public static void main(String args) {
        System.out.println("main with String");
    }
    
    public static void main() {
        System.out.println("main without args");
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  main with String[]
  \`\`\`

---

## 📈 5. Method Overloading & Type Promotion Systems
If an exact match for a method call's arguments is not found, Java's compiler applies automatic **Type Promotion**.

### 🪜 Java Type Promotion Ladder:
Values of smaller storage sizes are implicitly promoted up the ladder to avoid data truncation:
* \`byte\` ➜ \`short\` ➜ \`int\` ➜ \`long\` ➜ \`float\` ➜ \`double\`
* \`char\` ➜ \`int\`

\`\`\`
  char ──────────────────┐
                         ▼
  byte ───> short ───> int ───> long ───> float ───> double
\`\`\`

---

### I. Verbatim Type Promotion Example:
\`\`\`java
// Verbatim from official slide Page 13
class OverloadingCalculation {
    void sum(int a, long b) {
        System.out.println(a + b);
    }
    
    void sum(int a, int b, int c) {
        System.out.println(a + b + c);
    }
    
    public static void main(String args[]) {
        OverloadingCalculation obj = new OverloadingCalculation();
        obj.sum(20, 20); // The second literal (int) is promoted to long!
        obj.sum(20, 20, 20);
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  40
  60
  \`\`\`

---

### II. No Promotion If Direct Signature Match Exists:
If a method with matching parameters is declared, the compiler invokes it without applying type promotion.

#### Verbatim Slide Example:
\`\`\`java
// Verbatim from official slide Page 14
class OverloadingCalculation {
    void sum(int a, int b) {
        System.out.println("int arg method invoked");
    }
    
    void sum(long a, long b) {
        System.out.println("long arg method invoked");
    }
    
    public static void main(String args[]) {
        OverloadingCalculation obj = new OverloadingCalculation();
        obj.sum(20, 20); // Invokes the exact matching (int, int) signature!
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  int arg method invoked
  \`\`\`

---

### III. Type Promotion Ambiguity Error:
If multiple overloaded methods are candidates due to type promotion, they can conflict and raise compile-time errors.

#### Verbatim Slide Example:
\`\`\`java
// Verbatim from official slide Page 14
class OverloadingCalculation {
    void sum(int a, long b) {
        System.out.println("a method invoked");
    }
    
    void sum(long a, int b) {
        System.out.println("b method invoked");
    }
    
    public static void main(String args[]) {
        OverloadingCalculation obj = new OverloadingCalculation();
        obj.sum(20, 20); // ❌ Collision! Both configurations require one promotion!
    }
}
\`\`\`
* **Expected Compiler Error**:
  \`\`\`
  OverloadingCalculation.java:15: error: reference to sum is ambiguous
          obj.sum(20, 20);
             ^
  \`\`\`

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **Method Overloading**: একই নামে একাধিক মেথড থাকবে, কিন্তু প্যারামিটারের সংখ্যা বা টাইপ ভিন্ন হতে হবে। এটি অবজেক্ট ওরিয়েন্টেড ডিজাইনের রিডিবিলিটি বুস্ট করে।
> * **Return Type Loophole**: মেথডের ডেটা টাইপ বা আর্গুমেন্ট সেম রেখে শুধু রিটার্ন টাইপ পরিবর্তন করে ওভারলোডিং করা অসম্ভব। কারণ কম্পাইলার যখন মেথড কল প্রসেস করে, তখন এটি মেথডের ভেতর কার ভ্যালু ব্যাক করবে তা দেখার সুযোগ পায় না। ফলে একই টাইপের প্যারামিটার দেখলে সে ডুপ্লিকেট প্যারামিটার এরর ছুড়ে মারবে।
> * **Type Promotion**: কম্পাইলার যদি হুবহু একই মানের প্যারামিটার টাইপ খুঁজে না পায়, তাহলে ছোট ডাটা টাইপগুলোকে ধাপে ধাপে বড় ডাটা টাইপে রূপান্তর করে দেয়। কিন্তু এই রূপান্তরের সময় ২ বা ততোধিক মেথড যদি সমান পাওয়ারের উপযুক্ত প্রার্থী হয়ে দাঁড়ায়, তবে কে কল হবে তা ডিসাইড করতে না পেরে কম্পাইলার **Ambiguity Error** দিবে।

### ⚠️ Common Academic Trap:
> **Question**: *Can we overload a Java method by changing the access modifier (for example, making one method default and another public)?*
> **Answer**: **No**. Attempting to overload by only changing access levels or throwing exceptions leads to compile-time duplicate definition failures. Same parameters with different access modifiers is a duplicate definition!

### 🎓 IIUC Exams Spotlight:
> *Detail the concept of method overloading with promotion ambiguities.*
> Highlight the promotion flow chart. Give the verbatim examples (int, long) and (long, int) showing the exact ambiguity error.
`,
    reviewQuestions: [
      "Define Method Overloading in Java and write down its core logical advantages.",
      "Justify why changing the return type only is completely invalid for overloading architectures.",
      "Detail how automatic Type Promotion behaves inside Java compiling stack with an ambiguous collision example."
    ],
    quizzes: [
      {
        question: "জাভাতে শুধুমাত্র মেথড রিটার্ন টাইপ (Return Type) ভিন্ন করে মেথড ওভারলোড করতে চাওয়া কি বৈধ?",
        options: [
          { label: "হ্যাঁ, এটি সম্পূর্ণভাবে বৈধ এবং বহুল ব্যবহৃত", isCorrect: false },
          { label: "না, মেথড কল ইভ্যালুয়েশনের সময় কম্পাইলার বুঝতে পারে না কোন মেথডটি রান করতে হবে, ফলে কম্পাইল এরর দেয়", isCorrect: true },
          { label: "হ্যাঁ, তবে শুধু প্রিমিয়ার ডেটা টাইপের জন্য এটি সম্ভব", isCorrect: false },
          { label: "এটি ডাটাবেজ কন্ডিশনে রানটাইম এরর ক্রিয়েট করবে", isCorrect: false }
        ],
        explanation: "মেথড ওভারলোডিংয়ের প্রাইমারি মেকানিজমে মেথড সিগনেচার বিচার করা হয় (প্যারামিটার কাউন্ট এবং টাইপ)। রিটার্ন টাইপের কোনো হিসেব কম্পাইলার এখানে ধরে না। তাই কেবল রিটার্ন টাইপ উল্টালে মেথড সিগনেচার ডুপ্লিকেট হিসেবে গণ্য হয়ে কম্পাইল এরর দেয়।"
      },
      {
        question: "যদি কোনো ক্লাসের ক্লায়েন্ট কোড 'obj.sum(20, 20)' কল করে এবং ক্লাসের ভেতর 'void sum(int a, long b)' এবং 'void sum(long a, int b)' থাকে, তবে নিচের কোনটি ঘটবে?",
        options: [
          { label: "প্রথমটি স্বয়ংক্রিয়ভাবে প্রমোশন লিস্টে রান হবে", isCorrect: false },
          { label: "দ্বিতীয়টি রানটাইমে ডাবল ভ্যালু জেনারেট করবে", isCorrect: false },
          { label: "এটি একটি ambiguity collision এর সৃষ্টি করবে এবং কম্পাইল টাইম এরর দেবে", isCorrect: true },
          { label: "মেথডটি রান হয়ে শূন্য প্রিন্ট করবে", isCorrect: false }
        ],
        explanation: "পাস করা ডেটার প্রমোশন করতে গিয়ে দুই মেথডই সমান ম্যাচিংয়ের দাবিদার হয়ে দাঁড়ায়। ফলে কম্পাইলার কনফিউজড হয়ে 'reference to sum is ambiguous' এরর ছুড়ে দেয়।"
      },
      {
        question: "জাভার মেইন (main) মেথড ওভারলোডিং সংক্রান্ত কোন তথ্যটি সঠিক?",
        options: [
          { label: "মেইন মেথডকে ওভারলোড করা কোনোভাবেই জাভাতে সম্ভব নয়", isCorrect: false },
          { label: "মেইন মেথড কে বিভিন্ন প্যারামিটার দিয়ে ওভারলোড করা সম্ভব, কিন্তু JVM শুধুমাত্র String[] আর্গুমেন্টযুক্ত মেথডটিকেই এন্ট্রি পয়েন্ট হিসেবে রান করে", isCorrect: true },
          { label: "সবগুলো ওভারলোডেড মেইন মেথডই সমান্তরালভাবে একযোগে রান হয়", isCorrect: false },
          { label: "মেইন মেথড ওভারলোড করার সাথে সাথে ক্লাস ইনভ্যালিড হয়ে যায়", isCorrect: false }
        ],
        explanation: "জাভাতে মেইন মেথড ওভারলোড করা যায়। তবে রানটাইমে JVM প্রোগ্রাম বুট টাইমে নির্দিষ্টভাবে কেবল 'public static void main(String[] args)' মেথডটিকে ইনভোক করতে পারে।"
      }
    ]
  },
  {
    id: "overriding-deep-full",
    title: "Lesson 20: Method Overriding",
    description: "Definition of overriding, rules and constraints, Vehicle-Bike verbatim studies, and overriding versus overloading matrix.",
    content: `
# 🌀 Lesson 20: Method Overriding

**Method Overriding** represents Dynamic (Runtime) Polymorphism in Java. This allows a subclass to define specialized behavior for a method inherited from a parent class.

---

## 🔍 1. Defining Method Overriding
If a subclass (child class) declares the **exact same method** as already declared in its parent class, it is known as **Method Overriding** in Java.

### 📐 Three Core Guardrail Rules:
To establish overriding instead of declaring a new method, the subclass method must satisfy:
1. Same name as in the parent class.
2. Same parameter signature as in the parent class.
3. Must have a valid **IS-A relationship** (inheritance).

---

## 🏛️ 2. Primary Purposes of Overriding
* **Dynamic Implementation**: Subclasses can define localized, specialized behaviors that differ from the parent's generic implementation.
* **Runtime Polymorphism**: This allows a parent reference variable to call overridden methods on subclass objects at runtime (resolved dynamically).

---

## 🧱 3. Understanding the Base State: Without Overriding
Let's see what happens if a class inherits a parent class but does NOT override its parent methods.

\`\`\`
                  ┌────────────────────────┐
                  │        Vehicle         │
                  ├────────────────────────┤
                  │  run(): prints vehicle │
                  └────────────────────────┘
                              ▲
                              │  extends (No Override)
                  ┌────────────────────────┐
                  │          Bike          │
                  └────────────────────────┘
\`\`\`

#### Verbatim Slide Code Example (\`Bike.java\`):
\`\`\`java
// Verbatim from official slide Page 15
class Vehicle {
    void run() {
        System.out.println("Vehicle is running");
    }
}

class Bike extends Vehicle {
    public static void main(String args[]) {
        Bike obj = new Bike();
        obj.run(); // Calls inherited method from parent
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  Vehicle is running
  \`\`\`

---

## 🛠️ 4. The Solution State: With Method Overriding
We override the generic \`run()\` method in the subclass to achieve custom behavior.

\`\`\`
                  ┌───────────────────────────────┐
                  │            Vehicle            │
                  ├───────────────────────────────┤
                  │     run(): prints generic     │
                  └───────────────────────────────┘
                                  ▲
                                  │  extends & Overrides run()
                  ┌───────────────────────────────┐
                  │             Bike2             │
                  ├───────────────────────────────┤
                  │  run(): prints customized...  │
                  └───────────────────────────────┘
\`\`\`

#### Verbatim Slide Code Example (\`Bike2.java\`):
\`\`\`java
// Verbatim from official slide Page 16
class Vehicle {
    void run() {
        System.out.println("Vehicle is running");
    }
}

class Bike2 extends Vehicle {
    // Overriding the parent run() method
    void run() {
        System.out.println("Bike is running safely");
    }
    
    public static void main(String args[]) {
        Bike2 obj = new Bike2();
        obj.run(); // Invokes the subclass overridden method
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  Bike is running safely
  \`\`\`

---

## ⚖️ 5. Method Overloading vs. Method Overriding
To perform well in exams, memorize this classic comparison table representing these two polymorphic systems:

| Technical Feature | Method Overloading (Static) | Method Overriding (Dynamic) |
| :--- | :--- | :--- |
| **Primary Purpose** | Increases the readability of methods performing similar actions. | Provides customized, specific implementations for inherited methods. |
| **Declaration Scope** | Performed **within a single class** context. | Performed across **at least two classes** sharing an IS-A relationship. |
| **Parameter Constraints** | **Must differ** in parameter type, number, or ordering. | **Must be identical** in parameter type, number, and ordering. |
| **Polymorphism Mode** | Example of **Compile-time** (Static) polymorphism. | Example of **Run-time** (Dynamic) polymorphism. |
| **Return Type Constraints** | Can be identical or different. | **Must be identical** (or a covariant subclass of the parent's return type). |

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **Method Overriding**: বাপের ক্লাসের কোনো মেথড যদি ছেলের পছন্দ না হয় বা তার স্পেশাল কোনো ফিচার অ্যাড করার দরকার পড়ে, তবে চাইল্ড ক্লাসে এসে একই নামে, একই প্যারামিটার রেখে ভেতরের কোড ডিলিট বা রি-রাইট করার প্রসেসকে ওভাররাইডিং বলে।
> * **Without Overriding**: ওভাররাইড না করলে চাইল্ড ক্লাসের নিজেস্ব কোনো ভ্যালু বা রান করার ক্ষমতা তৈরি হয় না, তাকে বাপের ক্লাসের জেনেরিক ফাইলটাই রান করে কাজ চালাতে হয়। যেমন প্রথম এক্সাম্পলে বাইক চালাতে গিয়ে আউটপুট পাই- 'Vehicle is running'।
> * **Tabular Checklist**: পরীক্ষায় ও ইন্টারভিউ বোর্ডে ওভারলোডিং এবং ওভাররাইডিংয়ের পার্থক্য ১০ এর মধ্যে ১০ পাইতে ৫টা পয়েন্ট ডিরেক্ট টেবিল ফরমেটে লিখে ফেলা উচিত। প্যারামিটার ভিন্ন থাকা মানে ওভারলোডিং, আর প্যারামিটার হুবহু সেম থাকা মানে ওভাররাইডিং।

### ⚠️ Common Academic Trap:
> **Question**: *Can we override a static method inside Java?*
> **Answer**: **No**. Overriding relies on dynamic binding at runtime on object instances. Since static methods belong directly to the Class template and are statically bound at compile-time (Method Hiding), attempting to override a static method prevents runtime polymorphism!

### 🎓 IIUC Exams Spotlight:
> *Distinguish between method overloading and method overriding in Java.*
> Present the official 5-point comparison matrix. Write down two miniature comparative classes (OverloadingExample & OverridingExample) to demonstrate both theories.
`,
    reviewQuestions: [
      "Define Method Overriding in Java and construct the three rules that govern it.",
      "Explain the technical outcomes of executing a child class subclassing without overriding parent methods.",
      "Formulate a complete technical comparison table distinguishing Overloading and Overriding across five parameters."
    ],
    quizzes: [
      {
        question: "জাভাতে মেথড ওভাররাইড (Method Overriding) করতে হলে নিচের কোন শর্তটি পূরণ করা আবশ্যক?",
        options: [
          { label: "মেথডটির রিটার্ন টাইপ অবশ্যই void হতে হবে", isCorrect: false },
          { label: "মেথডের নাম এবং প্যারামিটার লিস্ট প্যারেন্ট ক্লাসের মেথডের মতো হুবহু একই হতে হবে এবং একটি IS-A রিলেশন থাকতে হবে", isCorrect: true },
          { label: "মেথডের আগে অবশ্যই 'static' কিওয়ার্ড ব্যবহার করতে হবে", isCorrect: false },
          { label: "মেথডটি একটি নতুন মেথড ইনজেকশন হিসেবে রান হবে", isCorrect: false }
        ],
        explanation: "মেথড ওভাররাইডিঙের ৩টি প্রাথমিক রুলস হলো: পেরেন্ট এবং চাইল্ডে মেথডের নাম এক হওয়া, প্যারামিটার এক হওয়া এবং তাদের মাঝে ইনহেরিটেন্স (IS-A) সম্পর্ক সক্রিয় থাকা।"
      },
      {
        question: "যদি কোনো চাইল্ড ক্লাস পেরেন্ট ক্লাসের একটি মেথডকে ওভাররাইড করে রান করে, তবে কোন ধরনের পলিমরফিজম (Polymorphism) প্রকাশ পায়?",
        options: [
          { label: "Compile-time (Static) Polymorphism", isCorrect: false },
          { label: "Run-time (Dynamic) Polymorphism", isCorrect: true },
          { label: "Memory-safe Polymorphism", isCorrect: false },
          { label: "সহজ বা সিকিউর পলিমরফিজম", isCorrect: false }
        ],
        explanation: "মেথড ওভাররাইডিংয়ের রিলেশন রানটাইমে অবজেক্ট টাইপের ওপর বেস করে মেথড ডিসাইড করে। তাই এটি 'Runtime/Dynamic Polymorphism'-এর উৎকৃষ্ট উদাহরণ।"
      },
      {
        question: "জাভায় স্ট্যাটিক (static) মেথড কেন ওভাররাইড করা যায় না?",
        options: [
          { label: "স্ট্যাটিক মেথডের বডি তৈরি করা যায় না তাই", isCorrect: false },
          { label: "স্ট্যাটিক মেথড কোনো অবজেক্টের সাথে যুক্ত নয়, barat ক্লাসের সাথে বাইন্ড করা থাকে; ফলে রানটাইম ডায়নামিক মেথড ডিসপ্যাচ করা সম্ভব হয় না", isCorrect: true },
          { label: "স্ট্যাটিক মেথডগুলো ডিফল্টভাবে ফাইনাল হয়ে থাকে", isCorrect: false },
          { label: "জাভায় এর কোনো সমাধান নেই", isCorrect: false }
        ],
        explanation: "স্ট্যাটিক মেম্বার অবজেক্ট ইন্স্যুলেশন ছাড়া ক্লাস লোড টাইমে স্ট্যাটিকভাবে বাইন্ড হয়ে যায়। যেহেতু মেথড ওভাররাইডিং রানটাইমে অবজেক্ট টাইপের ওপর বেস করে মেথড ডিসাইড করে, তাই স্ট্যাটিক মেথডকে ওভাররাইড করা অবৈজ্ঞানিক ও অসম্ভব।"
      }
    ]
  },
  {
    id: "super-keyword-deep",
    title: "Lesson 21: Super Keyword in Java",
    description: "Definition of super keyword, accessing parent fields and methods, and constructor chaining walkthroughs.",
    content: `
# 🔑 Lesson 21: Super Keyword in Java

In Java, managing overlapping variable scopes between child and parent classes is solved easily using the **super** reference mechanism.

---

## 🔍 1. Defining the 'super' Keyword
The **super** keyword is a reference variable used to point directly to an object's immediate parent class context.

When you instantiate a subclass, the JVM implicitly creates an internal instance of the parent class. The \`super\` variable stores the reference address pointing directly to that parent space.

---

## ⚙️ 2. Three Principal Usages of super
The Java virtual machine processes three distinct usages of \`super\`:

### I. Referencing Parent Class Instance Variables
Used when the parent and child classes declare fields with identical names, resulting in field shadowing within the child class.

#### Verbatim Slide Code Example (\`TestSuper1.java\`):
\`\`\`java
// Verbatim from official slide Page 18
class Animal {
    String color = "white";
}

class Dog extends Animal {
    String color = "black";
    
    void printColor() {
        System.out.println(color);       // Prints child class variable (black)
        System.out.println(super.color); // Prints parent class variable (white)
    }
}

class TestSuper1 {
    public static void main(String args[]) {
        Dog d = new Dog();
        d.printColor();
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  black
  white
  \`\`\`

---

### II. Invoking Parent Class Methods
Used when a subclass has overridden a parent method, but still needs to execute the parent's generic implementation.

#### Verbatim Slide Code Example (\`TestSuper2.java\`):
\`\`\`java
// Verbatim from official slide Page 19
class Animal {
    void eat() {
        System.out.println("eating...");
    }
}

class Dog extends Animal {
    void eat() {
        System.out.println("eating bread...");
    }
    
    void bark() {
        System.out.println("barking...");
    }
    
    void work() {
        super.eat(); // Calls parent's eat() implementation
        bark();
    }
}

class TestSuper2 {
    public static void main(String args[]) {
        Dog d = new Dog();
        d.work();
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  eating...
  barking...
  \`\`\`

---

### III. Invoking Parent Class Constructors
The pointer \`super()\` can be used to invoke the parent class's constructor. This acts as the backbone of **Constructor Chaining**.

#### Verbatim Slide Code Example (\`TestSuper3.java\`):
\`\`\`java
// Verbatim from official slide Page 20
class Animal {
    Animal() {
         System.out.println("animal is created");
    }
}

class Dog extends Animal {
    Dog() {
        super(); // Invokes parent constructor (Must be the exact first statement!)
        System.out.println("dog is created");
    }
}

class TestSuper3 {
    public static void main(String args[]) {
        Dog d = new Dog();
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  animal is created
  dog is created
  \`\`\`

---

### ⚠️ The Compiler's Silent Insertion Law:
If a subclass constructor does not explicitly invoke a parent constructor using \`super()\` or another constructor via \`this()\`, the Java compiler **automatically inserts** \`super()\` as the first statement in the constructor block.

If the superclass defines parameterized constructors but lacks a parameterless constructor, this can cause compilation errors unless the developer manually invokes a parameterized constructor.

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **super**: এটি একটি রেফারেন্স পয়েন্টার যা সরাসরি বাপের সব কিছু ট্রেস বা রি-কল করতে সাহায্য করে। চাইল্ডের কাছে বাপের ঘরের ৩টা জিনিস অ্যাক্সেস করতে \`super\` লাগে।
> * **Variable (ভেরিয়েবল)**: পেরেন্ট আর চাইল্ড ক্লাসের ভ্যারিয়েবলের নাম এক হলে (যেমন ডোরের কালার ব্ল্যাক আর ঘরের কালার হোয়াইট), পেরেন্টের ভ্যারিয়েবল নির্দিষ্ট করে দেখানোর জন্য \`super.color\` ব্যবহার হয়।
> * **Method (মেথড)**: চাইল্ড ক্লাসে ওভাররাইড করা হলেও মেথডের ভেতরে বাপের ঘরের মূল মেথড যদি রান করতে মন চায়, তবে \`super.eat()\` দিয়ে সেটা সহজে কল করা যায়।
> * **Constructor (কনструк্টর)**: চাইল্ড কনস্ট্রাক্টরের সর্বপ্রথম লাইনে \`super()\` বসিয়ে পেরেন্ট অবজেক্ট স্টেট ডেভেলপ করা যায়। আপনি নিজে কোডে \`super()\` বা \`this()\` না লিখলে কম্পাইলার প্রতিটি জেনারেশনে নিজে থেকে ফাঁকা আর্গুমেন্টহীন নো-আর্গ \`super()\` বসিয়ে দিবে।

### ⚠️ Common Academic Trap:
> **Question**: *What happens if we put super() on the second line of a subclass constructor?*
> **Answer**: **Instant Compile-Time Error**. Java enforces that parent state construction must complete *before* child customizations execute. Therefore, \`super()\` must strictly be the first line inside any constructor block.

### 🎓 IIUC Exams Spotlight:
> *List three uses of the 'super' keyword with illustrative expressions.*
> Structure your answer clearly with the headings: "Variable Access", "Method Invocations", and "Constructor Linkage". Present the exact compilable Dog/Animal examples verbatim.
`,
    reviewQuestions: [
      "Demonstrate the three use cases of the 'super' keyword inside Java environments with corresponding compilable code.",
      "Explain the compile-time behaviors and compiler-driven code modifications regarding unwritten super() constructors.",
      "Justify why placing a super() call below another initialization statement triggers a compilation failure."
    ],
    quizzes: [
      {
        question: "জাভাতে 'super()' কনস্ট্রাক্টর কল ব্যবহারের ক্ষেত্রে সবচেয়ে মূল নিয়ম কোনটি?",
        options: [
          { label: "এটিকে মেথডের যেকোনো লাইনে কল করা যায়", isCorrect: false },
          { label: "এটিকে চাইল্ড ক্লাসের কনস্ট্রাক্টরের অবশ্যই সর্বপ্রথম স্টেটমেন্ট বা প্রথম লাইন হতে হবে", isCorrect: true },
          { label: "এটি শুধুমাত্র স্ট্যাটিক ব্লকে ব্যবহার করা যায়", isCorrect: false },
          { label: "এটি ব্যবহারের জন্য ইনহেরিটেন্স বা extends লাগে না", isCorrect: false }
        ],
        explanation: "পেরেন্ট ক্লাসের ইনিশিয়ালাইজেশন আগে সম্পন্ন হওয়া আবশ্যক, যাতে চাইল্ড অবজেক্ট নিরাপদ ভ্যালু পায়। একারণে চাইল্ড কনস্ট্রাক্টরে 'super()' কল একদম প্রথম লাইনে হওয়া বাধ্যতামুলক।"
      },
      {
        question: "যদি কোনো চাইল্ড ক্লাস এবং পেরেন্ট ক্লাস উভয়েরই 'String msg = \"test\"' নামের একই ভেরিয়েবল থাকে, তবে চাইল্ড ক্লাস থেকে পেরেন্টের ভেরিয়েবলটি অ্যাক্সেস করার উপায় কী?",
        options: [
          { label: "this.msg ব্যবহার করে", isCorrect: false },
          { label: "super.msg ব্যবহার করে", isCorrect: true },
          { label: "Parent.msg সরাসরি অ্যাক্সেস করে", isCorrect: false },
          { label: "কোনোভাবেই অ্যাক্সেস করা সম্ভব নয়", isCorrect: false }
        ],
        explanation: "ইনহেরিটেন্সে একই নামের ভেরিয়েবল থাকলে লোকাল বা চাইল্ডেরটি পেরেন্টেরটিকে আড়াল করে। সরাসরি পেরেন্টের মেম্বারকে অ্যাক্সেস করতে 'super.variableName' সিনট্যাক্সটি ব্যবহার করতে হয়।"
      },
      {
        question: "আমরা যদি আমাদের তৈরি চাইল্ড ক্লাসের কনস্ট্রাক্টরে কোনো 'super()' কোড না লিখি, তবে জাভা কম্পাইলার ব্যাকগ্রাউন্ডে কী রোল প্লে করে?",
        options: [
          { label: "কম্পাইল টাইম ব্লকিং এরর ক্রিয়েট করবে", isCorrect: false },
          { label: "স্বয়ংক্রিয়ভাবে কনস্ট্রাক্টরের প্রথম লাইনে একটি নো-আর্গুমেন্ট বা প্যারামিটারলেস 'super()' স্টেটমেন্ট যোগ করে দেয়", isCorrect: true },
          { label: "ক্লাসটির মেমরি চিরদিনের জন্য অফ করে দেয়", isCorrect: false },
          { label: "চাইল্ডের ভেতরের সব অবজেক্ট কনস্ট্রাক্টর ডিলিট করবে", isCorrect: false }
        ],
        explanation: "জাভা নিয়ম অনুসারে প্যারেন্ট অবজেক্ট ফাস্ট তৈরি হয়। তাই আমরা নিজে থেকে super() না লিখলে কম্পাইলার ব্যাকগ্রাউন্ডে ডিফল্ট নো-আর্গ super() একদম শুরুতে ইনজেক্ট করে দেয়।"
      }
    ]
  },
  {
    id: "final-keyword-deep",
    title: "Lesson 22: Final Keyword in Java",
    description: "Deep security boundaries of final keyword, final variables, final methods, final classes, blank final values, and inheritance of final methods.",
    content: `
# ❄️ Lesson 22: Final Keyword in Java

The **final** keyword enforces immutability and restricts code modification to ensure application security and type safety.

---

## 🔍 1. Defining the 'final' Keyword
The **final** keyword in Java is used to restrict modifications. It can be applied to variables, methods, and classes.

\`\`\`
                                  final Keyword
                                        │
         ┌──────────────────────────────┼──────────────────────────────┐
         ▼                              ▼                              ▼
  [final Variable]               [final Method]                 [final Class]
- Becomes a Constant           - Cannot be Overridden          - Cannot be Extended
- Reassignment blocked         - Behavior locked securely      - Hierarchy sealed flat
\`\`\`

---

## ⚙️ 2. Three Contexts of final in Java

### I. Java final Variable
Applying \`final\` to a variable prevents its value from being reassigned after initialization, transforming it into a constant.

#### Verbatim Slide Code Example:
\`\`\`java
// Verbatim from official slide Page 21
class Bike {
    final int speedlimit = 90; // final variable
    
    void run() {
        speedlimit = 400; // ❌ COMPILE FAILURE: Reassignment blocked!
    }
    
    public static void main(String args[]) {
        Bike obj = new Bike();
        obj.run();
    }
}
\`\`\`
* **Expected Compiler Error**:
  \`\`\`
  Bike.java:6: error: cannot assign a value to final variable speedlimit
          speedlimit = 400;
          ^
  \`\`\`

---

### II. Java final Method
Declaring a method as \`final\` prevents subclasses from overriding its implementation or altering its behavior.

#### Verbatim Slide Code Example:
\`\`\`java
// Verbatim from official slide Page 22
class Bike {
    final void run() {
        System.out.println("running");
    }
}

class Honda extends Bike {
    void run() { // ❌ COMPILE FAILURE: Override blocked!
        System.out.println("running safely with 100kmph");
    }
    
    public static void main(String args[]) {
        Honda honda = new Honda();
        honda.run();
    }
}
\`\`\`
* **Expected Compiler Error**:
  \`\`\`
  Honda.java:8: error: run() in Honda cannot override run() in Bike
      void run() {
           ^
  \`\`\`

---

### III. Java final Class
Declaring a class as \`final\` prevents it from being extended (inherited) by any other class, sealing its hierarchy.

#### Verbatim Slide Code Example:
\`\`\`java
// Verbatim from official slide Page 22
final class Bike {}

class Honda1 extends Bike { // ❌ COMPILE FAILURE: Inheritance blocked!
    void run() {
        System.out.println("running safely with 100kmph");
    }
    
    public static void main(String args[]) {
        Honda1 honda = new Honda1();
        honda.run();
    }
}
\`\`\`
* **Expected Compiler Error**:
  \`\`\`
  Honda1.java:3: error: cannot inherit from final Bike
  class Honda1 extends Bike {
                       ^
  \`\`\`

---

## ❓ 3. Is a final method inherited by subclasses?
**Yes.** Final methods are inherited by subclasses. Subclasses can call and execute inherited final methods, but they are prohibited from overriding them.

#### Verbatim Validation Code Example:
\`\`\`java
// Verbatim from official slide Page 23
class Bike {
    final void run() {
        System.out.println("running...");
    }
}

class Honda2 extends Bike {
    public static void main(String args[]) {
        new Honda2().run(); // Successfully calls the inherited final method!
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  running...
  \`\`\`

---

## 📦 4. Blank or Uninitialized final Variables
A final variable that is declared without an initial value is known as a **Blank Final Variable**.

### 🛠️ Strict Initialization Rules:
* A blank final variable **must be initialized** on object creation. It can only be initialized inside the class's **Constructors**.
* If the variable is static and blank (\`static final\`), it must be initialized inside the class's **static block**.

#### Verbatim Concept & Code Representation:
\`\`\`java
// Verbatim from official slide Page 23
class Student {
    int id;
    String name;
    final String PAN_CARD_NUMBER; // Blank final variable represents secure credit cards
    
    // Initialized exclusively inside constructor
    Student(String panCode) {
        PAN_CARD_NUMBER = panCode;
    }
}
\`\`\`

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **final Variable**: ভ্যালু ধ্রুবক করে দেয়। যেমন, স্পিড লিমিট ৯০ দেওয়ার পর ওটা আর ৪০০ পরিবর্তন করা যাবে না। পরিবর্তন করতে চাইলে জাভা কম্পাইলার সরাসরি রি-অ্যাসাইন ব্যানিং এরর দিবে।
> * **final Method**: মেথডকে স্থায়ীভাবে বন্ধ করে তালা মেরে দেয়। চাইল্ড ক্লাস মেথডটি উত্তরাধিকার সূত্রে ব্যবহার করতে পারলেও এটিকে নিজেস্ব ডিজাইনে রি-রাইট ওভাররাইড করতে পারবে না।
> * **final Class**: কোনো ক্লাসকে বন্ধ করার কাজে ব্যবহার হয়। যেমন— স্ট্রিং ক্লাস সিকিউরিটির জন্য ফাইনাল। ফাইনাল ক্লাস থেকে নতুন কোনো সাব-ক্ল্যান বা চাইল্ড ক্লাস extends করা আইনত অসম্ভব।
> * **Blank final Variable**: ডিক্লেয়েশনের সময় ভ্যালু ইনিশিয়ালাইজ না করে ফাঁকা রেখে দেওয়া ফাইনাল ভ্যারিয়েবল। এটিকে অবজেক্ট তৈরির সময় শুধু এবং শুধুমাত্র ক্লাসের **Constructor** ব্লকের ভেতরের লাইনে ইনিশিয়ালাইজ করা সম্ভব।

### 🎓 IIUC Exams Spotlight:
> *Detail the concept of blank final variables with appropriate Java statements.*
> Write down the Student PAN_CARD_NUMBER constructor injection example verbatim. Highlight that once construction finishes, the variable is secured.
`,
    reviewQuestions: [
      "Prove with code that final methods are successfully inherited but cannot be overridden in Java subclasses.",
      "Explain the compile-time errors produced when trying to reassign a final variable, override a final method, or extend a final class.",
      "Justify the role of Constructors and static blocks in initializing Blank and Static Blank final variables."
    ],
    quizzes: [
      {
        question: "জাভাতে একটি মেথডকে 'final' ডিক্লেয়ার করলে সাব-ক্লাসের উপর কোন রেস্ট্রিকশন বা কড়াকড়ি লাইসেন্স কার্যকর হয়?",
        options: [
          { label: "সাব-ক্লাস মেথডটি কখনোই দেখতে বা পড়তে পারবে না", isCorrect: false },
          { label: "সাব-ক্লাস মেথডটি উত্তরাধিকার সূত্রে ব্যবহার করতে পারবে কিন্তু একে কাস্টম ডিজাইনে ওভাররাইড বা পরিবর্তন করতে পারবে না", isCorrect: true },
          { label: "মেথডটির রিটার্ন টাইপ পরিবর্তন করে রান করতে হবে", isCorrect: false },
          { label: "মেথডটির আর্গুমেন্ট ও প্যারামিটার সংখ্যা জিরো হয়ে যায়", isCorrect: false }
        ],
        explanation: "ফাইনাল মেথডের ইমপ্লিমেন্টেশন লকড। চাইল্ড মেম্বার এটি ইনহেরিট করতে পারলেও একে নতুন মেথড কোড ব্লক দিয়ে ওভাররাইড করা অসম্ভব।"
      },
      {
        question: "Blank Final Variable বা অনিরূপিত ফাইনাল ভেরিয়েবল ইনিশিয়ালাইজ করার জন্য একমাত্র আইনগত স্থান কোনটি?",
        options: [
          { label: "যেকোনো সাধারণ মেথডের প্রথম লাইন", isCorrect: false },
          { label: "শুধুমাত্র সংশ্লিষ্ট ক্লাসের কনস্ট্রাক্টর (Constructor) ব্লকের ভেতরে", isCorrect: true },
          { label: "স্ট্যাটিক মেইন মেথডের শেষ স্টেটমেন্ট", isCorrect: false },
          { label: "মেমরি রিলিজ করার আগের মুহূর্ত", isCorrect: false }
        ],
        explanation: "ব্ল্যাঙ্ক ফাইনাল ভেরিয়েবল ঘোষণার সময় মান ফাঁকা থাকে। অবজেক্ট স্টেট তৈরি করার শেষ মুহূর্ত অবধি এর সময় থাকে, যার কারণে কেবল ক্লাসের কনস্ট্রাক্টরের মাঝেই একে স্পেসিফিক ইনিশিয়ালাইজ করা জাভায় বৈধ।"
      },
      {
        question: "নিচের কোন ধরনের ক্লাস থেকে ইনহেরিটেন্সের মাধ্যমে সাব-ক্লাস সম্প্রসারণ করা সম্পূর্ণ নিষিদ্ধ?",
        options: [
          { label: "Abstract Classes", isCorrect: false },
          { label: "Final Classes", isCorrect: true },
          { label: "Static Inner Classes", isCorrect: false },
          { label: "Public Interface", isCorrect: false }
        ],
        explanation: "ফাইনাল ক্লাস হলো সুরক্ষিত হাইয়ারার্কির শেষ পর্যায়। কম্পাইলার এর থেকে কোনো শিশু বা সাব-ক্লাস তৈরি করার extends মেকানিজম করতে দেয় না।"
      }
    ]
  }
];
