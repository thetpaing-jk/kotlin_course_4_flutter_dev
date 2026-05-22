# Course 12 - Functions and Function Design

## Goal

Build a practical Kotlin skill set for `Functions and Function Design` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Function declarations and expression bodies

**Learn:** Design clear Kotlin functions with named/default args, lambdas, and return types.

**Flutter angle:** Flutter widget constructors make named arguments familiar, but Kotlin syntax is different.

**Build:** Write a small function API that is easy to call from Android plugin code.

```kotlin
fun retry(times: Int, block: () -> Unit) {
    repeat(times) { block() }
}

retry(2) { println("Trying again") }
```
### 2. Default and named arguments

**Learn:** Understand Default and named arguments as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Varargs and infix functions

**Learn:** Design clear Kotlin functions with named/default args, lambdas, and return types.

**Flutter angle:** Flutter widget constructors make named arguments familiar, but Kotlin syntax is different.

**Build:** Write a small function API that is easy to call from Android plugin code.

```kotlin
fun retry(times: Int, block: () -> Unit) {
    repeat(times) { block() }
}

retry(2) { println("Trying again") }
```
### 4. Local functions and tail recursion basics

**Learn:** Design clear Kotlin functions with named/default args, lambdas, and return types.

**Flutter angle:** Flutter widget constructors make named arguments familiar, but Kotlin syntax is different.

**Build:** Write a small function API that is easy to call from Android plugin code.

```kotlin
fun retry(times: Int, block: () -> Unit) {
    repeat(times) { block() }
}

retry(2) { println("Trying again") }
```

## Flutter Bridge

Kotlin named arguments are familiar if you are used to Flutter widget constructors, but Kotlin does not use Dart's curly parameter syntax.

## Practice

1. Write a function with default arguments and call it with named arguments.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Functions and Function Design` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Expression-body functions use:
   - A. =
   - B. => only
   - C. function
   - D. returns
2. Variable-length parameters use:
   - A. vararg
   - B. many
   - C. spreadonly
   - D. arrayarg

### Fill In The Blank

1. Named arguments use the form `name = ____`.
2. Default parameter values are placed in the function ____.

### Coding Exam

Write `fun buildLabel(title: String, prefix: String = "Course"): String`.
