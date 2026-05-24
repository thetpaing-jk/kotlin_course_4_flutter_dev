# Course 02 - Functions

## Goal

Study this module from `files.zip` and use the included exam questions as the source of truth for assessment.

## Lessons

### 2.1 Basic Function Declaration

**Kotlin:**
```kotlin
fun greet(name: String): String {
    return "Hello, $name!"
}
```

**Dart နဲ့ နှိုင်းယှဉ်:**
```dart
String greet(String name) {
    return "Hello, $name!";
}
```

> 💡 Kotlin မှာ `fun` keyword ကိုအရင်ထည့်တယ်၊ return type ကို function name **နောက်မှာ** ထည့်တယ်။

---

### 2.2 Single Expression Functions

Flutter ရဲ့ `=>` arrow function လိုပဲ Kotlin မှာ `=` သုံးနိုင်တယ်။

**Kotlin:**
```kotlin
fun double(x: Int): Int = x * 2
fun add(a: Int, b: Int) = a + b   // return type infer လုပ်
```

**Dart နဲ့ နှိုင်းယှဉ်:**
```dart
int double(int x) => x * 2;
int add(int a, int b) => a + b;
```

---

### 2.3 Default Parameters

**Kotlin:**
```kotlin
fun createButton(
    text: String,
    color: String = "blue",
    isEnabled: Boolean = true
) {
    println("Button: $text, Color: $color, Enabled: $isEnabled")
}

createButton("Click Me")
createButton("Submit", color = "red")
createButton("Cancel", isEnabled = false)
```

**Dart နဲ့ နှိုင်းယှဉ်:**
```dart
void createButton({
    required String text,
    String color = "blue",
    bool isEnabled = true,
}) { ... }

createButton(text: "Click Me");
createButton(text: "Submit", color: "red");
```

> 💡 Kotlin မှာ function definition မှာ `{}` မလိုဘဲ call ချိန်မှာ named argument သုံးလို့ရတယ်။

---

### 2.4 Unit Return Type

Dart ရဲ့ `void` = Kotlin ရဲ့ `Unit` (ချန်လှပ်လည်းရတယ်)

```kotlin
fun logMessage(msg: String): Unit { println(msg) }
fun logMessage(msg: String) { println(msg) }  // Unit ချန်လှပ်
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
1. Kotlin မှာ function ကြေငြာတဲ့ keyword ကဘာလဲ?
- A. `func`
- B. `def`
- C. `fun`
- D. `function`

2. Kotlin function ရဲ့ return type ကို ဘယ်နေရာမှာ ထားတယ်?
- A. function name ရဲ့ ရှေ့မှာ
- B. function name နောက်မှာ colon ထည့်ပြီး
- C. parameter list ရဲ့ ရှေ့မှာ
- D. return keyword နောက်မှာ

3. Dart ရဲ့ `void` နဲ့ ညီတဲ့ Kotlin type ကဘာလဲ?
- A. `Nothing`
- B. `Null`
- C. `Unit`
- D. `Empty`

4. Single expression function ကို Kotlin မှာ ဘယ်လိုရေးတယ်?
- A. `fun add(a: Int, b: Int) => a + b`
- B. `fun add(a: Int, b: Int) = a + b`
- C. `fun add(a: Int, b: Int) -> a + b`
- D. `fun add(a: Int, b: Int) : a + b`

5. Dart မှာ named parameter သုံးဖို့ function definition မှာ ဘာထည့်ရတယ်?
- A. `[]`
- B. `()`
- C. `{}`
- D. `<>`

6. အောက်ပါ Kotlin code မှာ `color` မထည့်ဘဲ call လုပ်ရင် ဘာဖြစ်မလဲ?
```kotlin
fun setup(name: String, color: String = "blue") { }
setup("App")
```
- A. Compilation error
- B. Runtime error
- C. `color` က `"blue"` ဖြစ်မည်
- D. `color` က `null` ဖြစ်မည်

7. Kotlin function မှာ return type ကို ချန်လှပ်ရင် default return type က ဘာဖြစ်တယ်?
- A. `null`
- B. `void`
- C. `Unit`
- D. `Any`

8. Named argument သုံးပြီး function call လုပ်တဲ့ Kotlin syntax က ဘယ်လိုဖြစ်တယ်?
- A. `createButton("text", color: "red")`
- B. `createButton(text = "text", color = "red")`
- C. `createButton(text: "text", color: "red")`
- D. `createButton("text", "red")`

### Fill In The Blank
1. Kotlin မှာ function ကိုကြေငြာဖို့ `________` keyword သုံးတယ်။
2. Dart ရဲ့ `void` return type နဲ့ ညီတဲ့ Kotlin type က `________` ဖြစ်တယ်။
3. Single expression function မှာ curly braces အစား `________` symbol သုံးတယ်။
4. Default parameter value ကို function call မှာ ချန်လှပ်ရင် `________` value ကို သုံးတယ်။
5. Kotlin မှာ specific parameter ကိုသာ ပြောင်းချင်ရင် `________` argument သုံးတယ်။
6. Dart ရဲ့ `String greet(String name)` ကို Kotlin ရေးဆိုရင် `________` ဖြစ်တယ်။

### Coding Exam
**Problem 1 — Dart မှ Kotlin သို့ပြောင်းပါ**

```dart
String fullName(String first, String last) {
    return "$first $last";
}

double calculateArea(double width, double height) => width * height;

void showMessage({required String msg, bool isError = false}) {
    print("${isError ? 'ERROR' : 'INFO'}: $msg");
}
```

**Problem 2 — Default Parameter Function**

Flutter app ရဲ့ API request function တစ်ခု ရေးပါ။ `endpoint` (required), `method` (default `"GET"`), `timeout` (default `30`) parameter တွေပါရမည်။ Function body မှာ parameters တွေကို print လုပ်ပါ။

**Problem 3 — Named Arguments**

Problem 2 မှာ ရေးထားတဲ့ function ကို named arguments သုံးပြီး အောက်ပါ cases နှစ်ခု call လုပ်ပါ။
- `/users` endpoint, method default, timeout default
- `/posts` endpoint, method `"POST"`, timeout `60`

---
