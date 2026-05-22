# Course 07 - Java, Android, Gradle, and Tooling

## Goal

Kotlin ကို Android native integration, Java interop, Gradle project, documentation, compiler/tooling context နဲ့သုံးနိုင်အောင်ပြင်ဆင်မယ်။

## Lessons

### 1. Java interop

Kotlin က Java code ကိုခေါ်နိုင်ပြီး Java က Kotlin code ကိုလည်းခေါ်နိုင်ပါတယ်။ Android SDK အများစုက Java/Kotlin APIs ဖြစ်တဲ့အတွက် interop နားလည်ဖို့လိုပါတယ်။

```kotlin
val list = java.util.ArrayList<String>()
list.add("Kotlin")
```

### 2. Platform types

Java code က nullability metadata မပေးရင် Kotlin မှာ platform type ဖြစ်လာနိုင်ပါတယ်။ ဒီနေရာမှာ safe wrapping, explicit nullable type, validation လိုပါတယ်။

### 3. Android-side Kotlin for Flutter developers

Flutter plugin/platform channel ရေးတဲ့အခါ Android side ကို Kotlin နဲ့ရေးနိုင်ပါတယ်။ Typical tasks:

- Native SDK initialization
- Permission/result callbacks
- Android service integration
- Intent handling
- MethodChannel argument validation

### 4. Gradle basics

Kotlin Android project မှာ Gradle scripts က dependency, plugin, source set, compile options တွေကိုထိန်းပါတယ်။

```kotlin
plugins {
    kotlin("android")
}
```

### 5. Documentation and code style

Kotlin style က concise ဖြစ်ပေမဲ့ public API docs, naming, nullability design ကိုဂရုစိုက်ရပါမယ်။

## Flutter Bridge

- `android/app/build.gradle` ကို Flutter project မှာမကြာခဏတွေ့ရပါတယ်။
- Platform channel argument တွေက nullable/mixed type ဖြစ်လာနိုင်လို့ Kotlin validation ရေးရပါမယ်။
- Java SDK docs ကို Kotlin usage အဖြစ်ပြောင်းဖတ်နိုင်ဖို့ interop သိရပါမယ်။

## Practice

1. Method channel argument map ထဲက `userId` nullable safe extract လုပ်ပါ။
2. Java-style callback ကို Kotlin lambda wrapper အဖြစ်ရေးပါ။
3. Gradle dependency declaration တစ်ခုဖတ်ပြီး group/artifact/version ခွဲပါ။

## Q&A Checkpoint

- Flutter plugin Android side ကို Kotlin နဲ့ရေးတဲ့အခါ null safety ဘာတွေသတိထားရလဲ?
- Java platform type ဆိုတာဘာလဲ?
- Gradle Kotlin DSL နဲ့ Groovy DSL ဘာကွာလဲ?

## Exam

### Multiple Choice

1. Java nullability မသေချာတဲ့ type ကို Kotlin မှာဘာလို့ခေါ်လဲ?
   - A. Platform type
   - B. Widget type
   - C. Flow type
   - D. Route type
2. Flutter native Android integration အတွက်အသုံးများတာဘာလဲ?
   - A. MethodChannel
   - B. CSS Grid
   - C. HTML Canvas
   - D. Dart pubspec only
3. Gradle ကအဓိကဘာကိုစီမံလဲ?
   - A. Build configuration and dependencies
   - B. Runtime UI painting only
   - C. User passwords
   - D. Keyboard layout

### Fill In The Blank

1. Kotlin က Java library များကို `____` လုပ်နိုင်သည်။
2. Android dependency များကို project ထဲထည့်ရန် `____` ကိုသုံးသည်။
3. Flutter မှ Android native function ခေါ်ရန် `____` ကိုအသုံးများသည်။

### Coding Exam

Write a Kotlin function:

```kotlin
fun readUserId(args: Map<String, Any?>): String?
```

It should return `args["userId"]` only if it is a non-blank `String`; otherwise return `null`.
