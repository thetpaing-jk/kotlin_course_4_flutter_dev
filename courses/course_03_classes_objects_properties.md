# Course 03 - Classes, Objects, and Properties

## Goal

Kotlin class design, constructor, property, inheritance, interface, data class, sealed class, object declaration ကို Flutter state/model design နဲ့ချိတ်မယ်။

## Lessons

### 1. Classes and constructors

```kotlin
class User(val id: String, var displayName: String)
```

Primary constructor ကို class header ထဲမှာရေးနိုင်ပါတယ်။ `val` / `var` ပါရင် constructor parameter က property ဖြစ်သွားပါတယ်။

### 2. Properties

Kotlin property တွေက field + getter/setter abstraction ဖြစ်ပါတယ်။

```kotlin
class Cart {
    var itemCount: Int = 0
        private set

    fun addItem() {
        itemCount += 1
    }
}
```

### 3. Data classes

`data class` က value-like model class အတွက်ကောင်းပါတယ်။ `equals`, `hashCode`, `toString`, `copy` စတဲ့ behavior တွေ auto-generate ဖြစ်ပါတယ်။

```kotlin
data class Product(val id: String, val name: String, val price: Int)
```

Flutter lens: Dart မှာ Freezed/equatable/model class ရေးတဲ့ use case နဲ့ဆင်တူပါတယ်။

### 4. Sealed classes

Finite state modeling အတွက် `sealed` ကိုသုံးပါတယ်။

```kotlin
sealed class UiState {
    data object Loading : UiState()
    data class Success(val products: List<Product>) : UiState()
    data class Error(val message: String) : UiState()
}
```

### 5. Interfaces and inheritance

Kotlin classes are final by default. Inherit လုပ်ချင်ရင် `open` လိုပါတယ်။

```kotlin
interface Repository {
    fun refresh()
}

open class BaseRepository
```

## Flutter Bridge

- Flutter BLoC state: `Loading`, `Loaded`, `Failure`
- Kotlin sealed class: compile-time exhaustive state handling
- Dart model `copyWith`: Kotlin `data class.copy(...)`

## Practice

1. `data class UserProfile` ရေးပါ။
2. `sealed class AuthState` ကို `LoggedOut`, `Loading`, `LoggedIn(userId)` state တွေနဲ့ရေးပါ။
3. `when` နဲ့ `AuthState` ကို handle လုပ်ပါ။

## Q&A Checkpoint

- Kotlin `data class` နဲ့ Dart `class + copyWith` ကိုဘယ်လိုယှဥ်မလဲ?
- `sealed class` က enum ထက်ဘာပိုကောင်းလဲ?
- Kotlin class final by default ဖြစ်တာ architecture အတွက်ဘာအကျိုးရှိလဲ?

## Exam

### Multiple Choice

1. `data class` က auto-generate လုပ်ပေးတဲ့ feature မဟုတ်တာဘယ်ဟာလဲ?
   - A. `toString`
   - B. `copy`
   - C. `equals`
   - D. Network request
2. Kotlin class ကို inherit လုပ်နိုင်အောင်ဘာ keyword လိုလဲ?
   - A. `extend`
   - B. `open`
   - C. `base`
   - D. `public`
3. Finite UI states တွေ model လုပ်ဖို့အကောင်းဆုံးကဘာလဲ?
   - A. `sealed class`
   - B. `while`
   - C. `import`
   - D. `package`

### Fill In The Blank

1. `data class User(val id: String)` မှာ `id` သည် constructor parameter ဖြစ်သလို `____` လည်းဖြစ်သည်။
2. Kotlin class များသည် default အားဖြင့် `____` ဖြစ်သည်။
3. Single shared instance အတွက် `____` declaration ကိုသုံးနိုင်သည်။

### Coding Exam

Create:

1. `data class Todo(val id: String, val title: String, val done: Boolean)`
2. `sealed class TodoEvent` with `Add(title)`, `Toggle(id)`, and `ClearCompleted`
3. A function `describe(event: TodoEvent): String` using `when`.
