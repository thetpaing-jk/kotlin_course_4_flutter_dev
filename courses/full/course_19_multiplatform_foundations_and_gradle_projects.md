# Course 19 - Multiplatform Foundations and Gradle Projects

## Goal

Build a practical Kotlin skill set for `Multiplatform Foundations and Gradle Projects` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Common source sets and platform source sets

**Learn:** Understand Common source sets and platform source sets as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun readUserId(args: Map<String, Any?>): String? =
    (args["userId"] as? String)?.takeIf { it.isNotBlank() }
```
### 2. `expect` and `actual` declarations

**Learn:** Understand `expect` and `actual` declarations as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Sharing models, validation, and networking code

**Learn:** Understand Sharing models, validation, and networking code as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
data class CourseProgress(
    val courseId: String,
    val completedLessons: Int,
    val totalLessons: Int
)

val next = CourseProgress("basic-syntax", 2, 5).copy(completedLessons = 3)
```
### 4. Gradle project shape for KMP

**Learn:** Read Kotlin/Android build configuration and dependency declarations.

**Flutter angle:** Flutter projects still contain Android Gradle files, especially for plugins.

**Build:** Identify plugin, dependency, and version lines in a Gradle file.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

KMP is not Flutter, but both care about sharing logic. Flutter shares UI; KMP shares Kotlin code across platform apps.

## Practice

1. Identify which parts of a Flutter app could become shared business logic.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Multiplatform Foundations and Gradle Projects` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Common declarations can use:
   - A. expect
   - B. maybe
   - C. sharedOnly
   - D. platform
2. Platform implementations can use:
   - A. actual
   - B. real
   - C. nativeOnly
   - D. targeted

### Fill In The Blank

1. KMP shared code often lives in a ____ source set.
2. Build setup is commonly managed with ____.

### Coding Exam

Sketch `expect fun platformName(): String` and one `actual` implementation.
