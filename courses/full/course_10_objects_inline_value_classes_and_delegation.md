# Course 10 - Objects, Inline Value Classes, and Delegation

## Goal

Build a practical Kotlin skill set for `Objects, Inline Value Classes, and Delegation` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Object declarations as singletons

**Learn:** Understand Object declarations as singletons as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. Companion objects and object expressions

**Learn:** Understand Companion objects and object expressions as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Inline/value classes for lightweight domain wrappers

**Learn:** Build Kotlin classes with constructors, properties, inheritance, and visibility choices.

**Flutter angle:** Use classes for Android-side service wrappers, SDK adapters, and app models.

**Build:** Create a small class that protects mutation behind a method.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. Class delegation with `by`

**Learn:** Build Kotlin classes with constructors, properties, inheritance, and visibility choices.

**Flutter angle:** Use classes for Android-side service wrappers, SDK adapters, and app models.

**Build:** Create a small class that protects mutation behind a method.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Singleton helpers and small ID wrappers can keep native integration code less error-prone.

## Practice

1. Wrap a raw user id string in a value class.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Objects, Inline Value Classes, and Delegation` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. A singleton object is declared with:
   - A. object
   - B. single
   - C. static class
   - D. onlyOne
2. Delegation commonly uses the keyword:
   - A. by
   - B. via
   - C. using
   - D. from

### Fill In The Blank

1. A companion object lives inside a ____.
2. A lightweight wrapper can be a value ____.

### Coding Exam

Create `@JvmInline value class UserId(val value: String)` and a function that accepts `UserId`.
