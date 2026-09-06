# Module 3 Assessment: Inheritance

**Estimated time:** 20 minutes

## Assessment Purpose

This assessment measures the learner's ability to:

- Explain the purpose of inheritance.
- Identify parent and child classes.
- Use the `extends` keyword correctly.
- Identify inherited fields and methods.
- Distinguish between "is-a" and "has-a" relationships.
- Apply inheritance by creating a simple class hierarchy.
- Use inherited and child-specific functionality.

---

## Learning Outcomes

After completing this assessment, the learner should be able to:

1. Explain what inheritance means in Java.
2. Identify the superclass and subclass in an inheritance relationship.
3. Explain the purpose of `extends`.
4. Identify inherited functionality.
5. Explain the difference between "is-a" and "has-a" relationships.
6. Implement a basic parent-child class hierarchy.

---

# Part A: Multiple-Choice Questions

**6 questions × 1 point = 6 points**

### Question 1

What is the main purpose of inheritance?

**A.** To prevent objects from being created

**B.** To reuse and extend functionality between related classes

**C.** To make all fields private

**D.** To replace methods with variables

<details>
<summary>Show Answer</summary>

**Answer: B**

Inheritance allows a child class to reuse accessible functionality from a parent class and add its own specialized functionality.

</details>

---

### Question 2

Which keyword is used to create class inheritance in Java?

**A.** `inherit`

**B.** `implements`

**C.** `extends`

**D.** `superclass`

<details>
<summary>Show Answer</summary>

**Answer: C**

Java uses the `extends` keyword to establish a class inheritance relationship.

</details>

---

### Question 3

Consider the following code:

```java
class Dog extends Animal {

}

```
Which statement is correct?

**A.** Dog is the parent class.

**B.** Animal is the child class.

**C.** Dog is the child class and Animal is the parent class.

**D.** Dog and Animal have no relationship.

<details> <summary>Show Answer</summary>

Answer: C

Dog is the subclass/child class and Animal is the superclass/parent class.

</details>

### Question 4

Consider:
```
class Vehicle {

    void start() {
        System.out.println("Vehicle started");
    }
}

class Car extends Vehicle {

}
```
What can a Car object do?

**A.** It cannot use start().

**B.** It can use the accessible start() method inherited from Vehicle.

**C.** It must create another Vehicle object first.

**D.** It automatically removes start().

<details> <summary>Show Answer</summary>

Answer: B

A Car object can use the inherited start() method because Car extends Vehicle.

</details>

### Question 5

Which relationship is generally appropriate for inheritance?

**A.** Car has an Engine.

**B.** Student has a Course.

**C.** Dog is an Animal.

**D.** Library has Books.

<details> <summary>Show Answer</summary>

Answer: C

Inheritance generally represents an "is-a" relationship. A Dog is an Animal.

</details>

### Question 6

Which statement about a child class is correct?

**A.** A child class can only use functionality from its parent.

**B.** A child class cannot have its own methods.

**C.** A child class can reuse inherited functionality and add specialized functionality.

**D.** A child class must duplicate every field from its parent.

<details> <summary>Show Answer</summary>

Answer: C

A child class can reuse accessible functionality from its parent and define additional fields and methods.

</details>

# Part B: Short-Answer Questions

3 questions × 2 points = 6 points

### Question 7

What is inheritance in Java?

#### Write your answer:

#### Expected evidence:

The learner should explain that inheritance allows a child/subclass to acquire accessible functionality from a parent/superclass and extend it with additional functionality.

### Question 8

Explain the difference between an "is-a" relationship and a "has-a" relationship.

Give one example of each.

#### Write your answer:

#### Expected evidence:

The learner should explain:

"Is-a" represents an inheritance relationship.
"Has-a" represents ownership/composition between objects.

#### Example:

Student is a Person.
Car has an Engine.

### Question 9

Why can inheritance help reduce code duplication?

#### Write your answer:

#### Expected evidence:

The learner should explain that common fields and methods can be placed in a parent class and reused by multiple child classes instead of being repeated.

# Part C: Application Task

10 points

Build an Employee Hierarchy

Create a Java program that represents employees using inheritance.

#### Step 1: Create the Parent Class

Create a class named Employee.

It should contain:

name
salary

Add a method:

`displayEmployee()`

The method should display the employee's name and salary.

