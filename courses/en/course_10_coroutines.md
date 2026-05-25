# Course 10 — Coroutines (Async Programming)

> **Module:** 10 of 10 | **Level:** Advanced | **For:** Flutter Developers learning Kotlin

---

## Lessons

### 10.1 What are Coroutines?

Just like Flutter/Dart uses `Future` + `async/await`, Kotlin uses **Coroutines**. The key advantage: coroutines are lightweight — you can run millions concurrently without heavy thread overhead.

| Dart | Kotlin |
|------|--------|
| `async` function | `suspend` function |
| `await` keyword | (call the suspend function — no keyword needed) |
| `Future<T>` | `Deferred<T>` |
| `Future.wait()` | `async { }.await()` in parallel |

**Dart:**
```dart
Future<String> fetchUser(int id) async {
    final response = await http.get("...");
    return response.body;
}
```

**Kotlin:**
```kotlin
suspend fun fetchUser(id: Int): String {
    val response = httpClient.get("...")
    return response.body()
}
```

---

### 10.2 Coroutine Builders

```kotlin
import kotlinx.coroutines.*

// runBlocking — blocks current thread; use in main() or tests
fun main() = runBlocking {
    delay(1000L)   // suspends without blocking the thread
    println("Done")
}

// launch — fire and forget (like Dart's unawaited)
GlobalScope.launch {
    delay(500L)
    println("Background task done")
}

// async — use when you need a result (like Dart's Future)
val deferred = GlobalScope.async {
    delay(1000L)
    "Result"
}
val result = deferred.await()
```

---

### 10.3 Parallel Execution

```kotlin
fun main() = runBlocking {
    // Like Dart's Future.wait()
    val r1 = async { fetchUser(1) }
    val r2 = async { fetchUser(2) }
    println(r1.await())
    println(r2.await())
}
```

**Dart comparison:**
```dart
final results = await Future.wait([fetchUser(1), fetchUser(2)]);
```

---

### 10.4 suspend Functions

```kotlin
suspend fun loadData(): List<String> {
    delay(1000L)
    return listOf("item1", "item2", "item3")
}

fun main() = runBlocking {
    val data = loadData()   // no await keyword needed
    println(data.joinToString())
}
```

---

### 10.5 Exception Handling

```kotlin
fun main() = runBlocking {
    try {
        val result = async {
            delay(100L)
            throw RuntimeException("Something went wrong!")
        }
        result.await()
    } catch (e: Exception) {
        println("Caught: ${e.message}")
    }
}
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

**1.** What is the Kotlin equivalent of Dart's `async` keyword for functions?
- A. `async`
- B. `coroutine`
- C. `suspend`
- D. `concurrent`

**2.** What happens when you call a `suspend` function without `await` in Kotlin?
- A. Compilation error
- B. The call is ignored
- C. Execution automatically suspends until the result is ready
- D. It runs on a background thread

**3.** What is `launch` used for?
- A. Async operations that return a result
- B. Fire-and-forget background tasks
- C. Blocking the main thread
- D. Exception handling

**4.** What is the Kotlin equivalent of Dart's `Future.wait()`?
- A. `runBlocking { }`
- B. `launch { } + join()`
- C. Multiple `async { }.await()` calls
- D. `delay()`

**5.** When is `runBlocking` typically used?
- A. Production async code
- B. Testing and `main()` functions
- C. UI thread operations
- D. Database operations

**6.** Where can a `suspend` function be called from?
- A. Anywhere
- B. Only from `main()`
- C. Only from a coroutine scope or another `suspend` function
- D. Only from a background thread

**7.** What type does `async { }` return?
- A. `Job`
- B. `Deferred<T>`
- C. `Future<T>`
- D. `Promise<T>`

**8.** What is the Kotlin equivalent of Dart's `Future.delayed(Duration(milliseconds: 1000), ...)`?
- A. `Thread.sleep(1000)`
- B. `sleep(1000)`
- C. `delay(1000L)` inside a coroutine
- D. `Timer(1000) { }`

---

### Fill In The Blank

1. The Kotlin equivalent of Dart's `async` keyword on a function is `________`.
2. To start a coroutine and get its result later, use the `________` builder.
3. For a fire-and-forget background task, use the `________` builder.
4. The Kotlin equivalent of Dart's `Future.wait()` is multiple `________` builders with `.await()` calls.
5. To run a coroutine in tests and `main()`, use `________`.
6. To suspend without blocking the thread, use the `________` function.

---

### Coding Exam

**Problem 1 — suspend Function**

Write `fetchProductDetails(id: Int): String` — suspend for 500ms, then return `"Product #$id details"`. Call it from `runBlocking` and print the result.

**Problem 2 — Parallel Execution**

Simulate two parallel API calls:
- `fetchUserProfile(userId: Int)` — 300ms delay, returns `"Profile of $userId"`
- `fetchUserPosts(userId: Int)` — 500ms delay, returns `"Posts of $userId"`

Run both in parallel inside `runBlocking` and print both results.

**Problem 3 — Exception Handling**

Write `riskyOperation(shouldFail: Boolean): String` — if `shouldFail` is true, throw `RuntimeException("Operation failed!")`. Wrap the call in a try-catch inside `runBlocking` and add a comment comparing the pattern to Dart.

---
