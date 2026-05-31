const STORAGE_KEYS = {
  dailyLogs: "lifeOS_dailyLogs",
  settings: "lifeOS_settings",
};

const AIRMATE_WEB_URL = "https://airmate.jp/realtime/";
const AIRMATE_APP_URL =
  "https://faq.mate.airregi.jp/hc/ja/articles/4507008511646-%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%B3%E7%89%88-Air%E3%83%A1%E3%82%A4%E3%83%88-%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E6%96%B9%E6%B3%95";

const MISSION_SECTIONS = [
  {
    key: "vision",
    title: "VISION",
    subtitle: "どんな人生が理想か？",
    value:
      "人生における定性的な目標・自分の原則\n\nいついかなる瞬間も最高にかっこいいアーティストの人生を生き抜いた\n\n常に出会った人全てをファンにする生き方だった\n\n原則中心で自分に軸があり、自分自身を磨くことに最も重点を置いた人生だった\n\n主体性を発揮し自分の人生の主導権を常に握っていた\n\n自分の弱みと他人の強みを比較する考え方をしていたので周りの人を最大限に奏るコミニュケーションを常にしていた\n\nお金を気にせず生活できる仕組みづくりができた\n\n好きな時に好きな本を読み、好きな物を食べ、好きな場所へ行けた\n\n価値あるものだけにお金を払っていた\n\n五感が研ぎ澄まされていた\n\n心身ともに健康で理想の逆三角形の体型を維持できた\n\n親孝行ができた\n\n人の心を掴む達人になった\n\n関わる人全ての人生を変える絶大な影響力を持っていた\n\nあらゆる不可能を可能にした",
  },
  {
    key: "notToChoose",
    title: "何を選ばないか",
    subtitle: "",
    value:
      "不可能だと思わない\n自分を責めない\n噂話をしない\nソースが明確でない話を信じない\n現状に文句を言わない\nできない理由を探さない\nWin-Win・No deal 以外の関係を作らない\n指導者として向き合うことをやめない",
  },
];

const MORNING_ROUTINE_ITEMS = [
  { key: "financeNews", label: "金融ニュース", hint: "チェックのみ" },
  { key: "yearSchedule", label: "年スケ", linkKey: "yearSchedule", hint: "タップして開く" },
  { key: "googleCalendar", label: "Google Calendar", linkKey: "googleCalendar", hint: "タップして開く" },
  { key: "storeStatus", label: "店舗状況確認", linkKey: "storeStatus", hint: "タップして開く" },
  { key: "weeklyReport", label: "週次報告チェック", linkKey: "weeklyReport", hint: "タップして開く" },
  { key: "gakumeizaMeetingLog", label: "樂明座会議ログ", linkKey: "gakumeizaMeetingLog", hint: "タップして開く" },
];

const NIGHT_ROUTINE_ITEMS = [
  { key: "threeMeals", label: "3食", hint: "チェックのみ" },
  { key: "water", label: "水500ml x 3", hint: "チェックのみ" },
  { key: "exercise", label: "運動10分", hint: "チェックのみ" },
  { key: "amonSalesReport", label: "亜門売上報告", linkKey: "amonSalesReport", hint: "タップして開く" },
  { key: "amonMasterSheet", label: "亜門マスターシート", linkKey: "amonMasterSheet", hint: "タップして開く" },
  { key: "householdBook", label: "家計簿", linkKey: "householdBook", hint: "タップして開く" },
  { key: "affirmationMovie", label: "アファメーションムービーを見る", hint: "チェックのみ" },
  { key: "commitLog", label: "Commit Log 2026", textOnly: true, hint: "Obsidian内リンク扱い" },
  { key: "kpiLog", label: "KPI Log 2026", linkKey: "kpiLog", hint: "タップして開く" },
];

const TIME_MACHINE_FIELDS = [
  { key: "place", label: "3年後の自分はどこにいるか" },
  { key: "people", label: "誰といるか" },
  { key: "activity", label: "何をしているか" },
  { key: "facialExpression", label: "どんな表情をしているか" },
  { key: "bodyCondition", label: "どんな身体になっているか" },
  { key: "abilities", label: "何ができるようになっているか" },
  { key: "words", label: "どんなことを話しているか" },
  { key: "influence", label: "誰にどんな影響を与えているか" },
  { key: "incomeStructure", label: "どんな収入構造を持っているか" },
  { key: "artAndBusiness", label: "どんな作品・事業を生み出しているか" },
  { key: "messageFromFutureSelf", label: "3年後の自分から今日の自分への一言" },
  { key: "todayActionFromFuture", label: "未来から逆算した今日の最重要アクション" },
];

const LINK_DEFINITIONS = [
  { key: "yearSchedule", label: "年スケ" },
  { key: "googleCalendar", label: "Google Calendar" },
  { key: "storeStatus", label: "店舗状況確認" },
  { key: "weeklyReport", label: "週次報告チェック" },
  { key: "gakumeizaMeetingLog", label: "樂明座会議ログ" },
  { key: "amonSalesReport", label: "亜門売上報告" },
  { key: "amonMasterSheet", label: "亜門マスターシート" },
  { key: "householdBook", label: "家計簿" },
  { key: "kpiLog", label: "KPI Log 2026" },
];

