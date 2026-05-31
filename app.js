const STORAGE_KEYS = {
  dailyLogs: "lifeOS_dailyLogs",
  settings: "lifeOS_settings",
};

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
  {
    key: "powerOfOne",
    title: "Power of One",
    subtitle: "人生の土台 / 毎日何を積み上げるか",
    value:
      "週に1時間は必ず自分を見つめ直す時間に使った\n\n3食食べ、水を1.5L飲み、8時間寝て、毎日30分運動し、10分を人生を研ぎ澄ます時間にした",
  },
  {
    key: "principles",
    title: "主体性 / 目的 / 重要事項",
    subtitle: "",
    value:
      "1. 主体性を発揮する\n2. 目的を持って始める\n3. 重要事項を優先する\n\nどんなに小さなことでも自分との約束、人との約束を守る\n\n「はじまり」と「おわり」を常に明確に意識した\n\n連絡は最速",
  },
  {
    key: "innerOuterCare",
    title: "内面・外見・垢抜け",
    subtitle: "",
    value:
      "中身：\nワクワクしている、言葉の選び方、伝え方\n\n外見ケア：\n表情、所作、筋肉、髪型、理想の体重、脂肪率、眉毛、髭、口臭、ニキビ、体臭\n\n垢抜け：\nコンタクトレンズ、香水、服、柔軟剤、アクセサリー",
  },
  {
    key: "trustAndInfluence",
    title: "信頼関係構築と影響力",
    subtitle: "",
    value:
      "相手への気遣い\n4,5,6の習慣\n\n信頼関係構築と影響力\n\n遅刻をしない\n細やかな気遣いができる\n相手の時間を奪わない\n相手に必要なことができる",
  },
  {
    key: "sharpenTheSaw",
    title: "刃を研ぐ",
    subtitle: "",
    value:
      "7. 刃を研ぐ\n\n習慣と目標を振り返る時間の確保\n\n肉体・知識・精神・社会性の4つを磨き続ける",
  },
];

const MORNING_ROUTINE_ITEMS = [
  { key: "financeNews", label: "金融ニュース" },
  { key: "yearSchedule", label: "年スケ", linkKey: "yearSchedule" },
  { key: "googleCalendar", label: "Google Calendar", linkKey: "googleCalendar" },
  { key: "storeStatus", label: "店舗状況確認", linkKey: "storeStatus" },
  { key: "weeklyReport", label: "週次報告チェック", linkKey: "weeklyReport" },
  { key: "gakumeizaMeetingLog", label: "樂明座会議ログ", linkKey: "gakumeizaMeetingLog" },
];

const NIGHT_ROUTINE_ITEMS = [
  { key: "threeMeals", label: "3食" },
  { key: "water", label: "水500ml x 3" },
  { key: "exercise", label: "運動10分" },
  { key: "amonSalesReport", label: "亜門売上報告", linkKey: "amonSalesReport" },
  { key: "amonMasterSheet", label: "亜門マスターシート", linkKey: "amonMasterSheet" },
  { key: "householdBook", label: "家計簿", linkKey: "householdBook" },
  { key: "affirmationMovie", label: "アファメーションムービーを見る" },
  { key: "commitLog", label: "Commit Log 2026", textOnly: true },
  { key: "kpiLog", label: "KPI Log 2026", linkKey: "kpiLog" },
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
    storeStatus: "https://airmate.jp/realtime/",
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
  activeScreen: "today",
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

function persistSettings(showToastMessage) {
  saveJson(STORAGE_KEYS.settings, state.settings);
  if (showToastMessage) {
    showToast("設定を保存しました");
  }
}

function persistDailyLogs(showToastMessage) {
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
    saveJson(STORAGE_KEYS.dailyLogs, state.dailyLogs);
  } else {
    state.dailyLogs[state.currentDateKey] = mergeWithDefaults(
      createDefaultDailyLog(state.currentDateKey),
      state.dailyLogs[state.currentDateKey]
    );
  }
}

function getCurrentLog() {
  return state.dailyLogs[state.currentDateKey];
}

function getSelectedLog() {
  return state.dailyLogs[state.selectedLogDate] || null;
}

function getYesterdayLog() {
  const today = new Date(`${state.currentDateKey}T00:00:00`);
  today.setDate(today.getDate() - 1);
  return state.dailyLogs[getDateKey(today)] || null;
}

