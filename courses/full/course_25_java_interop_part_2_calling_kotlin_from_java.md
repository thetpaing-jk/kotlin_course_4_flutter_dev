# Course 25 - Java Interop Part 2: Calling Kotlin from Java

## Goal

စာအုပ်ထဲက `Calling Kotlin from Java` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Calling Kotlin from Java

## Lessons

### 1. How Kotlin declarations appear to Java

ဒီ lesson မှာ `How Kotlin declarations appear to Java` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. `@JvmStatic`, `@JvmField`, and file facades

ဒီ lesson မှာ ``@JvmStatic`, `@JvmField`, and file facades` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Default arguments and overloads

ဒီ lesson မှာ `Default arguments and overloads` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Designing Kotlin APIs that Java callers can use cleanly

ဒီ lesson မှာ `Designing Kotlin APIs that Java callers can use cleanly` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

If an Android SDK or generated code calls your Kotlin, Java-facing annotations can matter.

## Practice

1. Expose a companion object helper as a static Java method.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Java Interop Part 2: Calling Kotlin from Java` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. Expose companion member as Java static with:
   - A. @JvmStatic
   - B. @StaticOnly
   - C. @JavaCall
   - D. @CompanionStaticOnly
2. Generate overloads for default arguments with:
   - A. @JvmOverloads
   - B. @ManyConstructors
   - C. @OverloadAll
   - D. @DefaultJava

### Fill In The Blank

1. A field can be exposed with ____.
2. Kotlin files compile to Java-visible file ____.

### Coding Exam

Sketch a Kotlin utility object with a `@JvmStatic` function.
