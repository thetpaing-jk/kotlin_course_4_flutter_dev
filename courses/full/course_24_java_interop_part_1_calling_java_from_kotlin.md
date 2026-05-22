# Course 24 - Java Interop Part 1: Calling Java from Kotlin

## Goal

စာအုပ်ထဲက `Java Interop, Calling Java code from Kotlin` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Java Interop, Calling Java code from Kotlin

## Lessons

### 1. Calling Java methods and using Java classes

ဒီ lesson မှာ `Calling Java methods and using Java classes` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. Getters/setters as properties

ဒီ lesson မှာ `Getters/setters as properties` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. SAM conversions and Java callbacks

ဒီ lesson မှာ `SAM conversions and Java callbacks` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Platform types and nullability annotations

ဒီ lesson မှာ `Platform types and nullability annotations` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Most Android SDK docs have Java examples, so you need to translate Java idioms into Kotlin safely.

## Practice

1. Wrap a nullable Java-style result into a safe Kotlin function.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Java Interop Part 1: Calling Java from Kotlin` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. Java nullability without metadata may appear as:
   - A. platform type
   - B. Flutter type
   - C. CSS type
   - D. sealed type
2. A Java getter may look like a Kotlin:
   - A. property
   - B. package
   - C. range
   - D. flow

### Fill In The Blank

1. Java classes can be used from ____.
2. A Java single-method interface can use SAM ____.

### Coding Exam

Write a Kotlin wrapper that turns a Java-style nullable string into a non-null display label.
