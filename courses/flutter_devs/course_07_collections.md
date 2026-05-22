# Course 07 - Collections

## Goal

Study **Collections** using the provided `Kotlin for Flutter Developers` module as the single source for this course.

## Lessons

### 7.1 Collections Overview

Kotlin collections မှာ **immutable** နဲ့ **mutable** ဆိုပြီး ခွဲထားတာ Flutter developer တွေ သတိထားရမဲ့ အချက်ပါ။

| Type | Immutable | Mutable |
|------|-----------|---------|
| List | `listOf()` | `mutableListOf()` |
| Set | `setOf()` | `mutableSetOf()` |
| Map | `mapOf()` | `mutableMapOf()` |

---

### 7.2 List

**Kotlin:**
```kotlin
// Immutable List — Flutter ရဲ့ const List နဲ့ တူတူ
val colors = listOf("red", "green", "blue")
// colors.add("yellow")   // ❌ Error — immutable

// Mutable List — Flutter ရဲ့ normal List
val items = mutableListOf("apple", "banana")
items.add("mango")
items.remove("apple")

// access
println(colors[0])          // "red"
println(colors.size)        // 3
println(colors.first())     // "red"
println(colors.last())      // "blue"
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
// Dart မှာ const = compile-time immutable
const colors = ["red", "green", "blue"];

// Dart normal list = mutable
final items = ["apple", "banana"];
items.add("mango");
items.remove("apple");
```

---

### 7.3 Map

**Kotlin:**
```kotlin
// Immutable Map
val userInfo = mapOf(
    "name" to "Aung",
    "age" to 25,
    "city" to "Yangon"
)

println(userInfo["name"])           // "Aung"
println(userInfo.getOrDefault("phone", "N/A"))  // "N/A"

// Mutable Map
val scores = mutableMapOf("Math" to 90, "Science" to 85)
scores["English"] = 92
scores.remove("Math")
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
final userInfo = {
    "name": "Aung",
    "age": 25,
    "city": "Yangon",
};

print(userInfo["name"]);

final scores = {"Math": 90, "Science": 85};
scores["English"] = 92;
scores.remove("Math");
```

> 💡 **Key syntax difference:** Kotlin မှာ Map entries တွဲဖွဲ့တဲ့နေရာမှာ `"key" to value` သုံးတယ်။ Dart မှာ `"key": value` သုံးတယ်။

---

### 7.4 Collection Operations (Flutter Stream operations နဲ့ ယှဉ်)

Kotlin collections မှာ functional operations တွေ built-in ပါတယ် — Flutter ရဲ့ Iterable methods တွေနဲ့ ဆင်တယ်။

**Kotlin:**
```kotlin
val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// filter
val evens = numbers.filter { it % 2 == 0 }        // [2, 4, 6, 8, 10]

// map / transform
val doubled = numbers.map { it * 2 }              // [2, 4, 6, ...]

// find first
val firstEven = numbers.first { it % 2 == 0 }     // 2

// any / all
val hasNegative = numbers.any { it < 0 }           // false
val allPositive = numbers.all { it > 0 }           // true

// reduce
val sum = numbers.reduce { acc, n -> acc + n }     // 55

// chain operations
val result = numbers
    .filter { it % 2 == 0 }
    .map { it * it }
    .take(3)
// [4, 16, 36]
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
final numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

final evens = numbers.where((n) => n % 2 == 0).toList();
final doubled = numbers.map((n) => n * 2).toList();
final firstEven = numbers.firstWhere((n) => n % 2 == 0);
final hasNegative = numbers.any((n) => n < 0);
final allPositive = numbers.every((n) => n > 0);
final sum = numbers.reduce((acc, n) => acc + n);
```

> 💡 **Difference:** Dart မှာ `where` = Kotlin မှာ `filter`။ Dart မှာ `every` = Kotlin မှာ `all`။

---

## Flutter Bridge

This module already compares Kotlin with Dart/Flutter. Use those comparisons as the main bridge when reading Android native code, Flutter plugin code, or Kotlin examples inside Android SDK documentation.

## Practice

1. Re-type one Kotlin example from this module and run through the meaning line by line.
2. Write the matching Dart/Flutter version shown in the module, then note the syntax differences.
3. Pick one idea from this module and describe where it could appear in a Flutter Android plugin.

## Q&A Checkpoint

- What part of **Collections** feels closest to Dart or Flutter?
- What syntax difference from this module should I remember when reading Kotlin code?
- Where would this module appear in real Flutter + Android native work?

## Exam

### Multiple Choice

1. The main topic of this course is:
   - A. Collections
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

Write a small Kotlin snippet that demonstrates one idea from **Collections**. Add a short comment explaining the Dart/Flutter comparison from the module.
