# Course 07 - Collections

## Goal

Study this module from `files.zip` and use the included exam questions as the source of truth for assessment.

## Lessons

### 7.1 Immutable vs Mutable

Kotlin collections မှာ immutable / mutable ကိုသပ်သပ် ခွဲထားတယ် — Flutter ရဲ့ `const` list နဲ့ regular list ကဲ့သို့။

| Type | Immutable | Mutable |
|------|-----------|---------|
| List | `listOf()` | `mutableListOf()` |
| Set | `setOf()` | `mutableSetOf()` |
| Map | `mapOf()` | `mutableMapOf()` |

---

### 7.2 List

```kotlin
val colors = listOf("red", "green", "blue")
// colors.add("yellow")   // ❌ Error

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
val userInfo = mapOf(
    "name" to "Aung",
    "city" to "Yangon"
)
println(userInfo["name"])
println(userInfo.getOrDefault("phone", "N/A"))

val scores = mutableMapOf("Math" to 90, "Science" to 85)
scores["English"] = 92
```

> 💡 Kotlin Map entries တွဲဖွဲ့တဲ့နေရာ `"key" to value`၊ Dart မှာ `"key": value`

---

### 7.4 Collection Operations

```kotlin
val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

val evens = numbers.filter { it % 2 == 0 }
val doubled = numbers.map { it * 2 }
val firstEven = numbers.first { it % 2 == 0 }
val hasNegative = numbers.any { it < 0 }
val allPositive = numbers.all { it > 0 }
val sum = numbers.reduce { acc, n -> acc + n }

// chain
val result = numbers
    .filter { it % 2 == 0 }
    .map { it * it }
    .take(3)
```

**Dart နဲ့ နှိုင်းယှဉ်:**

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
1. Kotlin မှာ immutable list ဆောက်ဖို့ ဘာ function သုံးတယ်?
- A. `arrayOf()`
- B. `listOf()`
- C. `mutableListOf()`
- D. `List()`

2. `mutableListOf()` နဲ့ `listOf()` ကွာတာက?
- A. Performance ကွာ
- B. `mutableListOf()` က add/remove ရတယ်၊ `listOf()` မရဘူး
- C. Type safety ကွာ
- D. ကွာချက်မရှိ

3. Kotlin Map မှာ key-value pair ဖော်ပြဖို့ ဘာ syntax သုံးတယ်?
- A. `"key": value`
- B. `"key" -> value`
- C. `"key" to value`
- D. `"key" = value`

4. Dart ရဲ့ `.where()` နဲ့ ညီတဲ့ Kotlin method ကဘာလဲ?
- A. `.find()`
- B. `.search()`
- C. `.filter()`
- D. `.select()`

5. Dart ရဲ့ `.every()` နဲ့ ညီတဲ့ Kotlin method ကဘာလဲ?
- A. `.each()`
- B. `.all()`
- C. `.forEach()`
- D. `.forAll()`

6. `listOf("a", "b", "c").first()` က ဘာ return မလဲ?
- A. `"c"`
- B. `"b"`
- C. `"a"`
- D. the whole list

7. `numbers.reduce { acc, n -> acc + n }` ဆိုတာ ဘာလုပ်တာလဲ?
- A. list ကို filter လုပ်တယ်
- B. elements တွေကို accumulate/combine လုပ်ပြီး single value ဆောက်တယ်
- C. list ကို sort လုပ်တယ်
- D. null values တွေ ဖယ်တယ်

8. `mapOf()` နဲ့ `mutableMapOf()` ကွာတာက?
- A. `mutableMapOf()` က entries add/remove/update ရတယ်
- B. `mapOf()` က faster ဖြစ်တယ်
- C. `mutableMapOf()` က Int keys ပဲ ရတယ်
- D. ကွာချက်မရှိ

### Fill In The Blank
1. Kotlin မှာ immutable list ဆောက်ဖို့ `________` function သုံးတယ်။
2. Dart ရဲ့ `.where()` နဲ့ ညီတဲ့ Kotlin method က `________` ဖြစ်တယ်။
3. Dart ရဲ့ `.every()` နဲ့ ညီတဲ့ Kotlin method က `________` ဖြစ်တယ်။
4. Kotlin Map မှာ key-value pair ကို `"key" ________ value` syntax နဲ့ ရေးတယ်။
5. Map မှာ key မရှိရင် default value return ဖို့ `________` function သုံးတယ်။
6. Collection operations တွေကို chain လုပ်ရင် ပထမဆုံး operation ပြီးမှ နောက် operation ကို `________` notation သုံးပြီး ဆက်ရေးတယ်။

### Coding Exam
**Problem 1 — List Operations**

`val products = listOf("Flutter Book", "Kotlin Guide", "Android Dev", "Flutter Plugin", "iOS Swift")` ဒီ list ကို သုံးပြီး:
1. "Flutter" ပါတဲ့ products တွေပဲ filter ပါ
2. Filter ရလာတဲ့ items တွေကို uppercase ပြောင်းပါ
3. Result ကို print ပါ

**Problem 2 — Map Operations**

Student grades map တစ်ခု ဆောက်ပါ (at least 4 students)၊ ပြီးနောက်:
1. Grades တွေကို loop ပြီး `"Student: X, Grade: Y"` format နဲ့ print ပါ
2. 80 အထက် grade ရတဲ့ student count ကို print ပါ

**Problem 3 — Collection Transform**

`val orders = listOf(150000, 85000, 320000, 45000, 200000)` (kyats ဖြင့်) ဒီ list ကိုသုံးပြီး:
1. 100,000 ကျပ်အထက် orders ပဲ filter ပါ
2. Filter ရလာတဲ့ amount တွေကို 10% discount နုတ်ပြီး map ပါ
3. Total sum ကိုတွက်ပြပါ

---