#### Step 2: Create the Child Class

Create a class named Developer that extends Employee.

Add:

programmingLanguage

Create a method:

`displayDeveloperInfo()`

The method should display the programming language.

#### Step 3: Create an Object

Create a Developer object with:

Name: Arun
Salary: 60000
Programming Language: Java

#### Step 4: Use Inherited Functionality

Use the Developer object to call:

`displayEmployee();`

and:

`displayDeveloperInfo();`

Expected output should be similar to:

Name: Arun
Salary: 60000.0
Programming Language: Java

## Application Rubric

| Criteria                                      | Points |
| --------------------------------------------- | -----: |
| Creates correct `Employee` parent class       |      2 |
| Adds required parent fields                   |      2 |
| Creates `Developer extends Employee`          |      2 |
| Adds child-specific field and method          |      2 |
| Creates and uses a Developer object correctly |      1 |
| Program executes and produces expected output |      1 |
| **Total**                                     | **10** |

# Part D: Code Analysis

4 points

Consider the following code:
```
class Animal {

    String name;

    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}
class Dog extends Animal {

    void bark() {
        System.out.println("Dog barks");
    }
}
```
Answer the following questions.

### Question 10

Which class is the parent class?

#### Write your answer:

### Question 11

Which class is the child class?

#### Write your answer:

### Question 12

Name one member that Dog can use from Animal.

#### Write your answer:

### Question 13

Name the method that is specific to Dog.

#### Write your answer:

| Question                                   | Points |
| ------------------------------------------ | -----: |
| Identifies `Animal` as parent              |      1 |
| Identifies `Dog` as child                  |      1 |
| Identifies inherited member correctly      |      1 |
| Identifies child-specific method correctly |      1 |
| **Total**                                  |  **4** |

# Part E: Reflection

This section is not scored.

### Question 14

What part of inheritance was easiest for you to understand?

#### Write your answer:

### Question 15

What part of inheritance do you still find confusing?

#### Write your answer:

### Question 16

How could inheritance help when building a larger Java application?

#### Write your answer:

## Scoring Summary
| Section                  |     Points |
| ------------------------ | ---------: |
| Part A: Multiple Choice  |          6 |
| Part B: Short Answer     |          6 |
| Part C: Application Task |         10 |
| Part D: Code Analysis    |          4 |
| Part E: Reflection       | Not scored |
| **Total**                |     **26** |

## Performance Levels
### 23–26: Strong Understanding

The learner demonstrates a strong understanding of inheritance and can apply it independently.

#### Feedback:

> You demonstrated a strong understanding of inheritance, class relationships, and the use of extends. You can confidently move to the next OOP concept.

### 19–22: Proficient

The learner understands the main concepts but may need minor clarification or practice.

#### Feedback:

> You understand the main inheritance concepts and can apply them with minor support. Review the areas where you lost points and practice creating another parent-child class hierarchy.

### 14–18: Developing

The learner has a basic understanding but needs additional practice.

#### Feedback:

> You have started to understand inheritance, but some concepts need more practice. Review parent and child classes, the extends keyword, and "is-a" relationships before progressing.

### 0–13: Needs Support

The learner needs additional instruction and guided practice.

#### Feedback:

> Review the inheritance learning content and activity again. Focus on understanding parent and child classes, inherited functionality, and how extends creates an inheritance relationship.

## Assessment Review Guide

If the learner makes mistakes, use the following guidance:

| Common Difficulty                       | Recommended Review                                    |
| --------------------------------------- | ----------------------------------------------------- |
| Does not understand inheritance         | Review the definition and purpose of inheritance      |
| Confuses parent and child classes       | Review the `extends` relationship                     |
| Does not recognize inherited methods    | Practice calling parent methods through child objects |
| Confuses "is-a" and "has-a"             | Review inheritance vs. object relationships           |
| Duplicates parent fields in child class | Review code reuse and specialization                  |
| Struggles with implementation           | Repeat the Vehicle hierarchy activity                 |

## Completion Requirement

A score of 19 out of 26 or higher indicates that the learner has demonstrated sufficient understanding to progress.

If the score is below 19:

1. Review the incorrect questions.
2. Revisit the related learning content.
3. Repeat the relevant activity.
4. Attempt the assessment again.

The goal is not only to achieve a passing score but to demonstrate that the learner can explain and apply inheritance in Java.
