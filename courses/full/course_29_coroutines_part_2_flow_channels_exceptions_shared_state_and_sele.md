# Course 29 - Coroutines Part 2: Flow, Channels, Exceptions, Shared State, and Select

## Goal

Build a practical Kotlin skill set for `Coroutines Part 2: Flow, Channels, Exceptions, Shared State, and Select` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Flow as asynchronous streams

**Learn:** Process a stream of asynchronous values with Flow operators and cancellation-aware collection.

**Flutter angle:** Use Flow when a Flutter developer would think about Stream updates.

**Build:** Emit progress values and collect them into UI-state text.

```kotlin
suspend fun loadTitle(): String {
    return "Kotlin Course"
}

// In Android apps, call suspend functions from a lifecycle-aware scope.
```
### 2. Channels for coroutine communication

**Learn:** Write asynchronous Kotlin code with suspend functions, scopes, cancellation, and dispatchers.

**Flutter angle:** Compare suspend functions with Dart Future and Flow with Dart Stream.

**Build:** Build a fake repository call and decide where IO/main-thread work belongs.

```kotlin
suspend fun loadTitle(): String {
    return "Kotlin Course"
}

// In Android apps, call suspend functions from a lifecycle-aware scope.
```
### 3. Exception handling and supervision basics

**Learn:** Build fluency with Kotlin values, types, packages, imports, and simple functions.

**Flutter angle:** These are the pieces you need before touching Android plugin code.

**Build:** Write one tiny program that prints formatted app data.

```kotlin
fun courseLabel(name: String, completed: Int, total: Int): String {
    return "$name: $completed/$total completed"
}
```
### 4. Shared mutable state, synchronization, and select expressions

**Learn:** Understand Shared mutable state, synchronization, and select expressions as a practical Kotlin skill, then use it in small, readable programs.

**Flutter angle:** Connect the idea to Flutter architecture, platform channels, app state, or model code.

**Build:** Write a small Kotlin example and explain what would feel similar or different in Dart.

```kotlin
sealed class UiState {
    data object Loading : UiState()
    data class Success(val title: String) : UiState()
    data class Error(val message: String) : UiState()
}

fun labelFor(state: UiState): String = when (state) {
    UiState.Loading -> "Loading"
    is UiState.Success -> state.title
    is UiState.Error -> state.message
}
```

## Flutter Bridge

Flow is the closest Kotlin concept to Dart `Stream`, but coroutine cancellation and collection scopes matter.

## Practice

1. Create a Flow that emits loading progress values.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Coroutines Part 2: Flow, Channels, Exceptions, Shared State, and Select` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Asynchronous streams in coroutines commonly use:
   - A. Flow
   - B. MapOnly
   - C. Object
   - D. Package
2. Flow values are produced with:
   - A. emit
   - B. print
   - C. returnOnly
   - D. package

### Fill In The Blank

1. Dart Stream is conceptually close to Kotlin ____.
2. Mutable shared state needs careful ____ control.

### Coding Exam

Write a `Flow<Int>` that emits 0, 50, and 100.
