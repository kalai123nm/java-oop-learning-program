# Module 7: Java OOP Capstone Project

**Estimated time:** 60–90 minutes

## Learning Objective

By the end of this capstone project, learners will be able to:

> Design and implement a small Java application that integrates classes, encapsulation, inheritance, polymorphism, abstraction, interfaces, and composition to solve a practical problem.

---

# 1. Capstone Overview

Throughout the previous modules, you learned individual object-oriented programming concepts.

Now you will combine them into one practical application.

The goal is not simply to write working code.

The goal is to demonstrate that you can:

- Identify appropriate classes.
- Define responsibilities for each class.
- Model relationships between objects.
- Protect object data using encapsulation.
- Reuse common behavior through inheritance.
- Use polymorphism for flexible behavior.
- Apply abstraction to define common structures.
- Use interfaces to define capabilities.
- Use composition to connect objects.

---

# 2. Project Scenario

## Student Learning Management System

You are building a simple **Student Learning Management System** for a training organization.

The system should manage:

- Students
- Instructors
- Courses
- Assessments
- Different types of users

The application should allow users to view information and perform basic learning-related actions.

---

# 3. Functional Requirements

The application should support the following functionality.

## Student

A student should have:

- Name
- Student ID
- Email
- Enrolled course

A student should be able to:

- Display their information.
- View their enrolled course.
- Complete an assessment.

---

## Instructor

An instructor should have:

- Name
- Instructor ID
- Subject

An instructor should be able to:

- Display their information.
- Teach a course.

---

## Course

A course should have:

- Course name
- Course code
- Instructor

A course should be able to:

- Display course information.
- Display its instructor.

---

## Assessment

An assessment should have:

- Assessment name
- Maximum score
- Student score

An assessment should be able to:

- Record a score.
- Display the result.
- Determine whether the student passed.

---

# 4. Required OOP Concepts

The project must demonstrate all major concepts covered in this program.

## 4.1 Classes and Objects

Create classes representing the main entities:

```text
Student
Instructor
Course
Assessment
```
Create objects from these classes inside the application.

## 4.2 Encapsulation

Use private fields where appropriate.

For example:
```
class Student {

    private String name;
    private String studentId;
    private String email;

}
```
Provide appropriate getters and setters.

Example:
```
public String getName() {
    return name;
}

public void setName(String name) {
    this.name = name;
}
```
Use validation where appropriate.

For example, an empty student ID should not be accepted.

4.3 Inheritance

Create a common parent class for users.

For example:
```
             User
            /    \
           /      \
      Student    Instructor
```
The User class can contain common information such as:
```
Name
Email
ID
```
Then:
```
class Student extends User {

}
```
and:
```
class Instructor extends User {

}
```
## 4.4 Polymorphism

The application should demonstrate that different user types can provide different behavior.

For example:
```
User user;

user = new Student();
user.displayRole();

user = new Instructor();
user.displayRole();
```
The output should depend on the actual object.

Example:
```
Student
Instructor
```
Use method overriding to demonstrate runtime polymorphism.

## 4.5 Abstraction

Create an abstract class where appropriate.

For example:
```
abstract class User {

    private String name;
    private String email;

    abstract void displayRole();

}
```
Child classes should provide their own implementation of displayRole().

## 4.6 Interface

Create an interface representing a capability.

For example:
```
interface Assessable {

    void completeAssessment();
}
```
The Student class can implement this interface:
```
class Student extends User implements Assessable {

    @Override
    public void completeAssessment() {
        System.out.println("Student completed assessment");
    }
}
```
The interface should represent a meaningful capability rather than simply being added to satisfy the requirement.

## 4.7 Composition

Create a "has-a" relationship between classes.

For example:
```
Student has a Course.
Course has an Instructor.
Student has an Assessment.
```
This can be represented using object references.

Example:
```
class Student {

    private Course course;
}
```
The relationship should be established using a constructor or an appropriate setter.

5. Suggested Class Design

The following structure is recommended:
```
                    User
                   /    \
                  /      \
             Student    Instructor
                │            │
                │            │
                └──── Course ┘
                      │
                      │
                  Instructor

Student
   │
   ├── Course
   └── Assessment

Student
   │
   └── Assessable
```
This is a suggested design, not a requirement to copy the structure exactly.

