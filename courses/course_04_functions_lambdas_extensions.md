# Course 04 - Functions, Lambdas, Extensions, and Scope Functions

## Goal

Kotlin function style, higher-order functions, lambdas, extension functions, inline thinking, scope functions ကို Flutter developer အတွက် readable code pattern အဖြစ်နားလည်မယ်။

## Lessons

### 1. Default and named arguments

```kotlin
fun createButton(label: String, enabled: Boolean = true) {
    println("$label: $enabled")
}

createButton(label = "Save")
```

Flutter lens: Flutter widget constructor named parameters နဲ့ mental model ဆင်တူပါတယ်။

### 2. Lambdas and higher-order functions

```kotlin
fun retry(times: Int, block: () -> Unit) {
    repeat(times) { block() }
}
```

### 3. Extension functions

Existing type ကို subclass မလုပ်ဘဲ function ထပ်ဖြည့်သလိုရေးနိုင်ပါတယ်။

```kotlin
fun String.toSlug(): String =
    lowercase().trim().replace(" ", "-")
```

### 4. Scope functions

`let`, `run`, `with`, `apply`, `also` တို့က object context ကို compact လုပ်ပေးပါတယ်။

```kotlin
val profile = UserProfile(id = "1", name = "Aung").also {
    println("Created ${it.id}")
}
```

Rule of thumb:

- `let`: transform or nullable block
- `apply`: configure object and return object
- `also`: side effect and return object
- `run`: compute result with receiver

### 5. Type-safe builder thinking

Kotlin DSL တွေက nested builder pattern ကို readable လုပ်နိုင်ပါတယ်။ Flutter widget tree ဖတ်တဲ့သူအတွက် DSL shape ကိုနားလည်ရတာမြန်တတ်ပါတယ်။

## Flutter Bridge

- Dart extension methods and Kotlin extension functions are conceptually close.
- Flutter builder callbacks map well to Kotlin lambdas.
- Overusing scope functions can reduce readability, similar to deeply nested widget builders.

## Practice

1. `fun Int.isEven(): Boolean` extension ရေးပါ။
2. `List<Product>.totalPrice()` extension ရေးပါ။
3. Nullable `String?` ကို `let` နဲ့ safe transform လုပ်ပါ။

## Q&A Checkpoint

- Kotlin `let` ကို null check အတွက်ဘယ်လိုသုံးသင့်လဲ?
- Extension function က real member function ဖြစ်သွားတာလား?
- Dart extension method နဲ့ Kotlin extension function dispatch ကွာခြားချက်ရှိလား?

## Exam

### Multiple Choice

1. Object ကို configure လုပ်ပြီး object ကိုပြန်ချင်ရင် scope function ဘယ်ဟာသင့်လဲ?
   - A. `apply`
   - B. `println`
   - C. `package`
   - D. `throw`
2. Function ကို parameter အဖြစ်လက်ခံတဲ့ function ကိုဘာခေါ်လဲ?
   - A. Higher-order function
   - B. Package function
   - C. Static field
   - D. Constructor only
3. Extension function declaration မှန်တာဘယ်ဟာလဲ?
   - A. `extend String fun slug()`
   - B. `fun String.slug(): String`
   - C. `String::slug fun`
   - D. `extension String on slug`

### Fill In The Blank

1. Lambda type with no parameter and no return value is `____`.
2. Nullable object ကို non-null block ထဲသုံးရန် `?.____ { }` ကိုအသုံးများသည်။
3. Object ကို side effect လုပ်ပြီး original object ပြန်ချင်ရင် `____` ကိုသုံးနိုင်သည်။

### Coding Exam

Create an extension function:

```kotlin
fun List<Int>.sumEven(): Int
```

It should return the sum of even numbers only. Then write a small `main()` that prints the result for `[1, 2, 3, 4, 5, 6]`.
