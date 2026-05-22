# Course 05 - Data Classes

## Goal

Study **Data Classes** using the provided `Kotlin for Flutter Developers` module as the single source for this course.

## Lessons

### 5.1 Data Class ဆိုတာ ဘာလဲ

Flutter မှာ model class တစ်ခုရေးတဲ့အချိန် `==`, `hashCode`, `toString`, `copyWith` method တွေကို manual ရေးနေရတာ သတိရမယ်ဆိုရင် — Kotlin ရဲ့ `data class` က အားလုံးကို auto generate ပေးတယ်။

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

println(user1 == user2)          // true — content compare လုပ်တယ်
println(user1)                   // User(id=1, name=Aung, email=aung@email.com, age=25)

// copy with changes
val updatedUser = user1.copy(age = 26)
println(updatedUser)
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
// Dart မှာ manual ရေးရမယ် (သို့မဟုတ် Freezed package သုံးရမယ်)
class User {
    final int id;
    final String name;
    final String email;
    final int age;
    
    const User({required this.id, required this.name, required this.email, this.age = 0});
    
    @override
    bool operator ==(Object other) =>
        other is User && id == other.id && name == other.name;
    
    @override
    int get hashCode => Object.hash(id, name);
    
    @override
    String toString() => "User(id: $id, name: $name)";
    
    User copyWith({int? id, String? name, String? email, int? age}) =>
        User(
            id: id ?? this.id,
            name: name ?? this.name,
            email: email ?? this.email,
            age: age ?? this.age,
        );
}
```

> 💡 **Kotlin ရဲ့ data class က Flutter မှာ Freezed package သုံးထားတာနဲ့ concept တူတူပါပဲ — ဒါပေမဲ့ Kotlin မှာ built-in ပါတယ်၊ package မလိုဘဲ!**

---

### 5.2 Destructuring (componentN)

```kotlin
data class Point(val x: Int, val y: Int)

val point = Point(10, 20)
val (x, y) = point                  // destructuring
println("x=$x, y=$y")

// loop ထဲမှာ
val points = listOf(Point(1, 2), Point(3, 4))
for ((x, y) in points) {
    println("($x, $y)")
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

- What part of **Data Classes** feels closest to Dart or Flutter?
- What syntax difference from this module should I remember when reading Kotlin code?
- Where would this module appear in real Flutter + Android native work?

## Exam

### Multiple Choice

1. The main topic of this course is:
   - A. Data Classes
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

Write a small Kotlin snippet that demonstrates one idea from **Data Classes**. Add a short comment explaining the Dart/Flutter comparison from the module.
