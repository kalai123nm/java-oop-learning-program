# Module 4 Assessment: Polymorphism

**Estimated time:** 20 minutes

## Assessment Purpose

This assessment measures the learner's ability to:

- Explain the purpose of polymorphism.
- Explain method overriding.
- Identify parent references and child objects.
- Explain the role of `@Override`.
- Understand runtime polymorphism.
- Apply polymorphism using parent references and child objects.
- Use polymorphism with multiple related objects.

---

## Learning Outcomes

After completing this assessment, the learner should be able to:

1. Explain what polymorphism means in Java.
2. Explain how method overriding enables runtime polymorphism.
3. Identify the reference type and actual object type.
4. Explain why an overridden method can produce different behavior.
5. Use a parent reference to work with different child objects.
6. Implement a basic polymorphic class hierarchy.

---

# Part A: Multiple-Choice Questions

**6 questions × 1 point = 6 points**

### Question 1

What does polymorphism mean in object-oriented programming?

**A.** One class can only have one object.

**B.** Different related objects can provide different behavior through a common type.

**C.** Every class must have multiple methods.

**D.** A child class cannot inherit from a parent class.

<details>
<summary>Show Answer</summary>

**Answer: B**

Polymorphism allows different related objects to be handled through a common type while providing different behavior.

</details>

---

### Question 2

What is method overriding?

**A.** Creating a new class without inheritance.

**B.** Removing a method from a parent class.

**C.** Providing a child-class implementation of a method defined in the parent class.

**D.** Creating multiple objects from the same class.

<details>
<summary>Show Answer</summary>

**Answer: C**

Method overriding occurs when a child class provides its own implementation of a method defined in its parent class.

</details>

---

### Question 3

Consider:

```java
Animal animal = new Dog();
```
What is the reference type?

**A.** Dog

**B.** Animal

**C.** Object

**D.** None

<details> <summary>Show Answer</summary>

Answer: B

The reference variable animal has the type Animal.

</details>

### Question 4

Consider:
```
Animal animal = new Dog();
animal.makeSound();
```
If Dog overrides makeSound(), which implementation is executed?

**A.** The Animal implementation.

**B.** The Dog implementation.

**C.** Both implementations.

**D.** Neither implementation.

<details> <summary>Show Answer</summary>

Answer: B

The overridden method belonging to the actual Dog object is executed at runtime.

</details>

### Question 5

What is the purpose of @Override?

**A.** It creates an object.

**B.** It prevents inheritance.

**C.** It indicates that a method is intended to override a parent method.

**D.** It makes a method private.

<details> <summary>Show Answer</summary>

Answer: C

@Override tells the compiler that the method is intended to override a method from the parent class and helps detect incorrect overriding.

</details>

### Question 6

Why is polymorphism useful when processing different types of employees?

**A.** It requires separate code for every employee type.

**B.** It allows different employee objects to be handled through a common Employee type.

**C.** It prevents employees from having specialized behavior.

**D.** It removes inheritance from the program.

<details> <summary>Show Answer</summary>

Answer: B

Polymorphism allows different child objects to be handled through a common parent type while preserving their specialized behavior.

</details>

# Part B: Short-Answer Questions

3 questions × 2 points = 6 points

### Question 7

What is polymorphism?

#### Write your answer:

#### Expected evidence:

> The learner should explain that polymorphism allows different related objects to be treated through a common type while providing different behavior.

### Question 8

Explain the difference between the reference type and actual object type in:

`Employee employee = new Developer();`

#### Write your answer:

#### Expected evidence:

The learner should identify:

Reference type: Employee
Actual object type: Developer

The learner should understand that the reference determines what members can be accessed through the variable, while the actual object determines which overridden instance method implementation runs.

### Question 9

Why does polymorphism make code more flexible?

#### Write your answer:

#### Expected evidence:

The learner should explain that code can work with a common parent type instead of being tightly coupled to specific child classes, allowing different implementations to be used through the same structure.

# Part C: Application Task

10 points

### Build a Shape Polymorphism System

Create a Java program that demonstrates polymorphism using different shapes.

### Step 1: Create the Parent Class

Create a class named Shape.

Add a method:
```
void draw() {
    System.out.println("Drawing a shape");
}
```
### Step 2: Create the Circle Class

Create a class named Circle that extends Shape.

Override the draw() method.

It should display:

`Drawing a circle`

Use the @Override annotation.

### Step 3: Create the Rectangle Class

Create another class named Rectangle that extends Shape.

Override the draw() method.

It should display:

