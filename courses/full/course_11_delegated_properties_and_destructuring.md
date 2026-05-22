# Course 11 - Delegated Properties and Destructuring

## Goal

Build a practical Kotlin skill set for `Delegated Properties and Destructuring` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Property delegation with `by`

**Learn:** Use object declarations, value classes, and delegation to reduce boilerplate safely.

**Flutter angle:** Good wrappers make raw IDs and SDK helpers harder to misuse.

**Build:** Wrap a raw String ID in a value class.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. Standard delegates: `lazy`, observable, vetoable

**Learn:** Understand Standard delegates: `lazy`, observable, vetoable as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Map-backed properties

**Learn:** Use key-value data structures for lookup, grouping, and platform argument parsing.

**Flutter angle:** PlatformChannel arguments often arrive as maps, so safe casts matter.

**Build:** Write a helper that extracts a non-blank String by key.

```kotlin
data class Product(val name: String, val price: Int)

fun visibleProducts(items: List<Product>): List<String> =
    items.filter { it.price > 0 }.map { "${it.name}: ${it.price}" }
```
### 4. Destructuring declarations and component functions

**Learn:** Design clear Kotlin functions with named/default args, lambdas, and return types.

**Flutter angle:** Flutter widget constructors make named arguments familiar, but Kotlin syntax is different.

**Build:** Write a small function API that is easy to call from Android plugin code.

```kotlin
fun retry(times: Int, block: () -> Unit) {
    repeat(times) { block() }
}

retry(2) { println("Trying again") }
```

## Flutter Bridge

Lazy values are useful for native SDK setup work that should happen only when actually needed.

## Practice

1. Use `lazy` to initialize a simulated SDK client.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Delegated Properties and Destructuring` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Lazy initialization can use:
   - A. by lazy
   - B. by late
   - C. open lazy
   - D. lazy import
2. Destructuring reads values through:
   - A. component functions
   - B. package names
   - C. CSS selectors
   - D. Gradle tasks

### Fill In The Blank

1. Delegated properties use the keyword ____.
2. Pair destructuring can look like `val (a, b) = ____`.

### Coding Exam

Create a data class `Point(x, y)` and destructure it into two variables.
