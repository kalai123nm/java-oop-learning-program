# Module 3: Inheritance

**Estimated time:** 40 minutes

## Learning Objective

By the end of this module, learners will be able to:

> Explain how inheritance enables a Java class to reuse and extend the fields and methods of another class, and implement a basic inheritance relationship using `extends`.

---

## 1. Why Do We Need Inheritance?

Imagine you are building a system for a college.

The system needs to represent different types of people, such as students and teachers.

Both students and teachers may have common information:

- Name
- Age
- Email

However, they may also have information specific to their role.

For example:

**Student:**

- Student ID
- Course

**Teacher:**

- Employee ID
- Subject

Without inheritance, we might repeat the common fields in multiple classes:

```java
class Student {

    String name;
    int age;
    String email;
    String studentId;
    String course;
}
class Teacher {

    String name;
    int age;
    String email;

    String employeeId;
    String subject;
}
```

The name, age, and email fields are repeated.

If we need to change how common information is handled, we may have to make the same change in multiple classes.

Inheritance provides a way to define common functionality once and reuse it in related classes.

## 2. What Is Inheritance?

Inheritance is an object-oriented programming mechanism that allows one class to acquire accessible fields and methods from another class.

The existing class is commonly called the parent class, superclass, or base class.

The class that inherits from it is commonly called the child class, subclass, or derived class.

For example:

```
class Person {

    String name;
    int age;

    void displayInfo() {
        System.out.println(name + " - " + age);
    }
}
```

A Student class can inherit from Person:
```
class Student extends Person {

    String course;
}
```
Here:

- Person is the parent class.
- Student is the child class.
- Student inherits accessible members from Person.
- Student can also define its own members.

Conceptually:

             Person
          /          \
         /            \
        ↓              ↓
    Student          Teacher
## 3. The extends Keyword

Java uses the extends keyword to establish a class inheritance relationship.

Example:
```
class Student extends Person {

}
```
This means that Student is a subclass of Person.

A Student object can use accessible members inherited from Person.

For example:
```
class Person {

    String name;

    void introduce() {
        System.out.println("My name is " + name);
    }
}

class Student extends Person {

    String course;
}
```
We can then create a Student object:
```
Student student = new Student();

student.name = "Arun";
student.course = "Computer Science";

student.introduce();
```
Output:

My name is Arun

The introduce() method was defined in Person, but the Student object can use it because Student extends Person.

## 4. Parent and Child Classes

Consider:
```
class Person {

    String name;
    int age;
}

class Student extends Person {

    String course;
}
```
The relationship can be represented as:

Person
├── name
└── age
      ↑
      │ inherited
      │
Student
└── course

The Student class has its own course field while also having access to the inherited name and age fields.

This allows related classes to share common functionality while still having their own specialized features.

## 5. Inherited Methods

Inheritance applies to methods as well as fields, subject to Java's access rules.

For example:
```
class Person {

    void introduce() {
        System.out.println("I am a person.");
    }
}

class Student extends Person {

}
```
A Student object can call the inherited method:
```
Student student = new Student();

student.introduce();
```
Output:

I am a person.

The Student class did not need to define introduce() itself.

## 6. Adding Specialized Behavior

A child class can define additional fields and methods that are specific to it.

Example:
```
class Person {

    String name;

    void introduce() {
        System.out.println("My name is " + name);
    }
}

class Student extends Person {

    String course;

    void study() {
        System.out.println(name + " is studying " + course);
    }
}
```
The Student object can use both inherited and its own methods:
```
Student student = new Student();

student.name = "Arun";
student.course = "Computer Science";

student.introduce();
student.study();
```
Output:

My name is Arun
Arun is studying Computer Science

The child class therefore combines:

- Inherited functionality from the parent.
- Its own specialized functionality.
## 7. Why Use Inheritance?

Inheritance can provide several benefits.

### Code Reuse

Common fields and methods can be defined in a parent class and reused by child classes.

### Specialization

Child classes can add behavior specific to their role.

### Organization

Inheritance can represent relationships between related types.

### Maintainability

Common functionality can be maintained in one parent class rather than duplicated across multiple classes.

## 8. Understanding an "Is-A" Relationship

Inheritance is appropriate when there is an "is-a" relationship between the child and parent types.

For example:

Student is a Person.
Teacher is a Person.

This can be represented in Java as:
```
class Student extends Person {

}

class Teacher extends Person {

}
```
However, not every relationship should use inheritance.

For example:

Student has a Course.
Car has an Engine.

These are "has-a" relationships, not "is-a" relationships.

Inheritance should generally represent a meaningful type relationship.

## 9. Inheritance vs. Duplication

Without inheritance:
```
class Student {

    String name;
    int age;

    void introduce() {
        System.out.println(name);
    }

    String course;
}
class Teacher {

    String name;
    int age;

    void introduce() {
        System.out.println(name);
    }

    String subject;
}
```
The common code is duplicated.

