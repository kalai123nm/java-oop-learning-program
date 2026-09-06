# Module 6: Composition & Object Relationships

**Estimated time:** 40 minutes

## Learning Objective

By the end of this module, learners will be able to:

> Explain how objects can work together through composition and implement basic "has-a" relationships between Java classes.

---

## 1. Why Do Objects Need Relationships?

Real-world systems are made up of objects that work together.

For example, an online shopping system may contain:

- Customer
- Order
- Product
- Payment
- Address

An `Order` contains products.

A `Customer` may have an address.

A `Payment` may be associated with an order.

Instead of putting everything into one large class, we can create separate classes and allow objects to work together.

This creates **object relationships**.

---

## 2. What Is Composition?

**Composition** is a design approach where one class contains or uses an object of another class as part of its state.

For example:

```java
class Engine {

}
```
A Car can contain an Engine:
```
class Car {

    Engine engine;
}
```
The relationship can be described as:

`Car has an Engine.`

This is different from inheritance:

`Car is a Vehicle.`

A useful mental model is:
```
"is-a"  → inheritance
"has-a" → composition
```
## 3. Composition Example

Consider an Address class:
```
class Address {

    String city;
    String state;
}
```
A Student can have an address:
```
class Student {

    String name;
    Address address;
}
```
Now we can create the objects:
```
Address address = new Address();

address.city = "Chennai";
address.state = "Tamil Nadu";

Student student = new Student();

student.name = "Arun";
student.address = address;
```
The Student object now contains a reference to an Address object.

Conceptually:
```
Student
   │
   ├── name
   │
   └── address ─────→ Address
                       │
                       ├── city
                       └── state
```
## 4. Why Use Composition?

Composition helps divide a system into smaller, focused classes.

Instead of:
```
class Student {

    String name;
    String city;
    String state;
    String street;
    String postalCode;

    // Everything related to the student and address
}
```
We can separate responsibilities:
```
class Student {

    String name;
    Address address;
}
class Address {

    String city;
    String state;
    String street;
    String postalCode;
}
```
Now each class has a clearer responsibility.

#### Student

Responsible for student-related information.

#### Address

Responsible for address-related information.

This makes the design easier to understand and maintain.

## 5. Composition vs Inheritance

Consider these two relationships:
```
Car is a Vehicle.
Car has an Engine.
```
The first relationship can be represented using inheritance:
```
class Car extends Vehicle {

}
```
The second can be represented using composition:
```
class Car {

    Engine engine;
}
```
The difference is important.

### Inheritance

Represents an is-a relationship.
```
Dog is an Animal.
Developer is an Employee.
```
### Composition

Represents a has-a relationship.
```
Car has an Engine.
Student has an Address.
Order has Products.
```
## 6. Creating Related Objects

One simple way to create a composition relationship is to create the contained object separately.

Example:
```
class Engine {

    void start() {
        System.out.println("Engine started");
    }
}
class Car {

    Engine engine;

    void startCar() {
        engine.start();
        System.out.println("Car started");
    }
}
```
Then:
```
public class Main {

    public static void main(String[] args) {

        Engine engine = new Engine();

        Car car = new Car();
        car.engine = engine;

        car.startCar();
    }
}
```
Output:
```
Engine started
Car started
```
The Car uses functionality provided by its Engine object.

## 7. Constructor-Based Composition

A cleaner approach is often to provide the related object through a constructor.

Example:
```
class Car {

    Engine engine;

    Car(Engine engine) {
        this.engine = engine;
    }

    void startCar() {
        engine.start();
        System.out.println("Car started");
    }
}
```
Now we can create the objects:

```Engine engine = new Engine();

Car car = new Car(engine);

car.startCar();
```
The constructor establishes the relationship between the objects.

Conceptually:
```
Engine object
     ↓
Car constructor
     ↓
Car object contains Engine reference
```
## 8. Understanding this

The this keyword refers to the current object.

