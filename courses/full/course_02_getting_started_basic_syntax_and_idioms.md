# Course 02 - Getting Started, Basic Syntax, and Idioms

## Goal

Build a practical Kotlin skill set for `Getting Started, Basic Syntax, and Idioms` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Packages, imports, and the `main()` entry point

**Learn:** Understand Packages, imports, and the `main()` entry point as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. `val`, `var`, type inference, comments, and string templates

**Learn:** Understand `val`, `var`, type inference, comments, and string templates as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Functions, default arguments, and named arguments

**Learn:** Design clear Kotlin functions with named/default args, lambdas, and return types.

**Flutter angle:** Flutter widget constructors make named arguments familiar, but Kotlin syntax is different.

**Build:** Write a small function API that is easy to call from Android plugin code.

```kotlin
fun retry(times: Int, block: () -> Unit) {
    repeat(times) { block() }
}

retry(2) { println("Trying again") }
```
### 4. Kotlin idioms: DTOs, filtering, collection checks, instance checks

**Learn:** Transform, filter, group, and aggregate app data safely and readably.

**Flutter angle:** Use Kotlin collection operators like Dart map/where/fold, but pay attention to mutability.

**Build:** Shape a list of API models into display rows.

```kotlin
data class Product(val name: String, val price: Int)

fun visibleProducts(items: List<Product>): List<String> =
    items.filter { it.price > 0 }.map { "${it.name}: ${it.price}" }
```

## Flutter Bridge

`val` feels close to Dart `final`, and Kotlin named/default arguments will feel familiar from Flutter widget constructors.

## Practice

1. Create a `data class CourseProgress` and print a formatted progress string.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Getting Started, Basic Syntax, and Idioms` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Which keyword declares a read-only reference?
   - A. val
   - B. var
   - C. let
   - D. mutable
2. Kotlin string templates use:
   - A. $name and ${expression}
   - B. #{name}
   - C. %name%
   - D. @name

### Fill In The Blank

1. The entry point function is usually named ____.
2. Mutable variables use the keyword ____.

### Coding Exam

Write `fun formatProgress(name: String, done: Int, total: Int): String` using a string template.
