const COURSE_MANIFEST = "courses/full/manifest.json";
const ANSWER_KEY_FILE = "exams/full_answer_key.json";
const SUPABASE_CONFIG_ENDPOINT = "/api/config";

const FALLBACK_ANSWER_KEY = {
  0: {
    mcq: ["B", "B", "B"],
    fill: ["var", "main", "Int"],
    rubric: [
      "Function name and parameters match the prompt.",
      "Explicit return type is String.",
      "Uses string templates.",
      "Output format includes completed/total progress.",
    ],
  },
  1: {
    mcq: ["B", "A", "B"],
    fill: ["?.", "!!", ".."],
    rubric: [
      "Returns fallback when firstName is null.",
      "Treats blank firstName as fallback.",
      "Does not use unsafe !!.",
    ],
  },
  2: {
    mcq: ["D", "B", "A"],
    fill: ["property", "final", "object"],
    rubric: [
      "Todo is a data class.",
      "TodoEvent is sealed.",
      "All required events carry the correct data.",
      "describe handles all event types with when.",
    ],
  },
  3: {
    mcq: ["A", "A", "B"],
    fill: ["() -> Unit", "let", "also"],
    rubric: [
      "Implements List<Int>.sumEven().",
      "Filters even numbers correctly.",
      "Sums only filtered values.",
      "Demonstrates output from main().",
    ],
  },
  4: {
    mcq: ["B", "A", "A"],
    fill: ["read-only", "mutable", "groupBy"],
    rubric: [
      "Groups by category.",
      "Sums price for each category.",
      "Returns Map<String, Int>.",
      "Handles empty list.",
    ],
  },
  5: {
    mcq: ["A", "A", "A"],
    fill: ["suspend", "fire-and-forget", "emit"],
    rubric: [
      "Uses coroutineScope.",
      "Starts both loads with async.",
      "Awaits both results.",
      "Returns Dashboard(user, notifications).",
    ],
  },
  6: {
    mcq: ["A", "A", "A"],
    fill: [["call", "import", "use"], "Gradle", "MethodChannel"],
    rubric: [
      "Reads args[\"userId\"].",
      "Checks runtime type is String.",
      "Rejects blank strings.",
      "Returns String?.",
    ],
  },
  7: {
    mcq: ["A", "A", "A"],
    fill: ["expect", "actual", "T"],
    rubric: [
      "ApiResult is generic and sealed.",
      "Success carries typed data.",
      "Error carries message.",
      "isFinished returns false only for Loading.",
    ],
  },
};

const STORAGE_KEY = "kotlinCourseStudio.v1";
const THEME_KEY = "kotlinCourseStudio.theme";
const SYNC_DEBOUNCE_MS = 700;

