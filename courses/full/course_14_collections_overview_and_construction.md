# Course 14 - Collections Overview and Construction

## Goal

Build a practical Kotlin skill set for `Collections Overview and Construction` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Read-only vs mutable collection interfaces

**Learn:** Transform, filter, group, and aggregate app data safely and readably.

**Flutter angle:** Use Kotlin collection operators like Dart map/where/fold, but pay attention to mutability.

**Build:** Shape a list of API models into display rows.

```kotlin
data class Product(val name: String, val price: Int)

fun visibleProducts(items: List<Product>): List<String> =
    items.filter { it.price > 0 }.map { "${it.name}: ${it.price}" }
```
### 2. Lists, sets, and maps

**Learn:** Use List, Set, and Map operations for indexed data, unique data, and key-value data.

**Flutter angle:** Map<String, Any?> is common in platform channel arguments, so validate values carefully.

**Build:** Read typed values from a map without unsafe casts.

```kotlin
data class Product(val name: String, val price: Int)

fun visibleProducts(items: List<Product>): List<String> =
    items.filter { it.price > 0 }.map { "${it.name}: ${it.price}" }
```
### 3. Constructing collections with factory functions

**Learn:** Transform, filter, group, and aggregate app data safely and readably.

**Flutter angle:** Use Kotlin collection operators like Dart map/where/fold, but pay attention to mutability.

**Build:** Shape a list of API models into display rows.

```kotlin
data class Product(val name: String, val price: Int)

fun visibleProducts(items: List<Product>): List<String> =
    items.filter { it.price > 0 }.map { "${it.name}: ${it.price}" }
```
### 4. Choosing collection types for app data

**Learn:** Transform, filter, group, and aggregate app data safely and readably.

**Flutter angle:** Use Kotlin collection operators like Dart map/where/fold, but pay attention to mutability.

**Build:** Shape a list of API models into display rows.

```kotlin
data class Product(val name: String, val price: Int)

fun visibleProducts(items: List<Product>): List<String> =
    items.filter { it.price > 0 }.map { "${it.name}: ${it.price}" }
```

## Flutter Bridge

Kotlin makes mutability more explicit than many Dart list workflows, which helps when modeling app state.

## Practice

1. Create read-only and mutable product lists.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Collections Overview and Construction` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. A mutable list can be created with:
   - A. mutableListOf
   - B. listOnly
   - C. constList
   - D. arrayMap
2. A set is useful when values should be:
   - A. unique
   - B. always duplicated
   - C. nullable only
   - D. sorted by UI

### Fill In The Blank

1. A read-only list factory is ____.
2. A map stores key-____ pairs.

### Coding Exam

Create `fun uniqueTags(tags: List<String>): Set<String>`.
