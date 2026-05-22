# Course 27 - Kotlin Native and Platform Interop

## Goal

စာအုပ်ထဲက `Native, Concurrency in Kotlin/Native, Immutability in Kotlin/Native, Kotlin/Native libraries, Advanced topics, Platform libraries, Kotlin/Native interoperability, Swift/Objective-C, CocoaPods, Kotlin/Native Gradle plugin` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Native, Concurrency in Kotlin/Native, Immutability in Kotlin/Native, Kotlin/Native libraries, Advanced topics, Platform libraries, Kotlin/Native interoperability, Swift/Objective-C, CocoaPods, Kotlin/Native Gradle plugin

## Lessons

### 1. Kotlin/Native target overview

ဒီ lesson မှာ `Kotlin/Native target overview` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. Native libraries and platform libraries

ဒီ lesson မှာ `Native libraries and platform libraries` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Swift/Objective-C interoperability

ဒီ lesson မှာ `Swift/Objective-C interoperability` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. CocoaPods and Gradle integration

ဒီ lesson မှာ `CocoaPods and Gradle integration` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Flutter plugins may already expose iOS/Android native layers; Kotlin/Native appears more often in KMP shared modules.

## Practice

1. List what shared Kotlin code would expose to iOS.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Kotlin Native and Platform Interop` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. Kotlin/Native can compile without:
   - A. JVM
   - B. source files
   - C. functions
   - D. types
2. iOS interop often involves:
   - A. Swift/Objective-C
   - B. CSS
   - C. Dart analyzer
   - D. HTML forms

### Fill In The Blank

1. iOS dependency integration can use ____.
2. Native platform APIs are exposed through platform ____.

### Coding Exam

Sketch an API that shared Kotlin code could expose to an iOS app.
