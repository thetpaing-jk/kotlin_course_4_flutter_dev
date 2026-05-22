# Course 02 - Functions

## Goal

Study **Functions** using the provided `Kotlin for Flutter Developers` module as the single source for this course.

## Lessons

### 2.1 Basic Function Declaration

**Kotlin:**
```kotlin
fun greet(name: String): String {
    return "Hello, $name!"
}
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
String greet(String name) {
    return "Hello, $name!";
}
```

> 💡 **Key difference:** Kotlin မှာ keyword `fun` ကို အရင်ထည့်ပြီး return type ကို function name **နောက်မှာ** ထည့်တယ်။

---

### 2.2 Single Expression Functions

Flutter မှာ arrow function `=>` သုံးသလို Kotlin မှာ `=` ကိုသုံးတယ်။

**Kotlin:**
```kotlin
fun double(x: Int): Int = x * 2
fun add(a: Int, b: Int) = a + b     // return type ကို infer လုပ်တယ်
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
int double(int x) => x * 2;
int add(int a, int b) => a + b;
```

---

### 2.3 Default Parameters

Flutter developer တွေ named parameters နဲ့ default values ကို ကျွမ်းကျင်ပြီးဆိုရင် Kotlin မှာ ပိုလွယ်ပါမယ်။

**Kotlin:**
```kotlin
fun createButton(
    text: String,
    color: String = "blue",
    isEnabled: Boolean = true
) {
    println("Button: $text, Color: $color, Enabled: $isEnabled")
}

// ခေါ်ပုံ
createButton("Click Me")                        // default values သုံး
createButton("Submit", color = "red")           // named argument
createButton("Cancel", isEnabled = false)       // specific parameter ကိုသာ ပြောင်း
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
void createButton({
    required String text,
    String color = "blue",
    bool isEnabled = true,
}) {
    print("Button: $text, Color: $color, Enabled: $isEnabled");
}

// ခေါ်ပုံ
createButton(text: "Click Me");
createButton(text: "Submit", color: "red");
```

> 💡 **Key difference:** Kotlin မှာ parameter ကို named ဖြစ်ချင်ရင် curly braces မလိုဘဲ ခေါ်တဲ့အချိန်မှ name သုံးလို့ရတယ်။ Dart မှာတော့ function definition မှာပဲ `{}` ထည့်ပြီး named ဖြစ်တယ်။

---

### 2.4 Unit Return Type

Dart မှာ `void` နဲ့ ညီတဲ့ Kotlin keyword က `Unit` ပါ (ချန်လှပ်လည်းရတယ်)။

```kotlin
fun logMessage(msg: String): Unit {
    println(msg)
}

// Unit ကို ချန်လှပ်လို့ရ
fun logMessage(msg: String) {
    println(msg)
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

- What part of **Functions** feels closest to Dart or Flutter?
- What syntax difference from this module should I remember when reading Kotlin code?
- Where would this module appear in real Flutter + Android native work?

## Exam

### Multiple Choice

1. The main topic of this course is:
   - A. Functions
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

Write a small Kotlin snippet that demonstrates one idea from **Functions**. Add a short comment explaining the Dart/Flutter comparison from the module.
