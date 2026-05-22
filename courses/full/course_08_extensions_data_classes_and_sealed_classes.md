# Course 08 - Extensions, Data Classes, and Sealed Classes

## Goal

Build a practical Kotlin skill set for `Extensions, Data Classes, and Sealed Classes` and connect each idea to practical work a Flutter developer is likely to meet.

## Lessons

### 1. Extension functions and extension properties

**Learn:** Add small domain helpers to existing Kotlin types without inheritance.

**Flutter angle:** Use extension functions the way you use Dart extension methods for model formatting and validation.

**Build:** Write one extension that turns raw API/platform data into a UI-safe value.

```kotlin
fun String.toRouteKey(): String =
    trim().lowercase().replace(" ", "_")

val route = "Course Detail".toRouteKey()
```
### 2. Data class generated behavior: equality, copy, destructuring

**Learn:** Model immutable app data with generated equality, copy, and destructuring support.

**Flutter angle:** Use it like a Dart model class with copyWith/equatable-style behavior.

**Build:** Create a data class for a Flutter screen state payload and update it with copy().

```kotlin
data class CourseProgress(
    val courseId: String,
    val completedLessons: Int,
    val totalLessons: Int
)

val next = CourseProgress("basic-syntax", 2, 5).copy(completedLessons = 3)
```
### 3. Sealed classes and sealed interfaces for finite state models

**Learn:** Represent a closed set of states or events and handle them exhaustively with when.

**Flutter angle:** Map loading/success/error or BLoC states into type-safe Kotlin models.

**Build:** Create a sealed UiState and render a label with when.

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
### 4. Using exhaustive `when` for UI/API states

**Learn:** Understand Using exhaustive `when` for UI/API states as a practical Kotlin skill, then use it in small, readable programs.

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

This is the Kotlin version of clean app state modeling: `data class` for values, `sealed class` for Loading/Success/Error.

## Practice

1. Model `AuthState` as a sealed class.
2. Implement the coding exam as a small Kotlin snippet and compare the idea with Dart/Flutter.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- How would I use `Extensions, Data Classes, and Sealed Classes` in a real Flutter + Android integration?
- What is the closest Dart/Flutter mental model, and where does Kotlin behave differently?
- What mistake should I avoid when writing production Kotlin for this topic?

## Exam

### Multiple Choice

1. Value-style models are commonly represented with:
   - A. data class
   - B. while class
   - C. package class
   - D. jump class
2. Finite UI states are often modeled with:
   - A. sealed class
   - B. raw string
   - C. array index only
   - D. import alias only

### Fill In The Blank

1. Create a copy of a data class with the generated ____ function.
2. An extension function starts with `fun Type.____`.

### Coding Exam

Create `sealed class UiState` with Loading, Success(data), and Error(message), then describe it with `when`.
