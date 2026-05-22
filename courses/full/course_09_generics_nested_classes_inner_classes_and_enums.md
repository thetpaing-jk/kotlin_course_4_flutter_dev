# Course 09 - Generics, Nested Classes, Inner Classes, and Enums

## Goal

စာအုပ်ထဲက `Generics, Nested and Inner Classes, Enum Classes` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Generics, Nested and Inner Classes, Enum Classes

## Lessons

### 1. Generic classes and functions

ဒီ lesson မှာ `Generic classes and functions` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. Variance basics: `out`, `in`, and star projections

ဒီ lesson မှာ `Variance basics: `out`, `in`, and star projections` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Nested classes vs `inner` classes

ဒီ lesson မှာ `Nested classes vs `inner` classes` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Enums with properties and behavior

ဒီ lesson မှာ `Enums with properties and behavior` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Generic result wrappers such as `ApiResult<T>` are directly useful when modeling repository responses.

## Practice

1. Create `ApiResponse<T>` with data and message fields.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Generics, Nested Classes, Inner Classes, and Enums` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. A type parameter is commonly written as:
   - A. T
   - B. #
   - C. var
   - D. pkg
2. An `inner` class can access:
   - A. outer class members
   - B. only CSS
   - C. no members
   - D. Gradle plugins only

### Fill In The Blank

1. Covariant generic position uses the keyword ____.
2. Enum constants are declared inside an ____ class.

### Coding Exam

Create `sealed class ApiResult<out T>` with Success, Loading, and Error.
