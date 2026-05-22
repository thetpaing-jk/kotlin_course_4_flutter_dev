# Course 05 - Control Flow, Ranges, Returns, and Jumps

## Goal

စာအုပ်ထဲက `Control Flow: if, when, for, while; Returns and Jumps` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Control Flow: if, when, for, while; Returns and Jumps

## Lessons

### 1. `if` as an expression

ဒီ lesson မှာ ``if` as an expression` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. `when` for branch-heavy logic

ဒီ lesson မှာ ``when` for branch-heavy logic` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. `for`, `while`, ranges, progressions, and loop labels

ဒီ lesson မှာ ``for`, `while`, ranges, progressions, and loop labels` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. `return`, `break`, `continue`, and local returns in lambdas

ဒီ lesson မှာ ``return`, `break`, `continue`, and local returns in lambdas` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Use `when` the way you might model tab routing, API result states, or platform argument validation in Flutter plugin code.

## Practice

1. Map tab index values to screen names with `when`.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Control Flow, Ranges, Returns, and Jumps` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. The Kotlin construct commonly used for multi-branch decisions is:
   - A. when
   - B. choose
   - C. matchOnly
   - D. selectCase
2. `1..5` creates:
   - A. an inclusive range
   - B. an exclusive range
   - C. a map
   - D. a nullable string

### Fill In The Blank

1. The Elvis-like multi-branch keyword is ____.
2. Loop from 5 down to 1 using `5 ____ 1`.

### Coding Exam

Write `fun screenName(index: Int): String` using `when` for Home, Search, Profile, and Unknown.
