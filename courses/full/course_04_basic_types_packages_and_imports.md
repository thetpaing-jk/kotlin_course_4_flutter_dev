# Course 04 - Basic Types, Packages, and Imports

## Goal

စာအုပ်ထဲက `Basics, Basic Types, Packages` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Basics, Basic Types, Packages

## Lessons

### 1. Numbers, booleans, characters, strings, arrays

ဒီ lesson မှာ `Numbers, booleans, characters, strings, arrays` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. Explicit numeric conversions and why Kotlin avoids surprising casts

ဒီ lesson မှာ `Explicit numeric conversions and why Kotlin avoids surprising casts` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. String operations and raw strings

ဒီ lesson မှာ `String operations and raw strings` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Packages/imports as project organization tools

ဒီ lesson မှာ `Packages/imports as project organization tools` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Dart and Kotlin both infer types, but Kotlin is stricter about numeric conversion, which matters when reading Android SDK APIs.

## Practice

1. Convert an `Int` quantity into a `Double` subtotal safely.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Basic Types, Packages, and Imports` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. Kotlin generally requires numeric conversions to be:
   - A. explicit
   - B. automatic always
   - C. string based
   - D. ignored
2. Imports are used to:
   - A. bring declarations into scope
   - B. run exams
   - C. format UI only
   - D. store progress

### Fill In The Blank

1. Convert `count` to Double with `count.____()`.
2. A package declaration commonly appears at the ____ of a Kotlin file.

### Coding Exam

Write `fun subtotal(price: Int, qty: Int): Double` and return the value as `Double`.
