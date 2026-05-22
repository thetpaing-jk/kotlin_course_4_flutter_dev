# Course 08 - Extensions, Data Classes, and Sealed Classes

## Goal

စာအုပ်ထဲက `Extensions, Data Classes, Sealed Classes` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Extensions, Data Classes, Sealed Classes

## Lessons

### 1. Extension functions and extension properties

ဒီ lesson မှာ `Extension functions and extension properties` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. Data class generated behavior: equality, copy, destructuring

ဒီ lesson မှာ `Data class generated behavior: equality, copy, destructuring` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Sealed classes and sealed interfaces for finite state models

ဒီ lesson မှာ `Sealed classes and sealed interfaces for finite state models` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Using exhaustive `when` for UI/API states

ဒီ lesson မှာ `Using exhaustive `when` for UI/API states` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

This is the Kotlin version of clean app state modeling: `data class` for values, `sealed class` for Loading/Success/Error.

## Practice

1. Model `AuthState` as a sealed class.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Extensions, Data Classes, and Sealed Classes` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. Value-style models are commonly represented with:
   - A. data class
   - B. while class
   - C. package class
   - D. jump class
2. Finite UI states are often modeled with:
   - A. sealed class
   - B. raw string
   - C. array index only
   - D. import alias only

### Fill In The Blank

1. Create a copy of a data class with the generated ____ function.
2. An extension function starts with `fun Type.____`.

### Coding Exam

Create `sealed class UiState` with Loading, Success(data), and Error(message), then describe it with `when`.
