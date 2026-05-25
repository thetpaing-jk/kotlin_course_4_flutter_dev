# Course 03 — Control Flow

> **Module:** 3 of 10 | **Level:** Beginner | **For:** Flutter Developers learning Kotlin

---

## Lessons

### 3.1 if Expression

In Kotlin, `if` is an **expression** — it returns a value.

```kotlin
val max = if (a > b) a else b

val result = if (score >= 60) "Pass" else "Fail"
```

**Dart comparison:**
```dart
final max = a > b ? a : b;
final result = score >= 60 ? "Pass" : "Fail";
```

> 💡 No ternary operator needed in Kotlin — `if/else` can be used directly as an expression.

---

### 3.2 when Expression

Kotlin's `when` replaces `switch` and is far more powerful.

```kotlin
val grade = when (score) {
    in 90..100 -> "A"
    in 80..89  -> "B"
    in 70..79  -> "C"
    in 60..69  -> "D"
    else       -> "F"
}

fun describe(obj: Any): String = when (obj) {
    is String  -> "String: ${obj.length} chars"
    is Int     -> "Integer: $obj"
    is Boolean -> if (obj) "Yes" else "No"
    else       -> "Unknown"
}
```

**Dart 3 comparison:**
```dart
final grade = switch (score) {
    >= 90 => "A", >= 80 => "B", >= 70 => "C", >= 60 => "D", _ => "F",
};
```

---

### 3.3 for Loops

```kotlin
for (i in 1..5) println(i)           // 1,2,3,4,5
for (i in 1 until 5) println(i)      // 1,2,3,4
for (i in 5 downTo 1) println(i)     // 5,4,3,2,1

val fruits = listOf("apple", "banana", "mango")
for ((index, fruit) in fruits.withIndex()) {
    println("$index: $fruit")
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

**1.** How does Kotlin's `if` differ from Dart's?
- A. Kotlin has no `if`
- B. Kotlin's `if` is an expression and can return a value
- C. Kotlin's `if` only works inside functions
- D. No difference

**2.** What keyword handles the default case in a `when` expression?
- A. `default ->`
- B. `_`
- C. `else ->`
- D. `other ->`

**3.** What does `for (i in 1 until 5)` print?
- A. 1, 2, 3, 4, 5
- B. 1, 2, 3, 4
- C. 0, 1, 2, 3, 4
- D. 2, 3, 4, 5

**4.** How would you write `in 90..100` in Dart?
- A. `in range(90, 100)`
- B. `>= 90 && <= 100`
- C. `between(90, 100)`
- D. `>= 90`

**5.** What keyword performs a type check inside `when`?
- A. `instanceof`
- B. `typeof`
- C. `as`
- D. `is`

**6.** What does `for (i in 5 downTo 1)` print?
- A. 1, 2, 3, 4, 5
- B. 5, 4, 3, 2, 1
- C. 5, 3, 1
- D. 1, 3, 5

**7.** What is the Kotlin equivalent of Dart's `condition ? a : b`?
- A. `condition then a else b`
- B. `if condition a else b`
- C. `if (condition) a else b`
- D. `when (condition) { true -> a; false -> b }`

**8.** What is the Dart equivalent of `fruits.withIndex()`?
- A. `fruits.indexed`
- B. `fruits.enumerate()`
- C. `fruits.asMap().forEach(...)`
- D. `fruits.mapIndexed(...)`

---

### Fill In The Blank

1. In Kotlin, `if` is not a statement but an `________`.
2. The default branch in a `when` expression is written with the `________` keyword.
3. The `..` operator in `for (i in 1..5)` creates a `________`.
4. `for (i in 1 until 5)` excludes the last number, so 5 is `________`.
5. The Kotlin keyword that replaces Dart's `switch` is `________`.
6. To iterate a list with both index and value, use the `________` function.

---

### Coding Exam

**Problem 1 — if Expression**

Write a function that takes `temperature: Int` and returns:
- 30 and above → `"Hot"`
- 20–29 → `"Pleasant"`
- Below 20 → `"Cold"`

**Problem 2 — when Expression**

Write a function that accepts a Flutter route name (`"/home"`, `"/profile"`, `"/settings"`, others) and returns the corresponding page title using `when`.

**Problem 3 — for Loop**

Given `val items = listOf("Flutter", "Kotlin", "Android", "iOS")`, loop through it and print a numbered list starting from 1: `"1. Flutter"`, `"2. Kotlin"`, etc.

---
