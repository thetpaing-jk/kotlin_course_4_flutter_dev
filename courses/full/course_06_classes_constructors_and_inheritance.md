# Course 06 - Classes, Constructors, and Inheritance

## Goal

စာအုပ်ထဲက `Classes and Objects, Classes and Inheritance` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Classes and Objects, Classes and Inheritance

## Lessons

### 1. Primary and secondary constructors

ဒီ lesson မှာ `Primary and secondary constructors` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. Properties in constructor parameters

ဒီ lesson မှာ `Properties in constructor parameters` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Classes are final by default

ဒီ lesson မှာ `Classes are final by default` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. `open`, overriding, abstract classes, and inheritance tradeoffs

ဒီ lesson မှာ ``open`, overriding, abstract classes, and inheritance tradeoffs` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Model classes in Flutter often become Kotlin classes or data classes when implementing Android-side SDK integrations.

## Practice

1. Create a `User` class with immutable `id` and mutable `displayName`.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Classes, Constructors, and Inheritance` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. Kotlin classes are default:
   - A. final
   - B. open
   - C. abstract
   - D. dynamic
2. To allow inheritance, a class can be marked:
   - A. open
   - B. extendable
   - C. baseOnly
   - D. inherit

### Fill In The Blank

1. Constructor parameters become properties when marked with `val` or ____.
2. Override a member with the keyword ____.

### Coding Exam

Create an `open class Repository` and a subclass `CachedRepository` that overrides `refresh()`.
