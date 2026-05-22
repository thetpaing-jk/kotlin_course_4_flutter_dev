# Course 30 - Documentation, Build Tools, Compiler Plugins, and Style Migration

## Goal

Build a practical Kotlin skill set for `Documentation, Build Tools, Compiler Plugins, and Style Migration` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. KDoc and documentation habits

**Learn:** Document Kotlin APIs and understand build/codegen tools around a project.

**Flutter angle:** Good native documentation helps your future Flutter-side debugging.

**Build:** Write KDoc for a MethodChannel helper.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. KAPT/annotation processing overview

**Learn:** Recognize annotations and opt-in APIs used by frameworks and tools.

**Flutter angle:** Android/Kotlin libraries often use annotations for codegen, interop, or API stability.

**Build:** Identify what an annotation changes in a small example.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Gradle, Maven, Ant, and build tool awareness

**Learn:** Read Kotlin/Android build configuration and dependency declarations.

**Flutter angle:** Flutter projects still contain Android Gradle files, especially for plugins.

**Build:** Identify plugin, dependency, and version lines in a Gradle file.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. Compiler plugins and code style migration

**Learn:** Understand Compiler plugins and code style migration as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Flutter projects still contain Android Gradle files, so Gradle literacy makes native-side debugging less painful.

## Practice

1. Find one dependency declaration in an Android Gradle file and identify group/artifact/version.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Documentation, Build Tools, Compiler Plugins, and Style Migration` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Kotlin documentation comments are commonly called:
   - A. KDoc
   - B. KText
   - C. DocStringOnly
   - D. JSDoc
2. Android Kotlin builds commonly use:
   - A. Gradle
   - B. Photoshop
   - C. SQLite only
   - D. Figma

### Fill In The Blank

1. Annotation processing for Kotlin is often abbreviated ____.
2. Build logic can use Kotlin or Groovy ____.

### Coding Exam

Write a commented Gradle Kotlin DSL dependency example for a Kotlin library.
