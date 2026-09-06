# Module 6 Assessment: Composition & Object Relationships

**Estimated time:** 20 minutes

## Assessment Purpose

This assessment measures the learner's ability to:

- Explain composition and object relationships.
- Identify "has-a" relationships.
- Distinguish composition from inheritance.
- Create a class containing another object.
- Establish object relationships through constructors.
- Use `this` correctly when assigning related objects.
- Explain basic aggregation and composition.
- Apply composition in a practical Java program.

---

## Learning Outcomes

After completing this assessment, the learner should be able to:

1. Explain what composition means in Java.
2. Identify "has-a" relationships.
3. Distinguish "is-a" and "has-a" relationships.
4. Create a class that contains an object of another class.
5. Establish relationships through constructors.
6. Explain the purpose of `this` in a constructor.
7. Explain the basic difference between aggregation and composition.
8. Implement a simple composition-based design.

---

# Part A: Multiple-Choice Questions

**6 questions × 1 point = 6 points**

### Question 1

What type of relationship does composition generally represent?

**A.** is-a

**B.** has-a

**C.** extends-a

**D.** overrides-a

<details>
<summary>Show Answer</summary>

**Answer: B**

Composition generally represents a "has-a" relationship between objects.

</details>

---

### Question 2

Consider:

```java
class Car {

    Engine engine;
}
```
What does this relationship represent?

**A.** Car is an Engine.

**B.** Engine is a Car.

**C.** Car has an Engine.

**D.** Car extends Engine.

<details> <summary>Show Answer</summary>

Answer: C

The Car class contains a reference to an Engine object, representing a "has-a" relationship.

</details>

### Question 3

Which relationship is most appropriate for inheritance?

**A.** Car has an Engine.

**B.** Student has an Address.

**C.** Dog is an Animal.

**D.** Order has Products.

<details> <summary>Show Answer</summary>

Answer: C

Inheritance generally represents an "is-a" relationship. A Dog is an Animal.

</details>

### Question 4

What does the following constructor do?
```
class Car {

    Engine engine;

    Car(Engine engine) {
        this.engine = engine;
    }
}
```
**A.** Creates an inheritance relationship.

**B.** Stores the provided Engine object inside the Car object.

**C.** Deletes the Engine object.

**D.** Creates a new class.

<details> <summary>Show Answer</summary>

Answer: B

The constructor stores the provided Engine reference in the current Car object's engine field.

</details>

### Question 5

What does this.engine refer to?

**A.** The constructor parameter only.

**B.** The current object's engine field.

**C.** A new Engine object.

**D.** The parent class.

<details> <summary>Show Answer</summary>

Answer: B

this.engine refers to the engine field belonging to the current object.

</details>

### Question 6

Which statement is generally correct about composition?

**A.** Composition requires the extends keyword.

**B.** Composition allows one object to contain or use another object.

**C.** Composition means one class must inherit from another.

**D.** Java provides a composition keyword.

<details> <summary>Show Answer</summary>

Answer: B

Composition is commonly implemented by having one class contain a reference to another object.

</details>

# Part B: Short-Answer Questions

3 questions × 2 points = 6 points

### Question 7

What is composition?

#### Write your answer:

#### Expected evidence:

The learner should explain that composition is a design approach where one class contains or uses an object of another class, usually representing a "has-a" relationship.

### Question 8

Explain the difference between an "is-a" relationship and a "has-a" relationship.

Give one example of each.

#### Write your answer:

#### Expected evidence:

The learner should explain:
```
"Is-a" generally represents inheritance.
"Has-a" generally represents composition.
```
Examples:
```
Dog is an Animal.
Car has an Engine.
```
### Question 9

Why can composition be useful when designing a larger application?

#### Write your answer:

#### Expected evidence:

The learner should explain that composition allows responsibilities to be separated into focused classes and allows objects to work together without requiring unnecessary inheritance relationships.

# Part C: Application Task

10 points

Build a Car and Engine System

Create a Java program that demonstrates composition.

### Step 1: Create the Engine Class

Create a class named Engine.

Add a method:
```
void start() {
    System.out.println("Engine started");
}
```
### Step 2: Create the Car Class

Create a class named Car.

Add a field:

`engine`

The field should refer to an Engine object.

### Step 3: Create a Constructor

Create a Car constructor that accepts an Engine object.

Store it using:

`this.engine = engine;`
### Step 4: Add a Method

Create:

`startCar()`

Inside the method:

Call the Engine's `start()` method.
Display:
`Car started`
### Step 5: Create the Objects

Inside main():

`Engine engine = new Engine();`

`Car car = new Car(engine);`

Then call:

`car.startCar();`