const DEFAULT_SETTINGS = {
  missionStatement: Object.fromEntries(MISSION_SECTIONS.map((section) => [section.key, section.value])),
  bootSequence: {
    showOnLaunch: true,
    showEveryOpen: true,
    requireReadAloud: true,
    requireTimeMachine: true,
  },
  links: {
    yearSchedule:
      "https://docs.google.com/spreadsheets/d/1d3mg9evgvgK5fof9gex_IG-RwSKq9Ei5fKo-6IkjhDQ/edit?gid=1124633243#gid=1124633243",
    googleCalendar: "https://calendar.google.com/calendar/u/0/r",
    storeStatus: AIRMATE_APP_URL,
    weeklyReport:
      "https://docs.google.com/spreadsheets/d/1a_1WDE09KQlCJHVozd84p82weuYts5g9v0qnPNWuc9c/edit?gid=1421133413#gid=1421133413",
    gakumeizaMeetingLog:
      "https://docs.google.com/document/d/1mtPKvY-Lbw4RK0Z_vAQA0LBHvSH8LPfo7SjBZ0zzdM0/edit?usp=sharing",
    amonSalesReport:
      "https://docs.google.com/spreadsheets/d/1v2o2vWBRc6EsbWuaGqQFZp3f4QnYguP4VTTrBHiEHuw/edit?gid=1537160836#gid=1537160836",
    amonMasterSheet:
      "https://docs.google.com/spreadsheets/d/1a_1WDE09KQlCJHVozd84p82weuYts5g9v0qnPNWuc9c/edit?gid=193916701#gid=193916701",
    householdBook:
      "https://docs.google.com/spreadsheets/d/1ByH0AeVt65IG6_073DE_e_w8ZJcbhubdvsK4_yXIoeo/edit?usp=sharing",
    kpiLog:
      "https://docs.google.com/spreadsheets/d/1alJG0CsndLPsYEPaSrXBWePi5omcosxcDg9f2lXLmRI/edit?gid=1649824757#gid=1649824757",
  },
};

const state = {
  settings: null,
  dailyLogs: {},
  currentDateKey: "",
  selectedLogDate: "",
  activeScreen: "boot",
  bootStep: "mission",
  bootUnlocked: false,
  timerIntervalId: null,
  timerRemainingSeconds: 600,
  output: {
    open: false,
    title: "",
    kicker: "",
    content: "",
  },
  toastTimer: null,
};

function createDefaultDailyLog(date) {
  const now = new Date().toISOString();
  return {
    date,
    bootSequence: {
      missionStatement: {
        completed: false,
        readAloud: false,
        liveByPrinciples: false,
        completedAt: null,
      },
      timeMachine10m: {
        completed: false,
        visualizedFuture: false,
        actionVisible: false,
        completedAt: null,
        timerSecondsUsed: 0,
        futureVision: Object.fromEntries(TIME_MACHINE_FIELDS.map((field) => [field.key, ""])),
      },
    },
    weekGoal: "",
    morningRoutine: Object.fromEntries(MORNING_ROUTINE_ITEMS.map((item) => [item.key, false])),
    mit: {
      mit1: "",
      mit2: "",
      mit3: "",
    },
    nightRoutine: Object.fromEntries(NIGHT_ROUTINE_ITEMS.map((item) => [item.key, false])),
    reflection: {
      fbLearning: "",
      nextAction: "",
      goodAndNew: "",
    },
    gratitude: {
      person: "",
      what: "",
      weeklyAction: "",
    },
    tomorrowReminder: [],
    memo: "",
    createdAt: now,
    updatedAt: now,
  };
}

function isPlainObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function mergeWithDefaults(defaultValue, savedValue) {
  if (Array.isArray(defaultValue)) {
    return Array.isArray(savedValue) ? savedValue : defaultValue.slice();
  }

  if (!isPlainObject(defaultValue)) {
    return savedValue === undefined ? defaultValue : savedValue;
  }

  const merged = { ...defaultValue };
  Object.keys(defaultValue).forEach((key) => {
    merged[key] = mergeWithDefaults(defaultValue[key], savedValue ? savedValue[key] : undefined);
  });

  if (isPlainObject(savedValue)) {
    Object.keys(savedValue).forEach((key) => {
      if (!(key in merged)) {
        merged[key] = savedValue[key];
      }
    });
  }

  return merged;
}

function getDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDateLabel(dateKey) {
  const date = new Date(`${dateKey}T00:00:00`);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });
}

function formatCountdown(seconds) {
  const safe = Math.max(0, Number(seconds) || 0);
  const minutes = String(Math.floor(safe / 60)).padStart(2, "0");
  const remainder = String(safe % 60).padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function escapeHtml(text) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function loadJson(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.error(`Failed to parse ${key}`, error);
    return fallback;
  }
}