You should make reasonable design decisions based on the requirements.

# 6. Suggested Project Structure

You may organize the Java files like this:
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
For a beginner-level project, keeping the structure simple is acceptable.

# 7. Suggested Class Responsibilities

Each class should have a clear responsibility.

## User

### Responsible for:

- Common user information.
- Common user behavior.
- Defining the abstract role behavior.
## Student

### Responsible for:

- Student-specific information.
- Student-specific behavior.
- Completing assessments.
- Managing the student's course relationship.
## Instructor

### Responsible for:

- Instructor-specific information.
- Instructor-specific behavior.
- Teaching courses.
## Course

### Responsible for:

- Course information.
- Course-instructor relationship.
- Displaying course details.
## Assessment

### Responsible for:

- Assessment information.
- Recording scores.
- Calculating pass/fail status.
## Assessable

### Responsible for:

- Defining the assessment completion capability.
## Main

### Responsible for:

- Creating objects.
- Connecting objects.
- Demonstrating the application's functionality.
- Demonstrating the OOP concepts.
# 8. Example Design

The following examples demonstrate the intended relationships.

### User
```
abstract class User {

    private String name;
    private String email;

    User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    abstract void displayRole();
}
```
### Student
```
class Student extends User implements Assessable {

    private String studentId;
    private Course course;

    Student(String name, String email, String studentId, Course course) {
        super(name, email);
        this.studentId = studentId;
        this.course = course;
    }

    @Override
    void displayRole() {
        System.out.println("Role: Student");
    }

    @Override
    public void completeAssessment() {
        System.out.println("Student completed the assessment");
    }
}
```
### Instructor
```
class Instructor extends User {

    private String instructorId;
    private String subject;

    Instructor(String name, String email, String instructorId, String subject) {
        super(name, email);
        this.instructorId = instructorId;
        this.subject = subject;
    }

    @Override
    void displayRole() {
        System.out.println("Role: Instructor");
    }
}
```
These examples demonstrate:

- Encapsulation
- Inheritance
- Abstraction
- Interfaces
- Polymorphism
- Composition

You should expand the classes to meet the full project requirements.

# 9. Assessment Design

The Assessment class should contain enough functionality to demonstrate object behavior.

For example:
```
class Assessment {

    private String name;
    private int maxScore;
    private int score;

}
```
You could provide methods such as:
```
recordScore()
displayResult()
isPassed()
```
For example:
```
boolean isPassed() {
    return score >= maxScore * 0.5;
}
```
The passing rule should be clearly documented.

# 10. Demonstrating Polymorphism

The Main class should demonstrate polymorphism explicitly.

Example:
```
User user;

user = new Student(
    "Arun",
    "arun@example.com",
    "S101",
    course
);

user.displayRole();

user = new Instructor(
    "Priya",
    "priya@example.com",
    "I101",
    "Java"
);

user.displayRole();
```
Expected output:
```
Role: Student
Role: Instructor
```
This demonstrates that the same User reference can refer to different child objects.

# 11. Demonstrating Composition

The project should also demonstrate objects working together.

For example:
```
Instructor instructor = new Instructor(
    "Priya",
    "priya@example.com",
    "I101",
    "Java"
);

Course course = new Course(
    "Java OOP",
    "JAVA101",
    instructor
);

Student student = new Student(
    "Arun",
    "arun@example.com",
    "S101",
    course
);
```
The relationships are:
```
Student
   │
   └── Course
         │
         └── Instructor
```
This demonstrates composition.

# 12. Demonstrating the Interface

Create an interface reference:

`Assessable assessable = student;`

Then call:

`assessable.completeAssessment();`

Expected output:

Student completed the assessment

This demonstrates that the student can be treated through the capability defined by the interface.

# 13. Demonstrating the Assessment

Create an assessment:
```
Assessment assessment = new Assessment(
    "Java OOP Assessment",
    100
);
```
Record a score:

`assessment.recordScore(85);`

Display the result:

`assessment.displayResult();`

Expected output could be:
```
Assessment: Java OOP Assessment
Score: 85/100
Status: Passed
```
# 14. Main Application Flow

The Main class should demonstrate a complete scenario.

