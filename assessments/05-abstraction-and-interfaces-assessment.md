# Module 5 Assessment: Abstraction & Interfaces

**Estimated time:** 20 minutes

## Assessment Purpose

This assessment measures the learner's ability to:

- Explain the purpose of abstraction.
- Identify abstract classes and abstract methods.
- Explain why abstract classes cannot be instantiated directly.
- Create and extend an abstract class.
- Explain the purpose of interfaces.
- Implement an interface using `implements`.
- Distinguish between abstract classes and interfaces.
- Apply abstraction using abstract classes and interfaces.
- Use abstraction together with polymorphism.

---

## Learning Outcomes

After completing this assessment, the learner should be able to:

1. Explain what abstraction means in Java.
2. Explain the purpose of abstract classes and abstract methods.
3. Implement an abstract class using inheritance.
4. Explain the purpose of interfaces.
5. Implement an interface correctly.
6. Explain the difference between `extends` and `implements`.
7. Choose an appropriate abstraction approach for a simple problem.
8. Use abstract and interface references with concrete objects.

---

# Part A: Multiple-Choice Questions

**6 questions × 1 point = 6 points**

### Question 1

What is the main purpose of abstraction?

**A.** To expose all implementation details.

**B.** To hide unnecessary implementation details and expose essential functionality.

**C.** To prevent classes from having methods.

**D.** To eliminate objects.

<details>
<summary>Show Answer</summary>

**Answer: B**

Abstraction hides unnecessary implementation details while exposing the essential functionality needed by the user or other parts of the program.

</details>

---

### Question 2

Which keyword is used to declare an abstract class?

**A.** `interface`

**B.** `implements`

**C.** `abstract`

**D.** `extends`

<details>
<summary>Show Answer</summary>

**Answer: C**

The `abstract` keyword is used to declare an abstract class.

</details>

---

### Question 3

Which statement about an abstract class is correct?

**A.** It can always be instantiated directly.

**B.** It cannot be instantiated directly.

**C.** It cannot contain concrete methods.

**D.** It cannot have child classes.

<details>
<summary>Show Answer</summary>

**Answer: B**

An abstract class cannot be instantiated directly. A concrete child class can extend it and provide implementations for its abstract methods.

</details>

---

### Question 4

Which keyword is used when a class implements an interface?

**A.** `extends`

**B.** `implements`

**C.** `interface`

**D.** `abstract`

<details>
<summary>Show Answer</summary>

**Answer: B**

A class uses `implements` to implement an interface.

</details>

---

### Question 5

Consider:

```java
interface Printable {

    void print();
}

class Report implements Printable {

    @Override
    public void print() {
        System.out.println("Printing report");
    }
}
```
What does Printable represent?

**A.** A concrete object.

**B.** An interface defining a contract.

**C.** A parent object.

**D.** A constructor.

<details> <summary>Show Answer</summary>

Answer: B

The Printable interface defines a contract that implementing classes must fulfill.

</details>

### Question 6

Which statement is correct?

**A.** A class can extend multiple classes.

**B.** A class can implement multiple interfaces.

**C.** An interface must always be instantiated directly.

**D.** An abstract class cannot contain concrete methods.

<details> <summary>Show Answer</summary>

Answer: B

Java does not allow a class to extend multiple classes, but a class can implement multiple interfaces.

</details>

# Part B: Short-Answer Questions

3 questions × 2 points = 6 points

### Question 7

What is abstraction in Java?

#### Write your answer:

#### Expected evidence:

> The learner should explain that abstraction hides unnecessary implementation details and exposes essential functionality.

### Question 8

What is the difference between an abstract class and an interface?

#### Write your answer:

#### Expected evidence:

The learner should identify that:
```
An abstract class can provide shared state and concrete behavior in addition to abstract methods.
An interface primarily defines a contract or capability.
A class extends an abstract class using extends.
A class implements an interface using implements.
A class can implement multiple interfaces but can extend only one class.
```
### Question 9

Why can't an abstract class be instantiated directly?

#### Write your answer:

#### Expected evidence:

> The learner should explain that an abstract class may contain incomplete/abstract behavior and is intended to serve as a common foundation for concrete subclasses rather than as a directly instantiated type.

# Part C: Application Task

10 points

Build an Abstract Shape System

Create a Java program that uses an abstract class to represent different shapes.

### Step 1: Create the Abstract Class

Create an abstract class named Shape.

Add an abstract method:

`abstract void calculateArea();`

Also add a concrete method:
```
void displayMessage() {
    System.out.println("Calculating shape area");
}
```
### Step 2: Create the Circle Class

Create a class named Circle that extends Shape.

Add:

radius

Use double as the data type.

Implement `calculateArea()` using:

`area = Math.PI * radius * radius`

Use the @Override annotation.

### Step 3: Create the Rectangle Class

Create a class named Rectangle that extends Shape.

Add:
```
length
width
```
Use double as the data type.

Implement `calculateArea()` using:

`area = length * width`

Use the @Override annotation.

### Step 4: Use an Abstract Reference

Create:

`Shape shape = new Circle();`

