# Module 1: Classes and Objects

**Estimated time:** 35 minutes

## Learning Objective

By the end of this module, learners will be able to:

> Identify and distinguish classes and objects and create basic Java classes and objects.

---

## 1. Why Do We Need Classes and Objects?

Imagine building a program for a college.

The program needs to store information about many students:

- Name
- Age
- Roll number
- Course

One approach would be to create separate variables for every student:

```java
String student1Name = "Arun";
int student1Age = 20;

String student2Name = "Priya";
int student2Age = 21;
```
This approach quickly becomes difficult to manage as the number of students grows.

Instead, we can create a reusable structure that groups related data and behavior together.

This is where **classes and objects** become useful.

---

## 2. What Is a Class?

A **class** is a blueprint or template that defines the data and behavior that objects created from it can have.

For example, a `Student` class can define information such as:

- Name
- Age
- Course

It can also define behaviors such as:

- Displaying student information
- Updating student information

A class describes what an object should contain and what it should be able to do. It is not itself a specific student.

Example:

```java
class Student {
    String name;
    int age;

    void displayInfo() {
        System.out.println(name + " - " + age);
    }
}
```
In this example:

- `Student` is the class.
- `name` and `age` are fields.
- `displayInfo()` is a method.

---

## 3. What Is an Object?

An **object** is an instance of a class.

If a class is a blueprint or template, an object is a specific instance created from that blueprint.

For example:

```java
Student student1 = new Student();
Student student2 = new Student();
```
Now:

student1 represents one Student object.
student2 represents another Student object.
Both objects were created from the same Student class.
Each object has its own values for name and age.
4. Class vs. Object

Understanding the difference between a class and an object is one of the most important foundations of object-oriented programming.

Class	Object
A blueprint or template	An instance created from a class
Defines structure and behavior	Contains actual values and uses the defined behavior
Describes what an object can contain or do	Represents a specific entity
Example: Student	Example: student1
Simple Analogy

Think about a house blueprint.

The blueprint describes:

Number of rooms
Doors
Windows
Overall structure

The blueprint is similar to a class.

A house built using that blueprint is similar to an object.

Multiple houses can be built using the same blueprint.

Similarly, multiple objects can be created from the same class.

5. Fields and Methods

A class can contain both data and behavior.

Fields

Fields store information about an object.

class Student {
    String name;
    int age;
}

Here:

name is a field.
age is a field.

Fields represent the state or data associated with an object.

Methods

Methods define behavior that an object can perform.

class Student {

    String name;
    int age;

    void displayInfo() {
        System.out.println(name + " - " + age);
    }
}

Here, displayInfo() is a method.

It defines an action that a Student object can perform.

A useful way to think about a class is:

Class
├── Fields  → Data / State
└── Methods → Behavior
6. Creating an Object

To create an object, we commonly use the new keyword.

Student student1 = new Student();

There are three important parts to understand:

Student student1 = new Student();
   │       │            │
   │       │            └── Creates a new Student object
   │       │
   │       └── Reference variable
   │
   └── Type of the variable

The new Student() expression creates a new object using the Student class.

The variable student1 stores a reference to that object.

We can then assign values to the object's fields:

student1.name = "Arun";
student1.age = 20;

And call its method:

student1.displayInfo();
Complete Example
class Student {

    String name;
    int age;

    void displayInfo() {
        System.out.println(name + " - " + age);
    }
}

public class Main {

    public static void main(String[] args) {

        Student student1 = new Student();

        student1.name = "Arun";
        student1.age = 20;

        student1.displayInfo();
    }
}
Output
Arun - 20
7. Creating Multiple Objects

One of the advantages of classes is that we can create multiple objects from the same class.

Student student1 = new Student();
Student student2 = new Student();
Student student3 = new Student();

Each object can contain different values:

student1.name = "Arun";
student1.age = 20;

student2.name = "Priya";
student2.age = 21;

student3.name = "Kumar";
student3.age = 19;

The class defines the common structure, while each object maintains its own state.

Conceptually:

                 Student Class
                /      |      \
               /       |       \
              ↓        ↓        ↓
         student1  student2  student3
           Arun      Priya      Kumar
             20        21         19
8. Guided Practice

Let's build a simple Book class.

Step 1: Identify the Data

A book can have:

Title
Author
Price

These will become fields.

Step 2: Identify the Behavior

The book should be able to:

Display its information

This will become a method.

Step 3: Create the Class
class Book {

    String title;
    String author;
    double price;

    void displayInfo() {
        System.out.println(title);
        System.out.println(author);
        System.out.println(price);
    }
}
Step 4: Create an Object
Book book1 = new Book();
Step 5: Assign Values
book1.title = "The Alchemist";
book1.author = "Paulo Coelho";
book1.price = 399.0;
Step 6: Use the Object's Behavior
book1.displayInfo();

At this point, you have:

Defined a class.
Added fields to the class.
Added a method to the class.
Created an object.
Assigned values to the object's fields.
Called a method using the object.
9. Knowledge Check

Use the questions below to check your understanding before moving to the activity.

Question 1

Which statement best describes a class?

A. A specific instance of an object

B. A blueprint that defines the structure and behavior of objects

C. A variable used to store a value

D. A method that creates an object

<details> <summary>Show Answer</summary>

Answer: B

A class defines the structure and behavior that objects created from it can have.

</details>
Question 2

Given:

Student student1 = new Student();

What does new Student() do?

A. Creates a new class

B. Creates a new Student object

C. Deletes the Student class

D. Calls a method named Student

<details> <summary>Show Answer</summary>

Answer: B

new Student() creates a new object using the Student class.

</details>
Question 3

Consider:

Student student1 = new Student();
Student student2 = new Student();

Which statement is correct?

A. student1 and student2 must contain the same values

B. Only one object exists

C. Two separate Student objects have been created

D. Two Student classes have been created

<details> <summary>Show Answer</summary>

Answer: C

Each new Student() expression creates a separate object.

</details>
Question 4

In the following class:

class Student {

    String name;
    int age;

    void displayInfo() {
        System.out.println(name);
    }
}

Which are fields?

A. Student and displayInfo

B. name and age

C. void and displayInfo

D. class and Student

<details> <summary>Show Answer</summary>

Answer: B

name and age are fields because they store data associated with a Student object.

</details>
10. Key Takeaways

After completing this module, remember:

A class is a blueprint that defines the structure and behavior of objects.
An object is an instance of a class.
Fields represent data or state.
Methods represent behavior.
Multiple objects can be created from the same class.
Different objects can contain different values.
The new keyword is commonly used to create objects.
Each object maintains its own state.
Mental Model
Class
  ↓
Blueprint / Template
  ↓
Creates objects
  ↓
┌───────────┬───────────┬───────────┐
│ Object 1  │ Object 2  │ Object 3  │
│           │           │           │
│ Arun      │ Priya     │ Kumar     │
│ 20        │ 21        │ 19        │
└───────────┴───────────┴───────────┘
11. Completion Check

Before moving to the activity, the learner should be able to:

 Explain the difference between a class and an object.
 Identify fields and methods in a Java class.
 Create an object from a class.
 Explain the purpose of the new keyword.
 Assign values to an object's fields.
 Call a method using an object.
 Create multiple objects from the same class.
 Explain why different objects can have different values.

If you can confidently complete all of the above, continue to the Module 1 Activity: Build a Student Class.
