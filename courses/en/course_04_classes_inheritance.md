# Course 04 — Classes and Inheritance

> **Module:** 4 of 10 | **Level:** Intermediate | **For:** Flutter Developers learning Kotlin

---

## Lessons

### 4.1 Class Declaration

**Kotlin:**
```kotlin
class Person(val firstName: String, val lastName: String, var age: Int) {
    fun fullName(): String = "$firstName $lastName"
    fun birthday() { age++ }
}

val person = Person("Aung", "Kyaw", 25)
println(person.fullName())
```

**Dart comparison:**
```dart
class Person {
    final String firstName;
    final String lastName;
    int age;
    Person(this.firstName, this.lastName, this.age);
    String fullName() => "$firstName $lastName";
    void birthday() { age++; }
}
```

> 💡 Adding `val`/`var` to Kotlin's primary constructor simultaneously declares and initializes properties — less boilerplate than Dart.

---

### 4.2 init Block

```kotlin
class User(val name: String, val email: String) {
    init {
        require(name.isNotBlank()) { "Name cannot be blank" }
        require(email.contains("@")) { "Invalid email" }
    }
}
```

---

### 4.3 Inheritance

Classes in Kotlin are `final` by default. Add `open` to allow subclassing.

```kotlin
open class Shape(val color: String) {
    open fun area(): Double = 0.0
}

class Circle(color: String, val radius: Double) : Shape(color) {
    override fun area() = Math.PI * radius * radius
}
```

**Dart comparison:**
```dart
class Shape {
    final String color;
    Shape(this.color);
    double area() => 0.0;
}
class Circle extends Shape {
    final double radius;
    Circle(super.color, this.radius);
    @override
    double area() => 3.14159 * radius * radius;
}
```

> 💡 In Kotlin the `override` keyword is **mandatory** — the compiler will error if you omit it.

---

### 4.4 Interfaces

```kotlin
interface Clickable {
    fun onClick()
    fun onLongClick() {
        println("Long clicked!")   // default implementation
    }
}

class Button : Clickable {
    override fun onClick() { println("Button clicked!") }
}
```

---

## Flutter Bridge

Use the Dart/Flutter comparisons in this course when reading Kotlin code in Android plugins, native SDK integrations, or platform-channel work.

## Practice

1. Re-type one Kotlin example from the lesson.
2. Write the comparable Dart/Flutter version where the course provides one.
3. Note one Kotlin syntax difference that matters for Flutter Android work.

## Q&A Checkpoint

- What Kotlin idea from this course feels closest to Dart/Flutter?
- Which syntax difference from this course should I remember in Android plugin code?
- How would this concept appear in real Flutter + Android native work?

## Exam

### Multiple Choice

**1.** What keyword makes a Kotlin class extendable?
- A. `abstract`
- B. `open`
- C. `extend`
- D. `virtual`

**2.** What is required to override a method in Kotlin?
- A. Add `@override` annotation
- B. Use the `override` keyword and the parent method must be `open`
- C. Just re-declare the same method name
- D. Use the `virtual` keyword

**3.** What is the Kotlin syntax for inheriting from a parent class?
- A. `extends ParentClass()`
- B. `implements ParentClass()`
- C. `: ParentClass()`
- D. `inherits ParentClass()`

**4.** What is the purpose of the `init` block?
- A. To declare static methods
- B. To run initialization code when the primary constructor executes
- C. To implement interfaces
- D. To declare abstract methods

**5.** What happens if you try to use `new` to create an instance in Kotlin?
- A. Compilation error
- B. Runtime error
- C. It works fine — `new` is simply not needed
- D. Returns null

**6.** Can an interface have a default method implementation in Kotlin?
- A. No — compilation error
- B. Yes — classes can inherit it without overriding
- C. Only abstract classes can provide default implementations
- D. It converts the interface to a class

**7.** How does Kotlin's `override` keyword differ from Dart's `@override`?
- A. No difference
- B. `override` is a mandatory keyword in Kotlin — omitting it is a compile error
- C. `@override` is mandatory in Dart
- D. Kotlin does not use `override`

**8.** What does `var` in the primary constructor mean?
- A. Read-only property
- B. Mutable property — can be reassigned
- C. Static property
- D. Private property

---

### Fill In The Blank

1. To allow a Kotlin class to be subclassed, add the `________` keyword.
2. To re-implement a parent method in a child class, add the `________` keyword.
3. Unlike Dart, Kotlin does **not** use the `________` keyword when creating instances.
4. The Kotlin inheritance syntax is `: ________()` after the class name.
5. To run code at construction time, write it inside the `________` block.
6. Both inheriting a class and implementing an interface use the `________` symbol in Kotlin.

---

### Coding Exam

**Problem 1 — Class Declaration**

Write a `Product` class with `name` (String, read-only), `price` (Double, mutable), and `inStock` (Boolean, mutable, default `true`). Add a `displayInfo()` function that prints all properties.

**Problem 2 — Inheritance**

Extend `Product` with a `DigitalProduct` subclass that adds `fileSize` (Int, MB). Override `displayInfo()` to also print the file size.

**Problem 3 — Interface**

Create a `Downloadable` interface with an abstract `download()` and a default `cancelDownload()` that prints `"Download cancelled"`. Implement it in `DigitalProduct`.

---
