# Module 2: Encapsulation

**Estimated time:** 40 minutes

## Learning Objective

By the end of this module, learners will be able to:

> Explain the purpose of encapsulation and implement encapsulated Java classes using private fields, public methods, and controlled access to object data.

---

## 1. Why Do We Need Encapsulation?

Imagine a banking application that stores a customer's account balance.

A simple class might look like this:

```java
class BankAccount {

    double balance;
}
```
An object could then be created and its balance changed directly:

BankAccount account = new BankAccount();

account.balance = 10000;
account.balance = -5000;

The problem is that the class has no control over how its data is changed.

A bank account should not allow someone to directly set the balance to an invalid value.

### For example:

account.balance = -5000;

This could create an invalid state.

We need a way to protect an object's data and control how that data can be accessed or modified.

This is where encapsulation becomes important.

## 2. What Is Encapsulation?

Encapsulation is the practice of bundling an object's data and the methods that operate on that data together while restricting direct access to the object's internal state.

In Java, encapsulation is commonly implemented by:

Making fields private.
Providing public methods to access or modify those fields.
Adding validation or rules inside those methods when necessary.

A simple mental model is:

             Encapsulated Object
        ┌──────────────────────────┐
        │                          │
        │   Private Data           │
        │   ─────────────          │
        │   balance                │
        │                          │
        │   Public Methods         │
        │   ──────────────         │
        │   deposit()              │
        │   withdraw()             │
        │                          │
        └──────────────────────────┘
                  ↑
                  │
          Controlled Access

The object's internal data is protected, and other parts of the program interact with the object through defined methods.

## 3. What Does private Mean?

The private access modifier restricts direct access to a field or method.

### For example:

class BankAccount {

    private double balance;
}

The balance field can be accessed directly only from within the BankAccount class.

This means code outside the class cannot do:

BankAccount account = new BankAccount();

account.balance = 5000;

The code will produce an access error because balance is private.

Instead, the class can provide methods that control access to the data.

## 4. Getters and Setters

A common way to provide controlled access to private fields is through getter and setter methods.

### Getter

A getter is a method used to retrieve the value of a private field.

#### Example:

public double getBalance() {
    return balance;
}

The getter allows other parts of the program to read the value without directly accessing the field.

### Setter

A setter is a method used to modify the value of a private field.

#### Example:

public void setBalance(double balance) {
    this.balance = balance;
}

The setter provides a controlled way to change the field.

## 5. Why Use Getters and Setters?

Consider this class:

class Student {

    private int age;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

The field is private, so outside code cannot directly modify it.

Instead, it must use:

Student student = new Student();

student.setAge(20);

System.out.println(student.getAge());

This creates a controlled access point between the object and the rest of the program.

## 6. Adding Validation

One of the biggest advantages of encapsulation is that methods can enforce rules before changing an object's state.

For example, a student's age should not normally be negative.

Instead of allowing:

student.age = -10;

we can control the update:

public void setAge(int age) {

    if (age >= 0) {
        this.age = age;
    }
}

Now the class can prevent invalid data from being stored.

The method becomes a controlled entry point for changing the object's state.

## 7. Understanding this

When a parameter has the same name as a field, Java uses the this keyword to refer to the current object's field.

#### Example:

class Student {

    private String name;

    public void setName(String name) {
        this.name = name;
    }
}

Here:

this.name

refers to the object's field.

While:

name

refers to the method parameter.

#### Conceptually:

setName("Arun")
       │
       ↓
   name parameter
       │
       ↓
this.name = name
     │       │
     │       └── parameter
     │
     └── object's field
8. Encapsulation Example

Let's build an encapsulated BankAccount class.

class BankAccount {

    private String accountHolder;
    private double balance;

    public String getAccountHolder() {
        return accountHolder;
    }

