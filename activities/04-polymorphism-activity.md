# Module 4 Activity: Build a Polymorphic Employee System

**Estimated time:** 25 minutes

## Activity Objective

By the end of this activity, learners will be able to:

> Apply polymorphism by creating a parent class with overridden methods and using a parent reference to work with different child objects.

---

## Scenario

You are building a simple employee management system.

Different types of employees perform different kinds of work.

For example:

**Developer:**
- Writes code

**Designer:**
- Creates designs

**Tester:**
- Tests software

All of them are employees, so they can share a common parent class.

However, each employee type should provide its own implementation of the `work()` method.

You will use inheritance and polymorphism to build this system.

---

## Task 1: Create the Parent Class

Create a class named `Employee`.

Add a method named:

```text
work()
```

The method should display:

Employee is working

Start with:
```
class Employee {

    void work() {
        // Add implementation here
    }
}
```
## Task 2: Create the Developer Class

Create a class named Developer that extends Employee.

Override the work() method.

The method should display:

Developer is writing code

Use the @Override annotation.

Expected structure:
```
class Developer extends Employee {

    @Override
    void work() {
        System.out.println("Developer is writing code");
    }
}
```
## Task 3: Create the Designer Class

Create another class named Designer that extends Employee.

Override the work() method.

The method should display:

`Designer is creating designs`

Use the @Override annotation.

## Task 4: Create the Tester Class

Create another child class named Tester.

It should extend Employee.

Override the work() method so that it displays:

`Tester is testing software`

## Task 5: Use a Parent Reference

Inside the main() method, create an Employee reference:

Employee employee;

Assign a Developer object to it:
```
employee = new Developer();
employee.work();
```
Then assign a Designer object:
```
employee = new Designer();
employee.work();
```
Finally, assign a Tester object:
```
employee = new Tester();
employee.work();
```
Expected output:
```
Developer is writing code
Designer is creating designs
Tester is testing software
```
Notice that the same employee reference is used with three different objects.

## Task 6: Use Polymorphism with an Array

Create an array containing different employee types:
```
Employee[] employees = {
    new Developer(),
    new Designer(),
    new Tester()
};
```
Use a for loop to call work() for each employee.

Example:
```
for (Employee employee : employees) {
    employee.work();
}
```
Expected output:
```
Developer is writing code
Designer is creating designs
Tester is testing software
```
The loop does not need to know the specific type of each employee.

Each object provides its own implementation of work().

## Task 7: Understand What Happened

Look at:

`Employee employee = new Developer();`

Identify the following:

Reference type:

Actual object type:

Method called:

Implementation that runs:

The expected answers are:
```
Reference type: Employee
Actual object type: Developer
Method called: work()
Implementation that runs: Developer's work()
```
### Challenge: Add a Manager

Create another class named Manager that extends Employee.

Override work() so that it displays:

`Manager is managing the team`

Add a Manager object to the employees array.

Your program should now produce:
```
Developer is writing code
Designer is creating designs
Tester is testing software
Manager is managing the team
```
## Self-Check

Before completing the activity, verify the following:

 - I created an Employee parent class.
 - I created a Developer child class.
 - I created a Designer child class.
 - I created a Tester child class.
 - Each child class overrides work().
 - I used the @Override annotation.
 - I created an Employee reference.
 - I assigned different child objects to the reference.
 - I called work() through the parent reference.
 - I created an array of Employee references.
 - I used a loop to call work().
 - I attempted the Manager challenge.

## Reflection

After completing the activity, answer these questions.

**1.** Why can an Employee reference refer to a Developer object?

#### Write your answer:

**2.** Why does employee.work() produce different output for different objects?

#### Write your answer:

**3.** What is the benefit of using Employee[] instead of creating separate arrays for Developer, Designer, and Tester?

#### Write your answer:

**4.** What role does method overriding play in polymorphism?

#### Write your answer:

## Success Criteria

The activity is successfully completed when the learner can:

- Create a parent class with a common method.
- Create multiple child classes using inheritance.
- Override the parent method in each child class.
- Use @Override correctly.
- Store a child object in a parent-class reference.
- Call an overridden method through a parent reference.
- Explain why different objects produce different behavior.
- Use polymorphism with an array of related objects.

## Extension Challenge

Modify the Employee class by adding:
```
void introduce() {
    System.out.println("I am an employee");
}
```
Then create a method in main() that accepts an Employee parameter:
```
static void performWork(Employee employee) {
    employee.work();
}
```
Call it with different objects:
```
performWork(new Developer());
performWork(new Designer());
performWork(new Tester());
```
Observe that the same method can accept different employee types.

## Optional Question

> Why does performWork() not need separate methods for Developer, Designer, and Tester?

#### Write your answer:

## Completion Check

Before moving to the assessment, make sure you can explain:

> "Polymorphism allows different child objects to be handled through a common parent type while providing their own behavior."

If you can explain this concept and successfully complete the coding tasks, continue to the Module 4 Assessment: Polymorphism.
