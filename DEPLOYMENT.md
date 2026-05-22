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

## What Vercel Serves

- `index.html` - app entry
- `styles.css` - UI and dark mode
- `app.js` - course loading, progress, exam scoring
- `courses/full/*.md` - 31-course curriculum
- `courses/full/manifest.json` - course file list
- `exams/full_answer_key.json` - exam answer key

The app stores progress, exam answers, Q&A drafts, and theme preference in browser `localStorage`.
