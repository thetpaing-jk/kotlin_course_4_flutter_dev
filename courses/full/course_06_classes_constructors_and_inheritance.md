# Course 06 - Classes, Constructors, and Inheritance

## Goal

Build a practical Kotlin skill set for `Classes, Constructors, and Inheritance` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Primary and secondary constructors

**Learn:** Understand Primary and secondary constructors as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. Properties in constructor parameters

**Learn:** Understand Properties in constructor parameters as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Classes are final by default

**Learn:** Build Kotlin classes with constructors, properties, inheritance, and visibility choices.

**Flutter angle:** Use classes for Android-side service wrappers, SDK adapters, and app models.

**Build:** Create a small class that protects mutation behind a method.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. `open`, overriding, abstract classes, and inheritance tradeoffs

**Learn:** Build Kotlin classes with constructors, properties, inheritance, and visibility choices.

**Flutter angle:** Use classes for Android-side service wrappers, SDK adapters, and app models.

**Build:** Create a small class that protects mutation behind a method.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Model classes in Flutter often become Kotlin classes or data classes when implementing Android-side SDK integrations.

## Practice

1. Create a `User` class with immutable `id` and mutable `displayName`.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Classes, Constructors, and Inheritance` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Kotlin classes are default:
   - A. final
   - B. open
   - C. abstract
   - D. dynamic
2. To allow inheritance, a class can be marked:
   - A. open
   - B. extendable
   - C. baseOnly
   - D. inherit

### Fill In The Blank

1. Constructor parameters become properties when marked with `val` or ____.
2. Override a member with the keyword ____.

### Coding Exam

Create an `open class Repository` and a subclass `CachedRepository` that overrides `refresh()`.
