# Module 1 Activity: Build a Student Class

**Estimated time:** 25 minutes

## Activity Objective

By completing this activity, learners will be able to:

> Apply the concepts of classes, objects, fields, and methods by creating and using a basic Java class.

---

## Scenario

You are building a simple college student management program.

The program needs to represent students and display basic information about them.

Your task is to create a `Student` class and use it to create student objects.

---

## Task 1: Create the Student Class

Create a class named `Student`.

The class should contain the following fields:

- `name` — stores the student's name
- `age` — stores the student's age
- `course` — stores the student's course

Use appropriate Java data types for each field.

### Expected Structure

Your class should have a structure similar to:

```java
class Student {

    // Add your fields here

}
```
## Task 2: Add a Method

Add a method named displayInfo() to the Student class.

The method should display the student's:

Name
Age
Course

The output should be easy to read.

### For example:

Name: Arun
Age: 20
Course: Computer Science
## Task 3: Create a Student Object

Inside the main() method, create one Student object.

Use the new keyword to create the object.

### Your program should contain an object similar to:

Student student1 = new Student();
## Task 4: Assign Values

Assign values to the fields of student1.

### Use the following information:

Name: Arun
Age: 20
Course: Computer Science
## Task 5: Display the Student Information

Call the displayInfo() method using the student1 object.

### The program should produce output similar to:

Name: Arun
Age: 20
Course: Computer Science
Task 6: Create a Second Student

Now create another Student object named student2.

### Assign the following information:

Name: Priya
Age: 21
Course: Information Technology

Call displayInfo() for student2 as well.

Your program should display information for both students.

### Expected Output
Name: Arun
Age: 20
Course: Computer Science

Name: Priya
Age: 21
Course: Information Technology
Challenge Task

### Create a third Student object using the following information:

Name: Kumar
Age: 19
Course: Electronics

Display the information for all three students.

Try to complete this without looking at the previous examples.

## Self-Check

### Before considering the activity complete, verify the following:

 I created a class named Student.
 I added name, age, and course fields.
 I used appropriate Java data types.
 I created a displayInfo() method.
 I created a Student object using new.
 I assigned values to the object's fields.
 I called displayInfo() using the object.
 I created a second Student object.
 The two objects contain different values.
 I can explain why both objects can use the same Student class.
## Reflection Questions

### Answer these questions after completing the activity.

1. What is the purpose of the Student class?

Write your answer:

2. What is the difference between student1 and student2?

Write your answer:

3. Why can multiple Student objects be created from the same class?

Write your answer:

4. Which parts of the Student class represent data, and which part represents behavior?

Write your answer:

## Success Criteria

### You have successfully completed this activity if:

Your program compiles without errors.
The Student class contains the required fields.
The displayInfo() method displays the student's information.
You can create multiple Student objects.
Each object can contain different student information.
You can explain the difference between the Student class and the objects created from it.

## Extension Challenge

Think about what additional information a college might need to store about a student.

Choose two additional fields that could be added to the Student class.

### Examples could include:

Roll number
Email
Department
Grade

Add the fields to your program and update displayInfo() so that the new information is also displayed.
