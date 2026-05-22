# Course 28 - Coroutines Part 1: Basics, Cancellation, Composition, and Context

## Goal

Build a practical Kotlin skill set for `Coroutines Part 1: Basics, Cancellation, Composition, and Context` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Coroutine basics and suspending functions

**Learn:** Write asynchronous Kotlin code with suspend functions, scopes, cancellation, and dispatchers.

**Flutter angle:** Compare suspend functions with Dart Future and Flow with Dart Stream.

**Build:** Build a fake repository call and decide where IO/main-thread work belongs.

```kotlin
suspend fun loadTitle(): String {
    return "Kotlin Course"
}

// In Android apps, call suspend functions from a lifecycle-aware scope.
```
### 2. Cancellation and timeout handling

**Learn:** Understand Cancellation and timeout handling as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 3. Sequential vs concurrent composition with `async`

**Learn:** Understand Sequential vs concurrent composition with `async` as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
suspend fun loadTitle(): String {
    return "Kotlin Course"
}

// In Android apps, call suspend functions from a lifecycle-aware scope.
```
### 4. Coroutine context and dispatchers

**Learn:** Write asynchronous Kotlin code with suspend functions, scopes, cancellation, and dispatchers.

**Flutter angle:** Compare suspend functions with Dart Future and Flow with Dart Stream.

**Build:** Build a fake repository call and decide where IO/main-thread work belongs.

```kotlin
suspend fun loadTitle(): String {
    return "Kotlin Course"
}

// In Android apps, call suspend functions from a lifecycle-aware scope.
```

## Flutter Bridge

Dart `Future` maps conceptually to suspend work, but Kotlin adds structured concurrency and dispatcher control.

## Practice

1. Run two fake network requests concurrently with `async`.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Coroutines Part 1: Basics, Cancellation, Composition, and Context` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. A suspendable function uses:
   - A. suspend
   - B. asyncOnly
   - C. future
   - D. awaited
2. Run concurrent result-producing work with:
   - A. async
   - B. package
   - C. object
   - D. annotation

### Fill In The Blank

1. Switch IO work using `Dispatchers.____`.
2. Wait for `async` result with ____.

### Coding Exam

Write `suspend fun loadDashboard()` using `coroutineScope` and two `async` calls.
