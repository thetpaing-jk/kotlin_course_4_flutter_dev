# Course 05 - Collections, Sequences, and Data Processing

## Goal

Kotlin collection hierarchy, list/set/map operations, transformations, filtering, grouping, aggregates, sequences ကို Flutter app data shaping နဲ့ချိတ်မယ်။

## Lessons

### 1. Collection types

Kotlin collection interface တွေမှာ read-only view နဲ့ mutable view ခွဲထားပါတယ်။

```kotlin
val names: List<String> = listOf("Aung", "Hla")
val mutableNames: MutableList<String> = mutableListOf("Aung")
mutableNames.add("Hla")
```

### 2. Transformations

```kotlin
val products = listOf("Phone", "Cable")
val labels = products.map { it.uppercase() }
```

### 3. Filtering

```kotlin
val expensive = prices.filter { it > 1000 }
```

### 4. Grouping and aggregates

```kotlin
data class Order(val category: String, val amount: Int)

val totals = orders
    .groupBy { it.category }
    .mapValues { entry -> entry.value.sumOf { it.amount } }
```

### 5. Sequences

Sequences are lazy. Large chained operations တွေမှာ intermediate lists မတည်ဆောက်ချင်ရင်သုံးနိုင်ပါတယ်။

```kotlin
val result = (1..1_000_000)
    .asSequence()
    .filter { it % 2 == 0 }
    .map { it * 2 }
    .take(5)
    .toList()
```

## Flutter Bridge

- Dart `map`, `where`, `fold` and Kotlin `map`, `filter`, `fold` are close.
- Kotlin distinguishes `List` and `MutableList`; Dart commonly relies on `List` mutability and conventions.
- Flutter UI list transformation maps well to Kotlin `map` and `filter`.

## Practice

1. Product list ကို price > 1000 filter လုပ်ပါ။
2. Category အလိုက် total price group လုပ်ပါ။
3. Large range ကို sequence နဲ့ first 10 matching values ပြန်ပါ။

## Q&A Checkpoint

- Kotlin `List` က immutable list လား read-only view လား?
- `Sequence` ကိုဘယ်အချိန်မှာသုံးသင့်လဲ?
- Dart `Iterable` lazy behavior နဲ့ Kotlin `Sequence` ဘယ်လိုယှဥ်မလဲ?

## Exam

### Multiple Choice

1. Mutable collection ထဲ item ထည့်ချင်ရင်ဘယ် type သင့်လဲ?
   - A. `List`
   - B. `MutableList`
   - C. `String`
   - D. `Range`
2. Collection item တွေကို shape ပြောင်းဖို့ဘယ် operator သုံးလဲ?
   - A. `map`
   - B. `package`
   - C. `open`
   - D. `lateinit`
3. Lazy chained operations အတွက်ဘာသုံးနိုင်လဲ?
   - A. `Sequence`
   - B. `data object`
   - C. `annotation`
   - D. `constructor`

### Fill In The Blank

1. `listOf(...)` သည် `____` collection view ကိုပြန်သည်။
2. `mutableListOf(...)` သည် `____` collection ကိုပြန်သည်။
3. Category အလိုက်စုရန် `____` ကိုအသုံးများသည်။

### Coding Exam

Given:

```kotlin
data class Product(val name: String, val category: String, val price: Int)
```

Write `fun totalByCategory(products: List<Product>): Map<String, Int>` that returns total price for each category.
