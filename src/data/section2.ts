import { Lesson } from './lessons';

export const section2Lessons: Lesson[] = [
  {
    id: "s2-overview",
    title: "Section Overview",
    description: "Overview of Section II: Variables, Operators & Control Statements",
    content: `
# 📗 Section II: Variables, Operators and Control Statements
## Complete Syllabus Map (Lessons 11 to 14)

Welcome to **Section II: Variables, Operators and Control Statements**. This section covers the fundamental building blocks of dynamic JVM programs—focusing on variable systems, strongly-typed data primitives, multidimensional matrices, rich operators, postfix/prefix mechanics, control flow, and loop jump commands.

---

### 📋 Section II Course Syllabus Checklist
Below is a checklist showing how every topic in the official section syllabus is thoroughly mapped to our masterclass lessons:

- [x] **Variables & Strongly-Typed Primitives** ➜ Covered in *Lesson 11: Variables and Data Types*
- [x] **Dynamic Variable Initialization** ➜ Covered in *Lesson 11: Variables and Data Types*
- [x] **One-Dimensional Arrays** ➜ Covered in *Lesson 12: Arrays*
- [x] **Multidimensional Arrays (Arrays of Arrays)** ➜ Covered in *Lesson 12: Arrays*
- [x] **Four Operator Groups & Ternary system** ➜ Covered in *Lesson 13: Operators*
- [x] **Increment/Decrement (Prefix vs. Postfix)** ➜ Covered in *Lesson 13: Operators*
- [x] **Control Structures & If-Else Variants** ➜ Covered in *Lesson 14: Control Statements*
- [x] **Loops (for, while, do-while) & Jump Statements** ➜ Covered in *Lesson 14: Control Statements*

---

### 🗺️ Masterclass Lesson Navigation
Each lesson has been architected to provide a masterclass learning experience, containing complete verbatim notes and diagrams from official slides, blended with beginner-friendly guides, full annotated code examples, and practice checkpoints.

1. **Lesson 11: Variables and Data Types**
   * Detailed analysis of Java's Strong-Typing philosophy, the 8 basic primitive groups (Integers, Floating-point numbers, characters, and booleans), and Dynamic Initialization.
2. **Lesson 12: Arrays (One-Dimensional & Multidimensional)**
   * What makes Java arrays unique, dynamic memory allocations via \`new\`, auto-arrays initialization, and handling multidimensional arrays as "arrays of arrays".
3. **Lesson 13: Operators (Arithmetic, Relational, Logical, & Ternary)**
   * Exploring the 4 primary groups of operators with an in-depth analysis of prefix vs. postfix evaluation order in large expressions.
4. **Lesson 14: Control Statements (Selection, Iteration & Jump)**
   * Comparative analysis of C vs. Java for selection blocks, grades mapping, loops pre-tested vs. post-tested differences, and \`break\`/\`continue\`/\`return\` mechanics.
`
  },
  {
    id: "variables-datatypes-deep",
    title: "Lesson 11: Variables and Data Types",
    description: "Analysis of Java's Strong-Typing, the 8 basic primitives with binary widths, and Dynamic Variable Initialization.",
    content: `
# 💎 Lesson 11: Variables and Data Types

## 🛡️ 1. Why "Java Is a Strongly Typed Language"
A central pillar of Java’s robustness and safety is its **Strongly Typed** architecture. Unlike languages that allow loose assignment or spontaneous conversions, Java restricts data flows using a strict type protocol.

### 🔍 Standard Academic Justification:
* **Firstly**: 
  1. Every raw variable has a strictly declared type.
  2. Every expression (including mathematical results) has an implicit or explicit type.
  3. Every type is rigidly defined, with exact memory bounds.
* **Secondly**:
  1. All variable assignments—whether explicit via \`=\` or implicit when passing parameters in a method call—are evaluated by the compiler for exact **type compatibility**.
  2. There are **no automatic coercions** or conversions of conflicting types (unlike C/C++ which can silently truncate floating-points into integers).
  3. The Java compiler validates every single expression and parameter signature. Any mismatch results in a compilation error that **must be fixed** before the compiler will produce the executable \`.class\` bytecode.

---

## 🗂️ 2. The 8 Basic Primitive Data Types
Java defines **eight primitive types** of data, which are built natively into the virtual machine's instruction set. These are categorized into four distinct groups:

\`\`\`
                               Java Primitives
                                      │
         ┌───────────────────┬────────┴──────────┬───────────────────┐
         ▼                   ▼                   ▼                   ▼
    [ Integers ]     [ Floating-Point ]    [ Characters ]      [ Booleans ]
    - byte (8b)      - float (32b)         - char (16b)        - boolean (1b/size)
    - short (16b)    - double (64b)        
    - int (32b)
    - long (64b)
\`\`\`

### 📦 I. Integers (Whole Valued Signed Numbers)
1. **byte** (8-bit width): Excellent for raw binary streams or when reading from system files. Range: \`-128\` to \`127\`.
2. **short** (16-bit width): Least commonly used in modern desktop apps, but saves space in narrow microcontrollers. Range: \`-32,768\` to \`32,767\`.
3. **int** (32-bit width): The standard choice for loop control variables, array indexing, and ordinary numeric operations. Range: \`-2,147,483,648\` to \`2,147,483,647\`.
4. **long** (64-bit width): Crucial for high-precision calculations, timestamps, astronomical math, or light-travel measurements. Range: \`-9,223,372,036,854,775,808\` to \`9,223,372,036,854,775,807\`.

### 💧 II. Floating-Point Numbers (Fractional Precision)
1. **float** (32-bit width): Single-precision decimal format. Useful for space-sensitive coordinate charts.
2. **double** (64-bit width): Double-precision decimal format. The default choice for all mathematical functions (like \`Math.sqrt()\`, \`Math.sin()\`), offering greater fractional accuracy.

### 🔤 III. Characters
* **char** (16-bit width): Represents positive symbols, letters, and numbers.
* **The Unicode Paradigm**: Unlike C/C++ which uses 8-bit ASCII (restricted to Western alphabets), Java uses **16-bit Unicode** internally. This allows Java to natively support global language characters (including Bangla, Arabic, Chinese, emojis) out of the box!

### ⚖️ IV. Booleans
* **boolean**: A special system type representing true/false values.
* **Anti-C Trap**: Booleans in Java are strictly logical. You **cannot** convert an integer \`1\` or \`0\` directly to a boolean. It only accepts the literal states \`true\` or \`false\`.

---

## 💻 3. Verbatim Slide Examples for Practice

### 🚀 Example I: Distance Light Travels (\`Light.java\`)
This program uses a 64-bit \`long\` variable to calculate the immense distance light travels over a set period of days.

\`\`\`java
// Verbatim from official slide Page 3
class Light {
    public static void main(String args[]) {
        int lightspeed;
        long days;
        long seconds;
        long distance;
        
        // Approximate speed of light in miles per second
        lightspeed = 186000;
        days = 1000; // Specify the reading days
        
        seconds = days * 24 * 60 * 60; // Compute total seconds to long
        distance = lightspeed * seconds; // Calculate final distance
        
        System.out.print("In " + days);
        System.out.print(" days light will travel about ");
        System.out.println(distance + " miles.");
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  In 1000 days light will travel about 16070400000000 miles.
  \`\`\`

---

### ⭕ Example II: Area of a Circle (\`Area.java\`)
This program calculates a circle's area using double-precision floating-point types for maximum math precision.

\`\`\`java
// Verbatim from official slide Page 3
class Area {
    public static void main(String args[]) {
        double pi, r, a;
        
        r = 10.8; // Radius of circle
        pi = 3.1416; // Pi approximation
        a = pi * r * r; // Calculate area
        
        System.out.println("Area of circle is " + a);
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  Area of circle is 366.436224
  \`\`\`

---

### 🔤 Example III: Characters as Integers (\`CharDemo.java\`)
Since a \`char\` is an integer type under the hood, you can assign numeric Unicode values directly to characters.

\`\`\`java
// Verbatim from official slide Page 3
class CharDemo {
    public static void main(String args[]) {
        char ch1, ch2;
        
        ch1 = 88; // Unicode decimal code for character 'X'
        ch2 = 'Y';
        
        System.out.println(ch1 + " " + ch2);
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  X Y
  \`\`\`

---

### ⚖️ Example IV: Boolean Value Behavior (\`BoolTest.java\`)
This example demonstrates how boolean flag logic controls the execution flow of \`if\` blocks.

\`\`\`java
// Verbatim from official slide Page 4
class BoolTest {
    public static void main(String args[]) {
        boolean b;
        
        b = false;
        System.out.println("b is " + b);
        
        b = true;
        System.out.println("b is " + b);
        
        // A boolean value is sufficient to control the if statement
        if (b) {
            System.out.println("This is executed.");
        }
        
        b = false;
        if (b) {
            System.out.println("This is not executed.");
        }
        
        // Outcome of a relational operator is always a boolean value
        System.out.println("10 > 9 is " + (10 > 9));
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  b is false
  b is true
  This is executed.
  10 > 9 is true
  \`\`\`

---

## 📝 4. Variables Definition & Syntax
A **variable** is the basic unit of storage in a Java program. It represents a named memory space that holds transient values.

### 📐 Standard Academic Properties:
* **Identification**: Formed by combining a **data type**, a unique **identifier name**, and an optional **initializer value**.
* **Attributes**: Every variable has a **scope** (which defines where it can be seen by other methods) and a **lifetime** (how long it remains in memory).
* **Declaration Syntax Map**:
  \`\`\`
  Type_Identifier   Variable_Name   [ = Initial_Value ] ;
  \`\`\`
  *Example declarations*:
  \`\`\`java
  int a, b, c;             // Declares three integer variables (uninitialized)
  int d = 3, e, f = 5;     // Declares three integers; initializes d and f
  byte z = 22;             // Initialized byte variable z
  double pi = 3.14159;     // Declares double-precision approximation of Pi
  char x = 'x';            // Declares char variable x containing letter 'x'
  \`\`\`

---

## ⚡ 5. Dynamic Variable Initialization
A common misconception is that Java only supports static constant value declarations. However, Java allows variables to be **initialized dynamically**, using any expression that is valid at the moment the variable is declared.

### 📐 Right-Angle Triangle Hypotenuse (\`DynInit.java\`)
Below, the variables \`a\` and \`b\` are initialized with fixed constant values, but the variable \`c\` is initialized dynamically at runtime based on the Pythagorean formula.

\`\`\`java
// Verbatim from official slide Page 5
class DynInit {
    public static void main(String args[]) {
        double a = 3.0, b = 4.0;
        
        // Variable 'c' is dynamically initialized at runtime
        double c = Math.sqrt(a * a + b * b);
        
        System.out.println("Hypotenuse is " + c);
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  Hypotenuse is 5.0
  \`\`\`

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **Strongly Typed**: জাভায় ইচ্ছে করলেই এক টাইপের ডেটা অন্য টাইপে অসাবধানে ঢোকানো যায় না। যেমন, \`int\` এর ভেতর \`3.1416\` লিখে দিলে C++ চুপচাপ \`3\` বানিয়ে দেবে, কিন্তু জাভা সরাসরি এরর ছুড়ে মারবে!
> * **char**: জাভায় \`char\` মূলত ১৬ বিটের ইউনিকোড সাপোর্ট করে। তাই এতে বাংলা বর্ণমালা বা যেকোনো গ্লোবাল ক্যারেক্টার নিয়ে সরাসরি কাজ করা সম্ভব, যা ৮-বিটের ASCII যুক্ত C ল্যাঙ্গুয়েজ এ সম্ভব ছিল না।

### ⚠️ Common Academic Trap:
> **Question**: *If you run \`int x = true;\` or \`boolean flag = 1;\` in Java, what happens?*
> **Answer**: It throws a severe **Type Mismatch Compile-Time Error**. Java maintains a strict boundary between logical booleans and integer representations.

### 🎓 IIUC Exams Spotlight:
> *Explain standard variable declaration syntax and justify how dynamic initialization works.*
> Always emphasize that the initialization expression can contain any combination of method calls, variable arguments, or operator calculations, provided they evaluate to a compatible return type at execution time.
`,
    reviewQuestions: [
      "Explain in detail why Java is called a 'Strongly Typed Language'.",
      "List the eight primitive types of Java alongside their bit-width.",
      "Explain the difference between 8-bit ASCII characters used in C++ and 16-bit Unicode characters used in Java.",
      "Define the elements of a variable and state the general form of raw variable declarations.",
      "Provide a clear Java example demonstrating runtime Dynamic Initialization."
    ],
    quizzes: [
      {
        question: "জাভাকে একটি 'Strongly Typed Language' হিসেবে বিবেচনা করার মূল কারণ কোনটি?",
        options: [
          { label: "এটিতে পয়েন্টার মেকানিজম নেই", isCorrect: false },
          { label: "কম্পাইন্ড কোড রান করতে JVM-এর প্রয়োজন হয়", isCorrect: false },
          { label: "প্রতিটি ভেরিয়েবল এবং এক্সপ্রেশনের জন্য টাইপ সুনির্দিষ্টভাবে সংজ্ঞায়িত এবং সমস্ত অ্যাসাইনমেন্ট কম্পাইল টাইমে কঠোরভাবে চেক করা হয়", isCorrect: true },
          { label: "ভেরিয়েবলের ডাটা স্পেস কেবল মেমরি স্ট্রিম সেভ করতে পারে", isCorrect: false }
        ],
        explanation: "জাভাতে প্রতিটি ভেরিয়েবল এবং এক্সপ্রেশনের জন্য নির্দিষ্ট টাইপ থাকতে হয়। সব অ্যাসাইনমেন্ট ও মেথড প্যারামিটার টাইপ ম্যাচিং পরীক্ষা করে কম্পাইল লাইনের নিরাপত্তা নিশ্চিত করা হয়।"
      },
      {
        question: "জাভাতে char টাইপ কত বিট মেমরি দখল করে এবং কেন?",
        options: [
          { label: "8-bit, কারণ এটি ASCII কোড ব্যবহার করে", isCorrect: false },
          { label: "16-bit, কারণ এটি বিশ্বব্যাপী সব বর্ণমালা বা ইউনিকোড (Unicode) স্টোর করতে ব্যবহৃত হয়", isCorrect: true },
          { label: "32-bit, কারণ এটি ভগ্নাংশ সংখ্যা প্রকাশ করে", isCorrect: false },
          { label: "64-bit, কারণ এতে অত্যন্ত বড় ক্যারেক্টার থাকে", isCorrect: false }
        ],
        explanation: "১৬-বিটের উইডথ থাকার কারণে জাভার char টাইপ বিশ্বব্যাপী সকল ভাষার প্রতীক ও ক্যারেক্টার সম্বলিত ইউনিকোড (Unicode) সেট ব্যবহারে সম্পূর্ণ সক্ষম।"
      },
      {
        question: "নিচের কোন ভেরিয়েবল ঘোষণাটি জাভাতে কম্পাইল টাইম টাইপ এরর দিবে?",
        options: [
          { label: "double d = 12.34;", isCorrect: false },
          { label: "boolean active = 1;", isCorrect: true },
          { label: "char ch = 65;", isCorrect: false },
          { label: "long timer = 1000L;", isCorrect: false }
        ],
        explanation: "জাভায় boolean টাইপ শুধুমাত্র 'true' এবং 'false' মান গ্রহণ করে। C বা C++ এর মতো ২ বা ১ সংখ্যা ব্যবহার করে সরাসরি বুলিয়ান অ্যাসাইন করা জাভা তে আইনত নিষিদ্ধ।"
      }
    ]
  },
  {
    id: "arrays-master",
    title: "Lesson 12: Arrays (One-Dimensional & Multidimensional)",
    description: "Declaring arrays in Java, dynamic memory allocation via 'new', and multidimensional matrices as 'arrays of arrays'.",
    content: `
# 📊 Lesson 12: Arrays (One-Dimensional & Multidimensional)

## 📐 1. Definition of Arrays
An **array** is a structured collection of sequentially placed, like-typed variables referenced under a single common identifier name. 

### ⚙️ Core Technical Features:
* **Index-Based Access**: Every isolated value inside an array is called an element, accessed securely using an integer-based **index number**.
* **Zero-Indexed**: Array counts in Java always start at index position \`0\` and terminate at index position \`[length - 1]\`.
* **Grouping Power**: Provides an elegant way to organize related values together in the JVM heap, discarding compile-time limits.

---

## 📦 2. One-Dimensional Arrays
A **one-dimensional array** is essentially a list of like-typed variables. Unlike C++ arrays, creating a Java array is split into two distinct steps:
1. **Declaration of Array Reference Variable**: Declares the type of elements.
2. **Allocation of Array Memory (Instantiation)**: Reserves physical storage space on the JVM Heap using the \`new\` keyword.

### 📐 Declaration Model:
\`\`\`
  Type_Name   Array_Identifier [ ] ;
  Array_Identifier = new Type_Name [ Array_Size ] ;
\`\`\`

*Example*:
\`\`\`java
int month_days[];          // 1. Declares the integer reference
month_days = new int[12];  // 2. Allocates exactly 12 contiguous spots on the heap
\`\`\`

---

### 📅 Example I: Explicit Array Initializer (\`Array.java\`)
This program allocates a 12-slot integer array, populates each slot, and prints April's day count.

\`\`\`java
// Verbatim from official slide Page 6
class Array {
    public static void main(String args[]) {
        int month_days[];
        month_days = new int[12];
        
        month_days[0] = 31;
        month_days[1] = 28;
        month_days[2] = 31;
        month_days[3] = 30; // Index 3 is April
        month_days[4] = 31;
        month_days[5] = 30;
        month_days[6] = 31;
        month_days[7] = 31;
        month_days[8] = 30;
        month_days[9] = 31;
        month_days[10] = 30;
        month_days[11] = 31;
        
        System.out.println("April has " + month_days[3] + " days.");
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  April has 30 days.
  \`\`\`

---

### 🎨 Example II: Array Auto-Initializer (\`AutoArray.java\`)
Writing out array indices manually can get tedious. You can combine declaration, creation, and value allocation into a single code block using curly braces.

\`\`\`java
// Verbatim from official slide Page 7
class AutoArray {
    public static void main(String args[]) {
        // Combined declaration and instantiation via Auto-Initializer
        int month_days[] = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
        
        System.out.println("April has " + month_days[3] + " days.");
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  April has 30 days.
  \`\`\`

---

## 🕸️ 3. Multidimensional Arrays (Arrays of Arrays)
In Java, multidimensional arrays are implemented as **arrays of arrays** rather than a flat multi-index coordinate matrix.

### ⚙️ Why is this important?
* Since sub-arrays are allocated dynamically, **sub-arrays do not need to be the same size**. You can create a *ragged/jagged* array where row 1 has 3 columns, and row 2 has 9 columns!
* To declare standard coordinate grids, simply supply multiple brackets:
  \`\`\`
  Type_Name  Variable_Name [ ] [ ] = new Type_Name [ Row_Size ] [ Column_Size ] ;
  \`\`\`

---

### 🧮 Example III: 2D Matrix Loop (\`TwoDArray.java\`)
This example allocates a 2D integer array with 4 rows and 5 columns, populates it with sequential values, and prints it formatted as a matrix block.

\`\`\`java
// Verbatim from official slide Page 7
class TwoDArray {
    public static void main(String args[]) {
        int twoD[][] = new int[4][5];
        int i, j, k = 0;
        
        // Loop to assign data values
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 5; j++) {
                twoD[i][j] = k;
                k++;
            }
        }
        
        // Loop to print values as a formatted grid
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 5; j++) {
                System.out.print(twoD[i][j] + " ");
            }
            System.out.println(); // Line break after each row completes
        }
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  0 1 2 3 4 
  5 6 7 8 9 
  10 11 12 13 14 
  15 16 17 18 19 
  \`\`\`

---

## 🎨 4. Physical Memory Mappings of Array Systems
Here is a visual map of how Java arrays are stored inside the heap:

\`\`\`
  Stack Memory                        Heap Memory (Actual Objects)
 ┌───────────────┐                  ┌─────────────────────────────────────┐
 │  month_days   │─────────────────>│  [0]  [1]  [2]  [3]  ...          [11]│
 │  (Reference)  │                  │  31   28   31   30   ...           31 │
 └───────────────┘                  └─────────────────────────────────────┘
                                    
  Stack Memory                        Heap Memory (Arrays of Arrays)
 ┌───────────────┐                  ┌─────────────┐
 │     twoD      │─────────────────>│  Row Ref 0  │─────> [ 0,  1,  2,  3,  4 ]
 │  (Reference)  │                  │  Row Ref 1  │─────> [ 5,  6,  7,  8,  9 ]
 └───────────────┘                  │  Row Ref 2  │─────> [10, 11, 12, 13, 14 ]
                                    │  Row Ref 3  │─────> [15, 16, 17, 18, 19 ]
                                    └─────────────┘
\`\`\`

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **new Keyword**: C++ এ অ্যারে তৈরির সাথে সাথেই মেমরি অটো-অ্যালোকেট হয়ে যায়। কিন্তু জাভায় কেবল ব্র্যাকেট ঘোষণা দিলেই ভেরিয়েবলে মেমরি ক্রিয়েট হয় না। অবশ্যই \`new int[12]\` ব্যবহার করে হিপ মেমরিতে অবজেক্ট হিসেবে স্পেস তৈরি করতে হয়।
> * **Arrays of arrays**: জাভায় ডাবল ব্র্যাকেট \`[][]\` মানে এটি নিছক সাধারণ ছক নয়, এটি হলো একগুচ্ছ অ্যারেইডের একটি প্যারেন্ট অ্যারে। ইন্টারভিউতে মনে রাখবেন—জাভায় প্রতিটি রো সম্পূর্ণ আলাদা দৈর্ঘ্যের (Jagged Array) হতে পারে।

### ⚠️ Common Academic Trap:
> **Question**: *What happens if you run the following code?*
> \`\`\`java
> int arr[] = new int[5];
> System.out.println(arr[5]);
> \`\`\`
> **Answer**: It throws a severe runtime exception called **ArrayIndexOutOfBoundsException** because array indexing starts at \`0\` and ends at \`4\` for an array of size 5.

### 🎓 IIUC Exams Spotlight:
> *Detail how 2-Dimensional arrays are implemented in Java, contrasting with other languages.*
> Emphasize that because Java treats multidimensional arrays as arrays of nested arrays, memory of inner row arrays is allocated dynamically, allowing each row to remain optional, standalone or of asymmetrical sizes.
`,
    reviewQuestions: [
      "Define Arrays and explain how they offer a convenient means of grouping related data.",
      "Explain the exact physical memory process when a 1D array is created in Java, listing the importance of reference variables and the 'new' keyword.",
      "Write a Java program to compile and print active days of months using both simple and auto-array initialization formats.",
      "Explain how multidimensional arrays in Java are implemented as 'arrays of arrays'.",
      "Write an expert Java program to demonstrate a physical 3x4 layout printed cleanly in your console."
    ],
    quizzes: [
      {
        question: "জাভাতে একটি ডিক্লেয়ার্ড অ্যারে মেমরিতে কিভাবে অ্যালোকেট হয়?",
        options: [
          { label: "স্ট্যাক মেমরিতে সরাসরি স্ট্যাটিক ভেরিয়েবল হিসেবে", isCorrect: false },
          { label: "শুধুমাত্র হার্ডড্রাইভে সাধারণ সেভ টেক্সট ফাইল আকারে", isCorrect: false },
          { label: "রেফারেন্স ভেরিয়েবল ব্যাকআপ স্ট্যাকে থাকে এবং মূল অ্যারে ডেটা হিপ মেমরিতে (Heap Space) অবজেক্ট হিসেবে ডায়নামিকালি অ্যাক্টিভেট হয়", isCorrect: true },
          { label: "কোনো মেমরি স্পেসই গ্রহণ করে না জাভা", isCorrect: false }
        ],
        explanation: "জাভায় অ্যারে মূলত অবজেক্টের মতো কাজ করে। তাই অ্যারে রেফারেন্স ভেরিয়েবল স্ট্যাক মেমরিতে সংরক্ষিত থাকে এবং আসল মেমরি ব্লক হিপ-এ সংরক্ষিত হয়।"
      },
      {
        question: "জাভাতে multidimensional array বলতে কী বোঝায়?",
        options: [
          { label: "একই মেমরিতে জটিল ৩টি ডেটা রিমোট ডিরেক্টরি হিসেবে থাকে", isCorrect: false },
          { label: "একটি সম্পূর্ণ দ্বিমাত্রিক একক ফ্ল্যাট কন্টেইলন", isCorrect: false },
          { label: "এটি মূলত একগুচ্ছ অন্যান্য অ্যারে নিয়ে গঠিত 'অ্যারের অ্যারে' (Arrays of arrays)", isCorrect: true },
          { label: "এরকম কোনো অ্যারে স্ট্রাকচার জাভা সাপোর্ট করে না", isCorrect: false }
        ],
        explanation: "জাভায় বহুমাত্রিক অ্যারে আসলে একগুচ্ছ অ্যারের একটি সুপার-অ্যারে। এ কারণেই প্রতিটি রো এর সাইজ ভিন্ন হওয়ার সুবিধা পাওয়া যায়।"
      },
      {
        question: "int arr[] = new int[5] কোডটিতে arr-এর সর্বনিম্ন এবং সর্বোচ্চ বৈধ সূচক (Index) কত?",
        options: [
          { label: "১ থেকে ৫", isCorrect: false },
          { label: "০ থেকে ৫", isCorrect: false },
          { label: "০ থেকে ৪", isCorrect: true },
          { label: "১ থেকে ৪", isCorrect: false }
        ],
        explanation: "সব স্ট্যান্ডার্ড জাভা অ্যারে সূচক (index) সবসময় ০ থেকে শুরু হয়। সুতরাং ৫ সাইজের একটি অ্যারে-র ইণ্ডেক্স রেঞ্জ হলো ০ থেকে ৪।"
      }
    ]
  },
  {
    id: "java-operators",
    title: "Lesson 13: Java Operators",
    description: "Deep-dive analysis of the four operator groups, prefix versus postfix priority logic, and short-circuit operations.",
    content: `
# 🎛️ Lesson 13: Java Operators

Java provides a rich and robust operators workspace to manipulate primitives, instances, and logical outcomes.

---

## 🗄️ 1. The Four Primary Operator Groups
Most Java operators can be classified into four primary operational groupings:

| Operator Group | Members | Purpose |
| :--- | :--- | :--- |
| **I. Arithmetic** | \`+\`  \`-\`  \`*\`  \`/\`  \`%\`  \`++\`  \`--\` | Mathematical evaluation of numerical values. |
| **II. Relational** | \`==\`  \`!=\`  \`>\`  \`<\`  \`>=\`  \`<=\` | Establishing order, value equality, and size comparisons. |
| **III. True Logical** | \`&\`  \`|\`  \`^\`  \`!\`  \`&&\`  \`||\` | Combining multiple boolean conditions to form a single outcome. |
| **IV. Bitwise** | \`&\`  \`|\`  \`^\`  \`~\`  \`<<\`  \`>>\`  \`>>>\` | Manipulating low-level integer values bit-by-bit in binary. |

---

## ⚡ 2. Prefix vs. Postfix Increments in Large Expressions
The increment (\`++\`) and decrement (\`--\`) operators are beautifully simple utilities that increase or decrease a variable's value by one. 

However, when embedded inside complex mathematical expressions, their evaluation order depends on whether they are in **prefix** or **postfix** form:

\`\`\`
          [ Prefix: ++x ]                      [ Postfix: x++ ]
                 │                                    │
    1. Increment x by 1 immediately.     1. Read current value of x.
    2. Use the new value in calculation. 2. Use that value in calculation.
                                         3. Increment x by 1 afterwards.
\`\`\`

### 🔍 Standard Academic Comparison:
* **In Prefix Form (\`++x\` or \`--x\`)**:
  * The operand is incremented or decremented **before** its value is obtained for use in the expression.
  * *Example*:
    \`\`\`java
    int x = 42;
    int y = ++x; // Increment x (becomes 43), then assign to y (receives 43)
    \`\`\`
* **In Postfix Form (\`x++\` or \`x--\`)**:
  * The current value of the operand is obtained first to evaluate the expression, and **only after the expression is evaluated** is the operand modified in memory.
  * *Example*:
    \`\`\`java
    int x = 42;
    int y = x++; // Assign x's current value to y (retains 42), then increment x (becomes 43)
    \`\`\`

---

## 🚪 3. Assignment and Multi-Assignment Operators
The basic assignment operator is the single equal sign (\`=\`). Beyond simple statements, Java allows you to chain assignments to assign a common value to multiple variables at once:

\`\`\`java
int x, y, z, p = 5;
x = y = z = 100; // Chains assign value 100 to z, then to y, and finally to x
\`\`\`
*Note*: The assignment operator evaluates from **right to left**, allowing this daisy-chaining behavior.

---

## ⚡ 4. Boolean Logical vs. Short-Circuit Operators
While both systems evaluate boolean expressions, **Short-Circuit Operators** offer significant structural performance advantages:

### ⚙️ The Boolean Trio:
1. **Standard AND (\`&\`) and OR (\`|\`)**:
   * Evaluates both the left and right sides of the expression in all cases, even if the outcome is already guaranteed.
2. **Short-Circuit AND (\`&&\`)**:
   * If the expression on the left evaluates to \`false\`, Java will **completely bypass** evaluating the expression on the right, since the overall result represents true/false as false anyway. This saves processor cycles and prevents potential runtime crashes (like null pointer access).
3. **Short-Circuit OR (\`||\`)**:
   * If the expression on the left evaluates to \`true\`, Java will **immediately bypass** evaluating the expression on the right, since the overall result is guaranteed to be true.

---

## 🎭 5. The Ternary \`?\` Operator
The ternary operator acts as a compact, elegant shorthand for simple \`if-then-else\` blocks, utilizing a three-way expression loop:

### 📐 General Syntax Form:
\`\`\`
  expression1 ? expression2 : expression3
\`\`\`
* **Execution Rules**: 
  1. \`expression1\` must evaluate to a boolean (\`true\` or \`false\`).
  2. If \`expression1\` is \`true\`, then \`expression2\` is evaluated and becomes the final result.
  3. If \`expression1\` is \`false\`, then \`expression3\` is evaluated and becomes the final result.
  4. Both expression branches **must share a compatible return type**, which cannot be \`void\`.

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **Prefix vs. Postfix**: \`++x\` (Prefix) মানে আগে কাজের কাজ অর্থাৎ ১ যোগ করে ফেলা, তারপর সমীকরণে ব্যবহার করা। আর \`x++\` (Postfix) মানে আগে সমীকরণে ব্যবহার করা, আর সব কাজ শেষ হওয়ার পর অলক্ষ্যে ১ ভ্যালু বাড়িয়ে মেমরিতে রাখা।
> * **Short-Circuit**: \`&&\` এবং \`||\` দিয়ে অনেক রানটাইম ক্র্যাশ এড়ানো যায়। যেমন- প্রথমটি মিথ্যা হলে পেছনের সমীকরণ ইভ্যালুয়েট করে না, যা সিস্টেমের স্পিড বাড়ায় ও আনমেমোরি এক্সেডিউশন এরর রক্ষা করে।

### ⚠️ Common Academic Trap:
> **Question**: *What is the exact outcome of the following calculation?*
> \`\`\`java
> int a = 5;
> int result = a++ + ++a; 
> \`\`\`
> **Answer**: Let's follow the steps:
> 1. \`a++\` is postfix. It reads the current value of \`a\` (which is 5), and flags \`a\` for a deferred increment.
> 2. Immediately after reading, \`a\`'s memory updates to 6.
> 3. Next, \`++a\` is prefix. It increments \`a\`'s value first (from 6 to 7), and then reads it.
> 4. The resulting calculation represents \`5 + 7\`, making \`result = 12\`, while \`a\` terminates as \`7\`.

### 🎓 IIUC Exams Spotlight:
> *Detail the differences between the postfix and prefix increment operators inside a large expression.*
> Draw the execution sequence step-by-step using a memory-trace table, proving how the variable's value updates in stack memory during each phase.
`,
    reviewQuestions: [
      "Categorize the four primary groups of Java operators.",
      "Explain the subtle, yet powerful difference of prefix vs. postfix increment operator evaluation in large expressions.",
      "What is a short-circuit operator? Show how a short-circuit operator improves application performance compared to normal logical operators.",
      "State the general syntax form of the ternary operator and list its structural constraints.",
      "Write a short Java class to demonstrate standard ternary value assessment."
    ],
    quizzes: [
      {
        question: "নিচের জাভা কোড সেগমেন্টটির আউটপুট কী হবে?\nint x = 10;\nint y = x++;\nSystem.out.println('x: ' + x + ', y: ' + y);",
        options: [
          { label: "x: 10, y: 10", isCorrect: false },
          { label: "x: 11, y: 11", isCorrect: false },
          { label: "x: 11, y: 10", isCorrect: true },
          { label: "x: 10, y: 11", isCorrect: false }
        ],
        explanation: "এখানে x++ পোস্টফিক্স হওয়ার কারণে প্রথমে x এর বর্তমান মান (১০) y এ অ্যাসাইন হয়, এরপর x এর মান ১ বৃদ্ধি পেয়ে ১১ হয়। সুতরাং x: 11, y: 10।"
      },
      {
        question: "Short-circuit AND (&&) অপারেটরের সবচেয়ে বড় সুবিধা কোনটি?",
        options: [
          { label: "এটি সব ক্ষেত্রে ডানদিকের স্টেটমেন্ট পরীক্ষা করতে বাধ্য করে", isCorrect: false },
          { label: "বামদিকের এক্সপ্রেশনটি মিথ্যা (false) হলে, ডানদিকের অংশটি মূল্যায়ন না করেই সরাসরি false রিটার্ন করে কর্মক্ষমতা বাঁচায়", isCorrect: true },
          { label: "এটি ডাটা সাইজ ডাবল করে দেয়", isCorrect: false },
          { label: "এটি কেবল বিট লেভেলে কাজ করে", isCorrect: false }
        ],
        explanation: "&& অপারেটর প্রথম অংশ মিথ্যা পেলেই নিশ্চিত সিদ্ধান্ত নিয়ে নেয় এবং ডানের এক্সপ্রেশন আর চেক বা ইভ্যালুয়েট করে কম্পিউটার এর জিপিইউ সাইকেল নষ্ট করে না।"
      },
      {
        question: "ternary (? :) অপারেটর ব্যবহারে কোন সীমাবদ্ধতাটি জাভায় মেনে চলতে হয়?",
        options: [
          { label: "এটি শুধুমাত্র ৩টি ভেরিয়েবল যোগ করতে পারে", isCorrect: false },
          { label: "উভয় এক্সপ্রেশন ব্রাঞ্চের রিটার্ন টাইপ সামঞ্জস্যপূর্ণ (compatible) হতে হবে এবং তা void হওয়া যাবে না", isCorrect: true },
          { label: "এটি লুপ ব্রেক স্টেটমেন্ট হিসেবে কেবল ব্যবহারযোগ্য", isCorrect: false },
          { label: "এটি কোনো কন্ডিশনাল চেকিং করতে পারে না", isCorrect: false }
        ],
        explanation: "? এবং : এর মধ্যকার এক্সপ্রেশন দুটি অবশ্যই সামঞ্জস্যপূর্ণ একই টাইপের মান ফেরত দিতে হবে যা কোনো অ্যাসাইনমেন্টে ব্যবহৃত হতে পারে, এবং এটি কোনো অবস্থাতেই void মেথড বা কাজ করতে পারবে না।"
      }
    ]
  },
  {
    id: "control-flow-deep",
    title: "Lesson 14: Control Statements & Loops",
    description: "Branching blocks, switch syntax, pre-tested/post-tested loops, and break/continue/return jump states.",
    content: `
# 🚦 Lesson 14: Control Statements & Loops

Java applications execute sequentially unless redirected using selection, loop iteration, or jump commands.

---

## 🎋 1. Selection Statements (If-Else & Switch)
Selection statements allow you to branch execution based on dynamic evaluation conditions.

### ❓ If-Else Variants:
1. **Simple if**: Runs a block of code if and only if the specified condition is \`true\`.
2. **If-else**: Runs one block of code if the condition is \`true\`, and an alternative block if it is \`false\`.
3. **Nested if**: An inner \`if\` statement declared inside another outer \`if\` block.
4. **If-else-if ladder**: Evaluates multiple sequential conditions until one matches.

---

### 🎨 Comparison: C vs. Java Selection Structures

#### 1️⃣ Project Even-Odd Calculation
Check if a number is even or odd using the modulo operator:

* **C Implementation**:
  \`\`\`c
  #include <stdio.h>
  int main() {
      int number = 4;
      if(number % 2 == 0) {
          printf("%d is even number", number);
      }
      return 0; // Requires system exit declaration
  }
  \`\`\`
* **Java Implementation**:
  \`\`\`java
  class EvenOdd {
      public static void main(String args[]) {
          int number = 4;
          if (number % 2 == 0) {
              System.out.println(number + " is even number");
          }
      }
  }
  \`\`\`

#### 2️⃣ Find the Largest of Three
Identify the maximum value among three target parameters:

* **C Implementation**:
  \`\`\`c
  #include <stdio.h>
  int main() {
      int a = 12, b = 23, c = 34;
      if (a > b && a > c) printf("a is largest");
      if (b > a && b > c) printf("b is largest");
      if (c > a && c > b) printf("c is largest");
      return 0;
  }
  \`\`\`
* **Java Implementation**:
  \`\`\`java
  class Largest {
      public static void main(String args[]) {
          int a = 12, b = 23, c = 34;
          if (a > b && a > c) System.out.println("a is largest");
          if (b > a && b > c) System.out.println("b is largest");
          if (c > a && c > b) System.out.println("c is largest");
      }
  }
  \`\`\`

---

### 🗳️ Example III: Voting Eligibility Analyzer (\`Vote.java\`)
Examines voting eligibility benchmarks using a standard \`if-else\` block.

\`\`\`java
// Verbatim from official slide Page 15
class Vote {
    public static void main(String args[]) {
        int age = 20;
        
        if (age >= 18) {
            System.out.println("You are eligible to vote...");
        } else {
            System.out.println("Sorry ... you can't vote");
        }
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  You are eligible to vote...
  \`\`\`

---

### 🪆 Example IV: Nested If Statements (\`NestedIfElse.java\`)
Demonstrates control flow through nested condition scopes before executing final print actions.

\`\`\`java
// Verbatim from official slide Page 17
class NestedIfElse {
    public static void main(String args[]) {
        int a = 100;
        int b = 200;
        
        if (a == 100) {
            if (b == 200) {
                System.out.println("Value of a is 100 and b is 200\n");
            }
        }
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  Value of a is 100 and b is 200
  \`\`\`

---

### 📊 Example V: Grade Assignment Ladder (\`IfElseIfLadder.java\`)
Evaluates student scores against several boundary structures using an \`if-else-if\` ladder.

\`\`\`java
// Verbatim from official slide Page 18
class IfElseIfLadder {
    public static void main(String args[]) {
        int marks = 82;
        
        if (marks > 85 && marks <= 100) {
            System.out.println("Congrats ! you scored grade A ...");
        } else if (marks > 60 && marks <= 85) {
            System.out.println("You scored grade B + ...");
        } else if (marks > 40 && marks <= 60) {
            System.out.println("You scored grade B ...");
        } else if (marks > 30 && marks <= 40) {
            System.out.println("You scored grade C ...");
        } else {
            System.out.println("Sorry you are fail ...");
        }
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  You scored grade B + ...
  \`\`\`

---

### 🔀 Example VI: Multi-Way Switch System (\`SwitchExample.java\`)
The **switch statement** provides an elegant, highly readable alternative to long, complex \`if-else-if\` ladders when comparing a single variable against various constant values.

\`\`\`java
// Verbatim from official slide Page 20
class SwitchExample {
    public static void main(String args[]) {
        int number = 10;
        
        switch (number) {
            case 10:
                System.out.println("number is equals to 10");
                break;
            case 50:
                System.out.println("number is equal to 50");
                break;
            case 100:
                System.out.println("number is equal to 100");
                break;
            default:
                System.out.println("number is not equal to 10, 50 or 100");
        }
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  number is equals to 10
  \`\`\`

---

## 🔁 2. Iteration Statements (Loops in Java)
Loops repeat a block of code multiple times. This enables **code reusability**—allowing you to perform repetitive tasks or traverse data structures (like arrays or lists) without writing the same code over and over again.

\`\`\`
                         Java Iteration Loops
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
  [ do-while loop ]        [ while loop ]           [ for loop ]
  - Post-Tested            - Pre-Tested             - Pre-Tested
  - Always runs >= 1 time  - Runs optional 0+ times - Built-in initializers
\`\`\`

### 1) The do-while Loop (Post-Tested)
* **The Logic**: Executes the body of the loop first, and then evaluates the conditional statement at the bottom.
* **Key Advantage**: Because safety checks are evaluated at the bottom, **the loop body is guaranteed to execute at least once**, even if the condition is false on the very first try. Highly useful for interactive menu systems.
* **Syntax**:
  \`\`\`java
  do {
      // Loop body code
  } while (condition);
  \`\`\`

### 2) The while Loop (Pre-Tested)
* **The Logic**: Evaluates the condition first. If it is true, the loop body executes; if it is false, the loop body is bypassed entirely (running 0 times).
* **Key Advantage**: Standard choice when the exact number of iterations is not known in advance.
* **Syntax**:
  \`\`\`java
  while (condition) {
      // Loop body code
  }
  \`\`\`

### 3) The for Loop (Pre-Tested)
* **The Logic**: Consolidates loop initialization, condition evaluation, and increment/decrement updates into a single, clean line of code.
* **Key Advantage**: Standard choice when the exact number of iterations is known before starting the loop.
* **Syntax**:
  \`\`\`java
  for (initialization; condition; update) {
      // Loop body code
  }
  \`\`\`

---

## 🦘 3. Jump Statements (break, continue, & return)
Jump statements transfer execution control immediately to another part of your program.

### 💨 3.1 Using break
The \`break\` statement has three key use cases:
1. **Terminating a Switch**: Exits case matching blocks.
2. **Exiting a Loop**: Forces immediate termination of a loop, bypassing any remaining iterations.
3. **Goto Alternative**: Acts as a "civilized" form of \`goto\` to jump safely from deep nest levels.

#### 🚪 Exiting a loop early (\`BreakLoop.java\`):
\`\`\`java
// Verbatim from official slide Page 25
class BreakLoop {
    public static void main(String args[]) {
        for (int i = 0; i < 100; i++) {
            if (i == 10) break; // Exits the loop completely once 'i' hits 10
            System.out.println("i: " + i);
        }
        System.out.println("Loop complete.");
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  i: 0
  ...
  i: 9
  Loop complete.
  \`\`\`

---

### ⏭️ 3.2 Using continue
Instead of terminating the loop completely, the \`continue\` statement skips the rest of the current iteration and jumps directly to the beginning of the next loop cycle.

#### ♻️ Skipping loop steps (\`Continue.java\`):
\`\`\`java
// Verbatim from official slide Page 25
class Continue {
    public static void main(String args[]) {
        for (int i = 0; i < 10; i++) {
            System.out.print(i + " ");
            if (i % 2 == 0) continue; // Skip even numbers
            System.out.println("");
        }
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  0 1 
  2 3 
  4 5 
  6 7 
  8 9 
  \`\`\`

---

### 🏁 3.3 Using return
The \`return\` statement explicitly exits the current active method, immediately transferring control back to whatever called it.

#### 🚪 Exiting a method completely (\`Return.java\`):
\`\`\`java
// Verbatim from official slide Page 26
class Return {
    public static void main(String args[]) {
        boolean t = true;
        
        System.out.println("Before the return.");
        
        if (t) return; // Immediately returns to the JVM, ending the program
        
        // This will never be printed
        System.out.println("This won't execute.");
    }
}
\`\`\`
* **Expected Terminal Output**:
  \`\`\`
  Before the return.
  \`\`\`

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **while vs. do-while**: \`while\` লুপে কন্ডিশন মিথ্যা হলে কোড জীবনেও একবারও চলবে না, একে বলে প্রাক-পরীক্ষিত (Pre-tested)। কিন্তু \`do-while\` তে কন্ডিশন ভুল হলেও বডি অন্তত একবার কাজ করবেই (Post-tested)।
> * **break vs. continue**: \`break\` চিরতরে লুপ বন্ধ করে বের করে দেয়। আর \`continue\` লুপ বন্ধ করে না, শুধু বর্তমান রাউন্ডটি স্কিপ করে পরের রাউন্ডের বেল বাজিয়ে দেয়!

### ⚠️ Common Academic Trap:
> **Question**: *Can a switch handle fractional float parameters in Java?*
> **Answer**: No. A Java switch statement only supports integers, characters, strings (Java 7+), and enums. Passing a \`float\`, \`double\`, or \`boolean\` will throw a compilation error.

### 🎓 IIUC Exams Spotlight:
> *Detail the differences between 'while' and 'do-while' loops with appropriate flowcharts.*
> Always emphasize that do-while evaluates its loop condition *after* executing the loop body (post-tested loop), making it the ideal choice for menu-driven console games or terminal control displays where at least one initial display iteration is mandatory.
`,
    reviewQuestions: [
      "Detail the structural variants of the Java 'if' statement, supplying syntax maps.",
      "Compare and contrast C vs. Java control behaviors, providing program proofs for Even/Odd evaluations and identifying the Largest of Three.",
      "State the primary advantages of utilizing looping structures in Java.",
      "Explain the exact functional differences between pre-tested (while) and post-tested (do-while) loops, listing their respective syntax structures.",
      "Write short, concise notes with illustrative examples for the following jump statement commands: 1. break, 2. continue, 3. return."
    ],
    quizzes: [
      {
        question: "জাভাতে 'do-while' লুপের সবচেয়ে অনন্য বৈশিষ্ট্য কোনটি?",
        options: [
          { label: "এটি কোনো কন্ডিশন চেকিং ছাড়াই আজীবন চলতে পারে", isCorrect: false },
          { label: "লুপ কন্ডিশন মিথ্যা হলেও লুপের ভেতরের কোড ব্লকটি অন্তত একবার (at least once) এক্সিকিউট হওয়া নিশ্চিত করে", isCorrect: true },
          { label: "এটি অন্যান্য লুপের চেয়ে অনেক বেশি দ্রুততম", isCorrect: false },
          { label: "এটি মেমরিতে নতুন রেফারেল তৈরি করা বন্ধ করে দেয়", isCorrect: false }
        ],
        explanation: "do-while একটি post-tested লুপ। কন্ডিশন টেস্ট সবার শেষে হওয়ার কারণে শুরুতে কন্ডিশন মেলুক বা না মেলুক, কোড ব্লকটি অন্তত একবারের জন্য রান হতে বাধ্য।"
      },
      {
        question: "জাভাতে switch স্টেটমেন্টের কন্ডিশন প্যারামিটার হিসেবে নিচের কোন ডাটা টাইপটি অবৈধ?",
        options: [
          { label: "int", isCorrect: false },
          { label: "char", isCorrect: false },
          { label: "double", isCorrect: true },
          { label: "String", isCorrect: false }
        ],
        explanation: "জাভাতে switch শুধুমাত্র অবিভাজ্য পূর্ণসংখ্যা (byte, short, int, char), Enums এবং Strings সাপোর্ট করে। অবিকল মান যাচাই করতে সমস্যা হওয়ার কারণে double বা float ফ্লোটিং-পয়েন্ট টাইপ এখানে সরাসরি অবৈধ।"
      },
      {
        question: "লুপে break এবং continue এর মধ্যবর্তী প্রধান পার্থক্য কী?",
        options: [
          { label: "break মেমরি খালি করতে সাহায্য করে এবং continue মেমরি পূর্ণ করে", isCorrect: false },
          { label: "break লুপটি সম্পূর্ণ বাতিল (terminate) করে দেয় এবং continue কেবল বর্তমান চক্রটি স্কিপ করে পরবর্তী চক্রে লাফ দেয়", isCorrect: true },
          { label: "break দিয়ে মেথড রিটার্ন করা হয় এবং continue দিয়ে লুপ চিরজীবী হয়", isCorrect: false },
          { label: "উভয়ের মধ্যে কোনো বাস্তব অমিল নেই", isCorrect: false }
        ],
        explanation: "break লুপ প্রক্রিয়া সম্পূর্ণ ভেঙে দেয় এবং লুপের বাইরে নিয়ে যায়। আর continue কেবল চলতি বডি সাইকেল পার্টটুকু স্কিপ করে সঙ্গে সঙ্গে পরবর্তী ইটারেশনে লুপ চালায়।"
      }
    ]
  }
];
