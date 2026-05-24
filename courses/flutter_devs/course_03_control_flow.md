# Course 03 - Control Flow

## Goal

Study this module from `files.zip` and use the included exam questions as the source of truth for assessment.

## Lessons

### 3.1 if Expression

Kotlin မှာ `if` ဟာ **expression** ဖြစ်တယ် — value return လုပ်လို့ရတယ်။

**Kotlin:**
```kotlin
val max = if (a > b) a else b

val result = if (score >= 60) {
    "ကျော်"
} else {
    "ကျ"
}
```

**Dart နဲ့ နှိုင်းယှဉ်:**
```dart
final max = a > b ? a : b;           // ternary operator
final result = score >= 60 ? "ကျော်" : "ကျ";
```

> 💡 Kotlin မှာ ternary operator (`? :`) မလိုဘဲ `if` ကိုတိုက်ရိုက် expression အနေနဲ့ သုံးနိုင်တယ်။

---

### 3.2 when Expression

Dart ရဲ့ `switch` ကို replace လုပ်တဲ့ Kotlin ရဲ့ powerful feature ဖြစ်တယ်။

**Kotlin:**
```kotlin
val grade = when (score) {
    in 90..100 -> "A"
    in 80..89  -> "B"
    in 70..79  -> "C"
    in 60..69  -> "D"
    else       -> "F"
}

fun describe(obj: Any): String = when (obj) {
    is String  -> "String: ${obj.length} chars"
    is Int     -> "Integer: $obj"
    is Boolean -> if (obj) "Yes" else "No"
    else       -> "Unknown"
}
```

**Dart 3 နဲ့ နှိုင်းယှဉ်:**
```dart
final grade = switch (score) {
    >= 90 => "A",
    >= 80 => "B",
    >= 70 => "C",
    >= 60 => "D",
    _ => "F",
};
```

> 💡 `in 90..100` ဆိုတဲ့ range syntax ကသာ Dart နဲ့ ကွဲတယ်။

---

### 3.3 for Loops

**Kotlin:**
```kotlin
for (i in 1..5) println(i)         // 1,2,3,4,5
for (i in 1 until 5) println(i)    // 1,2,3,4
for (i in 5 downTo 1) println(i)   // 5,4,3,2,1

val fruits = listOf("apple", "banana", "mango")
for (fruit in fruits) println(fruit)

for ((index, fruit) in fruits.withIndex()) {
    println("$index: $fruit")
}
```

**Dart နဲ့ နှိုင်းယှဉ်:**
```dart
for (int i = 1; i <= 5; i++) print(i);
for (final fruit in fruits) print(fruit);
fruits.asMap().forEach((index, fruit) { print("$index: $fruit"); });
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
1. Kotlin မှာ `if` ဟာ Dart နဲ့ ကွာခြားချက်က ဘာလဲ?
- A. Kotlin မှာ `if` မရှိဘူး
- B. Kotlin မှာ `if` ဟာ expression ဖြစ်ပြီး value return လုပ်နိုင်တယ်
- C. Kotlin မှာ `if` ကို function ထဲမှာပဲ သုံးနိုင်တယ်
- D. Dart နဲ့ အတူတူပဲ ကွာချက်မရှိ

2. `when` expression မှာ default case ကို ဘာနဲ့ ရေးတယ်?
- A. `default ->`
- B. `_`
- C. `else ->`
- D. `other ->`

3. `for (i in 1 until 5)` loop ဟာ ဘာတွေ print မလဲ?
- A. 1, 2, 3, 4, 5
- B. 1, 2, 3, 4
- C. 0, 1, 2, 3, 4
- D. 2, 3, 4, 5

4. Kotlin ရဲ့ `in 90..100` syntax ကို Dart မှာ ဘယ်လိုရေးတယ်?
- A. `in range(90, 100)`
- B. `>= 90 && <= 100`
- C. `between(90, 100)`
- D. `>= 90`

5. `when` expression ထဲမှာ type check လုပ်ဖို့ ဘာ keyword သုံးတယ်?
- A. `instanceof`
- B. `typeof`
- C. `as`
- D. `is`

6. `for (i in 5 downTo 1)` loop ဟာ ဘာတွေ print မလဲ?
- A. 1, 2, 3, 4, 5
- B. 5, 4, 3, 2, 1
- C. 5, 3, 1
- D. 1, 3, 5

7. Dart မှာ ternary operator `condition ? a : b` နဲ့ ညီတဲ့ Kotlin expression က ဘာလဲ?
- A. `condition then a else b`
- B. `if condition a else b`
- C. `if (condition) a else b`
- D. `when (condition) { true -> a; false -> b }`

8. `fruits.withIndex()` ကို Dart မှာ equivalent ကဘာလဲ?
- A. `fruits.indexed`
- B. `fruits.enumerate()`
- C. `fruits.asMap().forEach(...)`
- D. `fruits.mapIndexed(...)`

### Fill In The Blank
1. Kotlin မှာ `if` ဟာ statement မဟုတ်ဘဲ `________` ဖြစ်တယ်။
2. `when` expression ရဲ့ default case ကို `________` keyword နဲ့ ရေးတယ်။
3. `for (i in 1..5)` မှာ `..` operator ကို `________` လို့ ခေါ်တယ်။
4. `for (i in 1 until 5)` မှာ `until` ကိုသုံးရင် last number ဖြစ်တဲ့ 5 ကို loop `________`။
5. Dart ရဲ့ `switch` expression နဲ့ ညီတဲ့ Kotlin keyword က `________` ဖြစ်တယ်။
6. List ကို index နဲ့ တွဲ iterate လုပ်ဖို့ `________` function သုံးတယ်။

### Coding Exam
**Problem 1 — if Expression**

`temperature` (Int) parameter တစ်ခုယူပြီး Kotlin `if` expression သုံးကာ အောက်ပါ result return လုပ်တဲ့ function ရေးပါ။
- 30 နဲ့ အထက် → `"ပူတယ်"`
- 20–29 → `"သာယာတယ်"`
- 20 အောက် → `"အေးတယ်"`

**Problem 2 — when Expression**

Flutter ရဲ့ route name (`"/home"`, `"/profile"`, `"/settings"`, others) ကို လက်ခံပြီး page title return လုပ်တဲ့ function ကို `when` expression သုံးပြီး ရေးပါ။

**Problem 3 — for Loop**

String list တစ်ခု (`val items = listOf("Flutter", "Kotlin", "Android", "iOS")`) ကို loop လုပ်ပြီး `"1. Flutter"`, `"2. Kotlin"` စသဖြင့် numbered list အနေနဲ့ print လုပ်ပါ။ (index 0 မဟုတ်ဘဲ 1 ကနေ စတင်ပါ)

---