A suggested flow is:
```
1. Create an Instructor
        ↓
2. Create a Course using the Instructor
        ↓
3. Create a Student using the Course
        ↓
4. Create an Assessment
        ↓
5. Display Student information
        ↓
6. Display Course information
        ↓
7. Demonstrate User polymorphism
        ↓
8. Complete an assessment
        ↓
9. Record the assessment score
        ↓
10. Display the assessment result
```
The exact implementation is up to the learner.

# 15. Quality Requirements

The project should not only work; it should demonstrate good development practices.

Naming

Use meaningful names for:

- Classes
- Methods
- Variables
- Parameters

For example:

`displayCourseDetails()`

is preferable to:

`show()`

when the purpose is specifically to display course details.

### Encapsulation

Keep fields private when appropriate.

Avoid unnecessary direct access such as:

`student.name = "Arun";`

Prefer controlled access through constructors, getters, or setters.

### Single Responsibility

Each class should have a clear purpose.

Avoid putting all functionality inside Main.

### Code Readability

Use:

- Consistent indentation.
- Meaningful names.
- Small methods.
- Clear class responsibilities.
- Minimal unnecessary comments.
### Validation

Add reasonable validation where appropriate.

For example:

- Score should not be below zero.
- Score should not exceed the maximum score.
- Required names should not be empty.
# 16. Testing Checklist

Before considering the project complete, test the following.

### Student
 - Student information can be displayed.
 - Student is associated with a course.
 - Student can complete an assessment.
### Instructor
 - Instructor information can be created.
 - Instructor information can be displayed.
 - Instructor can be associated with a course.
### Course
 - Course information can be created.
 - Course information can be displayed.
 - Course can reference an instructor.
### Assessment
 - Assessment can be created.
 - Score can be recorded.
 - Invalid scores are handled.
 - Result can be displayed.
 - Pass/fail status is calculated correctly.
### OOP
 - Classes and objects are used.
 - Encapsulation is demonstrated.
 - Inheritance is demonstrated.
 - Polymorphism is demonstrated.
 - Abstraction is demonstrated.
 - Interface implementation is demonstrated.
 - Composition is demonstrated.
# 17. Expected Final Demonstration

Your application should produce output similar to:
```
=== Student Learning Management System ===

Student Information
Name: Arun
Student ID: S101
Email: arun@example.com

Course Information
Course: Java OOP
Code: JAVA101
Instructor: Priya

Role Demonstration
Role: Student
Role: Instructor

Assessment
Assessment: Java OOP Assessment
Score: 85/100
Status: Passed

Student completed the assessment
```
The exact output may differ depending on your implementation.

The important requirement is that the program clearly demonstrates the required functionality and OOP concepts.

# 18. Learner Deliverables

By the end of the capstone, the learner should have:
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
The README should briefly explain:

- Project purpose.
- Main classes.
- OOP concepts demonstrated.
- How to run the application.
- Example output.
# 19. Capstone Success Criteria

The capstone is considered successfully completed when the learner can:

 - Design classes based on a practical scenario.
 - Create and use objects.
 - Apply encapsulation.
 - Create a meaningful inheritance relationship.
 - Apply method overriding.
 - Demonstrate polymorphism.
 - Use an abstract class.
 - Use an interface.
 - Create composition relationships.
 - Establish relationships through constructors.
 - Validate important data.
 - Keep class responsibilities clear.
 - Run and test the complete application.
 - Explain why each OOP concept was used.
 - Document the project clearly.
# 20. Final Learning Goal

The goal of this capstone is not to memorize Java syntax.

The learner should be able to look at a problem and ask:
```
What objects exist?
        ↓
What responsibilities do they have?
        ↓
Which data should be encapsulated?
        ↓
Which classes have an "is-a" relationship?
        ↓
Which objects have a "has-a" relationship?
        ↓
Where is abstraction useful?
        ↓
Where is polymorphism useful?
        ↓
What capabilities should be represented by interfaces?
        ↓
How should the objects collaborate?
```
By completing this project, the learner demonstrates the ability to move from individual OOP concepts to practical object-oriented design.

If you can complete the project and explain the design decisions behind it, continue to the Module 7 Capstone Activity: Build the Student Learning Management System.
