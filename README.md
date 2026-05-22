# Kotlin for Flutter Developers

This workspace is now driven by `D:\kotlin\kotlin-for-flutter-devs.md` as the course source. The web app loads 10 modules for Flutter developers learning Kotlin, with lesson tracking, Q&A prompts, and exams.

## How To Use

1. Open the web app and read the courses in order.
2. Sign in before tracking progress, answering exams, or saving Q&A drafts.
3. Use each course's Q&A checkpoint to ask research questions after finishing the lesson.
4. Take the course exam. MCQ and fill-in-the-blank answers are auto-checked; coding answers are saved with a rubric.

## Course Order

The active course set is generated from `D:\kotlin\kotlin-for-flutter-devs.md`:

1. Variables and Basic Types
2. Functions
3. Control Flow
4. Classes and Inheritance
5. Data Classes
6. Null Safety
7. Collections
8. Higher-Order Functions and Lambdas
9. Scope Functions
10. Coroutines

## Web App

ဒီ course package ကို static web app အဖြစ်လည်းပြောင်းထားပါတယ်။

- Entry file: [index.html](index.html)
- App logic: [app.js](app.js)
- Styles: [styles.css](styles.css)

Web app မှာ course reading, lesson progress, exam form, score saving, Q&A prompt drafting ပါပါတယ်။ Guest progress ကို browser `localStorage` ထဲမှာသိမ်းထားပါတယ်။
Night mode toggle လည်းပါပြီး theme preference ကို browser `localStorage` ထဲမှာသိမ်းထားပါတယ်။
The web app reads `courses/full/manifest.json`, which now points to the 10 generated files in `courses/flutter_devs/`.

Sign in / cloud sync လည်းပါပါတယ်။ Account မဝင်သေးရင် course content ကို preview ဖတ်နိုင်ပေမဲ့ progress, exams, Q&A draft တွေကို lock ထားပါတယ်။ Supabase config ထည့်ထားတဲ့ production မှာ Google OAuth နဲ့ login ဝင်ရင် progress ကို user တစ်ယောက်ချင်း cloud sync လုပ်ပါတယ်။

## Vercel Deployment

Vercel မှာ static site အဖြစ်တင်နိုင်အောင် [vercel.json](vercel.json), [.vercelignore](.vercelignore), [404.html](404.html), [DEPLOYMENT.md](DEPLOYMENT.md) ထည့်ထားပါတယ်။

Deploy settings:

- Framework Preset: `Other`
- Build Command: blank
- Install Command: blank
- Output Directory: `.`
- Root Directory: repo root မဟုတ်ဘဲ parent folder ကနေ import လုပ်ရင် `kotlin_course`

Cloud sync setup:

- Run [supabase_learner_progress.sql](supabase_learner_progress.sql) in Supabase.
- Add Vercel env vars: `SUPABASE_URL`, `SUPABASE_ANON_KEY`.
- Add Supabase redirect URLs for production and enable the Google provider.

## Flutter Developer Lens

Kotlin ကို Dart/Flutter နဲ့ယှဥ်ကြည့်ရင် အဓိကအားဖြင့်:

- `val` / `var` ကို Dart ရဲ့ `final` / mutable variable mental model နဲ့ချိတ်နိုင်ပါတယ်။
- Null safety က Dart null safety နဲ့ concept ဆင်တူပေမဲ့ platform types, Java interop ကြောင့် Kotlin မှာ သတိထားစရာပိုရှိပါတယ်။
- `data class` က Flutter app ထဲက model class / immutable state object တွေနဲ့အနီးဆုံးပါ။
- `sealed class` က UI state modeling မှာ `loading/success/error` state တွေကို type-safe လုပ်ဖို့ကောင်းပါတယ်။
- Coroutines က Dart `Future`, `Stream`, `async/await` နဲ့ဆင်တူတဲ့ async mental model ရှိပေမဲ့ structured concurrency နဲ့ dispatcher concept ပါလာပါတယ်။

## Source Map

စာအုပ် structure နဲ့ current docs reference map ကို [references/source_map.md](references/source_map.md) မှာထားထားပါတယ်။
