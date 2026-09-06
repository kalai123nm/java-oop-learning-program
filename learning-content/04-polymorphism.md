# Module 4: Polymorphism

**Estimated time:** 40 minutes

## Learning Objective

By the end of this module, learners will be able to:

> Explain how polymorphism allows objects of different classes to be treated through a common parent type, and implement basic method overriding in Java.

---

## 1. Why Do We Need Polymorphism?

Imagine you are building a payment system.

The system supports different payment methods:

- Credit Card
- UPI
- PayPal

Each payment method needs to perform a payment, but the implementation may be different.

Without polymorphism, we might write separate code for every payment type:

```java
CreditCard card = new CreditCard();
card.pay();

UPI upi = new UPI();
upi.pay();

PayPal paypal = new PayPal();
paypal.pay();
```
As the application grows, managing each type separately can become difficult.

Polymorphism allows us to work with different related objects through a common parent type.

For example:
```
Payment payment;

payment = new CreditCard();
payment.pay();

payment = new UPI();
payment.pay();

payment = new PayPal();
payment.pay();
```
The same payment reference can refer to different objects.

The behavior of pay() can change depending on the actual object.

## 2. What Is Polymorphism?

Polymorphism means "many forms."

In object-oriented programming, polymorphism allows the same interface or method call to represent different behaviors depending on the object involved.

For example:
```
Payment
   │
   ├── CreditCard
   ├── UPI
   └── PayPal
```
Each payment type can provide its own implementation of pay().

Conceptually:
```
payment.pay()
     ↓
 ┌───────────────┐
 │ Actual object │
 └───────────────┘
     ↓
 ┌───────┬─────┬────────┐
 ↓       ↓     ↓
Card    UPI   PayPal
```
The same method call can produce different behavior.

## 3. Method Overriding

One of the most important ways Java supports runtime polymorphism is method overriding.

Method overriding occurs when a child class provides its own implementation of a method that is already defined in the parent class.

Example:
```
class Animal {

    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}
```
A child class can override the method:
```
class Dog extends Animal {

    @Override
    void makeSound() {
        System.out.println("Dog barks");
    }
}
```
Another child class can provide a different implementation:
```
class Cat extends Animal {

    @Override
    void makeSound() {
        System.out.println("Cat meows");
    }
}
```
Now:
```
Dog dog = new Dog();
dog.makeSound();

Cat cat = new Cat();
cat.makeSound();
```
Output:
```
Dog barks
Cat meows
```
Both classes use the same method name, but the behavior is different.

## 4. The ` @Override ` Annotation

Java provides the @Override annotation to indicate that a method is intended to override a parent method.

Example:
```
class Dog extends Animal {

    @Override
    void makeSound() {
        System.out.println("Dog barks");
    }
}
```
The annotation helps the compiler verify that the method correctly overrides a method from the parent class.

It also makes the code easier to understand.

A good practice is to use @Override when overriding a method.

## 5. Parent Reference and Child Object

Polymorphism becomes especially useful when a parent-class reference refers to a child-class object.

Example:

`Animal animal = new Dog();`

Here:

Animal is the reference type.
Dog is the actual object type.

We can call:

`animal.makeSound();`

Output:

Dog barks

Even though the reference type is Animal, Java uses the overridden method belonging to the actual Dog object.

This is an important concept in runtime polymorphism.

## 6. Runtime Polymorphism

When an overridden method is selected based on the actual object at runtime, this is commonly called runtime polymorphism or dynamic method dispatch.

Consider:
```
Animal animal;

animal = new Dog();
animal.makeSound();

animal = new Cat();
animal.makeSound();
```
Output:
```
Dog barks
Cat meows
```
The reference remains of type Animal, but the actual object changes.

Therefore, the behavior of makeSound() changes.

## 7. Why Is This Useful?

Imagine a system that processes different types of animals.

Instead of writing:
```
Dog dog = new Dog();
dog.makeSound();

Cat cat = new Cat();
cat.makeSound();
```
We can work with the common parent type:
```
Animal animal1 = new Dog();
Animal animal2 = new Cat();

animal1.makeSound();
animal2.makeSound();
```
This allows the program to work with different child types using a common structure.

## 8. Polymorphism with Multiple Objects

Polymorphism becomes even more useful when working with collections of related objects.

For example:
```
Animal[] animals = {
    new Dog(),
    new Cat()
};
```
We can then process them using the common parent type:
```
for (Animal animal : animals) {
    animal.makeSound();
}
```
Output:
```
Dog barks
Cat meows
```
The loop does not need to know whether each object is a Dog or a Cat.

Each object provides its own implementation of makeSound().

## 9. Inheritance and Polymorphism

Inheritance and polymorphism are closely related, but they are not the same concept.

Inheritance

Inheritance establishes a relationship between classes.
```
class Dog extends Animal {

}
```
This means:
```
Dog is an Animal.
Polymorphism
```
Polymorphism allows related objects to be handled through a common type.

`Animal animal = new Dog();`

And an overridden method can provide specialized behavior:

