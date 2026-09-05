# Module 3 Activity: Build a Vehicle Hierarchy

**Estimated time:** 25 minutes

## Activity Objective

By the end of this activity, learners will be able to:

> Apply inheritance in Java by creating a parent class, extending it with a child class, and using both inherited and specialized functionality.

---

## Scenario

You are building a simple vehicle management system.

The system needs to represent different types of vehicles.

All vehicles have some common information:

- Brand
- Speed

However, different vehicle types have their own specialized information.

For example:

**Vehicle:**
- Brand
- Speed
- Display vehicle information

**Car:**
- Number of doors
- Display car-specific information

Instead of repeating the common vehicle functionality, you will create a `Vehicle` parent class and a `Car` child class.

---

## Task 1: Create the Parent Class

Create a class named `Vehicle`.

Add the following fields:

```java
class Vehicle {

    String brand;
    int speed;

    void displayInfo() {
        // Display brand and speed
    }
}
```
## Task 2: Create the Child Class

Create a class named Car that extends Vehicle.
```
class Car extends Vehicle {

}
```
Do not redefine brand, speed, or displayInfo() inside Car.

The purpose is to reuse them through inheritance.

## Task 3: Add Car-Specific Functionality

Add a field named:

numberOfDoors

Choose an appropriate data type.

Then create a method named:

`displayCarInfo()`

The method should display the number of doors.

Example:
```
void displayCarInfo() {
    System.out.println("Number of doors: " + numberOfDoors);
}
```
## Task 4: Create a Car Object

Create a Car object inside the main() method.

`Car car = new Car();`

Assign the following values:

Brand: Toyota
Speed: 120
Number of doors: 4

Remember that brand and speed come from the parent class, while numberOfDoors belongs to the child class.

## Task 5: Use Inherited and Specialized Methods

Call both methods:

`car.displayInfo();
car.displayCarInfo();`

The first method should come from the Vehicle class.

The second method should come from the Car class.

Your output should be similar to:

Brand: Toyota
Speed: 120
Number of doors: 4
## Task 6: Create Another Car

Create a second Car object.

Use:

Brand: Honda
Speed: 100
Number of doors: 4

Display its information using the same methods.

This demonstrates that multiple child objects can reuse the same inherited functionality.

## Challenge: Add Another Vehicle Type

Create another child class named Bike that extends Vehicle.

Add a field:

hasCarrier

Use a suitable data type.

Create a method:

`displayBikeInfo()`

The method should display whether the bike has a carrier.

Create a Bike object with:

Brand: Hero
Speed: 80
Has carrier: true

Then display both the inherited vehicle information and the bike-specific information.

## Self-Check

Before completing the activity, verify the following:

 - I created a Vehicle parent class.
 - I added brand and speed to Vehicle.
 - I created a Car class using extends.
 - I did not duplicate the parent fields inside Car.
 - I added numberOfDoors to Car.
 - I created displayCarInfo().
 - I created a Car object.
 - I used inherited fields through the Car object.
 - I called an inherited method through the Car object.
 - I created a second Car object.
 - I attempted the Bike challenge.
### Reflection

After completing the activity, answer these questions:

**1.** What functionality did the Car class reuse from Vehicle?

Write your answer:

**2.** Why is it better to keep brand and speed in Vehicle instead of defining them again in Car?

Write your answer:

**3.** What is the relationship between Car and Vehicle?

Write your answer:

**4.** What would happen if Car did not extend Vehicle?

Write your answer:

## Success Criteria

The activity is successfully completed when the learner can:

- Create a parent class containing common functionality.
- Create a child class using extends.
- Reuse inherited fields and methods.
- Add specialized functionality to the child class.
- Create and use objects of the child class.
- Explain why inheritance reduces code duplication.
- Identify the "is-a" relationship between Car and Vehicle.
## Extension Challenge

Modify the Vehicle class by adding a method:
```
void start() {
    System.out.println("Vehicle is starting...");
}
```
Then call:

`car.start();`

from the Car object.

Observe that the Car object can use this method without defining it again.

### Optional Question

Why can the Car object call start() even though start() is defined inside Vehicle?

Write your answer:

## Completion Check

Before moving to the assessment, make sure you can explain:

` "A child class can reuse common functionality from a parent class and add its own specialized functionality using inheritance." `

If you can explain this concept and successfully complete the coding tasks, continue to the Module 3 Assessment: Inheritance.
