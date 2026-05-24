# Course 06 - Null Safety

> **Module:** 6 of 10 | **Level:** Intermediate | **For:** Flutter Developers learning Kotlin

## Lessons

### 6.1 Nullable vs Non-Null Types

**Kotlin:**
```kotlin
var name: String = "Aung"
name = null               // ❌ Compilation error

var nickname: String? = "Aung"
nickname = null           // ✅ OK
```

**Dart နဲ့ နှိုင်းယှဉ်:**
```dart
String name = "Aung";
name = null;              // ❌ Error

String? nickname = "Aung";
nickname = null;          // ✅ OK
```

> 💡 `String?` syntax က Kotlin နဲ့ Dart မှာ တူတူပဲ!

---

### 6.2 Safe Call Operator `?.`

```kotlin
val user: User? = getUser()
val name = user?.name                  // null ဆိုရင် null return
val cityLength = user?.address?.city?.length   // chain
```

---

### 6.3 Elvis Operator `?:`

**Kotlin:**
```kotlin
val name: String? = null
val displayName = name ?: "Anonymous"   // null ဆိုရင် fallback

fun processName(name: String?) {
    val actual = name ?: return
    println("Processing: $actual")
}
```

**Dart နဲ့ နှိုင်းယှဉ်:**
```dart
String? name = null;
final displayName = name ?? "Anonymous";   // Dart မှာ ??
```

> 💡 Kotlin `?:` = Dart `??` — logic တူတူ၊ symbol ကွဲ

---

### 6.4 Non-Null Assertion `!!`

```kotlin
val name: String? = "Aung"
val length = name!!.length    // null ဆိုရင် NullPointerException
```

> ⚠️ `!!` ကို တတ်နိုင်သမျှ avoid လုပ်ပါ — `?.` နဲ့ `?:` ကို prefer လုပ်ပါ။

---

### 6.5 Smart Cast

```kotlin
fun printLength(obj: Any) {
    if (obj is String) {
        println(obj.length)   // cast မလိုဘဲ String method သုံးနိုင်
    }
}

val name: String? = getName()
if (name != null) {
    println(name.length)      // smart cast — non-null String အဖြစ် သုံး
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
1. Kotlin မှာ nullable variable ကိုကြေငြာဖို့ type ရဲ့ နောက်မှာ ဘာထည့်ရတယ်?
- A. `!`
- B. `?`
- C. `*`
- D. `~`

2. Dart ရဲ့ `??` operator နဲ့ ညီတဲ့ Kotlin operator ကဘာလဲ?
- A. `?.`
- B. `!!`
- C. `?:`
- D. `?`

3. Safe call operator `?.` ကိုသုံးရင် object null ဖြစ်နေရင် ဘာ return လုပ်မလဲ?
- A. Exception ပစ်တယ်
- B. Default value return
- C. `null` return
- D. Empty string return

4. Smart cast ဆိုတာ ဘာကိုဆိုလိုတာလဲ?
- A. AI-powered type conversion
- B. Type check ပြီးနောက် explicit cast မလိုဘဲ compiler က type ကို automatically handle
- C. Runtime type casting
- D. Type alias

5. `!!` operator ကိုသုံးပြီး variable null ဖြစ်နေရင် ဘာဖြစ်မလဲ?
- A. Compilation error
- B. `null` return
- C. NullPointerException ပစ်မည်
- D. Default value return

6. `val length = user?.name?.length` မှာ `user` null ဖြစ်ရင် `length` က ဘာဖြစ်မလဲ?
- A. 0
- B. -1
- C. `null`
- D. Compilation error

7. Dart ရဲ့ `!` (non-null assertion) နဲ့ ညီတဲ့ Kotlin operator ကဘာလဲ?
- A. `?`
- B. `?.`
- C. `?:`
- D. `!!`

8. `val result = name ?: return` ဆိုတဲ့ code မှာ `name` null ဆိုရင် ဘာဖြစ်မလဲ?
- A. `result` က null ဖြစ်မည်
- B. Exception ပစ်မည်
- C. function ကနေ ထွက်မည်
- D. `"return"` string ကို assign လုပ်မည်

### Fill In The Blank
1. Kotlin မှာ `String?` ဆိုတာ value က `String` သို့မဟုတ် `________` ဖြစ်နိုင်တယ်ဆိုလိုတာပဲ။
2. Dart ရဲ့ `??` operator နဲ့ ညီတဲ့ Kotlin operator က `________` ဖြစ်တယ်။
3. `?.` operator ကို `________` call operator လို့ ခေါ်တယ်။
4. `!!` operator ကို overuse မလုပ်ဖို့ recommend လုပ်ကြောင်း — ဘုရင် `________` နဲ့ `________` ကို prefer လုပ်ပါ။
5. Type check (`is`) ပြီးနောက် explicit cast မလိုတဲ့ feature ကို `________` cast လို့ ခေါ်တယ်။
6. Non-null variable တစ်ခုကို null assign လုပ်ဖို့ကြိုးစားရင် `________` error ဖြစ်တယ်။

### Coding Exam
**Problem 1 — Safe Navigation**

Flutter app မှာ API ကနေ ရလာတဲ့ optional user data handle လုပ်ဖို့ function ရေးပါ။ `getUserDisplayName(user: User?)` function — user null ဆိုရင် `"Guest"` return၊ user ရှိပေမဲ့ name blank ဆိုရင် `"Anonymous"` return၊ မဟုတ်ရင် name return။

```kotlin
data class User(val name: String?, val email: String?)
```

**Problem 2 — Elvis Chain**

`getServerUrl(host: String?, port: Int?): String` function ရေးပါ။
- host null ဆိုရင် `"localhost"` fallback
- port null ဆိုရင် `8080` fallback
- Result: `"http://host:port"` format

**Problem 3 — Smart Cast**

`processInput(input: Any?)` function ရေးပါ — input ကို type check လုပ်ပြီး:
- `String` ဆိုရင် → uppercase လုပ်ပြီး print
- `Int` ဆိုရင် → double လုပ်ပြီး print
- `null` ဆိုရင် → `"No input"` print
- အခြား → `"Unknown type"` print

---
