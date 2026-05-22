# Course 03 - Control Flow

## Goal

Study **Control Flow** using the provided `Kotlin for Flutter Developers` module as the single source for this course.

## Lessons

### 3.1 if Expression

Kotlin မှာ `if` ဟာ statement မဟုတ်ဘဲ **expression** ဖြစ်တယ် — value return လုပ်လို့ရတယ်။

**Kotlin:**
```kotlin
val max = if (a > b) a else b

// multiline ဆိုရင်
val result = if (score >= 60) {
    "ကျော်"
} else {
    "ကျ"
}
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
final max = a > b ? a : b;  // Dart မှာ ternary operator သုံးရတယ်

// Dart မှာ if-expression မရှိ၊ ternary သာသုံးနိုင်
final result = score >= 60 ? "ကျော်" : "ကျ";
```

> 💡 **Kotlin advantage:** `if` ကို expression အနေနဲ့ သုံးနိုင်တာကြောင့် ternary operator (`? :`) မလိုဘဲ ပိုဖတ်ရတာလွယ်တဲ့ code ရေးနိုင်တယ်။

---

### 3.2 when Expression (Dart switch ကို replace)

Kotlin ရဲ့ `when` ကို Flutter မှာ `switch` statement တင်မဟုတ်ဘဲ Dart 3's pattern matching နဲ့ ယှဉ်ကြည့်နိုင်တယ်။

**Kotlin:**
```kotlin
val grade = when (score) {
    in 90..100 -> "A"
    in 80..89  -> "B"
    in 70..79  -> "C"
    in 60..69  -> "D"
    else       -> "F"
}

// type check လည်းလုပ်လို့ရ
fun describe(obj: Any): String = when (obj) {
    is String  -> "String of length ${obj.length}"
    is Int     -> "Integer: $obj"
    is Boolean -> if (obj) "Yes" else "No"
    else       -> "Unknown"
}
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
// Dart 3 pattern matching
final grade = switch (score) {
    >= 90 => "A",
    >= 80 => "B",
    >= 70 => "C",
    >= 60 => "D",
    _ => "F",
};
```

> 💡 Kotlin ရဲ့ `when` ဟာ Dart 3 ရဲ့ `switch` expression နဲ့ အတော်ဆင်တယ်။ `in 90..100` ဆိုတဲ့ range syntax ကသာ ကွဲတယ်။

---

### 3.3 for Loops

**Kotlin:**
```kotlin
// range loop
for (i in 1..5) println(i)         // 1,2,3,4,5
for (i in 1 until 5) println(i)    // 1,2,3,4 (5 မပါ)
for (i in 5 downTo 1) println(i)   // 5,4,3,2,1

// list iteration
val fruits = listOf("apple", "banana", "mango")
for (fruit in fruits) println(fruit)

// index နဲ့ တွဲ
for ((index, fruit) in fruits.withIndex()) {
    println("$index: $fruit")
}
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
for (int i = 1; i <= 5; i++) print(i);

final fruits = ["apple", "banana", "mango"];
for (final fruit in fruits) print(fruit);

fruits.asMap().forEach((index, fruit) {
    print("$index: $fruit");
});
```

---

## Flutter Bridge

This module already compares Kotlin with Dart/Flutter. Use those comparisons as the main bridge when reading Android native code, Flutter plugin code, or Kotlin examples inside Android SDK documentation.

## Practice

1. Re-type one Kotlin example from this module and run through the meaning line by line.
2. Write the matching Dart/Flutter version shown in the module, then note the syntax differences.
3. Pick one idea from this module and describe where it could appear in a Flutter Android plugin.

## Q&A Checkpoint

- What part of **Control Flow** feels closest to Dart or Flutter?
- What syntax difference from this module should I remember when reading Kotlin code?
- Where would this module appear in real Flutter + Android native work?

## Exam

### Multiple Choice

1. The main topic of this course is:
   - A. Control Flow
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

Write a small Kotlin snippet that demonstrates one idea from **Control Flow**. Add a short comment explaining the Dart/Flutter comparison from the module.
