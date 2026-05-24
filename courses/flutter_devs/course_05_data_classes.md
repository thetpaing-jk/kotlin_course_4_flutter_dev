# Course 05 - Data Classes

> **Module:** 5 of 10 | **Level:** Intermediate | **For:** Flutter Developers learning Kotlin

## Lessons

### 5.1 Data Class ဆိုတာ ဘာလဲ

Flutter မှာ Freezed package သုံးသလိုပဲ Kotlin ရဲ့ `data class` က `equals()`, `hashCode()`, `toString()`, `copy()` တွေကို auto generate ပေးတယ် — package မလိုဘဲ built-in ပါတယ်။

**Kotlin:**
```kotlin
data class User(
    val id: Int,
    val name: String,
    val email: String,
    val age: Int = 0
)

val user1 = User(1, "Aung", "aung@email.com", 25)
val user2 = User(1, "Aung", "aung@email.com", 25)

println(user1 == user2)          // true — content compare
println(user1)                   // User(id=1, name=Aung, ...)
val updated = user1.copy(age = 26)
```

**Dart (Freezed) နဲ့ နှိုင်းယှဉ်:**
```dart
@freezed
class User with _$User {
    const factory User({
        required int id,
        required String name,
        required String email,
        int age = 0,
    }) = _User;
}
// Kotlin data class က ဒီ functionality ကို package မလိုဘဲ built-in ပေးတယ်
```

---

### 5.2 Auto-generated Methods

```kotlin
data class Point(val x: Int, val y: Int)

val p1 = Point(1, 2)
val p2 = Point(1, 2)
val p3 = p1.copy(y = 10)

println(p1 == p2)    // true
println(p1 === p2)   // false (reference compare)
println(p1)          // Point(x=1, y=2)
println(p3)          // Point(x=1, y=10)
```

---

### 5.3 Destructuring

```kotlin
data class Point(val x: Int, val y: Int)

val (x, y) = Point(10, 20)
println("x=$x, y=$y")

val points = listOf(Point(1, 2), Point(3, 4))
for ((x, y) in points) {
    println("($x, $y)")
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
1. `data class` ကို Kotlin မှာ ကြေငြာဖို့ ဘာ keyword သုံးတယ်?
- A. `model class`
- B. `data class`
- C. `record class`
- D. `value class`

2. `data class` က auto generate မလုပ်ပေးတဲ့ method ကဘာလဲ?
- A. `equals()`
- B. `toString()`
- C. `clone()`
- D. `copy()`

3. `data class` နှစ်ခုကို `==` နဲ့ compare ရင် ဘာ compare လုပ်တာလဲ?
- A. reference (memory address)
- B. content (property values)
- C. class name
- D. hashCode only

4. Flutter/Dart ecosystem မှာ `data class` နဲ့ ညီတဲ့ package ကဘာလဲ?
- A. Provider
- B. GetX
- C. Freezed
- D. Riverpod

5. `copy()` function ရဲ့ ရည်ရွယ်ချက်က ဘာလဲ?
- A. Object ကို deep clone လုပ်တယ်
- B. Property တချို့ကိုသာ ပြောင်းပြီး new object ဆောက်တယ်
- C. Object ကို serialize လုပ်တယ်
- D. Object ကို list ထဲ copy လုပ်တယ်

6. `data class` ရဲ့ primary constructor parameters တွေ `val` သို့မဟုတ် `var` ဖြစ်ရမည်ဆိုတာ မှန်သလား?
- A. မှန်တယ် — mandatory requirement
- B. မမှန်ဘူး — plain parameters လည်း ရတယ်
- C. `val` ပဲ ရတယ်
- D. `var` ပဲ ရတယ်

7. Destructuring declaration `val (x, y) = point` ဟာ ဘာကို အသုံးချတာလဲ?
- A. `get()` functions
- B. `componentN()` functions
- C. `iterator()` function
- D. `toList()` function

8. `===` operator ကို Kotlin မှာ သုံးရင် ဘာ compare လုပ်တာလဲ?
- A. content (structural equality)
- B. reference (referential equality)
- C. hashCode
- D. type

### Fill In The Blank
1. Kotlin ရဲ့ `data class` က Dart ecosystem မှာ `________` package နဲ့ ညီတယ်။
2. Data class မှာ `equals()` method က property values တွေကို compare လုပ်ပြီး `________` method က object reference ကို compare လုပ်တယ်။
3. `copy()` function သုံးပြီး property တချို့ကိုပဲ ပြောင်းရင် မပြောင်းတဲ့ property တွေက original ရဲ့ `________` ကို inherit လုပ်တယ်။
4. Data class destructuring မှာ compiler က `________` functions တွေကို auto generate ပေးတယ်။
5. Data class ကြေငြာဖို့ `class` keyword ရဲ့ ရှေ့မှာ `________` ထည့်ရတယ်။
6. `println(user)` ကို data class မှာ call ရင် `________` method ကို automatic call လုပ်တယ်။

### Coding Exam
**Problem 1 — Data Class ကြေငြာပါ**

Flutter app ရဲ့ API response ကို represent လုပ်တဲ့ `ApiUser` data class ရေးပါ။
- `id` (Int)
- `username` (String)
- `email` (String)
- `isVerified` (Boolean, default `false`)
- `followersCount` (Int, default `0`)

**Problem 2 — copy() သုံးပါ**

Problem 1 ရဲ့ `ApiUser` ကိုသုံးပြီး:
1. User တစ်ယောက် create ပါ
2. `copy()` သုံးပြီး `isVerified = true` နဲ့ `followersCount = 1500` ပြောင်းထားတဲ့ updated version ဆောက်ပါ
3. နှစ်ခုကို `println()` နဲ့ print ပါ
4. `==` သုံးပြီး compare ပြပါ

**Problem 3 — Destructuring**

`val users = listOf(ApiUser(1, "aung", "a@mail.com"), ApiUser(2, "mg", "m@mail.com"))` ဒီ list ကို loop လုပ်ပြီး destructuring သုံးကာ `"ID: 1 | User: aung"` ဆိုတဲ့ format နဲ့ print ပါ။

---