const TEXT = {
  brandSubtitle: "For Flutter developers",
  accountTitle: "Account",
  googleSignIn: "Continue with Google",
  signOut: "Sign out",
  lessonsLabel: "Lessons",
  examLabel: "Exam",
  statusLabel: "Status",
  learnTab: "Learn",
  examTab: "Exam",
  qaTab: "Q&A",
  courseExamTitle: "Course Exam",
  courseExamDescription: "MCQ and fill-in-the-blank are auto checked. Coding answer is saved with a rubric.",
  submitExam: "Submit Exam",
  qaCheckpointTitle: "Q&A Checkpoint",
  researchPromptLabel: "Your research prompt",
  copyPrompt: "Copy Prompt",
  offlineLocalOnly: "Offline/local only",
  localOnly: "Local only",
  saved: "Saved",
  saving: "Saving...",
  syncError: "Sync error",
  loadingCloud: "Loading cloud progress...",
  redirectingToGoogle: "Redirecting to Google...",
  promptCopied: "Prompt copied.",
  signInToTrack: "Sign in to track",
  noExam: "No exam",
  courseLabel: "Course",
  signIn: "Sign in",
  notTaken: "Not taken",
  locked: "Locked",
  complete: "Complete",
  inProgress: "In progress",
  preview: "Preview",
  coursesCompleted: "{done} of {total} courses",
  signInToTrackProgress: "Sign in to track progress",
  noExamScores: "No exam scores yet",
  examAverage: "Exam average {percent}%",
  progressHidden: "Progress is hidden until sign in",
  cloudEnabled: "Cloud sync is enabled for this account.",
  signInToSync: "Sign in with Google to sync progress across devices.",
  supabaseMissing: "Supabase is not configured. Progress is saved on this browser only.",
  supabaseClientMissing: "Could not load Supabase client. Progress is saved on this browser only.",
  googleConfigureFirst: "Google sign-in is not configured yet. Add Vercel environment variables first.",
  signInRequired: "Please sign in first. Progress, exams, and Q&A are saved per account.",
  configureSignInRequired: "Please configure Google sign-in first. Progress and exams are account-only.",
  resetConfirm: "Reset current progress, exam answers, and Q&A drafts?",
  examLockedTitle: "Sign in to take exams",
  examLockedMessage: "Your exam answers and scores are saved per account.",
  qaLockedTitle: "Sign in to use Q&A",
  qaLockedMessage: "Your question drafts are saved per account after sign in.",
  multipleChoice: "Multiple Choice",
  fillBlank: "Fill In The Blank",
  codingExam: "Coding Exam",
  rubric: "Rubric",
  codingPlaceholder: "Write your Kotlin answer here",
  latestScore: "Latest score: {score}",
  codingReviewNote: "Coding answer is saved, but review it manually with the rubric.",
  qaDefaultPrompt: "Course: {course}\nQuestion:\n\nContext:\nI am a Flutter developer learning Kotlin. Please research current Kotlin/Android docs and explain with Flutter comparisons.",
  resetProgressTitle: "Reset progress",
};

const state = {
  courses: [],
  answerKey: FALLBACK_ANSWER_KEY,
  activeCourse: 0,
  activeTab: "learn",
  theme: document.documentElement.dataset.theme || "light",
  saved: loadState(),
  supabase: null,
  user: null,
  syncStatus: "offlineLocalOnly",
  authMessage: "",
  syncTimer: null,
  loadingCloud: false,
};

const els = {
  courseList: document.querySelector("#courseList"),
  courseNumber: document.querySelector("#courseNumber"),
  courseTitle: document.querySelector("#courseTitle"),
  courseContent: document.querySelector("#courseContent"),
  lessonTrack: document.querySelector("#lessonTrack"),
  lessonStat: document.querySelector("#lessonStat"),
  examStat: document.querySelector("#examStat"),
  statusStat: document.querySelector("#statusStat"),
  progressRing: document.querySelector("#progressRing"),
  progressPercent: document.querySelector("#progressPercent"),
  completedCount: document.querySelector("#completedCount"),
  examAverage: document.querySelector("#examAverage"),
  examForm: document.querySelector("#examForm"),
  scorePanel: document.querySelector("#scorePanel"),
  submitExamBtn: document.querySelector("#submitExamBtn"),
  qaQuestions: document.querySelector("#qaQuestions"),
  qaPrompt: document.querySelector("#qaPrompt"),
  copyPromptBtn: document.querySelector("#copyPromptBtn"),
  copyStatus: document.querySelector("#copyStatus"),
  resetProgressBtn: document.querySelector("#resetProgressBtn"),
  themeToggle: document.querySelector("#themeToggle"),
  themeToggleLabel: document.querySelector("#themeToggleLabel"),
  syncStatus: document.querySelector("#syncStatus"),
  loginForm: document.querySelector("#loginForm"),
  googleLoginBtn: document.querySelector("#googleLoginBtn"),
  signedInPanel: document.querySelector("#signedInPanel"),
  signedInEmail: document.querySelector("#signedInEmail"),
  signOutBtn: document.querySelector("#signOutBtn"),
  authMessage: document.querySelector("#authMessage"),
};

init();

async function init() {
  applyTheme(state.theme);
  const [courseFiles, answerKey] = await Promise.all([loadCourseFiles(), loadAnswerKey()]);
  state.answerKey = answerKey;
  const markdownFiles = await Promise.all(courseFiles.map(loadMarkdown));
  state.courses = markdownFiles.map(parseCourse);
  state.activeCourse = clamp(state.saved.activeCourse ?? 0, 0, state.courses.length - 1);
  bindEvents();
  render();
  await initSupabase();
  render();
}

