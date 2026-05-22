# Course 14 - Collections Overview and Construction

## Goal

စာအုပ်ထဲက `Kotlin Collections Overview, Constructing Collections` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

Kotlin Collections Overview, Constructing Collections

## Lessons

### 1. Read-only vs mutable collection interfaces

ဒီ lesson မှာ `Read-only vs mutable collection interfaces` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 2. Lists, sets, and maps

ဒီ lesson မှာ `Lists, sets, and maps` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 3. Constructing collections with factory functions

ဒီ lesson မှာ `Constructing collections with factory functions` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

### 4. Choosing collection types for app data

ဒီ lesson မှာ `Choosing collection types for app data` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။

## Flutter Bridge

Kotlin makes mutability more explicit than many Dart list workflows, which helps when modeling app state.

## Practice

1. Create read-only and mutable product lists.
2. Create one small Kotlin example and explain it with a Dart/Flutter analogy.
3. Write one mistake you should avoid in production code.

## Q&A Checkpoint

- `Collections Overview and Construction` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?
- ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?
- Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?

## Exam

### Multiple Choice

1. A mutable list can be created with:
   - A. mutableListOf
   - B. listOnly
   - C. constList
   - D. arrayMap
2. A set is useful when values should be:
   - A. unique
   - B. always duplicated
   - C. nullable only
   - D. sorted by UI

### Fill In The Blank

1. A read-only list factory is ____.
2. A map stores key-____ pairs.

### Coding Exam

Create `fun uniqueTags(tags: List<String>): Set<String>`.
