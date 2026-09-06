# Module 5: Abstraction & Interfaces

**Estimated time:** 45 minutes

## Learning Objective

By the end of this module, learners will be able to:

> Explain how abstraction hides implementation details and implement basic abstraction using abstract classes and interfaces in Java.

---

## 1. Why Do We Need Abstraction?

Imagine you are using an ATM.

You can perform actions such as:

- Withdraw money
- Deposit money
- Check your balance

You do not need to know how the ATM communicates with the bank server or how the transaction is processed internally.

You only interact with the functionality you need.

This is the basic idea behind **abstraction**.

Abstraction allows us to focus on **what an object does** without requiring us to know all the details of **how it does it**.

---

## 2. What Is Abstraction?

**Abstraction** is an object-oriented programming concept that hides unnecessary implementation details and exposes the essential functionality of an object.

For example:

```text
User
  ↓
Uses payment()
  ↓
Payment system
  ↓
Internal processing
```
The user only needs to know that a payment can be made.

The internal implementation can remain hidden.

Abstraction helps make software easier to understand and maintain by exposing only what is necessary.

## 3. Real-World Example

Consider a vehicle.

A driver knows how to:

- Start the vehicle
- Accelerate
- Brake
- Turn

The driver does not need to understand every internal engine operation.

Conceptually:
```
Vehicle
│
├── start()
├── accelerate()
└── brake()
```
The methods represent actions available to the user.

The internal implementation of those actions can be hidden.

This is the idea of abstraction.

## 4. Abstract Classes

Java provides abstract classes as one way to implement abstraction.

An abstract class is declared using the abstract keyword.

Example:
```
abstract class Animal {

    abstract void makeSound();

}
```
Here:

- Animal is an abstract class.
- `makeSound()` is an abstract method.
- The abstract method does not have an implementation in the parent class.

A child class must provide the implementation.

For example:
```
class Dog extends Animal {

    @Override
    void makeSound() {
        System.out.println("Dog barks");
    }
}
```
## 5. Abstract Methods

An abstract method is a method declared without an implementation.

Example:

`abstract void makeSound();`

Notice that there is no method body.

Compare this with a normal method:
```
void sleep() {
    System.out.println("Animal is sleeping");
}
```
An abstract class can contain both abstract and concrete methods.

Example:
```
abstract class Animal {

    abstract void makeSound();

    void sleep() {
        System.out.println("Animal is sleeping");
    }
}
```
A child class must implement the abstract methods it inherits, unless the child class is also abstract.

## 6. Creating an Object from an Abstract Class

An abstract class cannot be instantiated directly.

This is not allowed:

`Animal animal = new Animal();`

Instead, we create an object of a concrete child class:

`Animal animal = new Dog();`

Here:
```
Animal is the reference type.
Dog is the actual object type.
```
This also allows abstraction and polymorphism to work together.

## 7. Complete Abstract Class Example

Let's create a simple payment system.

Abstract Parent Class
```
abstract class Payment {

    abstract void pay();

    void displayMessage() {
        System.out.println("Processing payment");
    }
}
```
Credit Card Class
```
class CreditCardPayment extends Payment {

    @Override
    void pay() {
        System.out.println("Payment made using credit card");
    }
}
```
UPI Class
```
class UPIPayment extends Payment {

    @Override
    void pay() {
        System.out.println("Payment made using UPI");
    }
}
```
Using the Classes
```
public class Main {

    public static void main(String[] args) {

        Payment payment = new CreditCardPayment();

        payment.displayMessage();
        payment.pay();

        payment = new UPIPayment();

        payment.displayMessage();
        payment.pay();
    }
}
```
Output:
```
Processing payment
Payment made using credit card
Processing payment
Payment made using UPI
```
The abstract class defines the common structure, while each child class provides its own implementation.

## 8. Why Use Abstract Classes?

Abstract classes are useful when related classes share common characteristics or behavior but should not be instantiated directly.

For example:
```
Payment
   │
   ├── CreditCardPayment
   ├── UPIPayment
   └── CashPayment
```
All payment types are payments, but each type can implement the payment operation differently.

