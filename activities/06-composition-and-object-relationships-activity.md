# Module 6 Activity: Build a Library System

**Estimated time:** 25 minutes

## Activity Objective

By the end of this activity, learners will be able to:

> Apply composition in Java by creating objects that contain and use other objects through a "has-a" relationship.

---

## Scenario

You are building a simple library management system.

A library contains books, but a `Book` and a `Library` are separate concepts.

The relationship can be described as:

```text
Library has a Book.
```
Instead of making Library inherit from Book, you will use composition by giving the Library class a Book object.

# Part A: Create the Book Class
## Task 1: Create the Book Class

Create a class named Book.

Add the following fields:
```
title
author
```
Use appropriate data types.

Start with:
```
class Book {

    // Add fields here

}
```
## Task 2: Add a Display Method

Create a method named:

`displayBook()`

The method should display the book's title and author.

Example:
```
void displayBook() {
    System.out.println("Title: " + title);
    System.out.println("Author: " + author);
}
```
# Part B: Create the Library Class
## Task 3: Add a Book Object to Library

Create a class named Library.

Add a field named book that refers to a Book object.

Expected structure:
```
class Library {

    Book book;

}
```
This represents:

`Library has a Book.`
## Task 4: Create a Constructor

Create a constructor for Library that accepts a Book object.

Store the object using:

`this.book = book;`

Expected structure:
```
class Library {

    Book book;

    Library(Book book) {
        this.book = book;
    }
}
```
The constructor establishes the relationship between the Library and Book objects.

## Task 5: Add a Library Method

Create a method named:

`displayBookDetails()`

Inside the method, use the Book object to display its information.

Example:
```
void displayBookDetails() {
    book.displayBook();
}
```
# Part C: Create and Connect the Objects
## Task 6: Create a Book Object

Inside main(), create a Book object.

`Book book = new Book();`

Assign:
```
Title: Clean Code
Author: Robert Martin
```
## Task 7: Create a Library Object

Pass the Book object to the Library constructor:

`Library library = new Library(book);`

The relationship is now:
```
Library
   │
   └── book ─────→ Book
                    │
                    ├── title
                    └── author
```
## Task 8: Display the Book Details

Call:

`library.displayBookDetails();`

Expected output:
```
Title: Clean Code
Author: Robert Martin
```
# Part D: Add Another Book
## Task 9: Create a Second Book

Create another Book object.

Use:
```
Title: Effective Java
Author: Joshua Bloch
```
Create another Library object using the second book.

Display its details.

Expected output:
```
Title: Effective Java
Author: Joshua Bloch
```
## Challenge: Library with Multiple Books

Modify the design so that a Library can contain multiple books.

You can use an array or ArrayList<Book>.

For example:

`ArrayList<Book> books = new ArrayList<>();`

Add several books:
```
books.add(book1);
books.add(book2);
```
Then create a method that displays all books.

Expected output could be:
```
Title: Clean Code
Author: Robert Martin

Title: Effective Java
Author: Joshua Bloch
```
The goal is to understand that one object can work with multiple objects of another class.

## Self-Check

Before completing the activity, verify the following:

 - I created a Book class.
 - I added title and author.
 - I created a displayBook() method.
 - I created a Library class.
 - I added a Book reference to Library.
 - I created a constructor that accepts a Book.
 - I used this.book = book.
 - I created a displayBookDetails() method.
 - I created a Book object.
 - I passed the Book object to the Library constructor.
 - I displayed the book details through the Library object.
 - I created a second book.
 - I attempted the multiple-books challenge.
## Reflection

After completing the activity, answer these questions.

**1.** What relationship exists between Library and Book?

#### Write your answer:

**2.** Why is this relationship considered a "has-a" relationship?

#### Write your answer:

**3.** Why should Library contain a Book object instead of extending Book?

#### Write your answer:

**4.** What does this.book = book do?

#### Write your answer:

**5.** What is one benefit of separating Book and Library into different classes?

#### Write your answer:

## Success Criteria

The activity is successfully completed when the learner can:

- Create two separate classes with different responsibilities.
- Create an object of one class inside another class through a reference.
- Establish a relationship through a constructor.
- Use this to assign the constructor parameter to the object's field.
- Access functionality of a contained object.
- Explain the "has-a" relationship.
- Explain why composition is more appropriate than inheritance for this scenario.
- Extend the design to work with multiple related objects.
## Extension Challenge

Consider a more realistic library system:
```
Library
   │
   ├── Book
   ├── Book
   └── Book
```
Add a method:

findBook(String title)

The method should search the library's books and display the matching book.

For example:

`Search: Clean Code`

Result:
```
Title: Clean Code
Author: Robert Martin
```
## Optional Question

How does using composition make it easier to add more functionality to the Library class without changing the Book class?

### Write your answer:

## Completion Check

Before moving to the assessment, make sure you can explain:

> "Composition allows one class to contain and use objects of another class, creating a has-a relationship without requiring inheritance."

If you can explain this concept and successfully complete the coding tasks, continue to the Module 6 Assessment: Composition & Object Relationships.
