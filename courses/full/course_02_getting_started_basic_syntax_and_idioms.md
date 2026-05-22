# Course 02 - Getting Started, Basic Syntax, and Idioms

## Goal

စာအုပ်ထဲက `Getting Started, Basic Syntax, Idioms` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Getting Started, Basic Syntax, Idioms

## Lessons

### 1. Packages, imports, and the `main()` entry point

ဒီ lesson မှာ `Packages, imports, and the `main()` entry point` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. `val`, `var`, type inference, comments, and string templates

ဒီ lesson မှာ ``val`, `var`, type inference, comments, and string templates` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Functions, default arguments, and named arguments

ဒီ lesson မှာ `Functions, default arguments, and named arguments` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Kotlin idioms: DTOs, filtering, collection checks, instance checks

ဒီ lesson မှာ `Kotlin idioms: DTOs, filtering, collection checks, instance checks` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

`val` feels close to Dart `final`, and Kotlin named/default arguments will feel familiar from Flutter widget constructors.

## Practice

1. Create a `data class CourseProgress` and print a formatted progress string.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Getting Started, Basic Syntax, and Idioms` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. Which keyword declares a read-only reference?
   - A. val
   - B. var
   - C. let
   - D. mutable
2. Kotlin string templates use:
   - A. $name and ${expression}
   - B. #{name}
   - C. %name%
   - D. @name

### Fill In The Blank

1. The entry point function is usually named ____.
2. Mutable variables use the keyword ____.

### Coding Exam

Write `fun formatProgress(name: String, done: Int, total: Int): String` using a string template.
