# Course 09 - Scope Functions

## Goal

Study this module from `files.zip` and use the included exam questions as the source of truth for assessment.

## Lessons

### 9.1 Scope Functions ဆိုတာ ဘာလဲ

Object တစ်ခုရဲ့ context ထဲမှာ code block execute လုပ်ဖို့ သုံးတဲ့ special functions တွေ ဖြစ်တယ်။ `let`, `run`, `with`, `apply`, `also` ဆိုပြီး ၅ မျိုးရှိတယ်။

| Function | Context object | Return value | Use case |
|----------|---------------|--------------|----------|
| `let` | `it` | Lambda result | Null check + transform |
| `run` | `this` | Lambda result | Object ops + compute |
| `with` | `this` | Lambda result | Multiple ops on object |
| `apply` | `this` | Object itself | Object configuration |
| `also` | `it` | Object itself | Side effects (logging) |

---

### 9.2 `let` — Null checks နဲ့ Transforms

```kotlin
val name: String? = getUserName()

// Traditional
if (name != null) { println(name.uppercase()) }

// Using let
name?.let { println(it.uppercase()) }

// Chaining
val result = "  hello kotlin  "
    .let { it.trim() }
    .let { it.capitalize() }
    .let { "Result: $it" }
```

---

### 9.3 `apply` — Object Configuration

Flutter ရဲ့ cascade `..` notation နဲ့ concept ဆင်တယ်။

**Kotlin:**
```kotlin
val config = Config().apply {
    host = "api.example.com"
    port = 8080
    timeout = 30000
}
```

**Dart နဲ့ နှိုင်းယှဉ်:**
```dart
final paint = Paint()
    ..color = Colors.blue
    ..strokeWidth = 2.0;
```

---

### 9.4 `also` — Side Effects (Logging)

```kotlin
val users = mutableListOf<String>()
    .also { println("List created: $it") }

users.add("Aung")
    .also { println("After adding, list: $users") }
```

---

### 9.5 `run` — Result Return

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
1. `apply` scope function ရဲ့ return value က ဘာဖြစ်မလဲ?
- A. Lambda ရဲ့ last expression
- B. `null`
- C. Object itself (the receiver)
- D. `Unit`

2. `let` scope function ထဲမှာ context object ကို ဘယ် name နဲ့ access လုပ်မလဲ?
- A. `this`
- B. `self`
- C. `it`
- D. `obj`

3. Dart ရဲ့ cascade notation `..` နဲ့ concept အနီးဆုံး ဆင်တဲ့ Kotlin scope function ကဘာလဲ?
- A. `let`
- B. `also`
- C. `run`
- D. `apply`

4. `also` ကို ဘာအတွက် အသုံးများတယ်?
- A. Object configuration
- B. Null safety check
- C. Side effects (logging, debugging)
- D. Type conversion

5. `run` scope function ထဲမှာ context object ကို ဘယ် name နဲ့ access လုပ်မလဲ?
- A. `it`
- B. `this`
- C. `self`
- D. `context`

6. `name?.let { ... }` pattern ဟာ ဘာကို handle လုပ်တာလဲ?
- A. `name` ကို always execute
- B. `name` null ဆိုရင် lambda ကို skip လုပ်
- C. `name` ကို uppercase ပြောင်း
- D. `name` ကို copy လုပ်

7. `apply` နဲ့ `also` ကွာတာက?
- A. `apply` မှာ `this`၊ `also` မှာ `it` — context object access ပုံကွဲ
- B. `apply` ကို null objects ပဲ သုံးနိုင်
- C. `also` က object return မလုပ်ဘူး
- D. ကွာချက်မရှိ

8. Scope functions ကို main purpose ကဘာလဲ?
- A. Performance optimization
- B. Code ကို ပိုသေသပ်/ဖတ်ရတာလွယ်အောင် လုပ်ဖို့
- C. Thread safety
- D. Memory management

### Fill In The Blank
1. `apply` scope function ထဲမှာ context object ကို `________` keyword နဲ့ (သို့မဟုတ် ဖော်ပြမပြ) access လုပ်တယ်။
2. `let` scope function ရဲ့ return value က `________` ဖြစ်တယ်။
3. Dart ရဲ့ `..` cascade notation နဲ့ ဆင်တဲ့ Kotlin scope function က `________` ဖြစ်တယ်။
4. `also` scope function ထဲမှာ context object ကို `________` keyword နဲ့ access လုပ်တယ်။
5. Nullable object မှာ `?.let { }` သုံးရင် object null ဆိုတဲ့ အခြေအနေမှာ lambda ကို `________`။
6. Scope functions ၅ မျိုးကတော့ `let`, `run`, `with`, `________`, `also` ဖြစ်တယ်။

### Coding Exam
**Problem 1 — let**

`data class AppConfig(val apiUrl: String?, val timeout: Int?)` ဒီ class ရှိတယ်ဆိုပါ။ `printConfig(config: AppConfig?)` function ရေးပါ — `let` သုံးပြီး:
- config null → `"No config"` print
- apiUrl null → `"URL: not set"` print
- အားလုံးရှိ → `"URL: X | Timeout: Ys"` print

**Problem 2 — apply**

Flutter app settings object ကိုသုံးပြီး `apply` ဖြင့် configure လုပ်ပါ။

```kotlin
data class AppSettings(
    var theme: String = "light",
    var language: String = "en",
    var notificationsEnabled: Boolean = false,
    var fontSize: Int = 14
)
```

`apply` သုံးပြီး theme `"dark"`, language `"my"`, notifications `true`, fontSize `16` set လုပ်ပါ။

**Problem 3 — also (Debugging)**

`val userList = mutableListOf<String>()` ကို `also` သုံးပြီး အောက်ပါ တစ်ဆင့်စီ debug log print လုပ်ပါ:
1. List create ဖြစ်ကြောင်း log
2. "Aung" add ပြီးနောက် log
3. "Mg Mg" add ပြီးနောက် log
4. Final list size log

---
