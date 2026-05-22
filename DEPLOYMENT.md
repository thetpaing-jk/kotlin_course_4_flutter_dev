# Deploy To Vercel

ဒီ project က framework မသုံးထားတဲ့ static web app ဖြစ်ပါတယ်။ Vercel မှာ deploy လုပ်တဲ့အခါ build step မလိုပါ။

## Dashboard Deploy

1. Push this folder to GitHub.
2. Vercel dashboard ထဲက **Add New Project** ကိုနှိပ်ပါ။
3. Repository ကို import လုပ်ပါ။
4. Project settings:
   - Framework Preset: `Other`
   - Root Directory: repo root က `kotlin_course` မဟုတ်ဘဲ parent folder ဖြစ်နေရင် `kotlin_course` ကိုရွေးပါ။
   - Build Command: blank ထားပါ။
   - Output Directory: `.` ထားပါ။
   - Install Command: blank ထားပါ။
5. Deploy ကိုနှိပ်ပါ။

## CLI Deploy

Vercel CLI သုံးမယ်ဆိုရင်:

```powershell
cd "D:\Free PJ\course_generation\kotlin_course"
npx vercel
```

Production deploy:

```powershell
npx vercel --prod
```

## Important

ဒီ repo က pure static site ဖြစ်လို့ Python/Node build မလိုပါ။ Vercel က Python project အဖြစ်မှား detect မလုပ်အောင်:

- `vercel.json` ထဲမှာ `buildCommand`, `installCommand` ကို blank ထားထားပါတယ်။
- `outputDirectory` ကို `.` ထားထားပါတယ်။
- Deploy အတွက်မလိုတဲ့ Python generation script ကို repo ထဲကဖယ်ထားပါတယ်။
- `.vercelignore` ထဲမှာ Python-related files တွေကို exclude ထားပါတယ်။

## What Vercel Serves

- `index.html` - app entry
- `styles.css` - UI and dark mode
- `app.js` - course loading, progress, exam scoring
- `api/config.js` - exposes public Supabase browser config from Vercel env vars
- `courses/flutter_devs/*.md` - 10-module Kotlin course generated from `D:\kotlin\kotlin-for-flutter-devs.md`
- `courses/full/manifest.json` - course file list
- `exams/full_answer_key.json` - exam answer key

The app stores theme preference in browser `localStorage`. Guest progress stays in `localStorage`; signed-in progress syncs to Supabase.

## Supabase Setup

1. Create a Supabase project.
2. Enable the Google provider in Supabase Auth settings.
3. Set Supabase Site URL to your Vercel production URL and add redirect URLs for that domain.
4. In Google Cloud Console, add the Vercel origin and the Supabase callback URL (`https://<project-ref>.supabase.co/auth/v1/callback`).
5. Run [supabase_learner_progress.sql](supabase_learner_progress.sql) in the Supabase SQL editor.
6. Add Vercel environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

Never expose a Supabase service role key in this project.
