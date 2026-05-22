# Course 27 - Kotlin Native and Platform Interop

## Goal

Build a practical Kotlin skill set for `Kotlin Native and Platform Interop` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Kotlin/Native target overview

**Learn:** Understand Kotlin/Native targets, platform APIs, and iOS interop ideas.

**Flutter angle:** This matters when evaluating KMP modules alongside Flutter native layers.

**Build:** Sketch what shared Kotlin code exposes to iOS.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. Native libraries and platform libraries

**Learn:** Understand Kotlin/Native targets, platform APIs, and iOS interop ideas.

**Flutter angle:** This matters when evaluating KMP modules alongside Flutter native layers.

**Build:** Sketch what shared Kotlin code exposes to iOS.

```kotlin
fun readUserId(args: Map<String, Any?>): String? =
    (args["userId"] as? String)?.takeIf { it.isNotBlank() }
```
### 3. Swift/Objective-C interoperability

**Learn:** Understand Swift/Objective-C interoperability as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. CocoaPods and Gradle integration

**Learn:** Read Kotlin/Android build configuration and dependency declarations.

**Flutter angle:** Flutter projects still contain Android Gradle files, especially for plugins.

**Build:** Identify plugin, dependency, and version lines in a Gradle file.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Flutter plugins may already expose iOS/Android native layers; Kotlin/Native appears more often in KMP shared modules.

## Practice

1. List what shared Kotlin code would expose to iOS.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Kotlin Native and Platform Interop` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Kotlin/Native can compile without:
   - A. JVM
   - B. source files
   - C. functions
   - D. types
2. iOS interop often involves:
   - A. Swift/Objective-C
   - B. CSS
   - C. Dart analyzer
   - D. HTML forms

### Fill In The Blank

1. iOS dependency integration can use ____.
2. Native platform APIs are exposed through platform ____.

### Coding Exam

Sketch an API that shared Kotlin code could expose to an iOS app.
