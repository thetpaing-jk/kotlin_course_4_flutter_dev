# Course 08 - Higher-Order Functions နဲ့ Lambdas

> **Module:** 8 of 10 | **Level:** Intermediate | **For:** Flutter Developers learning Kotlin

## Lessons

### 8.1 Lambda Expressions

**Kotlin:**
```kotlin
val multiply = { a: Int, b: Int -> a * b }
println(multiply(3, 4))   // 12

val double: (Int) -> Int = { it * 2 }   // single param → `it`
```

**Dart နဲ့ နှိုင်းယှဉ်:**
```dart
final multiply = (int a, int b) => a * b;
final double = (int n) => n * 2;
```

---

### 8.2 Higher-Order Functions

Function ကို parameter အနေနဲ့ pass လုပ်တာ — Flutter ရဲ့ `onPressed: () {}` pattern နဲ့ concept တူတယ်။

**Kotlin:**
```kotlin
fun operate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}

val sum = operate(10, 5) { a, b -> a + b }
val product = operate(10, 5) { a, b -> a * b }

fun buildButton(label: String, onClick: () -> Unit) {
    println("Button: $label")
    onClick()
}

buildButton("Save") {
    println("Saving...")
}
```

**Dart နဲ့ နှိုင်းယှဉ်:**
```dart
int operate(int a, int b, int Function(int, int) operation) {
    return operation(a, b);
}
// Flutter pattern
ElevatedButton(onPressed: () { print("Saving..."); }, child: Text("Save"))
```

---

### 8.3 Trailing Lambda Syntax

Function ရဲ့ last parameter lambda ဆိုရင် parentheses ပြင်ပမှာ ထားလို့ရ — Flutter widget builder နဲ့ concept ဆင်တယ်။

```kotlin
fun repeat(times: Int, action: (Int) -> Unit) {
    for (i in 1..times) action(i)
}

repeat(3) { index ->
    println("Step $index")
}
// Flutter: Builder(builder: (context) { return Widget(); })
// Kotlin: repeat(3) { index -> ... }
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
1. Kotlin lambda ရဲ့ syntax က ဘာလဲ?
- A. `(params) => body`
- B. `{ params -> body }`
- C. `[params] { body }`
- D. `fun(params) { body }`

2. Lambda ထဲမှာ single parameter ရှိရင် default name က ဘာလဲ?
- A. `self`
- B. `this`
- C. `it`
- D. `param`

3. Higher-order function ဆိုတာ ဘာကိုဆိုလိုတာလဲ?
- A. Complex algorithm ပါတဲ့ function
- B. Function ကို parameter အနေနဲ့ ယူတဲ့/return လုပ်တဲ့ function
- C. Performance optimize လုပ်ထားတဲ့ function
- D. Static function

4. Kotlin မှာ function type `(Int, Int) -> String` ဆိုတာ ဘာကိုဆိုလိုတာလဲ?
- A. Int parameter နှစ်ခု ယူပြီး String return လုပ်တဲ့ function type
- B. String parameter ယူပြီး Int return လုပ်တဲ့ function
- C. Int နဲ့ String ကို combine လုပ်တဲ့ function
- D. Integer pair ကို String convert လုပ်တဲ့ method

5. Trailing lambda syntax ကိုသုံးနိုင်တဲ့ condition က ဘာလဲ?
- A. Lambda ကို function ရဲ့ first parameter ဖြစ်ရမည်
- B. Lambda ကို function ရဲ့ last parameter ဖြစ်ရမည်
- C. Function မှာ parameter တစ်ခုပဲ ရှိရမည်
- D. Lambda ကို always trailing syntax သုံးရမည်

6. Flutter ရဲ့ `onPressed: () { }` pattern နဲ့ concept အနီးဆုံး ဆင်တဲ့ Kotlin feature က ဘာလဲ?
- A. Extension functions
- B. Higher-order functions with lambda parameters
- C. Companion objects
- D. Operator overloading

7. `operate(10, 5) { a, b -> a + b }` ဆိုတဲ့ call မှာ `{ a, b -> a + b }` က ဘာဖြစ်တာလဲ?
- A. Object expression
- B. Trailing lambda — last parameter ဖြစ်တဲ့ operation ကို pass လုပ်တာ
- C. Anonymous class
- D. Inline function

8. Dart မှာ `int Function(int, int)` ဆိုတဲ့ type ကို Kotlin မှာ ဘယ်လိုရေးတယ်?
- A. `Function<Int, Int, Int>`
- B. `(Int, Int) -> Int`
- C. `Int -> Int -> Int`
- D. `fun(Int, Int): Int`

### Fill In The Blank
1. Kotlin lambda expression ကို `{` နဲ့ `}` curly braces ထဲမှာ ရေးပြီး parameter နဲ့ body ကို `________` နဲ့ ခွဲတယ်။
2. Single parameter lambda မှာ parameter name ကို ချန်လှပ်ပြီး `________` ကို default name အနေနဲ့ သုံးနိုင်တယ်။
3. Function parameter အဖြစ် function type ကို ကြေငြာတဲ့ pattern ကို `________` function လို့ ခေါ်တယ်။
4. Trailing lambda syntax ကိုသုံးနိုင်ဖို့ lambda parameter သည် function ရဲ့ `________` parameter ဖြစ်ရမည်။
5. Flutter ရဲ့ `Builder(builder: (context) => widget)` pattern ကို Kotlin မှာ `________` lambda syntax နဲ့ ဆင်တယ်။
6. `() -> Unit` ဆိုတဲ့ function type မှာ `Unit` ဆိုတာ Dart ရဲ့ `________` နဲ့ ညီတယ်။

### Coding Exam
**Problem 1 — Lambda**

Lambda expression သုံးပြီး အောက်ပါ operations ကြေငြာပါ:
- နှစ်ခုရဲ့ maximum ကို return လုပ်တဲ့ lambda
- String ကို reverse လုပ်တဲ့ lambda
- Number တစ်ခု even ဖြစ်/မဖြစ် check လုပ်တဲ့ lambda

**Problem 2 — Higher-Order Function**

`transformList(items: List<String>, transform: (String) -> String): List<String>` function ရေးပါ။ ပြီးနောက် ဒီ function ကို:
- All uppercase convert
- Reverse each string
- Add prefix `"Item: "` ဆိုပြီး သုံး မျိုးသုံးပါ

**Problem 3 — Trailing Lambda**

Flutter widget builder pattern ကို simulate လုပ်ဖို့ `buildCard(title: String, content: () -> String): String` function ရေးပါ। Result ကို `"[CARD] title: X | content: Y"` format နဲ့ return လုပ်ပါ။ Trailing lambda syntax သုံးပြီး test ပါ။

---