`Drawing a rectangle`

Use the @Override annotation.

### Step 4: Create a Parent Reference

Create a Shape reference:

Shape shape;

Assign a Circle object:
```
shape = new Circle();
shape.draw();
```
Then assign a Rectangle object:
```
shape = new Rectangle();
shape.draw();
```
Expected output:
```
Drawing a circle
Drawing a rectangle
Step 5: Use an Array
```
Create an array containing both shape types:
```
Shape[] shapes = {
    new Circle(),
    new Rectangle()
};
```
Use a loop to call draw() for each object.

Expected output:
```  
Drawing a circle
Drawing a rectangle
```
## Application Rubric
| Criteria                                                       | Points |
| -------------------------------------------------------------- | -----: |
| Creates correct `Shape` parent class                           |      2 |
| Creates `Circle` and `Rectangle` child classes                 |      2 |
| Correctly overrides `draw()` with `@Override`                  |      2 |
| Uses a `Shape` reference with child objects                    |      2 |
| Uses polymorphism with an array and produces expected behavior |      2 |
| **Total**                                                      | **10** |

# Part D: Code Analysis

4 points

Consider the following code:
```
class Employee {

    void work() {
        System.out.println("Employee is working");
    }
}

class Developer extends Employee {

    @Override
    void work() {
        System.out.println("Developer is writing code");
    }
}

class Designer extends Employee {

    @Override
    void work() {
        System.out.println("Designer is creating designs");
    }
}
```
Now consider:
```
Employee employee;

employee = new Developer();
employee.work();

employee = new Designer();
employee.work();
```
Answer the following questions.

### Question 10

What is the reference type of employee?

#### Write your answer:

### Question 11

What is the actual object type when this statement executes?

`employee = new Developer();`

#### Write your answer:

### Question 12

What will the first employee.work() call display?

#### Write your answer:

### Question 13

What will the second employee.work() call display?

#### Write your answer:

## Scoring
| Question                                     | Points |
| -------------------------------------------- | -----: |
| Identifies `Employee` as reference type      |      1 |
| Identifies `Developer` as actual object type |      1 |
| Identifies Developer's output                |      1 |
| Identifies Designer's output                 |      1 |
| **Total**                                    |  **4** |

# Part E: Reflection

This section is not scored.

### Question 14

What part of polymorphism was easiest for you to understand?

#### Write your answer:

### Question 15

What part of polymorphism do you still find confusing?

#### Write your answer:

### Question 16

Where could polymorphism be useful in a real-world application?

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

The learner demonstrates a strong understanding of polymorphism and can apply it independently.

### Feedback:

> You demonstrated a strong understanding of polymorphism, method overriding, parent references, and runtime behavior. You can confidently move to the next OOP concept.

### 19–22: Proficient

The learner understands the main concepts but may need minor clarification or additional practice.

### Feedback:

> You understand the main polymorphism concepts and can apply them with minor support. Review the areas where you lost points and practice using parent references with different child objects.

### 14–18: Developing

The learner has a basic understanding but needs additional practice.

### Feedback:

> You have started to understand polymorphism, but some concepts need more practice. Review method overriding, parent references, actual object types, and runtime method selection before progressing.

### 0–13: Needs Support

The learner needs additional instruction and guided practice.

### Feedback:

> Review the polymorphism learning content and activity again. Focus on understanding method overriding, the difference between reference type and actual object type, and how a parent reference can work with different child objects.

## Assessment Review Guide

If the learner makes mistakes, use the following guidance:

| Common Difficulty                    | Recommended Review                                                      |
| ------------------------------------ | ----------------------------------------------------------------------- |
| Does not understand polymorphism     | Review the definition and real-world examples                           |
| Confuses overriding with overloading | Review method overriding and inheritance                                |
| Confuses reference and object type   | Practice examples such as `Animal animal = new Dog()`                   |
| Does not understand runtime behavior | Review dynamic method dispatch                                          |
| Does not understand `@Override`      | Review the purpose of the annotation                                    |
| Struggles with implementation        | Repeat the Employee polymorphism activity                               |
| Cannot use polymorphism with arrays  | Practice processing different child objects through a parent-type array |

## Completion Requirement

A score of 19 out of 26 or higher indicates that the learner has demonstrated sufficient understanding to progress.

If the score is below 19:

1. Review the incorrect questions.
2. Revisit the related learning content.
3. Repeat the relevant activity.
4. Attempt the assessment again.

The goal is not only to achieve a passing score but to demonstrate that the learner can explain and apply polymorphism in Java.
