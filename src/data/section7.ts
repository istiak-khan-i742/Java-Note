import { Lesson } from './lessons';

export const section7Lessons: Lesson[] = [
  {
    id: "s7-overview",
    title: "Section VII Overview & Syllabus Checklist",
    description: "Syllabus Checklist and Masterclass Navigations for Section VII: Packages & Encapsulation",
    content: `
# 📙 Section VII: Packages & Encapsulation Masterclass

Welcome to **Section VII: Packages & Encapsulation**. This final masterclass section covers the organizational and security pillars of Java's Object-Oriented nature. By grouping classes cleanly using packages, controlling access levels using modifiers, and protecting object states via encapsulation, you will build highly professional, modular, and enterprise-grade Java systems.

This module compiles textbook definitions, verbatim University classroom slide code, interactive visibility matrices, and assessment exercises designed to guarantee your success in IIUC university examinations.

---

### 📋 Section VII Course Syllabus Checklist
Below is a checkbox matrix indicating how every topic in the official course syllabus on Packages and Encapsulation is systematically covered inside our masterclass:

- [x] **Core Concept of Encapsulation & Capsule Analogy** ➜ Covered in *Lesson 37: Data Encapsulation & Hiding*
- [x] **Java Packages Foundations** ➜ Covered in *Lesson 33: Java Packages & Subpackages*
- [x] **Built-in Package Ecosystem (java, lang, util, awt, io, etc.)** ➜ Covered in *Lesson 33: Java Packages & Subpackages*
- [x] **User-defined Packages Creation & Simple compilation** ➜ Covered in *Lesson 33: Java Packages & Subpackages*
- [x] **Package Imports: Wildcard \`import package.*\`** ➜ Covered in *Lesson 34: Methods of Accessing Packages*
- [x] **Package Imports: Specific Class \`import package.classname\`** ➜ Covered in *Lesson 34: Methods of Accessing Packages*
- [x] **Fully Qualified Names (Resolving Ambiguous Clashing)** ➜ Covered in *Lesson 34: Methods of Accessing Packages*
- [x] **Subpackages Mechanics & Import Exclusions** ➜ Covered in *Lesson 33 & 34*
- [x] **Access Modifiers Scope (Private, Default, Protected, Public)** ➜ Covered in *Lesson 35: Access Modifiers & Visibility Matrix*
- [x] **Deep Dive into the 4 Access Modifiers** ➜ Covered in *Lesson 36: Access Modifiers in Action*
- [x] **Role of Private Constructors & Preventing Instantiation** ➜ Covered in *Lesson 36: Access Modifiers in Action*
- [x] **Read-Only Class Patterns (Getter ONLY)** ➜ Covered in *Lesson 37: Data Encapsulation & Hiding*
- [x] **Write-Only Class Patterns (Setter ONLY)** ➜ Covered in *Lesson 37: Data Encapsulation & Hiding*
- [x] **Verbatim Student & Test Code Templates** ➜ Covered in *Lesson 37: Data Encapsulation & Hiding*
- [x] **Fully Encapsulated Bank Account Vault Demonstration** ➜ Covered in *Lesson 37: Data Encapsulation & Hiding*

---

### 🗺️ Masterclass Lesson Navigation
Each lesson has been engineered to provide an engaging learning experience:

1. **Lesson 33: Introduction to Java Packages & Subpackages**
   * Categorizing classes, built-in packages tree, user-defined packages, package keyword, and nested subpackage hierarchies.
2. **Lesson 34: Three Ways of Accessing Packages**
   * Master package access via wildcard imports, specific class imports, or fully qualified names to resolve Date name collisions.
3. **Lesson 35: Java Access Modifiers & Visibility Matrix**
   * Delve into the core accessibility levels of classes, fields, and constructors, exploring the ultimate classroom matrix table.
4. **Lesson 36: Access Modifiers in Action & Private Constructors**
   * Experience working private, default, protected, and public structures in multi-project schemes, plus the security of private constructors.
5. **Lesson 37: Data Encapsulation, Read-Only, Write-Only & Secure Account Vaults**
   * Achieve data hiding by creating fully encapsulated beans, write-only configurations, validation rules, and double-precision bank account ledgers.
`,
    cards: [
      {
        icon: "📦",
        title: "Java Packages",
        desc: "Organizing coordinate classes and interfaces into distinct directory clusters to maximize maintainability."
      },
      {
        icon: "🛡️",
        title: "Access Control",
        desc: "Leveraging Private, Default, Protected, and Public descriptors to secure program variables."
      },
      {
        icon: "🗝️",
        title: "Private Constructor",
        desc: "Locking class constructors to block global external instantiation entirely."
      },
      {
        icon: "💊",
        title: "Data Encapsulation",
        desc: "Securing object properties behind private walls accessed exclusively via setter and getter validation filters."
      }
    ]
  },
  {
    id: "packages-intro",
    title: "Lesson 33: Java Packages & Subpackages",
    description: "Learn how to categorize similar classes, explore the built-in package system, and create subpackages.",
    cards: [
      {
        icon: "📂",
        title: "Namespace Control",
        desc: "Packages act as class folders, preventing naming collisions across library APIs."
      },
      {
        icon: "🧬",
        title: "Syllabus Built-ins",
        desc: "Familiarity with foundational core packages like java.lang, java.util, java.io, and java.awt."
      },
      {
        icon: "🧩",
        title: "Subpackage Trees",
        desc: "Nesting directories underneath parent packages to structure large-scale frameworks."
      }
    ],
    content: `
# 📦 Lesson 33: Foundations of Java Packages & Subpackages

## 🏛️ 1. What is a Java Package?
A **Java Package** is a logical container that groups together a set of related classes, interfaces, and sub-packages. Think of it like a folder on your computer's storage drive: just as you keep photos in one folder and homework documents in another, a Java package groups related program files together.

\`\`\`
                              ┌──────────────────┐
                              │   java package   │
                              └────────┬─────────┘
                                       │
                ┌──────────────────────┼──────────────────────┐
                ▼                      ▼                      ▼
           ┌──────────┐           ┌──────────┐           ┌──────────┐
           │   lang   │           │   util   │           │   awt    │  (Subpackages)
           └────┬─────┘           └────┬─────┘           └────┬─────┘
                │                      │                      │
           ┌────┴─────┐           ┌────┴─────┐           ┌────┴─────┐
           │  System  │           │ArrayList │           │  Button  │  (Classes)
           │  String  │           │   Map    │           └──────────┘
           └──────────┘           └──────────┘
\`\`\`

---

## 🚀 2. Distinct Advantages of Java Packages
1. **Easy Maintenance**: Categorizes structures so developers can find and maintain classes effortlessly.
2. **Access Protection**: Packages work with access modifiers to hide internal classes and protect them from external access.
3. **Removing Naming Collisions**: You can have two classes with the exact same name (e.g., \`Date\`) in your project, as long as they reside in different packages (such as \`java.util.Date\` and \`java.sql.Date\`).

---

## 🛠️ 3. Categorizing Java Packages
Packages in Java can be split into two main forms:

### A. Built-in Packages (Standard Java API)
Java provides a rich collection of pre-made classes and utilities categorized into packages. Some of the most common are:
* **\`java.lang\`**: Contains classes fundamental to the design of the language (e.g., \`System\`, \`String\`, \`Math\`). *Note: This package is automatically imported into every Java file by default; no import statement is required!*
* **\`java.util\`**: Contains utility collection framework classes (e.g., \`ArrayList\`, \`HashMap\`, \`Date\`).
* **\`java.io\`**: Handles input and output streams for file reading and writing (e.g., \`File\`, \`InputStream\`, \`OutputStream\`).
* **\`java.awt\`** & **\`javax.swing\`**: Support GUI program components, windowing, and action events (e.g., \`Button\`, \`JFrame\`).
* **\`java.net\`**: Contains networking utility operations and socket channels.

### B. User-Defined Packages
These are custom packages designed and created by you to organize your own codebase.

---

## 📝 4. Creating and Compiling a Package Class
To put a class inside a package, use the **\`package\`** keyword at the very top of your source file. It must be the absolute first statement in the file, preceding any imports!

### Verbatim Classroom Example (\`Simple.java\`)
\`\`\`java
// save as Simple.java
package mypack;

public class Simple {
    public static void main(String args[]) {
        System.out.println("Welcome to package");
    }
}
\`\`\`

### 💡 Compilation and Execution Trick:
To compile this class so that the compiler automatically creates the \`mypack\` directory structure and places the compiled class inside, use the **\`-d\`** flag:
\`\`\`bash
javac -d . Simple.java
\`\`\`
* The \`-d\` (destination) option specifies where to save the generated package directory.
* The \`.\` tells the compiler to create the package sub-folder structure root in the *current directory*.

To run the compiled class, you must use its **Fully Qualified Class Name**:
\`\`\`bash
java mypack.Simple
\`\`\`
*Output*: \`Welcome to package\`

---

## 🧬 5. Subpackages inside Java
A package created inside another package is called a **subpackage**. Subpackages help organize your code even further as projects scale.

For example, when Sun Microsystems created the Java platform, they created the parent package \`java\`. To avoid filing hundreds of miscellaneous classes in one place, they grouped class types into subpackages:
* Input/Output related classes (e.g., \`Reader\`, \`Writer\`) went into \`java.io\`.
* Collections and Data systems went into \`java.util\`.
* Networking sockets (e.g., \`Socket\`, \`ServerSocket\`) went into \`java.net\`.

### Example of Subpackage Declaration:
\`\`\`java
package java.lang;

class Simple {
    public static void main(String args[]) {
        System.out.println("Hello subpackage");
    }
}
\`\`\`
`,
    quizzes: [
      {
        question: "জাভায় প্যাকেজ ডিক্লেয়ারেশন বা 'package mypack;' স্টেটমেন্টটি কোডের কোন লাইনে থাকা ফিজিক্যালি বাধ্যতামূলক?",
        options: [
          { label: "কোডের যেকোনো স্থানে ক্লাসের পূর্বে বা পরে লিখলেই হবে", isCorrect: false },
          { label: "অবশ্যই ক্লাসের বডি স্ক্রিপ্টের ভেতরে প্রথম লাইনে লিখতে হবে", isCorrect: false },
          { label: "যেকোনো ইমপোর্ট মেথড বা কোড সেগমেন্টের পূর্বে ফাইলের প্রথম লাইন বা স্টেটমেন্ট হিসেবে থাকতে হবে", isCorrect: true },
          { label: "সর্বদা main() মেথডের প্রথম প্যারামিটার সিকোয়েন্সে লিখতে হবে", isCorrect: false }
        ],
        explanation: "প্যাকেজ ডিক্লেয়ারেশন কি-ওয়ার্ডটি যেকোনো জাভা সোর্স ফাইলের একদম প্রথম নন-কমেন্ট স্টেটমেন্ট হওয়া বাধ্যতামূলক। এর সাহায্যে ফাইলটি কোন ডিরেক্টরির বা প্যাকেজের অন্তর্ভুক্ত তা জাভা কম্পাইলার শুরুতে নির্ধারণ করতে পারে।"
      },
      {
        question: "জাভার বিল্ট-ইন প্যাকেজগুলোর মধ্যে কোন প্যাকেজটি প্রতিটি সোর্স ফাইলে জাভা কম্পাইলার স্বয়ংক্রিয়ভাবে ইমপোর্ট বা রিসিভ করে নেয়?",
        options: [
          { label: "java.util", isCorrect: false },
          { label: "java.io", isCorrect: false },
          { label: "java.awt", isCorrect: false },
          { label: "java.lang", isCorrect: true }
        ],
        explanation: "java.lang প্যাকেজটিতে সিস্টেম, স্ট্রিং, টাইপ র‍্যাপার বা ম্যাথ সংক্রান্ত সবচেয়ে মৌলিক ক্লাসগুলো থাকে। এ কারণে জাভা রানটাইম প্রতি ফাইলে এটিকে অটোমেটিকালি ইমপোর্ট করে নেয়।"
      }
    ],
    reviewQuestions: [
      "Define Java Packages. Explain the difference between Built-in packages and User-defined packages with three examples each.",
      "Summarize the advantages of using Java Packages in large team projects.",
      "How does the compiler handle 'subpackages'? Discuss why importing a parent package does not automatically import nested subpackages."
    ]
  },
  {
    id: "packages-access",
    title: "Lesson 34: Methods of Accessing Packages",
    description: "Learn and test the three primary ways to access package files, and resolve identical class name conflicts.",
    cards: [
      {
        icon: "🌟",
        title: "import package.*",
        desc: "Using wildcards to import all sibling classes of a package together in one line."
      },
      {
        icon: "🎯",
        title: "Specific Import",
        desc: "Accessing exactly one named target class explicitly, which is the preferred production code style."
      },
      {
        icon: "🔍",
        title: "Fully Qualified Name",
        desc: "Calling pack.A directly inline, bypassing the need for import statements."
      }
    ],
    content: `
# 📦 Lesson 34: Three Ways of Accessing Packages

There are three ways to access a class or interface from outside its package:
1. **Using wildcard import** (\`import package.*;\`)
2. **Using specific class import** (\`import package.classname;\`)
3. **Using fully qualified name** (e.g., \`pack.A obj = new pack.A();\`) Let's study how each works with verbatim textbook slide examples.

---

## 1. Import using Wildcard (\`import pack.*;\`)
When you use **\`package.*\`**, all classes and interfaces in that package become accessible. 

⚠️ **Crucial Note**: Sibling subpackages are **NOT** imported by wildcards! Only immediate child classes are loaded.

### Classroom Code Demonstration 1
\`\`\`java
// Saved in file A.java
package pack;

public class A {
    public void msg() {
        System.out.println("Hello");
    }
}
\`\`\`

\`\`\`java
// Saved in file B.java
package mypack;
import pack.*; // Wildcard import pulls in Class A!

class B {
    public static void main(String args[]) {
        A obj = new A(); // Direct name resolution
        obj.msg();
    }
}
\`\`\`
*Output*: \`Hello\`

---

## 2. Import using Specific Class (\`import pack.A;\`)
By importing a specific class name, only that single class is declared and made accessible in your source file. This is the preferred style in Enterprise programming because it minimizes classloader lookup times.

### Classroom Code Demonstration 2
\`\`\`java
// Saved in file A.java
package pack;

public class A {
    public void msg() {
        System.out.println("Hello");
    }
}
\`\`\`

\`\`\`java
// Saved in file B.java
package mypack;
import pack.A; // Only class A is imported explicitly!

class B {
    public static void main(String args[]) {
        A obj = new A();
        obj.msg();
    }
}
\`\`\`
*Output*: \`Hello\`

---

## 3. Using Fully Qualified Name (\`pack.A\`)
If you use a **Fully Qualified Name**, you do not need to use an \`import\` statement at all. However, you must write the complete package structure prefix every time you reference the class.

This is highly useful when **two packages have identical class names**. For example, both \`java.util\` and \`java.sql\` contain a class named \`Date\`. If you need to use both in the same file, you must use their fully qualified names to avoid naming conflicts:

\`\`\`java
java.util.Date utilDate = new java.util.Date();
java.sql.Date sqlDate = new java.sql.Date(longTime);
\`\`\`

### Classroom Code Demonstration 3
\`\`\`java
// Saved in file A.java
package pack;

public class A {
    public void msg() {
        System.out.println("Hello");
    }
}
\`\`\`

\`\`\`java
// Saved in file B.java
package mypack;

class B {
    public static void main(String args[]) {
        // Direct instantiation using fully qualified path
        pack.A obj = new pack.A(); 
        obj.msg();
    }
}
\`\`\`
*Output*: \`Hello\`
`,
    quizzes: [
      {
        question: "যদি 'mypack' ফাইলে 'import pack.*;' ডিক্লেয়ার করা হয়, তবে 'pack' প্যাকেজের ভেতর থাকা সাব-প্যাকেজের ক্লাসগুলো রিড হবে কি?",
        options: [
          { label: "হ্যাঁ, সাব-প্যাকেজের ক্লাসগুলোও একযোগে অটো ইমপোর্ট হয়ে যাবে", isCorrect: false },
          { label: "না, প্যাকেজের ওয়াইল্ডকার্ড ইমপোর্ট মেথড সাব-প্যাকেজ ইমপোর্ট করে না; কেবল ওই প্যাকেজের ক্লাসগুলোকে ইমপোর্ট করে", isCorrect: true },
          { label: "হ্যাঁ, কিন্তু এর জন্য সাব-প্যাকেজে বিশেষ পারমিশন থাকতে হবে", isCorrect: false },
          { label: "ওয়াইল্ডকার্ড অ্যাক্সেস করলে সোর্স ফাইল স্বয়ংক্রিয়ভাবে ক্র্যাশ হয়ে যায়", isCorrect: false }
        ],
        explanation: "জাভায় 'package.*' কেবল ওই মূল প্যাকেজের অন্তর্গত ক্লাস এবং ইন্টারফেসগুলোকে লোড করে। ভেতরের কোনো সাব-প্যাকেজ কিন্তু ইমপোর্ট হয় না। সাব-প্যাকেজ ব্যবহার করতে চাইলে আলাদা করে 'import pack.subpack.*;' লিখতে হবে।"
      },
      {
        question: "আপনার সোর্স ফাইলে একই সাথে 'java.util.Date' এবং 'java.sql.Date' উভয় ক্লাস ব্যবহার করতে হবে। কনফ্লিক্ট এড়ানোর জন্য সবচেয়ে ক্লিন বা রিলেয়েবল সলিউশন কোনটি?",
        options: [
          { label: "দুটি প্যাকেজই ওয়াইল্ডকার্ড '*' দিয়ে ইমপোর্ট করব", isCorrect: false },
          { label: "যেকোনো একটিকে কোডের শেষে কনভার্ট মেথড দিয়ে রিনেম করব", isCorrect: false },
          { label: "ডিফাইন করার সময় 'Fully Qualified Name' বা পূর্ণ পাথ উল্লেখ করে ডিক্লেয়ার করব (উদা: java.util.Date)", isCorrect: true },
          { label: "জাভা একই ফাইলে একই নামের দুটি ক্লাস একযোগে কোনোভাবেই সাপোর্ট করে না", isCorrect: false }
        ],
        explanation: "একই নামের দুটি ক্লাস থাকলে কম্পাইলার কোনটিকে ডাকছেন তা বুঝতে পারে না। এ ধরনের ক্ষেত্রে ইমপোর্ট স্টেটমেন্ট না লিখে সরাসরি কোডের লাইনের মধ্যে 'Fully Qualified Name' (পূর্ণ প্যাকেজ পাথসহ) ব্যবহার করে সমাধান করতে হয়।"
      }
    ],
    reviewQuestions: [
      "Compare the three package access techniques with code implementations for each.",
      "Explain the exact purpose of 'Fully Qualified Name' and illustrate with an identical Class Name conflict resolution scenario.",
      "What is the output if you declare class B under package mypack, try to import pack.*, and the compiled class A under pack is NOT declared with the public keyword? Support with Access analysis."
    ]
  },
  {
    id: "access-modifiers-matrix",
    title: "Lesson 35: Access Modifiers & Visibility Matrix",
    description: "Study and map the four Java Access Modifiers and their visibility states across classes, subclasses, and external package boundaries.",
    cards: [
      {
        icon: "🔒",
        title: "private modifier",
        desc: "Strongest barrier; locked tightly and accessible only inside the declared class boundary."
      },
      {
        icon: "📦",
        title: "default modifier",
        desc: "Package-private style; shared with package siblings, but invisible outside the package structure."
      },
      {
        icon: "🛡️",
        title: "protected modifier",
        desc: "Family inheritance system; visible inside packages, and to subclasses outside the package."
      },
      {
        icon: "🌍",
        title: "public modifier",
        desc: "Completely open; globally accessible across any module or program scope."
      }
    ],
    content: `
# 📦 Lesson 35: Java Access Modifiers & Visibility Matrix

## 🔍 1. Understanding Access Modifiers
In Java, **Access Modifiers** specify the accessibility, visibility, and scope of a class, constructor, member variable, or method. These keywords let you restrict access to classes or members to enforce encapsulation and security.

Java provides four distinct visibility levels:
1. **Private**: Accessible only within the body of the class where it is declared.
2. **Default**: Accessible only inside the package containing the class. (Also known as package-private).
3. **Protected**: Accessible within the same package, and by child subclasses in other packages.
4. **Public**: Globally accessible throughout the entire run scope of the application!

---

## 🏛️ 2. The Comprehensive Visibility Matrix
The table below maps the visibility levels of each access modifier. Memorize this matrix, as it is a common topic in university exam questions!

| Access Modifier | Within Class | Within Package | Outside Package by Subclass (Inheritance Only) | Outside Package Globally |
|:---|:---:|:---:|:---:|:---:|
| 🔴 **\`private\`** | **YES** | **NO** | **NO** | **NO** |
| 🟠 **\`default\`** | **YES** | **YES** | **NO** | **NO** |
| 🟡 **\`protected\`**| **YES** | **YES** | **YES** | **NO** |
| 🟢 **\`public\`** | **YES** | **YES** | **YES** | **YES** |

---

## 🚦 3. Summary of Restrictions
* **\`private\`**: Accessible only inside class.
* **\`default\`** (when no modifier is specified): Accessible only within package.
* **\`protected\`**: Accessible within same package, and by subclasses in different packages.
* **\`public\`**: Open to all classes everywhere.

---

## 🗺️ 4. Classroom Technical Caveat Note
* **Class Constraints**: A standard, top-level class can **NOT** be declared as \`private\` or \`protected\`. It can only be \`public\` or \`default\`. 
* **Nested Classes**: The exception to this rule is **nested classes** (classes declared inside other classes), which *can* be declared as \`private\` or \`protected\`.
`,
    quizzes: [
      {
        question: "জাভায় যদি কোনো ভেরিয়েবল বা মেথডের আগে কোনো অ্যাক্সেস মডিফায়ার উল্লেখ না করা হয় (উদা: 'int count;'), তবে সেটির ডিফল্ট অ্যাক্সেস লেভেল কোনটি হয়?",
        options: [
          { label: "Private (অটোমেটিক্যালি প্রাইভেট হয়ে যায়)", isCorrect: false },
          { label: "Protected (কেবল চাইল্ড ক্লাস এক্সেস পাবে)", isCorrect: false },
          { label: "Default / Package-Private (কেবল নিজের প্যাকেজ সিবলিংস এক্সেস করতে পারবে)", isCorrect: true },
          { label: "Public (সবার জন্য এক্সেস উন্মুক্ত হয়)", isCorrect: false }
        ],
        explanation: "জাভায় অ্যাক্সেস স্পেসিফায়ার উল্লেখ না করলে সেটি 'Default' অ্যাক্সেস কন্ট্রোল পায়। এই অবস্থায় মেথড বা ভেরিয়েবলটি কেবল ওই নির্দিষ্ট প্যাকেজের মেম্বার রাইট হিসেবে এক্সেস করা সম্ভব হয়।"
      },
      {
        question: "Protected অ্যাক্সেস মডিফায়ারের ক্ষেত্রে নিচের কোন এক্সেস স্টেটমেন্টটি শতভাগ সত্য?",
        options: [
          { label: "এটি বাইরের যেকোনো প্যাকেজের যেকোনো ক্লাস থেকে সরাসরি কল করা যায়", isCorrect: false },
          { label: "এটি একই প্যাকেজে এক্সেসযোগ্য এবং অন্য প্যাকেজের কেবল চাইল্ড ক্লাস (Subclass) থেকে ইনহেরিটেন্সের মাধ্যমে অ্যাক্সেস করা যায়", isCorrect: true },
          { label: "সাব-ক্লাসেও এটিকে অ্যাক্সেস করা একদম অসম্ভব", isCorrect: false },
          { label: "এটি কেবল প্রাইভেট মেথডের ভেতরেই অ্যাক্টিভ বা ভিজিবল থাকে", isCorrect: false }
        ],
        explanation: "Protected-এর বিশেষত্ব হলো এটি ফ্যামিলি বোনড শেয়ারিং এর মত। কারেন্ট প্যাকেজের সবাই এবং অন্য প্যাকেজের ক্লাস যদি ইনহেরিট করে তৈরি হয় (Extends Class), তবেই চাইল্ড অবজেক্টের দ্বারা এক্সেস করা যায়।"
      }
    ],
    reviewQuestions: [
      "Draw the ultimate Access Modifier Visibility Matrix Table from memory.",
      "Justify the decision to disallow declaring top-level outer classes as 'private' or 'protected'.",
      "Draft a hypothetical scenario where 'default' visibility is preferred over 'protected' visibility."
    ]
  },
  {
    id: "access-modifiers-practice",
    title: "Lesson 36: Access Modifiers & Private Constructors",
    description: "Write, test, and analyze code examples for each modifier, and discover how Private Constructors prevent class instantiation.",
    cards: [
      {
        icon: "❌",
        title: "Private Compile Error",
        desc: "Attempting to access private variables from outside the class triggers a compiletime error."
      },
      {
        icon: "🧱",
        title: "Role of Private Constructor",
        desc: "Declaring A() private prevents 'new A()' execution externally, a pattern core to Singletons."
      },
      {
        icon: "🌿",
        title: "Protected Extends A",
        desc: "Allowing a subclass B in package 'mypack' to access A's protected methods via inheritance."
      }
    ],
    content: `
# 📦 Lesson 36: Access Modifiers & Private Constructors in Practice

Let's study how access levels behave in actual code by compiling verbatim examples from the university's lecture slides.

---

## 🚫 1. The \`private\` Access Modifier
The \`private\` modifier restricts access so that members can only be used within the class where they are declared. If you try to access a private member from another class, Java will throw a compiler error.

### Slide Code Example with Visibility Blocks
\`\`\`java
class A {
    private int data = 40; // Private field
    private void msg() {   // Private method
        System.out.println("Hello java");
    }
}

public class Simple {
    public static void main(String args[]) {
        A obj = new A();
        
        // COMPILE-TIME ERROR! Cannot access private variables externally!
        System.out.println(obj.data); 
        
        // COMPILE-TIME ERROR! Cannot access private methods externally!
        obj.msg(); 
    }
}
\`\`\`
*Output on Compile Attempt*:
\`\`\`text
Simple.java:10: error: data has private access in A
        System.out.println(obj.data);
                              ^
Simple.java:13: error: msg() has private access in A
        obj.msg();
           ^
2 errors
\`\`\`

---

## 🔒 2. The Role of Private Constructors
If you declare your class's constructor as \`private\`, you cannot create instances of that class using the \`new\` keyword from outside!

This is an extremely useful architectural pattern. It is used in software design patterns like the **Singleton Design Pattern** (ensuring only one instance of a class is ever created) or utility classes filled only with static methods.

### Classroom Code Example with Private Constructor
\`\`\`java
class A {
    private A() { // Private Constructor!
        // No code can execute "new A()" outside the class body
    }
    
    void msg() {
        System.out.println("Hello java");
    }
}

public class Simple {
    public static void main(String args[]) {
        // COMPILE-TIME ERROR! Instance creation is blocked because constructor is private!
        A obj = new A(); 
    }
}
\`\`\`

---

## 📦 3. The \`default\` Access Modifier
If you do not specify an access modifier for a class or its members, Java assigns it **\`default\`** access. Default members are only visible to other classes within the *same package*. Other packages are blocked from accessing them.

### Classroom Code Example with Default Access
\`\`\`java
// Saved in file A.java
package pack;

class A { // Default access class (not public)
    void msg() { // Default access method
        System.out.println("Hello");
    }
}
\`\`\`

\`\`\`java
// Saved in file B.java
package mypack;
import pack.*; // Imports classes from package pack

class B {
    public static void main(String args[]) {
        // COMPILE-TIME ERROR! Class A has default access and is invisible in mypack!
        A obj = new A(); 
        
        // COMPILE-TIME ERROR! Method msg() is default and invisible here!
        obj.msg(); 
    }
}
\`\`\`

---

## 🛡️ 4. The \`protected\` Access Modifier
Protected members are visible to all classes in the *same package*, but are only visible to classes in *other packages* if they import the parent package and **inherit** from the class (i.e., using \`extends\`).

### Verbatim Protected Example
\`\`\`java
// Saved in file A.java
package pack;

public class A {
    // Protected method, visible via inheritance outside package
    protected void msg() { 
        System.out.println("Hello");
    }
}
\`\`\`

\`\`\`java
// Saved in file B.java
package mypack;
import pack.*;

class B extends A { // Inheriting from parent class A
    public static void main(String args[]) {
        B obj = new B(); // Instantiating the subclass B
        obj.msg(); // Accessible through inheritance!
    }
}
\`\`\`
*Output of B*: \`Hello\`

---

## 🟢 5. The \`public\` Access Modifier
The \`public\` modifier has the widest scope of all. Public classes and members are visible and accessible to any class inside or outside their package.

\`\`\`java
// Saved in file A.java
package pack;

public class A {
    public void msg() { // Declared with public!
        System.out.println("Hello");
    }
}
\`\`\`

\`\`\`java
// Saved in file B.java
package mypack;
import pack.*;

class B {
    public static void main(String args[]) {
        A obj = new A(); // Accessible since A is public
        obj.msg();       // Accessible since msg() is public
    }
}
\`\`\`
*Output of B*: \`Hello\`
`,
    quizzes: [
      {
        question: "যদি কোনো ক্লাসের কন্সট্রাক্টর 'private' ডিক্লেয়ার করা হয়, তবে কি ঘটবে?",
        options: [
          { label: "ক্লাসটি ওওপি রুলস ভঙ্গ করার অপরাধে আর কম্পাইল হবে না", isCorrect: false },
          { label: "বাহির থেকে 'new Class()' কি-ওয়ার্ড ব্যবহার করে অবজেক্ট তৈরি করার চেষ্টা কম্পাইল-টাইম ইরর ঘটিয়ে ব্লক হয়ে যাবে", isCorrect: true },
          { label: "ক্লাসটি স্বয়ংক্রিয়ভাবে অ্যারিরুপে ডাটা সংরক্ষণ করবে", isCorrect: false },
          { label: "এটি অন্য চাইল্ড ক্লাসকে বাধ্য করবে কেবল প্যারেন্টিং মেথডে রান করার জন্য", isCorrect: false }
        ],
        explanation: "প্রাইভেট ক্লাসের কন্সট্রাক্টর থাকলে ওই ক্লাসের বাইরে থেকে 'new' দিয়ে অবজেক্ট বা ইনস্ট্যান্স ডিক্লেয়ার করা যায় না। এটি সিঙ্গেলটন ক্লাস ডিজাইন করতে সবচেয়ে দরকারী মেকানিজম।"
      },
      {
        question: "প্যাকেজ 'pack' এর ভেতর default ক্লাস 'A' রয়েছে। প্যাকেজ 'mypack' থেকে 'import pack.*;' করানোর পরে Class B-এর ভেতর 'A obj = new A();' রিড চেষ্টা করলে নিচে কোনটি ঘটবে?",
        options: [
          { label: "কোডটি রান হবে এবং ক্লাসের অ্যাড্রেস প্রিন্ট করবে", isCorrect: false },
          { label: "লং কন্সট্রাক্টর টাইপ ম্যাচিং ওয়ার্নিং দিবে", isCorrect: false },
          { label: "কম্পাইল টাইম ইরর আসবে, কারণ ক্লাস A ডিফাইন করা হয়েছে ডিফল্ট অ্যাক্সেসে, যা প্যাকেজের বাইরে ইনভিজিবল বা অদৃশ্য", isCorrect: true },
          { label: "জাভা রানটাইম অটোমেটিক ক্লাসটিকে রান করাবে কিন্তু অবজেক্ট বানাতে দিবে না", isCorrect: false }
        ],
        explanation: "কোনো ক্লাস ডিফল্ট এক্সেসে বডি ডিক্লেয়ার করা থাকলে তার ভিজিবিলিটি কেবল তার নিজের প্যাকেজের ভেতরেই সীমাবদ্ধ থাকে। প্যাকেজ বাউণ্ডারি অতিক্রম করতেই সেটি কম্পাইল-টাইম ইরর দেয়।"
      }
    ],
    reviewQuestions: [
      "Review why private class fields throw compile errors when accessed outside. Write a program illustrating this.",
      "Detail the mechanics of the Singleton Pattern using private constructors in Java.",
      "How is subclass inheritance used to access 'protected' class features across separate packages? Draft a compilable test case."
    ]
  },
  {
    id: "encapsulation-practice",
    title: "Lesson 37: Data Encapsulation & Secure Hiding",
    description: "Achieve true data hiding. Develop read-only and write-only configurations, build validation rules, and construct a secure Account ledger.",
    cards: [
      {
        icon: "💊",
        title: "Capsule Analogy",
        desc: "Encapsulation binds data and method systems together into a singular capsule unit inside java classes."
      },
      {
        icon: "📈",
        title: "Getter/Setter Validation",
        desc: "Using the setter method to filter and validate input values before writing to fields."
      },
      {
        icon: "📊",
        title: "Read/Write Controls",
        desc: "Easily design read-only (getter only) or write-only (setter only) classes to protect assets."
      }
    ],
    content: `
# 📦 Lesson 37: Data Encapsulation & Secure Hiding

## 🧠 1. What is Encapsulation inside Java?
**Encapsulation** is the process of wrapping data (variables) and code (methods) together into a single, cohesive unit. 

The standard textbook analogy is a **medicine capsule**: just as a capsule wraps and protects a mixture of active medicines inside, a Java class wraps and protects its fields and methods.

### 🧪 Implementing Encapsulation in Java
To create a fully encapsulated class in Java, we:
1. Declare all the class's data members (instance variables) as **\`private\`**.
2. Provide **\`public\`** getter and setter methods to read and write the fields.

---

## 🏛️ 2. Key Advantages of Encapsulation
* **Data Hiding**: Other classes cannot access private class fields directly. They must use your getter and setter methods, hiding how the data is stored.
* **Granular Access Control**: You can make a class **Read-Only** (by only providing getter methods) or **Write-Only** (by only providing setter methods).
* **Data Validation**: You can write validation logic inside setter methods to control what values are accepted. For example, you can block setting a negative value for age:
  \`\`\`java
  public void setAge(int age) {
      if (age > 0) {
          this.age = age;
      }
  }
  \`\`\`
* **Testing Ease**: Encapsulated classes are easy to mock and unit test.

---

## 🚀 3. Verbatim Classroom Example 1 (\`Student.java\`)
Let's study the textbook code implementing a fully encapsulated Student class and its test class:

\`\`\`java
// Save as Student.java
package encap;

public class Student {
    // Private variable; cannot be accessed directly outside the class
    private String name; 
    
    // Getter method for name
    public String getName() {
        return name;
    }
    
    // Setter method for name
    public void setName(String name) {
        this.name = name; // 'this' keyword resolves the naming conflict
    }
}
\`\`\`

\`\`\`java
// Save as Test.java
package encap;

class Test {
    public static void main(String[] args) {
        Student s = new Student();
        
        // Setting value in the name member
        s.setName("CCE"); 
        
        // Getting value of the name member
        System.out.println(s.getName()); 
    }
}
\`\`\`
*Output*: \`CCE\`

---

## 🛡️ 4. Read-Only & Write-Only Architectural Forms

Encapsulation lets you control whether properties are read-only, write-only, or both.

### A. Read-Only Class (Getter Only)
By omitting setter methods entirely, we prevent other classes from modifying class variables.
\`\`\`java
public class Student {
    // Private state is hardcoded but accessible via getCollege()
    private String college = "IIUC"; 
    
    public String getCollege() {
        return college;
    }
}
\`\`\`
*Note*: Attempting \`s.setCollege("CU");\` will throw a compile-time error!

### B. Write-Only Class (Setter Only)
By omitting getter methods, we allow other classes to update properties, but prevent them from reading the values.
\`\`\`java
public class Student {
    private String college;
    
    public void setCollege(String college) {
        this.college = college;
    }
}
\`\`\`
*Note*: Attempting \`System.out.println(s.getCollege());\` will throw a compile-time error!

---

## 🧬 5. Verbatim Classroom Challenge: The Account Ledger System
Let's look at a complete, production-grade encapsulated ledger class that tracks account details safely using getters and setters:

\`\`\`java
// Save as Account.java
class Account {
    // Private variables inaccessible to direct operations
    private long acc_no;
    private String name, email;
    private float amount;
    
    // Public getters and setters
    public long getAcc_no() {
        return acc_no;
    }
    public void setAcc_no(long acc_no) {
        this.acc_no = acc_no;
    }
    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    
    public float getAmount() {
        return amount;
    }
    public void setAmount(float amount) {
        this.amount = amount;
    }
}
\`\`\`

\`\`\`java
// Save as TestAccount.java or TestEncapsulation.java
public class TestEncapsulation {
    public static void main(String[] args) {
        // Creating instance of Account
        Account acc = new Account();
        
        // Setting values using setter methods
        acc.setAcc_no(7560504000L); // L literal specifying long constant
        acc.setName("MR Forget Name");
        acc.setEmail("notReach@invalidDomain.com");
        acc.setAmount(500000f); // f literal specifying float constant
        
        // Fetching and printing values using getter methods
        System.out.println(acc.getAcc_no() + " " + acc.getName() + " " + acc.getEmail() + " " + acc.getAmount());
    }
}
\`\`\`
*Output*: \`7560504000 MR Forget Name notReach@invalidDomain.com 500000.0\`
`,
    quizzes: [
      {
        question: "জাভায় ক্যাপিটাল ক্যাপসুল (Capsule) অ্যানালজি সাধারণত কোন ওওপি (OOP) কনসেপ্টকে প্রতিনিধিত্ব করার জন্য বহুল ব্যবহুত হয়?",
        options: [
          { label: "Polymorphism (বহুরূপতা)", isCorrect: false },
          { label: "Inheritance (উত্তরাধিকার)", isCorrect: false },
          { label: "Encapsulation (কোড ও ডাটা একত্রীকরণ)", isCorrect: true },
          { label: "Abstraction (অ্যাবস্ট্রাকশন)", isCorrect: false }
        ],
        explanation: "এনক্যাপসুলেশন মানে হলো ভেরিয়েবল বা ডাটা এবং সেগুলোর ওপর কাজ সম্পন্ন করা মেথডগুলোকে একটি একক বডি বা ক্লাসের আড়ালে একীভূত বা ক্যাপসুলেশন করা।"
      },
      {
        question: "একটি জাভা ক্লাসকে আপনি কীভাবে শতভাগ কেবল রিড-অনলি (Read-Only) ক্লাসে রূপান্তর করতে পারেন?",
        options: [
          { label: "ক্লাসের সব ভেরিয়েবল public ঘোষণা করে", isCorrect: false },
          { label: "ক্লাসের মেথডগুলোতে কোনো প্রকার বডি স্ক্রিপ্ট না লিখে", isCorrect: false },
          { label: "ক্লাসে কেবল Setter মেথডগুলো লিখে এবং কোনো Getter মেথড না রেখে", isCorrect: false },
          { label: "সব মেম্বার ভেরিয়েবলকে private ডিক্লেয়ার করে কেবল পাবলিক Getter মেথডগুলো রেখে ও সমস্ত Setter মেথড বাদ দিয়ে", isCorrect: true }
        ],
        explanation: "প্রাইভেট ভেরিয়েবল ক্লাসের বাইরে ডিরেক্ট পরিবর্তন করা যায় না। যদি ক্লাসের ভেতরে কারেক্ট ভ্যালু রিড করার জন্য কেবল getter পদ্ধতি রাখা হয় কিন্তু মান বদলানোর setter পদ্ধতি বাদ দেয়া হয়, তাহলে ক্লাসটি শতভাগ রিড-অনলি হয়ে যায়।"
      },
      {
        question: "এনক্যাপসুলেশন ডাটা ভ্যালিডেশন অর্জনে কীভাবে সাহায্য করে?",
        options: [
          { label: "যেকোনো ডাটা সেট করার সময় ভুল ভ্যালু আসলে জাভা কম্পাইলার কম্পিউটার শাটডাউন করে দেয়", isCorrect: false },
          { label: "পাবলিক সেটার (Setter) মেথডের ভেতর কন্ডিশনাল চেকিং বা ফিল্টারিং বসিয়ে অনাকাঙ্ক্ষিত ডাটা অ্যাসাইন হওয়া কার্যকরভাবে প্রতিরোধ করা যায়", isCorrect: true },
          { label: "ইন্টারফেসে ডাটা ভেরিয়েবলকে হাইড করে ফেলে", isCorrect: false },
          { label: "এটি ডাটাকে ডেকোরেশন দিয়ে সাজায় যাতে মেমরিতে সিকিউরিটি বাড়ে", isCorrect: false }
        ],
        explanation: "যেহেতু প্রপার্টিটি সরাসরি বাইরের সোর্স থেকে পরিবর্তন করার সুযোগ নেই এবং কেবল public setter মেথডের মাধ্যমে পরিবর্তন করতে হয়, তাই আপনি সেটার মেথডের বডিতে if-else লজিক ব্যবহার করে ইনপুট ভ্যালিডেশন অনায়াসে করতে পারেন।"
      }
    ],
    reviewQuestions: [
      "Define Encapsulation inside Java. Detail why class variables are declared private, quoting security concerns.",
      "Write a compilable Student bean which behaves as Read-Only and another version which behaves as Write-Only.",
      "Construct a fully-fledged compilable Account class containing card numbers, email, and balances. Add validation logic inside setAmount so that negative balances are ignored."
    ]
  }
];
