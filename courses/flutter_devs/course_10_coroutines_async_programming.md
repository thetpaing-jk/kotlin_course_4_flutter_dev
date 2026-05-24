# Course 10 - Coroutines (Async Programming)

> **Module:** 10 of 10 | **Level:** Advanced | **For:** Flutter Developers learning Kotlin

## Lessons

### 10.1 Coroutines ဆိုတာ ဘာလဲ

Flutter/Dart ရဲ့ `Future` + `async/await` လိုပဲ Kotlin မှာ **Coroutines** သုံးတယ်။ Kotlin coroutines တွေဟာ lightweight thread တွေလိုပဲ — millions ကို concurrently run လုပ်လို့ရတယ်။

| Dart | Kotlin |
|------|--------|
| `async` function | `suspend` function |
| `await` keyword | (suspend call — keyword မလို) |
| `Future<T>` | `Deferred<T>` |
| `Future.wait()` | `async { }.await()` parallel |

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

// runBlocking — testing / main function
fun main() = runBlocking {
    delay(1000L)   // Thread block မဖြစ်ဘဲ suspend
    println("Done")
}

// launch — fire and forget (Dart unawaited နဲ့ ဆင်)
GlobalScope.launch {
    delay(500L)
    println("Background done")
}

// async — result လိုတဲ့အခါ (Dart Future နဲ့ ဆင်)
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
    // Dart ရဲ့ Future.wait() နဲ့ ဆင်
    val result1 = async { fetchUser(1) }
    val result2 = async { fetchUser(2) }
    println("User 1: ${result1.await()}")
    println("User 2: ${result2.await()}")
}
```

**Dart နဲ့ နှိုင်းယှဉ်:**
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
    val data = loadData()       // await keyword မလို
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
            throw RuntimeException("Error!")
        }
        result.await()
    } catch (e: Exception) {
        println("Caught: ${e.message}")
    }
}
```

**Dart နဲ့ နှိုင်းယှဉ်:**
```dart
try {
    final result = await Future.delayed(
        Duration(milliseconds: 100),
        () => throw Exception("Error!"),
    );
} catch (e) { print("Caught: $e"); }
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
1. Dart ရဲ့ `async` keyword နဲ့ ညီတဲ့ Kotlin keyword ကဘာလဲ?
- A. `async`
- B. `coroutine`
- C. `suspend`
- D. `concurrent`

2. Kotlin coroutines မှာ `await` keyword မသုံးဘဲ suspend function ကို call လုပ်ရင် ဘာဖြစ်မလဲ?
- A. Compilation error
- B. Function ကို ignore လုပ်မည်
- C. Automatically wait — result ready ဖြစ်မှ ဆက်သွားတယ်
- D. Background thread မှာ run မည်

3. `launch` coroutine builder ကဘာအတွက် သုံးတယ်?
- A. Result return လိုတဲ့ async operation
- B. Fire-and-forget — result မလိုတဲ့ background task
- C. Main thread block လုပ်ဖို့
- D. Exception handling

4. Dart ရဲ့ `Future.wait()` နဲ့ ညီတဲ့ Kotlin pattern က ဘာလဲ?
- A. `runBlocking { }`
- B. `launch { } + join()`
- C. `async { }.await()` multiple calls
- D. `delay()`

5. `runBlocking` ဘာအတွက် သုံးကြတာ များလဲ?
- A. Production async code
- B. Testing နဲ့ main function
- C. UI thread operations
- D. Database operations

6. suspend function ကို ဘယ်နေရာမှာပဲ call လုပ်လို့ ရသလဲ?
- A. Anywhere
- B. Main function ထဲမှာပဲ
- C. Coroutine scope သို့မဟုတ် အခြား suspend function ထဲမှာပဲ
- D. Background thread ထဲမှာပဲ

7. `async { }` builder က ဘာ return လုပ်တယ်?
- A. `Job`
- B. `Deferred<T>`
- C. `Future<T>`
- D. `Promise<T>`

8. Kotlin coroutines မှာ `delay(1000L)` ဟာ Dart ရဲ့ ဘာနဲ့ ညီသလဲ?
- A. `Thread.sleep(1000)`
- B. `sleep(1000)`
- C. `Future.delayed(Duration(milliseconds: 1000))`
- D. `Timer(Duration(seconds: 1), () { })`

### Fill In The Blank
1. Dart ရဲ့ `async` function keyword နဲ့ ညီတဲ့ Kotlin keyword က `________` ဖြစ်တယ်။
2. Result return လိုတဲ့ coroutine ဖို့ `________` builder သုံးတယ်။
3. Fire-and-forget background task ဖို့ `________` builder သုံးတယ်။
4. Dart ရဲ့ `Future.wait([a, b])` pattern ကို Kotlin မှာ `________` builder တွေ parallel launch ပြီး `await()` call ပြီး ရေးတယ်။
5. Testing နဲ့ main function မှာ coroutine run ဖို့ `________` builder သုံးတယ်။
6. Suspend function ထဲမှာ blocking မဖြစ်ဘဲ wait လုပ်ဖို့ `________` function သုံးတယ်။

### Coding Exam
**Problem 1 — suspend Function**

`fetchProductDetails(id: Int): String` suspend function ရေးပါ — 500ms delay ပြီး `"Product #$id details"` return လုပ်ပါ။ `runBlocking` မှာ call လုပ်ပြီး result print ပါ။

**Problem 2 — Parallel Execution**

Flutter app မှာ API call နှစ်ခု parallel run ချင်တဲ့ pattern simulate လုပ်ပါ။
- `fetchUserProfile(userId: Int)` — 300ms delay, `"Profile of $userId"` return
- `fetchUserPosts(userId: Int)` — 500ms delay, `"Posts of $userId"` return

`runBlocking` ထဲမှာ ၂ ခုကို parallel run ပြီး result နှစ်ခုစလုံး print ပါ။

**Problem 3 — Exception Handling**

`riskyOperation(shouldFail: Boolean): String` suspend function ရေးပါ — `shouldFail = true` ဆိုရင် `RuntimeException("Operation failed!")` throw ပါ။ `runBlocking` ထဲမှာ try-catch သုံးပြီး error handle လုပ်ပြပါ (Dart style နဲ့ compare comment ထည့်ပါ)。

---
