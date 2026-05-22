# Course 08 - Multiplatform, Native, JS, and Advanced Topics

## Goal

Kotlin Multiplatform, Native, JS, advanced language topics, annotations, reflection, type-safe builders, evolution awareness ကို broad map အနေနဲ့နားလည်ပြီး ဘယ် topic ကိုနောက်ထပ် deepen လုပ်ရမလဲရွေးနိုင်မယ်။

## Lessons

### 1. Multiplatform idea

Kotlin Multiplatform က business logic, models, networking, validation logic စတာတွေကို shared source set ထဲထားပြီး Android/iOS/JVM/JS/Native target တွေနဲ့သုံးနိုင်တဲ့ approach ပါ။

Flutter lens: Flutter က UI + app runtime ကို cross-platform ပေးတာဖြစ်ပြီး Kotlin Multiplatform က shared Kotlin code ကို platform apps မှာထည့်သုံးတဲ့ model ဖြစ်ပါတယ်။ နှစ်ခုတူတာမဟုတ်ပါ။

### 2. Expect and actual thinking

Common code မှာ expected API declare လုပ်ပြီး platform-specific implementation ကို actual နဲ့ပေးနိုင်ပါတယ်။

```kotlin
expect fun currentTimestamp(): Long
```

### 3. Kotlin/Native

Kotlin/Native က JVM မလိုဘဲ native binary target တွေအတွက် compile လုပ်နိုင်ပါတယ်။ iOS shared library/framework scenarios တွေမှာ KMP နဲ့ဆက်စပ်တတ်ပါတယ်။

### 4. Kotlin/JS

Kotlin/JS က JavaScript ecosystem နဲ့ interop လုပ်နိုင်ပါတယ်။ Flutter web replacement မဟုတ်ဘဲ Kotlin code ကို JS target အဖြစ်အသုံးချတဲ့ model ပါ။

### 5. Advanced language topics

ဒီ category တွေကို intermediate ပြီးမှဆက်သင်သင့်ပါတယ်:

- Generics
- Delegation and delegated properties
- Annotations
- Reflection
- Operator overloading
- Type-safe builders
- Experimental API markers

## Flutter Bridge

- Flutter plugin native layer သိထားရင် KMP shared module integration ကိုနားလည်ရလွယ်ပါတယ်။
- Dart package ecosystem နဲ့ Kotlin multiplatform library ecosystem ကိုမရောပါ။
- Shared business logic idea က Flutter architecture ထဲက repository/use-case layer separation နဲ့ချိတ်နိုင်ပါတယ်။

## Practice

1. Flutter app ထဲက shared logic ဖြစ်နိုင်တဲ့ layer 3 ခုရေးပါ။
2. `expect fun platformName(): String` အတွက် Android/iOS actual implementation idea ရေးပါ။
3. Generics သုံးပြီး `ApiResult<T>` sealed class ရေးပါ။

## Q&A Checkpoint

- Flutter နဲ့ Kotlin Multiplatform ကိုအတူသုံးသင့်တဲ့ case ရှိလား?
- KMP က Flutter ကိုအစားထိုးတာလား?
- Kotlin/Native memory/concurrency model ကိုယနေ့ version အရဘယ်လိုသိထားသင့်လဲ?

## Exam

### Multiple Choice

1. KMP ရဲ့ main idea ကဘာလဲ?
   - A. Shared Kotlin code across targets
   - B. CSS framework
   - C. Flutter widget renderer
   - D. Database only
2. Platform-specific implementation ပေးဖို့ concept ကဘာလဲ?
   - A. `expect` / `actual`
   - B. `if` / `else`
   - C. `map` / `filter`
   - D. `try` / `catch`
3. Kotlin/JS ကဘာအတွက်လဲ?
   - A. Kotlin code targeting JavaScript
   - B. Android XML only
   - C. SQL migration
   - D. Image compression only

### Fill In The Blank

1. Common declaration အတွက် `____` keyword ကိုသုံးသည်။
2. Platform implementation အတွက် `____` keyword ကိုသုံးသည်။
3. Type parameter သုံးသော class ဥပမာမှာ `ApiResult<____>` ဖြစ်နိုင်သည်။

### Coding Exam

Create a generic sealed class:

```kotlin
sealed class ApiResult<out T>
```

It must support:

- `Loading`
- `Success<T>(data: T)`
- `Error(message: String)`

Then write `fun <T> ApiResult<T>.isFinished(): Boolean`.