Consider:
```
class Car {

    Engine engine;

    Car(Engine engine) {
        this.engine = engine;
    }
}
```
There are two variables named engine:
```
this.engine
     ↓
Car's field

engine
     ↓
Constructor parameter
```
The statement:

`this.engine = engine;`

means:

Store the constructor parameter inside the current Car object's engine field.

This pattern is commonly used when establishing object relationships through constructors.

## 9. Composition with Multiple Objects

A class can contain multiple related objects.

For example, an Order may contain:
```
Customer
Product
Payment
```
Example:
```
class Customer {

    String name;
}
class Product {

    String name;
    double price;
}
class Payment {

    String method;
}
```
The Order class can use these objects:
```
class Order {

    Customer customer;
    Product product;
    Payment payment;
}
```
Conceptually:
```
                 Order
                   │
        ┌──────────┼──────────┐
        ↓          ↓          ↓
    Customer    Product    Payment
```
This allows each class to focus on its own responsibility.

## 10. Composition and Reusability

Composition allows objects to be reused in different contexts.

For example, an Address object can be associated with different types of entities:
```
Customer → Address
Employee → Address
Student  → Address
```
Instead of creating separate address fields everywhere, we can create one reusable Address class.

Example:
```
class Customer {

    Address address;
}
class Employee {

    Address address;
}
```
This promotes code reuse without requiring inheritance.

**11.** Aggregation vs Composition

Both aggregation and composition describe relationships between objects.

At a beginner level, the key distinction is the ownership and lifetime relationship.

#### Aggregation

Aggregation represents a weaker "has-a" relationship.

The contained object can exist independently of the containing object.

Example:

`Department has Employees.`

An employee can exist even if a particular department is removed.

Conceptually:

`Department ─────→ Employee`

The employee has an independent existence.

#### Composition

Composition represents a stronger ownership relationship.

The contained object is considered part of the containing object.

For example:

`Order has OrderItems.`

An OrderItem exists as part of an order and normally does not have meaning independently of that order.

Conceptually:
```
Order
 ├── OrderItem
 ├── OrderItem
 └── OrderItem
```
In Java, both relationships are commonly represented using object references. The distinction is mainly about the design and ownership relationship rather than a special Java keyword.

## 12. When Should You Prefer Composition?

Composition is often a good choice when you want to combine different behaviors or responsibilities without creating a rigid inheritance hierarchy.

For example:
```
Car
 ├── Engine
 ├── Transmission
 └── GPS
```
Instead of creating many specialized subclasses:
```
CarWithEngine
CarWithGPS
CarWithEngineAndGPS
CarWithEngineAndGPSAndTransmission
```
we can compose the required objects:
```
class Car {

    Engine engine;
    GPS gps;
    Transmission transmission;
}
```
This can make the design easier to change and extend.

## 13. Composition Over Inheritance

A common object-oriented design principle is:

Prefer composition over inheritance when inheritance does not represent a strong "is-a" relationship.

For example, suppose a Car needs an engine.

It would not make sense to write:
```
class Car extends Engine {

}
```
A car is not an engine.

Instead:
```
class Car {

    Engine engine;
}
```
A car has an engine.

The correct relationship is therefore composition.

## 14. Complete Example

Let's build a simple computer system.

Processor Class
```
class Processor {

    void start() {
        System.out.println("Processor started");
    }
}
```
Computer Class
```
class Computer {

    private Processor processor;

    Computer(Processor processor) {
        this.processor = processor;
    }

    void startComputer() {
        processor.start();
        System.out.println("Computer started");
    }
}
```
Main Class
```
public class Main {

    public static void main(String[] args) {

        Processor processor = new Processor();

        Computer computer = new Computer(processor);

        computer.startComputer();
    }
}
```
Output:
```
Processor started
Computer started
```
The Computer does not inherit from Processor.

Instead, it contains a Processor object.

This is composition.

## 15. Guided Practice

Let's create a simple Library system using composition.