function saveJson(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function loadSettings() {
  const saved = loadJson(STORAGE_KEYS.settings, null);
  const merged = mergeWithDefaults(DEFAULT_SETTINGS, saved || {});
  if (merged.links.storeStatus === AIRMATE_WEB_URL) {
    merged.links.storeStatus = AIRMATE_APP_URL;
  }
  saveJson(STORAGE_KEYS.settings, merged);
  return merged;
}

function loadDailyLogs() {
  const savedLogs = loadJson(STORAGE_KEYS.dailyLogs, {});
  const hydrated = {};
  Object.keys(savedLogs || {}).forEach((dateKey) => {
    hydrated[dateKey] = mergeWithDefaults(createDefaultDailyLog(dateKey), savedLogs[dateKey]);
  });
  return hydrated;
}

function persistSettings(showToastMessage = false) {
  saveJson(STORAGE_KEYS.settings, state.settings);
  if (showToastMessage) {
    showToast("設定を保存しました");
  }
}

function persistDailyLogs(showToastMessage = false) {
  const log = getCurrentLog();
  log.updatedAt = new Date().toISOString();
  saveJson(STORAGE_KEYS.dailyLogs, state.dailyLogs);
  if (showToastMessage) {
    showToast("保存しました");
  }
}

function ensureCurrentLog() {
  if (!state.dailyLogs[state.currentDateKey]) {
    state.dailyLogs[state.currentDateKey] = createDefaultDailyLog(state.currentDateKey);
  }
  state.dailyLogs[state.currentDateKey] = mergeWithDefaults(
    createDefaultDailyLog(state.currentDateKey),
    state.dailyLogs[state.currentDateKey]
  );
  saveJson(STORAGE_KEYS.dailyLogs, state.dailyLogs);
}

function getCurrentLog() {
  return state.dailyLogs[state.currentDateKey];
}

function getSelectedLog() {
  return state.dailyLogs[state.selectedLogDate] || null;
}

function getYesterdayLog() {
  const date = new Date(`${state.currentDateKey}T00:00:00`);
  date.setDate(date.getDate() - 1);
  return state.dailyLogs[getDateKey(date)] || null;
}

function hydrateTimerFromLog() {
  const used = Math.min(getCurrentLog().bootSequence.timeMachine10m.timerSecondsUsed || 0, 600);
  state.timerRemainingSeconds = Math.max(0, 600 - used);
}

function shouldShowBootOnLaunch() {
  const bootSettings = state.settings.bootSequence;
  const log = getCurrentLog();
  if (!bootSettings.showOnLaunch) {
    return false;
  }
  if (bootSettings.showEveryOpen) {
    return true;
  }
  const missionDone = log.bootSequence.missionStatement.completed;
  const timeMachineDone = !bootSettings.requireTimeMachine || log.bootSequence.timeMachine10m.completed;
  return !(missionDone && timeMachineDone);
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

function initializeState() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  state.settings = loadSettings();
  state.dailyLogs = loadDailyLogs();
  state.currentDateKey = getDateKey();
  ensureCurrentLog();
  state.selectedLogDate = state.currentDateKey;
  hydrateTimerFromLog();
  state.bootUnlocked = !shouldShowBootOnLaunch();
  state.activeScreen = state.bootUnlocked ? "today" : "boot";
  state.bootStep = "mission";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    toast.classList.add("hidden");
  }, 1800);
}

function showScreen(screen) {
  state.activeScreen = screen;
  renderScreenVisibility();
  renderFloatingProgressVisibility();
  scrollToTop();
}

function setBootUnlocked() {
  state.bootUnlocked = true;
  stopTimer();
  showScreen("today");
}

function updateMissionCompletion() {
  const mission = getCurrentLog().bootSequence.missionStatement;
  const canComplete = mission.liveByPrinciples && (!state.settings.bootSequence.requireReadAloud || mission.readAloud);
  mission.completed = canComplete;
  mission.completedAt = canComplete ? mission.completedAt || new Date().toISOString() : null;
}

function updateTimeMachineCompletion() {
  const timeMachine = getCurrentLog().bootSequence.timeMachine10m;
  const canComplete = timeMachine.visualizedFuture && timeMachine.actionVisible;
  timeMachine.completed = canComplete;
  timeMachine.completedAt = canComplete ? timeMachine.completedAt || new Date().toISOString() : null;
  timeMachine.timerSecondsUsed = Math.min(600, 600 - state.timerRemainingSeconds);
}

function renderMissionCards() {
  const container = document.getElementById("mission-cards");
  container.innerHTML = MISSION_SECTIONS.map(
    (section) => `
      <article class="card">
        <h4 class="mission-card-title">${escapeHtml(section.title)}</h4>
        ${section.subtitle ? `<p class="mission-card-subtitle">${escapeHtml(section.subtitle)}</p>` : ""}
        <p class="mission-card-body">${escapeHtml(state.settings.missionStatement[section.key] || "")}</p>
      </article>
    `
  ).join("");
}

function renderTimeMachineFields() {
  const futureVision = getCurrentLog().bootSequence.timeMachine10m.futureVision;
  const container = document.getElementById("time-machine-fields");
  container.innerHTML = TIME_MACHINE_FIELDS.map(
    (field) => `
      <label class="card settings-field">
        <span>${escapeHtml(field.label)}</span>
        <textarea
          data-time-machine-field="${field.key}"
          rows="${field.key === "todayActionFromFuture" || field.key === "messageFromFutureSelf" ? 4 : 3}"
          placeholder="${escapeHtml(field.label)}"
        >${escapeHtml(futureVision[field.key] || "")}</textarea>
      </label>
    `
  ).join("");
}

