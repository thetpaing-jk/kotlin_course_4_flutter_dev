# Course 22 - Reflection, Scope Functions, and Type-Safe Builders

## Goal

Build a practical Kotlin skill set for `Reflection, Scope Functions, and Type-Safe Builders` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Reflection overview and when it is costly

**Learn:** Use reflection and scope functions intentionally, not as default style.

**Flutter angle:** Scope functions can clean up setup code but can also hide meaning if nested.

**Build:** Refactor setup code with apply/also and keep names readable.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. `let`, `run`, `with`, `apply`, and `also`

**Learn:** Understand `let`, `run`, `with`, `apply`, and `also` as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Receiver lambdas and builder-style APIs

**Learn:** Pass behavior as values and keep callback-heavy code readable.

**Flutter angle:** This maps to Flutter builder callbacks and Dart closures.

**Build:** Write retry(times) { ... } and explain where the lambda runs.

```kotlin
fun retry(times: Int, block: () -> Unit) {
    repeat(times) { block() }
}

retry(2) { println("Trying again") }
```
### 4. Type-safe builders as Kotlin DSL foundations

**Learn:** Understand Type-safe builders as Kotlin DSL foundations as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Scope functions can make native setup code concise, but overuse can become as hard to read as deeply nested widgets.

## Practice

1. Configure an object with `apply` and log it with `also`.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Reflection, Scope Functions, and Type-Safe Builders` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Configure object and return it:
   - A. apply
   - B. let
   - C. withOnly
   - D. reflect
2. Side effect and return original object:
   - A. also
   - B. run
   - C. thisOnly
   - D. build

### Fill In The Blank

1. Nullable transform blocks often use ____.
2. Type-safe builders usually rely on lambdas with ____.

### Coding Exam

Create a small builder-style function using a lambda with receiver.
