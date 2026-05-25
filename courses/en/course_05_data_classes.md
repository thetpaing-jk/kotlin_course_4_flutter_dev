# Course 05 — Data Classes

> **Module:** 5 of 10 | **Level:** Intermediate | **For:** Flutter Developers learning Kotlin

---

## Lessons

### 5.1 What is a Data Class?

A Kotlin `data class` auto-generates `equals()`, `hashCode()`, `toString()`, and `copy()` — no external package needed. Think of it as Flutter's Freezed package built right into the language.

**Kotlin:**
```kotlin
data class User(
    val id: Int,
    val name: String,
    val email: String,
    val age: Int = 0
)

val user1 = User(1, "Aung", "aung@email.com", 25)
val user2 = User(1, "Aung", "aung@email.com", 25)

println(user1 == user2)          // true — compares content
println(user1)                   // User(id=1, name=Aung, ...)
val updated = user1.copy(age = 26)
```

**Dart (Freezed) comparison:**
```dart
@freezed
class User with _$User {
    const factory User({
        required int id, required String name,
        required String email, int age = 0,
    }) = _User;
}
// Kotlin data class provides all this without any package
```

---

### 5.2 Auto-Generated Methods

```kotlin
data class Point(val x: Int, val y: Int)

val p1 = Point(1, 2)
val p2 = Point(1, 2)

println(p1 == p2)     // true  — structural equality
println(p1 === p2)    // false — referential equality
println(p1)           // Point(x=1, y=2)
println(p1.copy(y = 10))  // Point(x=1, y=10)
```

---

### 5.3 Destructuring

```kotlin
val (x, y) = Point(10, 20)
println("x=$x, y=$y")

val points = listOf(Point(1, 2), Point(3, 4))
for ((x, y) in points) { println("($x, $y)") }
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

**1.** What keyword declares a data class?
- A. `model class`
- B. `data class`
- C. `record class`
- D. `value class`

**2.** Which method does `data class` NOT auto-generate?
- A. `equals()`
- B. `toString()`
- C. `clone()`
- D. `copy()`

**3.** When two `data class` instances are compared with `==`, what is compared?
- A. Memory address
- B. Property values (structural equality)
- C. Class name
- D. hashCode only

**4.** Which Flutter/Dart package serves a similar purpose to Kotlin's `data class`?
- A. Provider
- B. GetX
- C. Freezed
- D. Riverpod

**5.** What does the `copy()` function do?
- A. Deep-clones the object
- B. Creates a new object with some properties changed
- C. Serializes the object
- D. Copies the object into a list

**6.** Must `data class` primary constructor parameters be `val` or `var`?
- A. Yes — it is a mandatory requirement
- B. No — plain parameters also work
- C. Only `val` is allowed
- D. Only `var` is allowed

**7.** What does destructuring `val (x, y) = point` rely on internally?
- A. `get()` functions
- B. `componentN()` functions
- C. `iterator()` function
- D. `toList()` function

**8.** What does the `===` operator compare in Kotlin?
- A. Content (structural equality)
- B. Reference (referential equality)
- C. hashCode
- D. Type

---

### Fill In The Blank

1. Kotlin's `data class` is most similar to the `________` package in the Flutter/Dart ecosystem.
2. `==` compares property values; `________` compares object references.
3. Properties not mentioned in a `copy()` call inherit their values from the `________` object.
4. The compiler auto-generates `________` functions to support destructuring.
5. A data class is declared by adding `________` before the `class` keyword.
6. Calling `println(user)` on a data class automatically invokes `________`.

---

### Coding Exam

**Problem 1 — Declare a Data Class**

Create an `ApiUser` data class with: `id` (Int), `username` (String), `email` (String), `isVerified` (Boolean, default `false`), `followersCount` (Int, default `0`).

**Problem 2 — copy()**

Using `ApiUser`:
1. Create a user instance.
2. Use `copy()` to set `isVerified = true` and `followersCount = 1500`.
3. Print both instances.
4. Compare them with `==`.

**Problem 3 — Destructuring**

Loop through `listOf(ApiUser(1, "aung", "a@mail.com"), ApiUser(2, "mg", "m@mail.com"))` and print `"ID: 1 | User: aung"` for each entry.

---
