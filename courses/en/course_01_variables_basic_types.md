# Course 01 — Variables and Basic Types

> **Module:** 1 of 10 | **Level:** Beginner | **For:** Flutter Developers learning Kotlin

---

## Lessons

### 1.1 Variables: `val` vs `var`

Just like Flutter/Dart uses `final` and `var`, Kotlin uses `val` and `var`.

| Kotlin | Dart (Flutter) | Meaning |
|--------|----------------|---------|
| `val`  | `final`        | Assign once only (read-only) |
| `var`  | `var`          | Reassignable (mutable) |

**Kotlin:**
```kotlin
val name: String = "Flutter Dev"   // cannot be changed
val age = 25                        // type inference — compiler knows it's Int
var score = 100                     // can be changed
score += 50
```

**Dart (Flutter) comparison:**
```dart
final String name = "Flutter Dev";
final age = 25;
var score = 100;
score += 50;
```

> 💡 **Key difference:** In Kotlin, the type goes **after** the variable name (`name: String`). In Dart it goes **before** (`String name`).

---

### 1.2 Basic Types

Kotlin has no primitive types — only object types (same as Dart).

| Kotlin | Dart | Description |
|--------|------|-------------|
| `Int` | `int` | integer |
| `Double` | `double` | floating point |
| `String` | `String` | text |
| `Boolean` | `bool` | true/false |
| `Long` | — | 64-bit integer |
| `Float` | — | 32-bit float |
| `Char` | — | single character |

```kotlin
val count: Int = 10
val price: Double = 9.99
val isActive: Boolean = true
val letter: Char = 'A'
val message: String = "Hello Kotlin"
```

---

### 1.3 String Templates

Just like Dart uses `${}` for string interpolation, Kotlin does too.

```kotlin
val name = "Aung"
val age = 25
println("My name is $name")
println("Next year I will be ${age + 1}")
```

> 💡 Single variable → `$name` | Expression → `${expression}` — nearly identical to Dart.

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

**1.** Which keyword declares a read-only variable in Kotlin?
- A. `let`
- B. `var`
- C. `val`
- D. `const`

**2.** Which Kotlin keyword is the closest equivalent to Dart's `final`?
- A. `var`
- B. `val`
- C. `static`
- D. `fun`

**3.** What is the inferred type of `age` in `val age = 25`?
- A. `String`
- B. `Double`
- C. `Long`
- D. `Int`

**4.** Where does Kotlin place the type annotation?
- A. Before the variable name
- B. After the variable name, following a colon
- C. At the end of the line
- D. Only inside functions

**5.** Which line causes a compilation error?
```kotlin
val x = 10
var y = 20
x = 30     // line A
y = 40     // line B
```
- A. Line A
- B. Line B
- C. Both lines
- D. No error

**6.** What is the Kotlin equivalent of Dart's `bool`?
- A. `Boolean`
- B. `bool`
- C. `boolean`
- D. `Bool`

**7.** Which syntax correctly embeds an expression in a string template?
- A. `%(expression)`
- B. `{expression}`
- C. `${expression}`
- D. `$(expression)`

**8.** Does Dart have a direct equivalent to Kotlin's `Long` type?
- A. Yes — `long`
- B. Yes — `Long`
- C. No — Dart only has `int`
- D. Yes — `int64`

---

### Fill In The Blank

1. In Kotlin, a reassignable variable is declared with the `________` keyword.
2. The Kotlin type equivalent to Dart's `double` is `________`.
3. The compiler automatically deducing a variable's type without an explicit annotation is called `________`.
4. To embed a single variable in a string template without curly braces, use `________`.
5. The Kotlin type that holds a single character is `________`.
6. The Kotlin equivalent of Dart's `final String city = "Yangon"` is `________`.

---

### Coding Exam

**Problem 1 — Convert Dart to Kotlin**

```dart
final String appName = "MyApp";
final int version = 3;
var bool isLoggedIn = false;
var double rating = 4.5;
isLoggedIn = true;
```

**Problem 2 — String Templates**

Declare `name` (String), `age` (Int), and `city` (String), then produce:
```
My name is Mg Mg and I live in Yangon.
Next year I will be 26.
```

**Problem 3 — Explicit vs Inferred Types**

Write each value below in both (a) explicit type and (b) type-inferred form:
- integer `100`
- string `"Kotlin"`
- boolean `true`
- double `3.14`

---
