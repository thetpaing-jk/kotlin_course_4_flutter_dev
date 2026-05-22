# Course 13 - Higher-Order Functions, Lambdas, and Inline Functions

## Goal

စာအုပ်ထဲက `Higher-Order Functions and Lambdas, Inline Functions` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Higher-Order Functions and Lambdas, Inline Functions

## Lessons

### 1. Functions as values and parameters

ဒီ lesson မှာ `Functions as values and parameters` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. Lambda syntax and `it`

ဒီ lesson မှာ `Lambda syntax and `it`` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Function types, receivers, and closures

ဒီ lesson မှာ `Function types, receivers, and closures` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. `inline`, `noinline`, `crossinline`, and performance tradeoffs

ဒီ lesson မှာ ``inline`, `noinline`, `crossinline`, and performance tradeoffs` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Builder callbacks in Flutter map nicely to Kotlin lambdas, especially when reading Android DSL APIs.

## Practice

1. Write a `retry(times, block)` higher-order function.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Higher-Order Functions, Lambdas, and Inline Functions` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. A function that accepts another function is:
   - A. higher-order
   - B. higher-package
   - C. sealed-only
   - D. native-only
2. The default single lambda parameter name is:
   - A. it
   - B. this
   - C. arg0 only
   - D. valueOnly

### Fill In The Blank

1. A no-parameter Unit lambda type is `() -> ____`.
2. Inline functions use the keyword ____.

### Coding Exam

Write `fun repeatTwice(block: () -> Unit)` and call it from `main()`.
