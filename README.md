# Kotlin for Flutter Developers

ဒီ workspace က `Kotlin Language Documentation` PDF ကို အခြေခံပြီး Flutter developer အတွက် ပြန်စီထားတဲ့ Kotlin learning course package ဖြစ်ပါတယ်။ စာအုပ်ထဲက structure ကိုယူထားပေမဲ့ အကြောင်းအရာကို verbatim မကူးဘဲ သင်ခန်းစာ၊ practice, Q&A checkpoint, exam format အဖြစ် ပြန်တည်ဆောက်ထားပါတယ်။

## ဘယ်လိုသုံးမလဲ

1. `courses/` ထဲက course ကိုအစဥ်လိုက်ဖတ်ပါ။
2. Course တစ်ခုပြီးတိုင်း `Q&A checkpoint` အောက်က prompt နဲ့ မေးခွန်းမေးပါ။ မေးခွန်းကို Kotlin official docs / Android docs / current ecosystem အတိုင်း research ပြီးဖြေပေးနိုင်အောင် `qa/qna_playbook.md` ထဲမှာ workflow ထည့်ထားပါတယ်။
3. ပြီးရင် course file ထဲက exam ကိုဖြေပါ။
4. MCQ / fill-in-the-blank answer key နဲ့ coding rubric ကို `exams/exam_bank.md` မှာကြည့်ပါ။

## Course Order

Full book coverage version ကို [courses/full](courses/full) ထဲမှာ 31 courses အဖြစ်ခွဲထားပါတယ်။ Full mapping ကို [references/full_coverage_map.md](references/full_coverage_map.md) မှာကြည့်နိုင်ပါတယ်။

ယခင် 8-course compressed roadmap ကိုလည်း [courses](courses) ထဲမှာ reference အဖြစ်ထားထားပါတယ်။

## Web App

ဒီ course package ကို static web app အဖြစ်လည်းပြောင်းထားပါတယ်။

- Entry file: [index.html](index.html)
- App logic: [app.js](app.js)
- Styles: [styles.css](styles.css)

Web app မှာ course reading, lesson progress, exam form, score saving, Q&A prompt drafting ပါပါတယ်။ Progress data ကို browser `localStorage` ထဲမှာသိမ်းထားပါတယ်။
Night mode toggle လည်းပါပြီး theme preference ကို browser `localStorage` ထဲမှာသိမ်းထားပါတယ်။
အခု web app က `courses/full/manifest.json` ကိုဖတ်ပြီး 31-course full coverage version ကိုပြပါတယ်။

## Flutter Developer Lens

Kotlin ကို Dart/Flutter နဲ့ယှဥ်ကြည့်ရင် အဓိကအားဖြင့်:

- `val` / `var` ကို Dart ရဲ့ `final` / mutable variable mental model နဲ့ချိတ်နိုင်ပါတယ်။
- Null safety က Dart null safety နဲ့ concept ဆင်တူပေမဲ့ platform types, Java interop ကြောင့် Kotlin မှာ သတိထားစရာပိုရှိပါတယ်။
- `data class` က Flutter app ထဲက model class / immutable state object တွေနဲ့အနီးဆုံးပါ။
- `sealed class` က UI state modeling မှာ `loading/success/error` state တွေကို type-safe လုပ်ဖို့ကောင်းပါတယ်။
- Coroutines က Dart `Future`, `Stream`, `async/await` နဲ့ဆင်တူတဲ့ async mental model ရှိပေမဲ့ structured concurrency နဲ့ dispatcher concept ပါလာပါတယ်။

## Source Map

စာအုပ် structure နဲ့ current docs reference map ကို [references/source_map.md](references/source_map.md) မှာထားထားပါတယ်။