    public void setAccountHolder(String accountHolder) {
        this.accountHolder = accountHolder;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {

        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {

        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}

The fields are private.

The class provides public methods to interact with the data.

The deposit() and withdraw() methods also apply rules before changing the balance.

## 9. Using the Encapsulated Class

We can create a BankAccount object and interact with it through its public methods.

public class Main {

    public static void main(String[] args) {

        BankAccount account = new BankAccount();

        account.setAccountHolder("Arun");

        account.deposit(5000);

        account.withdraw(1000);

        System.out.println(account.getAccountHolder());
        System.out.println(account.getBalance());
    }
}

#### Output:

Arun
4000.0

Notice that we never directly access:

account.balance

The balance is protected inside the object.

Instead, we use:

account.deposit(5000);
account.withdraw(1000);
account.getBalance();

This allows the class to control how its internal data is used.

## 10. Encapsulation vs. Direct Access

#### Without encapsulation:

class BankAccount {

    double balance;
}

External code can directly modify the balance:

account.balance = -5000;

With encapsulation:

class BankAccount {

    private double balance;

    public void deposit(double amount) {

        if (amount > 0) {
            balance += amount;
        }
    }
}

External code cannot directly modify the balance.

Instead:

account.deposit(5000);

The class decides whether the operation is valid.

## 11. Benefits of Encapsulation

Encapsulation provides several important benefits.

### Data Protection

Internal data cannot be directly modified by external code.

### Validation

Methods can check whether new values are valid before changing the object's state.

### Controlled Access

The class decides how its data can be accessed or modified.

### Maintainability

Internal implementation can change without requiring every part of the program to change.

### Reduced Complexity

Other parts of the program only need to know how to use the public methods rather than how the internal data is managed.

## 12. Encapsulation Mental Model

Think of an ATM.

A user does not directly access the bank's database and change their account balance.

Instead, the user interacts through controlled operations:

                 ATM
                  │
        ┌─────────┴─────────┐
        │                   │
     Deposit             Withdraw
        │                   │
        └─────────┬─────────┘
                  ↓
          Bank Account
       ┌──────────────────┐
       │ Private Balance  │
       │ Private Data     │
       └──────────────────┘

The ATM provides controlled operations while the underlying account data remains protected.

This is similar to encapsulation in object-oriented programming.

## 13. Guided Practice

Let's build an encapsulated Employee class.

### Step 1: Identify the Data

An employee can have:

Name
Salary
Department

These will become private fields.

### Step 2: Make the Fields Private

Start with:

class Employee {

    private String name;
    private double salary;
    private String department;
}
### Step 3: Add a Getter

Create a getter for the employee's name:

public String getName() {
    return name;
}
### Step 4: Add a Setter

Create a setter for the employee's name:

public void setName(String name) {
    this.name = name;
}
### Step 5: Add Salary Validation

Salary should not be negative.

#### Create a setter that checks the value:

public void setSalary(double salary) {

    if (salary >= 0) {
        this.salary = salary;
    }
}
### Step 6: Create a Getter for Salary
public double getSalary() {
    return salary;
}
### Step 7: Use the Class
Employee employee = new Employee();

employee.setName("Priya");
employee.setSalary(50000);

System.out.println(employee.getName());
System.out.println(employee.getSalary());

The class controls how its internal data is accessed and modified.

## 14. Knowledge Check

Use the questions below to check your understanding before moving to the activity.

## Question 1

What is the main purpose of encapsulation?

**A.** To create multiple objects

**B.** To protect internal data and control access to it

**C.** To remove methods from a class

**D.** To make every field public

<details> <summary>Show Answer</summary>

Answer: B

Encapsulation protects an object's internal state and provides controlled ways to access or modify it.

</details>

## Question 2

Which access modifier is commonly used to protect fields in an encapsulated class?

**A.** public

**B.** static

**C.** private

**D.** final

<details> <summary>Show Answer</summary>

Answer: C

The private modifier prevents direct access to the field from outside the class.

</details>

## Question 3

What is the purpose of a getter?

**A.** To create an object

**B.** To retrieve the value of a field

**C.** To delete a field

**D.** To make a field private

<details> <summary>Show Answer</summary>

Answer: B

A getter provides controlled access to retrieve a field's value.

</details>

## Question 4

What is one advantage of using a setter instead of allowing direct access to a field?

**A.** The setter can validate the value before changing the field

**B.** The setter automatically creates a class

**C.** The setter removes the field

**D.** The setter makes all fields public

<details> <summary>Show Answer</summary>

Answer: A

A setter can contain validation rules that prevent invalid values from being stored.

</details>

## Question 5

In the following code:

public void setAge(int age) {
    this.age = age;
}

What does this.age refer to?

**A.** The method parameter

**B.** The current object's field

**C.** A new object

**D.** A new class

<details> <summary>Show Answer</summary>

Answer: B

this.age refers to the age field belonging to the current object.

</details>

## 15. Key Takeaways

### After completing this module, remember:

- Encapsulation protects an object's internal state.
- Fields are commonly declared private when using encapsulation.
- Public methods can provide controlled access to private fields.
- Getters are commonly used to retrieve values.
- Setters are commonly used to modify values.
- Setters can contain validation rules.
- The this keyword refers to the current object.
- Encapsulation helps maintain valid object state.
- Encapsulation improves maintainability and reduces unnecessary dependency on internal implementation.
## 16. Completion Check

### Before moving to the activity, the learner should be able to:

- Explain the purpose of encapsulation.
- Explain why fields are commonly declared private.
- Explain the difference between a getter and a setter.
- Create private fields in a Java class.
- Create getter and setter methods.
- Use validation inside a setter or method.
- Explain the purpose of the this keyword.
- Explain how encapsulation provides controlled access to object data.
- Create and use a basic encapsulated Java class.

If you can confidently complete all of the above, continue to the Module 2 Activity: Build an Encapsulated Employee Class.
