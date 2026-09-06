# Module 7 Capstone Activity: Build a Student Learning Management System

**Estimated time:** 60–90 minutes

## Activity Objective

By the end of this activity, learners will be able to:

> Design and implement a small Java application that combines classes, encapsulation, inheritance, polymorphism, abstraction, interfaces, and composition.

---

# 1. Project Scenario

You are building a **Student Learning Management System** for a training organization.

The system should manage:

- Students
- Instructors
- Courses
- Assessments

Different types of users should have different roles and behaviors.

The application should demonstrate the major Java OOP concepts learned throughout this program.

---

# 2. Project Requirements

Your application should contain the following classes and interface:

```text
User
Student
Instructor
Course
Assessment
Assessable
Main
```
Suggested structure:
```
                    User
                   /    \
                  /      \
             Student    Instructor
                │            │
                └── Course ──┘
                     │
                     ↓
                 Instructor

Student ─────→ Assessment

Student ─────→ Assessable
```
# 3. Task 1: Create the Abstract User Class

Create an abstract class named:

`User`

It should contain common information for users.

Add private fields:
```
name
email
```
Create a constructor to initialize them.

Add getters:
```
getName()
getEmail()
```
Create an abstract method:

`abstract void displayRole();`

The class should demonstrate:
```
Abstraction
Encapsulation
```
# 4. Task 2: Create the Student Class

Create:

`Student extends User`

Add private fields:
```
studentId
course
```
The course field should refer to a Course object.

Create a constructor that accepts:
```
name
email
studentId
course
```
Use the parent constructor with:

`super(...)`

Create a getter for studentId.

Override:

`displayRole()`

Expected output:

`Role: Student`
# 5. Task 3: Implement the Assessable Interface

Create an interface named:

`Assessable`

Add:

`void completeAssessment();`

Make Student implement the interface:

class Student extends User implements Assessable

Implement:

`completeAssessment()`

Expected output:

`Student completed the assessment`

This demonstrates:
```
Interfaces
Abstraction
Polymorphism
```
# 6. Task 4: Create the Instructor Class

Create:

`Instructor extends User`

Add private fields:
```
instructorId
subject
```
Create a constructor that accepts:
```
name
email
instructorId
subject
```
Override:

`displayRole()`

Expected output:

`Role: Instructor`

Add a method:

`teach()`

Expected output:

`Instructor is teaching Java`
# 7. Task 5: Create the Course Class

Create a class named:

`Course`

Add private fields:
```
courseName
courseCode
instructor
```
The instructor field should refer to an Instructor object.

Create a constructor that accepts:
```
courseName
courseCode
instructor
```
Store the instructor using:

`this.instructor = instructor;`

This demonstrates composition.

The relationship is:

`Course has an Instructor.`
# 8. Task 6: Add Course Behavior

Create a method:

`displayCourseDetails()`

It should display:
```
Course: Java OOP
Code: JAVA101
Instructor: Priya
```
Use the Instructor object to retrieve the instructor's name.

For example:

`instructor.getName()`

This demonstrates how objects collaborate.

# 9. Task 7: Create the Assessment Class

Create a class named:

`Assessment`

Add private fields:
```
name
maxScore
score
```
Create a constructor that accepts:
```
name
maxScore
```
Initialize score appropriately.

# 10. Task 8: Record the Score

Create a method:

`recordScore(int score)`

The method should validate the score.

The score must:
```
Not be below 0.
Not exceed maxScore.
```
For a valid score, store it.

For an invalid score, display an appropriate message.

Example:

`Invalid score`
# 11. Task 9: Determine the Result

Create a method:

`isPassed()`

The learner passes when the score is at least 50% of the maximum score.

For example:
```
Maximum score: 100
Score: 85
Result: Passed
```
You may implement the logic using:

`return score >= maxScore * 0.5;`
# 12. Task 10: Display the Assessment Result

Create:

`displayResult()`

The output should be similar to:
```
Assessment: Java OOP Assessment
Score: 85/100
Status: Passed
```
# 13. Task 11: Create the Main Application

Create:

`Main.java`

The Main class should demonstrate the complete application.

Start by creating an instructor:
```
Name: Priya
Email: priya@example.com
Instructor ID: I101
Subject: Java
```
# 14. Task 12: Create a Course

Create a course using the instructor.

Use:
```
Course Name: Java OOP
Course Code: JAVA101
```
The relationship should be:
```
Course
   │
   └── Instructor
```
# 15. Task 13: Create a Student

Create a student using the course.

Use:
```
Name: Arun
Email: arun@example.com
Student ID: S101
```
The relationship should now be:
```
Student
   │
   └── Course
         │
         └── Instructor
```
# 16. Task 14: Create an Assessment

Create:
```
Assessment: Java OOP Assessment
Maximum Score: 100
```
Record:

`Score: 85`

Then display the result.

Expected:
```
Assessment: Java OOP Assessment
Score: 85/100
Status: Passed
```
# 17. Task 15: Demonstrate Student Functionality

Call:

`student.completeAssessment();`

Expected output:

`Student completed the assessment`
# 18. Task 16: Demonstrate Polymorphism

Create a User reference:

`User user;`

Assign the student:
```
user = student;
user.displayRole();
```
Then assign the instructor:
```
user = instructor;
user.displayRole();
```
Expected output:
```
Role: Student
Role: Instructor
```
This demonstrates runtime polymorphism.

The same User reference refers to different child objects.

# 19. Task 17: Demonstrate Interface Polymorphism

Create:

`Assessable assessable = student;`

Then call:

`assessable.completeAssessment();`

Expected output:

`Student completed the assessment`

