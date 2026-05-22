# Course 07 - Properties, Fields, Interfaces, and Visibility

## Goal

Build a practical Kotlin skill set for `Properties, Fields, Interfaces, and Visibility` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Property getters, setters, backing fields, and backing properties

**Learn:** Understand Property getters, setters, backing fields, and backing properties as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. `lateinit`, `const`, and computed properties

**Learn:** Understand `lateinit`, `const`, and computed properties as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Interfaces with abstract and default members

**Learn:** Define contracts with interfaces and keep implementation details private.

**Flutter angle:** Use interfaces for repositories and native service boundaries like you would abstract Flutter data sources.

**Build:** Create an interface and two implementations for a simple feature.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. `public`, `internal`, `protected`, and `private`

**Learn:** Understand `public`, `internal`, `protected`, and `private` as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Visibility control is useful when exposing only a clean API from Android native helpers to Flutter plugin code.

## Practice

1. Create a `Cart` with private setter for `itemCount`.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Properties, Fields, Interfaces, and Visibility` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. A property setter can be made private to:
   - A. control mutation
   - B. delete the property
   - C. make it JavaScript
   - D. disable imports
2. An interface is best for:
   - A. a shared contract
   - B. a package name
   - C. a loop range
   - D. a string template

### Fill In The Blank

1. Module-level visibility uses the keyword ____.
2. A non-null var initialized later can use ____.

### Coding Exam

Write an interface `Trackable` and a class `DownloadTask` implementing it with a read-only public progress value.