An abstract class can provide:
```
Common fields
Common methods
Abstract methods that child classes must implement
```
## 9. Interfaces

Java also provides interfaces as another way to define abstraction.

An interface describes a contract that implementing classes agree to follow.

Example:
```
interface Printable {

    void print();
}
```
A class can implement the interface:
```
class Report implements Printable {

    @Override
    public void print() {
        System.out.println("Printing report");
    }
}
```
The implements keyword establishes the relationship between a class and an interface.

## 10. Implementing an Interface

Consider:
```
interface PaymentMethod {

    void pay();
}
```
Different classes can implement the interface:
```
class CreditCard implements PaymentMethod {

    @Override
    public void pay() {
        System.out.println("Paying with credit card");
    }
}
class UPI implements PaymentMethod {

    @Override
    public void pay() {
        System.out.println("Paying with UPI");
    }
}
```
Both classes follow the same contract:
```
PaymentMethod
      │
      ├── CreditCard
      └── UPI
```
Each class provides its own implementation.

## 11. Interface Reference

Just like a parent-class reference can refer to a child object, an interface reference can refer to an implementing class object.

Example:

```PaymentMethod payment = new CreditCard();

payment.pay();
```

We can then assign another implementation:
```
payment = new UPI();

payment.pay();
```
Output:
```
Paying with credit card
Paying with UPI
```
This combines abstraction and polymorphism.

The code works with the PaymentMethod interface without needing to depend directly on a specific payment implementation.

## 12. Abstract Class vs Interface

Both abstract classes and interfaces can be used to achieve abstraction, but they serve different purposes.

| Feature                      | Abstract Class                    | Interface                                     |
| ---------------------------- | --------------------------------- | --------------------------------------------- |
| Keyword                      | `abstract class`                  | `interface`                                   |
| Implemented by               | `extends`                         | `implements`                                  |
| Can contain fields           | Yes                               | Can contain constants                         |
| Can contain concrete methods | Yes                               | Yes, including `default` and `static` methods |
| Can contain abstract methods | Yes                               | Yes                                           |
| Constructors                 | Yes                               | No                                            |
| Multiple inheritance         | A class can extend only one class | A class can implement multiple interfaces     |
| Main purpose                 | Share common state and behavior   | Define a contract/capability                  |


For beginner-level development, a useful mental model is:
```
Abstract Class
     ↓
"What common foundation do these related classes share?"

Interface
     ↓
"What capability or contract must these classes provide?"
```
## 13. Multiple Interfaces

A Java class can implement more than one interface.

For example:
```
interface Printable {

    void print();
}
interface Scannable {

    void scan();
}
```
A class can implement both:
```
class Printer implements Printable, Scannable {

    @Override
    public void print() {
        System.out.println("Printing...");
    }

    @Override
    public void scan() {
        System.out.println("Scanning...");
    }
}
```
This allows a class to support multiple capabilities.

Conceptually:
```
Printable ───┐
             ├── Printer
Scannable ───┘
```
### 14. Abstraction and Polymorphism

Abstraction and polymorphism often work together.

Consider:
```
interface Notification {

    void send();
}
```
Different classes implement it:
```
class EmailNotification implements Notification {

    @Override
    public void send() {
        System.out.println("Sending email");
    }
}
class SMSNotification implements Notification {

    @Override
    public void send() {
        System.out.println("Sending SMS");
    }
}
```
Now we can use:
```
Notification notification = new EmailNotification();
notification.send();

notification = new SMSNotification();
notification.send();
```
Output:
```
Sending email
Sending SMS
```
The interface provides abstraction.

The different implementations provide polymorphic behavior.

## 15. Choosing Between Abstract Classes and Interfaces

A useful decision process is:

- Use an Abstract Class When:
- Classes have a strong parent-child relationship.
- They share common state.
- They share common implementation.
- You want to provide some common behavior and leave some behavior abstract.

Example:
```
Employee
   │
   ├── Developer
   └── Designer
```
Use an Interface When:
- You want to define a common capability or contract.
- Unrelated classes may need the same capability.
- A class may need to implement multiple capabilities.

