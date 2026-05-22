const COURSE_MANIFEST = "courses/full/manifest.json";
const ANSWER_KEY_FILE = "exams/full_answer_key.json";

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

const state = {
  courses: [],
  answerKey: FALLBACK_ANSWER_KEY,
  activeCourse: 0,
  activeTab: "learn",
  theme: document.documentElement.dataset.theme || "light",
  saved: loadState(),
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

function parseCourse(file, index) {
  const lines = file.text.split(/\r?\n/);
  const title = lines.find((line) => line.startsWith("# "))?.replace("# ", "").trim() ?? `Course ${index + 1}`;
  const lessonSection = sectionBetween(file.text, "## Lessons", "## Flutter Bridge");
  const lessons = [...lessonSection.matchAll(/^###\s+(.+)$/gm)].map((match) => match[1].trim());
  const qna = sectionBetween(file.text, "## Q&A Checkpoint", "## Exam");
  const exam = parseExam(sectionAfter(file.text, "## Exam"));

  return {
    index,
    path: file.path,
    title,
    shortTitle: title.replace(/^Course\s+\d+\s+-\s+/, ""),
    markdown: file.text,
    lessons,
    qna,
    exam,
  };
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
    state.saved.activeCourse = state.activeCourse;
    saveState();
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
    const courseState = getCourseState(state.activeCourse);
    const lessonIndex = String(input.dataset.lessonIndex);
    courseState.lessons[lessonIndex] = input.checked;
    saveState();
    render();
  });

  els.submitExamBtn.addEventListener("click", gradeCurrentExam);

  els.copyPromptBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(els.qaPrompt.value);
    els.copyStatus.textContent = "Prompt copied.";
    setTimeout(() => {
      els.copyStatus.textContent = "";
    }, 1800);
  });

  els.qaPrompt.addEventListener("input", () => {
    getCourseState(state.activeCourse).qaPrompt = els.qaPrompt.value;
    saveState();
  });

  els.resetProgressBtn.addEventListener("click", () => {
    const ok = window.confirm("Reset all progress, exam answers, and Q&A drafts?");
    if (!ok) return;
    localStorage.removeItem(STORAGE_KEY);
    state.saved = loadState();
    render();
  });

  els.themeToggle.addEventListener("click", () => {
    applyTheme(state.theme === "dark" ? "light" : "dark");
  });
}

function render() {
  renderCourseList();
  renderHeader();
  renderProgress();
  renderLearn();
  renderExam();
  renderQa();
  renderTabs();
}

function renderCourseList() {
  els.courseList.innerHTML = state.courses
    .map((course) => {
      const courseState = getCourseState(course.index);
      const complete = isCourseComplete(course.index);
      const lessonCount = course.lessons.length;
      const doneCount = countDoneLessons(course.index);
      return `
        <button class="course-button ${course.index === state.activeCourse ? "is-active" : ""} ${complete ? "is-done" : ""}" data-course-index="${course.index}" type="button">
          <span>
            <strong>${escapeHtml(course.shortTitle)}</strong>
            <span>${doneCount}/${lessonCount} lessons / ${courseState.examScoreText ?? "No exam"}</span>
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
  els.courseNumber.textContent = `Course ${String(course.index + 1).padStart(2, "0")}`;
  els.courseTitle.textContent = course.shortTitle;
  els.lessonStat.textContent = `${doneCount}/${lessonCount}`;
  els.examStat.textContent = courseState.examScoreText ?? "Not taken";
  els.statusStat.textContent = isCourseComplete(course.index) ? "Complete" : "In progress";
}

function renderProgress() {
  const courseCount = state.courses.length;
  const completeCount = state.courses.filter((course) => isCourseComplete(course.index)).length;
  const percent = Math.round((completeCount / courseCount) * 100);
  const scores = Object.values(state.saved.courses)
    .map((course) => course.examPercent)
    .filter((score) => Number.isFinite(score));
  const average = scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : null;

  els.progressRing.style.background = `conic-gradient(var(--green) ${percent * 3.6}deg, var(--track) 0deg)`;
  els.progressPercent.textContent = `${percent}%`;
  els.completedCount.textContent = `${completeCount} of ${courseCount} courses`;
  els.examAverage.textContent = average === null ? "No exam scores yet" : `Exam average ${average}%`;
}

function renderLearn() {
  const course = currentCourse();
  const courseState = getCourseState(course.index);
  els.lessonTrack.innerHTML = course.lessons
    .map((lesson, index) => {
      const checked = courseState.lessons[String(index)] ? "checked" : "";
      return `
        <label class="lesson-chip">
          <input type="checkbox" data-lesson-index="${index}" ${checked} />
          <span>${escapeHtml(lesson)}</span>
        </label>
      `;
    })
    .join("");
  els.courseContent.innerHTML = markdownToHtml(course.markdown.replace(/## Exam[\s\S]*$/m, ""));
}

function renderExam() {
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
      <h3>Multiple Choice</h3>
      ${mcqHtml}
    </section>
    <section>
      <h3>Fill In The Blank</h3>
      ${fillHtml}
    </section>
    <section>
      <h3>Coding Exam</h3>
      <div class="exam-card">
        ${markdownToHtml(course.exam.coding)}
        <h4>Rubric</h4>
        <ul>${(key?.rubric ?? []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        <textarea class="coding-answer" name="coding" placeholder="Write your Kotlin answer here">${escapeHtml(answers.coding ?? "")}</textarea>
      </div>
    </section>
  `;

  renderScorePanel(courseState);
}

function renderQa() {
  const course = currentCourse();
  const courseState = getCourseState(course.index);
  els.qaQuestions.innerHTML = markdownToHtml(course.qna);
  els.qaPrompt.value =
    courseState.qaPrompt ??
    `Course: ${course.shortTitle}\nQuestion:\n\nContext:\nI am a Flutter developer learning Kotlin. Please research current Kotlin/Android docs and explain with Flutter comparisons.`;
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
    <p><strong class="${labelClass}">Latest score: ${courseState.examScoreText}</strong></p>
    <p class="muted">Coding answer is saved, but review it manually with the rubric.</p>
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
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? { activeCourse: 0, courses: {} };
  } catch {
    return { activeCourse: 0, courses: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.saved));
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