This demonstrates that an object can be accessed through an interface reference.

# 20. Task 18: Demonstrate Course and Instructor Collaboration

Call:

`course.displayCourseDetails();`

Then:

`instructor.teach();`

Expected output:
```
Course: Java OOP
Code: JAVA101
Instructor: Priya

Instructor is teaching Java
```
# 21. Final Application Flow

Your Main class should demonstrate a flow similar to:
```
Create Instructor
       ↓
Create Course using Instructor
       ↓
Create Student using Course
       ↓
Create Assessment
       ↓
Record Score
       ↓
Display Student Information
       ↓
Display Course Information
       ↓
Demonstrate User Polymorphism
       ↓
Complete Assessment
       ↓
Display Assessment Result
```
# 22. Expected Final Output

Your exact output may differ depending on your implementation.

A possible result is:
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

Instructor Information
Name: Priya
Subject: Java

Role Demonstration
Role: Student
Role: Instructor

Assessment
Student completed the assessment
Assessment: Java OOP Assessment
Score: 85/100
Status: Passed

Instructor is teaching Java
```
# 23. OOP Concept Checklist

Your implementation should demonstrate every major concept.

### Classes and Objects
 - Created multiple classes.
 - Created objects using new.
 - Used objects to perform actions.
### Encapsulation
 - Used private fields.
 - Used constructors.
 - Used getters where appropriate.
 - Validated important data.
### Inheritance
 - Student extends User.
 - Instructor extends User.
 - Used super() where appropriate.
### Polymorphism
 - Used a User reference.
 - Assigned different child objects to it.
 - Overrode displayRole().
 - Demonstrated different runtime behavior.
### Abstraction
 - Created an abstract User class.
 - Created an abstract displayRole() method.
 - Implemented the method in child classes.
### Interfaces
 - Created the Assessable interface.
 - Implemented it in Student.
 - Used an interface reference.
### Composition
 - Course contains an Instructor.
 - Student contains a Course.
 - Objects are connected through constructors.
# 24. Code Quality Checklist

Before considering the project complete:

 - Class names use meaningful names.
 - Method names clearly describe their purpose.
 - Fields are private where appropriate.
 - Constructors initialize required data.
 - Validation is applied to important inputs.
 - Each class has a clear responsibility.
 - Main focuses on demonstrating the application.
 - There is no unnecessary duplicated code.
 - Code is consistently formatted.
 - The application runs without compilation errors.
 - The application produces the expected behavior.
# 25. README Requirements

Create a README.md file for the project.

Include the following sections:
```
# Student Learning Management System

## Project Overview

## Features

## OOP Concepts Demonstrated

## Class Structure

## How to Run

## Example Output
```
Under OOP Concepts Demonstrated, explain briefly how the project uses:

- Encapsulation
- Inheritance
- Polymorphism
- Abstraction
- Interfaces
- Composition
# 26. Reflection

After completing the project, answer the following questions.

### Question 1

Which OOP concept was easiest to apply?

#### Write your answer:

### Question 2

Which OOP concept was most difficult to apply?

#### Write your answer:

### Question 3

Why did you use inheritance between User, Student, and Instructor?

#### Write your answer:

### Question 4

Why did you use composition between Student, Course, and Instructor?

#### Write your answer:

### Question 5

How does polymorphism make the application more flexible?

#### Write your answer:

### Question 6

Why is Assessment better represented as a separate class instead of putting all assessment logic inside Student?

#### Write your answer:

# 27. Success Criteria

The capstone is successfully completed when the learner can:

- Design multiple classes for a practical scenario.
- Create and use objects.
- Apply encapsulation to protect object state.
- Create meaningful inheritance relationships.
- Override methods in child classes.
- Demonstrate runtime polymorphism.
- Create and use an abstract class.
- Create and implement an interface.
- Create composition relationships between objects.
- Establish relationships using constructors.
- Validate important data.
- Keep responsibilities separated between classes.
- Run and test the complete application.
- Explain the reason behind each major design decision.
- Document the project in a README.
# 28. Final Challenge

Once the required functionality works, extend the application.

Choose at least one of the following:

### Challenge A: Multiple Students

Allow the system to manage multiple students.

You may use:

`ArrayList<Student>`

Display all students enrolled in a course.

### Challenge B: Multiple Assessments

Allow a student to have multiple assessments.

For example:
```
Java OOP Quiz
Java OOP Assignment
Java OOP Final Assessment
```
Display the results of all assessments.

### Challenge C: Course Enrollment

Add a method that allows a student to enroll in a course.

For example:
```
enrollCourse(Course course)
Challenge D: Grading
```
Add a method that converts a score into a grade.

For example:
```
90–100 → A
80–89  → B
70–79  → C
60–69  → D
Below 60 → F
```
Document the grading rules in your README.

# 29. Final Completion Check

Before moving to the final assessment, confirm:

 - All required classes are created.
 - The application compiles successfully.
 - The application runs successfully.
 - Student functionality works.
 - Instructor functionality works.
 - Course functionality works.
 - Assessment functionality works.
 - Invalid assessment scores are handled.
 - Inheritance is demonstrated.
 - Polymorphism is demonstrated.
 - Abstraction is demonstrated.
 - Interface implementation is demonstrated.
 - Composition is demonstrated.
 - README is completed.
 - At least one extension challenge was attempted.
## Final Learning Outcome

After completing this project, you should be able to explain:

> "Object-oriented programming allows me to model a real-world problem using objects, organize responsibilities into classes, reuse behavior through inheritance, provide flexible behavior through polymorphism, hide implementation details through abstraction, define capabilities with interfaces, and connect objects through composition."
