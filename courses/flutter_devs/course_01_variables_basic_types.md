# Course 01 - Variables နဲ့ Basic Types

## Goal

Study **Variables နဲ့ Basic Types** using the provided `Kotlin for Flutter Developers` module as the single source for this course.

## Lessons

### 1.1 Variables: `val` vs `var`

Flutter/Dart မှာ `final` နဲ့ `var` သုံးသလိုပဲ Kotlin မှာ `val` နဲ့ `var` သုံးပါတယ်။

| Kotlin | Dart (Flutter) | အဓိပ္ပါယ် |
|--------|----------------|-----------|
| `val`  | `final`        | တစ်ကြိမ်သာ assign လုပ်လို့ရ (read-only) |
| `var`  | `var`          | ပြန်ပြောင်းလို့ရ (mutable) |

**Kotlin:**
```kotlin
val name: String = "Flutter Dev"   // ပြောင်းလို့မရ
val age = 25                        // type inference — Int ဆိုတာ compiler သိ
var score = 100                     // ပြောင်းလို့ရ
score += 50
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
final String name = "Flutter Dev";  // ပြောင်းလို့မရ
final age = 25;                      // type inference
var score = 100;                     // ပြောင်းလို့ရ
score += 50;
```

> 💡 **Key difference:** Kotlin မှာ type ကို variable name **နောက်မှာ** ထည့်တယ် (`name: String`)။ Dart မှာတော့ **ရှေ့မှာ** ထည့်တယ် (`String name`)။

---

### 1.2 Basic Types

Kotlin မှာ primitive types မရှိဘဲ object types ပဲရှိပါတယ် (Dart နဲ့ အတူတူပါပဲ)။

| Kotlin | Dart | ဖော်ပြသည် |
|--------|------|-----------|
| `Int` | `int` | integer |
| `Double` | `double` | floating point |
| `String` | `String` | စာသား |
| `Boolean` | `bool` | true/false |
| `Long` | — | 64-bit integer |
| `Float` | — | 32-bit float |
| `Char` | — | single character |

```kotlin
val count: Int = 10
val price: Double = 9.99
val isActive: Boolean = true
val letter: Char = 'A'
val message: String = "Hello Kotlin"
```

---

### 1.3 String Templates

Dart မှာ string interpolation ကို `${}` သုံးသလိုပဲ Kotlin မှာလည်း `${}` သုံးပါတယ်။

**Kotlin:**
```kotlin
val name = "Aung"
val age = 25
println("ကျွန်တော်နာမည်က $name")
println("သူ့အသက်က ${age + 1} နှစ်ဖြစ်မယ်")
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
String name = "Aung";
int age = 25;
print("ကျွန်တော်နာမည်က $name");
print("သူ့အသက်က ${age + 1} နှစ်ဖြစ်မယ်");
```

> 💡 **ဒီနေရာမှာ Dart နဲ့ syntax တော်တော်ဆင်တယ်။** Single variable → `$name`, expression → `${expression}`

---

## Flutter Bridge

This module already compares Kotlin with Dart/Flutter. Use those comparisons as the main bridge when reading Android native code, Flutter plugin code, or Kotlin examples inside Android SDK documentation.

## Practice

1. Re-type one Kotlin example from this module and run through the meaning line by line.
2. Write the matching Dart/Flutter version shown in the module, then note the syntax differences.
3. Pick one idea from this module and describe where it could appear in a Flutter Android plugin.

## Q&A Checkpoint

- What part of **Variables နဲ့ Basic Types** feels closest to Dart or Flutter?
- What syntax difference from this module should I remember when reading Kotlin code?
- Where would this module appear in real Flutter + Android native work?

## Exam

### Multiple Choice

1. The main topic of this course is:
   - A. Variables နဲ့ Basic Types
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

Write a small Kotlin snippet that demonstrates one idea from **Variables နဲ့ Basic Types**. Add a short comment explaining the Dart/Flutter comparison from the module.
