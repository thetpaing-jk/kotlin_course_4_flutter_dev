# Course 09 - Scope Functions

## Goal

Study **Scope Functions** using the provided `Kotlin for Flutter Developers` module as the single source for this course.

## Lessons

Scope functions တွေဟာ Kotlin ရဲ့ unique feature တွေဖြစ်ပြီး code ကို ပိုသေသပ်တပ်ရပ်ဖြစ်အောင် ကူညီတယ်။

### 9.1 `let` — Nullable checks နဲ့ transformations

Flutter မှာ null check ပြီးနောက် block of code run ချင်တဲ့ pattern နဲ့ ဆင်တယ်။

```kotlin
val name: String? = getUserName()

// ❌ Traditional approach
if (name != null) {
    println(name.toUpperCase())
}

// ✅ Using let
name?.let {
    println(it.toUpperCase())
}

// chaining operations
val result = "  hello kotlin  "
    .let { it.trim() }
    .let { it.capitalize() }
    .let { "Result: $it" }
println(result)  // "Result: Hello kotlin"
```

---

### 9.2 `apply` — Object configuration (Flutter ရဲ့ cascade `..` နဲ့ ဆင်)

Object ကို configure လုပ်ပြီး ထို object ကိုပဲ return — Flutter ရဲ့ cascade notation `..` နဲ့ concept ဆင်တယ်။

**Kotlin:**
```kotlin
data class Config(
    var host: String = "",
    var port: Int = 0,
    var timeout: Int = 0
)

val config = Config().apply {
    host = "api.example.com"
    port = 8080
    timeout = 30000
}
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
// Dart မှာ cascade notation သုံး
final paint = Paint()
    ..color = Colors.blue
    ..strokeWidth = 2.0
    ..style = PaintingStyle.stroke;
```

---

### 9.3 `also` — Side effects (logging, debugging)

`apply` နဲ့ ဆင်ပြီး `it` ကိုသုံးတယ် — debugging/logging အတွက် သဘောကောင်းတယ်။

```kotlin
val users = mutableListOf<String>()
    .also { println("List created: $it") }

users.add("Aung")
users.add("Mg Mg")
    .also { println("Added user, list is now: $users") }
```

---

### 9.4 `run` — Object operations + return result

```kotlin
val user: User? = getUser()

val greeting = user?.run {
    "Hello, $name! You are $age years old."
} ?: "Hello, stranger!"
```

---

### 9.5 Scope Functions Summary

| Function | Context object | Return value | Use case |
|----------|---------------|--------------|----------|
| `let` | `it` | Lambda result | Null check + transform |
| `run` | `this` | Lambda result | Object ops + compute result |
| `with` | `this` | Lambda result | Multiple operations on object |
| `apply` | `this` | Object itself | Object configuration |
| `also` | `it` | Object itself | Side effects (logging) |

---

## Flutter Bridge

This module already compares Kotlin with Dart/Flutter. Use those comparisons as the main bridge when reading Android native code, Flutter plugin code, or Kotlin examples inside Android SDK documentation.

## Practice

1. Re-type one Kotlin example from this module and run through the meaning line by line.
2. Write the matching Dart/Flutter version shown in the module, then note the syntax differences.
3. Pick one idea from this module and describe where it could appear in a Flutter Android plugin.

## Q&A Checkpoint

- What part of **Scope Functions** feels closest to Dart or Flutter?
- What syntax difference from this module should I remember when reading Kotlin code?
- Where would this module appear in real Flutter + Android native work?

## Exam

### Multiple Choice

1. The main topic of this course is:
   - A. Scope Functions
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

Write a small Kotlin snippet that demonstrates one idea from **Scope Functions**. Add a short comment explaining the Dart/Flutter comparison from the module.