#### Step 1: Create the Book Class

Create a class named Book.

Add:
```
title
author
```
Use appropriate data types.

Add a method:

`displayBook()`

that displays the book's title and author.

Start with:
```
class Book {

    // Add fields and method here

}
```
#### Step 2: Create the Library Class

Create a class named Library.

Add a field:

book

The field should refer to a Book object.

Start with:
```
class Library {

    Book book;

}
```
#### Step 3: Create a Constructor

Create a constructor for Library that accepts a Book object.

Store it using:

`this.book = book;`
#### Step 4: Add a Library Method

Create:

`displayBookDetails()`

Inside the method, call:

`book.displayBook();`
#### Step 5: Create the Objects

Inside main():

`Book book = new Book();`

Assign:
```
Title: Clean Code
Author: Robert Martin
```
Then create:

`Library library = new Library(book);`
## Step 6: Display the Details

Call:

`library.displayBookDetails();`

Expected output:
```
Title: Clean Code
Author: Robert Martin
```
Observe that:

Library has a Book.

This is a composition relationship.

## 16. Knowledge Check

Use the questions below to check your understanding before moving to the activity.

### Question 1

Which relationship is represented by composition?

**A.** is-a

**B.** has-a

**C.** extends-a

**D.** overrides-a

<details> <summary>Show Answer</summary>

Answer: B

Composition generally represents a "has-a" relationship between objects.

</details>

### Question 2

Which relationship is appropriate for:

Car _____ Engine

**A.** is-a

**B.** has-a

**C.** extends-a

**D.** overrides-a

<details> <summary>Show Answer</summary>

Answer: B

A car has an engine, so composition is appropriate.

</details>

### Question 3

Consider:
```
class Car {

    Engine engine;
}
```
What does this represent?

**A.** Inheritance

**B.** Method overriding

**C.** Composition

**D.** Method overloading

<details> <summary>Show Answer</summary>

Answer: C

The Car class contains a reference to an Engine object, representing a "has-a" relationship.

</details>

### Question 4

What does this statement mean?

`this.engine = engine;`

**A.** It creates a new engine.

**B.** It assigns the constructor parameter to the current object's engine field.

**C.** It deletes the engine.

**D.** It creates an inheritance relationship.

<details> <summary>Show Answer</summary>

Answer: B

this.engine refers to the current object's field, while engine refers to the constructor parameter.

</details>

### Question 5

Which statement is generally correct?

**A.** A class must use inheritance whenever another object is involved.

**B.** Composition can be used when one object has or uses another object.

**C.** Composition requires the extends keyword.

**D.** Java has a special composition keyword.

<details> <summary>Show Answer</summary>

Answer: B

Composition is commonly implemented by having one class contain a reference to another object.

</details>

### 17. Key Takeaways

After completing this module, remember:

- Composition represents a "has-a" relationship between objects.
- Objects can contain references to other objects.
- Composition allows classes to collaborate without requiring inheritance.
- Inheritance generally represents an "is-a" relationship.
- Constructor injection can be used to establish object relationships.
- this refers to the current object.
- Aggregation represents a weaker ownership relationship.
- Composition represents a stronger ownership relationship.
- Both aggregation and composition are commonly represented using object references in Java.
- Composition can improve flexibility and separation of responsibilities.
- Prefer composition when inheritance does not represent a meaningful "is-a" relationship.
### 18. Completion Check

Before moving to the activity, the learner should be able to:

 - Explain what composition means.
 - Identify a "has-a" relationship.
 - Distinguish between "is-a" and "has-a" relationships.
 - Create a class containing another object.
 - Establish an object relationship through a constructor.
 - Explain the purpose of this.
 - Explain why composition can reduce rigid inheritance relationships.
 - Create a simple composition relationship in Java.
 - Explain why composition can improve code organization and flexibility.

If you can confidently complete all of the above, continue to the Module 6 Activity: Build a Library System.
