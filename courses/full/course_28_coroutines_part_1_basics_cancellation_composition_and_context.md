# Course 28 - Coroutines Part 1: Basics, Cancellation, Composition, and Context

## Goal

စာအုပ်ထဲက `Coroutines, Coroutine Basics, Cancellation and Timeouts, Composing Suspending Functions, Coroutine Context and Dispatchers` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Coroutines, Coroutine Basics, Cancellation and Timeouts, Composing Suspending Functions, Coroutine Context and Dispatchers

## Lessons

### 1. Coroutine basics and suspending functions

ဒီ lesson မှာ `Coroutine basics and suspending functions` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. Cancellation and timeout handling

ဒီ lesson မှာ `Cancellation and timeout handling` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Sequential vs concurrent composition with `async`

ဒီ lesson မှာ `Sequential vs concurrent composition with `async`` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Coroutine context and dispatchers

ဒီ lesson မှာ `Coroutine context and dispatchers` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Dart `Future` maps conceptually to suspend work, but Kotlin adds structured concurrency and dispatcher control.

## Practice

1. Run two fake network requests concurrently with `async`.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Coroutines Part 1: Basics, Cancellation, Composition, and Context` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. A suspendable function uses:
   - A. suspend
   - B. asyncOnly
   - C. future
   - D. awaited
2. Run concurrent result-producing work with:
   - A. async
   - B. package
   - C. object
   - D. annotation

### Fill In The Blank

1. Switch IO work using `Dispatchers.____`.
2. Wait for `async` result with ____.

### Coding Exam

Write `suspend fun loadDashboard()` using `coroutineScope` and two `async` calls.
