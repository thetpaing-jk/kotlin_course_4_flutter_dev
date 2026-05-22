# Course 25 - Java Interop Part 2: Calling Kotlin from Java

## Goal

Build a practical Kotlin skill set for `Java Interop Part 2: Calling Kotlin from Java` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. How Kotlin declarations appear to Java

**Learn:** Call Java APIs from Kotlin and expose Kotlin APIs cleanly to Java when needed.

**Flutter angle:** Android docs and SDK examples are often Java-first, so translation skill is practical.

**Build:** Convert a Java-style callback example into a Kotlin lambda wrapper.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 2. `@JvmStatic`, `@JvmField`, and file facades

**Learn:** Understand `@JvmStatic`, `@JvmField`, and file facades as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Default arguments and overloads

**Learn:** Understand Default arguments and overloads as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. Designing Kotlin APIs that Java callers can use cleanly

**Learn:** Call Java APIs from Kotlin and expose Kotlin APIs cleanly to Java when needed.

**Flutter angle:** Android docs and SDK examples are often Java-first, so translation skill is practical.

**Build:** Convert a Java-style callback example into a Kotlin lambda wrapper.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```

## Flutter Bridge

If an Android SDK or generated code calls your Kotlin, Java-facing annotations can matter.

## Practice

1. Expose a companion object helper as a static Java method.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Java Interop Part 2: Calling Kotlin from Java` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Expose companion member as Java static with:
   - A. @JvmStatic
   - B. @StaticOnly
   - C. @JavaCall
   - D. @CompanionStaticOnly
2. Generate overloads for default arguments with:
   - A. @JvmOverloads
   - B. @ManyConstructors
   - C. @OverloadAll
   - D. @DefaultJava

### Fill In The Blank

1. A field can be exposed with ____.
2. Kotlin files compile to Java-visible file ____.

### Coding Exam

Sketch a Kotlin utility object with a `@JvmStatic` function.