Expected output:
```
Engine started
Car started
```
## Application Rubric
| Criteria                                     | Points |
| -------------------------------------------- | -----: |
| Creates correct `Engine` class               |      2 |
| Creates `Car` with an `Engine` reference     |      2 |
| Establishes relationship through constructor |      2 |
| Correctly uses `this.engine = engine`        |      1 |
| Correctly implements `startCar()`            |      2 |
| Creates and uses objects successfully        |      1 |
| **Total**                                    | **10** |

# Part D: Code Analysis

4 points

Consider:
```
class Address {

    String city;
}

class Student {

    String name;
    Address address;

    Student(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("City: " + address.city);
    }
}
```
And:
```
Address address = new Address();
address.city = "Chennai";

Student student = new Student("Arun", address);

student.displayInfo();
```
Answer the following questions.

### Question 10

What type of relationship exists between Student and Address?

#### Write your answer:

### Question 11

What does the address field inside Student store?

#### Write your answer:

### Question 12

What does this statement do?

`this.address = address;`

#### Write your answer:

### Question 13

What will the program display?

#### Write your answer:

## Scoring
| Question                                      | Points |
| --------------------------------------------- | -----: |
| Identifies the has-a/composition relationship |      1 |
| Identifies the `Address` object reference     |      1 |
| Explains the constructor assignment correctly |      1 |
| Identifies the correct output                 |      1 |
| **Total**                                     |  **4** |

# Part E: Design Decision

4 points

For each scenario, decide whether inheritance or composition is more appropriate.

### Question 14
Dog ______ Animal

Choose:

- Inheritance
- Composition

Explain why.

#### Write your answer:

### Question 15
Car ______ Engine

Choose:

- Inheritance
- Composition

Explain why.

#### Write your answer:

### Question 16
Employee ______ Address

Choose:

- Inheritance
- Composition

Explain why.

#### Write your answer:

### Question 17
Developer ______ Employee

Choose:

- Inheritance
- Composition

Explain why.

#### Write your answer:

## Scoring
| Question                                    | Points |
| ------------------------------------------- | -----: |
| Correct relationship for Dog/Animal         |      1 |
| Correct relationship for Car/Engine         |      1 |
| Correct relationship for Employee/Address   |      1 |
| Correct relationship for Developer/Employee |      1 |
| **Total**                                   |  **4** |

## Expected answers:
```
Dog is an Animal       → Inheritance
Car has an Engine      → Composition
Employee has an Address → Composition
Developer is an Employee → Inheritance
```
# Part F: Reflection

This section is not scored.

### Question 18

What part of composition was easiest for you to understand?

#### Write your answer:

### Question 19

What part of object relationships do you still find confusing?

#### Write your answer:

### Question 20

Why might composition be preferred over inheritance when there is no strong "is-a" relationship?

#### Write your answer:

## Scoring Summary
| Section                  |     Points |
| ------------------------ | ---------: |
| Part A: Multiple Choice  |          6 |
| Part B: Short Answer     |          6 |
| Part C: Application Task |         10 |
| Part D: Code Analysis    |          4 |
| Part E: Design Decision  |          4 |
| Part F: Reflection       | Not scored |
| **Total**                |     **30** |

## Performance Levels
### 27–30: Strong Understanding

The learner demonstrates a strong understanding of composition and object relationships and can apply them independently.

#### Feedback:

> You demonstrated a strong understanding of composition, "has-a" relationships, constructors, and object collaboration. You can confidently move to the final OOP project.

### 23–26: Proficient

The learner understands the main concepts but may need minor clarification or additional practice.

#### Feedback:

> You understand the main composition concepts and can apply them with minor support. Review the areas where you lost points and practice identifying when composition is more appropriate than inheritance.

### 16–22: Developing

The learner has a basic understanding but needs additional practice.

#### Feedback:

> You have started to understand composition, but some concepts need more practice. Review "is-a" versus "has-a" relationships, constructor-based relationships, and the purpose of this.

### 0–15: Needs Support

The learner needs additional instruction and guided practice.

#### Feedback:

> Review the composition learning content and activity again. Focus on how objects can contain and use other objects and how constructors can establish these relationships.

## Assessment Review Guide

If the learner makes mistakes, use the following guidance:

- Common Difficulty	Recommended Review
- Confuses "is-a" and "has-a"	Review inheritance vs. composition
- Does not understand object references	Review how one class can contain another object
- Confuses this	Review constructor-based object relationships
- Struggles with composition implementation	Repeat the Car and Engine example
- Uses inheritance for every relationship	Review the "composition over inheritance" principle
- Does not understand aggregation	Review the aggregation vs. composition section
- Struggles with multiple related objects	Repeat the Library activity
## Completion Requirement

A score of 23 out of 30 or higher indicates that the learner has demonstrated sufficient understanding to progress.

If the score is below 23:

- Review the incorrect questions.
- Revisit the related learning content.
- Repeat the relevant activity.
- Attempt the assessment again.

The goal is not only to achieve a passing score but to demonstrate that the learner can explain and apply composition and object relationships in Java.