Example:
```
Printable
   │
   ├── Report
   ├── Invoice
   └── Photo
```
## 16. Guided Practice

Let's create a simple notification system using an interface.

#### Step 1: Create the Interface

Create an interface named Notification.

Add:

`void send();`

Start with:
```
interface Notification {

    void send();
}
```
#### Step 2: Create EmailNotification

Create a class named EmailNotification that implements Notification.

Implement send() so it displays:

`Sending email notification`

#### Step 3: Create SMSNotification

Create a class named SMSNotification that implements Notification.

Implement send() so it displays:

`Sending SMS notification`
#### Step 4: Use an Interface Reference

Create:

Notification notification;

Assign:
```
notification = new EmailNotification();
notification.send();
```
Then:
```
notification = new SMSNotification();
notification.send();
```
Observe how the same interface reference works with different implementations.

## Step 5: Use an Array

Create:
```
Notification[] notifications = {
    new EmailNotification(),
    new SMSNotification()
};
```
Use a loop to call send() for each notification.

Expected output:
```
Sending email notification
Sending SMS notification
```
## 17. Knowledge Check

Use the questions below to check your understanding before moving to the activity.

### Question 1

What is the main purpose of abstraction?

**A.** To expose every implementation detail.

**B.** To hide unnecessary implementation details and expose essential functionality.

**C.** To prevent classes from being created.

**D.** To remove inheritance.

<details> <summary>Show Answer</summary>

Answer: B

Abstraction focuses on essential functionality while hiding unnecessary implementation details.

</details>

### Question 2

Which keyword is used to declare an abstract class?

**A.** interface

**B.** extends

**C.** abstract

**D.** implements

<details> <summary>Show Answer</summary>

Answer: C

An abstract class is declared using the abstract keyword.

</details>

### Question 3

Can an abstract class be instantiated directly?

**A.** Yes

**B.** No

**C.** Only if it has no methods

**D.** Only inside main()

<details> <summary>Show Answer</summary>

Answer: B

An abstract class cannot be instantiated directly. A concrete child class must be used to create an object.

</details>

### Question 4

Which keyword is used when a class implements an interface?

**A.** extends

**B.** implements

**C.** interface

**D.** abstract

<details> <summary>Show Answer</summary>

Answer: B

A class uses the implements keyword to implement an interface.

</details>

### Question 5

Which statement is correct?

**A.** A class can extend multiple classes.

**B.** A class can implement multiple interfaces.

**C.** An interface must always be instantiated directly.

**D.** An abstract class cannot contain concrete methods.

<details> <summary>Show Answer</summary>

Answer: B

Java does not allow a class to extend multiple classes, but a class can implement multiple interfaces.

</details>

## 18. Key Takeaways

After completing this module, remember:

- Abstraction hides unnecessary implementation details and exposes essential functionality.
- An abstract class can contain abstract and concrete methods.
- An abstract method is declared without an implementation.
- An abstract class cannot be instantiated directly.
- Child classes provide implementations for inherited abstract methods.
- An interface defines a contract that implementing classes agree to follow.
- A class uses implements to implement an interface.
- A class can implement multiple interfaces.
- Abstract classes are useful for sharing common state and behavior.
- Interfaces are useful for defining capabilities or contracts.
- Abstraction and polymorphism can work together to create flexible designs.
## 19. Completion Check

Before moving to the activity, the learner should be able to:

 - Explain what abstraction means.
 - Explain why implementation details may be hidden.
 - Identify an abstract class.
 - Identify an abstract method.
 - Explain why an abstract class cannot be instantiated directly.
 - Create a child class from an abstract class.
 - Implement an abstract method.
 - Create a basic interface.
 - Implement an interface using implements.
 - Explain the difference between an abstract class and an interface.
 - Explain why a class can implement multiple interfaces.
 - Use an interface reference with different implementing objects.
 - Explain how abstraction and polymorphism can work together.

If you can confidently complete all of the above, continue to the Module 5 Activity: Build an Abstract Payment System.