Set the radius and call:
```
shape.displayMessage();
shape.calculateArea();
```
Then create a Rectangle through the same reference:

`shape = new Rectangle();`

Set the length and width and call:
```
shape.displayMessage();
shape.calculateArea();
```
## Application Rubric
| Criteria                                                 | Points |
| -------------------------------------------------------- | -----: |
| Creates correct abstract `Shape` class                   |      2 |
| Adds abstract and concrete methods correctly             |      2 |
| Creates `Circle` and `Rectangle` subclasses              |      2 |
| Correctly implements area calculations                   |      2 |
| Uses a `Shape` reference with different concrete objects |      2 |
| **Total**                                                | **10** |

# Part D: Interface Implementation

4 points

Create an interface named Printable:
```
interface Printable {

    void print();
}
```
Create a class named Report that implements Printable.

Implement `print()` so that it displays:

Printing report

Then create:

`Printable printable = new Report();`

Call:

`printable.print();`
## Scoring
| Criteria                                           | Points |
| -------------------------------------------------- | -----: |
| Creates the `Printable` interface correctly        |      1 |
| Implements the interface using `implements`        |      1 |
| Correctly implements `print()`                     |      1 |
| Uses an interface reference with a `Report` object |      1 |
| **Total**                                          |  **4** |

# Part E: Code Analysis

4 points

Consider:
```
abstract class Vehicle {

    abstract void start();

    void stop() {
        System.out.println("Vehicle stopped");
    }
}

class Car extends Vehicle {

    @Override
    void start() {
        System.out.println("Car started");
    }
}
```
Answer the following questions.

### Question 10

Which class is abstract?

#### Write your answer:

### Question 11

Which method must Car implement?

#### Write your answer:

### Question 12

Which method has a concrete implementation in Vehicle?

#### Write your answer:

### Question 13

Why can this statement work?

`Vehicle vehicle = new Car();`

#### Write your answer:

## Scoring
| Question                                                                | Points |
| ----------------------------------------------------------------------- | -----: |
| Identifies `Vehicle` as abstract                                        |      1 |
| Identifies `start()` correctly                                          |      1 |
| Identifies `stop()` correctly                                           |      1 |
| Explains abstract parent reference referring to a concrete child object |      1 |
| **Total**                                                               |  **4** |

# Part F: Reflection

This section is not scored.

### Question 14

What part of abstraction was easiest for you to understand?

#### Write your answer:

### Question 15

What part of abstraction or interfaces do you still find confusing?

#### Write your answer:

### Question 16

When would you choose an interface instead of an abstract class?

#### Write your answer:

## Scoring Summary
| Section                            |     Points |
| ---------------------------------- | ---------: |
| Part A: Multiple Choice            |          6 |
| Part B: Short Answer               |          6 |
| Part C: Abstract Class Application |         10 |
| Part D: Interface Implementation   |          4 |
| Part E: Code Analysis              |          4 |
| Part F: Reflection                 | Not scored |
| **Total**                          |     **30** |

## Performance Levels
### 27–30: Strong Understanding

The learner demonstrates a strong understanding of abstraction, abstract classes, and interfaces and can apply them independently.

### Feedback:

> You demonstrated a strong understanding of abstraction, abstract classes, interfaces, and their relationship with polymorphism. You can confidently move to the next OOP concept.

### 23–26: Proficient

The learner understands the main concepts but may need minor clarification or additional practice.

### Feedback:

> You understand the main abstraction concepts and can apply them with minor support. Review the areas where you lost points and practice choosing between abstract classes and interfaces.

### 16–22: Developing

The learner has a basic understanding but needs additional practice.

### Feedback:

> You have started to understand abstraction, but some concepts need more practice. Review abstract classes, abstract methods, interfaces, and the difference between extends and implements.

### 0–15: Needs Support

The learner needs additional instruction and guided practice.

### Feedback:

> Review the abstraction and interfaces learning content and activity again. Focus on understanding why abstract classes cannot be instantiated, how interfaces define contracts, and how concrete classes provide implementations.

## Assessment Review Guide

If the learner makes mistakes, use the following guidance:

| Common Difficulty                        | Recommended Review                                      |
| ---------------------------------------- | ------------------------------------------------------- |
| Does not understand abstraction          | Review the ATM and real-world abstraction examples      |
| Confuses abstract classes and interfaces | Review the comparison section                           |
| Tries to instantiate an abstract class   | Review abstract class instantiation                     |
| Confuses `extends` and `implements`      | Practice identifying class and interface relationships  |
| Struggles with abstract methods          | Practice implementing abstract methods in child classes |
| Struggles with interface implementation  | Repeat the Notification interface activity              |
| Does not understand interface references | Practice examples such as `Printable p = new Report()`  |
| Struggles with application task          | Repeat the Abstract Payment System activity             |

## Completion Requirement

A score of 23 out of 30 or higher indicates that the learner has demonstrated sufficient understanding to progress.

If the score is below 23:

- Review the incorrect questions.
- Revisit the related learning content.
- Repeat the relevant activity.
- Attempt the assessment again.

The goal is not only to achieve a passing score but to demonstrate that the learner can explain and apply abstraction and interfaces in Java.
