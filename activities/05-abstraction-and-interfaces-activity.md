# Module 5 Activity: Build an Abstract Payment System

**Estimated time:** 25 minutes

## Activity Objective

By the end of this activity, learners will be able to:

> Apply abstraction by creating an abstract class, implementing abstract methods in child classes, and using an interface to define a common payment capability.

---

## Scenario

You are building a simple payment system.

The application supports different payment methods:

- Credit Card
- UPI
- Cash

All payment methods need to perform a payment, but the implementation can be different for each method.

You will first create an **abstract class** for common payment behavior and then create an **interface** to represent a payment capability.

---

# Part A: Abstract Class

## Task 1: Create the Abstract Parent Class

Create an abstract class named `Payment`.

Add an abstract method:

```java
abstract void pay();
```
Also add a concrete method named displayMessage():
```
void displayMessage() {
    System.out.println("Processing payment...");
}
```
Your class should have this structure:
```
abstract class Payment {

    abstract void pay();

    void displayMessage() {
        System.out.println("Processing payment...");
    }
}
```
## Task 2: Create the Credit Card Class

Create a class named CreditCardPayment that extends Payment.

Implement the pay() method.

It should display:

`Payment made using credit card`

Use the @Override annotation.

Expected structure:
```
class CreditCardPayment extends Payment {

    @Override
    void pay() {
        System.out.println("Payment made using credit card");
    }
}
```
## Task 3: Create the UPI Class

Create another class named UPIPayment that extends Payment.

Implement the pay() method.

It should display:

`Payment made using UPI`

Use the @Override annotation.

## Task 4: Use the Abstract Class Reference

Inside main(), create a Payment reference:

Payment payment;

Assign a CreditCardPayment object:
```
payment = new CreditCardPayment();

payment.displayMessage();
payment.pay();
```
Then assign a UPIPayment object:
```
payment = new UPIPayment();

payment.displayMessage();
payment.pay();
```
Expected output:
```
Processing payment...
Payment made using credit card
Processing payment...
Payment made using UPI
```
# Part B: Interface
## Task 5: Create a Payment Interface

Create an interface named Refundable.

Add a method:

`void refund();`

The interface should represent a payment method that supports refunds.

Start with:
```
interface Refundable {

    void refund();
}
```
## Task 6: Implement the Interface

Modify CreditCardPayment so that it implements Refundable.

Your class should now be:
```
class CreditCardPayment extends Payment implements Refundable {

    @Override
    void pay() {
        System.out.println("Payment made using credit card");
    }

    @Override
    public void refund() {
        System.out.println("Credit card payment refunded");
    }
}
```
Notice that the interface method is implemented as public.

## Task 7: Use the Interface

Create a Refundable reference:

`Refundable refundable = new CreditCardPayment();`

Call:

`refundable.refund();`

Expected output:

`Credit card payment refunded`

The reference type is the interface, while the actual object is CreditCardPayment.

# Part C: Combine Abstraction and Polymorphism
## Task 8: Create a Payment Array

Create an array using the abstract parent type:
```
Payment[] payments = {
    new CreditCardPayment(),
    new UPIPayment()
};
```
Use a loop:
```
for (Payment payment : payments) {
    payment.displayMessage();
    payment.pay();
}
```
Expected output:
```
Processing payment...
Payment made using credit card
Processing payment...
Payment made using UPI
```
The loop works with the common Payment type without needing separate code for each payment method.

### Task 9: Add Another Payment Method

Create a class named CashPayment that extends Payment.

Implement pay() so that it displays:

`Payment made using cash`

Add it to the payments array.

Expected output should now include:
```
Payment made using cash
Challenge: Add Another Interface
```
Create an interface named ReceiptGenerator.

Add:

`void generateReceipt();`

Make CreditCardPayment implement this interface.

Implement the method so that it displays:

`Receipt generated for credit card payment`

Then create an interface reference:

`ReceiptGenerator receipt = new CreditCardPayment();`

Call:

`receipt.generateReceipt();`

Expected output:

`Receipt generated for credit card payment`
## Self-Check

Before completing the activity, verify the following:

 - I created an abstract Payment class.
 - I added an abstract pay() method.
 - I added a concrete displayMessage() method.
 - I created CreditCardPayment.
 - I created UPIPayment.
 - Both child classes extend Payment.
 - Both child classes implement pay().
 - I used @Override.
 - I used a Payment reference with different child objects.
 - I created a Refundable interface.
 - I implemented Refundable in CreditCardPayment.
 - I used a Refundable reference.
 - I used an array of Payment references.
 - I attempted the CashPayment challenge.
 - I attempted the ReceiptGenerator extension challenge.
## Reflection

After completing the activity, answer these questions.

**1.** Why is Payment declared as an abstract class?

### Write your answer:

**2.** Why can't you create this object directly?
`Payment payment = new Payment();`

### Write your answer:

**3.** What is the difference between extends and implements in this activity?

### Write your answer:

**4.** Why can a Payment reference refer to a CreditCardPayment object?

## Write your answer:

**5.** What does the Refundable interface represent?

### Write your answer:

## Success Criteria

The activity is successfully completed when the learner can:

- Create an abstract class.
- Define an abstract method.
- Create concrete child classes from an abstract class.
- Implement abstract methods using @Override.
- Use an abstract parent reference with different child objects.
- Create and implement an interface.
- Use an interface reference with an implementing object.
- Explain the difference between extends and implements.
- Explain how abstraction and polymorphism work together.
## Extension Challenge

Consider the following design:
```
                Payment
                   │
          ┌────────┴────────┐
          │                 │
   CreditCardPayment    UPIPayment
          │
          ├── Refundable
          │
          └── ReceiptGenerator
```
Think about why interfaces are useful here.

A payment class can inherit common payment behavior from Payment while also supporting additional capabilities such as:
```
Refunds
Receipt generation
Optional Question
```
Why might it be better to represent Refundable as an interface instead of adding refund() directly to the Payment class?

### Write your answer:

## Completion Check

Before moving to the assessment, make sure you can explain:

> "An abstract class can provide a common foundation, while interfaces can define additional capabilities that implementing classes agree to provide."

If you can explain this concept and successfully complete the coding tasks, continue to the Module 5 Assessment: Abstraction & Interfaces.
