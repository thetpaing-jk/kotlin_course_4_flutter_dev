# Course 08 - Higher-Order Functions နဲ့ Lambdas

## Goal

Study **Higher-Order Functions နဲ့ Lambdas** using the provided `Kotlin for Flutter Developers` module as the single source for this course.

## Lessons

### 8.1 Lambda Expressions

Flutter developer တွေ callback functions တွေ မကြာမကြာသုံးနေတာကြောင့် lambdas ကို သိပ်ကြိုးစားလေ့လာစရာမလိုဘဲ နားလည်မှာပါ။

**Kotlin:**
```kotlin
// Lambda syntax: { parameters -> body }
val multiply = { a: Int, b: Int -> a * b }
println(multiply(3, 4))   // 12

// Single parameter — it ကိုသုံးနိုင်
val double = { it: Int -> it * 2 }
// အတိုဆုံး
val double: (Int) -> Int = { it * 2 }
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
final multiply = (int a, int b) => a * b;
print(multiply(3, 4));  // 12

final double = (int n) => n * 2;
```

---

### 8.2 Higher-Order Functions

Function တစ်ခုကို parameter အနေနဲ့ pass လုပ်တာ — Flutter ရဲ့ `onPressed: () {}` နဲ့ concept တူတယ်။

**Kotlin:**
```kotlin
// function ကို parameter အဖြစ် လက်ခံတယ်
fun operate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}

val sum = operate(10, 5) { a, b -> a + b }      // 15
val product = operate(10, 5) { a, b -> a * b }  // 50

// Flutter widget callback pattern နဲ့ ဆင်တဲ့ ဥပမာ
fun buildButton(
    label: String,
    onClick: () -> Unit
) {
    println("Button: $label")
    onClick()  // callback invoke
}

buildButton("Save") {
    println("Saving...")
}
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
int operate(int a, int b, int Function(int, int) operation) {
    return operation(a, b);
}

final sum = operate(10, 5, (a, b) => a + b);

// Flutter မှာ ကျွမ်းကျင်တဲ့ pattern
ElevatedButton(
    onPressed: () {
        print("Saving...");
    },
    child: Text("Save"),
)
```

---

### 8.3 Trailing Lambda Syntax

Kotlin မှာ function ရဲ့ last parameter ကို lambda ဖြစ်ရင် parentheses ပြင်ပမှာ ထားလို့ရတယ် — Flutter ရဲ့ widget builder pattern နဲ့ concept ဆင်တယ်။

```kotlin
// function definition
fun repeat(times: Int, action: (Int) -> Unit) {
    for (i in 1..times) action(i)
}

// trailing lambda — last lambda ကို () ပြင်ပမှာ ထည့်
repeat(3) { index ->
    println("Step $index")
}

// ဒါက Flutter ရဲ့ Builder pattern နဲ့ ဆင်တာ
// Flutter: Builder(builder: (context) { return Widget(); })
// Kotlin: someFunction(params) { lambda body }
```

---

## Flutter Bridge

This module already compares Kotlin with Dart/Flutter. Use those comparisons as the main bridge when reading Android native code, Flutter plugin code, or Kotlin examples inside Android SDK documentation.

## Practice

1. Re-type one Kotlin example from this module and run through the meaning line by line.
2. Write the matching Dart/Flutter version shown in the module, then note the syntax differences.
3. Pick one idea from this module and describe where it could appear in a Flutter Android plugin.

## Q&A Checkpoint

- What part of **Higher-Order Functions နဲ့ Lambdas** feels closest to Dart or Flutter?
- What syntax difference from this module should I remember when reading Kotlin code?
- Where would this module appear in real Flutter + Android native work?

## Exam

### Multiple Choice

1. The main topic of this course is:
   - A. Higher-Order Functions နဲ့ Lambdas
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

Write a small Kotlin snippet that demonstrates one idea from **Higher-Order Functions နဲ့ Lambdas**. Add a short comment explaining the Dart/Flutter comparison from the module.