function toggleCheckedClass(input) {
  const target = input.closest(".toggle-card, .routine-tile");
  if (target) {
    target.classList.toggle("is-checked", input.checked);
  }
}

function renderBootState() {
  const log = getCurrentLog();
  updateMissionCompletion();
  updateTimeMachineCompletion();

  document.getElementById("mission-readaloud").checked = log.bootSequence.missionStatement.readAloud;
  document.getElementById("mission-principles").checked = log.bootSequence.missionStatement.liveByPrinciples;
  document.getElementById("mission-next-button").disabled = !log.bootSequence.missionStatement.completed;
  document.getElementById("timer-display").textContent = formatCountdown(state.timerRemainingSeconds);
  document.getElementById("timer-start-button").disabled = Boolean(state.timerIntervalId);
  document.getElementById("tm-visualized").checked = log.bootSequence.timeMachine10m.visualizedFuture;
  document.getElementById("tm-action-visible").checked = log.bootSequence.timeMachine10m.actionVisible;
  document.getElementById("time-machine-complete-button").disabled = !log.bootSequence.timeMachine10m.completed;

  document.querySelectorAll("#boot-screen input[type='checkbox']").forEach(toggleCheckedClass);
  document.getElementById("mission-view").classList.toggle("hidden", state.bootStep !== "mission");
  document.getElementById("time-machine-view").classList.toggle("hidden", state.bootStep !== "timeMachine");
}

