# Course 13 - Higher-Order Functions, Lambdas, and Inline Functions

## Goal

Build a practical Kotlin skill set for `Higher-Order Functions, Lambdas, and Inline Functions` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Functions as values and parameters

**Learn:** Design clear Kotlin functions with named/default args, lambdas, and return types.

**Flutter angle:** Flutter widget constructors make named arguments familiar, but Kotlin syntax is different.

**Build:** Write a small function API that is easy to call from Android plugin code.

```kotlin
fun retry(times: Int, block: () -> Unit) {
    repeat(times) { block() }
}

retry(2) { println("Trying again") }
```
### 2. Lambda syntax and `it`

**Learn:** Pass behavior as values and keep callback-heavy code readable.

**Flutter angle:** This maps to Flutter builder callbacks and Dart closures.

**Build:** Write retry(times) { ... } and explain where the lambda runs.

```kotlin
fun retry(times: Int, block: () -> Unit) {
    repeat(times) { block() }
}

retry(2) { println("Trying again") }
```
### 3. Function types, receivers, and closures

**Learn:** Design clear Kotlin functions with named/default args, lambdas, and return types.

**Flutter angle:** Flutter widget constructors make named arguments familiar, but Kotlin syntax is different.

**Build:** Write a small function API that is easy to call from Android plugin code.

```kotlin
fun retry(times: Int, block: () -> Unit) {
    repeat(times) { block() }
}

retry(2) { println("Trying again") }
```
### 4. `inline`, `noinline`, `crossinline`, and performance tradeoffs

**Learn:** Understand `inline`, `noinline`, `crossinline`, and performance tradeoffs as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Builder callbacks in Flutter map nicely to Kotlin lambdas, especially when reading Android DSL APIs.

## Practice

1. Write a `retry(times, block)` higher-order function.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Higher-Order Functions, Lambdas, and Inline Functions` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. A function that accepts another function is:
   - A. higher-order
   - B. higher-package
   - C. sealed-only
   - D. native-only
2. The default single lambda parameter name is:
   - A. it
   - B. this
   - C. arg0 only
   - D. valueOnly

### Fill In The Blank

1. A no-parameter Unit lambda type is `() -> ____`.
2. Inline functions use the keyword ____.

### Coding Exam

Write `fun repeatTwice(block: () -> Unit)` and call it from `main()`.
