# Course 10 - Objects, Inline Value Classes, and Delegation

## Goal

စာအုပ်ထဲက `Object Expressions and Declarations, Inline classes, Delegation` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Object Expressions and Declarations, Inline classes, Delegation

## Lessons

### 1. Object declarations as singletons

ဒီ lesson မှာ `Object declarations as singletons` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. Companion objects and object expressions

ဒီ lesson မှာ `Companion objects and object expressions` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Inline/value classes for lightweight domain wrappers

ဒီ lesson မှာ `Inline/value classes for lightweight domain wrappers` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Class delegation with `by`

ဒီ lesson မှာ `Class delegation with `by`` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Singleton helpers and small ID wrappers can keep native integration code less error-prone.

## Practice

1. Wrap a raw user id string in a value class.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Objects, Inline Value Classes, and Delegation` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. A singleton object is declared with:
   - A. object
   - B. single
   - C. static class
   - D. onlyOne
2. Delegation commonly uses the keyword:
   - A. by
   - B. via
   - C. using
   - D. from

### Fill In The Blank

1. A companion object lives inside a ____.
2. A lightweight wrapper can be a value ____.

### Coding Exam

Create `@JvmInline value class UserId(val value: String)` and a function that accepts `UserId`.
