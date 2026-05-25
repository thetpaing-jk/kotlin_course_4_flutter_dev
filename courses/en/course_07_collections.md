# Course 07 — Collections

> **Module:** 7 of 10 | **Level:** Intermediate | **For:** Flutter Developers learning Kotlin

---

## Lessons

### 7.1 Immutable vs Mutable

Kotlin collections are explicitly split into immutable and mutable variants — similar to Dart's `const` list vs a regular list.

| Type | Immutable | Mutable |
|------|-----------|---------|
| List | `listOf()` | `mutableListOf()` |
| Set  | `setOf()` | `mutableSetOf()` |
| Map  | `mapOf()` | `mutableMapOf()` |

---

### 7.2 List

```kotlin
val colors = listOf("red", "green", "blue")
// colors.add("yellow")   // ❌ Error — immutable

val items = mutableListOf("apple", "banana")
items.add("mango")
items.remove("apple")

println(colors[0])       // "red"
println(colors.size)     // 3
println(colors.first())  // "red"
println(colors.last())   // "blue"
```

---

### 7.3 Map

```kotlin
val userInfo = mapOf("name" to "Aung", "city" to "Yangon")
println(userInfo["name"])
println(userInfo.getOrDefault("phone", "N/A"))

val scores = mutableMapOf("Math" to 90, "Science" to 85)
scores["English"] = 92
```

> 💡 Kotlin uses `"key" to value` for map entries; Dart uses `"key": value`.

---

### 7.4 Collection Operations

```kotlin
val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

val evens   = numbers.filter { it % 2 == 0 }
val doubled = numbers.map { it * 2 }
val first   = numbers.first { it % 2 == 0 }
val anyNeg  = numbers.any { it < 0 }
val allPos  = numbers.all { it > 0 }
val sum     = numbers.reduce { acc, n -> acc + n }

val result  = numbers.filter { it % 2 == 0 }.map { it * it }.take(3)
```

**Kotlin ↔ Dart cheatsheet:**

| Kotlin | Dart |
|--------|------|
| `filter { }` | `where((e) => )` |
| `map { }` | `map((e) => )` |
| `all { }` | `every((e) => )` |
| `any { }` | `any((e) => )` |
| `first { }` | `firstWhere((e) => )` |

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

**1.** Which function creates an immutable list in Kotlin?
- A. `arrayOf()`
- B. `listOf()`
- C. `mutableListOf()`
- D. `List()`

**2.** What is the key difference between `mutableListOf()` and `listOf()`?
- A. Performance difference
- B. `mutableListOf()` supports add/remove; `listOf()` does not
- C. Type safety difference
- D. No difference

**3.** Which syntax creates a key-value pair in a Kotlin Map?
- A. `"key": value`
- B. `"key" -> value`
- C. `"key" to value`
- D. `"key" = value`

**4.** What is the Kotlin equivalent of Dart's `.where()`?
- A. `.find()`
- B. `.search()`
- C. `.filter()`
- D. `.select()`

**5.** What is the Kotlin equivalent of Dart's `.every()`?
- A. `.each()`
- B. `.all()`
- C. `.forEach()`
- D. `.forAll()`

**6.** What does `listOf("a", "b", "c").first()` return?
- A. `"c"`
- B. `"b"`
- C. `"a"`
- D. The whole list

**7.** What does `numbers.reduce { acc, n -> acc + n }` do?
- A. Filters the list
- B. Combines all elements into a single value
- C. Sorts the list
- D. Removes null values

**8.** What is the difference between `mapOf()` and `mutableMapOf()`?
- A. `mutableMapOf()` supports add/remove/update entries
- B. `mapOf()` is faster
- C. `mutableMapOf()` only accepts Int keys
- D. No difference

---

### Fill In The Blank

1. To create an immutable list, use `________`.
2. Dart's `.where()` is equivalent to Kotlin's `________`.
3. Dart's `.every()` is equivalent to Kotlin's `________`.
4. Map key-value pairs in Kotlin are written as `"key" ________ value`.
5. To return a fallback when a map key doesn't exist, use `________`.
6. Collection operations can be chained using `________` notation.

---

### Coding Exam

**Problem 1 — List Operations**

Given `val products = listOf("Flutter Book", "Kotlin Guide", "Android Dev", "Flutter Plugin", "iOS Swift")`:
1. Filter products containing `"Flutter"`.
2. Uppercase the filtered results.
3. Print the result.

**Problem 2 — Map Operations**

Create a student grades map (at least 4 students), then:
1. Print each entry as `"Student: X, Grade: Y"`.
2. Print the count of students with grades above 80.

**Problem 3 — Collection Transform**

Given `val orders = listOf(150000, 85000, 320000, 45000, 200000)`:
1. Filter orders above 100,000.
2. Apply a 10% discount to each.
3. Print the total sum.

---
