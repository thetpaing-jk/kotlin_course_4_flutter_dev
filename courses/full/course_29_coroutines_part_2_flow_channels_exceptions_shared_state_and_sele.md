# Course 29 - Coroutines Part 2: Flow, Channels, Exceptions, Shared State, and Select

## Goal

စာအုပ်ထဲက `Asynchronous Flow, Channels, Exception Handling, Shared mutable state and concurrency, Select Expression` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Asynchronous Flow, Channels, Exception Handling, Shared mutable state and concurrency, Select Expression

## Lessons

### 1. Flow as asynchronous streams

ဒီ lesson မှာ `Flow as asynchronous streams` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. Channels for coroutine communication

ဒီ lesson မှာ `Channels for coroutine communication` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Exception handling and supervision basics

ဒီ lesson မှာ `Exception handling and supervision basics` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Shared mutable state, synchronization, and select expressions

ဒီ lesson မှာ `Shared mutable state, synchronization, and select expressions` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Flow is the closest Kotlin concept to Dart `Stream`, but coroutine cancellation and collection scopes matter.

## Practice

1. Create a Flow that emits loading progress values.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Coroutines Part 2: Flow, Channels, Exceptions, Shared State, and Select` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. Asynchronous streams in coroutines commonly use:
   - A. Flow
   - B. MapOnly
   - C. Object
   - D. Package
2. Flow values are produced with:
   - A. emit
   - B. print
   - C. returnOnly
   - D. package

### Fill In The Blank

1. Dart Stream is conceptually close to Kotlin ____.
2. Mutable shared state needs careful ____ control.

### Coding Exam

Write a `Flow<Int>` that emits 0, 50, and 100.
