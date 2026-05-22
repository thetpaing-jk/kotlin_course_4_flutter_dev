# Course 01 - Orientation and Basic Syntax

## Goal

Flutter developer တစ်ယောက်အနေနဲ့ Kotlin project တစ်ခုကိုဖတ်နိုင်၊ simple function/class ရေးနိုင်၊ Dart နဲ့ Kotlin syntax mapping ကိုနားလည်နိုင်အောင်တည်ဆောက်မယ်။

## Lessons

### 1. Kotlin ဘာအတွက်သုံးလဲ

Kotlin ကို Android, server-side JVM, multiplatform shared code, Kotlin/Native, Kotlin/JS စတဲ့နေရာတွေမှာသုံးနိုင်ပါတယ်။ Flutter developer အတွက် အရေးကြီးဆုံး usage က Android native side, platform channel, native SDK integration, Kotlin Multiplatform shared business logic ဖြစ်ပါတယ်။

### 2. Entry point and packages

Kotlin app တစ်ခုမှာ `main()` က entry point ဖြစ်နိုင်ပြီး file top မှာ `package` နဲ့ `import` တွေထားပါတယ်။

```kotlin
package com.example.course

fun main() {
    println("Hello Kotlin")
}
```

Flutter lens: Dart မှာလည်း `main()` က app entry point ပါ။ Kotlin package က Android project structure နဲ့ namespace အတွက်ပိုအရေးကြီးပါတယ်။

### 3. Variables: `val` and `var`

`val` က read-only reference ဖြစ်ပြီး Dart `final` နဲ့ဆင်တူပါတယ်။ `var` က value ပြန်ပြောင်းနိုင်ပါတယ်။

```kotlin
val appName = "Shop App"
var cartCount = 0
cartCount += 1
```

### 4. Functions

Kotlin function တွေမှာ parameter type ကို name နောက်မှာရေးပါတယ်။

```kotlin
fun totalPrice(price: Int, quantity: Int): Int {
    return price * quantity
}

fun label(name: String) = "Course: $name"
```

### 5. String templates

String interpolation ကို `$name` သို့မဟုတ် `${expression}` နဲ့ရေးပါတယ်။

```kotlin
val user = "Aung"
println("Hello $user, total is ${totalPrice(20, 3)}")
```

## Flutter Bridge

- Dart: `final name = 'Aung';`
- Kotlin: `val name = "Aung"`
- Dart: `String greet(String name) => 'Hi $name';`
- Kotlin: `fun greet(name: String) = "Hi $name"`

## Practice

1. `calculateSubtotal(price: Int, qty: Int): Int` function ရေးပါ။
2. `val currency = "MMK"` ထားပြီး `"$subtotal MMK"` format ထုတ်ပါ။
3. `var retryCount` ကို 0 ကနေ 3 အထိတိုးပါ။

## Q&A Checkpoint

ဒီ course ပြီးရင် မေးသင့်တဲ့မေးခွန်းများ:

- `val` က immutable object လား immutable reference လား?
- Kotlin type inference က Dart type inference နဲ့ဘယ်လိုကွာလဲ?
- Android native code ထဲမှာ package name ကိုဘာကြောင့်ဂရုစိုက်ရလဲ?

## Exam

### Multiple Choice

1. Kotlin မှာ read-only reference အတွက်ဘာသုံးလဲ?
   - A. `let`
   - B. `val`
   - C. `const`
   - D. `final`
2. Kotlin function return type ကိုဘယ်မှာရေးလဲ?
   - A. Function name မတိုင်ခင်
   - B. Parameter list နောက်မှာ `: Type`
   - C. Function body ထဲမှာ
   - D. Import section ထဲမှာ
3. String template expression အတွက်ဘယ် syntax မှန်လဲ?
   - A. `$(total)`
   - B. `${total}`
   - C. `#{total}`
   - D. `%total%`

### Fill In The Blank

1. Mutable variable ကြေညာရန် `____` ကိုသုံးသည်။
2. Kotlin entry point function အမည်သည် `____` ဖြစ်သည်။
3. `fun add(a: Int, b: Int): ____` မှာ integer ပြန်ချင်ရင် blank ကိုဖြည့်ပါ။

### Coding Exam

Write a Kotlin function `formatCourseProgress(courseName: String, completed: Int, total: Int): String` that returns:

```text
Kotlin Basics: 3/10 completed
```

Use string templates and explicit return type.