function shouldShowBootOnLaunch() {
  const boot = state.settings.bootSequence;
  const log = getCurrentLog();
  if (!boot.showOnLaunch) {
    return false;
  }
  if (boot.showEveryOpen) {
    return true;
  }
  const missionDone = log.bootSequence.missionStatement.completed;
  const timeMachineDone = !boot.requireTimeMachine || log.bootSequence.timeMachine10m.completed;
  return !(missionDone && timeMachineDone);
}

function initializeState() {
  state.settings = loadSettings();
  state.dailyLogs = loadDailyLogs();
  state.currentDateKey = getDateKey();
  ensureCurrentLog();
  saveJson(STORAGE_KEYS.dailyLogs, state.dailyLogs);
  state.selectedLogDate = state.currentDateKey;
  hydrateTimerFromLog();
  state.bootUnlocked = !shouldShowBootOnLaunch();
  state.activeScreen = state.bootUnlocked ? "today" : "boot";
  state.bootStep = "mission";
}

function hydrateTimerFromLog() {
  const used = Math.min(getCurrentLog().bootSequence.timeMachine10m.timerSecondsUsed || 0, 600);
  state.timerRemainingSeconds = Math.max(0, 600 - used);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    toast.classList.add("hidden");
  }, 1800);
}

function escapeHtml(text) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function setBootUnlocked() {
  state.bootUnlocked = true;
  state.activeScreen = "today";
  stopTimer();
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
  container.innerHTML = MISSION_SECTIONS.map((section) => {
    const body = state.settings.missionStatement[section.key] || "";
    return `
      <article class="card">
        <h4 class="mission-card-title">${escapeHtml(section.title)}</h4>
        ${section.subtitle ? `<p class="mission-card-subtitle">${escapeHtml(section.subtitle)}</p>` : ""}
        <p class="mission-card-body">${escapeHtml(body)}</p>
      </article>
    `;
  }).join("");
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

function renderRoutineList(containerId, items, values, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = items
    .map((item) => {
      const link = item.linkKey ? state.settings.links[item.linkKey] : "";
      const linkMarkup = item.textOnly
        ? "<span>Obsidian内リンク扱い</span>"
        : link
          ? `<a href="${escapeHtml(link)}" target="_blank" rel="noreferrer noopener">別タブで開く</a>`
          : "<span>リンクなし</span>";

      return `
        <div class="link-check-item">
          <div class="link-check-content">
            <input type="checkbox" data-routine-type="${type}" data-routine-key="${item.key}" ${values[item.key] ? "checked" : ""} />
            <div class="link-meta">
              <strong>${escapeHtml(item.label)}</strong>
              ${item.linkKey || item.textOnly ? linkMarkup : "<span>チェックのみ</span>"}
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderHandoff() {
  const handoff = document.getElementById("handoff-content");
  const yesterdayLog = getYesterdayLog();
  const currentFutureAction = getCurrentLog().bootSequence.timeMachine10m.futureVision.todayActionFromFuture;
  const items = [
    {
      label: "昨日の明日のNEXT ACTION",
      value: yesterdayLog ? yesterdayLog.reflection.nextAction : "",
    },
    {
      label: "昨日の明日のリマインド",
      value: yesterdayLog && yesterdayLog.tomorrowReminder.length
        ? yesterdayLog.tomorrowReminder.map((item) => item.text).filter(Boolean).join(" / ")
        : "",
    },
    {
      label: "未来から逆算した今日の一手",
      value: currentFutureAction,
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
  const container = document.getElementById("reminder-list");
  const reminders = getCurrentLog().tomorrowReminder;
  if (!reminders.length) {
    container.innerHTML = '<p class="inline-note">まだリマインドはありません。</p>';
    return;
  }

  container.innerHTML = reminders
    .map(
      (item) => `
        <div class="reminder-row">
          <input type="checkbox" data-reminder-toggle="${item.id}" ${item.completed ? "checked" : ""} />
          <input type="text" data-reminder-text="${item.id}" value="${escapeHtml(item.text)}" placeholder="リマインド内容" />
          <button class="ghost-button" data-reminder-delete="${item.id}" type="button">削除</button>
        </div>
      `
    )
    .join("");
}

function calculateProgress() {
  const log = getCurrentLog();
  const morningCompleted = MORNING_ROUTINE_ITEMS.filter((item) => log.morningRoutine[item.key]).length;
  const nightCompleted = NIGHT_ROUTINE_ITEMS.filter((item) => log.nightRoutine[item.key]).length;
  const mitCount = Object.values(log.mit).filter(Boolean).length;
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

  const total =
    1 +
    MORNING_ROUTINE_ITEMS.length +
    3 +
    NIGHT_ROUTINE_ITEMS.length +
    4;

  const percentage = Math.round((achieved / total) * 100);
  return {
    percentage,
    morningCompleted,
    nightCompleted,
    mitCount,
  };
}

function renderTodayProgress() {
  const progress = calculateProgress();
  document.getElementById("progress-text").textContent = `${progress.percentage}%`;
  document.getElementById("progress-fill").style.width = `${progress.percentage}%`;
}

function renderTodayCandidate() {
  const candidate = getCurrentLog().bootSequence.timeMachine10m.futureVision.todayActionFromFuture;
  document.getElementById("mit-candidate-text").textContent = candidate || "未入力";
}

function renderTodayScreen() {
  const log = getCurrentLog();

  document.getElementById("today-title").textContent = `${formatDateLabel(state.currentDateKey)} の設計`;
  renderTodayProgress();
  document.getElementById("week-goal").value = log.weekGoal;
  document.getElementById("fb-learning").value = log.reflection.fbLearning;
  document.getElementById("next-action").value = log.reflection.nextAction;
  document.getElementById("good-and-new").value = log.reflection.goodAndNew;
  document.getElementById("gratitude-person").value = log.gratitude.person;
  document.getElementById("gratitude-what").value = log.gratitude.what;
  document.getElementById("gratitude-weekly-action").value = log.gratitude.weeklyAction;
  document.getElementById("memo").value = log.memo;
  document.getElementById("mit1").value = log.mit.mit1;
  document.getElementById("mit2").value = log.mit.mit2;
  document.getElementById("mit3").value = log.mit.mit3;
  renderTodayCandidate();

  renderHandoff();
  renderRoutineList("morning-routine-list", MORNING_ROUTINE_ITEMS, log.morningRoutine, "morning");
  renderRoutineList("night-routine-list", NIGHT_ROUTINE_ITEMS, log.nightRoutine, "night");
  renderReminders();
}

function renderBootScreen() {
  const log = getCurrentLog();
  updateMissionCompletion();
  updateTimeMachineCompletion();
  renderMissionCards();
  renderTimeMachineFields();

  document.getElementById("mission-readaloud").checked = log.bootSequence.missionStatement.readAloud;
  document.getElementById("mission-principles").checked = log.bootSequence.missionStatement.liveByPrinciples;
  document.getElementById("mission-next-button").disabled = !log.bootSequence.missionStatement.completed;

  document.getElementById("timer-display").textContent = formatCountdown(state.timerRemainingSeconds);
  document.getElementById("tm-visualized").checked = log.bootSequence.timeMachine10m.visualizedFuture;
  document.getElementById("tm-action-visible").checked = log.bootSequence.timeMachine10m.actionVisible;
  document.getElementById("time-machine-complete-button").disabled = !log.bootSequence.timeMachine10m.completed;

  document.getElementById("mission-view").classList.toggle("hidden", state.bootStep !== "mission");
  document.getElementById("time-machine-view").classList.toggle("hidden", state.bootStep !== "timeMachine");
}

function renderLogsScreen() {
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
  const detailTitle = document.getElementById("logs-detail-title");
  const detail = document.getElementById("logs-detail-content");

  if (!log) {
    detailTitle.textContent = "ログ詳細";
    detail.innerHTML = '<p class="inline-note">表示できるログがありません。</p>';
    return;
  }

  detailTitle.textContent = `${log.date} のログ`;
  detail.innerHTML = `
    <div class="log-detail-block">
      <strong>Boot Sequence</strong>
      <p>Mission Statement: ${log.bootSequence.missionStatement.completed ? "完了" : "未完了"}</p>
      <p>10m Time Machine: ${log.bootSequence.timeMachine10m.completed ? "完了" : "未完了"}</p>
    </div>
    <div class="log-detail-block">
      <strong>今日のMIT</strong>
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

function renderSettingsScreen() {
  const missionContainer = document.getElementById("settings-mission-fields");
  missionContainer.innerHTML = MISSION_SECTIONS.map(
    (section) => `
      <label class="card settings-field">
        <span>${escapeHtml(section.title)}${section.subtitle ? ` / ${escapeHtml(section.subtitle)}` : ""}</span>
        <textarea data-settings-mission="${section.key}" rows="8">${escapeHtml(
          state.settings.missionStatement[section.key] || ""
        )}</textarea>
      </label>
    `
  ).join("");

  const bootContainer = document.getElementById("settings-boot-fields");
  const bootFields = [
    { key: "showOnLaunch", label: "起動時にMission Statementを表示する" },
    { key: "showEveryOpen", label: "開くたびに表示する" },
    { key: "requireReadAloud", label: "音読チェックを必須にする" },
    { key: "requireTimeMachine", label: "10m Time Machineを必須にする" },
  ];
  bootContainer.innerHTML = bootFields
    .map(
      (field) => `
        <label class="checkbox-row">
          <input type="checkbox" data-settings-boot="${field.key}" ${state.settings.bootSequence[field.key] ? "checked" : ""} />
          <span>${escapeHtml(field.label)}</span>
        </label>
      `
    )
    .join("");

  const linkContainer = document.getElementById("settings-link-fields");
  linkContainer.innerHTML = LINK_DEFINITIONS.map(
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
  renderBootScreen();
  renderTodayScreen();
  renderLogsScreen();
  renderSettingsScreen();
  renderOutputPanel();
}

function openOutput(title, kicker, content) {
  state.output = {
    open: true,
    title,
    kicker,
    content,
  };
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
    "## MIT",
    `- [${mark(log.mit.mit1)}] MIT1: ${log.mit.mit1}`,
    `- [${mark(log.mit.mit2)}] MIT2: ${log.mit.mit2}`,
    `- [${mark(log.mit.mit3)}] MIT3: ${log.mit.mit3}`,
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
    ...(log.tomorrowReminder.length
      ? log.tomorrowReminder.map((item) => `- [${mark(item.completed)}] ${item.text}`)
      : ["- [ ]"]),
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
  if (type === "markdown") {
    openOutput(`${log.date} Markdown`, "Markdown", buildMarkdown(log));
    return;
  }
  openOutput(`${log.date} JSON`, "JSON", buildJson(log));
}

function exportSelected(type) {
  const log = getSelectedLog();
  if (!log) {
    return;
  }
  if (type === "markdown") {
    openOutput(`${log.date} Markdown`, "Markdown", buildMarkdown(log));
    return;
  }
  openOutput(`${log.date} JSON`, "JSON", buildJson(log));
}

function stopTimer() {
  if (state.timerIntervalId) {
    window.clearInterval(state.timerIntervalId);
    state.timerIntervalId = null;
  }
}

function startTimer() {
  if (state.timerIntervalId || state.timerRemainingSeconds <= 0) {
    return;
  }
  state.timerIntervalId = window.setInterval(() => {
    if (state.timerRemainingSeconds <= 0) {
      stopTimer();
      return;
    }
    state.timerRemainingSeconds -= 1;
    getCurrentLog().bootSequence.timeMachine10m.timerSecondsUsed = Math.min(600, 600 - state.timerRemainingSeconds);
    renderBootScreen();
  }, 1000);
}

function resetTimer() {
  stopTimer();
  state.timerRemainingSeconds = 600;
  getCurrentLog().bootSequence.timeMachine10m.timerSecondsUsed = 0;
  persistDailyLogs(false);
  renderBootScreen();
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
  renderTodayScreen();
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
  renderTodayProgress();
  return true;
}

function copyText(value) {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    return navigator.clipboard.writeText(value);
  }

  const output = document.getElementById("output-content");
  output.focus();
  output.select();
  const succeeded = document.execCommand("copy");
  return succeeded ? Promise.resolve() : Promise.reject(new Error("copy failed"));
}

function handleClick(event) {
  const target = event.target;

  if (target.id === "mission-next-button") {
    persistDailyLogs(true);
    if (state.settings.bootSequence.requireTimeMachine) {
      state.bootStep = "timeMachine";
    } else {
      setBootUnlocked();
    }
    renderApp();
    return;
  }

  if (target.id === "time-machine-complete-button") {
    updateTimeMachineCompletion();
    persistDailyLogs(true);
    setBootUnlocked();
    renderApp();
    return;
  }

  if (target.id === "timer-start-button") {
    startTimer();
    return;
  }

  if (target.id === "timer-pause-button") {
    stopTimer();
    persistDailyLogs(false);
    return;
  }

  if (target.id === "timer-reset-button") {
    resetTimer();
    return;
  }

  if (target.id === "apply-mit-candidate-button") {
    const candidate = getCurrentLog().bootSequence.timeMachine10m.futureVision.todayActionFromFuture;
    if (candidate) {
      getCurrentLog().mit.mit1 = candidate;
      persistDailyLogs(true);
      renderTodayScreen();
    }
    return;
  }

  if (target.id === "add-reminder-button") {
    addReminder();
    return;
  }

  if (target.id === "dashboard-save-button" || target.id === "quick-save-button") {
    persistDailyLogs(true);
    return;
  }

  if (target.id === "settings-save-button") {
    persistSettings(true);
    renderApp();
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
    const content = document.getElementById("output-content").value;
    copyText(content).then(
      () => showToast("コピーしました"),
      () => showToast("コピーに失敗しました")
    );
    return;
  }

  if (target.id === "close-output-button") {
    closeOutput();
    return;
  }

  if (target.dataset.screen) {
    state.activeScreen = target.dataset.screen;
    renderApp();
    return;
  }

  if (target.dataset.logDate) {
    state.selectedLogDate = target.dataset.logDate;
    renderLogsScreen();
    return;
  }

  if (target.dataset.reminderDelete) {
    getCurrentLog().tomorrowReminder = getCurrentLog().tomorrowReminder.filter(
      (item) => item.id !== target.dataset.reminderDelete
    );
    persistDailyLogs(true);
    renderTodayScreen();
    renderLogsScreen();
  }
}

function handleChange(event) {
  const target = event.target;
  const log = getCurrentLog();

  if (target.id === "mission-readaloud") {
    log.bootSequence.missionStatement.readAloud = target.checked;
    updateMissionCompletion();
    persistDailyLogs(false);
    renderBootScreen();
    return;
  }

  if (target.id === "mission-principles") {
    log.bootSequence.missionStatement.liveByPrinciples = target.checked;
    updateMissionCompletion();
    persistDailyLogs(false);
    renderBootScreen();
    return;
  }

  if (target.id === "tm-visualized") {
    log.bootSequence.timeMachine10m.visualizedFuture = target.checked;
    updateTimeMachineCompletion();
    persistDailyLogs(false);
    renderBootScreen();
    return;
  }

  if (target.id === "tm-action-visible") {
    log.bootSequence.timeMachine10m.actionVisible = target.checked;
    updateTimeMachineCompletion();
    persistDailyLogs(false);
    renderBootScreen();
    return;
  }

  if (target.dataset.routineType) {
    const group = target.dataset.routineType === "morning" ? log.morningRoutine : log.nightRoutine;
    group[target.dataset.routineKey] = target.checked;
    persistDailyLogs(false);
    renderTodayScreen();
    renderLogsScreen();
    return;
  }

  if (target.dataset.reminderToggle) {
    const reminder = log.tomorrowReminder.find((item) => item.id === target.dataset.reminderToggle);
    if (reminder) {
      reminder.completed = target.checked;
      persistDailyLogs(false);
      renderLogsScreen();
    }
    return;
  }

  if (target.dataset.settingsBoot) {
    state.settings.bootSequence[target.dataset.settingsBoot] = target.checked;
    persistSettings(false);
    updateMissionCompletion();
    updateTimeMachineCompletion();
    if (!state.settings.bootSequence.requireTimeMachine && state.bootStep === "timeMachine") {
      setBootUnlocked();
    }
    renderApp();
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
      renderTodayCandidate();
      renderHandoff();
    }
    renderTodayProgress();
    return;
  }

  if (target.dataset.reminderText) {
    const reminder = getCurrentLog().tomorrowReminder.find((item) => item.id === target.dataset.reminderText);
    if (reminder) {
      reminder.text = target.value;
      persistDailyLogs(false);
      renderLogsScreen();
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
    renderTodayScreen();
    return;
  }
}

function attachEventListeners() {
  document.addEventListener("click", handleClick);
  document.addEventListener("change", handleChange);
  document.addEventListener("input", handleInput);
}

function boot() {
  initializeState();
  attachEventListeners();
  renderApp();
}

boot();