function renderRoutineList(containerId, items, values, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = items
    .map((item) => {
      const checked = Boolean(values[item.key]);
      const openButton = item.linkKey
        ? `<button class="routine-name link-button" type="button" data-open-routine="${type}:${item.key}">${escapeHtml(
            item.label
          )}</button>`
        : `<span class="routine-label">${escapeHtml(item.label)}</span>`;
      const hint = item.textOnly ? "Obsidian内リンク扱い" : escapeHtml(item.hint || "チェックのみ");

      return `
        <div class="routine-tile ${checked ? "is-checked" : ""}">
          <div class="routine-main">
            <label class="routine-check">
              <input type="checkbox" data-routine-type="${type}" data-routine-key="${item.key}" ${checked ? "checked" : ""} />
              <span class="toggle-indicator"></span>
            </label>
            <span class="routine-copy">
              ${openButton}
              <span class="routine-hint">${hint}</span>
            </span>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderHandoff() {
  const handoff = document.getElementById("handoff-content");
  const yesterdayLog = getYesterdayLog();
  const currentAction = getCurrentLog().bootSequence.timeMachine10m.futureVision.todayActionFromFuture;
  const items = [
    {
      label: "昨日の明日のNEXT ACTION",
      value: yesterdayLog ? yesterdayLog.reflection.nextAction : "",
    },
    {
      label: "昨日の明日のリマインド",
      value: yesterdayLog ? yesterdayLog.tomorrowReminder.map((item) => item.text).filter(Boolean).join(" / ") : "",
    },
    {
      label: "未来から逆算した今日の一手",
      value: currentAction,
    },
  ];

  handoff.innerHTML = items
    .map(
      (item) => `
        <div class="handoff-item">
          <strong>${escapeHtml(item.label)}</strong>
          <p>${escapeHtml(item.value || "データなし")}</p>
        </div>
      `
    )
    .join("");
}

function renderReminders() {
  const reminders = getCurrentLog().tomorrowReminder;
  const container = document.getElementById("reminder-list");
  if (!reminders.length) {
    container.innerHTML = '<p class="inline-note">まだリマインドはありません。</p>';
    return;
  }

  container.innerHTML = reminders
    .map(
      (item) => `
        <div class="reminder-row ${item.completed ? "is-checked" : ""}">
          <label class="routine-main">
            <input type="checkbox" data-reminder-toggle="${item.id}" ${item.completed ? "checked" : ""} />
            <span class="toggle-indicator"></span>
          </label>
          <input type="text" data-reminder-text="${item.id}" value="${escapeHtml(item.text)}" placeholder="リマインド内容" />
          <button class="ghost-button" data-reminder-delete="${item.id}" type="button">削除</button>
        </div>
      `
    )
    .join("");

  container.querySelectorAll("input[type='checkbox']").forEach(toggleCheckedClass);
}

function calculateProgress() {
  const log = getCurrentLog();
  const gratitudeDone = Object.values(log.gratitude).every((value) => value.trim());
  const achieved = [
    log.bootSequence.missionStatement.completed && (!state.settings.bootSequence.requireTimeMachine || log.bootSequence.timeMachine10m.completed),
    ...MORNING_ROUTINE_ITEMS.map((item) => log.morningRoutine[item.key]),
    ...Object.values(log.mit).map(Boolean),
    ...NIGHT_ROUTINE_ITEMS.map((item) => log.nightRoutine[item.key]),
    Boolean(log.reflection.fbLearning.trim()),
    Boolean(log.reflection.nextAction.trim()),
    Boolean(log.reflection.goodAndNew.trim()),
    gratitudeDone,
  ].filter(Boolean).length;

  const total = 1 + MORNING_ROUTINE_ITEMS.length + 3 + NIGHT_ROUTINE_ITEMS.length + 4;
  return Math.round((achieved / total) * 100);
}

function updateProgressUi() {
  const progress = calculateProgress();
  document.getElementById("progress-text").textContent = `${progress}%`;
  document.getElementById("progress-fill").style.width = `${progress}%`;
  document.getElementById("floating-progress-text").textContent = `${progress}%`;
  document.getElementById("floating-progress-fill").style.width = `${progress}%`;
}

function renderFloatingProgressVisibility() {
  const floating = document.getElementById("floating-progress");
  const available = state.bootUnlocked && (state.activeScreen === "today" || state.activeScreen === "night");
  const visible = available && window.scrollY > 110;
  floating.classList.toggle("hidden", !available);
  floating.classList.toggle("visible", visible);
}

function renderToday() {
  const log = getCurrentLog();
  document.getElementById("today-title").textContent = `${formatDateLabel(state.currentDateKey)} の設計`;
  document.getElementById("week-goal").value = log.weekGoal;
  document.getElementById("mit1").value = log.mit.mit1;
  document.getElementById("mit2").value = log.mit.mit2;
  document.getElementById("mit3").value = log.mit.mit3;
  document.getElementById("mit-candidate-text").textContent =
    log.bootSequence.timeMachine10m.futureVision.todayActionFromFuture || "未入力";

  renderHandoff();
  renderRoutineList("morning-routine-list", MORNING_ROUTINE_ITEMS, log.morningRoutine, "morning");
  updateProgressUi();
}

function renderNight() {
  const log = getCurrentLog();
  document.getElementById("fb-learning").value = log.reflection.fbLearning;
  document.getElementById("next-action").value = log.reflection.nextAction;
  document.getElementById("good-and-new").value = log.reflection.goodAndNew;
  document.getElementById("gratitude-person").value = log.gratitude.person;
  document.getElementById("gratitude-what").value = log.gratitude.what;
  document.getElementById("gratitude-weekly-action").value = log.gratitude.weeklyAction;
  document.getElementById("memo").value = log.memo;
  renderRoutineList("night-routine-list", NIGHT_ROUTINE_ITEMS, log.nightRoutine, "night");
  renderReminders();
  updateProgressUi();
}

function renderLogs() {
  const list = document.getElementById("logs-list");
  const dateKeys = Object.keys(state.dailyLogs).sort((a, b) => b.localeCompare(a));
  list.innerHTML = dateKeys
    .map(
      (dateKey) => `
        <button class="log-date-button ${state.selectedLogDate === dateKey ? "active" : ""}" data-log-date="${dateKey}" type="button">
          ${escapeHtml(dateKey)}
        </button>
      `
    )
    .join("");

  const log = getSelectedLog();
  const title = document.getElementById("logs-detail-title");
  const detail = document.getElementById("logs-detail-content");
  if (!log) {
    title.textContent = "ログ詳細";
    detail.innerHTML = '<p class="inline-note">表示できるログがありません。</p>';
    return;
  }

  title.textContent = `${log.date} のログ`;
  detail.innerHTML = `
    <div class="log-detail-block">
      <strong>Boot Sequence</strong>
      <p>Mission Statement: ${log.bootSequence.missionStatement.completed ? "完了" : "未完了"}</p>
      <p>10m Time Machine: ${log.bootSequence.timeMachine10m.completed ? "完了" : "未完了"}</p>
    </div>
    <div class="log-detail-block">
      <strong>今日の最重要3つ</strong>
      <p>${escapeHtml(log.mit.mit1 || "未入力")}</p>
      <p>${escapeHtml(log.mit.mit2 || "未入力")}</p>
      <p>${escapeHtml(log.mit.mit3 || "未入力")}</p>
    </div>
    <div class="log-detail-block">
      <strong>明日のNEXT ACTION</strong>
      <p>${escapeHtml(log.reflection.nextAction || "未入力")}</p>
    </div>
    <div class="log-detail-block">
      <strong>明日のリマインド</strong>
      <p>${escapeHtml(log.tomorrowReminder.map((item) => item.text).filter(Boolean).join(" / ") || "未入力")}</p>
    </div>
    <div class="log-detail-block">
      <strong>JSON Preview</strong>
      <textarea rows="12" readonly>${escapeHtml(JSON.stringify(log, null, 2))}</textarea>
    </div>
  `;
}

function renderSettings() {
  document.getElementById("settings-mission-fields").innerHTML = MISSION_SECTIONS.map(
    (section) => `
      <label class="card settings-field">
        <span>${escapeHtml(section.title)}${section.subtitle ? ` / ${escapeHtml(section.subtitle)}` : ""}</span>
        <textarea data-settings-mission="${section.key}" rows="8">${escapeHtml(
          state.settings.missionStatement[section.key] || ""
        )}</textarea>
      </label>
    `
  ).join("");

  const bootFields = [
    { key: "showOnLaunch", label: "起動時にMission Statementを表示する" },
    { key: "showEveryOpen", label: "開くたびに表示する" },
    { key: "requireReadAloud", label: "音読チェックを必須にする" },
    { key: "requireTimeMachine", label: "10m Time Machineを必須にする" },
  ];
  document.getElementById("settings-boot-fields").innerHTML = bootFields
    .map(
      (field) => `
        <label class="toggle-card ${state.settings.bootSequence[field.key] ? "is-checked" : ""}">
          <input type="checkbox" data-settings-boot="${field.key}" ${state.settings.bootSequence[field.key] ? "checked" : ""} />
          <span class="toggle-indicator"></span>
          <span class="toggle-copy">${escapeHtml(field.label)}</span>
        </label>
      `
    )
    .join("");

  document.getElementById("settings-link-fields").innerHTML = LINK_DEFINITIONS.map(
    (link) => `
      <label class="card settings-field">
        <span>${escapeHtml(link.label)}</span>
        <input type="url" data-settings-link="${link.key}" value="${escapeHtml(state.settings.links[link.key] || "")}" />
      </label>
    `
  ).join("");
}

function renderOutputPanel() {
  const panel = document.getElementById("output-panel");
  panel.classList.toggle("hidden", !state.output.open);
  document.getElementById("output-title").textContent = state.output.title;
  document.getElementById("output-kicker").textContent = state.output.kicker;
  document.getElementById("output-content").value = state.output.content;
}

function renderScreenVisibility() {
  document.getElementById("boot-screen").classList.toggle("hidden", state.activeScreen !== "boot");
  document.getElementById("today-screen").classList.toggle("hidden", state.activeScreen !== "today");
  document.getElementById("night-screen").classList.toggle("hidden", state.activeScreen !== "night");
  document.getElementById("logs-screen").classList.toggle("hidden", state.activeScreen !== "logs");
  document.getElementById("settings-screen").classList.toggle("hidden", state.activeScreen !== "settings");
  document.getElementById("app-nav").classList.toggle("hidden", !state.bootUnlocked);
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === state.activeScreen);
  });
}

function renderApp() {
  document.getElementById("current-date-display").textContent = formatDateLabel(state.currentDateKey);
  renderScreenVisibility();
  renderMissionCards();
  renderTimeMachineFields();
  renderBootState();
  renderToday();
  renderNight();
  renderLogs();
  renderSettings();
  renderOutputPanel();
  renderFloatingProgressVisibility();
}

function openOutput(title, kicker, content) {
  state.output.open = true;
  state.output.title = title;
  state.output.kicker = kicker;
  state.output.content = content;
  renderOutputPanel();
}

function closeOutput() {
  state.output.open = false;
  renderOutputPanel();
}

function buildMarkdown(log) {
  const mark = (value) => (value ? "x" : " ");
  const lines = [
    `# Daily Log ${log.date}`,
    "",
    "## Boot Sequence",
    "",
    "### Mission Statement",
    `- [${mark(log.bootSequence.missionStatement.readAloud)}] すべて声に出して読んだ`,
    `- [${mark(log.bootSequence.missionStatement.liveByPrinciples)}] 今日もこの原則で生きる`,
    "",
    "### 10mタイムマシン",
    `- 場所: ${log.bootSequence.timeMachine10m.futureVision.place}`,
    `- 誰といるか: ${log.bootSequence.timeMachine10m.futureVision.people}`,
    `- 何をしているか: ${log.bootSequence.timeMachine10m.futureVision.activity}`,
    `- 表情: ${log.bootSequence.timeMachine10m.futureVision.facialExpression}`,
    `- 身体: ${log.bootSequence.timeMachine10m.futureVision.bodyCondition}`,
    `- できるようになったこと: ${log.bootSequence.timeMachine10m.futureVision.abilities}`,
    `- 話している言葉: ${log.bootSequence.timeMachine10m.futureVision.words}`,
    `- 影響: ${log.bootSequence.timeMachine10m.futureVision.influence}`,
    `- 収入構造: ${log.bootSequence.timeMachine10m.futureVision.incomeStructure}`,
    `- 作品・事業: ${log.bootSequence.timeMachine10m.futureVision.artAndBusiness}`,
    `- 未来の自分からの一言: ${log.bootSequence.timeMachine10m.futureVision.messageFromFutureSelf}`,
    `- 今日の最重要アクション: ${log.bootSequence.timeMachine10m.futureVision.todayActionFromFuture}`,
    "",
    "## Week Goal",
    `- ${log.weekGoal}`,
    "",
    "## Morning Routine",
    ...MORNING_ROUTINE_ITEMS.map((item) => `- [${mark(log.morningRoutine[item.key])}] ${item.label}`),
    "",
    "## 今日の最重要3つ",
    `- [${mark(log.mit.mit1)}] 最重要1: ${log.mit.mit1}`,
    `- [${mark(log.mit.mit2)}] 最重要2: ${log.mit.mit2}`,
    `- [${mark(log.mit.mit3)}] 最重要3: ${log.mit.mit3}`,
    "",
    "## Night Routine",
    ...NIGHT_ROUTINE_ITEMS.map((item) => `- [${mark(log.nightRoutine[item.key])}] ${item.label}`),
    "",
    "## 今日のFB / 学び",
    `- ${log.reflection.fbLearning}`,
    "",
    "## 明日のNEXT ACTION",
    `- ${log.reflection.nextAction}`,
    "",
    "## Good & New",
    `- ${log.reflection.goodAndNew}`,
    "",
    "## 今日の承認・感謝",
    `- 誰に: ${log.gratitude.person}`,
    `- 何を感謝したか: ${log.gratitude.what}`,
    `- その人に今週何をするか: ${log.gratitude.weeklyAction}`,
    "",
    "## 明日のリマインド",
    ...(log.tomorrowReminder.length ? log.tomorrowReminder.map((item) => `- [${mark(item.completed)}] ${item.text}`) : ["- [ ]"]),
    "",
    "## メモ",
    `- ${log.memo}`,
  ];
  return lines.join("\n");
}

function buildJson(log) {
  return JSON.stringify(log, null, 2);
}

function exportCurrent(type) {
  const log = getCurrentLog();
  openOutput(`${log.date} ${type === "markdown" ? "Markdown" : "JSON"}`, type === "markdown" ? "Markdown" : "JSON", type === "markdown" ? buildMarkdown(log) : buildJson(log));
}

function exportSelected(type) {
  const log = getSelectedLog();
  if (!log) {
    return;
  }
  openOutput(`${log.date} ${type === "markdown" ? "Markdown" : "JSON"}`, type === "markdown" ? "Markdown" : "JSON", type === "markdown" ? buildMarkdown(log) : buildJson(log));
}

function stopTimer() {
  if (state.timerIntervalId) {
    clearInterval(state.timerIntervalId);
    state.timerIntervalId = null;
  }
}

function startTimer() {
  if (state.timerIntervalId || state.timerRemainingSeconds <= 0) {
    return;
  }

  const button = document.getElementById("timer-start-button");
  button.disabled = true;
  state.timerIntervalId = window.setInterval(() => {
    if (state.timerRemainingSeconds <= 0) {
      stopTimer();
      button.disabled = true;
      return;
    }
    state.timerRemainingSeconds -= 1;
    getCurrentLog().bootSequence.timeMachine10m.timerSecondsUsed = Math.min(600, 600 - state.timerRemainingSeconds);
    document.getElementById("timer-display").textContent = formatCountdown(state.timerRemainingSeconds);
    if (state.timerRemainingSeconds % 5 === 0) {
      persistDailyLogs(false);
    }
    if (state.timerRemainingSeconds <= 0) {
      stopTimer();
      persistDailyLogs(false);
    }
  }, 1000);
}

function addReminder() {
  const input = document.getElementById("new-reminder-input");
  const value = input.value.trim();
  if (!value) {
    return;
  }
  getCurrentLog().tomorrowReminder.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    text: value,
    completed: false,
  });
  input.value = "";
  persistDailyLogs(true);
  renderNight();
}

