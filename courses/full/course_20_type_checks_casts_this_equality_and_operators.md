# Course 20 - Type Checks, Casts, This, Equality, and Operators

## Goal

စာအုပ်ထဲက `Type Checks and Casts: is and as, This Expression, Equality, Operator overloading` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Type Checks and Casts: is and as, This Expression, Equality, Operator overloading

## Lessons

### 1. `is`, smart casts, `as`, and `as?`

ဒီ lesson မှာ ``is`, smart casts, `as`, and `as?`` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. `this` labels and receiver disambiguation

ဒီ lesson မှာ ``this` labels and receiver disambiguation` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Structural equality vs referential equality

ဒီ lesson မှာ `Structural equality vs referential equality` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Operator overloading and when to avoid cleverness

ဒီ lesson မှာ `Operator overloading and when to avoid cleverness` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Smart casts help when validating `Any?` values coming from platform channel arguments.

## Practice

1. Safely cast a platform argument into `String`.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Type Checks, Casts, This, Equality, and Operators` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. Safe cast uses:
   - A. as?
   - B. as!!
   - C. cast?
   - D. safeAsOnly
2. Structural equality uses:
   - A. ==
   - B. ===
   - C. equalsRefOnly
   - D. sameObject

### Fill In The Blank

1. Type checking uses the keyword ____.
2. Referential equality uses ____.

### Coding Exam

Write `fun readNonBlankString(value: Any?): String?` using safe cast and blank checking.
