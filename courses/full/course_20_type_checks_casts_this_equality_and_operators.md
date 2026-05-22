# Course 20 - Type Checks, Casts, This, Equality, and Operators

## Goal

Build a practical Kotlin skill set for `Type Checks, Casts, This, Equality, and Operators` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. `is`, smart casts, `as`, and `as?`

**Learn:** Understand `is`, smart casts, `as`, and `as?` as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun readUserId(args: Map<String, Any?>): String? =
    (args["userId"] as? String)?.takeIf { it.isNotBlank() }
```
### 2. `this` labels and receiver disambiguation

**Learn:** Understand `this` labels and receiver disambiguation as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Structural equality vs referential equality

**Learn:** Understand Structural equality vs referential equality as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. Operator overloading and when to avoid cleverness

**Learn:** Use type checks, casts, equality, this, and operators without making code clever.

**Flutter angle:** Safe casts are especially useful for Any? values from platform channels.

**Build:** Validate Any? input and return a typed value or null.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Smart casts help when validating `Any?` values coming from platform channel arguments.

## Practice

1. Safely cast a platform argument into `String`.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Type Checks, Casts, This, Equality, and Operators` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Safe cast uses:
   - A. as?
   - B. as!!
   - C. cast?
   - D. safeAsOnly
2. Structural equality uses:
   - A. ==
   - B. ===
   - C. equalsRefOnly
   - D. sameObject

### Fill In The Blank

1. Type checking uses the keyword ____.
2. Referential equality uses ____.

### Coding Exam

Write `fun readNonBlankString(value: Any?): String?` using safe cast and blank checking.