function copyText(value) {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    return navigator.clipboard.writeText(value);
  }
  const output = document.getElementById("output-content");
  output.focus();
  output.select();
  const ok = document.execCommand("copy");
  return ok ? Promise.resolve() : Promise.reject(new Error("copy failed"));
}

function updateCurrentLogField(id, value) {
  const log = getCurrentLog();
  switch (id) {
    case "week-goal":
      log.weekGoal = value;
      break;
    case "mit1":
      log.mit.mit1 = value;
      break;
    case "mit2":
      log.mit.mit2 = value;
      break;
    case "mit3":
      log.mit.mit3 = value;
      break;
    case "fb-learning":
      log.reflection.fbLearning = value;
      break;
    case "next-action":
      log.reflection.nextAction = value;
      break;
    case "good-and-new":
      log.reflection.goodAndNew = value;
      break;
    case "gratitude-person":
      log.gratitude.person = value;
      break;
    case "gratitude-what":
      log.gratitude.what = value;
      break;
    case "gratitude-weekly-action":
      log.gratitude.weeklyAction = value;
      break;
    case "memo":
      log.memo = value;
      break;
    default:
      return false;
  }
  persistDailyLogs(false);
  updateProgressUi();
  return true;
}

function openRoutineLink(type, key) {
  const items = type === "morning" ? MORNING_ROUTINE_ITEMS : NIGHT_ROUTINE_ITEMS;
  const item = items.find((entry) => entry.key === key);
  if (!item || !item.linkKey) {
    return;
  }

  const url = state.settings.links[item.linkKey];
  if (!url) {
    showToast("リンクが未設定です");
    return;
  }

  const log = getCurrentLog();
  const bucket = type === "morning" ? log.morningRoutine : log.nightRoutine;
  bucket[key] = true;
  persistDailyLogs(false);
  if (type === "morning") {
    renderRoutineList("morning-routine-list", MORNING_ROUTINE_ITEMS, log.morningRoutine, "morning");
  } else {
    renderRoutineList("night-routine-list", NIGHT_ROUTINE_ITEMS, log.nightRoutine, "night");
  }
  updateProgressUi();
  window.open(url, "_blank", "noopener,noreferrer");
  showToast("リンクを開き、チェックしました");
}

