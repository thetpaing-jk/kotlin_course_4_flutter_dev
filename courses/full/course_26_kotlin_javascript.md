# Course 26 - Kotlin JavaScript

## Goal

Understand Kotlin/JS as a separate Kotlin target so you can evaluate it clearly without confusing it with Flutter web.

## Lessons

### 1. Kotlin/JS target overview

**Learn:** Understand Kotlin/JS target overview as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Flutter web renders Dart/Flutter UI in the browser; Kotlin/JS compiles Kotlin code for JavaScript ecosystems.

**Build:** Write a comparison note: what Flutter web owns, what Kotlin/JS owns, and where each might fit in a product.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. `dynamic` and JavaScript interop

**Learn:** Use `dynamic` only when Kotlin cannot know the JavaScript shape at compile time. Keep dynamic values near the interop boundary.

**Flutter angle:** This is closer to JavaScript interop in Dart web than to Android plugin work.

**Build:** Sketch one external JavaScript API you would call from Kotlin/JS and note the type-safety tradeoff.

```kotlin
external fun alert(message: String)

fun showCourseMessage(title: String) = alert("Course: $title")
```
### 3. Modules and calling across Kotlin/JS boundaries

**Learn:** Understand Modules and calling across Kotlin/JS boundaries as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Think of modules as package boundaries: you need to know what is exported, imported, and safe to call.

**Build:** Identify one JS package and decide what Kotlin declarations would be needed before calling it.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. Dead code elimination and JS-specific limitations

**Learn:** Understand Dead code elimination and JS-specific limitations as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Like Flutter web tree-shaking, unused code should not become unnecessary browser payload.

**Build:** List two things that should stay out of browser-targeted code: secrets and platform-only APIs.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Kotlin/JS is not Flutter web; it is Kotlin compiled for JavaScript ecosystems.

## Practice

1. Write a comparison note between Flutter web and Kotlin/JS.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I evaluate `Kotlin JavaScript` beside Flutter web in a real project?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Kotlin/JS compiles Kotlin to target:
   - A. JavaScript
   - B. Swift only
   - C. Dart only
   - D. SQL
2. The JS interop flexible type is:
   - A. dynamic
   - B. AnyNative
   - C. jsObjectOnly
   - D. flex

### Fill In The Blank

1. Unused JS output can be reduced by DCE: dead code ____.
2. JavaScript module interop involves JS ____.

### Coding Exam

Sketch an external JavaScript function declaration in Kotlin/JS.
