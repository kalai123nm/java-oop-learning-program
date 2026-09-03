# Module 2 Assessment: Encapsulation

**Estimated time:** 15 minutes

## Assessment Purpose

This assessment evaluates whether learners can demonstrate their understanding of:

- Encapsulation
- Access modifiers
- Private fields
- Getters and setters
- Controlled access
- Data validation
- The `this` keyword
- Encapsulated Java class design

---

## Learning Outcomes Assessed

By completing this assessment, learners should be able to:

1. Explain the purpose of encapsulation.
2. Identify how private fields protect object data.
3. Explain the purpose of getter and setter methods.
4. Apply validation when modifying object state.
5. Explain the purpose of the `this` keyword.
6. Create an encapsulated Java class using private fields and public methods.

---

# Part A: Knowledge Check

**Instructions:** Select the best answer for each question.

---

## Question 1

What is the primary purpose of encapsulation?

**A.** To make all fields publicly accessible.

**B.** To protect internal data and provide controlled access to it.

**C.** To prevent objects from being created.

**D.** To remove methods from a class.

<details>
<summary>Show Answer</summary>

**Correct Answer: B**

Encapsulation protects an object's internal state and provides controlled ways for other parts of the program to interact with it.

</details>

---

## Question 2

Which access modifier is commonly used for fields in an encapsulated Java class?

**A.** `public`

**B.** `static`

**C.** `private`

**D.** `void`

<details>
<summary>Show Answer</summary>

**Correct Answer: C**

The `private` modifier prevents direct access to the field from outside the class.

</details>

---

## Question 3

Consider:

```java
class Student {

    private int age;
}
```
What does private mean in this example?

**A.** The field can be accessed directly from anywhere.

**B.** The field can only be accessed directly within the Student class.

**C.** The field cannot store a value.

**D.** The field automatically becomes constant.

<details> <summary>Show Answer</summary>

Correct Answer: B

A private field can be directly accessed only from within the class where it is declared.

</details>

## Question 4

What is the primary purpose of a getter?

**A.** To retrieve the value of a private field.

**B.** To delete a private field.

**C.** To create a new object.

**D.** To make a field public.

<details> <summary>Show Answer</summary>

Correct Answer: A

A getter provides a controlled way to retrieve the value of a private field.

</details>

## Question 5

What is one important advantage of using a setter method?

**A.** It automatically creates an object.

**B.** It allows validation before changing an object's state.

**C.** It makes the field public.

**D.** It prevents a field from storing any value.

<details> <summary>Show Answer</summary>

Correct Answer: B

A setter can contain validation rules that prevent invalid values from being assigned.

</details>

## Question 6

Consider the following method:

`public void setAge(int age) {
    this.age = age;
}`

What does this.age refer to?

**A.** The method parameter.

**B.** The current object's age field.

**C.** A new object.

**D.** A new class.

<details> <summary>Show Answer</summary>

Correct Answer: B

this.age refers to the age field belonging to the current object.

</details>

# Part B: Short Answer
## Question 7

> In your own words, explain why encapsulation is useful when designing a class.

### Learner Response
### Expected Understanding

Encapsulation protects an object's internal data and provides controlled ways to access or modify that data. It can also help enforce rules and prevent invalid object states.

## Question 8

What is the difference between a getter and a setter?

### Learner Response
### Expected Understanding

A getter retrieves the value of a field, while a setter changes the value of a field. A setter can also contain validation rules before modifying the object's state.

## Question 9

Why might a class prevent a negative salary from being assigned to an employee?

### Learner Response
### Expected Understanding

A negative salary would represent an invalid state for the employee. Validation prevents invalid data from being stored in the object.

# Part C: Application Task
## Question 10: Build an Encapsulated BankAccount Class

Create a Java class named BankAccount.

The class should contain the following private fields:

- `accountHolder` — the account holder's name
- `balance` — the current account balance

Your class should provide:

- A getter for `accountHolder`
- A setter for `accountHolder`
- A getter for `balance`
- A `deposit()` method
- A `withdraw()`  method
### Requirements

The `deposit()` method should:

- Accept a deposit amount.
- Add the amount to the balance only when the amount is greater than zero.

The `withdraw()` method should:

- Accept a withdrawal amount.
- Subtract the amount only when the amount is greater than zero.
- Prevent the withdrawal if the amount is greater than the current balance.
### Program Requirements

In the main() method:

- Create a BankAccount object.
- Set the account holder's name.
- Deposit money.
- Withdraw money.
- Display the account holder and final balance.
- Test at least one invalid transaction.
#### Expected Example

#### Starting balance:

`0`

#### Deposit:

`5000`

#### Withdrawal:

`1500`

#### Expected final balance:

`3500.0`
#### Learner Solution
// Write your solution here
# Part D: Debugging Task
## Question 11

