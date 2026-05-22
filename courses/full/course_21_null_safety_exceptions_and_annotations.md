# Course 21 - Null Safety, Exceptions, and Annotations

## Goal

စာအုပ်ထဲက `Null Safety, Exceptions, Annotations` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Null Safety, Exceptions, Annotations

## Lessons

### 1. Nullable vs non-nullable types

ဒီ lesson မှာ `Nullable vs non-nullable types` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. Safe calls, Elvis operator, and not-null assertion

ဒီ lesson မှာ `Safe calls, Elvis operator, and not-null assertion` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Exception handling with `try`, `catch`, `finally`

ဒီ lesson မှာ `Exception handling with `try`, `catch`, `finally`` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Annotations and metadata-driven tooling

ဒီ lesson မှာ `Annotations and metadata-driven tooling` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Dart null safety helps here, but Kotlin Java interop adds platform-type risk.

## Practice

1. Avoid `!!` while reading nested nullable data.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Null Safety, Exceptions, and Annotations` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. A nullable String is written:
   - A. String?
   - B. String!
   - C. ?String
   - D. NullableString
2. The not-null assertion operator is:
   - A. !!
   - B. ??
   - C. ?:
   - D. ?.

### Fill In The Blank

1. Safe calls use ____.
2. Fallback values commonly use the Elvis operator ____.

### Coding Exam

Write `fun safeLength(text: String?): Int` without using `!!`.
