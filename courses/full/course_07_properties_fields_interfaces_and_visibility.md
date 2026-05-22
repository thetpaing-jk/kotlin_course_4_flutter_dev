# Course 07 - Properties, Fields, Interfaces, and Visibility

## Goal

စာအုပ်ထဲက `Properties and Fields, Interfaces, Visibility Modifiers` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Properties and Fields, Interfaces, Visibility Modifiers

## Lessons

### 1. Property getters, setters, backing fields, and backing properties

ဒီ lesson မှာ `Property getters, setters, backing fields, and backing properties` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. `lateinit`, `const`, and computed properties

ဒီ lesson မှာ ``lateinit`, `const`, and computed properties` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Interfaces with abstract and default members

ဒီ lesson မှာ `Interfaces with abstract and default members` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. `public`, `internal`, `protected`, and `private`

ဒီ lesson မှာ ``public`, `internal`, `protected`, and `private`` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Visibility control is useful when exposing only a clean API from Android native helpers to Flutter plugin code.

## Practice

1. Create a `Cart` with private setter for `itemCount`.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Properties, Fields, Interfaces, and Visibility` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. A property setter can be made private to:
   - A. control mutation
   - B. delete the property
   - C. make it JavaScript
   - D. disable imports
2. An interface is best for:
   - A. a shared contract
   - B. a package name
   - C. a loop range
   - D. a string template

### Fill In The Blank

1. Module-level visibility uses the keyword ____.
2. A non-null var initialized later can use ____.

### Coding Exam

Write an interface `Trackable` and a class `DownloadTask` implementing it with a read-only public progress value.
