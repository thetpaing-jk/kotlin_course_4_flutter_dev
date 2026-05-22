# Q&A Playbook

Course တစ်ခုပြီးတိုင်း မေးခွန်းမေးတဲ့အခါ ဒီ format သုံးပါ။

```text
Course: 03 - Classes, Objects, and Properties
Question:
Flutter/Dart နဲ့ယှဥ်ပြီး Kotlin data class နဲ့ sealed class ကို ဘယ်အချိန်မှာသုံးသင့်လဲ?
Context:
ကျွန်တော် Flutter မှာ state model တွေခွဲရေးဖူးတယ်။
```

## Answering Workflow

1. မေးခွန်းရဲ့ scope ကိုခွဲမယ်: syntax, concept, Android usage, modern Kotlin update, Flutter comparison။
2. Current official docs ကိုစစ်မယ်: Kotlin docs, Android docs, kotlinx docs, Gradle docs လို primary sources ကိုဦးစားပေးမယ်။
3. PDF-era note ရှိရင်ခွဲပြောမယ်: "စာအုပ်ထဲက version အရ..." နဲ့ "ယနေ့သုံးသင့်တာ..." ကိုမရောပါ။
4. Flutter/Dart mental model နဲ့ချိတ်မယ်။
5. Short code example တစ်ခု၊ common mistake တစ်ခု၊ mini practice တစ်ခုနဲ့ပိတ်မယ်။

## Good Q&A Prompts

- `Dart final နဲ့ Kotlin val ဘာကွာလဲ?`
- `Flutter setState/BLoC state တွေကို Kotlin sealed class နဲ့ဘယ်လို model လုပ်မလဲ?`
- `Dart Future.wait နဲ့ Kotlin async/await ဘယ်လိုယှဥ်ရမလဲ?`
- `Kotlin nullable type ကို Android API response model မှာဘယ်လို design လုပ်သင့်လဲ?`
- `Kotlin collection operators တွေက Dart Iterable methods နဲ့ဘာတွေတူ/ကွာလဲ?`

## Research Answer Template

````markdown
## Short Answer

...

## Flutter Mental Model

...

## Kotlin Example

```kotlin
...
```

## Common Mistake

...

## Practice

...

## Sources

- ...
````