function handleClick(event) {
  const target = event.target;

  if (target.id === "mission-next-button") {
    persistDailyLogs(true);
    if (state.settings.bootSequence.requireTimeMachine) {
      state.bootStep = "timeMachine";
      renderBootState();
      scrollToTop();
    } else {
      setBootUnlocked();
    }
    return;
  }

  if (target.id === "time-machine-complete-button") {
    updateTimeMachineCompletion();
    persistDailyLogs(true);
    setBootUnlocked();
    return;
  }

  if (target.id === "timer-start-button") {
    startTimer();
    return;
  }

  if (target.id === "apply-mit-candidate-button") {
    const action = getCurrentLog().bootSequence.timeMachine10m.futureVision.todayActionFromFuture;
    if (action) {
      getCurrentLog().mit.mit1 = action;
      document.getElementById("mit1").value = action;
      persistDailyLogs(true);
      updateProgressUi();
    }
    return;
  }

  if (target.id === "dashboard-save-button" || target.id === "night-save-button" || target.id === "quick-save-button") {
    persistDailyLogs(true);
    return;
  }

  if (target.id === "settings-save-button") {
    persistSettings(true);
    renderMissionCards();
    return;
  }

  if (target.id === "add-reminder-button") {
    addReminder();
    return;
  }

  if (target.id === "markdown-export-button") {
    exportCurrent("markdown");
    return;
  }

  if (target.id === "json-export-button") {
    exportCurrent("json");
    return;
  }

  if (target.id === "logs-markdown-button") {
    exportSelected("markdown");
    return;
  }

  if (target.id === "logs-json-button") {
    exportSelected("json");
    return;
  }

  if (target.id === "copy-output-button") {
    copyText(document.getElementById("output-content").value).then(
      () => showToast("コピーしました"),
      () => showToast("コピーに失敗しました")
    );
    return;
  }

  if (target.id === "close-output-button") {
    closeOutput();
    return;
  }

  if (target.dataset.openRoutine) {
    const [type, key] = target.dataset.openRoutine.split(":");
    openRoutineLink(type, key);
    return;
  }

  if (target.dataset.screen) {
    showScreen(target.dataset.screen);
    return;
  }

  if (target.dataset.logDate) {
    state.selectedLogDate = target.dataset.logDate;
    renderLogs();
    scrollToTop();
    return;
  }

  if (target.dataset.reminderDelete) {
    getCurrentLog().tomorrowReminder = getCurrentLog().tomorrowReminder.filter((item) => item.id !== target.dataset.reminderDelete);
    persistDailyLogs(true);
    renderNight();
  }
}

