# Course 09 — Scope Functions

> **Module:** 9 of 10 | **Level:** Advanced | **For:** Flutter Developers learning Kotlin

---

## Lessons

### 9.1 What are Scope Functions?

Scope functions execute a code block in the context of an object. Kotlin has five: `let`, `run`, `with`, `apply`, and `also`.

| Function | Context object | Return value | Primary use case |
|----------|---------------|--------------|------------------|
| `let` | `it` | Lambda result | Null checks + transforms |
| `run` | `this` | Lambda result | Object ops + compute result |
| `with` | `this` | Lambda result | Multiple operations on object |
| `apply` | `this` | Object itself | Object configuration |
| `also` | `it` | Object itself | Side effects (logging) |

---

### 9.2 `let` — Null Checks and Transforms

```kotlin
val name: String? = getUserName()

// Traditional
if (name != null) { println(name.uppercase()) }

// Using let
name?.let { println(it.uppercase()) }

// Chaining
val result = "  hello kotlin  "
    .let { it.trim() }
    .let { it.uppercase() }
    .let { "Result: $it" }
```

---

### 9.3 `apply` — Object Configuration

Equivalent to Dart's cascade `..` notation.

**Kotlin:**
```kotlin
val config = Config().apply {
    host = "api.example.com"
    port = 8080
    timeout = 30000
}
```

**Dart comparison:**
```dart
final paint = Paint()
    ..color = Colors.blue
    ..strokeWidth = 2.0;
```

---

### 9.4 `also` — Side Effects

```kotlin
val users = mutableListOf<String>()
    .also { println("List created: $it") }
users.add("Aung")
println("Final list: $users")
```

---

### 9.5 `run` — Compute a Result

```kotlin
val user: User? = getUser()
val greeting = user?.run {
    "Hello, $name! You are $age years old."
} ?: "Hello, stranger!"
```

---

## Flutter Bridge

Use the Dart/Flutter comparisons in this course when reading Kotlin code in Android plugins, native SDK integrations, or platform-channel work.

## Practice

1. Re-type one Kotlin example from the lesson.
2. Write the comparable Dart/Flutter version where the course provides one.
3. Note one Kotlin syntax difference that matters for Flutter Android work.

## Q&A Checkpoint

- What Kotlin idea from this course feels closest to Dart/Flutter?
- Which syntax difference from this course should I remember in Android plugin code?
- How would this concept appear in real Flutter + Android native work?

## Exam

### Multiple Choice

**1.** What does `apply` return?
- A. The lambda's last expression
- B. `null`
- C. The receiver object itself
- D. `Unit`

**2.** How do you access the context object inside `let`?
- A. `this`
- B. `self`
- C. `it`
- D. `obj`

**3.** Which scope function is most similar to Dart's cascade `..` notation?
- A. `let`
- B. `also`
- C. `run`
- D. `apply`

**4.** What is `also` primarily used for?
- A. Object configuration
- B. Null checks
- C. Side effects such as logging or debugging
- D. Type conversion

**5.** How do you access the context object inside `run`?
- A. `it`
- B. `this`
- C. `self`
- D. `context`

**6.** What does `name?.let { ... }` do when `name` is null?
- A. Executes the lambda anyway
- B. Skips the lambda block
- C. Converts `name` to uppercase
- D. Creates a copy of `name`

**7.** What is the key difference between `apply` and `also`?
- A. `apply` uses `this`, `also` uses `it`
- B. `apply` only works on nullable objects
- C. `also` does not return the object
- D. No difference

**8.** What is the main benefit of scope functions?
- A. Performance optimization
- B. Making code more concise and readable
- C. Thread safety
- D. Memory management

---

### Fill In The Blank

1. Inside `apply`, the context object is accessed via `________` (explicitly or implicitly).
2. `let` returns `________`.
3. The scope function equivalent to Dart's `..` cascade is `________`.
4. Inside `also`, the context object is accessed via `________`.
5. When `?.let { }` is used on a null object, the lambda is `________`.
6. The five scope functions are `let`, `run`, `with`, `________`, and `also`.

---

### Coding Exam

**Problem 1 — let**

```kotlin
data class AppConfig(val apiUrl: String?, val timeout: Int?)
```

Write `printConfig(config: AppConfig?)` using `let`:
- null config → print `"No config"`
- null apiUrl → print `"URL: not set"`
- both present → print `"URL: X | Timeout: Ys"`

**Problem 2 — apply**

```kotlin
data class AppSettings(
    var theme: String = "light",
    var language: String = "en",
    var notificationsEnabled: Boolean = false,
    var fontSize: Int = 14
)
```

Use `apply` to set theme `"dark"`, language `"my"`, notifications `true`, fontSize `16`.

**Problem 3 — also**

Build a `mutableListOf<String>()` and use `also` to log after each step: list creation, adding `"Aung"`, adding `"Mg Mg"`, and printing the final size.

---
