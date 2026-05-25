# Course 08 — Higher-Order Functions and Lambdas

> **Module:** 8 of 10 | **Level:** Intermediate | **For:** Flutter Developers learning Kotlin

---

## Lessons

### 8.1 Lambda Expressions

**Kotlin:**
```kotlin
val multiply = { a: Int, b: Int -> a * b }
println(multiply(3, 4))   // 12

val double: (Int) -> Int = { it * 2 }   // single param uses `it`
```

**Dart comparison:**
```dart
final multiply = (int a, int b) => a * b;
final double = (int n) => n * 2;
```

---

### 8.2 Higher-Order Functions

Passing a function as a parameter — the same concept as Flutter's `onPressed: () {}`.

```kotlin
fun operate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}

println(operate(10, 5) { a, b -> a + b })    // 15
println(operate(10, 5) { a, b -> a * b })    // 50

fun buildButton(label: String, onClick: () -> Unit) {
    println("Button: $label")
    onClick()
}

buildButton("Save") { println("Saving...") }
```

**Dart comparison:**
```dart
int operate(int a, int b, int Function(int, int) operation) => operation(a, b);
// Flutter: ElevatedButton(onPressed: () { ... }, child: Text("Save"))
```

---

### 8.3 Trailing Lambda Syntax

When the last parameter is a lambda, it can be placed outside the parentheses — similar to Flutter's builder pattern.

```kotlin
fun repeat(times: Int, action: (Int) -> Unit) {
    for (i in 1..times) action(i)
}

repeat(3) { index -> println("Step $index") }
// Flutter: Builder(builder: (context) { return Widget(); })
// Kotlin:  repeat(3) { index -> ... }
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

**1.** What is the correct Kotlin lambda syntax?
- A. `(params) => body`
- B. `{ params -> body }`
- C. `[params] { body }`
- D. `fun(params) { body }`

**2.** What is the default name for a single lambda parameter?
- A. `self`
- B. `this`
- C. `it`
- D. `param`

**3.** What is a higher-order function?
- A. A complex algorithm function
- B. A function that takes or returns another function
- C. A performance-optimized function
- D. A static function

**4.** What does the function type `(Int, Int) -> String` mean?
- A. A function taking two Ints and returning a String
- B. A function taking a String and returning an Int
- C. A function combining Int and String
- D. An integer-to-string converter

**5.** When can trailing lambda syntax be used?
- A. When the lambda is the first parameter
- B. When the lambda is the last parameter
- C. When the function has only one parameter
- D. Always

**6.** Which Flutter concept is most similar to Kotlin's higher-order functions?
- A. Extension functions
- B. Callback parameters like `onPressed: () {}`
- C. Companion objects
- D. Operator overloading

**7.** In `operate(10, 5) { a, b -> a + b }`, what is `{ a, b -> a + b }`?
- A. An object expression
- B. A trailing lambda passed as the last parameter
- C. An anonymous class
- D. An inline function

**8.** What is the Kotlin equivalent of Dart's `int Function(int, int)`?
- A. `Function<Int, Int, Int>`
- B. `(Int, Int) -> Int`
- C. `Int -> Int -> Int`
- D. `fun(Int, Int): Int`

---

### Fill In The Blank

1. Lambda body is separated from its parameters by `________`.
2. In a single-parameter lambda, the implicit parameter name is `________`.
3. A function that accepts another function as a parameter is called a `________` function.
4. The trailing lambda syntax requires the lambda to be the `________` parameter.
5. Flutter's `Builder(builder: (context) => widget)` corresponds to Kotlin's `________` lambda syntax.
6. `() -> Unit` — `Unit` is the Kotlin equivalent of Dart's `________`.

---

### Coding Exam

**Problem 1 — Lambdas**

Declare lambdas for: finding the maximum of two integers, reversing a string, and checking if a number is even.

**Problem 2 — Higher-Order Function**

Write `transformList(items: List<String>, transform: (String) -> String): List<String>`, then call it three times: convert to uppercase, reverse each string, and add an `"Item: "` prefix.

**Problem 3 — Trailing Lambda**

Write `buildCard(title: String, content: () -> String): String` that returns `"[CARD] title: X | content: Y"`. Test it using trailing lambda syntax.

---
