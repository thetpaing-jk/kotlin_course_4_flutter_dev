# Course 03 - Coding Conventions and Project Shape

## Goal

Build a practical Kotlin skill set for `Coding Conventions and Project Shape` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. File naming, package naming, and source layout

**Learn:** Understand File naming, package naming, and source layout as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. Class, function, property, and constant naming conventions

**Learn:** Build Kotlin classes with constructors, properties, inheritance, and visibility choices.

**Flutter angle:** Use classes for Android-side service wrappers, SDK adapters, and app models.

**Build:** Create a small class that protects mutation behind a method.

```kotlin
fun retry(times: Int, block: () -> Unit) {
    repeat(times) { block() }
}

retry(2) { println("Trying again") }
```
### 3. Formatting style: indentation, braces, expression bodies

**Learn:** Understand Formatting style: indentation, braces, expression bodies as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. Writing Kotlin that remains readable inside Android/Flutter plugin projects

**Learn:** Understand where Kotlin appears in Android projects and Flutter plugin integrations.

**Flutter angle:** This is the native layer you touch when a Flutter package needs SDK-specific Android code.

**Build:** Find a MethodChannel-style boundary and validate one argument.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Think of this like Dart format and Flutter style rules: consistency makes code reviews easier and plugin code safer.

## Practice

1. Rename three rough Kotlin identifiers into idiomatic names.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Coding Conventions and Project Shape` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Kotlin package names are commonly written in:
   - A. lowercase dot-separated form
   - B. UpperCamelCase only
   - C. snake_case folders only
   - D. random case
2. Readable Kotlin usually prefers:
   - A. clear names and small functions
   - B. deeply nested one-liners everywhere
   - C. unused abbreviations
   - D. manual formatting fights

### Fill In The Blank

1. Function names are commonly written in ____ case.
2. Constants often use uppercase with ____ between words.

### Coding Exam

Refactor a badly named function `fun x(a: Int)` into a clearer Kotlin function signature and body.