The following code is intended to represent an encapsulated Employee class:

class Employee {

    private double salary;

    public void setSalary(double salary) {
        this.salary = salary;
    }
}

The requirement is:

> Salary must never be negative.

### Task

Identify the problem with the current implementation and explain how you would improve the setSalary() method.

### Learner Response
### Expected Understanding

The current setter accepts any value, including negative values.

The method should validate the salary before assigning it.

For example:

public void setSalary(double salary) {

    if (salary >= 0) {
        this.salary = salary;
    }
}
# Part E: Reflection
## Question 12

What part of encapsulation was easiest for you to understand?

#### Learner Response

## Question 13

What part of encapsulation would you like to practice further?

#### Learner Response

## Scoring Guide

The assessment contains 13 questions/tasks.

| Section                  | Maximum Score |
| ------------------------ | ------------: |
| Part A: Knowledge Check  |             6 |
| Part B: Short Answer     |             6 |
| Part C: Application Task |            10 |
| Part D: Debugging Task   |             4 |
| Part E: Reflection       |    Not scored |
| **Total Scored Points**  |        **26** |

## Application Task Rubric

The BankAccount programming task is evaluated using the following rubric.

| Criterion                    | Excellent                                           | Developing                        | Needs Improvement                                | Points |
| ---------------------------- | --------------------------------------------------- | --------------------------------- | ------------------------------------------------ | -----: |
| Private fields               | Both required fields are correctly declared private | One field has an issue            | Fields are missing or not private                |      2 |
| Getter/setter implementation | Required getter and setter work correctly           | Minor implementation issues       | Methods are missing or incorrect                 |      2 |
| Deposit logic                | Correctly validates and adds valid deposits         | Minor logic issue                 | Deposit functionality is missing or incorrect    |      2 |
| Withdrawal logic             | Correctly validates amount and available balance    | Minor logic issue                 | Withdrawal functionality is missing or incorrect |      2 |
| Object usage                 | Correctly creates and uses the BankAccount object   | Minor usage issues                | Object is missing or incorrectly used            |      1 |
| Program execution            | Program compiles and produces expected results      | Minor errors requiring correction | Program does not run                             |      1 |
| **Total**                    |                                                     |                                   |                                                  | **10** |

## Debugging Task Rubric

The debugging task is evaluated using the following criteria:

| Criterion                                                | Points |
| -------------------------------------------------------- | -----: |
| Identifies that negative values are currently accepted   |      1 |
| Explains why this creates an invalid object state        |      1 |
| Provides or describes an appropriate validation approach |      1 |
| Correctly explains the role of the setter                |      1 |
| **Total**                                                |  **4** |

## Performance Levels
| Score | Performance Level | Interpretation                                                                                  |
| ----- | ----------------- | ----------------------------------------------------------------------------------------------- |
| 23–26 | Strong            | Learner demonstrates strong conceptual understanding and can independently apply encapsulation. |
| 19–22 | Proficient        | Learner understands the core concepts and can apply them with minor gaps.                       |
| 14–18 | Developing        | Learner understands some concepts but needs additional practice.                                |
| 0–13  | Needs Support     | Learner should review the module and repeat the activity before progressing.                    |

## Feedback Guidance
### For Strong Performance

> You demonstrated a strong understanding of encapsulation and successfully applied private fields, controlled access, and validation. You are ready to progress to the next concept.

### For Proficient Performance

> You understand the core principles of encapsulation and can apply them in Java. Review any errors from the application or debugging tasks before moving forward.

### For Developing Performance

> You understand some of the key ideas but need additional practice. Focus on the relationship between private fields, getters, setters, and validation.

### For Needs Support

> Review the sections on private fields, getters, setters, validation, and the this keyword. Reattempt the activity and assessment after practicing these concepts.

## Assessment Completion Criteria

The learner is ready to move to the next module when they can:

- Explain the purpose of encapsulation.
- Explain why fields are commonly private.
- Distinguish between getters and setters.
- Explain how validation protects object state.
- Explain the purpose of the this keyword.
- Create an encapsulated Java class.
- Apply validation to prevent invalid data.
- Independently use getter and setter methods.
- Achieve at least 19/26 on the scored assessment.

If the learner scores below 19/26, they should review the relevant material and repeat the activity before progressing.

Assessment Alignment
| Learning Outcome                  | Assessment Evidence           |
| --------------------------------- | ----------------------------- |
| Explain encapsulation             | Questions 1 and 7             |
| Identify private fields           | Questions 2 and 3             |
| Explain getters and setters       | Questions 4 and 5, Question 8 |
| Explain the `this` keyword        | Question 6                    |
| Apply validation                  | Questions 9 and 11            |
| Create an encapsulated class      | Question 10                   |
| Apply encapsulation independently | Question 10                   |
