# Course 11 - Delegated Properties and Destructuring

## Goal

စာအုပ်ထဲက `Delegated Properties, Destructuring Declarations` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Delegated Properties, Destructuring Declarations

## Lessons

### 1. Property delegation with `by`

ဒီ lesson မှာ `Property delegation with `by`` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. Standard delegates: `lazy`, observable, vetoable

ဒီ lesson မှာ `Standard delegates: `lazy`, observable, vetoable` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Map-backed properties

ဒီ lesson မှာ `Map-backed properties` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Destructuring declarations and component functions

ဒီ lesson မှာ `Destructuring declarations and component functions` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Lazy values are useful for native SDK setup work that should happen only when actually needed.

## Practice

1. Use `lazy` to initialize a simulated SDK client.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Delegated Properties and Destructuring` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. Lazy initialization can use:
   - A. by lazy
   - B. by late
   - C. open lazy
   - D. lazy import
2. Destructuring reads values through:
   - A. component functions
   - B. package names
   - C. CSS selectors
   - D. Gradle tasks

### Fill In The Blank

1. Delegated properties use the keyword ____.
2. Pair destructuring can look like `val (a, b) = ____`.

### Coding Exam

Create a data class `Point(x, y)` and destructure it into two variables.
