# Course 01 - Variables နဲ့ Basic Types

> **Module:** 1 of 10 | **Level:** Beginner | **For:** Flutter Developers learning Kotlin

## Lessons

### 1.1 Variables: `val` vs `var`

Flutter/Dart မှာ `final` နဲ့ `var` သုံးသလိုပဲ Kotlin မှာ `val` နဲ့ `var` သုံးပါတယ်။

| Kotlin | Dart (Flutter) | အဓိပ္ပါယ် |
|--------|----------------|-----------|
| `val`  | `final`        | တစ်ကြိမ်သာ assign လုပ်လို့ရ (read-only) |
| `var`  | `var`          | ပြန်ပြောင်းလို့ရ (mutable) |

**Kotlin:**
```kotlin
val name: String = "Flutter Dev"
val age = 25
var score = 100
score += 50
```

**Dart နဲ့ နှိုင်းယှဉ်:**
```dart
final String name = "Flutter Dev";
final age = 25;
var score = 100;
score += 50;
```

> 💡 Kotlin မှာ type ကို variable name **နောက်မှာ** ထည့်တယ် (`name: String`)။ Dart မှာ **ရှေ့မှာ** ထည့်တယ် (`String name`)။

---

### 1.2 Basic Types

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

```kotlin
val name = "Aung"
val age = 25
println("ကျွန်တော်နာမည်က $name")
println("သူ့အသက်က ${age + 1} နှစ်ဖြစ်မယ်")
```

> 💡 Single variable → `$name` | Expression → `${expression}` — Dart နဲ့ syntax တူတူပဲ

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
1. Kotlin မှာ read-only variable ကို ဘယ် keyword နဲ့ ကြေငြာတယ်?
- A. `let`
- B. `var`
- C. `val`
- D. `const`

2. Dart ရဲ့ `final` နဲ့ ညီတဲ့ Kotlin keyword ကဘာလဲ?
- A. `var`
- B. `val`
- C. `static`
- D. `fun`

3. `val age = 25` မှာ `age` ရဲ့ type က ဘာဖြစ်မလဲ?
- A. `String`
- B. `Double`
- C. `Long`
- D. `Int`

4. Kotlin မှာ type declaration ကို ဘယ်နေရာမှာ ထားတယ်?
- A. variable name ရဲ့ ရှေ့မှာ
- B. variable name နောက်မှာ colon ထည့်ပြီး
- C. line အဆုံးမှာ
- D. function ထဲမှာသာ ထည့်ရတယ်

5. အောက်ပါ code မှာ ဘယ် line က compilation error ဖြစ်မလဲ?
```kotlin
val x = 10
var y = 20
x = 30     // line A
y = 40     // line B
```
- A. Line A
- B. Line B
- C. နှစ်ခုလုံး error
- D. error မရှိ

6. Dart ရဲ့ `bool` type နဲ့ ညီတဲ့ Kotlin type ကဘာလဲ?
- A. `Boolean`
- B. `bool`
- C. `boolean`
- D. `Bool`

7. String template မှာ expression ထည့်ချင်ရင် ဘယ် syntax သုံးရမလဲ?
- A. `%(expression)`
- B. `{expression}`
- C. `${expression}`
- D. `$(expression)`

8. Kotlin ရဲ့ `Long` type နဲ့ ညီတဲ့ Dart type ရှိသလား?
- A. ရှိတယ် — `long`
- B. ရှိတယ် — `Long`
- C. မရှိဘူး — Dart မှာ `int` တစ်မျိုးပဲ ရှိတယ်
- D. ရှိတယ် — `int64`

### Fill In The Blank
1. Kotlin မှာ reassign လုပ်လို့ရတဲ့ variable ကြေငြာဖို့ `________` keyword သုံးတယ်။
2. Dart ရဲ့ `double` နဲ့ ညီတဲ့ Kotlin type က `________` ဖြစ်တယ်။
3. Type ကို မရေးဘဲ compiler က အလိုအလျောက် သိနိုင်တဲ့ feature ကို `________` လို့ ခေါ်တယ်။
4. String template မှာ variable တစ်ခုတည်းဆိုရင် `________` သုံးနိုင်တယ် (curly braces မလို)။
5. Kotlin မှာ single character တစ်လုံး သိမ်းဆည်းတဲ့ type က `________` ဖြစ်တယ်။
6. Dart ရဲ့ `final String city = "Yangon"` ကို Kotlin ရေးဆိုရင် `________` ဖြစ်တယ်။

### Coding Exam
**Problem 1 — Dart မှ Kotlin သို့ပြောင်းပါ**

```dart
final String appName = "MyApp";
final int version = 3;
var bool isLoggedIn = false;
var double rating = 4.5;
isLoggedIn = true;
```

**Problem 2 — String Template သုံးပါ**

`name`, `age`, `city` variable သုံးခုနဲ့ အောက်ပါ output ထွက်အောင် Kotlin code ရေးပါ။
```
ကျွန်တော်နာမည်က Mg Mg ဖြစ်ပြီး Yangon မှာနေတယ်။
နောင်နှစ် အသက် 26 ဖြစ်မယ်။
```

**Problem 3 — Explicit vs Inference နှစ်မျိုးစလုံး ရေးပါ**

Integer `100`, String `"Kotlin"`, Boolean `true`, Double `3.14` တို့ကို (a) explicit type နဲ့ (b) type inference နဲ့ နှစ်မျိုးစလုံး ကြေငြာပါ။

---
