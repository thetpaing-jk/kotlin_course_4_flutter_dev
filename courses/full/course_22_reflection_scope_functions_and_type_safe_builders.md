# Course 22 - Reflection, Scope Functions, and Type-Safe Builders

## Goal

စာအုပ်ထဲက `Reflection, Scope Functions, Type-Safe Builders` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Reflection, Scope Functions, Type-Safe Builders

## Lessons

### 1. Reflection overview and when it is costly

ဒီ lesson မှာ `Reflection overview and when it is costly` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. `let`, `run`, `with`, `apply`, and `also`

ဒီ lesson မှာ ``let`, `run`, `with`, `apply`, and `also`` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Receiver lambdas and builder-style APIs

ဒီ lesson မှာ `Receiver lambdas and builder-style APIs` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Type-safe builders as Kotlin DSL foundations

ဒီ lesson မှာ `Type-safe builders as Kotlin DSL foundations` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Scope functions can make native setup code concise, but overuse can become as hard to read as deeply nested widgets.

## Practice

1. Configure an object with `apply` and log it with `also`.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Reflection, Scope Functions, and Type-Safe Builders` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. Configure object and return it:
   - A. apply
   - B. let
   - C. withOnly
   - D. reflect
2. Side effect and return original object:
   - A. also
   - B. run
   - C. thisOnly
   - D. build

### Fill In The Blank

1. Nullable transform blocks often use ____.
2. Type-safe builders usually rely on lambdas with ____.

### Coding Exam

Create a small builder-style function using a lambda with receiver.
