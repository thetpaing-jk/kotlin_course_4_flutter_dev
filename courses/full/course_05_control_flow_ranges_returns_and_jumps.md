# Course 05 - Control Flow, Ranges, Returns, and Jumps

## Goal

Build a practical Kotlin skill set for `Control Flow, Ranges, Returns, and Jumps` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. `if` as an expression

**Learn:** Understand `if` as an expression as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. `when` for branch-heavy logic

**Learn:** Understand `when` for branch-heavy logic as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. `for`, `while`, ranges, progressions, and loop labels

**Learn:** Understand `for`, `while`, ranges, progressions, and loop labels as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. `return`, `break`, `continue`, and local returns in lambdas

**Learn:** Pass behavior as values and keep callback-heavy code readable.

**Flutter angle:** This maps to Flutter builder callbacks and Dart closures.

**Build:** Write retry(times) { ... } and explain where the lambda runs.

```kotlin
fun retry(times: Int, block: () -> Unit) {
    repeat(times) { block() }
}

retry(2) { println("Trying again") }
```

## Flutter Bridge

Use `when` the way you might model tab routing, API result states, or platform argument validation in Flutter plugin code.

## Practice

1. Map tab index values to screen names with `when`.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Control Flow, Ranges, Returns, and Jumps` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. The Kotlin construct commonly used for multi-branch decisions is:
   - A. when
   - B. choose
   - C. matchOnly
   - D. selectCase
2. `1..5` creates:
   - A. an inclusive range
   - B. an exclusive range
   - C. a map
   - D. a nullable string

### Fill In The Blank

1. The Elvis-like multi-branch keyword is ____.
2. Loop from 5 down to 1 using `5 ____ 1`.

### Coding Exam

Write `fun screenName(index: Int): String` using `when` for Home, Search, Profile, and Unknown.
