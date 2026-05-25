# Course 02 — Functions

> **Module:** 2 of 10 | **Level:** Beginner | **For:** Flutter Developers learning Kotlin

---

## Lessons

### 2.1 Basic Function Declaration

**Kotlin:**
```kotlin
fun greet(name: String): String {
    return "Hello, $name!"
}
```

**Dart (Flutter) comparison:**
```dart
String greet(String name) {
    return "Hello, $name!";
}
```

> 💡 Kotlin prefixes `fun`, then places the return type **after** the parameter list with a colon.

---

### 2.2 Single Expression Functions

Like Dart's `=>` arrow syntax, Kotlin uses `=` for single-expression functions.

```kotlin
fun double(x: Int): Int = x * 2
fun add(a: Int, b: Int) = a + b   // return type inferred
```

**Dart comparison:**
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
    println("Button: $text | Color: $color | Enabled: $isEnabled")
}

createButton("Click Me")
createButton("Submit", color = "red")
createButton("Cancel", isEnabled = false)
```

**Dart comparison:**
```dart
void createButton({
    required String text,
    String color = "blue",
    bool isEnabled = true,
}) { ... }
```

> 💡 In Kotlin you can call any parameter by name at the call site without wrapping the definition in `{}`.

---

### 2.4 Unit Return Type

Dart's `void` = Kotlin's `Unit` (and `Unit` can be omitted).

```kotlin
fun logMessage(msg: String): Unit { println(msg) }
fun logMessage(msg: String) { println(msg) }  // same thing
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

**1.** What keyword declares a function in Kotlin?
- A. `func`
- B. `def`
- C. `fun`
- D. `function`

**2.** Where is the return type placed in a Kotlin function?
- A. Before the function name
- B. After the parameter list, following a colon
- C. Before the parameter list
- D. After the `return` keyword

**3.** What is the Kotlin equivalent of Dart's `void` return type?
- A. `Nothing`
- B. `Null`
- C. `Unit`
- D. `Empty`

**4.** Which syntax correctly writes a single-expression function in Kotlin?
- A. `fun add(a: Int, b: Int) => a + b`
- B. `fun add(a: Int, b: Int) = a + b`
- C. `fun add(a: Int, b: Int) -> a + b`
- D. `fun add(a: Int, b: Int) : a + b`

**5.** In Dart, what do you add to a function definition to enable named parameters?
- A. `[]`
- B. `()`
- C. `{}`
- D. `<>`

**6.** Given `fun setup(name: String, color: String = "blue")`, what happens if you call `setup("App")`?
- A. Compilation error
- B. Runtime error
- C. `color` defaults to `"blue"`
- D. `color` becomes `null`

**7.** What is the default return type of a Kotlin function that omits the return type annotation?
- A. `null`
- B. `void`
- C. `Unit`
- D. `Any`

**8.** Which Kotlin call syntax correctly uses named arguments?
- A. `createButton("text", color: "red")`
- B. `createButton(text = "text", color = "red")`
- C. `createButton(text: "text", color: "red")`
- D. `createButton("text", "red")`

---

### Fill In The Blank

1. Functions in Kotlin are declared with the `________` keyword.
2. The Kotlin return type equivalent to Dart's `void` is `________`.
3. Single-expression functions use `________` instead of curly braces.
4. When a default-parameter argument is omitted at the call site, the `________` value is used.
5. Passing an argument by its parameter name is called a `________` argument.
6. The Kotlin version of Dart's `String greet(String name)` is `________`.

---

### Coding Exam

**Problem 1 — Convert Dart to Kotlin**

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

Write an API-request function with `endpoint` (required), `method` (default `"GET"`), and `timeout` (default `30`). Print all three parameters in the body.

**Problem 3 — Named Arguments**

Call the function from Problem 2 twice using named arguments:
- `/users` — all defaults
- `/posts` — method `"POST"`, timeout `60`

---
