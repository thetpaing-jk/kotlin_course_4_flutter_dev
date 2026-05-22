# Course 21 - Null Safety, Exceptions, and Annotations

## Goal

Build a practical Kotlin skill set for `Null Safety, Exceptions, and Annotations` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Nullable vs non-nullable types

**Learn:** Design with nullable and non-nullable types, safe calls, and fallback values.

**Flutter angle:** This is close to Dart null safety, but Java interop can still introduce platform-type risk.

**Build:** Rewrite one unsafe !! expression into safe-call/Elvis style.

```kotlin
fun readUserId(args: Map<String, Any?>): String? =
    (args["userId"] as? String)?.takeIf { it.isNotBlank() }
```
### 2. Safe calls, Elvis operator, and not-null assertion

**Learn:** Design with nullable and non-nullable types, safe calls, and fallback values.

**Flutter angle:** This is close to Dart null safety, but Java interop can still introduce platform-type risk.

**Build:** Rewrite one unsafe !! expression into safe-call/Elvis style.

```kotlin
fun readUserId(args: Map<String, Any?>): String? =
    (args["userId"] as? String)?.takeIf { it.isNotBlank() }
```
### 3. Exception handling with `try`, `catch`, `finally`

**Learn:** Understand Exception handling with `try`, `catch`, `finally` as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. Annotations and metadata-driven tooling

**Learn:** Recognize annotations and opt-in APIs used by frameworks and tools.

**Flutter angle:** Android/Kotlin libraries often use annotations for codegen, interop, or API stability.

**Build:** Identify what an annotation changes in a small example.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

Dart null safety helps here, but Kotlin Java interop adds platform-type risk.

## Practice

1. Avoid `!!` while reading nested nullable data.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Null Safety, Exceptions, and Annotations` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. A nullable String is written:
   - A. String?
   - B. String!
   - C. ?String
   - D. NullableString
2. The not-null assertion operator is:
   - A. !!
   - B. ??
   - C. ?:
   - D. ?.

### Fill In The Blank

1. Safe calls use ____.
2. Fallback values commonly use the Elvis operator ____.

### Coding Exam

Write `fun safeLength(text: String?): Int` without using `!!`.
