# Course 10 - Coroutines (Async Programming)

## Goal

Study **Coroutines (Async Programming)** using the provided `Kotlin for Flutter Developers` module as the single source for this course.

## Lessons

> **Flutter developer တွေအတွက် note:** Dart ရဲ့ `async/await` ကို သိပြီးဆိုရင် Kotlin coroutines ကို concept အနေနဲ့ နားလည်ပါမယ်။ Syntax ကနည်းနည်းကွဲတယ်။

### 10.1 Coroutines ဆိုတာ ဘာလဲ

Flutter/Dart မှာ `Future` + `async/await` သုံးသလို Kotlin မှာ **Coroutines** သုံးတယ်။ ကွာခြားချက်ကတော့ Kotlin coroutines တွေဟာ lightweight thread တွေလိုပဲ — millions ကို concurrently run လုပ်လို့ရတယ်။

**Dart:**
```dart
Future<String> fetchUser(int id) async {
    final response = await http.get("https://api.example.com/users/$id");
    return response.body;
}

void main() async {
    final user = await fetchUser(1);
    print(user);
}
```

**Kotlin Coroutines:**
```kotlin
suspend fun fetchUser(id: Int): String {
    val response = httpClient.get("https://api.example.com/users/$id")
    return response.body()
}

fun main() = runBlocking {
    val user = fetchUser(1)
    println(user)
}
```

> 💡 Dart ရဲ့ `async` = Kotlin ရဲ့ `suspend`
> Dart ရဲ့ `await` = Kotlin coroutines မှာ `suspend function` ကို call လုပ်တာပဲ (await keyword မလို)

---

### 10.2 Coroutine Builders

```kotlin
import kotlinx.coroutines.*

// runBlocking — current thread ကို block လုပ်ပြီး run (main function / testing)
fun main() = runBlocking {
    println("Start")
    delay(1000L)    // Thread block မဖြစ်ဘဲ suspend ဖြစ်တယ်
    println("End")
}

// launch — fire and forget (return မလို)
// Dart ရဲ့ unawaited(future) နဲ့ ဆင်တယ်
GlobalScope.launch {
    delay(500L)
    println("Background task done")
}

// async — result return လိုအပ်ရင်
// Dart ရဲ့ Future နဲ့ ဆင်တယ်
val deferred = GlobalScope.async {
    delay(1000L)
    "Result from async"
}
val result = deferred.await()
```

---

### 10.3 Structured Concurrency

Flutter ရဲ့ async ကို best practice အတိုင်း သုံးသလိုပဲ Kotlin မှာ structured concurrency ကို follow လုပ်ပါ။

```kotlin
fun main() = runBlocking {
    
    // Parallel execution — Dart ရဲ့ Future.wait() နဲ့ ဆင်
    val result1 = async { fetchUser(1) }
    val result2 = async { fetchUser(2) }
    
    // နှစ်ခုစလုံး ပြီးအောင် စောင့်
    println("User 1: ${result1.await()}")
    println("User 2: ${result2.await()}")
}
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
void main() async {
    // Parallel execution
    final results = await Future.wait([
        fetchUser(1),
        fetchUser(2),
    ]);
    
    print("User 1: ${results[0]}");
    print("User 2: ${results[1]}");
}
```

---

### 10.4 suspend Functions

```kotlin
// suspend function — coroutine ထဲမှာပဲ call လုပ်လို့ရ
suspend fun loadData(): List<String> {
    delay(1000L)    // simulate network delay
    return listOf("item1", "item2", "item3")
}

suspend fun processData(data: List<String>): String {
    return data.joinToString(", ")
}

// chain suspend functions
fun main() = runBlocking {
    val data = loadData()
    val result = processData(data)
    println(result)
}
```

---

### 10.5 Exception Handling in Coroutines

**Kotlin:**
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

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
void main() async {
    try {
        final result = await Future.delayed(
            Duration(milliseconds: 100),
            () => throw Exception("Something went wrong!"),
        );
    } catch (e) {
        print("Caught: $e");
    }
}
```

---

## 🎯 Quick Reference: Dart ↔ Kotlin Cheatsheet

| Concept | Dart (Flutter) | Kotlin |
|---------|----------------|--------|
| Immutable variable | `final` | `val` |
| Mutable variable | `var` | `var` |
| Nullable type | `String?` | `String?` |
| Null fallback | `??` | `?:` |
| Safe call | `?.` | `?.` |
| Non-null assertion | `!` | `!!` |
| Function keyword | (return type ကိုပဲ) | `fun` |
| Async function | `async` | `suspend` |
| Await | `await` | (suspend function call) |
| Parallel async | `Future.wait()` | `async { }.await()` |
| Model class | Freezed / manual | `data class` |
| Switch expression | `switch` (Dart 3) | `when` |
| Cascade notation | `..` | `apply { }` |
| List transform | `.map()` | `.map { }` |
| List filter | `.where()` | `.filter { }` |
| All match | `.every()` | `.all { }` |
| Any match | `.any()` | `.any { }` |
| Arrow function | `=>` | `= expression` |
| Interface | `abstract class` / `interface` | `interface` |
| Inheritance | `extends` | `: ParentClass()` |
| Override annotation | `@override` | `override` keyword |
| No-return type | `void` | `Unit` |

---

## 📚 နောက်ဆက်တွဲ လေ့လာသင့်တာများ

1. **Extension Functions** — Dart extension methods နဲ့ concept ဆင်
2. **Sealed Classes** — Dart sealed classes (3.0) နဲ့ compare
3. **Generics** — Dart generics နဲ့ ဆင်တယ်
4. **Delegation** — Design pattern ကို Kotlin built-in support
5. **Android-specific:** ViewModel, LiveData, Flows

---

*Course created from: Kotlin Language Documentation | For Flutter developers learning Android native development*

## Flutter Bridge

This module already compares Kotlin with Dart/Flutter. Use those comparisons as the main bridge when reading Android native code, Flutter plugin code, or Kotlin examples inside Android SDK documentation.

## Practice

1. Re-type one Kotlin example from this module and run through the meaning line by line.
2. Write the matching Dart/Flutter version shown in the module, then note the syntax differences.
3. Pick one idea from this module and describe where it could appear in a Flutter Android plugin.

## Q&A Checkpoint

- What part of **Coroutines (Async Programming)** feels closest to Dart or Flutter?
- What syntax difference from this module should I remember when reading Kotlin code?
- Where would this module appear in real Flutter + Android native work?

## Exam

### Multiple Choice

1. The main topic of this course is:
   - A. Coroutines (Async Programming)
   - B. CSS layout only
   - C. SQL indexes only
   - D. Figma export settings
2. A good way for a Flutter developer to learn this module is to:
   - A. Compare the Kotlin examples with the Dart/Flutter examples in the lesson
   - B. Ignore all Dart comparisons
   - C. Memorize Android Studio shortcuts only
   - D. Skip all code samples

### Fill In The Blank

1. One important term from this module is ____.
2. Another lesson topic from this module is ____.

### Coding Exam

Write a small Kotlin snippet that demonstrates one idea from **Coroutines (Async Programming)**. Add a short comment explaining the Dart/Flutter comparison from the module.
