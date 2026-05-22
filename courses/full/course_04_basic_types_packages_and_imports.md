# Course 04 - Basic Types, Packages, and Imports

## Goal

Build a practical Kotlin skill set for `Basic Types, Packages, and Imports` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Numbers, booleans, characters, strings, arrays

**Learn:** Understand Numbers, booleans, characters, strings, arrays as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. Explicit numeric conversions and why Kotlin avoids surprising casts

**Learn:** Understand Explicit numeric conversions and why Kotlin avoids surprising casts as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun readUserId(args: Map<String, Any?>): String? =
    (args["userId"] as? String)?.takeIf { it.isNotBlank() }
```
### 3. String operations and raw strings

**Learn:** Understand String operations and raw strings as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. Packages/imports as project organization tools

**Learn:** Understand Packages/imports as project organization tools as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Dart and Kotlin both infer types, but Kotlin is stricter about numeric conversion, which matters when reading Android SDK APIs.

## Practice

1. Convert an `Int` quantity into a `Double` subtotal safely.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Basic Types, Packages, and Imports` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Kotlin generally requires numeric conversions to be:
   - A. explicit
   - B. automatic always
   - C. string based
   - D. ignored
2. Imports are used to:
   - A. bring declarations into scope
   - B. run exams
   - C. format UI only
   - D. store progress

### Fill In The Blank

1. Convert `count` to Double with `count.____()`.
2. A package declaration commonly appears at the ____ of a Kotlin file.

### Coding Exam

Write `fun subtotal(price: Int, qty: Int): Double` and return the value as `Double`.
