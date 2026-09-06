# Module 7 Final Assessment · Java OOP Capstone Project

## Assessment Overview

This final assessment evaluates your ability to apply the Java OOP concepts covered throughout the learning program in one complete project.

You will build and explain a small **Student Learning Management System** for a training organization.

The project should demonstrate that you can move beyond individual OOP concepts and combine them into a meaningful software design.

**Estimated Time:** 60–90 minutes  
**Total Score:** 40 points  
**Passing Score:** 30/40 (75%)

---

## Learning Objectives

By completing this assessment, you should be able to:

- Design classes and create objects to represent a real-world problem.
- Apply encapsulation using appropriate access modifiers and methods.
- Use inheritance to create specialized classes.
- Implement polymorphism through method overriding and parent references.
- Apply abstraction using abstract classes.
- Define and implement interfaces.
- Use composition to model object relationships.
- Integrate multiple OOP concepts into one working Java application.
- Test and explain your implementation.
- Document your design and implementation decisions.

---

# Assessment Instructions

Build the project independently using the requirements below.

You may refer to your previous learning content and activities, but the final implementation should demonstrate your own understanding.

### Technical Requirements

- Use Java.
- Use standard Java features only.
- Do not use external libraries.
- Use meaningful class, method, and variable names.
- Keep fields properly encapsulated.
- Keep each class focused on a clear responsibility.
- The program should compile and run successfully.
- Include comments where they improve understanding.
- Your project should contain a `README.md`.

---

# Part A · Capstone Implementation

**Total: 20 points**

Build a Student Learning Management System for a training organization.

The system should represent students, instructors, courses, and assessments.

---

## Task 1 · Create the Abstract User Class

Create an abstract class named `User`.

It should contain common information shared by students and instructors.

### Requirements

- Include a private `name` field.
- Include a private `email` field.
- Provide appropriate getters.
- Provide appropriate setters if needed.
- Create a constructor to initialize the user.
- Include an abstract method such as:

```java
public abstract void displayRole();
```

### Points: 2
## Task 2 · Create the Student Class

Create a Student class that extends User.

### Requirements
- Store a student ID.
- Keep the student ID encapsulated.
- Provide appropriate access methods.
- Implement displayRole().
- Include behavior that allows the student to display their information.
### Points: 2
## Task 3 · Create the Instructor Class

Create an Instructor class that extends User.

### Requirements
- Store an instructor ID.
- Keep the instructor ID encapsulated.
- Provide appropriate access methods.
- Implement displayRole().
- Include behavior that allows the instructor to display their information.
### Points: 2
## Task 4 · Create the Course Class

Create a Course class.

A course should contain information such as:

- Course ID
- Course name
- Instructor
### Requirements
- Keep fields encapsulated.
- Create appropriate constructors and methods.
- A course must have an instructor relationship.
- Include a method to display course information.

The relationship between Course and Instructor should demonstrate composition/object association.

### Points: 3
## Task 5 · Create the Assessment Class

Create an Assessment class.

It should contain:

- Assessment name
- Maximum score
- Student score
- Requirements
- Keep fields private.
- Provide methods to record or update a score.
- Validate that the score is not negative.
- Prevent a score from exceeding the maximum score.
- Include a method to determine whether the student passed.

For example:
```
Score: 82
Maximum Score: 100
Passing Score: 50

Result: Passed
```
### Points: 3
## Task 6 · Create the Assessable Interface

Create an interface named Assessable.

It should define behavior related to assessment completion.

For example:
```
public interface Assessable {
    void completeAssessment();
}
```
The exact method name may differ if the purpose remains clear.

### Requirements
- Define at least one meaningful method.
- Implement the interface in an appropriate class.
- Demonstrate that the interface behavior works.
### Points: 2
## Task 7 · Demonstrate Polymorphism

Your program must demonstrate polymorphism.

Create a parent-class reference that refers to different child-class objects.

For example:
```
User user1 = new Student(...);
User user2 = new Instructor(...);
```
Then call an overridden method such as:
```
user1.displayRole();
user2.displayRole();
```
The program should execute the appropriate child-class implementation at runtime.

### Points: 2
## Task 8 · Demonstrate Composition

Your project must demonstrate a meaningful has-a relationship.

For example:
```
Course
   │
   └── has an Instructor
```
or another appropriate relationship within your system.

The relationship should be represented using an object reference rather than inheritance.

### Points: 2
## Task 9 · Integrate the System

Create a Main class that demonstrates the complete application.

The program should:

- Create at least one instructor.
- Create at least one student.
- Create a course.
- Associate the instructor with the course.
- Create an assessment.
- Record a student's score.
- Demonstrate the student's assessment result.
- Demonstrate inheritance.
- Demonstrate polymorphism.
- Demonstrate the interface behavior.
### Points: 2
# Part B · OOP Design Analysis

Total: 8 points

Answer the following questions based on your implementation.

### Question 1 · Encapsulation

Why are fields such as name, email, studentId, and score declared as private?

Explain how encapsulation improves the design of your application.

Points: 2

### Question 2 · Inheritance

Why does Student extend User?

Explain why this relationship represents an appropriate use of inheritance.

Points: 1

### Question 3 · Polymorphism

Explain how your project demonstrates runtime polymorphism.

Include one example from your code.

Points: 2

### Question 4 · Abstraction

What problem does the abstract User class solve?

Why should User be abstract instead of creating a generic User object directly?

Points: 1

### Question 5 · Interface

Why did you use the Assessable interface?

Explain what behavior the interface represents.

Points: 1

### Question 6 · Composition

