# Course 02 - Types, Null Safety, and Control Flow

## Goal

Kotlin basic types, nullable/non-nullable design, `if`, `when`, loops, ranges ကို Dart/Flutter mental model နဲ့နားလည်မယ်။

## Lessons

### 1. Basic types

Kotlin မှာ `Int`, `Long`, `Double`, `Boolean`, `Char`, `String` စတဲ့ type တွေရှိပါတယ်။ Number conversion တွေကို implicit မလုပ်ဘဲ explicit လုပ်ရတာများပါတယ်။

```kotlin
val count: Int = 10
val price: Double = count.toDouble()
```

### 2. Null safety

Non-null type က `null` မကိုင်နိုင်ပါ။ Nullable type ကို `?` နဲ့ရေးပါတယ်။

```kotlin
var title: String = "Home"
var subtitle: String? = null

println(subtitle?.length ?: 0)
```

Flutter lens: Dart null safety နဲ့ဆင်တူပေမဲ့ Kotlin မှာ Java interop ကြောင့် platform type တွေက NPE risk ထည့်နိုင်ပါတယ်။

### 3. Conditional expressions

Kotlin `if` က expression ဖြစ်နိုင်ပါတယ်။

```kotlin
val label = if (count > 0) "In stock" else "Sold out"
```

### 4. `when`

`when` က Dart `switch` ထက် expression style ပိုသုံးလို့ကောင်းပါတယ်။

```kotlin
fun routeName(index: Int): String = when (index) {
    0 -> "Home"
    1 -> "Search"
    2 -> "Profile"
    else -> "Unknown"
}
```

### 5. Ranges and loops

```kotlin
for (i in 1..3) println(i)
for (i in 5 downTo 1 step 2) println(i)
```

## Flutter Bridge

- Dart nullable: `String? name`
- Kotlin nullable: `String? name`
- Dart null fallback: `name ?? 'Guest'`
- Kotlin Elvis operator: `name ?: "Guest"`
- Dart conditional UI state can map to Kotlin `when` for Android-side logic.

## Practice

1. Nullable `String?` ကိုယူပြီး length ကို safe-call နဲ့ပြန်ပါ။
2. `screenForTab(index: Int)` ကို `when` နဲ့ရေးပါ။
3. `1..10` ထဲက even number တွေ print လုပ်ပါ။

## Q&A Checkpoint

- Kotlin `!!` ကိုဘယ်အချိန်မှာရှောင်သင့်လဲ?
- Dart `??` နဲ့ Kotlin `?:` ဘာကွာလဲ?
- Java library response ကို Kotlin nullable model ထဲဘယ်လိုထည့်သင့်လဲ?

## Exam

### Multiple Choice

1. Nullable `String` ကို Kotlin မှာဘယ်လိုရေးလဲ?
   - A. `Nullable<String>`
   - B. `String?`
   - C. `String|null`
   - D. `?String`
2. Elvis operator ကဘာလဲ?
   - A. `?:`
   - B. `?.`
   - C. `!!`
   - D. `as?`
3. `when` ကိုအသုံးများတဲ့နေရာကဘာလဲ?
   - A. Dependency install
   - B. Multi-branch decision
   - C. Package declaration
   - D. Comment block

### Fill In The Blank

1. Safe call operator သည် `____` ဖြစ်သည်။
2. Not-null assertion operator သည် `____` ဖြစ်သည်။
3. `for (i in 1____5)` သည် 1 မှ 5 ထိ range ဖြစ်သည်။

### Coding Exam

Write `fun displayName(firstName: String?, fallback: String): String` that returns `firstName` when it is not null and not blank, otherwise returns `fallback`.
