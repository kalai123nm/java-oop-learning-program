# Module 1 Assessment: Classes and Objects

**Estimated time:** 15 minutes

## Assessment Purpose

This assessment evaluates whether learners can demonstrate their understanding of:

- Classes
- Objects
- Fields
- Methods
- Object creation
- Object state
- Basic Java class implementation

---

## Learning Outcomes Assessed

By completing this assessment, learners should be able to:

1. Explain the difference between a class and an object.
2. Identify fields and methods in a Java class.
3. Explain how objects are created using the `new` keyword.
4. Create and use multiple objects from the same class.
5. Apply the concepts of classes and objects in a basic Java program.

---

# Part A: Knowledge Check

**Instructions:** Select the best answer for each question.

---

## Question 1

Which statement best describes a class?

**A.** A specific instance created from a class

**B.** A blueprint that defines the structure and behavior of objects

**C.** A variable that stores an object's value

**D.** A method used to display an object

<details>
<summary>Show Answer</summary>

**Correct Answer: B**

A class acts as a blueprint that defines the structure and behavior that objects created from it can have.

</details>

---

## Question 2

Consider the following code:

```java
Student student1 = new Student();
```
What does new Student() do?

**A.** Creates a new Student class

**B.** Creates a new Student object

**C.** Creates a new method

**D.** Creates a new variable type

<details> <summary>Show Answer</summary>

**Correct Answer: B**

The new keyword creates a new object using the Student class.

</details>

## Question 3

Consider the following class:

class Student {

    String name;
    int age;

    void displayInfo() {
        System.out.println(name);
    }
}

Which of the following are fields?

**A.** Student and displayInfo

**B.** name and age

**C.** void and displayInfo

**D.** class and Student

<details> <summary>Show Answer</summary>

**Correct Answer: B**

name and age are fields because they store data associated with a Student object.

</details>

## Question 4

Consider:

Student student1 = new Student();
Student student2 = new Student();

Which statement is correct?

**A.** Only one Student object exists.

**B.** Two Student classes have been created.

**C.** Two separate Student objects have been created.

**D.** student1 and student2 must contain the same values.

<details> <summary>Show Answer</summary>

**Correct Answer: C**

Each new Student() expression creates a separate object.

</details>

## Question 5

Which statement best describes a method?

**A.** A method stores data about an object.

**B.** A method defines behavior or an action that an object can perform.

**C.** A method creates a class.

**D.** A method is another name for an object.

<details> <summary>Show Answer</summary>

**Correct Answer: B**

Methods define behavior or actions that an object can perform.

</details>

# Part B: Short Answer

## Question 6

In your own words, explain the difference between a class and an object.

### Learner Response

### Expected Understanding

<details> <summary>Show Answer</summary>
A class is a blueprint or template that defines the structure and behavior of objects.

An object is a specific instance created from that class.
</details>

## Question 7

Why can two objects created from the same class contain different values?

### Learner Response

### Expected Understanding
<details> <summary>Show Answer</summary>
Each object has its own state. Although the objects share the same structure and behavior defined by the class, their fields can contain different values.

# Part C: Application Task

</details>

## Question 8: Build a Product Class

Create a Java class named Product.

The class should contain:

name — the product name
price — the product price
quantity — the available quantity

Add a method named displayInfo() that displays all three values.

### Then:

Create two Product objects.
Assign different values to each object.
Call displayInfo() for both objects.
Requirements

### Your solution should:

 Define a Product class.
 Include name, price, and quantity fields.
 Include a displayInfo() method.
 Create two Product objects.
 Assign different values to the two objects.
 Call displayInfo() for both objects.
 Compile and run without errors.

### Learner Solution
// Write your solution here

# Part D: Reflection

## Question 9

What part of this module did you find easiest to understand?

### Learner Response
## Question 10

What part of classes and objects would you like to practice further?

### Learner Response
## Scoring Guide

The assessment contains 10 questions/tasks.

Section	Maximum Score
| Section                  | Maximum Score |
| ------------------------ | ------------: |
| Part A: Knowledge Check  |             5 |
| Part B: Short Answer     |             4 |
| Part C: Application Task |            10 |
| Part D: Reflection       |    Not scored |
| **Total Scored Points**  |        **19** |

# Application Task Rubric

The Product class task is evaluated using the following rubric.

| Criterion         | Excellent                                     | Developing                         | Needs Improvement                           | Points |
| ----------------- | --------------------------------------------- | ---------------------------------- | ------------------------------------------- | -----: |
| Class definition  | Correctly defines the `Product` class         | Minor structural issue             | Class is missing or incorrect               |      2 |
| Fields            | All three fields use appropriate data types   | One field has an issue             | Multiple fields are missing/incorrect       |      2 |
| Method            | `displayInfo()` correctly displays all values | Method exists but has minor issues | Method is missing or incorrect              |      2 |
| Objects           | Creates two separate Product objects          | Creates objects with minor issues  | Objects are missing or incorrect            |      2 |
| Object state      | Objects contain different values              | Values are partially different     | Objects contain incorrect or missing values |      1 |
| Program execution | Program compiles and runs correctly           | Minor errors requiring correction  | Program does not run                        |      1 |
| **Total**         |                                               |                                    |                                             | **10** |

# Performance Levels
| Score | Performance Level | Interpretation                                                                        |
| ----- | ----------------- | ------------------------------------------------------------------------------------- |
| 17–19 | Strong            | Learner demonstrates a strong understanding and can independently apply the concepts. |
| 14–16 | Proficient        | Learner understands the concepts and can apply them with minor gaps.                  |
| 10–13 | Developing        | Learner understands some concepts but needs additional practice.                      |
| 0–9   | Needs Support     | Learner should review the module and repeat the activity before progressing.          |

## Feedback Guidance
### For Strong Performance

You demonstrated a strong understanding of classes, objects, fields, and methods. You were also able to apply these concepts independently when creating multiple objects.

### For Proficient Performance

You understand the core concepts of classes and objects. Review any areas where you made mistakes and practice creating multiple objects with different states.

### For Developing Performance

You understand some of the basic concepts, but additional practice is recommended. Review the difference between a class and an object and practice creating objects from a class.

### For Needs Support

Review Module 1, especially the sections on classes, objects, fields, methods, and object creation. Reattempt the activity before taking the assessment again.

## Assessment Completion Criteria

The learner is ready to move to the next module when they:

Understand the difference between classes and objects.
Can identify fields and methods.
Understand how the new keyword creates objects.
Can create multiple objects from the same class.
Can explain why different objects can have different states.
Can independently create a basic Java class and objects.
Achieve at least 14/19 on the scored assessment.

If the learner scores below 14/19, they should review the relevant sections and repeat the activity before progressing.
