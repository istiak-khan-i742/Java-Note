export interface ExamQuestion {
  id: string;
  qNumber: string;
  text: string;
  tags: string[];
  answer: string;
}

export interface ExamPart {
  name: string;
  questions: ExamQuestion[];
}

export interface SemesterExam {
  id: string;
  semester: string;
  parts: ExamPart[];
}

export const examsData: SemesterExam[] = [
  {
    id: "autumn-2025",
    semester: "Autumn 2025",
    parts: [
      {
        name: "Part A",
        questions: [
          {
            id: "autumn-2025-a-1a",
            qNumber: "[1] (a)",
            text: "Explain the purpose of `extends` keyword in Java with examples.",
            tags: ["Inheritance", "Basic OOP"],
            answer: `### Explanation\nThe \`extends\` keyword is used in Java to establish an **inheritance relationship (IS-A relationship)** between a superclass (parent) and a subclass (child). By extending a class, the subclass inherits all accessible fields and methods of the superclass and can add its own state or behavior, or override inherited methods to customize behavior.\n\n### Benefits\n* **Code Reusability**: Classes do not need to recompile or rewrite base attributes.\\n* **Method Overriding**: Allows the child class to offer runtime polymorphism.\\n* **Clean Extensibility**: Easier organization of taxonomic structures.\n\n### Java Example\n\`\`\`java\n// Base Superclass\nclass Animal {\n    void eat() {\n        System.out.println("This animal is eating food.");\n    }\n}\n\n// Subclass extending Animal\nclass Dog extends Animal {\n    void bark() {\n        System.out.println("The dog barks: Woof! Woof!");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog puppy = new Dog();\n        puppy.eat();  // Inherited from parent class\n        puppy.bark(); // Defined in child class\n    }\n}\n\`\`\``
          },
          {
            id: "autumn-2025-a-1b",
            qNumber: "[1] (b)",
            text: "A programmer working in the IT Department of IIUC earns a fixed monthly salary of 40,000.00 BDT. Regardless of job classification or position, all employees in the IT department receive the same base salary. In recognition of outstanding performance, the programmer was additionally awarded a bonus of 2,000.00 BDT this month. Write a Java program that demonstrates the IS-A inheritance relationship by showing that a Programmer is an Employee, and display the employee's salary along with the awarded bonus.",
            tags: ["Inheritance", "Java OOP Programming"],
            answer: `### Code Solution\nHere is a complete, clean, object-oriented solution illustrating the IS-A relationship (\`Programmer\` **is an** \`Employee\`).\n\n\`\`\`java\n// Superclass demonstrating basic department employee standard\nclass Employee {\n    double baseSalary = 40000.00; // Fixed flat salary of 40k BDT\n\n    void displayRole() {\n        System.out.println("Primary Group: IT Department Employee");\n    }\n}\n\n// Subclass establishing IS-A relationship\nclass Programmer extends Employee {\n    double bonus = 2000.00; // Extra performance incentive award\n\n    void printEarnings() {\n        displayRole();\n        System.out.println("Base Salary: " + baseSalary + " BDT");\n        System.out.println("Awarded Bonus: " + bonus + " BDT");\n        System.out.println("Total Monthly Payout: " + (baseSalary + bonus) + " BDT");\n    }\n}\n\npublic class IIUCDemo {\n    public static void main(String[] args) {\n        // Instantiate Programmer as Employee subclass\n        Programmer prog = new Programmer();\n        prog.printEarnings();\n    }\n}\n\`\`\``
          },
          {
            id: "autumn-2025-a-2a",
            qNumber: "[2] (a)",
            text: "Differentiate between Method Overloading and Method Overriding in Java.",
            tags: ["Polymorphism", "Overloading", "Overriding"],
            answer: `| Feature | Method Overloading (Compile-time Polymorphism) | Method Overriding (Runtime Polymorphism) |\n| :--- | :--- | :--- |\n| **Definition** | Defining multiple methods in the same class with same name but different signatures. | Re-defining a superclass method in the subclass with the exact same signature. |\n| **Location** | Occurs within the *same* class. | Occurs across *subclass and superclass* classes. |\n| **Method Signature** | Must differ in parameter list (types, count, or sequence). | Must be identical (same name, parameters, and return type). |\n| **Return Type** | Can be the same or different. | Must be matching or a covariant type. |\n| **Binding** | Static / Early-binding done by compiler. | Dynamic / Late-binding managed at runtime. |\n| **Keywords** | Uses same method identifiers. | Optionally annotated with \`@Override\`. |`
          },
          {
            id: "autumn-2025-a-2b",
            qNumber: "[2] (b)",
            text: "Why multiple inheritance is not supported through the use of class in JAVA? Explain with a proper Java programming example.",
            tags: ["Inheritance", "Multiple Inheritance", "Diamond Problem"],
            answer: `### The Reason and the Diamond Problem\nJava rejects multiple inheritance of classes to **avoid ambiguity and conflicts** often referred to as the **Diamond Problem**.\nIf Class C were allowed to extend both Class A and Class B, and both A and B defined a method named \`show()\` with identical signatures, Class C would not know which parent's implementation to execute when calling \`c.show()\`. This causes compilation and lexical instability.\n\nTo ensure cleanliness and simplicity, Java restricts a class to extending only one superclass, but allows implementing multiple *interfaces* instead (since interfaces do not contain instance states).\n\n### Illustrative Conceptual Conflict Code\n\`\`\`java\nclass Father {\n    void property() {\n        System.out.println("Father's Land Estate.");\n    }\n}\n\nclass Mother {\n    void property() {\n        System.out.println("Mother's Gold Estate.");\n    }\n}\n\n// Java STRICTLY FORBIDS this setup:\n/*\nclass Child extends Father, Mother { \n    // If child calls property(), which parent takes priority?\n}\n*/\n\`\`\``
          },
          {
            id: "autumn-2025-a-2-or-a",
            qNumber: "[2] OR (a)",
            text: "Explain Encapsulation in JAVA.",
            tags: ["Encapsulation", "OOP Concepts"],
            answer: `### Explanation\n**Encapsulation** is the mechanism of wrapping code and data together into a single unit (like a protective capsule). It restricts access directly to the state variables of an object and forces modification or reading exclusively through public getter and setter methods.\n\n### Key Mechanisms\n1. Mark class variables as \`private\` to hide them from other classes.\n2. Provide public \`getter\` and \`setter\` methods to fetch and update values with validation barriers.\n\n### Code Demonstration\n\`\`\`java\nclass Student {\n    // Data fields are encapsulated (hidden)\n    private String id;\n    private double cgpa;\n\n    // Getter for ID\n    public String getId() {\n        return this.id;\n    }\n\n    // Encapsulated Setter with safe business boundaries\n    public void setCgpa(double score) {\n        if (score >= 0.0 && score <= 4.0) {\n            this.cgpa = score;\n        } else {\n            System.out.println("Invalid GP range!");\n        }\n    }\n}\n\`\`\``
          },
          {
            id: "autumn-2025-a-2-or-b",
            qNumber: "[2] OR (b)",
            text: "Write a JAVA program to read your Name and Id as input from user using `Scanner` class. Mention necessary package to import.",
            tags: ["Scanner", "User Input", "Packages"],
            answer: `### Code Solution\nTo read the console input from standard terminal interface buffers, import \`java.util.Scanner\` package.\n\n\`\`\`java\nimport java.util.Scanner; // Required package import statement\n\npublic class UserInputScanner {\n    public static void main(String[] args) {\n        // Instantiate a Scanner feeding on the standard System.in stream\n        Scanner input = new Scanner(System.in);\n\n        System.out.print("Enter your Name: ");\n        String name = input.nextLine(); // Reads complete string line\n\n        System.out.print("Enter your ID: ");\n        String id = input.next(); // Reads individual word token\n\n        System.out.println("\\n--- Output Record ---");\n        System.out.println("Student Name: " + name);\n        System.out.println("Student ID: " + id);\n\n        // Gracefully release standard buffer handles\n        input.close();\n    }\n}\n\`\`\``
          }
        ]
      },
      {
        name: "Part B",
        questions: [
          {
            id: "autumn-2025-b-3a",
            qNumber: "[3] (a)",
            text: "Define Abstraction in Java.",
            tags: ["Abstraction", "OOP Concepts"],
            answer: `### Definition\n**Abstraction** is an object-oriented design principal of hiding complex execution details and highlighting only absolute core features. It enables developers to structure complex models based on what they *do* rather than exactly how they *perform* it.\n\nBy leveraging abstract definitions, systems decouple physical driver models from functional interfaces, lowering code dependencies.`
          },
          {
            id: "autumn-2025-b-3b",
            qNumber: "[3] (b)",
            text: "Explain the ways used to achieve abstraction in Java.",
            tags: ["Abstraction", "Abstract Class", "Interface"],
            answer: `### Pathways to Abstraction\n1. **Abstract Classes (0% to 100% Abstraction)**: Classes annotated with \`abstract\` keyword. They can hold concrete methods (methods with full bodies) as well as abstract methods (without body parameters). Useful when sibling elements share certain standard base activities but require custom modifications for others.\n2. **Interfaces (100% Abstraction originally)**: A collection of completely abstract behavior configurations. All method headers declared are default abstract (before Java 8 introduced default/static methods). Interfaces enforce strict architectural contracts across completely unrelated physical class frameworks.`
          },
          {
            id: "autumn-2025-b-3c",
            qNumber: "[3] (c)",
            text: "Write a Java program that defines an abstract class named `Shape`. Implement this abstract class using two subclasses, `Circle` and `Rectangle`, where each subclass provides its own implementation to calculate the area of circular and rectangular objects respectively.",
            tags: ["Abstraction", "Abstract Class", "Java OOP Programming"],
            answer: `### Code Solution\n\`\`\`java\n// Enclosing Abstraction Class\nabstract class Shape {\n    abstract double calculateArea(); // Empty implementation template\n}\n\n// Circle elements extending shape\nclass Circle extends Shape {\n    double radius;\n\n    Circle(double r) {\n        this.radius = r;\n    }\n\n    @Override\n    double calculateArea() {\n        return Math.PI * radius * radius;\n    }\n}\n\n// Rectangle layout resolving shapes\nclass Rectangle extends Shape {\n    double length;\n    double width;\n\n    Rectangle(double l, double w) {\n        this.length = l;\n        this.width = w;\n    }\n\n    @Override\n    double calculateArea() {\n        return length * width;\n    }\n}\n\npublic class GeometrySystem {\n    public static void main(String[] args) {\n        Shape round = new Circle(5.0);\n        Shape box = new Rectangle(10.0, 4.0);\n\n        System.out.println("Circle Area: " + round.calculateArea());\n        System.out.println("Rectangle Area: " + box.calculateArea());\n    }\n}\n\`\`\``
          },
          {
            id: "autumn-2025-b-4a",
            qNumber: "[4] (a)",
            text: "What do you mean by Access Modifiers in Java?",
            tags: ["Access Modifiers", "Basic OOP"],
            answer: `### Explanation\n**Access Modifiers** are Java keywords used to set the visibility and accessibility scopes of packages, classes, constructors, methods, and variables. They define from which logical regions or files specific units can be accessed or integrated.`
          },
          {
            id: "autumn-2025-b-4b",
            qNumber: "[4] (b)",
            text: "Explain different types of Access modifiers in Java.",
            tags: ["Access Modifiers", "Packages"],
            answer: `### The Four Access Modifiers\n\n1. **Private (\`private\`)**: Accessible **only** within the class it is declared. Highest level of scoping restricts external manipulations.\n2. **Default (No keyword)**: Accessible within classes residing inside the **same package**. Frequently called package-private access.\n3. **Protected (\`protected\`)**: Accessible within the **same package** and by classes extending this category in parent-children lineages residing in **different packages**.\n4. **Public (\`public\`)**: Openly accessible from **any package** across the whole workspace.`
          },
          {
            id: "autumn-2025-b-4c",
            qNumber: "[4] (c)",
            text: "Assume there is a package named `pack1` that contains two classes, `Test1` and `Test2`. Another package, `pack2`, contains a class named `Test3`. Write a Java program that demonstrates how to access and invoke a method of the `Test1` class from the `Test3` class.",
            tags: ["Packages", "Access Modifiers", "Java OOP Programming"],
            answer: `### Package Directory Layout\nTo establish cross-package invocation, classes must be declare \`public\` within their parent scope, and their targets must also use \`public\` access indicators.\n\n### File 1: pack1/Test1.java\n\`\`\`java\npackage pack1;\n\npublic class Test1 {\n    public void greet() {\n        System.out.println("Hello from pack1's Test1 class!");\n    }\n}\n\`\`\`\n\n### File 2: pack2/Test3.java\n\`\`\`java\npackage pack2;\n\nimport pack1.Test1; // Importing required external dependency class\n\npublic class Test3 {\n    public static void main(String[] args) {\n        Test1 target = new Test1();\n        target.greet(); // Works seamlessly since method and class are public\n    }\n}\n\`\`\``
          },
          {
            id: "autumn-2025-b-5a",
            qNumber: "[5] (a)",
            text: "What do you mean by the interface in Java?",
            tags: ["Interface", "Abstraction"],
            answer: `### Explanation\nAn **Interface** in Java is a reference type containing purely abstract signatures (with default/static utilities on modern SDK levels) that represent actions a class should commit. Interface signatures lack variable memory instances and require concrete classes to deploy methods with the \`implements\` trigger.`
          },
          {
            id: "autumn-2025-b-5b",
            qNumber: "[5] (b)",
            text: "Explain the differences between the abstract class and interface in Java.",
            tags: ["Abstraction", "Abstract Class", "Interface"],
            answer: `### Comparison Grid\n\n| Attribute | Abstract Class | Interface |\n| :--- | :--- | :--- |\n| **Keywords** | Uses \`abstract\` class declaration | Uses \`interface\` declaration block |\n| **Multiple inheritance** | Unsupported. Class can inherit only one parent class. | Fully supported. Classes can implement many interface contracts. |\n| **Variable Scope** | Can have final, non-final, static, and transient states. | Fields are implicitly \`static final\` (constants). |\n| **Abstract limit** | Mix of concrete and abstract elements allowed. | 100% abstract configuration (until default methods). |\n| **Execution performance** | Standard parent resolution is slightly faster. | Resolving virtual interface routes demands extra steps. |`
          },
          {
            id: "autumn-2025-b-5c",
            qNumber: "[5] (c)",
            text: "Write a Java program that demonstrates method overloading by defining multiple versions of a method named `show()`. Each overloaded method should accept different parameter types and produce the following outputs: When `show(\"E251003\", 2)` is called, it should display: \"Your ID is E251003 and you are in semester 2.\" When `show(2)` is called, it should display: \"You are in semester 2.\" When `show(\"Adnan Ajmain\", \"E251003\")` is called, it should display: \"You are Adnan Ajmain and your ID is E251003.\"",
            tags: ["Polymorphism", "Overloading", "Java OOP Programming"],
            answer: `### Overloaded Signatures Code Solution\n\`\`\`java\npublic class OverloadDisplay {\n\n    // Signature 1: String, int parameters\n    public void show(String id, int semester) {\n        System.out.println("Your ID is " + id + " and you are in semester " + semester + ".");\n    }\n\n    // Signature 2: Single int parameter\n    public void show(int semester) {\n        System.out.println("You are in semester " + semester + ".");\n    }\n\n    // Signature 3: String, String parameters\n    public void show(String name, String id) {\n        System.out.println("You are " + name + " and your ID is " + id + ".");\n    }\n\n    public static void main(String[] args) {\n        OverloadDisplay program = new OverloadDisplay();\n\n        // Test invokes to match requested outputs\n        program.show("E251003", 2);\n        program.show(2);\n        program.show("Adnan Ajmain", "E251003");\n    }\n}\n\`\`\``
          },
          {
            id: "autumn-2025-b-5-or-a",
            qNumber: "[5] OR (a)",
            text: "Explain different states of thread.",
            tags: ["Multithreading", "Thread Lifecycle"],
            answer: `### Thread Life Cycle States\n1. **New**: The thread has been instantiated using \`new Thread()\` but hasn't had \`start()\` triggered on it yet.\n2. **Runnable**: Thread is active in JVM runtime and is awaiting CPU execution windows from the OS scheduler.\n3. **Running**: Actually occupying processor slices and running code blocks within state loop setups.\n4. **Blocked / Waiting**: Stopped from working because it needs an input resource lock (\`Blocked\`) or was told to halt indefinitely via \`join()\` / \`wait()\` loops (\`Waiting\`).\n5. **Timed Waiting**: Temporarily disabled while taking a sleep session, e.g. \`Thread.sleep(ms)\`.\n6. **Terminated**: Finished executing or hit a fatal error break. Thread memory is released.`
          },
          {
            id: "autumn-2025-b-5-or-b",
            qNumber: "[5] OR (b)",
            text: "Explain the life cycle of a Thread.",
            tags: ["Multithreading", "Thread Lifecycle"],
            answer: `### Explanation\nA thread moves in cycles from **New** to **Terminated** pathways.\nTransition is sparked by execution triggers: instantiating invokes **New**. Triggering \`start()\` transitions it to the **Runnable** queue. The thread scheduler grants it focus moving it into **Running**. If it meets \`sleep()\` or synchronized blocks, it goes into **Waiting / Blocked / Timed Waiting** slots before returning to **Runnable** when locks are acquired. Once task block reaches its close boundary, it transitions to **Terminated** state.`
          },
          {
            id: "autumn-2025-b-5-or-c",
            qNumber: "[5] OR (c)",
            text: "Write a JAVA program by extending thread class to implement multithreading.",
            tags: ["Multithreading", "Java OOP Programming"],
            answer: `### Code Solution\n\`\`\`java\n// Define a custom thread by extending the Thread Class base\nclass CustomTask extends Thread {\n    private String taskName;\n\n    CustomTask(String name) {\n        this.taskName = name;\n    }\n\n    // The entry point code block that runs inside the parallel thread environment\n    @Override\n    public void run() {\n        for (int i = 1; i <= 3; i++) {\n            System.out.println("Thread [" + taskName + "] is processing stage: " + i);\n            try {\n                // Temporarily pause thread processing to create scheduler context\n                Thread.sleep(400);\n            } catch (InterruptedException e) {\n                System.out.println("Thread interrupted: " + e.getMessage());\n            }\n        }\n        System.out.println("Thread [" + taskName + "] execution completed.");\n    }\n}\n\npublic class MultiThreadRunner {\n    public static void main(String[] args) {\n        // Create and fire up parallel execution tasks\n        CustomTask firstTask = new CustomTask("Alpha");\n        CustomTask secondTask = new CustomTask("Beta");\n\n        firstTask.start();  // Invokes thread virtual environment mapping\n        secondTask.start(); // Runs simultaneously alongside firstTask\n    }\n}\n\`\`\``
          }
        ]
      }
    ]
  },
  {
    id: "spring-2025",
    semester: "Spring 2025",
    parts: [
      {
        name: "Part A",
        questions: [
          {
            id: "spring-2025-a-1a",
            qNumber: "[1] (a)",
            text: "Explain the purpose of `extends` keyword in Java with examples.",
            tags: ["Inheritance", "Basic OOP"],
            answer: `### Purpose of \`extends\` Keyword
The \`extends\` keyword is used in Java to establish inheritance (an IS-A relationship) between a child class (subclass) and a parent class (superclass). By extending a parent class, the child inherits all non-private fields and methods, enabling **code reusability** and **method overriding**.

### Benefits
* **Code Reusability**: Classes do not need to rewrite base fields or methods.
* **Ease of Extension**: Subclasses can easily add specialized traits or override existing behaviors.

### Verbatim Implementation Example
\`\`\`java
// Superclass
class Animal {
    void eat() {
        System.out.println("This animal is eating food.");
    }
}

// Subclass extending Animal
class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks: Woof! Woof!");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();  // Inherited method from Animal
        d.bark(); // Subclass specific method
    }
}
\`\`\``
          },
          {
            id: "spring-2025-a-1b",
            qNumber: "[1] (b)",
            text: "A staff member earning 50,000.00 BDT as a programmer in the IIUC IT department. No matter their level of classification, every employee in the IT department is paid the same amount. A bonus of 5000.00 BDT was also given to the specific programmer this month for his great work. Create a Java Program that displays the IS-A (Programmer is an Employee) relationship of inheritance by printing the employee's salary and bonus.",
            tags: ["Inheritance", "Java OOP Programming"],
            answer: `### Code Solution\n\`\`\`java\nclass Employee {\n    double baseSalary = 50000.00;\n}\n\nclass Programmer extends Employee {\n    double bonus = 5000.00;\n    \n    void displayPayout() {\n        System.out.println("Base Employee Earnings: " + baseSalary + " BDT");\n        System.out.println("Performance Incentive Bonus: " + bonus + " BDT");\n        System.out.println("Total Consolidated Payout: " + (baseSalary + bonus) + " BDT");\n    }\n}\n\npublic class SpringDeptDemo {\n    public static void main(String[] args) {\n        Programmer dev = new Programmer();\n        dev.displayPayout();\n    }\n}\n\`\`\``
          },
          {
            id: "spring-2025-a-2a",
            qNumber: "[2] (a)",
            text: "Why multiple inheritance is not supported through the use of class in JAVA? Explain with a proper Java programming example.",
            tags: ["Inheritance", "Multiple Inheritance", "Diamond Problem"],
            answer: `### Sibling Conflict and the Diamond Problem
Java rejects multiple class inheritance (where a class directly extends more than one parent class) to prevent **method resolution conflicts** and **Diamond Problem** ambiguity.

If Class C were allowed to extend both Class A and Class B, and both A and B defined a method with the exact same signature (e.g., \`void show()\`), Class C would inherit two conflicting implementations. If Class C invokes \`show()\`, the JVM has no definite rule to determine which parent's logic to run, causing compiling-path ambiguity.

To ensure simplicity and safety, Java restricts a class to extending only one superclass, but allows implementing multiple *interfaces* instead.

### Theoretical Collision Code Model
\`\`\`java
class Father {
    void property() {
        System.out.println("Father's Land Estate.");
    }
}

class Mother {
    void property() {
        System.out.println("Mother's Gold Estate.");
    }
}

// Java STRICTLY FORBIDS this compile-time setup:
/*
class Child extends Father, Mother {
    // If child calls property(), which parent takes priority?
}
*/
\`\`\``
          },
          {
            id: "spring-2025-a-2b",
            qNumber: "[2] (b)",
            text: "Explain the differences between multilevel inheritance and hierarchical inheritance.",
            tags: ["Inheritance"],
            answer: `### structural Differences\n\n- **Multilevel Inheritance**: Establishes a chain of inheritance where a subclass itself acts as a superclass for another subclass (Grandparent → Parent → Child).\n- **Hierarchical Inheritance**: Multiples subclasses share and inherit from the exact same single parent class (Parent → Child 1 AND Parent → Child 2).\n\n### Diagrammatic Representation\n\`\`\`text\nMultilevel Chain: \n[Class A Grandparent] \n       ▲\n[Class B Parent]\n       ▲\n[Class C Child]\n\nHierarchical Canopy:\n         [Class A Parent]\n           ▲         ▲\n [Class B Child]  [Class C Child]\n\`\`\``
          },
          {
            id: "spring-2025-a-2-or-a",
            qNumber: "[2] OR (a)",
            text: "Explain Encapsulation in JAVA.",
            tags: ["Encapsulation", "OOP Concepts"],
            answer: `### Explanation
**Encapsulation** is the OOP mechanism of bundling data variables and corresponding code methods together inside a single class. It hides an object's internal state variables from direct external access, exposing them exclusively through public getter and setter methods.

### Pillars of Encapsulation
1. **Data Hiding**: Marking variables as \`private\` to restrict direct manipulation by external classes.
2. **Controlled Access**: Providing public methods (\`getters\` and \`setters\`) with integrated business logic barriers to inspect or update values.

### Verbatim Implementation Example
\`\`\`java
class Student {
    private String name;
    private double cgpa;

    // Getter for Name
    public String getName() {
        return this.name;
    }

    // Setter with safe validation limits
    public void setCgpa(double score) {
        if (score >= 0.0 && score <= 4.0) {
            this.cgpa = score;
        } else {
            System.out.println("Error: Invalid CGPA scale!");
        }
    }
}
\`\`\``
          },
          {
            id: "spring-2025-a-2-or-b",
            qNumber: "[2] OR (b)",
            text: "Write a JAVA program to read your Name and Id as input from user using `Scanner` class. Mention necessary package to import.",
            tags: ["Scanner", "User Input", "Packages"],
            answer: `### Scan System Streams Code\n\`\`\`java\nimport java.util.Scanner;\n\npublic class QuickScan {\n    public static void main(String[] args) {\n        Scanner scan = new Scanner(System.in);\n        System.out.print("Input Name: ");\n        String name = scan.nextLine();\n        System.out.print("Input Student ID: ");\n        String id = scan.next();\n        \n        System.out.println("Acquired Data: Name =" + name + "; ID=" + id);\n        scan.close();\n    }\n}\n\`\`\``
          }
        ]
      },
      {
        name: "Part B",
        questions: [
          {
            id: "spring-2025-b-3a",
            qNumber: "[3] (a)",
            text: "Define Abstraction in Java.",
            tags: ["Abstraction", "OOP Concepts"],
            answer: `### Description\nHidings implementation elements while revealing only core services. Helps maintain code safety levels and ensures modular expansion.`
          },
          {
            id: "spring-2025-b-3b",
            qNumber: "[3] (b)",
            text: "Explain the ways used to achieve abstraction in Java.",
            tags: ["Abstraction", "Abstract Class", "Interface"],
            answer: `* Abstract Classes (can accomplish incomplete abstraction as they can host both abstract methods and full concrete implementations).\n* Interfaces (can establish total 100% abstract standards before modern SDK upgrades and are ideal for defining cross-module structures).`
          },
          {
            id: "spring-2025-b-3c",
            qNumber: "[3] (c)",
            text: "Write a JAVA program to implement Abstraction (50%) using Abstract class and Abstract Methods.",
            tags: ["Abstraction", "Abstract Class", "Java OOP Programming"],
            answer: `### 50% Abstraction Code Solution\nTo show a system featuring 50% abstraction, define a class containing 1 concrete execution standard alongside 1 abstract method standard.\n\n\`\`\`java\nabstract class Vehicle {\n    // Concrete standard (already 50% defined, no overrides needed)\n    void turnOnHeadlights() {\n        System.out.println("Status Alert: Headlights Activated.");\n    }\n\n    // Abstract method (requires subclass definition override)\n    abstract void accelerate();\n}\n\nclass Motorbike extends Vehicle {\n    @Override\n    void accelerate() {\n        System.out.println("Action: Motorbike throttle pulled, picking up speed.");\n    }\n}\n\npublic class VehicleDemo {\n    public static void main(String[] args) {\n        Vehicle bike = new Motorbike();\n        bike.turnOnHeadlights(); // Concrete implementation execution\n        bike.accelerate();        // Overridden execution\n    }\n}\n\`\`\``
          },
          {
            id: "spring-2025-b-4afea",
            qNumber: "[4] (a)",
            text: "Differentiate between Method Overloading and Method Overriding in Java.",
            tags: ["Polymorphism", "Overloading", "Overriding"],
            answer: `### Method Overloading vs. Overriding Comparison

| Feature | Method Overloading (Compile-time) | Method Overriding (Runtime) |
| :--- | :--- | :--- |
| **Polymorphism Pillar** | Static / Early Binding | Dynamic / Late Binding |
| **Location** | Occurs within the *same* class | Occurs across *subclass and superclass* relationship |
| **Method Signature** | Parameter list **must** differ (type, count, or order) | Parameter list **must** be exactly identical |
| **Return Type** | Can be identical or different | Must be identical (or covariant) |
| **Keywords** | No special keyword required | Subclass method optionally uses \`@Override\` |

### Code Demonstration
\`\`\`java
class OverloadDemo {
    // Overloaded methods (same name, different arguments)
    void show(int a) { System.out.println("Integer value: " + a); }
    void show(String b) { System.out.println("String value: " + b); }
}
\`\`\``
          },
          {
            id: "spring-2025-b-4b",
            qNumber: "[4] (b)",
            text: "Why can't method overloading be accomplished by modifying the method's return type only? Give a suitable Java programming example to illustrate.",
            tags: ["Polymorphism", "Overloading"],
            answer: `### Detailed Explanation\nThe compiler differentiates overloaded functions *only* by looking at their method signatures, which comprise the method identifier name and parameter arrangements (type order and total elements count).\nThe compiler **does not** analyze return types because of invocation ambiguity. For example, if we call \`calculate(10, 20)\` without storing its returned result, the compiler cannot determine which method version to call if they only differ by their return type.\n\n### Compiler Ambiguity Code Example\n\`\`\`java\npublic class OverloadIssue {\n    int compute(int x, int y) {\n        return x + y;\n    }\n\n    // THIS WILL TRIGGER A COMPILATION ERROR:\n    /*\n    double compute(int x, int y) {\n        return (double)(x + y);\n    }\n    */\n    // The signatures are identical: compute(int, int)\n}\n\`\`\``
          },
          {
            id: "spring-2025-b-5a",
            qNumber: "[5] (a)",
            text: "What do you mean by the interface in Java?",
            tags: ["Interface", "Abstraction"],
            answer: `### Description\nA complete standard behavioral contract blueprint that concrete target components implement. Useful for designing decoupling strategies.`
          },
          {
            id: "spring-2025-b-5b",
            qNumber: "[5] (b)",
            text: "Explain the differences between the abstract class and interface in Java.",
            tags: ["Abstraction", "Abstract Class", "Interface"],
            answer: `### Abstract Class vs. Interface Grid Comparison

| Feature | Abstract Class | Interface |
| :--- | :--- | :--- |
| **Keywords** | Declared with \`abstract class\` keyword | Declared with \`interface\` keyword |
| **Multiple Inheritance** | Unsupported (a class can extend only one parent class) | Fully supported (a class can implement multiple interfaces) |
| **Method Implementation** | Can have concrete (with bodies) and abstract methods | Originally methods were 100% abstract (Java 8+ allows default/static methods) |
| **State Fields** | Can hold private, non-final, static, and non-static fields | Fields are implicitly \`public static final\` (constants only) |
| **Constructor** | Can define constructors | Absolutely cannot define constructors |
| **Performance** | Faster resolution through direct parenting | Marginally slower due to virtual interface lookup |`
          },
          {
            id: "spring-2025-b-5c",
            qNumber: "[5] (c)",
            text: "Multiple Inheritance is not supported through class in Java, but it is possible by an interface, why? Explain with proper examples.",
            tags: ["Interface", "Multiple Inheritance", "Abstraction"],
            answer: `### Complete Explanation\nAbstract methods declared in interfaces **do not contain physical body logic** (implementations). Thus, if a class implements multiple interfaces that feature methods with identical signatures, there is no ambiguity on which method logic to choose-since the class provides the *one and only* concrete definition of the method itself!\n\nThis completely bypasses the classic **Diamond Problem** since no conflicting logic is inherited from the parent interfaces.\n\n### Code Demonstration\n\`\`\`java\ninterface Camera {\n    void capture();\n}\n\ninterface VoiceRecorder {\n    void capture(); // Identical method signature\n}\n\n// Completely legal in Java. No diamond problem!\nclass MobilePhone implements Camera, VoiceRecorder {\n    @Override\n    public void capture() {\n        // The class provides the single, unambiguous implementation\n        System.out.println("Processing mobile phone sensory capture...");\n    }\n}\n\npublic class SmartSystem {\n    public static void main(String[] args) {\n        MobilePhone phone = new MobilePhone();\n        phone.capture();\n    }\n}\n\`\`\``
          },
          {
            id: "spring-2025-b-5-or-a",
            qNumber: "[5] OR (a)",
            text: "Explain different states of thread. Mention some methods which keep a thread in block state.",
            tags: ["Multithreading", "Thread Lifecycle"],
            answer: `### Thread block Interlopers\n\n- **States**: New, Runnable, Running, Blocked, Waiting, Timed-Waiting, Terminated.\n- **Blocking Methods**:\n  1. \`Thread.sleep(long millis)\`: Puts the active thread into a Timed Waiting state for a given duration.\n  2. \`object.wait()\`: Keeps the thread in a Waiting state until another thread invokes \`notify()\` or \`notifyAll()\` on the shared monitor lock.\n  3. \`thread.join()\`: Causes the executing thread to block until the target thread finishes execution.\n  4. Releasing monitor locks during synchronized resource access blocks until the monitor becomes available.`
          },
          {
            id: "spring-2025-b-5-or-b",
            qNumber: "[5] OR (b)",
            text: "Write a JAVA program by extending thread class to implement multithreading.",
            tags: ["Multithreading", "Java OOP Programming"],
            answer: `### Simple Thread Extension Code\n\`\`\`java\nclass MyWorker extends Thread {\n    public void run() {\n        System.out.println("Custom thread running: ID=" + Thread.currentThread().getId());\n    }\n}\n\npublic class QuickThreadLauncher {\n    public static void main(String[] args) {\n        MyWorker task = new MyWorker();\n        task.start(); // Spawns worker environment thread\n    }\n}\n\`\`\``
          }
        ]
      }
    ]
  },
  {
    id: "autumn-2024",
    semester: "Autumn 2024",
    parts: [
      {
        name: "Part A",
        questions: [
          {
            id: "autumn-2024-a-1a",
            qNumber: "[1] (a)",
            text: "Explain 'multiple inheritance using class' with proper java programming example.",
            tags: ["Inheritance", "Multiple Inheritance", "Diamond Problem"],
            answer: `### Diamond Problem Ambiguity
Multiple inheritance of classes refers to a scenario where a subclass attempts to inherit from two or more parent classes (e.g., \`class Child extends Father, Mother\`). 

Java design intentionally prohibits this because of the **Diamond Problem**: if both parent classes declare a method with identical signatures, and the child class does not override it, calling that method on a child object leads to structural ambiguity.

### Class-based Collision Code Model
\`\`\`java
class ParentA {
    void display() { System.out.println("Display: Class A"); }
}
class ParentB {
    void display() { System.out.println("Display: Class B"); }
}

// THIS WILL LEAD TO A COMPILE-TIME ERROR:
/*
class Child extends ParentA, ParentB {
    // Child inherits both display() methods.
    // If we call new Child().display(), which parent should execute?
}
*/
\`\`\``
          },
          {
            id: "autumn-2024-a-1b",
            qNumber: "[1] (b)",
            text: "Explain the differences between multilevel inheritance and hierarchical inheritance.",
            tags: ["Inheritance"],
            answer: `### Multilevel vs. Hierarchical Inheritance

1. **Multilevel Inheritance**: Establishes a sequential chain of parent-child classes. A subclass inherits from a parent, which in turn inherits from another grandparent class (Grandparent → Parent → Child).
2. **Hierarchical Inheritance**: Multiple subclasses directly inherit and share a single superclass (Single Parent → Child 1 AND Child 2).

### Diagrammatic Layout
\`\`\`text
Multilevel (Chain):
  [Grandparent]
        ▲
     [Parent]
        ▲
     [Child]

Hierarchical (Canopy):
        [Parent]
       /        \\
   [SubclassA]  [SubclassB]
\`\`\`

### Structural Code Examples
\`\`\`java
// Multilevel Example
class Grandparent {}
class Parent extends Grandparent {}
class Child extends Parent {}

// Hierarchical Example
class CommonParent {}
class SubclassA extends CommonParent {}
class SubclassB extends CommonParent {}
\`\`\``
          },
          {
            id: "autumn-2024-a-2a",
            qNumber: "[2] (a)",
            text: "Differentiate between Method overloading and Method overriding in Java.",
            tags: ["Polymorphism", "Overloading", "Overriding"],
            answer: `### Method Overloading vs. Overriding

| Feature | Method Overloading | Method Overriding |
| :--- | :--- | :--- |
| **Binding Time** | Compile-time (Static binding) | Runtime (Dynamic binding) |
| **Location** | Occurs within the *same* class | Occurs between subclass & superclass |
| **Signature** | Parameters list **must** differ | Parameters list **must** be exactly identical |
| **Return Type** | Can be different | Must be identical (or covariant) |
| **Inheritance Role** | Simple method utility expansion | Specialized behavior implementation |

### Code Demonstration
\`\`\`java
class Demo {
    // Overloading: same name, different params
    void play(int score) {}
    void play(String level) {}
}

class SuperParent {
    void perform() { System.out.println("Super performance"); }
}
class DerivedChild extends SuperParent {
    // Overriding: extends parent's perform() behavior
    @Override
    void perform() { System.out.println("Derived dynamic performance"); }
}
\`\`\``
          },
          {
            id: "autumn-2024-a-2b",
            qNumber: "[2] (b)",
            text: "Imagine a scenario where you're designing a software system for a zoo. The base class is `Animal`, which has a method `sound()`. A subclass `Mammal` adds a method `nurse()`, and a further subclass `Lion` adds a method `roar()`. Write the Java code for this class hierarchy. Then, describe how objects of type `Lion` can access the methods `sound()`, `nurse()`, and `roar()`. What would happen if the `Lion` class overrides `sound()`?",
            tags: ["Inheritance", "Overriding", "Java OOP Programming"],
            answer: `### Code Solution\n\`\`\`java\n// Top Base Class\nclass Animal {\n    void sound() {\n        System.out.println("Generic animal vocalization.");\n    }\n}\n\n// Mid Class extending inheritance chain\nclass Mammal extends Animal {\n    void nurse() {\n        System.out.println("Mammal nursing activities.");\n    }\n}\n\n// Derived leaf classification\nclass Lion extends Mammal {\n    void roar() {\n        System.out.println("The Lion roars proudly!");\n    }\n}\n\npublic class ZooDemo {\n    public static void main(String[] args) {\n        Lion simba = new Lion();\n        \n        // Invocations\n        simba.sound(); // Grandparent method access through Multilevel Inheritance\n        simba.nurse(); // Parent method access\n        simba.roar();  // Subclass method axis\n    }\n}\n\`\`\`\n\n### Access Dynamics & Method Overriding Answer\n1. **Method Access Mechanics**: Due to **Multilevel Inheritance** (\`Lion\` class inherits from \`Mammal\`, which in turn inherits from \`Animal\`), an object of type \`Lion\` inherits all non-private fields and methods from both the \`Mammal\` and \`Animal\` classes.\n2. **If \`Lion\` overrides \`sound()\`**: The grandparent class's generic \`sound()\` method is masked by the subclass's custom implementation at runtime. If a \`Lion\` object executes \`simba.sound()\`, JVM runtime polymorphism (dynamic method dispatch) ensures that \`Lion\`'s custom overridden method is executed instead of \`Animal\`'s default method.`
          },
          {
            id: "autumn-2024-a-2-or-a",
            qNumber: "[2] OR (a)",
            text: "Discuss the purpose of `extends` keyword in Java with example.",
            tags: ["Inheritance", "Basic OOP"],
            answer: `### Purpose of \`extends\` Keyword
The \`extends\` keyword is used to establish subclass relationships (inheritance). It permits a child class to inherit non-private fields and methods from a specified superclass, encouraging **code reuse** and clear modular models.

### Basic Code Example
\`\`\`java
class Device {
    String brand = "Generic";
    void start() { System.out.println("Device initializing..."); }
}

class Laptop extends Device {
    int ramSize = 16;
}

public class DeviceRunner {
    public static void main(String[] args) {
        Laptop myMac = new Laptop();
        myMac.start(); // Accesses inherited start() method cleanly!
    }
}
\`\`\``
          },
          {
            id: "autumn-2024-a-2-or-b",
            qNumber: "[2] OR (b)",
            text: "A staff member earning 30,000.00 BDT as a programmer in the IIUC IT department. No matter their level of classification, every employee in the IT department is paid the same amount. A bonus of 2000.00 BDT was also given to the specific programmer this month for his great work. Create a Java Program that displays the IS-A (Programmer is an Employee) relationship of inheritance by printing the employee's salary and bonus.",
            tags: ["Inheritance", "Java OOP Programming"],
            answer: `### Code Solution\n\`\`\`java\nclass Employee {\n    double baseSalary = 30000.00;\n}\n\nclass Programmer extends Employee {\n    double bonus = 2000.00;\n    \n    void printSalaryReport() {\n        System.out.println("Programmer Monthly Employee Salary Status:");\n        System.out.println("Flat salary: " + baseSalary + " BDT");\n        System.out.println("Awarded bonus: " + bonus + " BDT");\n        System.out.println("Aggregated total payout: " + (baseSalary + bonus) + " BDT");\n    }\n}\n\npublic class SalaryCheck {\n    public static void main(String[] args) {\n        Programmer pg = new Programmer();\n        pg.printSalaryReport();\n    }\n}\n\`\`\``
          }
        ]
      },
      {
        name: "Part B",
        questions: [
          {
            id: "autumn-2024-b-3a",
            qNumber: "[3] (a)",
            text: "Define Abstraction in Java.",
            tags: ["Abstraction", "OOP Concepts"],
            answer: `### explanation\nAbstraction is the OOP technique of focusing on essential attributes of an entity while hiding non-essential implementation details. It establishes a clear boundary between *what* an object does and *how* it does it.`
          },
          {
            id: "autumn-2024-b-3b",
            qNumber: "[3] (b)",
            text: "Explain the ways used to achieve abstraction in Java.",
            tags: ["Abstraction", "Abstract Class", "Interface"],
            answer: `Achieved using Abstract Classes (partial abstraction, 0-100%) and Interfaces (full abstraction, 100% until modern JDK additions of default methods).`
          },
          {
            id: "autumn-2024-b-3c",
            qNumber: "[3] (c)",
            text: "Write a JAVA program to implement Abstraction (50%) using Abstract class and Abstract Methods.",
            tags: ["Abstraction", "Abstract Class", "Java OOP Programming"],
            answer: `### 50% Abstraction Program
An abstract class is at least partially abstract. To demonstrate 50% abstraction, define a class with one fully implemented (concrete) method alongside one abstract (unimplemented) method.

\`\`\`java
abstract class Vehicle {
    // 1. Concrete method (fully defined behavior)
    void startEngine() {
        System.out.println("Ignition: Engine is active and humming.");
    }

    // 2. Abstract method (implementation delegated to child class)
    abstract void accelerate();
}

class Car extends Vehicle {
    @Override
    void accelerate() {
        System.out.println("Car: Depressed gas pedal - accelerating quickly!");
    }
}

public class AbstractionDemo {
    public static void main(String[] args) {
        Vehicle myCar = new Car();
        myCar.startEngine(); // Invokes 50% concrete contract
        myCar.accelerate();  // Invokes 50% abstract overridden behavior
    }
}
\`\`\``
          },
          {
            id: "autumn-2024-b-4a",
            qNumber: "[4] (a)",
            text: "What do you mean by interface in Java?",
            tags: ["Interface", "Abstraction"],
            answer: `### Overview\nAn Interface is a collection of abstract methods and static constant declarations. It serves as an architectural template that unrelated classes implement to guarantee a shared set of behaviors. Interfaces cannot maintain runtime states.`
          },
          {
            id: "autumn-2024-b-4b",
            qNumber: "[4] (b)",
            text: "Explain the differences between the abstract class and interface in Java.",
            tags: ["Abstraction", "Abstract Class", "Interface"],
            answer: `### Abstract Class vs. Interface Key Differences

| Metric | Abstract Class | Interface |
| :--- | :--- | :--- |
| **Extends / Implements** | Extends with \`extends\` | Implements with \`implements\` |
| **Multiplexing** | Single inheritance only | A class can implement multiple interfaces |
| **Method Types** | Can hold both abstract and concrete methods | Originally all abstract (JDK 8+ has default/static methods) |
| **Fields** | Can hold instance fields of any access levels | Fields are strictly \`public static final\` constants |
| **Constructors** | Can declare custom class constructors | Absolutely cannot hold constructors |`
          },
          {
            id: "autumn-2024-b-4c",
            qNumber: "[4] (c)",
            text: "Multiple Inheritance is not supported through class in Java, but it is possible by an interface, why? Explain the reasons with proper example.",
            tags: ["Interface", "Multiple Inheritance", "Abstraction"],
            answer: `### Multiple Inheritance via Interfaces
Java does not support multiple inheritance of *classes* because of potential method logic collisions. However, it fully supports multiple inheritance via *interfaces*. 

Since interface methods are completely abstract (they do not have method body implementations), if a class implements two interfaces that declare the exact same method signature, there is zero ambiguity. The implementing class must write its own single, custom method definition, resolving any potential conflict cleanly.

### Verbatim Code Example
\`\`\`java
interface Alpha {
    void process();
}

interface Beta {
    void process(); // Identical abstract method
}

// Subclass implements both. This compiles without errors!
class CoreTask implements Alpha, Beta {
    @Override
    public void process() {
        System.out.println("Processing single unambiguous action inside CoreTask!");
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        CoreTask task = new CoreTask();
        task.process();
    }
}
\`\`\``
          },
          {
            id: "autumn-2024-b-5a",
            qNumber: "[5] (a)",
            text: "Explain Metadata with the help of an example.",
            tags: ["Annotations / Metadata"],
            answer: `### Concept\n**Metadata** in Java translates into annotations (marked via the \`@\` prefix). Annotations attach extra descriptive parameters to code modules, classes, compilers, or deployment configurations without modifying basic code actions.\n\n### Annotation Examples\n* \`@Override\`: Tells the compiler to verify that a subclass method successfully overrides a superclass method, throwing an error if it doesn't.\n* \`@Deprecated\`: Outlaws usage of legacy API elements, warning users to switch to modern solutions.\n\n### Code Example\n\`\`\`java\nclass Base {\n    void display() {\n        System.out.println("Base Action");\n    }\n}\n\nclass Derived extends Base {\n    // Compiler Metadata tag verifying correct signature overrides\n    @Override\n    void display() {\n        System.out.println("Overridden Derived Action");\n    }\n}\n\`\`\``
          },
          {
            id: "autumn-2024-b-5b",
            qNumber: "[5] (b)",
            text: "Write a java program to search the file named entered as a filename from command line, if it exists in the system then program should print the content of a file on console.",
            tags: ["File I/O", "Java IO Programming"],
            answer: `### File Reader CLI Solution\n\`\`\`java\nimport java.io.File;\nimport java.io.FileReader;\nimport java.io.BufferedReader;\nimport java.io.IOException;\n\npublic class CommandLineFileSearcher {\n    public static void main(String[] args) {\n        // Verify if command line parameter was successfully supplied\n        if (args.length == 0) {\n            System.out.println("Error: Please specify the filename as a command-line argument.");\n            return;\n        }\n\n        String inputFilename = args[0];\n        File targetFile = new File(inputFilename);\n\n        // Check physical file existence\n        if (targetFile.exists() && targetFile.isFile()) {\n            System.out.println("Success: File found! Streaming content on screen below:\\n");\n            \n            // Try-with-resources establishes automated file handle disposal\n            try (BufferedReader reader = new BufferedReader(new FileReader(targetFile))) {\n                String currentLine;\n                while ((currentLine = reader.readLine()) != null) {\n                    System.out.println(currentLine);\n                }\n            } catch (IOException ex) {\n                System.out.println("Runtime IO Error: " + ex.getMessage());\n            }\n        } else {\n            System.out.println("Error: The specified file '" + inputFilename + "' does not exist in the system.");\n        }\n    }\n}\n\`\`\``
          },
          {
            id: "autumn-2024-b-5-or-a",
            qNumber: "[5] OR (a)",
            text: "Define Multithreading in Java. Also, explain the life cycle of a Thread.",
            tags: ["Multithreading", "Thread Lifecycle"],
            answer: `### Multithreading and Thread Life Cycle
**Multithreading** is a process of executing multiple threads simultaneously to maximize CPU performance. A thread is a lightweight sub-process - the smallest unit of execution.

### The 5 States of the Thread Lifecycle
1. **New (Born)**: Thread object is created via \`new Thread()\` but hasn't started yet.
2. **Runnable (Ready)**: Thread registry moves here after \`start()\`. Waiting in line for CPU execution slots.
3. **Running**: Thread scheduler executes instructions of the \`run()\` method. 
4. **Blocked (Non-Runnable / Timed Waiting)**: Path temporarily halted via \`sleep(ms)\`, \`wait()\`, or I/O locks.
5. **Terminated (Dead)**: Executions completed; thread resources are cleaned up.

### Methods that Block Threads
* \`Thread.sleep(long milliseconds)\`: Halts execution for a specified duration.
* \`threadInstance.join()\`: Block calling thread until target thread completes.
* \`objectLock.wait()\`: Keeps thread waiting on monitor until \`notify()\` triggers.`
          },
          {
            id: "autumn-2024-b-5-or-b",
            qNumber: "[5] OR (b)",
            text: "Write a Java program to implement multithreading by extending the thread class.",
            tags: ["Multithreading", "Java OOP Programming"],
            answer: `### Complete Threading Demonstration\nReview **Autumn 2025 [5] OR (c)** for an elegant task scheduling code example utilizing \`Thread.sleep(ms)\` blocks.`
          }
        ]
      }
    ]
  },
  {
    id: "spring-2024",
    semester: "Spring 2024",
    parts: [
      {
        name: "Part A",
        questions: [
          {
            id: "spring-2024-a-1a",
            qNumber: "[1] (a)",
            text: "Explain the purpose of `extends` keyword in Java with examples.",
            tags: ["Inheritance", "Basic OOP"],
            answer: `### Purpose of \`extends\` Keyword
The \`extends\` keyword is utilized to establish an hierarchy of inheritance. It binds a subclass with a parent class so the child acquires and reuses the public and protected attributes and methods of the parent, minimizing logical redundancy.

### Code Example
\`\`\`java
class ParentClass {
    void speak() { System.out.println("Hello from Parent!"); }
}
class ChildClass extends ParentClass {}

public class ExtendsDemo {
    public static void main(String[] args) {
        ChildClass child = new ChildClass();
        child.speak(); // Inherited method execution!
    }
}
\`\`\``
          },
          {
            id: "spring-2024-a-1b",
            qNumber: "[1] (b)",
            text: "A staff member earning 40,000.00 BDT as a programmer in the IIUC IT department. No matter their level of classification, every employee in the IT department is paid the same amount. A bonus of 2000.00 BDT was also given to the specific programmer this month for his great work. Create a Java Program that displays the IS-A (Programmer is an Employee) relationship of inheritance by printing the employee's salary and bonus.",
            tags: ["Inheritance", "Java OOP Programming"],
            answer: `### Code Solution\n\`\`\`java\nclass Employee {\n    double baseSalary = 40000.00;\n}\n\nclass Programmer extends Employee {\n    double bonus = 2000.00;\n    \n    void printSalaryReport() {\n        System.out.println("Employee base salary amount BDT: " + baseSalary);\n        System.out.println("Additional bonus payout: " + bonus);\n        System.out.println("Consolidated payout total BDT: " + (baseSalary + bonus));\n    }\n}\n\npublic class SpringDeptCheck {\n    public static void main(String[] args) {\n        Programmer pg = new Programmer();\n        pg.printSalaryReport();\n    }\n}\n\`\`\``
          },
          {
            id: "spring-2024-a-2a",
            qNumber: "[2] (a)",
            text: "Why multiple Inheritance is not supported through the use of class in JAVA? Explain with a proper Java programming example.",
            tags: ["Inheritance", "Multiple Inheritance", "Diamond Problem"],
            answer: `### Sibling Conflict and the Diamond Problem
Java does not support multiple inheritance of classes (e.g., \`class C extends A, B\`) to avoid the **Diamond Problem**. If parents A and B declare methods with identical signatures, and C does not override them, calling that method on a C object results in compile-time ambiguity.

### Class Collision Code Model
\`\`\`java
class SuperA {
    void process() { System.out.println("A processing"); }
}
class SuperB {
    void process() { System.out.println("B processing"); }
}

// ILLEGAL CONFIGURATION:
/*
class SubC extends SuperA, SuperB {
    // If we call new SubC().process(), which parent runs? Ambiguity!
}
*/
\`\`\``
          },
          {
            id: "spring-2024-a-2b",
            qNumber: "[2] (b)",
            text: "Explain the differences between multilevel Inheritance and hierarchical Inheritance.",
            tags: ["Inheritance"],
            answer: `### Multilevel vs. Hierarchical Inheritance

1. **Multilevel Inheritance**: Connects classes in a linear heritage chain: Base → Intermediate child → Derived grandchild (e.g., Grandparent → Parent → Child).
2. **Hierarchical Inheritance**: Connects multiple sibling subclasses directly to a single shared parent (e.g., Parent → Child A, Child B).

### Structural Comparison Layout
\`\`\`text
Multilevel (Chain):
  [Grandparent]
        ▲
     [Parent]
        ▲
     [Child]

Hierarchical (Canopy):
        [Parent]
       /        \\
   [ChildA]  [ChildB]
\`\`\``
          },
          {
            id: "spring-2024-a-2-or-a",
            qNumber: "[2] OR (a)",
            text: "Differentiate `String` with `StringBuffer` class.",
            tags: ["String", "StringBuffer", "Java Utility"],
            answer: `### Immutable vs Mutable Strings\n\n| Param | String Class | StringBuffer Class |\n| :--- | :--- | :--- |\n| **Mutability** | **Immutable**: Any change creates a new string object in memory. | **Mutable**: Content can be edited in place without instantiating new objects. |\n| **Performance** | Slower when performing frequent concat loops. | Extremely fast for frequent string manipulations. |\n| **Thread Safety** | Thread-safe (read-only state prevents race conditions). | Thread-safe (methods are synchronized, preventing concurrent access anomalies). |\n| **Memory efficiency** | Uses String Constant Pool (SCP) to reduce memory allocations. | Allocates block segments via heap buffers. |`
          },
          {
            id: "spring-2024-a-2-or-b",
            qNumber: "[2] OR (b)",
            text: "Why can't method overloading be accomplished by modifying the method's return type only? Give a suitable Java programming example to Illustrate.",
            tags: ["Polymorphism", "Overloading"],
            answer: `### Overloading Ambiguity with Return Types
Method overloading uses exact **method signatures** (method identifier name + parameter lists) to distinguish methods. It ignores return types because of invocation ambiguity. If double and integer versions of a method share the exact same parameters, invoking them without assigning the result means the compiler cannot resolve which method to fire.

### Compilation Failure Example
\`\`\`java
public class SignaturesMistake {
    int calculate(int value) { return value * 2; }

    // THIS WILL CAUSE A COMPILE ERROR (SIGNATURES DUPLICATED):
    /*
    double calculate(int value) { return (double) (value * 2); }
    */
}
\`\`\``
          }
        ]
      },
      {
        name: "Part B",
        questions: [
          {
            id: "spring-2024-b-3a",
            qNumber: "[3] (a)",
            text: "Define Abstraction in Java.",
            tags: ["Abstraction", "OOP Concepts"],
            answer: `### Abstraction Definition
**Abstraction** is the OOP concept of hiding structural implementation details while displaying only essential behaviors to the caller. It establishes a clear boundary between *what* a system does and *how* it performs it inside.`
          },
          {
            id: "spring-2024-b-3b",
            qNumber: "[3] (b)",
            text: "Explain the ways used to achieve abstraction in Java.",
            tags: ["Abstraction", "Abstract Class", "Interface"],
            answer: `Revealed and practiced across abstract classes (partial, 0-100%) and completely abstract interfaces (100%).`
          },
          {
            id: "spring-2524-b-3c",
            qNumber: "[3] (c)",
            text: "Write a JAVA program to implement Abstraction (50%) using Abstract class and Abstract Methods.",
            tags: ["Abstraction", "Abstract Class", "Java OOP Programming"],
            answer: `### 50% Abstraction Implementation
To build a class reflecting exactly 50% abstraction, include one concrete method (with code body) and one pure abstract method (without code body).

\`\`\`java
abstract class MotorVehicle {
    // 50% Abstraction: Concrete method
    void activateLights() {
        System.out.println("Lights turned on.");
    }

    // 50% Abstraction: Abstract method
    abstract void accelerate();
}

class Scooter extends MotorVehicle {
    @Override
    void accelerate() {
        System.out.println("Scooter: Twisting grip throttle to accelerate.");
    }
}

public class ScooterDemo {
    public static void main(String[] args) {
        MotorVehicle ride = new Scooter();
        ride.activateLights(); // Concrete method invocation
        ride.accelerate();     // Overridden method invocation
    }
}
\`\`\``
          },
          {
            id: "spring-2024-b-4a",
            qNumber: "[4] (a)",
            text: "What do you mean by Access Modifiers in Java?",
            tags: ["Access Modifiers", "Basic OOP"],
            answer: `### Access Modifiers
**Access Modifiers** are Java keywords used to set the visibility and accessibility of classes, fields, methods, and constructors within packages. They dictate which components can interact with specific class variables.`
          },
          {
            id: "spring-2024-b-4b",
            qNumber: "[4] (b)",
            text: "Explain the differences between the different types of Access modifiers in Java.",
            tags: ["Access Modifiers", "Packages"],
            answer: `### Access Modifiers Comparisons

| Access Modifier | Within Same Class | Within Same Package | Subclass Outside Package | Anywhere Outside Package |
| :--- | :---: | :---: | :---: | :---: |
| **private** | Yes | No | No | No |
| **default** | Yes | Yes | No | No |
| **protected** | Yes | Yes | Yes | No |
| **public** | Yes | Yes | Yes | Yes |`
          },
          {
            id: "spring-2024-b-4c",
            qNumber: "[4] (c)",
            text: "Illustrate the ways of accessing packages from another package using a proper Java programming example.",
            tags: ["Packages", "Access Modifiers", "Java OOP Programming"],
            answer: `### Multi-Package Implementation Example\nTo use a package-scoped class inside another package, you must either:\n1. Use the explicit \`import\` keyword.\n2. Reference the target using its fully qualified name (e.g., \`pack1.Test1\`).\n\n### File 1: pack1/Helper.java\n\`\`\`java\npackage pack1;\n\npublic class Helper {\n    public void showHelp() {\n        System.out.println("Providing support assistance from pack1.Helper!");\n    }\n}\n\`\`\`\n\n### File 2: pack2/Main.java\n\`\`\`java\npackage pack2;\n\n// Approach 1: Import keyword\nimport pack1.Helper;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Approach 1 instance:\n        Helper aid = new Helper();\n        aid.showHelp();\n        \n        // Approach 2: Fully qualified path naming (no imports needed)\n        pack1.Helper secondaryAid = new pack1.Helper();\n        secondaryAid.showHelp();\n    }\n}\n\`\`\``
          },
          {
            id: "spring-2024-b-5a",
            qNumber: "[5] (a)",
            text: "What do you mean by the Interface in Java?",
            tags: ["Interface", "Abstraction"],
            answer: `### Interface Definition
An **Interface** in Java is a behavioral blueprint containing abstract methods and static constant indicators. It forms a rigorous contract that any implementing class must satisfy, facilitating complete decoupling of structures.`
          },
          {
            id: "spring-2024-b-5b",
            qNumber: "[5] (b)",
            text: "Explain the differences between the abstract class and Interface in Java.",
            tags: ["Abstraction", "Abstract Class", "Interface"],
            answer: `### Abstract Class vs. Interface Key Metrics

| Metric | Abstract Class | Interface |
| :--- | :--- | :--- |
| **Keyword** | \`abstract class\` | \`interface\` |
| **Inheritance** | Single class inheritance only | Multiple interface inheritance possible |
| **Methods** | Mix of concrete and abstract methods | Traditionally 100% abstract methods |
| **State Fields** | Can hold instance fields of any visibility scope | Fields are strictly implicitly \`public static final\` |
| **Constructor** | Can define custom constructors | Strictly cannot define constructors |`
          },
          {
            id: "spring-2024-b-5c",
            qNumber: "[5] (c)",
            text: "Multiple Inheritance is not supported through class in Java, but it is possible by an interface, why? Explain with proper examples.",
            tags: ["Interface", "Multiple Inheritance", "Abstraction"],
            answer: `### Multiple Inheritance via Interface Method Resolution
Interfaces bypass Diamond collisions because they do not contain method body implementations. Consequently, if a class implements multiple interfaces featuring duplicate abstract methods, only a single method declaration signature is inherited, and the implementing class provides the single actual definition of that method.

### Complete Demonstration Code
\`\`\`java
interface Printer {
    void execute();
}
interface Scanner {
    void execute(); // Identical abstract method definition
}

class Copier implements Printer, Scanner {
    @Override
    public void execute() {
        System.out.println("Doing copy processes unambiguously inside Copier.");
    }
}

public class MultiInheritDemo {
    public static void main(String[] args) {
        Copier cop = new Copier();
        cop.execute();
    }
}
\`\`\``
          },
          {
            id: "spring-2024-b-5-or-a",
            qNumber: "[5] OR (a)",
            text: "Define Multithreading in Java.",
            tags: ["Multithreading"],
            answer: `### Multithreading Definition\nMultithreading is a Java mechanism that allows concurrent execution of multiple lightweight threads within a single process. It maximizes CPU utilization by keeping the processor active even during I/O block segments.`
          },
          {
            id: "spring-2024-b-5-or-b",
            qNumber: "[5] OR (b)",
            text: "Explain the life cycle of a Thread.",
            tags: ["Multithreading", "Thread Lifecycle"],
            answer: `### The 5 States of the Thread Lifecycle
1. **New (Born)**: Thread instance created via \`new Thread()\` but \`start()\` hasn't been triggered yet.
2. **Runnable (Waiting)**: Registered with JVM thread scheduler via \`start()\`. Waiting for processor time.
3. **Running**: CPU execution slots allocated - executing code statements inside \`run()\`.
4. **Blocked (Waiting / Paused)**: Temporarily halted via \`sleep(ms)\`, \`wait()\`, or I/O resource operations locks.
5. **Terminated (Dead)**: Executions completely processed or halted via uncaught runtime exception error.`
          },
          {
            id: "spring-2024-b-5-or-c",
            qNumber: "[5] OR (c)",
            text: "Write a Java program to implement multithreading by extending the thread class.",
            tags: ["Multithreading", "Java OOP Programming"],
            answer: `### Multithreading via Thread Subclass
To run parallel execution channels, subclass \`java.lang.Thread\` and override \`run()\`. Launch threads asynchronously using \`start()\`.

\`\`\`java
class WorkThread extends Thread {
    private String threadLabel;
    
    WorkThread(String label) { this.threadLabel = label; }

    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println("Thread [" + threadLabel + "] value: " + i);
            try {
                Thread.sleep(200); // Create dynamic context switches
            } catch (InterruptedException ex) {
                System.out.println(ex.getMessage());
            }
        }
    }
}

public class MultiThreadApp {
    public static void main(String[] args) {
        WorkThread worker1 = new WorkThread("Task1");
        WorkThread worker2 = new WorkThread("Task2");

        worker1.start(); // Spawns worker1 thread in parallel
        worker2.start(); // Spawns worker2 thread in parallel
    }
}
\`\`\``
          }
        ]
      }
    ]
  },
  {
    id: "autumn-2023",
    semester: "Autumn 2023",
    parts: [
      {
        name: "Part A",
        questions: [
          {
            id: "autumn-2023-a-1a",
            qNumber: "[1] (a)",
            text: "Why multiple inheritance is not supported through the use of class in JAVA? Explain with proper java programming example.",
            tags: ["Inheritance", "Multiple Inheritance", "Diamond Problem"],
            answer: `### Java's Restriction on Class-Based Multiple Inheritance
Java forbids a class from inheriting from more than one superclass directly. This avoids method collision ambiguities, commonly identified as the **Diamond Problem**.

### The Diamond Problem Model
\`\`\`java
class SuperA {
    void speak() { System.out.println("SuperA logic"); }
}
class SuperB {
    void speak() { System.out.println("SuperB logic"); }
}

// ILLEGAL STRUCT STATEMENT (Will fail compilation):
/*
class ChildClass extends SuperA, SuperB {
    // If we trigger new ChildClass().speak(), which superclass method runs?
}
*/
\`\`\``
          },
          {
            id: "autumn-2023-a-1b",
            qNumber: "[1] (b)",
            text: "Explain the differences between multilevel Inheritance and hierarchical inheritance.",
            tags: ["Inheritance"],
            answer: `### Multilevel vs. Hierarchical Inheritance

1. **Multilevel**: Extends parent-child links in a single chain hierarchy (BaseClass → MidClass → DerivedChild).
2. **Hierarchical**: Multiple separate children classes share a single direct superclass parent (SuperParent → SiblingA, SiblingB).

### Diagrammatic Forms
\`\`\`text
Multilevel (Chain):
  [Grandparent]
        ▲
     [Parent]
        ▲
     [Child]

Hierarchical (Canopy):
        [Parent]
       /        \\
   [SubclassA]  [SubclassB]
\`\`\``
          },
          {
            id: "autumn-2023-a-2a",
            qNumber: "[2] (a)",
            text: "Explain the difference between Method Overloading and Method Overriding in java.",
            tags: ["Polymorphism", "Overloading", "Overriding"],
            answer: `### Method Overloading vs. Overriding

| Characteristic | Method Overloading | Method Overriding |
| :--- | :--- | :--- |
| **Resolution Type** | Static / Compile-time binding | Dynamic / Run-time binding |
| **Scope** | Within the same class | Inherited subclasses |
| **Parameters** | Must undergo parameter type modifications | Signatures must match identical parameter structures |
| **Return Type** | Can change independently | Strict covariant match or exact target match |`
          },
          {
            id: "autumn-2023-a-2b",
            qNumber: "[2] (b)",
            text: "Why can't method overloading be accomplished by only modifying the method's return type only? Give a suitable Java programming example to illustrate.",
            tags: ["Polymorphism", "Overloading"],
            answer: `### Compiler Ambiguity on Overloading with Return-type only
Overloading resolution inside the Java compiler matches parameters to distinct calls. If return types were the sole differences, there'd be no programmatic way for the compiler to select the appropriate candidate.

### Ambiguous Code Example (Compiler Error)
\`\`\`java
public class ReturnTypeDemo {
    int runJob(String p) { return 42; }

    // DUPLICATE SIGNATURE SYSTEM COMPILE FAILURE:
    /*
    double runJob(String p) { return 42.0; }
    */
}
\`\`\``
          },
          {
            id: "autumn-2023-a-2-or-a",
            qNumber: "[2] OR (a)",
            text: "Discuss the purpose of `extends` keyword in Java with example.",
            tags: ["Inheritance", "Basic OOP"],
            answer: `### Purpose of \`extends\` Keyword
The \`extends\` keyword is the syntax that signals class inheritance. Applying \`extends ParentClass\` to a subclass structure establishes access permissions to the fields and methods of that SuperClass.

### Basic Code Snippet
\`\`\`java
class Parent {
    void greet() { System.out.println("Good morning!"); }
}
class Child extends Parent {}

public class ExtendsRunner {
    public static void main(String[] args) {
        new Child().greet(); // Inherited method execution!
    }
}
\`\`\``
          },
          {
            id: "autumn-2023-a-2-or-b",
            qNumber: "[2] OR (b)",
            text: "A staff member earning 30,000.00 BDT as a programmer in the IIUC IT department. No matter their level of classification, every employee in the IT department is paid the same amount. A bonus of 2000.00 BDT was also given to the specific programmer this month for his great work. Create a Java Program that displays the IS-A (Programmer is an Employee) relationship of inheritance by printing the employee's salary and bonus.",
            tags: ["Inheritance", "Java OOP Programming"],
            answer: `### Code Solution\n\`\`\`java\nclass Employee {\n    double baseSalary = 30000.00;\n}\n\nclass Programmer extends Employee {\n    double bonus = 2000.00;\n    \n    void printReport() {\n        System.out.println("Base Salary: " + baseSalary + " BDT");\n        System.out.println("Incentive bonus: " + bonus + " BDT");\n        System.out.println("Consolidated payout calculation: " + (baseSalary + bonus) + " BDT");\n    }\n}\n\npublic class AutumnDeptCheck {\n    public static void main(String[] args) {\n        Programmer pg = new Programmer();\n        pg.printReport();\n    }\n}\n\`\`\``
          }
        ]
      },
      {
        name: "Part B",
        questions: [
          {
            id: "autumn-2023-b-3a",
            qNumber: "[3] (a)",
            text: "Define Abstraction in Java.",
            tags: ["Abstraction", "OOP Concepts"],
            answer: `### Abstraction concept
**Abstraction** refers to emphasizing the conceptual attributes and interface requirements while hiding actual internal programming execution details, giving callers clear contracts.`
          },
          {
            id: "autumn-2023-b-3b",
            qNumber: "[3] (b)",
            text: "Explain the ways used to achieve abstraction in Java.",
            tags: ["Abstraction", "Abstract Class", "Interface"],
            answer: `Achieved using Abstract Classes (partial, 0-100%) and Interfaces (full, 100%).`
          },
          {
            id: "autumn-2023-b-3c",
            qNumber: "[3] (c)",
            text: "Write a JAVA program to implement Abstraction (50%) using Abstract class and Abstract Methods.",
            tags: ["Abstraction", "Abstract Class", "Java OOP Programming"],
            answer: `### Abstract Class with 50% Abstraction
To build an abstract class reflecting exactly 50% abstraction, include one concrete method (with code body) and one pure abstract method (without code body).

\`\`\`java
abstract class Vehicle {
    // 1. Concrete (50%)
    void start() { System.out.println("Engine started."); }

    // 2. Abstract (50%)
    abstract void refuel();
}

class PetrolCar extends Vehicle {
    @Override
    void refuel() { System.out.println("Filling Petrol in physical fuel tank."); }
}

public class VehicleDemo {
    public static void main(String[] args) {
        Vehicle car = new PetrolCar();
        car.start();
        car.refuel();
    }
}
\`\`\``
          },
          {
            id: "autumn-2023-b-4a",
            qNumber: "[4] (a)",
            text: "What do you mean by Access Modifiers in Java?",
            tags: ["Access Modifiers", "Basic OOP"],
            answer: `### Access Modifiers
**Access Modifiers** are dedicated Java keywords defining scope boundary perimeters. They regulate class, interface, and property interactions globally across your java workspace code.`
          },
          {
            id: "autumn-2023-b-4b",
            qNumber: "[4] (b)",
            text: "Explain the differences between the different types of Access modifiers in Java.",
            tags: ["Access Modifiers", "Packages"],
            answer: `### Comparison Matrix of Access Scopes

| Modifier | Class scope | Package scope | Subclass outside package | Anywhere else |
| :--- | :---: | :---: | :---: | :---: |
| **private** | Yes | No | No | No |
| **default** | Yes | Yes | No | No |
| **protected** | Yes | Yes | Yes | No |
| **public** | Yes | Yes | Yes | Yes |`
          },
          {
            id: "autumn-2023-b-4c",
            qNumber: "[4] (c)",
            text: "Illustrate the ways of accessing packages from another package using a proper Java programming example.",
            tags: ["Packages", "Access Modifiers", "Java OOP Programming"],
            answer: `### Accessing Classes Across Packages
In Java, import targets are referenced using:
1. The \`import\` keyword statement.
2. Fully qualified names (specifying packages path along with class identifiers).

### Code Components
\`\`\`java
package pack1;
public class Helper {
    public void execute() { System.out.println("Helper action!"); }
}
\`\`\`

\`\`\`java
package pack2;
import pack1.Helper; // Option 1

public class MainApp {
    public static void main(String[] args) {
        // Option 1
        Helper myHelper = new Helper();
        myHelper.execute();

        // Option 2 (Fully qualified class name)
        pack1.Helper anotherHelper = new pack1.Helper();
        anotherHelper.execute();
    }
}
\`\`\``
          },
          {
            id: "autumn-2023-b-5a",
            qNumber: "[5] (a)",
            text: "What do you mean by interface in Java?",
            tags: ["Interface", "Abstraction"],
            answer: `### Concept of Interfaces
A Java **interface** establishes abstract contractual behavior commitments. Classes subscribe and customize these requirements via \`implements\`. Interfaces promote modular structure decoupling without instance fields.`
          },
          {
            id: "autumn-2023-b-5b",
            qNumber: "[5] (b)",
            text: "Explain the differences between the abstract class and interface in Java.",
            tags: ["Abstraction", "Abstract Class", "Interface"],
            answer: `### Abstract Classes vs. Interfaces

| Aspect | Abstract Class | Interface |
| :--- | :--- | :--- |
| **Mechanisms** | \`abstract class\` | \`interface\` |
| **Inherit Multiple** | Single class extends | Multi interface implements |
| **Instance Fields** | Non-static / Non-final support | Strictly static final fields |
| **Methods** | Hybrid (Abstract + Concrete method) | Purely Abstract signatures block |`
          },
          {
            id: "autumn-2023-b-5c",
            qNumber: "[5] (c)",
            text: "Multiple Inheritance is not supported through class in Java, but it is possible by an interface, why? Explain with proper example.",
            tags: ["Interface", "Multiple Inheritance", "Abstraction"],
            answer: `### Multiple Inheritance via Interface Method Merges
Since interfaces declare method signatures without bodies, multiple interface implementations share identical name declarations without overlapping instructions. This eliminates compilation paths collision, letting the concrete subclass override and implement one single master method body.

### Complete Demonstration
\`\`\`java
interface InterfaceX { void execute(); }
interface InterfaceY { void execute(); }

class RunnerClass implements InterfaceX, InterfaceY {
    @Override
    public void execute() {
        System.out.println("Unified conflict-free method block executed!");
    }
}
\`\`\``
          },
          {
            id: "autumn-2023-b-5-or-a",
            qNumber: "[5] OR (a)",
            text: "Differentiate Applet Vs. Swing.",
            tags: ["Applet Vs. Swing", "Java GUI"],
            answer: `### Direct Comparison\n\n| Param | Java Applet | Java Swing |\n| :--- | :--- | :--- |\n| **Deployment** | Runs client-side inside a web browser sandbox. | Runs as a standalone desktop application. |\n| **Architecture** | AWT-based, heavy components that rely on native OS rendering. | Pure Java MVC architecture, lightweight components that render independently. |\n| **Pluggable Look & Feel** | No support. Appearance relies on host OS styling. | Full support. Developer can easily change or customize themes. |\n| **Security** | Highly restricted sandbox prevents file system access. | Standard JVM access (can read/write files if permitted by system). |\n| **Modern Status** | Deprecated and obsolete. Outlawed by modern browsers. | Mature, standard framework for building desktop tools. |`
          },
          {
            id: "autumn-2023-b-5-or-b",
            qNumber: "[5] OR (b)",
            text: "What is synchronization? Write a program that uses thread synchronization with proper output.",
            tags: ["Synchronization", "Multithreading", "Java OOP Programming"],
            answer: `### Thread Synchronization Explanation\n**Synchronization** is the capability to control the access of multiple threads to shared resources. In Java, synchronized blocks or methods allow only one thread to occupy a shared monitor lock at any given time, preventing **race conditions**.\n\n### Synchronized Code Solution\n\`\`\`java\nclass SharedPrinter {\n    // Synchronized method locks object monitor lock\n    synchronized void printCounters(String threadName) {\n        for (int i = 1; i <= 3; i++) {\n            System.out.println("[" + threadName + "] printing value: " + i);\n            try {\n                Thread.sleep(100); // Hold lock temporarily\n            } catch (InterruptedException ex) {\n                System.out.println("Error: " + ex.getMessage());\n            }\n        }\n    }\n}\n\nclass PrintingJob extends Thread {\n    private SharedPrinter printer;\n    private String jobTitle;\n\n    PrintingJob(SharedPrinter p, String title) {\n        this.printer = p;\n        this.jobTitle = title;\n    }\n\n    public void run() {\n        printer.printCounters(jobTitle); // Entry triggers monitor acquisition\n    }\n}\n\npublic class SystemSyncDemo {\n    public static void main(String[] args) {\n        SharedPrinter sharedResource = new SharedPrinter();\n\n        PrintingJob taskA = new PrintingJob(sharedResource, "Thread-Alpha");\n        PrintingJob taskB = new PrintingJob(sharedResource, "Thread-Beta");\n        \n        // With synchronization, taskA completes its block *before* taskB starts!\n        taskA.start();\n        taskB.start();\n    }\n}\n\`\`\`\n\n### Output Profile\n\`\`\`text\n[Thread-Alpha] printing value: 1\n[Thread-Alpha] printing value: 2\n[Thread-Alpha] printing value: 3\n[Thread-Beta] printing value: 1\n[Thread-Beta] printing value: 2\n[Thread-Beta] printing value: 3\n\`\`\``
          }
        ]
      }
    ]
  },
  {
    id: "spring-2023",
    semester: "Spring 2023",
    parts: [
      {
        name: "Part A",
        questions: [
          {
            id: "spring-2023-a-1a",
            qNumber: "[1] (a)",
            text: "Explain the difference between Method Overloading and Method Overriding in java.",
            tags: ["Polymorphism", "Overloading", "Overriding"],
            answer: `### Method Overloading vs. Overriding

| Metric | Method Overloading | Method Overriding |
| :--- | :--- | :--- |
| **Binding Time** | Static (Compile-time) binding | Dynamic (Runtime) binding |
| **Location** | Inside the same class | Within child subclasses |
| **Method Signature** | Parameters details must differ | Signatures must match identical parameter layouts |
| **Return Type** | Free modifications choices | Identical type structure |`
          },
          {
            id: "spring-2023-a-1b",
            qNumber: "[1] (b)",
            text: "Why can't method overloading be accomplished by only modifying the method's return type? Give a suitable Java programming example to illustrate.",
            tags: ["Polymorphism", "Overloading"],
            answer: `### Overloading Return Type Restrictions
In Java, method overloading is based on method signatures (method name + parameter types list). It ignores return types because of invocation ambiguity. If two methods differ only by return type, the compiler cannot determine which one to run when invoked without assigning the result.

### Compiler Error Snippet
\`\`\`java
public class DuplicateCheck {
    int getSpeed() { return 50; }
    
    // THIS WILL TRIGGER A COMPILING EXCEPTION:
    /*
    double getSpeed() { return 50.0; }
    */
}
\`\`\``
          },
          {
            id: "spring-2023-a-2a",
            qNumber: "[2] (a)",
            text: "Discuss the purpose of `extends` keyword in Java.",
            tags: ["Inheritance", "Basic OOP"],
            answer: `### Purpose of \`extends\` Keyword
The \`extends\` keyword is the mechanism utilized to construct single subclass parent-child inheritance. It lets subclasses inherit non-private fields and methods directly from the parent class to avoid coding redundancy.`
          },
          {
            id: "spring-2023-a-2b",
            qNumber: "[2] (b)",
            text: "Explain the types of inheritance.",
            tags: ["Inheritance"],
            answer: `### Types of Inheritance in Java\n1. **Single Inheritance**: Subclass extends one single parent class (Class A ← Class B).\n2. **Multilevel Inheritance**: Child extends a parent class that itself extends a parent (Class A ← Class B ← Class C).\n3. **Hierarchical Inheritance**: Multiple subclasses share and extend one single parent class (Class A ← Class B and Class A ← Class C).\n4. **Multiple Inheritance (Interfaces Only)**: Class implements multiple interface contracts. Multiple inheritance of *classes* is not supported in Java.`
          },
          {
            id: "spring-2023-a-2c",
            qNumber: "[2] (c)",
            text: "A staff member earning 30,000.00 BDT as a programmer in the IIUC IT department. No matter their level of classification, every employee in the IT department is paid the same amount. A bonus of 2000.00 BDT was also given to the specific programmer this month for his great work. Create a Java Program that displays the IS-A (Programmer is an Employee) relationship of inheritance by printing the employee's salary and bonus.",
            tags: ["Inheritance", "Java OOP Programming"],
            answer: `### Code Solution\n\`\`\`java\nclass Employee {\n    double baseSalary = 30000.00;\n}\n\nclass Programmer extends Employee {\n    double bonus = 2000.00;\n\n    void displayEarnings() {\n        System.out.println("Employee Earnings Summary:");\n        System.out.println("Base Fixed Salary: " + baseSalary + " BDT");\n        System.out.println("Awarded Bonus: " + bonus + " BDT");\n        System.out.println("Consolidated Amount: " + (baseSalary + bonus) + " BDT");\n    }\n}\n\npublic class BasePayrollCheck {\n    public static void main(String[] args) {\n        Programmer pg = new Programmer();\n        pg.displayEarnings();\n    }\n}\n\`\`\``
          },
          {
            id: "spring-2023-a-2-or-a",
            qNumber: "[2] OR (a)",
            text: "Define Exception in Java. Explain the difference between the `throws` and `throw` keyword with proper Java programming examples.",
            tags: ["Exception Handling", "Java Exception Programming"],
            answer: `### Definitions\n* **Exception**: Any abnormal event occurring during program execution that disrupts the normal flow of instructions. \n* **\`throw\` keyword**: Used to manually instantiate and throw a specific exception object from any method block.\n* **\`throws\` keyword**: Used in method signatures to state that this method might throw specific checked exceptions, warning the caller to handle them.\n\n### Comparison Code Example\n\`\`\`java\nimport java.io.IOException;\n\npublic class ExceptionWords {\n    // Method uses 'throws' in its signature to delegate checked exception handling\n    public void checkValue(int num) throws IOException {\n        if (num < 0) {\n            // Uses 'throw' to manually trigger a runtime exception\n            throw new IOException("Error: Negative levels are illegal!");\n        }\n    }\n\n    public static void main(String[] args) {\n        ExceptionWords ex = new ExceptionWords();\n        try {\n            ex.checkValue(-5);\n        } catch (IOException e) {\n            System.out.println("Caught Exception: " + e.getMessage());\n        }\n    }\n}\n\`\`\``
          },
          {
            id: "spring-2023-a-2-or-b",
            qNumber: "[2] OR (b)",
            text: "Suppose you are trying to read a file using `FileReader` Class in your Java program which doesn't exist in its constructor, then which type of exception will occur? Mention the name of the exception and explain the scenario with proper Java programming example.",
            tags: ["Exception Handling", "File I/O", "Java Exception Programming"],
            answer: `### Named Exception\n**\`java.io.FileNotFoundException\`** (which is a checked exception subclasses under \`IOException\`).\n\n### Scenario Explained\nWhen instantiating a \`FileReader\`, the compiler expects the underlying file to physically exist inside the workspace directory. Because it's a **checked exception**, Java forces the developer to handle this exception either with a try-catch block or by adding a throws clause to the method signature.\n\n### Code Demonstration\n\`\`\`java\nimport java.io.File;\nimport java.io.FileReader;\nimport java.io.FileNotFoundException;\nimport java.io.IOException;\n\npublic class MissingFileDemo {\n    public static void main(String[] args) {\n        File nonExistentFile = new File("missing_lecture.txt");\n        \n        try {\n            // Trying to read a file that does not exist\n            FileReader reader = new FileReader(nonExistentFile);\n            System.out.println("Successfully opened reader.");\n        } catch (FileNotFoundException e) {\n            System.out.println("Named Target Exception Triggered: " + e.getClass().getName());\n            System.out.println("Reason: " + e.getMessage());\n        }\n    }\n}\n\`\`\``
          }
        ]
      },
      {
        name: "Part B",
        questions: [
          {
            id: "spring-2023-b-3a",
            qNumber: "[3] (a)",
            text: "Define Abstraction in Java.",
            tags: ["Abstraction", "OOP Concepts"],
            answer: `### Abstraction
**Abstraction** is the conceptual OOP principle dedicated to presenting core interfaces to callers while hiding and managing physical coding details inside backend architectures.`
          },
          {
            id: "spring-2023-b-3b",
            qNumber: "[3] (b)",
            text: "Explain the ways used to achieve abstraction in Java.",
            tags: ["Abstraction", "Abstract Class", "Interface"],
            answer: `### Ways to Achieve Abstraction
Java offers **two distinct ways** to implement abstraction:
1. **Abstract Classes**: Offers partial (0% to 100%) abstraction. Can maintain a hybrid mix of concrete (implemented) and abstract (unimplemented) methods.
2. **Interfaces**: Historically offered 100% abstraction (excluding default and static method additions in modern JDK 8+). All declarations are abstract by default.`
          },
          {
            id: "spring-2023-b-3c",
            qNumber: "[3] (c)",
            text: "Create an abstract class 'Bank' with an abstract method 'getRateOfInterest'. 7% and 8% interests are offered in banks SBI and PNB respectively. SBI and PNB are subclasses of class 'Bank', each having a method named 'getRateOfInterest'. Call this method by creating an object of each of the two classes.",
            tags: ["Abstraction", "Abstract Class", "Java OOP Programming"],
            answer: `### Code Solution\n\`\`\`java\n// Master Abstraction boundary class representing central structures\nabstract class Bank {\n    abstract double getRateOfInterest(); // Returns rates calculation\n}\n\n// SBI subclass\nclass SBI extends Bank {\n    @Override\n    double getRateOfInterest() {\n        return 7.0; // Offering 7% Rate\n    }\n}\n\n// PNB subclass\nclass PNB extends Bank {\n    @Override\n    double getRateOfInterest() {\n        return 8.0; // Offering 8% Rate\n    }\n}\n\npublic class FinancialInterestLauncher {\n    public static void main(String[] args) {\n        // Polimorphic assignments\n        Bank sbiInstance = new SBI();\n        Bank pnbInstance = new PNB();\n        \n        System.out.println("SBI Bank Rate of Interest Offered: " + sbiInstance.getRateOfInterest() + "%");\n        System.out.println("PNB Bank Rate of Interest Offered: " + pnbInstance.getRateOfInterest() + "%");\n    }\n}\n\`\`\``
          },
          {
            id: "spring-2023-b-4a",
            qNumber: "[4] (a)",
            text: "What do you mean by Access Modifiers in Java?",
            tags: ["Access Modifiers", "Basic OOP"],
            answer: `### Access Modifiers
**Access Modifiers** are Java keywords defining access boundaries for variables, scopes, and files, optimizing secure interactions across software packages.`
          },
          {
            id: "spring-2023-b-4b",
            qNumber: "[4] (b)",
            text: "Explain the differences between the different types of Access modifiers in Java.",
            tags: ["Access Modifiers", "Packages"],
            answer: `### Access Modifiers Comparison Matrix

| Modifier | Within Class | Within Package | Subclass Outside Package | Anywhere Else |
| :--- | :---: | :---: | :---: | :---: |
| **private** | Yes | No | No | No |
| **default** | Yes | Yes | No | No |
| **protected** | Yes | Yes | Yes | No |
| **public** | Yes | Yes | Yes | Yes |`
          },
          {
            id: "spring-2023-b-4c",
            qNumber: "[4] (c)",
            text: "Illustrate the ways of accessing packages from another package using a proper Java programming example.",
            tags: ["Packages", "Access Modifiers", "Java OOP Programming"],
            answer: `### Accessing Multi-Package Elements
To use public components from an external package in another package, apply:
1. The explicit \`import\` keyword statement.
2. The fully qualified path identifier.

### Code Demonstration
\`\`\`java
package packA;
public class Printer {
    public void print() { System.out.println("Printing from packA."); }
}
\`\`\`

\`\`\`java
package packB;
import packA.Printer; // Method 1

public class MainApp {
    public static void main(String[] args) {
        // Method 1
        Printer p1 = new Printer();
        p1.print();

        // Method 2 (Fully qualified path naming)
        packA.Printer p2 = new packA.Printer();
        p2.print();
    }
}
\`\`\``
          },
          {
            id: "spring-2023-b-5a",
            qNumber: "[5] (a)",
            text: "What do you mean by Interface in Java? Explain the differences between the abstract class and Interface in Java.",
            tags: ["Interface", "Abstraction", "Abstract Class"],
            answer: `### Interfaces and Core Differences with Abstract Classes
An **Interface** is a completely abstract structural contract. Implementing classes customize its abstract operations.

### Abstract Classes vs. Interfaces Key Metrics

| Metric | Abstract Class | Interface |
| :--- | :--- | :--- |
| **Signature Keyword** | \`abstract class\` | \`interface\` |
| **Inheritance Capacity** | Single class inheritance only | Multiple interface inheritance possible |
| **State Fields** | Holds instance variables of any access scope | Fields are strictly implicitly \`public static final\` |
| **Constructor** | Can declare custom class constructors | Strictly cannot hold constructors |`
          },
          {
            id: "spring-2023-b-5b",
            qNumber: "[5] (b)",
            text: "Multiple Inheritance is not supported through class in Java, but it is possible by an interface, why? Explain with proper example.",
            tags: ["Interface", "Multiple Inheritance", "Abstraction"],
            answer: `### Resolving Multiple Inheritance Conflicts via Interfaces
Since interfaces only hold method names without code details, implementing two interfaces with identical method signatures produces zero ambiguity, as the concrete child class creates its own sole overriding body.

### Full Code Example
\`\`\`java
interface Interface1 { void process(); }
interface Interface2 { void process(); }

class TaskExecutor implements Interface1, Interface2 {
    @Override
    public void process() {
        System.out.println("Processing single unambiguous action inside TaskExecutor.");
    }
}
\`\`\``
          },
          {
            id: "spring-2023-b-5-or-a",
            qNumber: "[5] OR (a)",
            text: "Define Multithreading in Java. Explain the life cycle of a Thread.",
            tags: ["Multithreading", "Thread Lifecycle"],
            answer: `### Multithreading Definition
**Multithreading** is a process that enables multiple lines of execution threads to run concurrently back-and-forth within a single program task to maximize CPU performance.

### The 5 States of the Thread Lifecycle
1. **New (Born)**: Thread instance instantiated via \`new Thread()\` but hasn't had \`start()\` triggered yet.
2. **Runnable (Waiting)**: Registered with JVM thread scheduler via \`start()\`. Waiting for processor time.
3. **Running**: CPU execution slots allocated - executing code statements inside \`run()\`.
4. **Blocked (Waiting / Paused)**: Temporarily halted via \`sleep(ms)\`, \`wait()\`, or I/O resource operations locks.
5. **Terminated (Dead)**: Executions completely processed or halted via uncaught runtime exception error.`
          },
          {
            id: "spring-2023-b-5-or-b",
            qNumber: "[5] OR (b)",
            text: "In how many ways a Thread can be created? Write a Java program to implement multithreading by extending the thread class.",
            tags: ["Multithreading", "Java OOP Programming"],
            answer: `### Methods of Thread Creation
There are two primary ways to create a thread:
1. **Extending the \`java.lang.Thread\` class**
2. **Implementing the \`java.lang.Runnable\` interface**

### Subclass Thread Custom Code
\`\`\`java
class SimpleWorkThread extends Thread {
    private String threadID;
    
    SimpleWorkThread(String id) { this.threadID = id; }

    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println("Thread [" + threadID + "] iteration: " + i);
            try {
                Thread.sleep(150); // Create context switches
            } catch (InterruptedException ex) {
                System.out.println(ex.getMessage());
            }
        }
    }
}

public class MultiThreadDemo {
    public static void main(String[] args) {
        SimpleWorkThread t1 = new SimpleWorkThread("A");
        SimpleWorkThread t2 = new SimpleWorkThread("B");

        t1.start(); // Launch Thread A asynchronously
        t2.start(); // Launch Thread B asynchronously
    }
}
\`\`\``
          }
        ]
      }
    ]
  }
];
