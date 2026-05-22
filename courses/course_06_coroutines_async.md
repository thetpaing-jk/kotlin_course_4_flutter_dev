# Course 06 - Coroutines and Async Thinking

## Goal

Flutter `Future`, `Stream`, `async/await` သိပြီးသားသူအတွက် Kotlin coroutines, suspending functions, `launch`, `async`, dispatcher, cancellation, Flow basics ကိုနားလည်စေမယ်။

## Lessons

### 1. Suspending functions

`suspend` function က coroutine ထဲမှာ suspend/resume လုပ်နိုင်တဲ့ asynchronous function ဖြစ်ပါတယ်။

```kotlin
suspend fun fetchUserName(): String {
    return "Aung"
}
```

Flutter lens: Dart `Future<String>` returning async function နဲ့ဆင်တူပေမဲ့ Kotlin suspend function က return type ကို `String` အဖြစ်ထားတတ်ပါတယ်။

### 2. Coroutine builders

`launch` က fire-and-forget job, `async` က result ပြန်ယူဖို့ `Deferred` ပေးပါတယ်။

```kotlin
val job = scope.launch {
    refresh()
}

val deferred = scope.async {
    loadProducts()
}
val products = deferred.await()
```

### 3. Structured concurrency

Coroutine တွေကို scope အောက်မှာစီမံတာကြောင့် parent cancelled ဖြစ်ရင် children လည်း cancelled ဖြစ်နိုင်ပါတယ်။ Android မှာ lifecycle-aware scopes တွေကိုသုံးရတာအရေးကြီးပါတယ်။

### 4. Dispatchers

CPU work, IO work, Main thread UI update စတဲ့ context ခွဲဖို့ dispatcher concept ပါပါတယ်။

```kotlin
withContext(Dispatchers.IO) {
    repository.load()
}
```

### 5. Flow

Flow က asynchronous stream of values အတွက်သုံးပါတယ်။ Flutter `Stream` mental model နဲ့နီးပါတယ်။

```kotlin
fun observeCartCount(): Flow<Int> = flow {
    emit(1)
    emit(2)
}
```

## Flutter Bridge

- Dart `Future` -> Kotlin `suspend fun` / `Deferred`
- Dart `Stream` -> Kotlin `Flow`
- Flutter widget lifecycle cancel risk -> Android lifecycle-aware coroutine scope
- Dart isolate is not the same as coroutine dispatcher; coroutines are lightweight concurrency, not automatic parallel CPU isolation.

## Practice

1. `suspend fun fakeNetworkCall(): String` ရေးပါ။
2. `async` နှစ်ခု parallel run ပြီး result combine လုပ်ပါ။
3. Flow တစ်ခုက progress 0, 50, 100 emit လုပ်ပါ။

## Q&A Checkpoint

- Dart `Future.wait` နဲ့ Kotlin `async/await` ဘယ်လိုယှဥ်မလဲ?
- Coroutine cancellation ကို network request မှာဘယ်လို handle လုပ်သင့်လဲ?
- Android `viewModelScope` ကို Flutter lifecycle နဲ့ဘယ်လိုချိတ်နားလည်မလဲ?

## Exam

### Multiple Choice

1. Coroutine result ကိုနောက်မှ `await()` နဲ့ယူဖို့ဘာသုံးလဲ?
   - A. `async`
   - B. `package`
   - C. `sealed`
   - D. `import`
2. Asynchronous stream of values အတွက်ဘာသုံးလဲ?
   - A. `Flow`
   - B. `String`
   - C. `Int`
   - D. `object`
3. Blocking IO work ကို main thread မှာမလုပ်ဘဲထားဖို့ဘာသုံးနိုင်လဲ?
   - A. `Dispatchers.IO`
   - B. `Dispatchers.None`
   - C. `package.io`
   - D. `lateinit`

### Fill In The Blank

1. Suspendable function ကို `____ fun` နဲ့ကြေညာသည်။
2. `launch` က `____` style coroutine အတွက်သုံးသည်။
3. Flow ထဲ value ထုတ်ရန် `____` function ကိုအသုံးများသည်။

### Coding Exam

Write a suspend function `loadDashboard()` that concurrently loads:

- `loadUser(): User`
- `loadNotifications(): List<Notification>`

Return `Dashboard(user, notifications)`. Use `coroutineScope` and `async`.