async function loadMarkdown(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Unable to load ${path}`);
  }
  return {
    path,
    text: await response.text(),
  };
}

async function loadCourseFiles() {
  const response = await fetch(COURSE_MANIFEST);
  if (!response.ok) {
    return [
      "courses/course_01_orientation_basic_syntax.md",
      "courses/course_02_types_null_safety_control_flow.md",
      "courses/course_03_classes_objects_properties.md",
      "courses/course_04_functions_lambdas_extensions.md",
      "courses/course_05_collections_sequences.md",
      "courses/course_06_coroutines_async.md",
      "courses/course_07_java_android_gradle_tools.md",
      "courses/course_08_multiplatform_advanced.md",
    ];
  }
  const manifest = await response.json();
  return manifest.map((item) => item.path);
}

async function loadAnswerKey() {
  const response = await fetch(ANSWER_KEY_FILE);
  if (!response.ok) {
    return FALLBACK_ANSWER_KEY;
  }
  return response.json();
}

async function loadSupabaseConfig() {
  try {
    const response = await fetch(SUPABASE_CONFIG_ENDPOINT, { cache: "no-store" });
    if (!response.ok) return null;
    const config = await response.json();
    if (!config.supabaseUrl || !config.supabaseAnonKey) return null;
    return config;
  } catch {
    return null;
  }
}

function loadSupabaseScript() {
  if (window.supabase?.createClient) return Promise.resolve(true);

  return new Promise((resolve) => {
    const existingScript = document.querySelector("script[data-supabase-client]");
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(true), { once: true });
      existingScript.addEventListener("error", () => resolve(false), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
    script.async = true;
    script.dataset.supabaseClient = "true";
    script.addEventListener("load", () => resolve(true), { once: true });
    script.addEventListener("error", () => resolve(false), { once: true });
    document.head.appendChild(script);
  });
}

function parseCourse(file, index) {
  const lines = file.text.split(/\r?\n/);
  const title = lines.find((line) => line.startsWith("# "))?.replace("# ", "").trim() ?? `Course ${index + 1}`;
  const goal = sectionBetween(file.text, "## Goal", "## Lessons");
  const lessonSection = sectionBetween(file.text, "## Lessons", "## Flutter Bridge");
  const lessonDetails = parseLessonDetails(lessonSection);
  const lessons = lessonDetails.map((lesson) => lesson.title);
  const bridge = sectionBetween(file.text, "## Flutter Bridge", "## Practice");
  const practice = sectionBetween(file.text, "## Practice", "## Q&A Checkpoint");
  const qna = sectionBetween(file.text, "## Q&A Checkpoint", "## Exam");
  const exam = parseExam(sectionAfter(file.text, "## Exam"));

  return {
    index,
    path: file.path,
    title,
    shortTitle: title.replace(/^Course\s+\d+\s+-\s+/, ""),
    goal,
    markdown: file.text,
    lessons,
    lessonDetails,
    bridge,
    practice,
    qna,
    exam,
  };
}

function parseLessonDetails(lessonSection) {
  const matches = [...lessonSection.matchAll(/^###\s+(.+)$/gm)];
  return matches.map((match, index) => {
    const start = match.index + match[0].length;
    const end = index + 1 < matches.length ? matches[index + 1].index : lessonSection.length;
    const body = lessonSection.slice(start, end).trim();
    return {
      title: match[1].trim(),
      learn: extractBoldLine(body, "Learn"),
      flutter: extractBoldLine(body, "Flutter angle"),
      build: extractBoldLine(body, "Build"),
    };
  });
}

function extractBoldLine(text, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = text.match(new RegExp(`\\*\\*${escaped}:\\*\\*\\s*(.+)`));
  return match ? match[1].trim() : "";
}

function parseExam(examText) {
  return {
    mcq: parseMcq(sectionBetween(examText, "### Multiple Choice", "### Fill In The Blank")),
    fill: parseFill(sectionBetween(examText, "### Fill In The Blank", "### Coding Exam")),
    coding: sectionAfter(examText, "### Coding Exam").trim(),
  };
}

function parseMcq(text) {
  const questions = [];
  const blocks = text.split(/\n(?=\d+\.\s+)/).map((block) => block.trim()).filter(Boolean);
  for (const block of blocks) {
    const lines = block.split(/\r?\n/).filter(Boolean);
    const prompt = lines[0].replace(/^\d+\.\s+/, "").trim();
    const options = lines
      .slice(1)
      .map((line) => line.trim().match(/^-\s+([A-D])\.\s+(.+)$/))
      .filter(Boolean)
      .map((match) => ({ key: match[1], text: match[2] }));
    questions.push({ prompt, options });
  }
  return questions;
}

function parseFill(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^\d+\.\s+/.test(line))
    .map((line) => line.replace(/^\d+\.\s+/, ""));
}

function sectionBetween(text, startHeading, endHeading) {
  const start = text.indexOf(startHeading);
  if (start < 0) return "";
  const contentStart = start + startHeading.length;
  const end = text.indexOf(endHeading, contentStart);
  return text.slice(contentStart, end < 0 ? text.length : end).trim();
}

function sectionAfter(text, heading) {
  const start = text.indexOf(heading);
  return start < 0 ? "" : text.slice(start + heading.length);
}

function bindEvents() {
  els.courseList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-course-index]");
    if (!button) return;
    state.activeCourse = Number(button.dataset.courseIndex);
    if (isSignedIn()) {
      state.saved.activeCourse = state.activeCourse;
      saveState();
    }
    render();
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.activeTab = tab.dataset.tab;
      renderTabs();
    });
  });

  els.lessonTrack.addEventListener("change", (event) => {
    const input = event.target.closest("[data-lesson-index]");
    if (!input) return;
    if (!isSignedIn()) {
      input.checked = false;
      showSignInRequired();
      render();
      return;
    }
    const courseState = getCourseState(state.activeCourse);
    const lessonIndex = String(input.dataset.lessonIndex);
    courseState.lessons[lessonIndex] = input.checked;
    saveState();
    render();
  });

  els.submitExamBtn.addEventListener("click", gradeCurrentExam);

  els.copyPromptBtn.addEventListener("click", async () => {
    if (!isSignedIn()) {
      showSignInRequired();
      return;
    }
    await navigator.clipboard.writeText(els.qaPrompt.value);
    els.copyStatus.textContent = t("promptCopied");
    setTimeout(() => {
      els.copyStatus.textContent = "";
    }, 1800);
  });

  els.qaPrompt.addEventListener("input", () => {
    if (!isSignedIn()) {
      els.qaPrompt.value = "";
      showSignInRequired();
      return;
    }
    getCourseState(state.activeCourse).qaPrompt = els.qaPrompt.value;
    saveState();
  });

  els.resetProgressBtn.addEventListener("click", () => {
    if (!isSignedIn()) {
      showSignInRequired();
      return;
    }
    const ok = window.confirm(t("resetConfirm"));
    if (!ok) return;
    if (state.user) {
      state.saved = { activeCourse: 0, courses: {} };
    } else {
      localStorage.removeItem(STORAGE_KEY);
      state.saved = loadState();
    }
    state.activeCourse = 0;
    saveState();
    render();
  });

  els.themeToggle.addEventListener("click", () => {
    applyTheme(state.theme === "dark" ? "light" : "dark");
  });

  els.loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await signInWithGoogle();
  });

  els.signOutBtn.addEventListener("click", async () => {
    await signOut();
  });
}

function render() {
  renderCourseList();
  renderHeader();
  renderProgress();
  renderLearn();
  renderExam();
  renderQa();
  renderAccount();
  renderTabs();
}

function renderCourseList() {
  els.courseList.innerHTML = state.courses
    .map((course) => {
      const courseState = getCourseState(course.index);
      const complete = isCourseComplete(course.index);
      const lessonCount = course.lessons.length;
      const doneCount = countDoneLessons(course.index);
      const progressLabel = isSignedIn()
        ? `${doneCount}/${lessonCount} ${t("lessonsLabel").toLowerCase()} / ${courseState.examScoreText ?? t("noExam")}`
        : t("signInToTrack");
      return `
        <button class="course-button ${course.index === state.activeCourse ? "is-active" : ""} ${complete ? "is-done" : ""}" data-course-index="${course.index}" type="button">
          <span>
            <strong>${escapeHtml(course.shortTitle)}</strong>
            <span>${progressLabel}</span>
          </span>
          <span class="course-badge">${complete ? "OK" : course.index + 1}</span>
        </button>
      `;
    })
    .join("");
}

function renderHeader() {
  const course = currentCourse();
  const courseState = getCourseState(course.index);
  const lessonCount = course.lessons.length;
  const doneCount = countDoneLessons(course.index);
  els.courseNumber.textContent = `${t("courseLabel")} ${String(course.index + 1).padStart(2, "0")}`;
  els.courseTitle.textContent = course.shortTitle;
  els.lessonStat.textContent = isSignedIn() ? `${doneCount}/${lessonCount}` : t("signIn");
  els.examStat.textContent = isSignedIn() ? courseState.examScoreText ?? t("notTaken") : t("locked");
  els.statusStat.textContent = isSignedIn() ? (isCourseComplete(course.index) ? t("complete") : t("inProgress")) : t("preview");
}

function renderProgress() {
  const courseCount = state.courses.length;
  const completeCount = isSignedIn() ? state.courses.filter((course) => isCourseComplete(course.index)).length : 0;
  const percent = Math.round((completeCount / courseCount) * 100);
  const scores = isSignedIn()
    ? Object.values(state.saved.courses)
        .map((course) => course.examPercent)
        .filter((score) => Number.isFinite(score))
    : [];
  const average = scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : null;

  els.progressRing.style.background = `conic-gradient(var(--green) ${percent * 3.6}deg, var(--track) 0deg)`;
  els.progressPercent.textContent = isSignedIn() ? `${percent}%` : "--";
  els.completedCount.textContent = isSignedIn()
    ? t("coursesCompleted", { done: completeCount, total: courseCount })
    : t("signInToTrackProgress");
  els.examAverage.textContent = isSignedIn()
    ? average === null
      ? t("noExamScores")
      : t("examAverage", { percent: average })
    : t("progressHidden");
}

function renderAccount() {
  const signedIn = isSignedIn();
  els.syncStatus.textContent = t(state.syncStatus);
  els.loginForm.hidden = signedIn;
  els.googleLoginBtn.hidden = signedIn;
  els.signedInPanel.hidden = !signedIn;
  els.signOutBtn.hidden = !signedIn;
  els.signedInEmail.textContent = state.user?.email ?? "";
  els.googleLoginBtn.disabled = !state.supabase;
  const fallbackMessage = state.user
    ? t("cloudEnabled")
    : state.supabase
      ? t("signInToSync")
      : t("supabaseMissing");
  els.authMessage.textContent = state.authMessage || fallbackMessage;
}

function renderLearn() {
  const course = currentCourse();
  const courseState = getCourseState(course.index);
  els.lessonTrack.innerHTML = course.lessons
    .map((lesson, index) => {
      const checked = isSignedIn() && courseState.lessons[String(index)] ? "checked" : "";
      const disabled = isSignedIn() ? "" : "disabled";
      return `
        <label class="lesson-chip">
          <input type="checkbox" data-lesson-index="${index}" ${checked} ${disabled} />
          <span>${escapeHtml(lesson)}</span>
        </label>
      `;
    })
    .join("");
  els.courseContent.innerHTML = markdownToHtml(course.markdown.replace(/## Exam[\s\S]*$/m, ""));
}

function renderExam() {
  if (!isSignedIn()) {
    els.submitExamBtn.disabled = true;
    els.examForm.innerHTML = lockedPanelHtml(t("examLockedTitle"), t("examLockedMessage"));
    els.scorePanel.hidden = true;
    els.scorePanel.innerHTML = "";
    return;
  }

  els.submitExamBtn.disabled = false;
  const course = currentCourse();
  const courseState = getCourseState(course.index);
  const answers = courseState.examAnswers ?? {};
  const key = answerKeyFor(course);
  const mcqHtml = course.exam.mcq
    .map((question, qIndex) => {
      const options = question.options
        .map((option) => {
          const checked = answers.mcq?.[qIndex] === option.key ? "checked" : "";
          return `
            <label class="option-row">
              <input type="radio" name="mcq-${qIndex}" value="${option.key}" ${checked} />
              <span>${option.key}. ${escapeHtml(option.text)}</span>
            </label>
          `;
        })
        .join("");
      return `
        <section class="exam-card">
          <h4>${qIndex + 1}. ${escapeHtml(question.prompt)}</h4>
          ${options}
        </section>
      `;
    })
    .join("");

  const fillHtml = course.exam.fill
    .map((prompt, index) => {
      const value = answers.fill?.[index] ?? "";
      return `
        <section class="exam-card">
          <h4>${index + 1}. ${escapeHtml(prompt)}</h4>
          <div class="fill-row">
            <input type="text" name="fill-${index}" value="${escapeHtml(value)}" autocomplete="off" />
          </div>
        </section>
      `;
    })
    .join("");

  els.examForm.innerHTML = `
    <section>
      <h3>${escapeHtml(t("multipleChoice"))}</h3>
      ${mcqHtml}
    </section>
    <section>
      <h3>${escapeHtml(t("fillBlank"))}</h3>
      ${fillHtml}
    </section>
    <section>
      <h3>${escapeHtml(t("codingExam"))}</h3>
      <div class="exam-card">
        ${markdownToHtml(course.exam.coding)}
        <h4>${escapeHtml(t("rubric"))}</h4>
        <ul>${(key?.rubric ?? []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        <textarea class="coding-answer" name="coding" placeholder="${escapeHtml(t("codingPlaceholder"))}">${escapeHtml(answers.coding ?? "")}</textarea>
      </div>
    </section>
  `;

  renderScorePanel(courseState);
}

function renderQa() {
  if (!isSignedIn()) {
    els.qaQuestions.innerHTML = lockedPanelHtml(t("qaLockedTitle"), t("qaLockedMessage"));
    els.qaPrompt.value = "";
    els.qaPrompt.disabled = true;
    els.copyPromptBtn.disabled = true;
    return;
  }

  const course = currentCourse();
  const courseState = getCourseState(course.index);
  els.qaQuestions.innerHTML = markdownToHtml(course.qna);
  els.qaPrompt.disabled = false;
  els.copyPromptBtn.disabled = false;
  els.qaPrompt.value =
    courseState.qaPrompt ??
    t("qaDefaultPrompt", { course: course.shortTitle });
}

function renderTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.tab === state.activeTab);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `${state.activeTab}Panel`);
  });
}

function gradeCurrentExam() {
  if (!isSignedIn()) {
    showSignInRequired();
    return;
  }
  const course = currentCourse();
  const key = answerKeyFor(course);
  if (!key) return;
  const data = new FormData(els.examForm);
  const mcqAnswers = key.mcq.map((_, index) => data.get(`mcq-${index}`) ?? "");
  const fillAnswers = key.fill.map((_, index) => String(data.get(`fill-${index}`) ?? "").trim());
  const coding = String(data.get("coding") ?? "");
  const mcqCorrect = mcqAnswers.filter((answer, index) => answer === key.mcq[index]).length;
  const fillCorrect = fillAnswers.filter((answer, index) => matchesAnswer(answer, key.fill[index])).length;
  const total = key.mcq.length + key.fill.length;
  const correct = mcqCorrect + fillCorrect;
  const percent = Math.round((correct / total) * 100);
  const courseState = getCourseState(course.index);

  courseState.examAnswers = {
    mcq: mcqAnswers,
    fill: fillAnswers,
    coding,
  };
  courseState.examPercent = percent;
  courseState.examScoreText = `${correct}/${total} (${percent}%)`;
  saveState();
  render();
  state.activeTab = "exam";
  renderTabs();
}

function renderScorePanel(courseState) {
  if (!courseState.examScoreText) {
    els.scorePanel.hidden = true;
    els.scorePanel.innerHTML = "";
    return;
  }
  const labelClass = courseState.examPercent >= 70 ? "" : "needs-work";
  els.scorePanel.hidden = false;
  els.scorePanel.innerHTML = `
    <p><strong class="${labelClass}">${escapeHtml(t("latestScore", { score: courseState.examScoreText }))}</strong></p>
    <p class="muted">${escapeHtml(t("codingReviewNote"))}</p>
  `;
}

async function initSupabase() {
  const config = await loadSupabaseConfig();
  if (!config) {
    setSyncStatus("offlineLocalOnly");
    return;
  }

  const scriptLoaded = await loadSupabaseScript();
  if (!scriptLoaded || !window.supabase?.createClient) {
    setSyncStatus("offlineLocalOnly");
    setAuthMessage(t("supabaseClientMissing"));
    return;
  }

  state.supabase = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);

  const { data } = await state.supabase.auth.getSession();
  if (data.session?.user) {
    state.user = data.session.user;
    await loadCloudProgress();
  } else {
    setSyncStatus("localOnly");
  }

  state.supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === "SIGNED_OUT") {
      state.user = null;
      state.saved = { activeCourse: state.activeCourse, courses: {} };
      state.authMessage = "";
      setSyncStatus("localOnly");
      render();
      return;
    }

    if (session?.user && session.user.id !== state.user?.id) {
      state.user = session.user;
      state.authMessage = "";
      await loadCloudProgress();
      render();
    }
  });
}

async function signInWithGoogle() {
  if (!state.supabase) {
    setAuthMessage(t("googleConfigureFirst"));
    return;
  }

  setSyncStatus("redirectingToGoogle");
  const { error } = await state.supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin,
    },
  });

  if (error) {
    setSyncStatus("localOnly");
    setAuthMessage(error.message);
  }
}

async function signOut() {
  if (!state.supabase) return;
  await state.supabase.auth.signOut();
}

async function loadCloudProgress() {
  if (!state.supabase || !state.user) return;

  state.loadingCloud = true;
  setSyncStatus("loadingCloud");
  const { data, error } = await state.supabase
    .from("learner_progress")
    .select("progress")
    .eq("user_id", state.user.id)
    .maybeSingle();

  if (error) {
    state.saved = loadUserCache() ?? state.saved;
    state.activeCourse = clamp(state.saved.activeCourse ?? 0, 0, state.courses.length - 1);
    state.loadingCloud = false;
    setSyncStatus("syncError");
    setAuthMessage(error.message);
    return;
  }

  if (data?.progress) {
    state.saved = normalizeProgress(data.progress);
    saveUserCache();
  } else if (hasLocalProgress(state.saved)) {
    await saveCloudProgress();
  } else {
    state.saved = loadState();
  }

  state.activeCourse = clamp(state.saved.activeCourse ?? 0, 0, state.courses.length - 1);
  state.loadingCloud = false;
  setSyncStatus("saved");
}

function scheduleCloudSave() {
  if (!state.supabase || !state.user || state.loadingCloud) {
    setSyncStatus(state.supabase ? "localOnly" : "offlineLocalOnly");
    return;
  }

  clearTimeout(state.syncTimer);
  setSyncStatus("saving");
  state.syncTimer = setTimeout(() => {
    saveCloudProgress();
  }, SYNC_DEBOUNCE_MS);
}

async function saveCloudProgress() {
  if (!state.supabase || !state.user) return;

  setSyncStatus("saving");
  const { error } = await state.supabase.from("learner_progress").upsert({
    user_id: state.user.id,
    progress: state.saved,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    setSyncStatus("syncError");
    setAuthMessage(error.message);
    renderAccount();
    return;
  }

  saveUserCache();
  setSyncStatus("saved");
}

function setSyncStatus(status) {
  state.syncStatus = status;
  renderAccount();
}

function setAuthMessage(message) {
  state.authMessage = message;
  renderAccount();
}

function isSignedIn() {
  return Boolean(state.user);
}

function showSignInRequired() {
  setAuthMessage(state.supabase ? t("signInRequired") : t("configureSignInRequired"));
}

function lockedPanelHtml(title, message) {
  return `
    <div class="locked-panel">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(message)}</p>
    </div>
  `;
}

function currentCourse() {
  return state.courses[state.activeCourse];
}

function answerKeyFor(course) {
  return state.answerKey[course.path] ?? state.answerKey[course.index];
}

function getCourseState(index) {
  const key = String(index);
  if (!state.saved.courses[key]) {
    state.saved.courses[key] = { lessons: {} };
  }
  if (!state.saved.courses[key].lessons) {
    state.saved.courses[key].lessons = {};
  }
  return state.saved.courses[key];
}

function countDoneLessons(courseIndex) {
  const course = state.courses[courseIndex];
  const courseState = getCourseState(courseIndex);
  return course.lessons.filter((_, index) => courseState.lessons[String(index)]).length;
}

function isCourseComplete(courseIndex) {
  const course = state.courses[courseIndex];
  return course.lessons.length > 0 && countDoneLessons(courseIndex) === course.lessons.length;
}

function loadState() {
  try {
    return normalizeProgress(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  } catch {
    return { activeCourse: 0, courses: {} };
  }
}

function saveState() {
  if (state.user) {
    saveUserCache();
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.saved));
  }
  scheduleCloudSave();
}

function saveUserCache() {
  if (!state.user) return;
  localStorage.setItem(userStorageKey(state.user.id), JSON.stringify(state.saved));
}

function loadUserCache() {
  if (!state.user) return null;
  try {
    const cached = localStorage.getItem(userStorageKey(state.user.id));
    return cached ? normalizeProgress(JSON.parse(cached)) : null;
  } catch {
    return null;
  }
}

function userStorageKey(userId) {
  return `${STORAGE_KEY}.user.${userId}`;
}

function normalizeProgress(progress) {
  if (!progress || typeof progress !== "object") {
    return { activeCourse: 0, courses: {} };
  }

  return {
    activeCourse: Number.isFinite(progress.activeCourse) ? progress.activeCourse : 0,
    courses: progress.courses && typeof progress.courses === "object" ? progress.courses : {},
  };
}

function hasLocalProgress(progress) {
  return Boolean(
    progress &&
      (Number(progress.activeCourse) > 0 ||
        Object.keys(progress.courses ?? {}).some((key) => {
          const course = progress.courses[key];
          return (
            Object.values(course?.lessons ?? {}).some(Boolean) ||
            Boolean(course?.examScoreText) ||
            Boolean(course?.qaPrompt) ||
            Boolean(course?.examAnswers)
          );
        }))
  );
}

function t(key, vars = {}) {
  let value = TEXT[key] ?? key;
  Object.entries(vars).forEach(([name, replacement]) => {
    value = value.replaceAll(`{${name}}`, String(replacement));
  });
  return value;
}

function applyTheme(theme) {
  state.theme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem(THEME_KEY, state.theme);
  if (els.themeToggle) {
    els.themeToggle.setAttribute("aria-pressed", String(state.theme === "dark"));
    els.themeToggle.title = state.theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  }
  if (els.themeToggleLabel) {
    els.themeToggleLabel.textContent = state.theme === "dark" ? "Light" : "Dark";
  }
}

function markdownToHtml(markdown) {
  const lines = markdown.split(/\r?\n/);
  let html = "";
  let inCode = false;
  let code = [];
  let listOpen = false;
  let paragraph = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      html += `<p>${inlineMarkdown(paragraph.join(" "))}</p>`;
      paragraph = [];
    }
  };
  const closeList = () => {
    if (listOpen) {
      html += "</ul>";
      listOpen = false;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (line.trim().startsWith("```")) {
      if (inCode) {
        html += `<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`;
        code = [];
        inCode = false;
      } else {
        flushParagraph();
        closeList();
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      code.push(rawLine);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      closeList();
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      closeList();
      const level = Math.min(heading[1].length + 1, 4);
      html += `<h${level}>${inlineMarkdown(heading[2])}</h${level}>`;
      continue;
    }

    const bullet = line.match(/^-\s+(.+)$/);
    if (bullet) {
      flushParagraph();
      if (!listOpen) {
        html += "<ul>";
        listOpen = true;
      }
      html += `<li>${inlineMarkdown(bullet[1])}</li>`;
      continue;
    }

    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      flushParagraph();
      if (!listOpen) {
        html += "<ul>";
        listOpen = true;
      }
      html += `<li>${inlineMarkdown(ordered[1])}</li>`;
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph();
  closeList();
  return html;
}

function inlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value) {
  return String(value).trim().toLowerCase();
}

function matchesAnswer(answer, expected) {
  if (Array.isArray(expected)) {
    return expected.some((item) => normalize(answer) === normalize(item));
  }
  return normalize(answer) === normalize(expected);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
