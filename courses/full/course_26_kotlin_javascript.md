# Course 26 - Kotlin JavaScript

## Goal

စာအုပ်ထဲက `JavaScript, Dynamic Type, Calling JavaScript from Kotlin, Calling Kotlin from JavaScript, JavaScript Modules, JavaScript Reflection, JavaScript DCE, Example` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

JavaScript, Dynamic Type, Calling JavaScript from Kotlin, Calling Kotlin from JavaScript, JavaScript Modules, JavaScript Reflection, JavaScript DCE, Example

## Lessons

### 1. Kotlin/JS target overview

ဒီ lesson မှာ `Kotlin/JS target overview` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. `dynamic` and JavaScript interop

ဒီ lesson မှာ ``dynamic` and JavaScript interop` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Modules and calling across Kotlin/JS boundaries

ဒီ lesson မှာ `Modules and calling across Kotlin/JS boundaries` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Dead code elimination and JS-specific limitations

ဒီ lesson မှာ `Dead code elimination and JS-specific limitations` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Kotlin/JS is not Flutter web; it is Kotlin compiled for JavaScript ecosystems.

## Practice

1. Write a comparison note between Flutter web and Kotlin/JS.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Kotlin JavaScript` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. Kotlin/JS compiles Kotlin to target:
   - A. JavaScript
   - B. Swift only
   - C. Dart only
   - D. SQL
2. The JS interop flexible type is:
   - A. dynamic
   - B. AnyNative
   - C. jsObjectOnly
   - D. flex

### Fill In The Blank

1. Unused JS output can be reduced by DCE: dead code ____.
2. JavaScript module interop involves JS ____.

### Coding Exam

Sketch an external JavaScript function declaration in Kotlin/JS.
