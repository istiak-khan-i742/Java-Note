import { Lesson } from './lessons';

export const section3Lessons: Lesson[] = [
  {
    id: "s3-overview",
    title: "Section Overview",
    description: "Overview of Section III: Classes & Objects System",
    content: `
# 📙 Section III: Classes and Objects
## Complete Syllabus Map (Lessons 15 to 21)

Welcome to **Section III: Classes and Objects**. In Java, Object-Oriented Programming (OOP) begins with the fundamental relationship between a class and its instances. This section covers structural declarations, dynamic allocations using \\\`new\\\`, multiple modes of instance variable initialization, method behavior optimization, constructors, the key keyword triad (\\\`this\\\`, \\\`final\\\`, \\\`static\\\`), parameter-passing laws, and nested class declarations.

---

### 📋 Section III Course Syllabus Checklist
Below is a checklist showing how every topic in the official section syllabus is thoroughly mapped to our masterclass lessons:

- [x] **What is an Object & Class (State, Behavior, Identity)** ➜ Covered in *Lesson 15, 16 & 17: Objects and Classes*
- [x] **Instance variables (Lifecycle & Heap allocation)** ➜ Covered in *Lesson 15, 16 & 17: Objects and Classes*
- [x] **3 Ways to Initialize Objects (Reference, Method, Constructor)** ➜ Covered in *Lesson 15, 16 & 17: Objects and Classes*
- [x] **Verbatim Project Walkthroughs (Rectangle Area, Account Banking Simulator)** ➜ Covered in *Lesson 15, 16 & 17 (Verbatim Pages 7, 8)*
- [x] **Constructors & Golden Creation Rules** ➜ Covered in *Lesson 18 & 19: Constructors in Java*
- [x] **No-arg (Default) vs. Parameterized Constructors** ➜ Covered in *Lesson 18 & 19: Constructors in Java*
- [x] **Constructor Overloading Mechanics** ➜ Covered in *Lesson 18 & 19: Constructors in Java*
- [x] **Constructor vs. Method Comparative Analysis** ➜ Covered in *Lesson 18 & 19: Constructors in Java*
- [x] **The Triad Keywords: \\\`this\\\`, \\\`static\\\`, and \\\`final\\\`** ➜ Covered in *Lesson 19.5: The Key Triad Keywords*
- [x] **Calling a Class Method & Passing Parameters (Call-by-Value Laws)** ➜ Covered in *Lesson 19.8: Passing Parameters & Method Calls*
- [x] **Nested and Inner Classes** ➜ Covered in *Lesson 20: Nested Classes*
- [x] **Class Test I & Midterm Review Guide (verbatim Class Test 1)** ➜ Covered in *Lesson 21: Class Test I & Review*

---

### 🗺️ Masterclass Lesson Navigation
Each lesson has been architected to provide a masterclass learning experience, containing complete verbatim notes and diagrams from official slides, blended with beginner-friendly guides, full annotated code examples, and practice checkpoints.

1. **Lesson 15, 16 & 17: Objects and Classes**
   * Detailed breakdown of state, behavior, identity, 3 ways of instance assignment, and complete bank/rectangle codes.
2. **Lesson 18 & 19: Constructors in Java**
   * Golden rules, no-argument initialization, customized constructor overlays, and comparison matrix tables.
3. **Lesson 19.5: The Key Triad Keywords: \\\`this\\\`, \\\`static\\\`, and \\\`final\\\`**
   * Eliminating variable shadowing via \\\`this\\\`, global class members via \\\`static\\\`, and locking down constants with \\\`final\\\`.
4. **Lesson 19.8: Passing Parameters & Method Calls**
   * Inside the JVM parameter stack: proving why Java uses strictly "Call-by-Value" and tracing heap reference flows.
5. **Lesson 20: Nested Classes (Inner, Static, and Anonymous)**
   * Structuring helper classes cleanly within parental bounds.
6. **Lesson 21: Class Test I & Section III Review**
   * Preparation roadmap, exam cheat sheets, and solved textbook exam questions.
`
  },
  {
    id: "objects-classes-deep",
    title: "Lesson 15, 16 & 17: Objects and Classes",
    description: "Definition of objects (state, behavior, identity) vs classes, new keyword heap allocations, 3 initialization strategies, and verbatim bank/rectangle simulations.",
    content: `
# 📦 Lesson 15, 16 & 17: Objects and Classes

## 🔍 1. What is an Object in Java?
An **object** is any real-world entity that contains a clearly defined **state** and **behavior**. In Java, objects are run-time entities created dynamically in memory. They may represent a physical tangible object (e.g., a pen, chair, or car) or a logical intangible system (e.g., a bank account, scheduling task).

### 📐 Three Core Characteristics of an Object:
1. **State**: Represents the data values (or attributes) stored within the object.
2. **Behavior**: Represents the functional capabilities or actions the object can perform (e.g. deposit, withdraw, write).
3. **Identity**: A unique internal signature used by the Java Virtual Machine (JVM) to distinguish each object in memory. This identity is managed via a unique internal ID that is invisible to developers.

* **Pen Object Example**:
  * **State**: Name is *Matador*, Color is *White*.
  * **Behavior**: Used to *write* (exposed via methods).

---

## 🏛️ 2. What is a Class in Java?
A **class** is a logical blueprint, template, or group-specification from which objects are generated. A class is **not** a physical entity and occupies no space in memory until instantiated into an object.

### 🧩 A Java Class Can Contain:
* **Fields** (Instance variables / attributes representing State)
* **Methods** (Functions exposing Behavior)
* **Constructors** (Special codes used to initialize objects)
* **Instance/Static Blocks** (Initialization sequences)
* **Nested Classes & Interfaces**

---

### 🧱 General Syntax Form of a Class:
\\\`\\\`\\\`java
class ClassName {
    // Member fields / state
    dataType field1;
    dataType field2;
    
    // Member methods / behavior
    returnType method1(parameters) {
        // method body
    }
}
\\\`\\\`\\\`

---

## 💾 3. Instance Variables & The \\\`new\\\` Keyword
* **Instance Variables**: A variable declared inside a class but outside of any method is known as an instance variable. It does not receive memory at compile time; instead, it is allocated space at runtime inside the **JVM Heap** whenever a new class instance (object) is created.
* **The \\\`new\\\` Keyword**: The **new** keyword allocates dynamic memory on the heap at runtime for new objects, returning a unique reference memory address to the stack-based reference variable.

\\\`\\\`\\\`
  Stack Memory                        Heap Memory (Dynamic Allocate)
 ┌───────────────┐                  ┌─────────────────────────────────────┐
 │    s1         │─────────────────>│  Student Object Instance            │
 │ (Ref Address) │                  │  - id: 171004                       │
 │               │                  │  - name: "Baizid"                   │
 └───────────────┘                  └─────────────────────────────────────┘
\\\`\\\`\\\`

---

## 🚀 4. Three Ways to Initialize Objects in Java
Initializing an object means writing initial data values into its fields. Java offers 3 different ways to do this:

### 1) Direct Reference Initialization
Values are assigned directly to the object's instance variable fields from outside the class using reference variables and the dot (\\\`.\\\`) operator.

\\\`\\\`\\\`java
// Verbatim from official slide Page 4
class Student {
    int id;
    String name;
}

class TestStudent2 {
    public static void main(String args[]) {
        Student s1 = new Student();
        
        // Write values using reference directly
        s1.id = 171004;
        s1.name = "Baizid";
        
        System.out.println(s1.id + " " + s1.name);
    }
}
\\\`\\\`\\\`
* **Expected Terminal Output**:
  \\\`\\\`\\\`
  171004 Baizid
  \\\`\\\`\\\`

---

### 2) Method-Based Initialization
Values are sent through helper parameters to a member method, which assigns them securely to the instance variables. This introduces clean encapsulation!

\\\`\\\`\\\`java
// Verbatim from official slide Page 5
class Student {
    int rollno;
    String name;
    
    // Helper method to write initial values
    void insertRecord(int r, String n) {
        rollno = r;
        name = n;
    }
    
    void displayInformation() {
        System.out.println(rollno + " " + name);
    }
}

class TestStudent4 {
    public static void main(String args[]) {
        Student s1 = new Student();
        Student s2 = new Student();
        
        s1.insertRecord(171001, "Hridoy");
        s2.insertRecord(171002, "Shihab");
        
        s1.displayInformation();
        s2.displayInformation();
    }
}
\\\`\\\`\\\`
* **Expected Terminal Output**:
  \\\`\\\`\\\`
  171001 Hridoy
  171002 Shihab
  \\\`\\\`\\\`

---

### 3) Constructor-Based Initialization
Values are provided as options during the object instantiation cycle right inside the parenthetical bounds of the \\\`new\\\` constructor statement.

\\\`\\\`\\\`java
// Verbatim from official slide Page 6
class Student4 {
    int id;
    String name;
    
    // Parameterized Constructor
    Student4(int i, String n) {
        id = i;
        name = n;
    }
    
    void display() {
        System.out.println(id + " " + name);
    }
}

class TestStudent5 {
    public static void main(String args[]) {
        Student4 s1 = new Student4(171001, "Hridoy");
        Student4 s2 = new Student4(171002, "Shihab");
        
        s1.display();
        s2.display();
    }
}
\\\`\\\`\\\`
* **Expected Terminal Output**:
  \\\`\\\`\\\`
  171001 Hridoy
  171002 Shihab
  \\\`\\\`\\\`

---

## 📐 5. Verbatim Slide Practice Walkthroughs

### 🛑 Project I: Rectangle Area calculation (\\\`TestRectangle1.java\\\`)
This program uses a \\\`Rectangle\\\` class containing length and width characteristics to compute areas.

\\\`\\\`\\\`java
// Verbatim from official slide Page 7
class Rectangle {
    int length;
    int width;
    
    void insert(int l, int w) {
        length = l;
        width = w;
    }
    
    void calculateArea() {
         System.out.println(length * width);
    }
}

class TestRectangle1 {
    public static void main(String args[]) {
        Rectangle r1 = new Rectangle();
        Rectangle r2 = new Rectangle();
        
        r1.insert(11, 5);
        r2.insert(3, 15);
        
        r1.calculateArea();
        r2.calculateArea();
    }
}
\\\`\\\`\\\`
* **Expected Terminal Output**:
  \\\`\\\`\\\`
  55
  45
  \\\`\\\`\\\`

---

### 💰 Project II: Live Bank Account Simulator (\\\`TestAccount.java\\\`)
One of the best real-world examples of classes and methods is a Banking System. We will write an \\\`Account\\\` class to model transactions:

\\\`\\\`\\\`java
// Verbatim from official slide Page 8-9
class Account {
    int acc_no;
    String name;
    float amount;
    
    void insert(int a, String n, float amt) {
        acc_no = a;
        name = n;
        amount = amt;
    }
    
    void deposit(float amt) {
        amount = amount + amt;
        System.out.println(amt + " deposited");
    }
    
    void withdraw(float amt) {
        if (amount < amt) {
            System.out.println("Insufficient Balance");
        } else {
            amount = amount - amt;
            System.out.println(amt + " withdrawn");
        }
    }
    
    void checkBalance() {
        System.out.println("Balance is: " + amount);
    }
    
    void display() {
        System.out.println(acc_no + " " + name + " " + amount);
    }
}

class TestAccount {
    public static void main(String[] args) {
        Account a1 = new Account();
        
        a1.insert(171006, "Hamdan", 1000);
        a1.display();
        a1.checkBalance();
        a1.deposit(40000);
        a1.checkBalance();
        a1.withdraw(15000);
        a1.checkBalance();
    }
}
\\\`\\\`\\\`
* **Expected Terminal Output**:
  \\\`\\\`\\\`
  171006 Hamdan 1000.0
  Balance is: 1000.0
  40000.0 deposited
  Balance is: 41000.0
  15000.0 withdrawn
  Balance is: 26000.0
  \\\`\\\`\\\`

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **State vs. Behavior**: অবজেক্টের 'State' হলো তার ভেরিয়েবল (data fields), আর 'Behavior' হলো তার মেথডস (methods)। যেমন- ব্যাংক একাউন্ট অবজেক্টের ব্যালেন্স (State) এবং টাকা জমা বা তোলা (Behavior)।
> * **new Keyword**: নতুন অবজেক্ট তৈরির সময় \\\`new\\\` কিওয়ার্ড হিপ মেমরিতে স্পেস বরাদ্দ করে। হিপ হচ্ছে জাভার মূল অবজেক্ট স্টোরেজ যেখানে ডায়নামিকালি মেমরি তৈরি হয়।

### ⚠️ Common Academic Trap:
> **Question**: *Does a Class consume physical memory space at compile time or load time?*
> **Answer**: Absolute **No**. A Class is merely a blueprint, representing a *Logical Entity*. Physical space is allocated exclusively at runtime in the heap space when the \\\`new\\\` expression executes.

### 🎓 IIUC Exams Spotlight:
> *List and explain the 3 ways to initialize objects in Java with code snippets.*
> While reference-based initialization is easiest, it violates security encapsulation. Explain how method-based (via sets/inserts) and constructor-based initializations maintain elegant modularity and object state validation.
`,
    reviewQuestions: [
      "Outline the logical differences between objects and classes, explaining state, behavior, and identity.",
      "Justify the role of the 'new' keyword in allocating memory on the JVM Heap.",
      "Detail the three structural ways to initialize an object in Java with complete code examples.",
      "Implement a fully functional Account transactions simulator demonstrating deposit and withdraw checks."
    ],
    quizzes: [
      {
        question: "জাভাতে একটি ক্লাসের (Class) মেমরি ডিস্ট্রিবিউশন সংক্রান্ত কোন তথ্যটি সত্য?",
        options: [
          { label: "ক্লাস তৈরি করলেই সেটি সরাসরি স্ট্যাক মেমরিতে বড় সাইজের ডাটা ব্লক জমা করে", isCorrect: false },
          { label: "ক্লাস একটি লজিক্যাল ব্লুপ্রিন্ট হওয়ায় সরাসরি কোনো ফিজিক্যাল মেমরি খরচ করে না যতক্ষণ না অবজেক্ট তৈরি হয়", isCorrect: true },
          { label: "ক্লাসের সব ফাংশন কম্পাইল টাইমে হার্ডডিস্ক স্পেস দখল করে", isCorrect: false },
          { label: "ক্লাস শুধুমাত্র বাইনারি ক্যাশ মেমরি দখল করে", isCorrect: false }
        ],
        explanation: "ক্লাস একটি লজিক্যাল ডিজাইন বা ব্লুপ্রিন্ট মাত্র। তাই এর নিজস্ব কোনো ফিজিক্যাল বা অবজেক্ট লেভেলের মেমরি অকুপেশন থাকে না, মেমরি বরাদ্দ হয় কেবল 'new' দিয়ে অবজেক্ট তৈরির পর।"
      },
      {
        question: "অবজেক্টের ক্ষেত্রে State and Behavior বলতে মূলত কি কি নির্দেশ করা হয়?",
        options: [
          { label: "State বলতে অবজেক্টের মেথড এবং Behavior বলতে ভেরিয়েবেলের মেমরি অ্যাড্রেস বোঝায়", isCorrect: false },
          { label: "State বলতে অবজেক্টের ডাটা ভ্যালু বা ভেরিয়েবল এবং Behavior বলতে তার ভেতরের মেথডস বা ফাংশন বোঝায়", isCorrect: true },
          { label: "তারা কেবল স্ট্যাটিক ইনপুট লাইব্রেরি নির্দেশ করে", isCorrect: false },
          { label: "এদের সরাসরি কোনো আইডেন্টিটি জাভায় কাজ করে না", isCorrect: false }
        ],
        explanation: "State ধারণ করে অবজেক্টের অভ্যন্তরীণ পরিস্থিতি বা ডেটা (Fields/Variables) এবং Behavior নির্দেশ করে সে অবজেক্ট কী কী কাজ সম্পাদন করতে সক্ষম (Methods)।"
      },
      {
        question: "নিচের কোন পদ্ধতিতে অবজেক্ট ইনিশিয়ালাইজ করলে OOP-এর Encapsulation ল বা নিরাপত্তা সবচেয়ে বেশি লঙ্ঘিত হয়?",
        options: [
          { label: "Constructor বা প্যারামিটার হ্যান্ডলার দিয়ে", isCorrect: false },
          { label: "Insert methods ব্যবহার করে ভ্যালু আপডেট করলে", isCorrect: false },
          { label: "Reference variables দিয়ে সরাসরি ভেরিয়েবল অ্যাক্সেস করে ভ্যালু বসালে", isCorrect: true },
          { label: "কোনো পদ্ধতিতেই ল লঙ্ঘিত হয় না", isCorrect: false }
        ],
        explanation: "সরাসরি রেফারেন্স ভেরিয়েবল ব্যবহার করে বাইরের কোনো ক্লাস থেকে fields পরিবর্তন করলে (যেমন: s1.id = 171004) ডেটা হাইডিং বা ইনক্যাপসুলেশন ভঙ্গ হয়, যা সিকিউর ডিজাইনের পরিপন্থী।"
      }
    ]
  },
  {
    id: "constructors-master",
    title: "Lesson 18 & 19: Constructors, Overloading & Lifecycle",
    description: "Crucial constructor rules, default and parameterized designs, constructor overloading, and structured comparative differences.",
    content: `
# 🛠️ Lesson 18 & 19: Constructors, Overloading & Lifecycle

## 🏗️ 1. What is a Constructor?
In Java, a **constructor** is a specialized block of code similar to a method, designed to initialize the newly allocated memory space of an object. It is called automatically the exact microsecond an instance of a class is created using the \\\`new\\\` keyword.

### 📐 Structural Features:
* **Creation Step**: At the moment of calling a constructor, the JVM allocates raw memory on the heap, and then populates fields with initial values defined by the constructor code.
* **The Silent Constructor**: If you declare a class with absolutely **no constructor written**, the Java compiler compiles an implicit, empty **Default Constructor** on your behalf.

---

## 📜 2. Three Golden Rules for Constructor Declarations
For a compiler to recognize a block of code as a constructor instead of a standard method, you must adapt three rules:

1. **Class Name Match**: The constructor name **must be exactly identical** to the class name.
2. **No Return Type**: A constructor **must not specify any return type**, not even \\\`void\\\`. (Specifying \\\`void\\\` turns it into an ordinary method!)
3. **Restricted Modifiers**: A constructor **cannot be declared** as \\\`abstract\\\`, \\\`static\\\`, \\\`final\\\`, or \\\`synchronized\\\`.

---

## 🗂️ 3. No-arg (Default) vs. Parameterized Constructors

### I. Default / No-arg Constructor
A constructor containing no custom arguments. Its primary purpose is to apply standard default values (like \\\`0\\\`, \\\`null\\\`, or false) to newly created objects.

\\\`\\\`\\\`java
// Verbatim from official slide Page 11
class Bike1 {
    // Custom no-arg constructor
    Bike1() {
        System.out.println("Bike is created");
    }
    
    public static void main(String args[]) {
        Bike1 b = new Bike1(); // Triggers the print statement immediately
    }
}
\\\`\\\`\\\`
* **Expected Terminal Output**:
  \\\`\\\`\\\`
  Bike is created
  \\\`\\\`\\\`

---

### II. Parameterized Constructor
A constructor configured with a specified list of parameters. It allows different objects to be initialized with unique, custom values upon creation.

\\\`\\\`\\\`java
// Verbatim from official slide Page 12
class Student4 {
    int id;
    String name;
    
    // Parameterized constructor forces parameters during creation
    Student4(int i, String n) {
        id = i;
        name = n;
    }
    
    void display() {
        System.out.println(id + " " + name);
    }
    
    public static void main(String args[]) {
        // Instantiate two distinct objects with unique data
        Student4 s1 = new Student4(171001, "Hridoy");
        Student4 s2 = new Student4(171002, "Shihab");
        
        s1.display();
        s2.display();
    }
}
\\\`\\\`\\\`
* **Expected Terminal Output**:
  \\\`\\\`\\\`
  171001 Hridoy
  171002 Shihab
  \\\`\\\`\\\`

---

## 🔀 4. Constructor Overloading in Java
Just like standard methods, constructors can be overloaded in Java. **Constructor Overloading** is a technique of declaring multiple constructors within the same class, differentiated by their **arguments list** (number of parameters, or their data types).

\\\`\\\`\\\`java
// Verbatim from official slide Page 13
class Student5 {
    int id;
    String name;
    int age;
    
    // Constructor variant A (takes two parameters)
    Student5(int i, String n) {
        id = i;
        name = n;
    }
    
    // Constructor variant B (overloaded, takes three parameters)
    Student5(int i, String n, int a) {
        id = i;
        name = n;
        age = a;
    }
    
    void display() {
        System.out.println(id + " " + name + " " + age);
    }
    
    public static void main(String args[]) {
        Student5 s1 = new Student5(171001, "Hridoy");
        Student5 s2 = new Student5(171002, "Shihab", 25);
        
        s1.display();
        s2.display();
    }
}
\\\`\\\`\\\`
* **Expected Terminal Output**:
  \\\`\\\`\\\`
  171001 Hridoy 0
  171002 Shihab 25
  \\\`\\\`\\\`
*Note*: For \\\`s1\\\`, the variable \\\`age\\\` defaults to \\\`0\\\` because it was initialized by variant A, which does not modify the \\\`age\\\` field.

---

## ⚖️ 5. Constructor vs. Method: The Diagnostic Difference
To perform well in exams, memorize this classic comparison table representing these two class structures:

| Technical Feature | Java Constructor | Java Method |
| :--- | :--- | :--- |
| **Primary Purpose** | Initializes the state (data variables) of a newly created object. | Exposes or defines the behavioral operations of an existing object. |
| **Return Value** | **Strictly forbidden** from defining any return type (including \\\`void\\\`). | **Must declare** a specific return helper type or \\\`void\\\`. |
| **Trigger Mechanism** | Invoked **implicitly** during object creation (via the \\\`new\\\` statement). | Invoked **explicitly** by calling its name via dot notation (\\\`obj.method()\\\`). |
| **Name Constraints** | Must match the class name exactly. | Can be any developer-defined name, following naming rules. |
| **Compiler Intervention** | Automatically created by the compiler if no constructors are declared. | Bypassed by the compiler; never created automatically. |

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **Golden Rule**: কনস্ট্রাক্টরের কোনো রিটার্ন টাইপ থাকতে পারবে না, এমনকি \\\`void\\\`ও না। ভুল করে যদি কনস্ট্রাক্টরের আগে \\\`void\\\` লিখে দেন (যেমন- \\\`void Student5()\\\`), তাহলে জাভা কম্পাইলার এটিকে আর কনস্ট্রাক্টর ভাববে না, বরং সাধারণ মেথডে রি-ক্লাসিফাই করে দেবে!
> * **Implicit Constructor**: আমরা যখনই কোনো নতুন অবজেক্ট তৈরি করি, মেমরি সাইকেল স্টার্ট করার জন্য মিনিমাম একটি কনস্ট্রাক্টর রান হইতেই হবে। আমরা নিজেরা কোডে কোনো কনস্ট্রাক্টর না লিখলে কম্পাইলার ব্যাকগ্রাউন্ডে একটি ফাঁকা ডিফল্ট কনস্ট্রাক্টর অটো-ইঞ্জেক্ট করে দেয়।

### ⚠️ Common Academic Trap:
> **Question**: *If you write a parameterized constructor in a class, does the compiler still provide the empty default constructor?*
> **Answer**: Absolute **No**. Once you write any custom constructor, Java disables the automatic creation of the default constructor. If you then attempt to instantiate with parameterless blueprints (e.g., \\\`new MyClass()\\\`), it throws a compile-time error unless you manually write an empty constructor!

### 🎓 IIUC Exams Spotlight:
> *Outline rules for creating constructors and detail constructor overloading with code examples.*
> Emphasize that constructor overloading gives the user choices of different execution entryways. Draw or list the compiler signatures showing how overloaded constructors are mapped.
`,
    reviewQuestions: [
      "Define Java Constructors and list the three rules for creating them.",
      "Justify the technical difference between Default and Parameterized constructors.",
      "Explain the exact concept of Constructor Overloading with a practical example.",
      "Compare and contrast Constructors and Methods across five technical features."
    ],
    quizzes: [
      {
        question: "জাভাতে একটি ক্লাসের জন্য কনস্ট্রাক্টর (Constructor) লেখার সময় কোন নিয়মটি কঠোরভাবে মেনে চলতে হয়?",
        options: [
          { label: "এটির পূর্বে অ্যাক্সেস মোডিফায়ার হিসেবে অবশ্যই 'static' থাকতে হবে", isCorrect: false },
          { label: "এটির নাম অবশ্যই সংশ্লিষ্ট ক্লাসের নামের সাথে হুবহু এক হতে হবে এবং রিটার্ন টাইপ থাকা যাবে না", isCorrect: true },
          { label: "এটি সব ক্ষেত্রে একটি পূর্ণ সংখ্যা বা Integer মান রিটার্ন করবে", isCorrect: false },
          { label: "এটিকে সবসময় main মেথডের পরে ডিক্লেয়ার করতে হবে", isCorrect: false }
        ],
        explanation: "জাভা কম্পাইলার ডিজাইন অনুসারে কনস্ট্রাক্টরের নাম ক্লাসের নামের অবিকল হতে হয় এবং এটার কোনো রিটার্ন টাইপ (меняться বা void-ও) থাকে না।"
      },
      {
        question: "যদি কোনো ক্লাসে শুধুমাত্র একটি parameterized constructor লেখা থাকে, তবে compiler-এর ডিফল্ট আচরণ কোনটা হয়?",
        options: [
          { label: "কম্পাইলার তবুও ব্যাকগ্রাউন্ডে একটি আর্গুমেন্টহীন নো-আর্গ (Default) কনস্ট্রাক্টর তৈরি করে রাখবে", isCorrect: false },
          { label: "কম্পাইলার কোনো ডিফল্ট নো-আর্গুমেন্ট কনস্ট্রাক্টর তৈরি করবে না; ফলে MyClass obj = new MyClass() লিখলে কম্পাইল টাইম এরর দিবে", isCorrect: true },
          { label: "কম্পাইলার পুরো ক্লাসটিকে ডিলিট করে দিবে", isCorrect: false },
          { label: "এটি সরাসরি রানটাইম এক্সেপশন সৃষ্টি করবে", isCorrect: false }
        ],
        explanation: "জাভাতে নিয়ম হলো- আপনি নিজের থেকে যদি একটিও কাস্টম বা প্যারামিটারাইজড কনস্ট্রাক্টর লেখেন, তাহলে কম্পাইলার তার অটোমেটিক ফ্রী ডিফল্ট কনস্ট্রাক্টর বানানোর সার্ভিসটি সরাসরি বন্ধ করে দেয়।"
      },
      {
        question: "Java Constructor এবং Java Method-এর মধ্যে সবচেয়ে মূল বৈসাদৃশ্য কোনটি?",
        options: [
          { label: "কনস্ট্রাক্টরের বডি থাকতে পারে কিন্তু মেথডের কোনো ব্র্যাকেট বডি বা কোড ব্লক থাকে না", isCorrect: false },
          { label: "মেথড স্বয়ংক্রিয়ভাবে কল হয় কিন্তু কনস্ট্রাক্টরের ক্ষেত্রে ডট অপারেটর দিয়ে ম্যানুয়ালি রান করতে হয়", isCorrect: false },
          { label: "কনস্ট্রাক্টরের কোনো রিটার্ন টাইপ থাকে না এবং এটি অবজেক্ট তৈরির সময় স্বয়ংক্রিয়ভাবে রান হয়, যখন মেথড ম্যানুয়ালি ইনভোক করতে হয় এবং তার রিটার্ন টাইপ থাকে", isCorrect: true },
          { label: "কনস্ট্রাকটর ডাটা প্রসেস করতে পারে না কিন্তু মেথড পারে", isCorrect: false }
        ],
        explanation: "কনস্ট্রাকটর অবজেক্ট ইনস্ট্যানশিয়েট করার সময় ইমপ্লিসিটলি বা নিজে থেকে রান হয় এবং এতে কোনো রিটার্ন টাইপ থাকে না, আর মেথড ডেটা প্রসেসিংয়ের পর অবশ্যই রিটার্ন টাইপ (বা void) দিয়ে এক্সপ্লিসিটলি রান করাতে হয়।"
      }
    ]
  },
  {
    id: "keywords-triad",
    title: "Lesson 19.5: The Key Triad Keywords - this, static, & final",
    description: "Deep-dive analysis of this (current context, shadowing reduction), static (class-level allocations, block sequence, methods), and final (constants, method overriding prevention, class hierarchy seals).",
    content: `
# 🛠️ Lesson 19.5: The Key Triad Keywords - this, static, & final

Beyond simple fields and methods, robust Java programs configure memory scopes, variable stability, and local reference pointers using **three core keywords**:

---

## 1️⃣ The \\\`this\\\` Keyword (Current Object Reference)
In Java, **this** is a reference variable that points directly to the current object whose method or constructor is being invoked.

### 📐 Structural Purposes:
* **Resolving Instance Variable Shadowing**: When local parameters share the exact same name as instance variables, the local parameter **shadows** (hides) the instance variable. Using \\\`this.variableName\\\` breaks the shadowing cycle.
* **Constructor Chaining**: Invoking one constructor from another constructor inside the same class using \\\`this(args)\\\`.

#### Shadowing Resolution Example:
\\\`\\\`\\\`java
class Student {
    int id; // Instance variable
    String name; // Instance variable
    
    // Parameter names 'id' and 'name' match instance names exactly
    Student(int id, String name) {
        this.id = id;     // 'this.id' refers to the instance attribute, 'id' is local parameter
        this.name = name; // 'this.name' refers to the instance attribute, 'name' is local parameter
    }
}
\\\`\\\`\\\`

---

## 2️⃣ The \\\`static\\\` Keyword (Class-Level Scope)
By default, class members require an object instance to be created before they can be accessed. However, declaring a member as **static** binds it directly to the **Class** itself, meaning it is shared globally by all instances.

### ⚙️ Main Applications of static:
1. **Static Variables**: Shared across all instantiated objects. Allocated *only once* in Class memory when the class is loaded. Highly memory efficient for constants or global configurations.
2. **Static Methods**: Can be invoked directly using the class name without creating any objects (e.g., \\\`Math.sqrt()\\\`).
3. **Static Block**: Used for static variables initialization. Runs exactly **once** when the class is first loaded into memory, even before the \\\`main()\\\` method executes!

#### ⚠️ Essential Restrictive Rules of Static Methods:
* Static methods **cannot** directly access non-static instance variables or invoke non-static instance methods.
* Static methods **cannot** reference the keywords \\\`this\\\` or \\\`super\\\` under any circumstances, because they run outside the context of any concrete object instance!

#### Complete Static Sequence Demonstration (\\\`StaticDemo.java\\\`):
\\\`\\\`\\\`java
class UseStatic {
    static int a = 3;
    static int b;
    
    static void meth(int x) {
        System.out.println("x = " + x);
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
    
    // Static Block executes first
    static {
        System.out.println("Static block initialized.");
        b = a * 4;
    }
    
    public static void main(String args[]) {
        meth(42);
    }
}
\\\`\\\`\\\`
* **Expected Terminal Output**:
  \\\`\\\`\\\`
  Static block initialized.
  x = 42
  a = 3
  b = 12
  \\\`\\\`\\\`

---

## 3️⃣ The \\\`final\\\` Keyword (Immutability & Safety)
The **final** keyword locks down structure and behaviors to prevent modifications. It can be applied at three key levels:

\\\`\\\`\\\`
                                  final Keyword
                                        │
         ┌──────────────────────────────┼──────────────────────────────┐
         ▼                              ▼                              ▼
 [ Variable Level ]              [ Method Level ]               [ Class Level ]
 - Prevents reassignment         - Prevents method overriding   - Prevents class inheritance
 - Acts as compile-time Constant - Secures sensitive logic      - Completely seals hierarchy
\\\`\\\`\\\`

### 📦 I. Final Variables (Constants)
A variable declared as \\\`final\\\` cannot have its value reassigned. It must be initialized immediately during declaration, or exactly once inside the constructor (called a *Blank Final Variable*).
\\\`\\\`\\\`java
final double PI = 3.14159265;
PI = 3.14; // COMPILE-TIME ERROR: Cannot assign a value to final variable!
\\\`\\\`\\\`

### 🚪 II. Final Methods (Overriding Prevention)
Declaring a method as \\\`final\\\` means subclasses are strictly prohibited from overriding or altering its behavior.
\\\`\\\`\\\`java
class Parent {
    final void showSecurityLog() {
        System.out.println("Encrypted Data Stream");
    }
}
// Any attempt to override 'showSecurityLog' in subclasses triggers compilation failure.
\\\`\\\`\\\`

### 🏛️ III. Final Classes (Inheritance Sealing)
Declaring a class as \\\`final\\\` prevents it from being extended (inherited) by any other class. This is used for core JDK security classes like \\\`String\\\` and \\\`Integer\\\`.
\\\`\\\`\\\`java
final class SecureVault { }
// class SubVault extends SecureVault { } // COMPILE-TIME ERROR: Cannot inherit from final SecureVault!
\\\`\\\`\\\`

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **this**: লোকাল ভ্যারিয়েবলের নাম আর ক্লাসের ভ্যারিয়েবলের নাম যদি একদম হুবহু এক হয়ে যায়, তখন ক্লাসের ভ্যারিয়েবলটি লোকাল ভ্যারিয়েবলের পেছনে লুকিয়ে যায় (যাকে Shadowing বলে)। আড়াল থেকে ক্লাসের আসল ভেরিয়েবলকে নির্দিষ্ট করে দেখাতে \\\`this\\\` ব্যবহার করা হয়।
> * **static**: স্ট্যাটিক মানে হলো এটি কোনো অবজেক্টের ব্যক্তিগত সম্পদ নয়, বরং পুরো ক্লাসের একটি শেয়ার্ড বৈশ্বিক ভ্যালু। অবজেক্ট না বানিয়েও স্ট্যাটিক মেথড সরাসরি কল করা যায়। 
> * **final**: ফাইনাল মানে চিরতরে ফিক্সড। ভ্যারিয়েবলের আগে দিলে মান পরিবর্তন করা যায় না, মেথডের আগে দিলে চাইল্ড ক্লাসে রি-রাইট ওভাররাইড করা যায় না, আর ক্লাসের আগে দিলে সেই ক্লাস থেকে কোনো চাইল্ড ক্লাস তৈরি (Inherit) করা যায় না।

### ⚠️ Common Academic Trap:
> **Question**: *Can a static method access a non-static variable? Why or why not?*
> **Answer**: **No**. Non-static variables require a physical object instance to be allocated on the heap first. Since static methods evaluate directly on the class template level *before* any objects exist, the compiler prevents access to ensure type safety.

### 🎓 IIUC Exams Spotlight:
> *Detail the purposes of 'this', 'static', and 'final' keywords with appropriate Java statements.*
> Write clean structures. For 'static', focus on highlighting the exact execution sequence showing how the static block runs before the main function.
`,
    reviewQuestions: [
      "Prove with code why the 'this' keyword is required to resolve instance variable shadowing of parameters.",
      "List the restrictions of static methods concerning instance fields and this/super pointers.",
      "Justify the three execution scopes of the 'final' keyword inside Java environments with code statements.",
      "Write a Java program demonstrating the exact execution hierarchy order of static blocks, static methods, and main-method entries."
    ],
    quizzes: [
      {
        question: "নিচের কোন কারণে জাভাতে 'this' কিওয়ার্ডটি সবচেয়ে অপরিহার্য ভূমিকা পালন করে?",
        options: [
          { label: "ক্লাসের মেমরি সাইজ দ্বিগুণ করার কাজে", isCorrect: false },
          { label: "প্যারামিটার এবং লোকাল ভেরিয়েবলের নাম যখন ক্লাসের ইনস্ট্যান্স ভেরিয়েবলের সমান হয়, তখন ইনস্ট্যান্স ভেরিয়ারবেলকে সুনির্দিষ্ট করতে", isCorrect: true },
          { label: "নতুন অবজেক্ট তৈরি এবং ডায়নামিকালি মেমরি রিলিজ করার স্বার্থে", isCorrect: false },
          { label: "স্ট্যাটিক ব্লককে মেথডের আগে রান করানোর জন্য", isCorrect: false }
        ],
        explanation: "ইনস্ট্যান্স ভেরিয়েবল এবং মেথড প্যারামিটারের নাম এক হয়ে গেলে ভেরিয়েবল শ্যাডোয়িং (Shadowing) ঘটে। এই পরিস্থিতি কাটিয়ে উঠতে ইনস্ট্যান্স মেম্বারকে নির্দেশ করতে 'this.variableName' ব্যবহৃত হয়।"
      },
      {
        question: "Static মেথড ব্যবহার করার ক্ষেত্রে কোন অন্যতম গুরুত্বপূর্ণ সীমাবদ্ধতাটি মেনে চলতে হয়?",
        options: [
          { label: "এটি কোনো কন্ডিশনাল লুপ রান করতে পারে না", isCorrect: false },
          { label: "এটি সরাসরি ক্লাসের নন-স্ট্যাটিক (instance) কোনো ভেরিয়েবল ট্র্যাক করতে বা this/super ব্যবহার করতে পারে না", isCorrect: true },
          { label: "এটির রিটার্ন টাইপ হিসেবে শুধুমাত্র void ব্যবহার করা যায়", isCorrect: false },
          { label: "কম্পাইলার কখনো স্ট্যাটিক মেথড ডিক্লেয়ারেশন এলাও করে না", isCorrect: false }
        ],
        explanation: "স্ট্যাটিক মেথড মূলত অবজেক্টের অ্যাসাইনমেন্ট ছাড়াই রান হয়। তাই হিপে অবজেক্ট তৈরির সাথে সম্পর্কিত ইনস্ট্যান্স ভেরিয়েবল ও this/super কিওয়ার্ড এখানে সরাসরি ব্যবহার করা অসম্ভব।"
      },
      {
        question: "একটি ক্লাসকে যদি 'final' কিওয়ার্ড দ্বারা ডিক্লেয়ার করা হয়, তবে সেটির উপর কোন নিষেধাজ্ঞা আরোপ করা হয়?",
        options: [
          { label: "ক্লাসটির কোনো ইনস্ট্যান্স বা অবজেক্ট তৈরি করা যায় না", isCorrect: false },
          { label: "ক্লাসটিকে অন্য কোনো ক্লাস ইনহেরিট (extends) অথবা সাব-ক্লাস করতে পারে না", isCorrect: true },
          { label: "এটির ভেতরে শুধু প্রাইভেট মেথড রাখতে হয়", isCorrect: false },
          { label: "এর কোনো সীমাবদ্ধতা জাভাতে নেই", isCorrect: false }
        ],
        explanation: "ফাইনাল ক্লাসের হায়ারার্কি স্থায়ীভাবে আটকে বন্ধ করে দেয়া হয়। তাই ফাইনাল ক্লাসকে অন্য কোনো সাব-ক্লাস দ্বারা ইনহেরিট করা জাভাতে আইনত বেআইনি।"
      }
    ]
  },
  {
    id: "parameters-methods",
    title: "Lesson 19.8: Passing Parameters & Calling Methods",
    description: "Calling-by-value versus call-by-reference mechanics, tracing stack references, and calling class methods cleanly.",
    content: `
# 🧪 Lesson 19.8: Passing Parameters & Calling Methods

One of the most widely debated topics in academic exams is how parameters are passed to methods when they are invoked in the JVM.

---

## 1️⃣ Call-by-Value vs. Call-by-Reference Theory
When invoking methods and passing arguments, computer science defines two general evaluation approaches:

* **Call-by-Value**: The method receives a copy of the argument's data value in its local activation stack frame. Changes made inside the method body **do not affect** the original variable in the caller.
* **Call-by-Reference**: The method receives a direct reference link to the caller's physical memory contents. Changes made within the method body **immediately update** the original variables.

### 🛑 The Absolute Java Law:
> **Java is strictly Call-by-Value in all cases.**

However, how the "value" behaves depends on the data type being passed:

---

## 🗂️ 2. Primitives vs. Objects Parameter Passing Mechanics

### I. Passing Primitives (Pass-by-Value)
When passing Java primitive types (like \\\`int\\\`, \\\`char\\\`, \\\`double\\\`), a pure copy of the numeric bits is pushed to the method stacks. The original variable remains totally unchanged.

\\\`\\\`\\\`java
class Test {
    void changeValue(int x) {
        x = x * 10; // Modifies local copy only
    }
}

class Main {
    public static void main(String args[]) {
        Test ob = new Test();
        int a = 15;
        ob.changeValue(a);
        System.out.println("Value of 'a' is: " + a);
    }
}
\\\`\\\`\\\`
* **Expected Terminal Output**:
  \\\`\\\`\\\`
  Value of 'a' is: 15
  \\\`\\\`\\\`
*Note*: The parameter \\\`a\\\` remains \\\`15\\\`, proving that modifying \\\`x\\\` inside the method body does not touch \\\`a\\\`.

---

### II. Passing Objects (Pass-by-Value-of-Reference)
When you pass an object instance to a method, JVM copies the **value of the reference variable** (the memory pointer address pointing to the heap). Both the caller and the method parameters now point directly to the same heap address, meaning modified properties inside the class fields are immediately visible on the outer object.

\\\`\\\`\\\`java
class Test {
    int a, b;
    
    Test(int i, int j) {
        a = i;
        b = j;
    }
    
    // Pass an object reference as parameter
    void modifyObject(Test o) {
        o.a *= 2;
        o.b /= 2;
    }
}

class CallByRefDemo {
    public static void main(String args[]) {
        Test ob = new Test(15, 20);
        System.out.println("Before: ob.a = " + ob.a + ", ob.b = " + ob.b);
        
        ob.modifyObject(ob); // Passes the reference copy
        System.out.println("After:  ob.a = " + ob.a + ", ob.b = " + ob.b);
    }
}
\\\`\\\`\\\`
* **Expected Terminal Output**:
  \\\`\\\`\\\`
  Before: ob.a = 15, ob.b = 20
  After:  ob.a = 30, ob.b = 10
  \\\`\\\`\\\`

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **Primitives**: জাভায় যখন আপনি সাধারণ ডেটা টাইপ (Int, Char) মেথডে পাস করেন, তখন কেবল ভ্যালুর একটি নিখাদ কপি মেথডের স্ট্যাকে যায়। মূল ভ্যারিয়েবল বিন্দুমাত্র পরিবর্তন হয় না।
> * **Objects**: যখন আপনি অবজেক্ট পাস করেন, তখনও কিন্তু মেমরি অ্যাড্রেসের কপিই পাস হয়। কিন্তু যেহেতু মূল রেফারেন্স ভ্যারিয়েবল ও মেথড প্যারামিটার দুজনেই হিপ মেমরির একই মেমরি অ্যাড্রেস শেয়ার করে, তাই মেথডের ভেতর অবজেক্ট পরিবর্তন করলেই বাইরের মূল অবজেক্টও ইনস্ট্যান্ট চেঞ্জ হয়ে যায়!

### 🎓 IIUC Exams Spotlight:
> *Differentiate between pass-by-value and pass-by-reference in Java.*
> Be extra cautious! Always clarify that Java pass-by-value parameters handle object reference variables because it is the **address value** that is copied. Present a neat heap/stack memory diagram to demonstrate this during exams.
`,
    reviewQuestions: [
      "Prove with code why primitive modifications inside methods do not affect caller variables.",
      "Detail how object parameter passing behaves, referencing heap addresses and reference copying.",
      "Write a Java class to swap two coordinates utilizing reference modification models."
    ],
    quizzes: [
      {
        question: "জাভাতে প্যারামিটার পাসিং (Parameter Passing) সংক্রান্ত কোন স্টেটমেন্টটি সর্বদা সত্য?",
        options: [
          { label: "জাভা সব ক্ষেত্রে strictly Call-by-value নীতি অনুসরণ করে", isCorrect: true },
          { label: "জাভা প্রিমিটিভের ক্ষেত্রে Call-by-reference এবং অবজেক্টের ক্ষেত্রে Call-by-value ব্যবহার করে", isCorrect: false },
          { label: "জাভা প্রিমিটিভ এবং অবজেক্ট উভয়ের জন্যই strictly Call-by-reference ব্যবহার করে", isCorrect: false },
          { label: "কোনো নীতিই জাভাতে কাজ করে না", isCorrect: false }
        ],
        explanation: "জাভা মূলত সম্পূর্ণভাবে Call-by-value সমর্থিত। অবজেক্ট পাসিংয়ের সময়ও অবজেক্টের আসল পয়েন্টার অ্যাড্রেসটির হুবহু একটি কপি পাঠানো হয়, বিধায় সেটিও ভ্যালু কপিই বটে।"
      },
      {
        question: "একটি ভেরিয়েবল int a = 5 মেথড প্যারামিটার হিসেবে পাস করে মেথডের ভেতর ৫ গুণ পরিবর্তন করলে মূল মেমরি স্কোপে কী পরিবর্তন ঘটে?",
        options: [
          { label: "মূল ভ্যারিয়েবলটি পরিবর্তিত হয়ে ২৫ হয়ে যাবে", isCorrect: false },
          { label: "মূল ভ্যারিয়েবলটি বিন্দুমাত্র পরিবর্তন হবে না এবং ৫-ই থাকবে", isCorrect: true },
          { label: "ভেরিয়েবলটি সরাসরি ডিলিট হয়ে যাবে", isCorrect: false },
          { label: "কম্পাইল টাইমে কোডটি এরর দিবে", isCorrect: false }
        ],
        explanation: "যেহেতু int একটি প্রিমিটিভ টাইপ, তাই পাস করার সময় মানের একটি কপি তৈরি হয়ে মেথড স্ট্যাকে যায়। সে কো অপারেটর দ্বারা এডিটিং এর দরুন কলিং মেথডের মূল বা আদি মান অপরিবর্তিত থাকে।"
      }
    ]
  },
  {
    id: "nested-classes",
    title: "Lesson 20: Nested Classes (Inner, Static, and Anonymous)",
    description: "Structure of nested classes inside Java oop frameworks, identifying member inner classes, static inner classes, and anonymous class systems.",
    content: `
# 🏢 Lesson 20: Nested Classes (Inner, Static, and Anonymous)

Java allows you to declare a class within another outer class. This structure is called a **Nested Class**.

---

## 🗂️ 1. Why Nest Classes?
* **Logical Grouping**: If a helper class is only useful to one other class, nesting keeps them tidily encapsulated together.
* **Increased Encapsulation**: Inner classes can access all private attributes of their outer enclosing classes.
* **Readable Code**: Keeps helper codes close to the logic that calls them.

---

## 2️⃣ Core Category Split: Outer vs Enclosed Memory
Nested classes are split into two major categories:

\\\`\\\`\\\`
                               Nested Classes
                                      │
         ┌────────────────────────────┴────────────────────────────┐
         ▼                                                         ▼
 [ Non-static Nested Class (Inner Class) ]                [ Static Nested Class ]
 - Bound to the Object instance of outer class            - Bound to the Class template directly
 - Can access outer's private variables                   - Cannot access outer's non-static fields
 - Includes local models & Anonymous types                 - Created as: Outer.StaticInner obj = new ...
\\\`\\\`\\\`

### 🧩 I. Member Inner Class (Non-static Inner)
Cannot exist without an established parent object. It belongs to the instance space of the outer parent.
\\\`\\\`\\\`java
class Outer {
    private int outer_x = 100;
    
    class Inner {
        void display() {
            System.out.println("outer_x = " + outer_x); // Directly accesses outer's private data!
        }
    }
}
\\\`\\\`\\\`

### ⚡ II. Static Enclosed Class (Static Nested)
Does not require parent objects. It belongs strictly to class memory.
\\\`\\\`\\\`java
class Outer {
    static int outer_static = 50;
    
    static class StaticInner {
        void msg() {
            System.out.println("Static val: " + outer_static);
        }
    }
}
// Created as: Outer.StaticInner obj = new Outer.StaticInner();
\\\`\\\`\\\`

### 🎭 III. Anonymous Nested Class
A class defined with no name that combines declaration and instantiation in a single line. Extremely helpful when overriding abstract class or interface listeners.
\\\`\\\`\\\`java
interface Printer {
    void printQuote();
}
// Created anonymously inside main:
Printer p = new Printer() {
    public void printQuote() {
        System.out.println("Do or do not, there is no try.");
    }
};
\\\`\\\`\\\`

---

## 💡 Academic & Interview Excellence (PRO Tips)

### 📌 Bengali Cheat-Sheet (সহজ ভাষায় কথা)
> * **Inner Class**: ক্লাস এনক্যাপসুলেশন মজবুত করার জন্য যখন একটি ক্লাসের পেটে আরেকটি ক্লাস ঢোকানো হয়। যদি ভেতরের ক্লাসটি সাধারণ নন-স্ট্যাটিক বা ইনার ক্লাস হয়, তবে সেটি তার পেরেন্ট ক্লাসের যেকোনো প্রাইভেট ফাইল্ড সহজে রিড করতে পারে।
> * **Anonymous Class**: নামবিহীন ক্লাস। শ্রোতা ইন্টারফেসে অনেক সময় ডাইনামিকালি কোনো মেথড ওভাররাইড করতে হলে একটি সম্পূর্ণ আলাদা ফাইল না খুলে কোডের মাঝেই সরাসরি নাম ছাড়া অবজেক্ট সহ ক্লাস অ্যাসাইন করা হয়।

### 📐 Exam Master-Check:
> **Question**: *Can a Static Nested Class access non-static instance variables of the outer class?*
> **Answer**: Absolute **No**. Static subclasses are bound to Class blueprints, which load before runtime heap initialization. Accessing non-static fields directly triggers compiler errors unless they are accessed via an explicit parent object parameter.
`,
    reviewQuestions: [
      "Explain standard nested class divisions, highlighting non-static versus static nested models.",
      "Write a Java class structure containing private outer states evaluated cleanly by member inner classes.",
      "Show how an Anonymous Nested Class implements interface methods directly under code blocks."
    ],
    quizzes: [
      {
        question: "জাভাতে Non-static Nested Class বা সাধারণ Inner Class-এর সবচেয়ে বড় সুবিধা কী?",
        options: [
          { label: "এটি পেরেন্ট ক্লাসের বাইরের কোড থেকে গোপন ফাইল এডিট করতে পারে", isCorrect: false },
          { label: "এটি বাইরের পেরেন্ট ক্লাসের সমস্ত private ভেরিয়েবল এবং মেথড সরাসরি অ্যাক্সেস করতে সক্ষম", isCorrect: true },
          { label: "এটি মেমরির প্রয়োজনীয়তা অর্ধেক করে দেয়", isCorrect: false },
          { label: "এটির কোনো অবজেক্ট তৈরি করা যায় না", isCorrect: false }
        ],
        explanation: "নন-স্ট্যাটিক ইনার ক্লাস সরাসরি পেরেন্ট ক্লাসের অবজেক্ট মেমোরি স্কোপে ঢোকানো থাকে। তাই এটি পেরেন্টের প্রাইভেট মেম্বারগুলোকেও সরাসরি অ্যাক্সেস করে সিকিউরিটি ও ফ্লেক্সিবিলিটি বাড়াতে পারে।"
      },
      {
        question: "Static Nested Class-এর বিষয়ে নিচের কোন বিবৃতিটি সম্পূর্ণ সঠিক?",
        options: [
          { label: "এটি পেরেন্ট ক্লাসের নন-স্ট্যাটিক বা ইনস্ট্যান্স মেম্বারগুলো সরাসরি অ্যাক্সেস করতে পারে", isCorrect: false },
          { label: "এটি পেরেন্ট ক্লাসের অবজেক্ট তৈরি করা ছাড়াই ক্লাসের সাহায্য নিয়ে সরাসরি রেফার করা যায় এবং এটি শুধু স্ট্যাটিক পেরেন্ট মেম্বার অ্যাক্সেস করতে পারে", isCorrect: true },
          { label: "কম্পাইলার কখনো স্ট্যাটিক ইনার ক্লাস সাপোর্ট করে না", isCorrect: false },
          { label: "এটি কেবল অ্যানোনিমাস ক্লাস সাপোর্ট করতে ব্যবহৃত হয়", isCorrect: false }
        ],
        explanation: "স্ট্যাটিক নেস্টেড ক্লাস পেরেন্ট ক্লাসের ওপর শারীরিকভাবে নির্ভরশীল নয়, এটি পেরেন্ট অবজেক্ট ছাড়াই রেফার করা গেলেও পেরেন্ট ক্যাটাগরির শুধুমাত্র স্ট্যাটিক মেম্বারগুলোকেই সরাসরি দেখতে পারে।"
      }
    ]
  },
  {
    id: "class-test-review",
    title: "Lesson 21: Class Test I & Review of Section III",
    description: "Preparation workspace containing solved past Class Test 1 exam questions, answers, and study templates.",
    content: `
# 🚦 Lesson 21: Class Test I & Review of Section III

Preparation is key to scoring excellent grades in ISCED Course evaluation sheets. This unit compiles structured actual examinations, answers, and review sheets covering Section III.

---

## 📝 1. Verbatim Past Class Test 1 Exam Sheet
* **Course Code**: ETE-3525 (Object Oriented Programming with JAVA)
* **Date**: 24/06/2019
* **Syllabus**: Section I & Basics
* **Venue**: R-401, IIUC Campus

---

## 🎓 2. High-Performance Solved Question Bank (Section III Targets)
Below are detailed academic answer configurations solving Section III's most recurring mid-semester queries.

### Q1. Explain the differences between Object and Class.
* **Object**: Is a physical runtime entity, containing an active state and behavior. It is allocated memory dynamically on the Heap using the \\\`new\\\` statement.
* **Class**: Is a logical blueprint or group specification containing fields, methods, and templates from which objects are instantiated. It occupies no execution memory space.

### Q2. Define Instance Variable.
An **Instance Variable** is declared within a class but outside of any active method scope. Its lifecycle is bound directly to the object; it is loaded onto the heap space during construction and destroyed automatically when garbage-collected.

### Q3. What is the purpose of using the \\\`new\\\` keyword in Java?
The \\\`new\\\` keyword serves as the dynamic memory instantiator in Java. When evaluated, it:
1. Allocates dynamic memory for class objects in the heap space.
2. Initializes the allocated object's contents using the provided constructor.
3. Returns a unique reference memory pointer address to the caller.

### Q4. Define Method. Discuss the advantages of using Methods.
A **Method** is a named block of code declared inside a class to expose or define the functional execution steps of an object.
* **Key Advantages**:
  * **Code Reusability**: Write code once, execute infinitely across different project spaces.
  * **Code Optimization**: Eliminates redundancy, keeping the application fast, clear, and easy to maintain.

### Q5-Q6. Compare Within-Class vs Out-of-Class Main Declarations.
* **Within-Class Main**: Keeps the execution entry-point (\\\`public static void main\\\`) directly inside the data container blueprint. Useful for small tests or isolated libraries.
* **Outside-Class Main (Clean Architecture)**: Isolates data declarations (e.g., \\\`class Student\\\`) in a target module, completely separating program control logic into a separate driver class (e.g., \\\`class TestStudent\\\`). This is highly preferred in real-world professional development!

---

## 💡 Course Review Checklist & Exam Guidelines
* **Ternary Calculations**: Double check return types inside ternary questions; incompatibilities (e.g., swapping double and int values loosely) trigger compile-time type errors.
* **Static Access traps**: Always remember that static methods cannot directly touch non-static fields without establishing a target container instance first.
* **Method vs. Constructor**: Memorize the comparative difference matrix. In academic exams, draw the table side-by-side to gain maximum bonus marks!
`,
    reviewQuestions: [
      "Write a short academic essay highlighting why Java constructors do not specify return values.",
      "Explain what 'Blank Final Variables' are, and state where they can be initialized inside your program.",
      "Justify the logical reasoning behind separating your driver class (TestClass) from your utility classes (blueprint structures) in production environments."
    ],
    quizzes: [
      {
        question: "জাভাতে একটি Blank Final Variable কোথায় অবশ্যই ইনিশিয়ালাইজ করা সম্ভব?",
        options: [
          { label: "যেকোনো Getter/Setter মেথডের কোড ব্লকে", isCorrect: false },
          { label: "শুধুমাত্র সংশ্লিষ্ট ক্লাসের Constructor-এর ভেতর", isCorrect: true },
          { label: "সরাসরি Static initialization ব্লকে", isCorrect: false },
          { label: "মেথড প্যারামিটার পাস করার সময়ে", isCorrect: false }
        ],
        explanation: "Blank Final Variable ডিক্লিয়ার করার সময় মান অ্যাসাইন করা হয় না। এটি কেবল অবজেক্ট তৈরির সময় Constructor-এর ভেতর একবারের জন্য ইনিশিয়ালাইজ করা যায়।"
      },
      {
        question: "প্যারামিটার পাসিংয়ের ক্ষেত্রে Java 'strictly call-by-value' হওয়া সত্ত্বেও অবজেক্ট রেফারেন্স পাস করার পর পেরেন্ট অবজেক্ট কেন পরিবর্তিত হয়?",
        options: [
          { label: "কারণ জাভা অবজেক্ট পাসিংয়ে পেরেন্ট ক্লাসের ডিরেক্টরি মুছে ফেলে", isCorrect: false },
          { label: "কারণ মেথডে অবজেক্টটির মেমরি অ্যাড্রেস-এর কপি রেফারেন্স পাস হওয়ার ফলে উভয়ই হিপ মেমরির একই অবজেক্টের ওপর পয়েন্ট করে কাজ করে", isCorrect: true },
          { label: "কারণ অবজেক্টের সাইজ স্ট্যাক থেকে বড় হয়", isCorrect: false },
          { label: "এটি জাভার একটি ত্রুটি বা ডুপ্লিকেট বাগ", isCorrect: false }
        ],
        explanation: "জাভাতে অবজেক্ট প্যারামিটার হিসেবে পাঠানোর সময় রেফারেন্সের মান (মেমরি অ্যাড্রেস) কপি হয়ে পাস হয়। উভয়ের পয়েন্টার হিপের একই অবজেক্ট শেয়ার করায় যেকোনো পরিবর্তন মূল অবজেক্টেও রিফ্লেক্ট হয়।"
      }
    ]
  }
];