`animal.makeSound();`

So:
```
Inheritance
     ↓
Creates related types
     ↓
Polymorphism
     ↓
Allows common handling with different behavior
```
## 10. A Complete Example

Let's build a simple notification system.

Parent Class
```
class Notification {

    void send() {
        System.out.println("Sending notification");
    }
}
```
Email Notification
```
class EmailNotification extends Notification {

    @Override
    void send() {
        System.out.println("Sending email");
    }
}
```
SMS Notification
```
class SMSNotification extends Notification {

    @Override
    void send() {
        System.out.println("Sending SMS");
    }
}
```
Using Polymorphism
```
public class Main {

    public static void main(String[] args) {

        Notification notification;

        notification = new EmailNotification();
        notification.send();

        notification = new SMSNotification();
        notification.send();
    }
}
```
Output:
```
Sending email
Sending SMS
```
The same notification.send() call produces different behavior depending on the actual object.

## 11. Guided Practice

Let's create a simple employee system using polymorphism.

### Step 1: Create the Parent Class

Create a class named Employee.

Add a method:
```
void work() {
    System.out.println("Employee is working");
}
```
Start with:
```
class Employee {

    void work() {
        // Add implementation here
    }
}
```
### Step 2: Create the Developer Class

Create a class named Developer that extends Employee.

Override the work() method.

The method should display:

Developer is writing code

Use the @Override annotation.

### Step 3: Create the Designer Class

Create another child class named Designer.

It should also extend Employee.

Override work() so that it displays:

Designer is creating designs

### Step 4: Use a Parent Reference

Create:

`Employee employee;`

Assign a Developer object:
```
employee = new Developer();
employee.work();
```
Then assign a Designer object:
```
employee = new Designer();
employee.work();
```
Observe how the same reference can work with different objects.

### Step 5: Use an Array

Create:
```
Employee[] employees = {
    new Developer(),
    new Designer()
};
```
Use a loop to call:

`employee.work();`

for each object.

Observe how each object provides its own behavior.

### 12. Knowledge Check

Use the questions below to check your understanding before moving to the activity.

### Question 1

What does polymorphism mean?

**A.** One class can have only one object.

**B.** Different related objects can provide different behavior through a common type.

**C.** All methods must have different names.

**D.** A class cannot inherit from another class.

<details> <summary>Show Answer</summary>

Answer: B

Polymorphism allows related objects to be handled through a common type while providing different behavior.

</details>

### Question 2

What is method overriding?

**A.** Creating a completely unrelated method in a class.

**B.** Removing a method from the parent class.

**C.** Providing a child-class implementation of a method defined in the parent class.

**D.** Creating multiple objects from one class.

<details> <summary>Show Answer</summary>

Answer: C

Method overriding occurs when a child class provides its own implementation of a parent method.

</details>

### Question 3

Consider:

`Animal animal = new Dog();`

What does this represent?

**A.** A Dog reference containing an Animal object.

**B.** An Animal reference referring to a Dog object.

**C.** Two separate objects.

**D.** An invalid inheritance relationship.

<details> <summary>Show Answer</summary>

Answer: B

The reference type is Animal, while the actual object created is a Dog.

</details>

### Question 4

Why is @Override useful?

**A.** It creates a new object.

**B.** It makes a field private.

**C.** It tells the compiler that a method is intended to override a parent method.

**D.** It prevents inheritance.

<details> <summary>Show Answer</summary>

Answer: C

@Override helps the compiler verify that the method correctly overrides a parent method.

</details>

### Question 5

Consider:
```
Animal animal = new Dog();
animal.makeSound();
```
If Dog overrides `makeSound()`, which implementation is used?

**A.** The Animal implementation is always used.

**B.** The Dog implementation is used.

**C.** Both implementations are always executed.

**D.** The program cannot compile.

<details> <summary>Show Answer</summary>

Answer: B

For an overridden instance method, Java uses the implementation belonging to the actual object at runtime.

</details>

## 13. Key Takeaways

After completing this module, remember:

- Polymorphism means "many forms."
- Polymorphism allows related objects to be handled through a common type.
- Method overriding allows a child class to provide its own implementation of a parent method.
- The @Override annotation helps verify that a method correctly overrides a parent method.
- A parent reference can refer to a child object.
- At runtime, an overridden method is selected based on the actual object.
- Polymorphism makes code more flexible when working with different related object types.
- Inheritance establishes relationships between classes, while polymorphism allows those related objects to behave differently through a common type.

## 14. Completion Check

Before moving to the activity, the learner should be able to:

 - Explain what polymorphism means.
 - Explain method overriding.
 - Identify when a child class overrides a parent method.
 - Use the @Override annotation correctly.
 - Explain the difference between a reference type and an actual object type.
 - Create a parent reference that refers to a child object.
 - Explain why an overridden method can produce different behavior.
 - Use polymorphism with multiple related objects.
 - Explain how inheritance and polymorphism work together.

If you can confidently complete all of the above, continue to the Module 4 Activity: Build a Polymorphic Employee System.
