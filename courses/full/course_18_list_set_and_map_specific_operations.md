# Course 18 - List, Set, and Map Specific Operations

## Goal

Build a practical Kotlin skill set for `List, Set, and Map Specific Operations` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. List index operations and sublists

**Learn:** Use List, Set, and Map operations for indexed data, unique data, and key-value data.

**Flutter angle:** Map<String, Any?> is common in platform channel arguments, so validate values carefully.

**Build:** Read typed values from a map without unsafe casts.

```kotlin
data class Product(val name: String, val price: Int)

fun visibleProducts(items: List<Product>): List<String> =
    items.filter { it.price > 0 }.map { "${it.name}: ${it.price}" }
```
### 2. Set union, intersect, and subtract

**Learn:** Understand Set union, intersect, and subtract as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Map keys, values, entries, and transformations

**Learn:** Use key-value data structures for lookup, grouping, and platform argument parsing.

**Flutter angle:** PlatformChannel arguments often arrive as maps, so safe casts matter.

**Build:** Write a helper that extracts a non-blank String by key.

```kotlin
data class Product(val name: String, val price: Int)

fun visibleProducts(items: List<Product>): List<String> =
    items.filter { it.price > 0 }.map { "${it.name}: ${it.price}" }
```
### 4. Choosing data structures for app features

**Learn:** Understand Choosing data structures for app features as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Maps often represent platform channel arguments; Kotlin lets you validate them carefully.

## Practice

1. Read a user id safely from `Map<String, Any?>`.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `List, Set, and Map Specific Operations` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Map entries are key-value:
   - A. pairs
   - B. ranges
   - C. classes
   - D. coroutines
2. Set operation for common elements is:
   - A. intersect
   - B. inside
   - C. joinOnly
   - D. mapAt

### Fill In The Blank

1. Access map values by ____.
2. List positions are called ____.

### Coding Exam

Write `fun readString(args: Map<String, Any?>, key: String): String?`.
