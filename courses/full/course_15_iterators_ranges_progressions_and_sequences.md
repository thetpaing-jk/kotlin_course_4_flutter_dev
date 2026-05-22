# Course 15 - Iterators, Ranges, Progressions, and Sequences

## Goal

Build a practical Kotlin skill set for `Iterators, Ranges, Progressions, and Sequences` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Iterating collections explicitly and implicitly

**Learn:** Transform, filter, group, and aggregate app data safely and readably.

**Flutter angle:** Use Kotlin collection operators like Dart map/where/fold, but pay attention to mutability.

**Build:** Shape a list of API models into display rows.

```kotlin
data class Product(val name: String, val price: Int)

fun visibleProducts(items: List<Product>): List<String> =
    items.filter { it.price > 0 }.map { "${it.name}: ${it.price}" }
```
### 2. Ranges and progressions

**Learn:** Understand Ranges and progressions as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Sequence laziness

**Learn:** Understand Sequence laziness as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. When sequences help and when they are unnecessary

**Learn:** Understand When sequences help and when they are unnecessary as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Dart `Iterable` has lazy behaviors; Kotlin uses `Sequence` explicitly for lazy chains.

## Practice

1. Build a lazy sequence that filters even values and takes the first five.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Iterators, Ranges, Progressions, and Sequences` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Kotlin lazy collection pipelines commonly use:
   - A. Sequence
   - B. Package
   - C. Annotation
   - D. Visibility
2. `step` changes:
   - A. range progression increments
   - B. package names
   - C. nullability
   - D. class inheritance

### Fill In The Blank

1. Convert an iterable to lazy processing with `____()`.
2. Use `downTo` for descending ____.

### Coding Exam

Return the first 10 doubled even numbers from `1..1000` using a sequence.