Identify one composition/object relationship in your project and explain why you did not use inheritance for that relationship.

Points: 1

# Part C · Testing and Validation

Total: 4 points

Test your application before submitting it.

Complete the following checks.

### Functional Testing
 - The program compiles without errors.
 - The program runs successfully.
 - Student information is displayed correctly.
 - Instructor information is displayed correctly.
 - Course information is displayed correctly.
 - Assessment information is displayed correctly.
 - Valid scores are accepted.
 - Negative scores are rejected or prevented.
 - Scores above the maximum are rejected or prevented.
 - Pass/fail status is calculated correctly.
 - Polymorphism produces the expected child-class behavior.
 - Interface behavior works correctly.
### Testing Evidence

Record at least two test cases.

Example:

| Test Case     | Input   | Expected Result | Actual Result | Status |
| ------------- | ------- | --------------- | ------------- | ------ |
| Valid score   | 80/100  | Passed          | Passed        | Pass   |
| Invalid score | 120/100 | Rejected        | Rejected      | Pass   |

Points
- Functional testing: 2 points
- Validation testing: 2 points
# Part D · README Documentation

Total: 4 points

Create a README.md file for your project.

The README should include:

**1.** Project Title

Give your project a clear name.

**2.** Project Description

Briefly explain what the application does.

**3.** OOP Concepts Used

Explain where each concept is used:

- Classes and objects
- Encapsulation
- Inheritance
- Polymorphism
- Abstraction
- Interfaces
- Composition
### 4. Project Structure

Show the important project files.

Example:
```
java-oop-capstone/
├── src/
│   ├── User.java
│   ├── Student.java
│   ├── Instructor.java
│   ├── Course.java
│   ├── Assessment.java
│   ├── Assessable.java
│   └── Main.java
└── README.md
```
### 5. How to Run

Explain how another person can compile and run the application.

For a default-package project, for example:
```
javac src/*.java
java -cp src Main
```
### 6. Sample Output

Include a sample of the application's output.

### Points
- Project explanation: 1 point
- OOP concept documentation: 1 point
- Sample output/documentation quality: 1 point
# Part E · Reflection

Total: 4 points

Answer each question in 2–4 sentences.

### 1. Most Useful Concept

Which OOP concept was most useful while building this project, and why?

1 point

### 2. Biggest Challenge

What was the most difficult part of implementing the project?

How did you solve it?

1 point

### 3. Design Improvement

If you had more time, what would you improve in your project?

1 point

### 4. Learning Reflection

How has your understanding of OOP changed after completing the capstone?

1 point

## Capstone Extension

The following extension is optional and does not affect the base score.

Implement at least one additional feature:

- Support multiple students.
- Support multiple assessments.
- Allow students to enroll in multiple courses.
- Calculate an overall course score.
- Add different assessment types.
- Add course completion status.
- Add a simple menu-driven console interface.

If you implement an extension, describe it in your README.

Submission Checklist

Before submitting, make sure your project contains:
```
java-oop-capstone/
│
├── src/
│   ├── User.java
│   ├── Student.java
│   ├── Instructor.java
│   ├── Course.java
│   ├── Assessment.java
│   ├── Assessable.java
│   └── Main.java
│
└── README.md
```
## Final Checklist
 - All required classes are implemented.
 - Classes contain appropriate responsibilities.
 - Fields are properly encapsulated.
 - Inheritance is implemented correctly.
 - Method overriding is demonstrated.
 - Runtime polymorphism is demonstrated.
 - An abstract class is used.
 - An interface is implemented.
 - Composition/object relationships are demonstrated.
 - Input validation is implemented.
 - The complete application runs successfully.
 - Testing has been completed.
 - README is included.
 - Reflection questions are answered.
 - Code is readable and organized.
## Assessment Rubric
| Criteria                   | Excellent                                             | Satisfactory                                   | Needs Improvement                               | Points |
| -------------------------- | ----------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------- | -----: |
| Functional Implementation  | All required features work correctly                  | Most features work with minor issues           | Several required features are missing or broken |     12 |
| OOP Concept Integration    | Concepts are correctly and meaningfully integrated    | Most concepts are implemented correctly        | Concepts are missing, misused, or unclear       |     12 |
| Encapsulation & Design     | Strong encapsulation and clear class responsibilities | Generally appropriate design with minor issues | Poor encapsulation or unclear responsibilities  |      6 |
| Testing & Validation       | Thorough testing and correct validation               | Basic testing completed                        | Limited or missing testing/validation           |      4 |
| Code Quality               | Clean, readable, meaningful, maintainable code        | Generally readable with minor issues           | Difficult to read or poorly organized           |      3 |
| Documentation & Reflection | Complete README and thoughtful reflection             | Documentation mostly complete                  | Documentation or reflection is incomplete       |      3 |
| **Total**                  |                                                       |                                                |                                                 | **40** |

## Passing Criteria

30/40 points (75%) is required to pass the final assessment.

A passing submission should demonstrate that you can independently apply the core Java OOP concepts rather than simply define them.

### If You Score 30 or Above

You have demonstrated sufficient understanding to progress beyond the introductory OOP learning program.

###If You Score Below 30

Review the concepts where points were lost, especially:

- Encapsulation
- Inheritance
- Polymorphism
- Abstraction
- Interfaces
- Composition

Then revise your project and retake the relevant assessment tasks.

### Final Learning Outcome

After successfully completing this assessment, you should be able to take several individual OOP concepts and combine them into a small, structured Java application.

The goal is not only to make the program work, but to demonstrate that you understand why each OOP concept is being used and how the concepts work together in a real software design.
