# Module 2 Activity: Build an Encapsulated Employee Class

**Estimated time:** 25 minutes

## Activity Objective

By completing this activity, learners will be able to:

> Apply encapsulation by creating a Java class with private fields, public getter and setter methods, and validation rules.

---

## Scenario

You are building a simple employee management program.

The program needs to store employee information while preventing invalid data from being directly assigned to the employee object.

Your task is to create an encapsulated `Employee` class.

---

## Task 1: Create the Employee Class

Create a class named `Employee`.

The class should contain the following private fields:

- `name` — stores the employee's name
- `salary` — stores the employee's salary
- `department` — stores the employee's department

Use appropriate Java data types.

### Expected Structure

Your class should have a structure similar to:

```java
class Employee {

    // Add your private fields here

}
```
## Task 2: Make the Fields Private

Make sure all three fields use the private access modifier.

### Your class should contain fields similar to:

`private String name;`
`private double salary;`
`private String department;`

The fields should not be directly accessible from outside the Employee class.

## Task 3: Create a Getter for Name

Create a public method named getName() that returns the employee's name.

#### Expected method structure:

`public String getName() {
    return name;
}`
## Task 4: Create a Setter for Name

Create a public method named `setName()` that allows the employee's name to be changed.

#### Expected method structure:

`public void setName(String name) {
    this.name = name;
}`

Pay attention to the use of `this.name`.

## Task 5: Create Salary Getter and Setter

Create:

`getSalary()
setSalary()`

The getter should return the employee's salary.

The setter should update the salary.

However, the setter must include a validation rule:

Salary must not be negative.

#### For example:

`public void setSalary(double salary) {

    if (salary >= 0) {
        this.salary = salary;
    }
}`
## Task 6: Create Department Getter and Setter

Create:

`getDepartment()
setDepartment()`

The methods should allow the department to be retrieved and updated.

For example:

`public String getDepartment() {
    return department;
}`

And:

`public void setDepartment(String department) {
    this.department = department;
}`
## Task 7: Create an Employee Object

Inside the main() method, create an Employee object.

Use the new keyword.

Example:

`Employee employee1 = new Employee();`
## Task 8: Set Employee Information

Use the setter methods to assign the following information:

Name: Arun
Salary: 50000
Department: Engineering

For example:

`employee1.setName("Arun");
employee1.setSalary(50000);
employee1.setDepartment("Engineering");`
## Task 9: Display Employee Information

Use the getter methods to retrieve and display the employee's information.

#### The output should be similar to:

Name: Arun
Salary: 50000.0
Department: Engineering
Task 10: Test Salary Validation

Try to set the employee's salary to a negative value.

For example:

`employee1.setSalary(-10000);`

Then retrieve the salary:

`System.out.println(employee1.getSalary());`

Observe what happens.

The validation rule should prevent the negative salary from replacing the valid salary.

## Task 11: Create a Second Employee

Create another Employee object named employee2.

#### Use the following information:

Name: Priya
Salary: 60000
Department: Marketing

Use the setter methods to assign the values.

Then use the getter methods to display the information.

### Expected Output
Name: Arun
Salary: 50000.0
Department: Engineering

Name: Priya
Salary: 60000.0
Department: Marketing
Challenge Task

Add an email field to the Employee class.

#### The field should:

Be private.
Have a getter.
Have a setter.

Then update the program so that each employee has an email address.

#### Use:

- Arun → arun@example.com
- Priya → priya@example.com

Display the email along with the other employee information.

## Self-Check

Before considering the activity complete, verify the following:

- I created a class named Employee.
- I declared name as private.
- I declared salary as private.
- I declared department as private.
- I created getter methods.
- I created setter methods.
- I used this correctly when assigning values.
- I added validation for salary.
- I created an Employee object using new.
- I used setter methods instead of directly accessing the fields.
- I used getter methods to retrieve the values.
- I created a second Employee object.
- I can explain how the class controls access to its data.
## Reflection Questions

Answer these questions after completing the activity.

**1.** Why are the Employee fields private?

Write your answer:

**2.** Why do we use getter and setter methods?

Write your answer:

**3.** What happens when you try to set the salary to a negative value?

Write your answer:

**4.** What is the purpose of this.salary inside the setter?

Write your answer:

**5.** How does this activity demonstrate encapsulation?

Write your answer:

## Success Criteria

You have successfully completed this activity if:

- The Employee class contains private fields.
- Getter and setter methods provide controlled access to the fields.
- The salary setter prevents negative values.
- Employee objects can be created successfully.
- Employee information can be retrieved using getter methods.
- Multiple Employee objects can contain different values.
- The program compiles and runs without errors.
- You can explain how the implementation demonstrates encapsulation.
## Extension Challenge

Improve the salary validation rule.

Instead of only checking whether the salary is negative, add a reasonable maximum salary limit.

For example:

`if (salary >= 0 && salary <= 1000000) {
    this.salary = salary;
}`

Then test the program with:

A valid salary.
A negative salary.
A salary above the maximum limit.

Explain how your validation protects the object's state.
