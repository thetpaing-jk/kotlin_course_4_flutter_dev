# Course 23 - Experimental APIs, Keywords, Operators, and Grammar

## Goal

Build a practical Kotlin skill set for `Experimental APIs, Keywords, Operators, and Grammar` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Opt-in API design and experimental markers

**Learn:** Understand Opt-in API design and experimental markers as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. Reading the keyword/operator reference

**Learn:** Use type checks, casts, equality, this, and operators without making code clever.

**Flutter angle:** Safe casts are especially useful for Any? values from platform channels.

**Build:** Validate Any? input and return a typed value or null.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Grammar as a tool for resolving syntax confusion

**Learn:** Read and write everyday Kotlin syntax confidently.

**Flutter angle:** Map Dart habits to Kotlin syntax without assuming they are identical.

**Build:** Translate a small Dart-style model/function idea into Kotlin.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. How to use reference docs without memorizing every rule

**Learn:** Understand How to use reference docs without memorizing every rule as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Treat this like Dart language reference: you rarely memorize all of it, but you know where to look when code is confusing.

## Practice

1. Look up three Kotlin keywords and write what each one controls.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Experimental APIs, Keywords, Operators, and Grammar` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Experimental APIs often require:
   - A. opt-in
   - B. no import ever
   - C. CSS marker
   - D. database migration
2. The grammar reference helps explain:
   - A. valid syntax forms
   - B. exam scores
   - C. screen sizes
   - D. server ports

### Fill In The Blank

1. Experimental usage may require an ____ annotation.
2. Reserved language words are called ____.

### Coding Exam

Write a short example using `@OptIn` as a commented sketch.
