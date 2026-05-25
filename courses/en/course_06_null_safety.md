# Course 06 — Null Safety

> **Module:** 6 of 10 | **Level:** Intermediate | **For:** Flutter Developers learning Kotlin

---

## Lessons

### 6.1 Nullable vs Non-Null Types

**Kotlin:**
```kotlin
var name: String = "Aung"
name = null               // ❌ Compilation error

var nickname: String? = "Aung"
nickname = null           // ✅ OK
```

**Dart comparison:**
```dart
String name = "Aung";
name = null;              // ❌ Error

String? nickname = "Aung";
nickname = null;          // ✅ OK
```

> 💡 The `String?` nullable syntax is identical in Kotlin and Dart!

---

### 6.2 Safe Call Operator `?.`

```kotlin
val user: User? = getUser()
val name = user?.name                        // null if user is null
val cityLen = user?.address?.city?.length   // safe chain
```

---

### 6.3 Elvis Operator `?:`

**Kotlin:**
```kotlin
val name: String? = null
val displayName = name ?: "Anonymous"

fun processName(name: String?) {
    val actual = name ?: return   // exit function if null
    println("Processing: $actual")
}
```

**Dart comparison:**
```dart
String? name = null;
final displayName = name ?? "Anonymous";   // Dart uses ??
```

> 💡 Kotlin `?:` = Dart `??` — same logic, different symbol.

---

### 6.4 Non-Null Assertion `!!`

```kotlin
val name: String? = "Aung"
val length = name!!.length   // throws NullPointerException if null
```

> ⚠️ Avoid `!!` whenever possible. Prefer `?.` and `?:`.

---

### 6.5 Smart Cast

```kotlin
fun printLength(obj: Any) {
    if (obj is String) {
        println(obj.length)   // no cast needed — compiler knows it's String
    }
}

val name: String? = getName()
if (name != null) {
    println(name.length)      // smart cast to non-null String
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

**1.** What is appended to a type to make it nullable in Kotlin?
- A. `!`
- B. `?`
- C. `*`
- D. `~`

**2.** What is the Kotlin equivalent of Dart's `??` operator?
- A. `?.`
- B. `!!`
- C. `?:`
- D. `?`

**3.** What does the safe call operator `?.` return when the object is null?
- A. Throws an exception
- B. Returns a default value
- C. Returns `null`
- D. Returns an empty string

**4.** What is a smart cast?
- A. AI-powered type conversion
- B. After a type check, the compiler automatically treats the variable as the checked type
- C. Runtime type casting
- D. A type alias

**5.** What happens if you use `!!` on a null value?
- A. Compilation error
- B. Returns `null`
- C. Throws NullPointerException
- D. Returns a default value

**6.** Given `val length = user?.name?.length`, what is `length` if `user` is null?
- A. 0
- B. -1
- C. `null`
- D. Compilation error

**7.** What is the Kotlin equivalent of Dart's `!` non-null assertion?
- A. `?`
- B. `?.`
- C. `?:`
- D. `!!`

**8.** In `val result = name ?: return`, what happens if `name` is null?
- A. `result` becomes null
- B. An exception is thrown
- C. The function returns early
- D. The string `"return"` is assigned

---

### Fill In The Blank

1. `String?` means the value can be a `String` or `________`.
2. The Kotlin operator equivalent to Dart's `??` is `________`.
3. `?.` is called the `________` call operator.
4. Instead of `!!`, prefer `________` and `________`.
5. The compiler automatically narrowing a type after a null check is called a `________` cast.
6. Attempting to assign null to a non-nullable variable causes a `________` error.

---

### Coding Exam

**Problem 1 — Safe Navigation**

```kotlin
data class User(val name: String?, val email: String?)
```

Write `getUserDisplayName(user: User?): String` — return `"Guest"` if user is null, `"Anonymous"` if name is blank, otherwise the name.

**Problem 2 — Elvis Chain**

Write `getServerUrl(host: String?, port: Int?): String` — fallback to `"localhost"` and `8080` respectively, then return `"http://host:port"`.

**Problem 3 — Smart Cast**

Write `processInput(input: Any?)` — if `String` print uppercase, if `Int` print doubled, if `null` print `"No input"`, otherwise print `"Unknown type"`.

---
