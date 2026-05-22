# Course 09 - Generics, Nested Classes, Inner Classes, and Enums

## Goal

Build a practical Kotlin skill set for `Generics, Nested Classes, Inner Classes, and Enums` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Generic classes and functions

**Learn:** Build Kotlin classes with constructors, properties, inheritance, and visibility choices.

**Flutter angle:** Use classes for Android-side service wrappers, SDK adapters, and app models.

**Build:** Create a small class that protects mutation behind a method.

```kotlin
fun retry(times: Int, block: () -> Unit) {
    repeat(times) { block() }
}

retry(2) { println("Trying again") }
```
### 2. Variance basics: `out`, `in`, and star projections

**Learn:** Build fluency with Kotlin values, types, packages, imports, and simple functions.

**Flutter angle:** These are the pieces you need before touching Android plugin code.

**Build:** Write one tiny program that prints formatted app data.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Nested classes vs `inner` classes

**Learn:** Build Kotlin classes with constructors, properties, inheritance, and visibility choices.

**Flutter angle:** Use classes for Android-side service wrappers, SDK adapters, and app models.

**Build:** Create a small class that protects mutation behind a method.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. Enums with properties and behavior

**Learn:** Understand Enums with properties and behavior as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Generic result wrappers such as `ApiResult<T>` are directly useful when modeling repository responses.

## Practice

1. Create `ApiResponse<T>` with data and message fields.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Generics, Nested Classes, Inner Classes, and Enums` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. A type parameter is commonly written as:
   - A. T
   - B. #
   - C. var
   - D. pkg
2. An `inner` class can access:
   - A. outer class members
   - B. only CSS
   - C. no members
   - D. Gradle plugins only

### Fill In The Blank

1. Covariant generic position uses the keyword ____.
2. Enum constants are declared inside an ____ class.

### Coding Exam

Create `sealed class ApiResult<out T>` with Success, Loading, and Error.
