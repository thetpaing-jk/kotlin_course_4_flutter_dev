# Course 01 - Orientation, Platforms, and Version Awareness

## Goal

Build a practical Kotlin skill set for `Orientation, Platforms, and Version Awareness` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Kotlin's role across Android, JVM server, JS, Native, and Multiplatform

**Learn:** Understand where Kotlin appears in Android projects and Flutter plugin integrations.

**Flutter angle:** This is the native layer you touch when a Flutter package needs SDK-specific Android code.

**Build:** Find a MethodChannel-style boundary and validate one argument.

```kotlin
fun readUserId(args: Map<String, Any?>): String? =
    (args["userId"] as? String)?.takeIf { it.isNotBlank() }
```
### 2. Why Flutter developers meet Kotlin in Android plugins and native SDKs

**Learn:** Understand where Kotlin appears in Android projects and Flutter plugin integrations.

**Flutter angle:** This is the native layer you touch when a Flutter package needs SDK-specific Android code.

**Build:** Find a MethodChannel-style boundary and validate one argument.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Keeping Kotlin knowledge current across versions

**Learn:** Kotlin evolves, so verify syntax, Gradle setup, and library APIs against the version you use today.

**Flutter angle:** This is like checking Flutter/Dart release notes before upgrading packages or copying older snippets into a new project.

**Build:** Pick one Kotlin example you find online and identify what belongs to the language, what belongs to Android, and what belongs to a library.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. Choosing the next deep-dive path after the basics

**Learn:** Build fluency with Kotlin values, types, packages, imports, and simple functions.

**Flutter angle:** These are the pieces you need before touching Android plugin code.

**Build:** Write one tiny program that prints formatted app data.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Flutter already gives you cross-platform UI. Kotlin is most useful for Android native work, shared business logic with KMP, and understanding SDK examples.

## Practice

1. Write a short note listing three places a Flutter project can contain Kotlin code.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Orientation, Platforms, and Version Awareness` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. For a Flutter developer, the most common first contact with Kotlin is usually:
   - A. Android native/plugin code
   - B. CSS styling
   - C. SQL schema only
   - D. Figma exports
2. Kotlin Multiplatform mainly focuses on:
   - A. Sharing Kotlin code across targets
   - B. Rendering Flutter widgets
   - C. Replacing Dart syntax
   - D. Serving only static HTML

### Fill In The Blank

1. The Android side of a Flutter plugin can be written in ____.
2. Kotlin examples should be checked against current ____ docs.

### Coding Exam

Create a Kotlin comment block that documents where Kotlin is used in your current Flutter/Android workflow.