function handleChange(event) {
  const target = event.target;
  const log = getCurrentLog();

  if (target.id === "mission-readaloud") {
    log.bootSequence.missionStatement.readAloud = target.checked;
    updateMissionCompletion();
    persistDailyLogs(false);
    renderBootState();
    return;
  }

  if (target.id === "mission-principles") {
    log.bootSequence.missionStatement.liveByPrinciples = target.checked;
    updateMissionCompletion();
    persistDailyLogs(false);
    renderBootState();
    return;
  }

  if (target.id === "tm-visualized") {
    log.bootSequence.timeMachine10m.visualizedFuture = target.checked;
    updateTimeMachineCompletion();
    persistDailyLogs(false);
    renderBootState();
    return;
  }

  if (target.id === "tm-action-visible") {
    log.bootSequence.timeMachine10m.actionVisible = target.checked;
    updateTimeMachineCompletion();
    persistDailyLogs(false);
    renderBootState();
    return;
  }

  if (target.dataset.routineType) {
    const bucket = target.dataset.routineType === "morning" ? log.morningRoutine : log.nightRoutine;
    bucket[target.dataset.routineKey] = target.checked;
    persistDailyLogs(false);
    toggleCheckedClass(target);
    updateProgressUi();
    return;
  }

  if (target.dataset.reminderToggle) {
    const reminder = log.tomorrowReminder.find((item) => item.id === target.dataset.reminderToggle);
    if (reminder) {
      reminder.completed = target.checked;
      persistDailyLogs(false);
      renderNight();
    }
    return;
  }

  if (target.dataset.settingsBoot) {
    state.settings.bootSequence[target.dataset.settingsBoot] = target.checked;
    persistSettings(false);
    toggleCheckedClass(target);
    return;
  }
}

function handleInput(event) {
  const target = event.target;

  if (updateCurrentLogField(target.id, target.value)) {
    return;
  }

  if (target.dataset.timeMachineField) {
    getCurrentLog().bootSequence.timeMachine10m.futureVision[target.dataset.timeMachineField] = target.value;
    persistDailyLogs(false);
    if (target.dataset.timeMachineField === "todayActionFromFuture") {
      document.getElementById("mit-candidate-text").textContent = target.value || "未入力";
      renderHandoff();
    }
    return;
  }

  if (target.dataset.reminderText) {
    const reminder = getCurrentLog().tomorrowReminder.find((item) => item.id === target.dataset.reminderText);
    if (reminder) {
      reminder.text = target.value;
      persistDailyLogs(false);
    }
    return;
  }

  if (target.dataset.settingsMission) {
    state.settings.missionStatement[target.dataset.settingsMission] = target.value;
    persistSettings(false);
    renderMissionCards();
    return;
  }

  if (target.dataset.settingsLink) {
    state.settings.links[target.dataset.settingsLink] = target.value;
    persistSettings(false);
  }
}

function handleScroll() {
  renderFloatingProgressVisibility();
}

function attachListeners() {
  document.addEventListener("click", handleClick);
  document.addEventListener("change", handleChange);
  document.addEventListener("input", handleInput);
  window.addEventListener("scroll", handleScroll, { passive: true });
}

function boot() {
  initializeState();
  attachListeners();
  renderApp();
  scrollToTop();
}

boot();
