# Course 06 - Null Safety

## Goal

Study **Null Safety** using the provided `Kotlin for Flutter Developers` module as the single source for this course.

## Lessons

> **Flutter developer တွေအတွက် note:** Dart 2.12+ မှာ null safety ထည့်ပြီးဖြစ်တာကြောင့် ဒီ concept ကို နားလည်ပြီးဖြစ်မှာပါ။ Kotlin မှာ syntax နည်းနည်းကွဲပေမဲ့ philosophy အတူတူပါပဲ။

### 6.1 Nullable vs Non-Null Types

**Kotlin:**
```kotlin
var name: String = "Aung"       // null မဖြစ်နိုင် (non-null)
name = null                      // ❌ Compilation error!

var nickname: String? = "Aung"  // null ဖြစ်နိုင် (nullable)
nickname = null                  // ✅ OK
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
String name = "Aung";           // non-null
name = null;                    // ❌ Compilation error

String? nickname = "Aung";     // nullable
nickname = null;                // ✅ OK
```

> 💡 Syntax တိုင်းတော်တော်ဆင်တယ်! Kotlin `String?` = Dart `String?`

---

### 6.2 Safe Call Operator `?.`

```kotlin
val user: User? = getUser()     // null ဖြစ်နိုင်တဲ့ user

// ❌ Unsafe — crash ဖြစ်နိုင်
val name = user.name

// ✅ Safe call — user null ဖြစ်ရင် null return လုပ်တယ်
val name = user?.name

// chaining
val cityLength = user?.address?.city?.length
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
User? user = getUser();

// ✅ Safe call — Dart မှာ အတူတူ!
final name = user?.name;
final cityLength = user?.address?.city?.length;
```

> 💡 `?.` operator က Kotlin နဲ့ Dart မှာ syntax အတူတူပါပဲ!

---

### 6.3 Elvis Operator `?:` (Dart ရဲ့ `??` နဲ့ ယှဉ်)

**Kotlin:**
```kotlin
val name: String? = null
val displayName = name ?: "Anonymous"   // name null ဆိုရင် "Anonymous" သုံး
println(displayName)  // "Anonymous"

// function argument check
fun processName(name: String?) {
    val actual = name ?: return         // null ဆိုရင် function ကနေ ထွက်
    println("Processing: $actual")
}
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
String? name = null;
final displayName = name ?? "Anonymous";  // Dart မှာ ?? operator
```

> 💡 **Kotlin `?:` = Dart `??`** — logic တူတူ၊ symbol ကွဲ

---

### 6.4 Non-Null Assertion `!!`

```kotlin
val name: String? = "Aung"
val length = name!!.length    // null မဟုတ်ဘူးဆိုတာ developer guarantee လုပ်တယ်
                               // null ဆိုရင် NullPointerException ပစ်မည်
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
String? name = "Aung";
final length = name!.length;  // Dart မှာ ! operator — concept တူတူ
```

> ⚠️ **`!!` / `!` operator ကိုတတ်နိုင်သမျှ avoid လုပ်ပါ** — crash risk ရှိတယ်။ `?.` နဲ့ `?:` ကို prefer လုပ်ပါ။

---

### 6.5 Smart Cast

Kotlin ရဲ့ special feature တစ်ခုက null check ပြီးရင် cast မလိုဘဲ automatically smart cast ဖြစ်တယ်။

```kotlin
fun printLength(obj: Any) {
    if (obj is String) {
        // ဒီ block ထဲမှာ obj ဟာ String ဆိုတာ compiler သိတဲ့အတွက်
        // cast မလိုဘဲ .length ကိုတိုက်ရိုက် သုံးလို့ရ
        println(obj.length)
    }
}

// nullable smart cast
val name: String? = getName()
if (name != null) {
    println(name.length)   // name ဟာ null မဟုတ်တော့ String အနေနဲ့ use
}
```

---

## Flutter Bridge

This module already compares Kotlin with Dart/Flutter. Use those comparisons as the main bridge when reading Android native code, Flutter plugin code, or Kotlin examples inside Android SDK documentation.

## Practice

1. Re-type one Kotlin example from this module and run through the meaning line by line.
2. Write the matching Dart/Flutter version shown in the module, then note the syntax differences.
3. Pick one idea from this module and describe where it could appear in a Flutter Android plugin.

## Q&A Checkpoint

- What part of **Null Safety** feels closest to Dart or Flutter?
- What syntax difference from this module should I remember when reading Kotlin code?
- Where would this module appear in real Flutter + Android native work?

## Exam

### Multiple Choice

1. The main topic of this course is:
   - A. Null Safety
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

Write a small Kotlin snippet that demonstrates one idea from **Null Safety**. Add a short comment explaining the Dart/Flutter comparison from the module.
