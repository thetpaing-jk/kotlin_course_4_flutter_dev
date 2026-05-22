# Course 24 - Java Interop Part 1: Calling Java from Kotlin

## Goal

Build a practical Kotlin skill set for `Java Interop Part 1: Calling Java from Kotlin` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Calling Java methods and using Java classes

**Learn:** Build Kotlin classes with constructors, properties, inheritance, and visibility choices.

**Flutter angle:** Use classes for Android-side service wrappers, SDK adapters, and app models.

**Build:** Create a small class that protects mutation behind a method.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. Getters/setters as properties

**Learn:** Understand Getters/setters as properties as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. SAM conversions and Java callbacks

**Learn:** Call Java APIs from Kotlin and expose Kotlin APIs cleanly to Java when needed.

**Flutter angle:** Android docs and SDK examples are often Java-first, so translation skill is practical.

**Build:** Convert a Java-style callback example into a Kotlin lambda wrapper.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. Platform types and nullability annotations

**Learn:** Design with nullable and non-nullable types, safe calls, and fallback values.

**Flutter angle:** This is close to Dart null safety, but Java interop can still introduce platform-type risk.

**Build:** Rewrite one unsafe !! expression into safe-call/Elvis style.

```kotlin
fun readUserId(args: Map<String, Any?>): String? =
    (args["userId"] as? String)?.takeIf { it.isNotBlank() }
```

## Flutter Bridge

Most Android SDK docs have Java examples, so you need to translate Java idioms into Kotlin safely.

## Practice

1. Wrap a nullable Java-style result into a safe Kotlin function.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Java Interop Part 1: Calling Java from Kotlin` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Java nullability without metadata may appear as:
   - A. platform type
   - B. Flutter type
   - C. CSS type
   - D. sealed type
2. A Java getter may look like a Kotlin:
   - A. property
   - B. package
   - C. range
   - D. flow

### Fill In The Blank

1. Java classes can be used from ____.
2. A Java single-method interface can use SAM ____.

### Coding Exam

Write a Kotlin wrapper that turns a Java-style nullable string into a non-null display label.