With inheritance:
```
class Person {

    String name;
    int age;

    void introduce() {
        System.out.println(name);
    }
}
class Student extends Person {

    String course;
}
class Teacher extends Person {

    String subject;
}
```
Now the common functionality is defined in one place.

## 10. A Complete Example

Let's build a simple employee hierarchy.

Parent Class
```
class Employee {

    String name;
    double salary;

    void displayEmployee() {
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
    }
}
```
Child Class
```
class Developer extends Employee {

    String programmingLanguage;

    void displayLanguage() {
        System.out.println("Language: " + programmingLanguage);
    }
}
```
Using the Child Class
```
public class Main {

    public static void main(String[] args) {

        Developer developer = new Developer();

        developer.name = "Priya";
        developer.salary = 65000;
        developer.programmingLanguage = "Java";

        developer.displayEmployee();
        developer.displayLanguage();
    }
}
```
Output:

Name: Priya
Salary: 65000.0
Language: Java

The Developer object can use:

Inherited:
- name
- salary
- displayEmployee()

Its own:
- programmingLanguage
- displayLanguage()
## 11. Guided Practice

Let's create a simple vehicle hierarchy.

#### Step 1: Create the Parent Class

Create a class named Vehicle.

It should contain:

brand
speed

Add a method named displayInfo() that displays the brand and speed.

Start with:

class Vehicle {

    // Add fields and method here

}
#### Step 2: Create the Child Class

Create a class named Car that extends Vehicle.

class Car extends Vehicle {

}
#### Step 3: Add Car-Specific Data

Add a field named:

numberOfDoors

Choose an appropriate data type.

#### Step 4: Add Car-Specific Behavior

Create a method named:

displayCarInfo()

The method should display the number of doors.

#### Step 5: Create a Car Object

Inside main(), create a Car object:

Car car = new Car();
#### Step 6: Use Inherited Members

Assign values to:

brand
speed

Then assign a value to:

numberOfDoors
#### Step 7: Call the Methods

Call:

car.displayInfo();
car.displayCarInfo();

The first method should come from the parent class.

The second method should come from the child class.

## 12. Knowledge Check

Use the questions below to check your understanding before moving to the activity.

### Question 1

What is inheritance?

**A.** A mechanism for deleting duplicated classes

**B.** A mechanism that allows one class to acquire accessible members from another class

**C.** A method for creating private variables

**D.** A way to prevent objects from being created

<details> <summary>Show Answer</summary>

Answer: B

Inheritance allows a child class to acquire accessible members from a parent class.

</details>

### Question 2

Which keyword is used to establish class inheritance in Java?

**A.** inherit

**B.** implements

**C.** extends

**D.** inherits

<details> <summary>Show Answer</summary>

Answer: C

Java uses the extends keyword for class inheritance.

</details>

### Question 3

Consider:

class Student extends Person {

}

Which statement is correct?

**A.** Person inherits from Student.

**B.** Student is a subclass of Person.

**C.** Student and Person are unrelated classes.

**D.** Student replaces the Person class.

<details> <summary>Show Answer</summary>

Answer: B

Student is the child/subclass and Person is the parent/superclass.

</details>

### Question 4

Which relationship is generally appropriate for inheritance?

**A.** Student has a Course

**B.** Car has an Engine

**C.** Student is a Person

**D.** Library has Books

<details> <summary>Show Answer</summary>

Answer: C

Inheritance generally represents an "is-a" relationship. A Student is a Person.

</details>

### Question 5

Consider:
```
class Person {

    void introduce() {
        System.out.println("Hello");
    }
}

class Student extends Person {

}
```
What can a Student object do?

**A.** It cannot use introduce().

**B.** It can use the inherited introduce() method.

**C.** It automatically deletes introduce().

**D.** It must redefine introduce() before using it.

<details> <summary>Show Answer</summary>

Answer: B

The Student class inherits the accessible introduce() method from Person.

</details>

### 13. Key Takeaways

After completing this module, remember:

- Inheritance allows one class to acquire accessible members from another class.
- The existing class is commonly called the parent class or superclass.
- The inheriting class is commonly called the child class or subclass.
- Java uses the extends keyword for class inheritance.
- Child classes can use inherited accessible fields and methods.
- Child classes can add their own specialized fields and methods.
- Inheritance is generally used for meaningful "is-a" relationships.
- Inheritance can reduce duplication and improve code organization.
## 14. Completion Check

Before moving to the activity, the learner should be able to:

 - Explain what inheritance is.
 - Identify parent and child classes.
 - Use the extends keyword correctly.
 - Identify inherited fields and methods.
 - Add specialized fields and methods to a child class.
 - Explain the difference between an "is-a" and "has-a" relationship.
 - Create a simple parent-child class hierarchy.
 - Use inherited methods through a child object.
 - Explain how inheritance can reduce code duplication.

If you can confidently complete all of the above, continue to the Module 3 Activity: Build a Vehicle Hierarchy.
    
