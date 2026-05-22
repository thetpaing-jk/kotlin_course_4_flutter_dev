# Course 19 - Multiplatform Foundations and Gradle Projects

## Goal

စာအုပ်ထဲက `Multiplatform Programming, Platform-Specific Declarations, Building Multiplatform Projects with Gradle` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Multiplatform Programming, Platform-Specific Declarations, Building Multiplatform Projects with Gradle

## Lessons

### 1. Common source sets and platform source sets

ဒီ lesson မှာ `Common source sets and platform source sets` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. `expect` and `actual` declarations

ဒီ lesson မှာ ``expect` and `actual` declarations` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Sharing models, validation, and networking code

ဒီ lesson မှာ `Sharing models, validation, and networking code` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Gradle project shape for KMP

ဒီ lesson မှာ `Gradle project shape for KMP` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

KMP is not Flutter, but both care about sharing logic. Flutter shares UI; KMP shares Kotlin code across platform apps.

## Practice

1. Identify which parts of a Flutter app could become shared business logic.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Multiplatform Foundations and Gradle Projects` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. Common declarations can use:
   - A. expect
   - B. maybe
   - C. sharedOnly
   - D. platform
2. Platform implementations can use:
   - A. actual
   - B. real
   - C. nativeOnly
   - D. targeted

### Fill In The Blank

1. KMP shared code often lives in a ____ source set.
2. Build setup is commonly managed with ____.

### Coding Exam

Sketch `expect fun platformName(): String` and one `actual` implementation.
