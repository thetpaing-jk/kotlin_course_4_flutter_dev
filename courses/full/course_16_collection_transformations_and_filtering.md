# Course 16 - Collection Transformations and Filtering

## Goal

Build a practical Kotlin skill set for `Collection Transformations and Filtering` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. `map`, `flatMap`, `associate`, and `zip`

**Learn:** Use key-value data structures for lookup, grouping, and platform argument parsing.

**Flutter angle:** PlatformChannel arguments often arrive as maps, so safe casts matter.

**Build:** Write a helper that extracts a non-blank String by key.

```kotlin
data class Product(val name: String, val price: Int)

fun visibleProducts(items: List<Product>): List<String> =
    items.filter { it.price > 0 }.map { "${it.name}: ${it.price}" }
```
### 2. `filter`, `filterNot`, `filterIsInstance`, and predicates

**Learn:** Understand `filter`, `filterNot`, `filterIsInstance`, and predicates as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
data class Product(val name: String, val price: Int)

fun visibleProducts(items: List<Product>): List<String> =
    items.filter { it.price > 0 }.map { "${it.name}: ${it.price}" }
```
### 3. `plus` and `minus` operators

**Learn:** Use type checks, casts, equality, this, and operators without making code clever.

**Flutter angle:** Safe casts are especially useful for Any? values from platform channels.

**Build:** Validate Any? input and return a typed value or null.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. Readable data shaping for UI lists

**Learn:** Use List, Set, and Map operations for indexed data, unique data, and key-value data.

**Flutter angle:** Map<String, Any?> is common in platform channel arguments, so validate values carefully.

**Build:** Read typed values from a map without unsafe casts.

```kotlin
data class Product(val name: String, val price: Int)

fun visibleProducts(items: List<Product>): List<String> =
    items.filter { it.price > 0 }.map { "${it.name}: ${it.price}" }
```

## Flutter Bridge

This is close to Dart `map`, `where`, and list spread thinking in Flutter UI preparation.

## Practice

1. Filter expensive products and map them to display labels.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Collection Transformations and Filtering` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. The operation that changes each item into another value is:
   - A. map
   - B. when
   - C. object
   - D. throw
2. The operation that keeps only matching values is:
   - A. filter
   - B. copy
   - C. open
   - D. package

### Fill In The Blank

1. Flatten mapped collections with ____.
2. Remove items using the ____ operator.

### Coding Exam

Write `fun productLabels(products: List<Product>): List<String>` using `filter` and `map`.
