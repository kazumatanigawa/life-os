const STORAGE_KEYS = {
  dailyLogs: "lifeOS_dailyLogs",
  settings: "lifeOS_settings",
};

const AIRMATE_WEB_URL = "https://airmate.jp/realtime/";
const AIRMATE_APP_URL =
  "https://faq.mate.airregi.jp/hc/ja/articles/4507008511646-%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%B3%E7%89%88-Air%E3%83%A1%E3%82%A4%E3%83%88-%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E6%96%B9%E6%B3%95";

const DAY_OPS_TYPES = {
  contact: "contact",
  schedule121: "schedule121",
  task: "task",
};

const DAY_OPS_TYPE_CONFIG = {
  [DAY_OPS_TYPES.contact]: {
    bucket: "contacts",
    label: "連絡",
  },
  [DAY_OPS_TYPES.schedule121]: {
    bucket: "schedule121",
    label: "121日程調整",
  },
  [DAY_OPS_TYPES.task]: {
    bucket: "tasks",
    label: "タスク",
  },
};

const MISSION_SECTIONS = [
  {
    key: "vision",
    title: "VISION",
    subtitle: "どんな人生が理想か？",
    value:
      "いついかなる瞬間も最高にかっこいいアーティストの人生を生き抜いた\n常に出会った人全てをファンにする生き方だった\n原則中心で自分に軸があり、自分自身を磨くことに最も重点を置いた人生だった\n主体性を発揮し自分の人生の主導権を常に握っていた\n自分の弱みと他人の強みを比較する考え方をしていたので周りの人を最大限に奏るコミニュケーションを常にしていた\nお金を気にせず生活できる仕組みづくりができた\n好きな時に好きな本を読み、好きな物を食べ、好きな場所へ行けた\n価値あるものだけにお金を払っていた\n五感が研ぎ澄まされていた\n心身ともに健康で理想の逆三角形の体型を維持できた\n親孝行ができた\n人の心を掴む達人になった\n関わる人全ての人生を変える絶大な影響力を持っていた\nあらゆる不可能を可能にした",
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
  { key: "financeNews", label: "今朝のニュース", linkKey: "morningNewsShortcut", hint: "タップして送信" },
  { key: "yearSchedule", label: "年スケ", linkKey: "yearSchedule", hint: "タップして開く" },
  { key: "googleCalendar", label: "Google Calendar", linkKey: "googleCalendar", hint: "タップして開く" },
  { key: "storeStatus", label: "店舗状況確認", linkKey: "storeStatus", hint: "タップして開く" },
  { key: "weeklyReport", label: "週次報告チェック", linkKey: "weeklyReport", hint: "タップして開く" },
  { key: "gakumeizaMeetingLog", label: "樂明座会議ログ", linkKey: "gakumeizaMeetingLog", hint: "タップして開く" },
];

const NIGHT_ROUTINE_ITEMS = [
  { key: "threeMeals", label: "3食", hint: "チェックのみ" },
  { key: "water", label: "水500ml x 3", hint: "チェックのみ" },
  { key: "baduanjin", label: "八段錦", hint: "チェックのみ" },
  { key: "oneMinuteReading", label: "1分読書", hint: "チェックのみ" },
  { key: "amonSalesReport", label: "亜門売上報告", linkKey: "amonSalesReport", hint: "タップして開く" },
  { key: "amonMasterSheet", label: "亜門マスターシート", linkKey: "amonMasterSheet", hint: "タップして開く" },
  { key: "householdBook", label: "家計簿", linkKey: "householdBook", hint: "タップして開く" },
  { key: "kpiLog", label: "KPI Log 2026", linkKey: "kpiLog", hint: "タップして開く" },
];

const TIME_MACHINE_FIELDS = [
  { key: "abilities", label: "何ができるようになっているか" },
  { key: "priorities", label: "何を重視しているか" },
  { key: "appearance", label: "どんな見た目をしているか" },
  { key: "influence", label: "誰にどんな影響を与えているか" },
  { key: "place", label: "どこにいるか" },
  { key: "incomeStructure", label: "どんな収入構造を持っているか" },
  { key: "artAndBusiness", label: "どんな作品・事業を生み出しているか" },
  { key: "messageFromFutureSelf", label: "3年後の自分から今日の自分への一言" },
  { key: "todayActionFromFuture", label: "未来から逆算した今日の最重要アクション" },
];

const LINK_DEFINITIONS = [
  { key: "morningNewsShortcut", label: "今朝のニュースショートカット" },
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
    morningNewsShortcut: "shortcuts://run-shortcut?name=%E4%BB%8A%E6%9C%9D%E3%81%AE%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9%E9%80%81%E4%BF%A1",
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
  dayOpsDrafts: {
    contact: {
      name: "",
      tool: "",
      requirement: "",
    },
    schedule121: {
      name: "",
      job: "",
      tool: "",
    },
    task: {
      title: "",
      goal: "",
      estimatedMinutes: "",
      when: "",
    },
  },
};

function createDefaultReminder(overrides = {}) {
  return {
    id: `reminder-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    text: "",
    completed: false,
    autoGenerated: false,
    sourceKey: null,
    ...overrides,
  };
}

function createDefaultFutureVision() {
  return Object.fromEntries(TIME_MACHINE_FIELDS.map((field) => [field.key, ""]));
}

function createDefaultDayOpsItem(type, overrides = {}) {
  const now = new Date().toISOString();
  const base = {
    id: `${type}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    type,
    status: "open",
    sourceDate: state.currentDateKey || getDateKey(),
    carriedOverFrom: null,
    carriedForwardTo: null,
    createdAt: now,
    updatedAt: now,
    completedAt: null,
  };

  if (type === DAY_OPS_TYPES.contact) {
    return {
      ...base,
      name: "",
      tool: "",
      requirement: "",
      ...overrides,
    };
  }

  if (type === DAY_OPS_TYPES.schedule121) {
    return {
      ...base,
      name: "",
      job: "",
      tool: "",
      ...overrides,
    };
  }

  return {
    ...base,
    title: "",
    goal: "",
    estimatedMinutes: "",
    when: "",
    ...overrides,
  };
}

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
        futureVision: createDefaultFutureVision(),
      },
    },
    weekGoal: "",
    morningRoutine: Object.fromEntries(MORNING_ROUTINE_ITEMS.map((item) => [item.key, false])),
    mit: {
      mit1: "",
      mit2: "",
      mit3: "",
    },
    dayOps: {
      contacts: [],
      schedule121: [],
      tasks: [],
      expenseMemo: "",
      carryOverSummaryDismissed: false,
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

function hydrateDayOpsItem(type, savedItem) {
  return mergeWithDefaults(createDefaultDayOpsItem(type), savedItem || {});
}

function hydrateReminder(savedReminder) {
  return mergeWithDefaults(createDefaultReminder(), savedReminder || {});
}

function hydrateFutureVision(savedFutureVision) {
  const defaults = createDefaultFutureVision();
  const saved = isPlainObject(savedFutureVision) ? savedFutureVision : {};
  const appearanceParts = [saved.appearance, saved.facialExpression, saved.bodyCondition]
    .map((value) => String(value || "").trim())
    .filter(Boolean);

  return {
    ...defaults,
    abilities: saved.abilities || "",
    priorities: saved.priorities || "",
    appearance: appearanceParts.join(" / "),
    influence: saved.influence || "",
    place: saved.place || "",
    incomeStructure: saved.incomeStructure || "",
    artAndBusiness: saved.artAndBusiness || "",
    messageFromFutureSelf: saved.messageFromFutureSelf || "",
    todayActionFromFuture: saved.todayActionFromFuture || "",
  };
}

function hydrateDailyLog(dateKey, savedLog) {
  const merged = mergeWithDefaults(createDefaultDailyLog(dateKey), savedLog || {});
  merged.bootSequence.timeMachine10m.futureVision = hydrateFutureVision(
    savedLog && savedLog.bootSequence && savedLog.bootSequence.timeMachine10m
      ? savedLog.bootSequence.timeMachine10m.futureVision
      : merged.bootSequence.timeMachine10m.futureVision
  );
  merged.dayOps.contacts = Array.isArray(merged.dayOps.contacts)
    ? merged.dayOps.contacts.map((item) => hydrateDayOpsItem(DAY_OPS_TYPES.contact, item))
    : [];
  merged.dayOps.schedule121 = Array.isArray(merged.dayOps.schedule121)
    ? merged.dayOps.schedule121.map((item) => hydrateDayOpsItem(DAY_OPS_TYPES.schedule121, item))
    : [];
  merged.dayOps.tasks = Array.isArray(merged.dayOps.tasks)
    ? merged.dayOps.tasks.map((item) => hydrateDayOpsItem(DAY_OPS_TYPES.task, item))
    : [];
  merged.tomorrowReminder = Array.isArray(merged.tomorrowReminder)
    ? merged.tomorrowReminder.map((item) => hydrateReminder(item))
    : [];
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
  const datePart = date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const weekday = date.toLocaleDateString("ja-JP", {
    weekday: "short",
  });
  return `${datePart} (${weekday})`;
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
    hydrated[dateKey] = hydrateDailyLog(dateKey, savedLogs[dateKey]);
  });
  return hydrated;
}

function persistSettings(showToastMessage = false) {
  saveJson(STORAGE_KEYS.settings, state.settings);
  if (showToastMessage) {
    showToast("設定を保存しました");
  }
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

function getDayOpsCollections(log = getCurrentLog()) {
  return [
    { type: DAY_OPS_TYPES.contact, items: log.dayOps.contacts },
    { type: DAY_OPS_TYPES.schedule121, items: log.dayOps.schedule121 },
    { type: DAY_OPS_TYPES.task, items: log.dayOps.tasks },
  ];
}

function getAllDayOpsItems(log = getCurrentLog()) {
  return getDayOpsCollections(log).flatMap((entry) => entry.items);
}

function getCarryOverReminderText(item) {
  if (item.type === DAY_OPS_TYPES.contact) {
    return `連絡: ${item.name} / ${item.tool || "ツール未設定"} / ${item.requirement || "要件未設定"}`;
  }
  if (item.type === DAY_OPS_TYPES.schedule121) {
    return `121日程調整: ${item.name} / ${item.job || "仕事未設定"} / ${item.tool || "連絡手段未設定"}`;
  }
  return `タスク: ${item.title} / ${item.estimatedMinutes || "時間未設定"}分 / ${item.when || "未設定"}`;
}

function syncCarryOverReminders(log = getCurrentLog()) {
  const carryOverItems = getAllDayOpsItems(log).filter((item) => item.status === "carryOver");
  const desiredMap = new Map(
    carryOverItems.map((item) => [
      `${item.type}:${item.id}`,
      {
        text: getCarryOverReminderText(item),
      },
    ])
  );

  let reminders = log.tomorrowReminder.filter((item) => {
    if (!item.autoGenerated) {
      return true;
    }
    return desiredMap.has(item.sourceKey);
  });

  reminders = reminders.map((item) => {
    if (item.autoGenerated && desiredMap.has(item.sourceKey)) {
      return {
        ...item,
        text: desiredMap.get(item.sourceKey).text,
      };
    }
    return item;
  });

  desiredMap.forEach((value, sourceKey) => {
    if (!reminders.some((item) => item.autoGenerated && item.sourceKey === sourceKey)) {
      reminders.push(
        createDefaultReminder({
          text: value.text,
          autoGenerated: true,
          sourceKey,
        })
      );
    }
  });

  log.tomorrowReminder = reminders;
}

function persistDailyLogs(showToastMessage = false) {
  const log = getCurrentLog();
  syncCarryOverReminders(log);
  log.updatedAt = new Date().toISOString();
  saveJson(STORAGE_KEYS.dailyLogs, state.dailyLogs);
  if (showToastMessage) {
    showToast("保存しました");
  }
}

function inheritCarryOverItems() {
  const currentLog = getCurrentLog();
  const yesterdayLog = getYesterdayLog();
  if (!yesterdayLog) {
    return;
  }

  getDayOpsCollections(yesterdayLog).forEach(({ type, items }) => {
    const bucketName = DAY_OPS_TYPE_CONFIG[type].bucket;
    const currentBucket = currentLog.dayOps[bucketName];
    items
      .filter((item) => item.status === "carryOver")
      .forEach((item) => {
        if (item.carriedForwardTo === currentLog.date || currentBucket.some((entry) => entry.id === item.id)) {
          return;
        }
        currentBucket.push(
          hydrateDayOpsItem(type, {
            ...item,
            status: "open",
            carriedOverFrom: yesterdayLog.date,
            carriedForwardTo: null,
            completedAt: null,
            updatedAt: new Date().toISOString(),
          })
        );
        item.carriedForwardTo = currentLog.date;
      });
  });
}

function ensureCurrentLog() {
  if (!state.dailyLogs[state.currentDateKey]) {
    state.dailyLogs[state.currentDateKey] = createDefaultDailyLog(state.currentDateKey);
  }
  state.dailyLogs[state.currentDateKey] = hydrateDailyLog(state.currentDateKey, state.dailyLogs[state.currentDateKey]);
  inheritCarryOverItems();
  persistDailyLogs(false);
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
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function forceScrollTop() {
  scrollToTop();
  window.requestAnimationFrame(() => {
    scrollToTop();
  });
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

function hasUnresolvedDayOps(log = getCurrentLog()) {
  return getAllDayOpsItems(log).some((item) => item.status === "open");
}

function countUnresolvedDayOps(log = getCurrentLog()) {
  return getAllDayOpsItems(log).filter((item) => item.status === "open").length;
}

function canEnterNight() {
  return !hasUnresolvedDayOps();
}

function showScreen(screen) {
  if (screen === "night" && !canEnterNight()) {
    showToast("タスクの未整理項目を完了か明日回しにしてください");
    state.activeScreen = "dayOps";
    renderScreenVisibility();
    renderFloatingProgressVisibility();
    renderSaveFabVisibility();
    forceScrollTop();
    return;
  }

  state.activeScreen = screen;
  renderScreenVisibility();
  renderFloatingProgressVisibility();
  renderSaveFabVisibility();
  forceScrollTop();
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
  const target = input.closest(".toggle-card, .routine-tile, .reminder-row");
  if (target) {
    target.classList.toggle("is-checked", input.checked);
  }
}

function updateTimerUi() {
  const text = formatCountdown(state.timerRemainingSeconds);
  const timerDisplay = document.getElementById("timer-display");
  const floatingTimerText = document.getElementById("floating-timer-text");
  timerDisplay.textContent = text;
  floatingTimerText.textContent = text;
  const done = state.timerRemainingSeconds <= 0;
  timerDisplay.classList.toggle("is-complete", done);
  document.getElementById("floating-timer").classList.toggle("is-complete", done);
}

function renderBootState() {
  const log = getCurrentLog();
  updateMissionCompletion();
  updateTimeMachineCompletion();

  document.getElementById("mission-readaloud").checked = log.bootSequence.missionStatement.readAloud;
  document.getElementById("mission-principles").checked = log.bootSequence.missionStatement.liveByPrinciples;
  document.getElementById("mission-next-button").disabled = !log.bootSequence.missionStatement.completed;
  document.getElementById("timer-start-button").disabled = Boolean(state.timerIntervalId) || state.timerRemainingSeconds <= 0;
  document.getElementById("tm-visualized").checked = log.bootSequence.timeMachine10m.visualizedFuture;
  document.getElementById("tm-action-visible").checked = log.bootSequence.timeMachine10m.actionVisible;
  document.getElementById("time-machine-complete-button").disabled = !log.bootSequence.timeMachine10m.completed;

  updateTimerUi();
  document.querySelectorAll("#boot-screen input[type='checkbox']").forEach(toggleCheckedClass);
  document.querySelector(".boot-hero").classList.toggle("hidden", state.bootStep === "timeMachine");
  document.getElementById("mission-view").classList.toggle("hidden", state.bootStep !== "mission");
  document.getElementById("time-machine-view").classList.toggle("hidden", state.bootStep !== "timeMachine");
  renderFloatingTimerVisibility();
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
      label: "今日のアクション",
      value: yesterdayLog ? yesterdayLog.reflection.nextAction : "",
    },
    {
      label: "昨日のリマインド",
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
  syncCarryOverReminders(getCurrentLog());
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
  const dayOpsItems = getAllDayOpsItems(log);
  const dayOpsDone = dayOpsItems.filter((item) => item.status !== "open").length;
  const achieved = [
    log.bootSequence.missionStatement.completed && (!state.settings.bootSequence.requireTimeMachine || log.bootSequence.timeMachine10m.completed),
    ...MORNING_ROUTINE_ITEMS.map((item) => log.morningRoutine[item.key]),
    ...Object.values(log.mit).map(Boolean),
    ...NIGHT_ROUTINE_ITEMS.map((item) => log.nightRoutine[item.key]),
    Boolean(log.reflection.fbLearning.trim()),
    Boolean(log.reflection.nextAction.trim()),
    Boolean(log.reflection.goodAndNew.trim()),
    gratitudeDone,
    ...Array(dayOpsDone).fill(true),
  ].filter(Boolean).length;

  const total = 1 + MORNING_ROUTINE_ITEMS.length + 3 + NIGHT_ROUTINE_ITEMS.length + 4 + dayOpsItems.length;
  return total ? Math.round((achieved / total) * 100) : 0;
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
  const available = state.bootUnlocked && ["today", "dayOps", "night"].includes(state.activeScreen);
  const visible = available && window.scrollY > 110;
  floating.classList.toggle("hidden", !available);
  floating.classList.toggle("visible", visible);
}

function renderFloatingTimerVisibility() {
  const floating = document.getElementById("floating-timer");
  const visible = state.activeScreen === "boot" && state.bootStep === "timeMachine";
  floating.classList.toggle("hidden", !visible);
  floating.classList.toggle("visible", visible);
}

function renderSaveFabVisibility() {
  const button = document.getElementById("floating-save-button");
  const visibleScreens = ["today", "dayOps", "night", "settings"];
  const visible = visibleScreens.includes(state.activeScreen) || (state.activeScreen === "boot" && state.bootStep === "timeMachine");
  button.classList.toggle("hidden", !visible);
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

function renderCarryOverSummary() {
  const container = document.getElementById("carryover-summary-list");
  const log = getCurrentLog();
  const summaries = [
    {
      label: "連絡",
      count: log.dayOps.contacts.filter((item) => Boolean(item.carriedOverFrom)).length,
    },
    {
      label: "121日程調整",
      count: log.dayOps.schedule121.filter((item) => Boolean(item.carriedOverFrom)).length,
    },
    {
      label: "タスク",
      count: log.dayOps.tasks.filter((item) => Boolean(item.carriedOverFrom)).length,
    },
  ];

  container.innerHTML = summaries
    .map(
      (item) => `
        <div class="carryover-summary-item">
          <strong>${escapeHtml(item.label)}</strong>
          <span>${item.count ? `${item.count}件を引き継ぎ` : "引き継ぎなし"}</span>
        </div>
      `
    )
    .join("");
}

function getDayOpsStatusLabel(status) {
  if (status === "done") {
    return "完了";
  }
  if (status === "carryOver") {
    return "明日に回す";
  }
  return "未整理";
}

function buildDayOpsMeta(item) {
  if (item.type === DAY_OPS_TYPES.contact) {
    return [
      item.tool ? `ツール: ${item.tool}` : "",
      item.requirement ? `要件: ${item.requirement}` : "",
      item.carriedOverFrom ? `前日: ${item.carriedOverFrom}` : "",
    ].filter(Boolean);
  }
  if (item.type === DAY_OPS_TYPES.schedule121) {
    return [
      item.job ? `仕事: ${item.job}` : "",
      item.tool ? `ツール: ${item.tool}` : "",
      item.carriedOverFrom ? `前日: ${item.carriedOverFrom}` : "",
    ].filter(Boolean);
  }
  return [
    item.goal ? `ゴール: ${item.goal}` : "",
    item.estimatedMinutes ? `${item.estimatedMinutes}分` : "",
    item.when ? `いつ: ${item.when}` : "",
    item.carriedOverFrom ? `前日: ${item.carriedOverFrom}` : "",
  ].filter(Boolean);
}

function buildDayOpsTitle(item) {
  if (item.type === DAY_OPS_TYPES.contact) {
    return item.name || "名前未入力";
  }
  if (item.type === DAY_OPS_TYPES.schedule121) {
    return item.name || "名前未入力";
  }
  return item.title || "作業未入力";
}

function renderDayOpsList(containerId, items, type) {
  const container = document.getElementById(containerId);
  if (!items.length) {
    container.innerHTML = '<div class="dayops-empty">まだ項目はありません。</div>';
    return;
  }

  container.innerHTML = items
    .map((item) => {
      const meta = buildDayOpsMeta(item);
      const isOpen = item.status === "open";
      return `
        <article class="dayops-item">
          <div class="dayops-item-header">
            <div class="dayops-item-content">
              <h4 class="dayops-item-title">${escapeHtml(buildDayOpsTitle(item))}</h4>
              <div class="dayops-item-meta">
                <span class="status-badge status-${item.status}">${escapeHtml(getDayOpsStatusLabel(item.status))}</span>
                ${meta.map((entry) => `<span class="meta-chip">${escapeHtml(entry)}</span>`).join("")}
              </div>
            </div>
          </div>
          <div class="dayops-actions">
            <button class="subtle-button" data-dayops-status="${type}:${item.id}:done" data-status-action="done" type="button">完了</button>
            <button class="subtle-button" data-dayops-status="${type}:${item.id}:carryOver" data-status-action="carryOver" type="button">明日に回す</button>
            <button class="subtle-button" data-dayops-status="${type}:${item.id}:reset" data-status-action="reset" type="button" ${isOpen ? "disabled" : ""}>戻す</button>
            <button class="ghost-button" data-dayops-delete="${type}:${item.id}" type="button">削除</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderDayOps() {
  const log = getCurrentLog();
  document.getElementById("contact-name").value = state.dayOpsDrafts.contact.name;
  document.getElementById("contact-tool").value = state.dayOpsDrafts.contact.tool;
  document.getElementById("contact-requirement").value = state.dayOpsDrafts.contact.requirement;
  document.getElementById("schedule-name").value = state.dayOpsDrafts.schedule121.name;
  document.getElementById("schedule-job").value = state.dayOpsDrafts.schedule121.job;
  document.getElementById("schedule-tool").value = state.dayOpsDrafts.schedule121.tool;
  document.getElementById("task-title").value = state.dayOpsDrafts.task.title;
  document.getElementById("task-goal").value = state.dayOpsDrafts.task.goal;
  document.getElementById("task-estimated-minutes").value = state.dayOpsDrafts.task.estimatedMinutes;
  document.getElementById("task-when").value = state.dayOpsDrafts.task.when;
  document.getElementById("expense-memo").value = log.dayOps.expenseMemo;

  renderCarryOverSummary();
  renderDayOpsList("contact-list", log.dayOps.contacts, DAY_OPS_TYPES.contact);
  renderDayOpsList("schedule121-list", log.dayOps.schedule121, DAY_OPS_TYPES.schedule121);
  renderDayOpsList("task-list", log.dayOps.tasks, DAY_OPS_TYPES.task);

  const unresolved = countUnresolvedDayOps(log);
  document.getElementById("dayops-status-note").textContent = unresolved ? `未整理 ${unresolved} 件` : "未整理 0 件";
  document.getElementById("dayops-next-button").disabled = unresolved > 0;
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

function formatDayOpsPreview(items) {
  if (!items.length) {
    return "なし";
  }
  return items
    .map((item) => `${buildDayOpsTitle(item)} (${getDayOpsStatusLabel(item.status)})`)
    .join(" / ");
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
      <strong>タスク</strong>
      <p>連絡: ${escapeHtml(formatDayOpsPreview(log.dayOps.contacts))}</p>
      <p>121日程調整: ${escapeHtml(formatDayOpsPreview(log.dayOps.schedule121))}</p>
      <p>タスク: ${escapeHtml(formatDayOpsPreview(log.dayOps.tasks))}</p>
      <p>支出メモ: ${escapeHtml(log.dayOps.expenseMemo || "未入力")}</p>
    </div>
    <div class="log-detail-block">
      <strong>明日のNEXT ACTION</strong>
      <p>${escapeHtml(log.reflection.nextAction || "未入力")}</p>
    </div>
    <div class="log-detail-block">
      <strong>明日のリマインド</strong>
      <p>${escapeHtml(log.tomorrowReminder.map((item) => item.text).filter(Boolean).join(" / ") || "未入力")}</p>
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
  document.getElementById("day-ops-screen").classList.toggle("hidden", state.activeScreen !== "dayOps");
  document.getElementById("night-screen").classList.toggle("hidden", state.activeScreen !== "night");
  document.getElementById("logs-screen").classList.toggle("hidden", state.activeScreen !== "logs");
  document.getElementById("settings-screen").classList.toggle("hidden", state.activeScreen !== "settings");
  document.getElementById("app-nav").classList.toggle("hidden", !state.bootUnlocked);
  document.body.classList.toggle("nav-visible", state.bootUnlocked);
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === state.activeScreen);
  });
  renderFloatingTimerVisibility();
}

function renderApp() {
  document.getElementById("current-date-display").textContent = formatDateLabel(state.currentDateKey);
  renderScreenVisibility();
  renderMissionCards();
  renderTimeMachineFields();
  renderBootState();
  renderToday();
  renderDayOps();
  renderNight();
  renderLogs();
  renderSettings();
  renderOutputPanel();
  renderFloatingProgressVisibility();
  renderSaveFabVisibility();
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

function formatMarkdownDayOps(items, formatter) {
  if (!items.length) {
    return ["- なし"];
  }
  return items.map((item) => `- [${item.status === "open" ? " " : "x"}] ${formatter(item)} (${getDayOpsStatusLabel(item.status)})`);
}

function buildMarkdown(log) {
  const mark = (value) => (value ? "x" : " ");
  const lines = [
    "# LIFE GOAL",
    "",
    `## ${log.date}`,
    "",
    "## Boot",
    "",
    "### Mission Statement",
    `- [${mark(log.bootSequence.missionStatement.readAloud)}] すべて声に出して読んだ`,
    `- [${mark(log.bootSequence.missionStatement.liveByPrinciples)}] 今日もこの原則で生きる`,
    "",
    "### 10mタイムマシン",
    `- できるようになったこと: ${log.bootSequence.timeMachine10m.futureVision.abilities}`,
    `- 重視していること: ${log.bootSequence.timeMachine10m.futureVision.priorities}`,
    `- 見た目: ${log.bootSequence.timeMachine10m.futureVision.appearance}`,
    `- 影響: ${log.bootSequence.timeMachine10m.futureVision.influence}`,
    `- どこにいるか: ${log.bootSequence.timeMachine10m.futureVision.place}`,
    `- 収入構造: ${log.bootSequence.timeMachine10m.futureVision.incomeStructure}`,
    `- 作品・事業: ${log.bootSequence.timeMachine10m.futureVision.artAndBusiness}`,
    `- 未来の自分からの一言: ${log.bootSequence.timeMachine10m.futureVision.messageFromFutureSelf}`,
    `- 今日の最重要アクション: ${log.bootSequence.timeMachine10m.futureVision.todayActionFromFuture}`,
    "",
    "## Week Goal",
    `- ${log.weekGoal}`,
    "",
    "## 朝ルーティン",
    ...MORNING_ROUTINE_ITEMS.map((item) => `- [${mark(log.morningRoutine[item.key])}] ${item.label}`),
    "",
    "## 今日の最重要3つ",
    `- [${mark(log.mit.mit1)}] 最重要1: ${log.mit.mit1}`,
    `- [${mark(log.mit.mit2)}] 最重要2: ${log.mit.mit2}`,
    `- [${mark(log.mit.mit3)}] 最重要3: ${log.mit.mit3}`,
    "",
    "## タスク / 連絡",
    ...formatMarkdownDayOps(log.dayOps.contacts, (item) => `${item.name} / ${item.tool} / ${item.requirement}`),
    "",
    "## タスク / 121日程調整",
    ...formatMarkdownDayOps(log.dayOps.schedule121, (item) => `${item.name} / ${item.job} / ${item.tool}`),
    "",
    "## タスク / 作業タスク",
    ...formatMarkdownDayOps(log.dayOps.tasks, (item) => `${item.title} / ${item.goal} / ${item.estimatedMinutes}分 / ${item.when}`),
    "",
    "## 支出メモ",
    `- ${log.dayOps.expenseMemo}`,
    "",
    "## 夜ルーティン",
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

function exportCurrentMarkdown() {
  const log = getCurrentLog();
  openOutput(`${log.date} Markdown`, "Markdown", buildMarkdown(log));
}

function exportSelectedMarkdown() {
  const log = getSelectedLog();
  if (!log) {
    return;
  }
  openOutput(`${log.date} Markdown`, "Markdown", buildMarkdown(log));
}

async function shareOutput() {
  const content = document.getElementById("output-content").value;
  if (!content) {
    return;
  }

  if (navigator.share) {
    try {
      await navigator.share({
        title: "LIFE GOAL",
        text: content,
      });
      showToast("共有シートを開きました");
      return;
    } catch (error) {
      if (error && error.name === "AbortError") {
        return;
      }
    }
  }

  copyText(content).then(
    () => showToast("共有に未対応のためコピーしました"),
    () => showToast("共有に失敗しました")
  );
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
    updateTimerUi();
    if (state.timerRemainingSeconds % 5 === 0) {
      persistDailyLogs(false);
    }
    if (state.timerRemainingSeconds <= 0) {
      stopTimer();
      persistDailyLogs(false);
      button.disabled = true;
    }
  }, 1000);
}

function addReminder() {
  const input = document.getElementById("new-reminder-input");
  const value = input.value.trim();
  if (!value) {
    return;
  }
  getCurrentLog().tomorrowReminder.push(
    createDefaultReminder({
      text: value,
    })
  );
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
    case "expense-memo":
      log.dayOps.expenseMemo = value;
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
    if (item.linkKey === "morningNewsShortcut") {
      showToast("今朝のニュース用ショートカットを設定してください");
    } else {
      showToast("リンクが未設定です");
    }
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
  if (item.linkKey === "morningNewsShortcut" || url.startsWith("shortcuts://")) {
    window.location.href = url;
    showToast("ショートカットを起動しました");
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
  showToast("リンクを開き、チェックしました");
}

function addDayOpsItem(type) {
  const log = getCurrentLog();
  const now = new Date().toISOString();

  if (type === DAY_OPS_TYPES.contact) {
    const draft = state.dayOpsDrafts.contact;
    if (!draft.name.trim() && !draft.requirement.trim()) {
      return;
    }
    log.dayOps.contacts.push(
      createDefaultDayOpsItem(type, {
        name: draft.name.trim(),
        tool: draft.tool.trim(),
        requirement: draft.requirement.trim(),
        sourceDate: log.date,
        createdAt: now,
        updatedAt: now,
      })
    );
    state.dayOpsDrafts.contact = { name: "", tool: "", requirement: "" };
  } else if (type === DAY_OPS_TYPES.schedule121) {
    const draft = state.dayOpsDrafts.schedule121;
    if (!draft.name.trim()) {
      return;
    }
    log.dayOps.schedule121.push(
      createDefaultDayOpsItem(type, {
        name: draft.name.trim(),
        job: draft.job.trim(),
        tool: draft.tool.trim(),
        sourceDate: log.date,
        createdAt: now,
        updatedAt: now,
      })
    );
    state.dayOpsDrafts.schedule121 = { name: "", job: "", tool: "" };
  } else {
    const draft = state.dayOpsDrafts.task;
    if (!draft.title.trim()) {
      return;
    }
    log.dayOps.tasks.push(
      createDefaultDayOpsItem(type, {
        title: draft.title.trim(),
        goal: draft.goal.trim(),
        estimatedMinutes: draft.estimatedMinutes ? String(draft.estimatedMinutes).trim() : "",
        when: draft.when.trim(),
        sourceDate: log.date,
        createdAt: now,
        updatedAt: now,
      })
    );
    state.dayOpsDrafts.task = { title: "", goal: "", estimatedMinutes: "", when: "" };
  }

  persistDailyLogs(true);
  renderDayOps();
}

function getDayOpsBucketByType(log, type) {
  const bucketName = DAY_OPS_TYPE_CONFIG[type].bucket;
  return log.dayOps[bucketName];
}

function updateDayOpsStatus(type, id, status) {
  const bucket = getDayOpsBucketByType(getCurrentLog(), type);
  const item = bucket.find((entry) => entry.id === id);
  if (!item) {
    return;
  }
  item.status = status === "reset" ? "open" : status;
  item.updatedAt = new Date().toISOString();
  item.completedAt = item.status === "done" ? item.updatedAt : null;
  if (item.status !== "carryOver") {
    item.carriedForwardTo = null;
  }
  persistDailyLogs(true);
  renderDayOps();
  renderNight();
}

function deleteDayOpsItem(type, id) {
  const bucketName = DAY_OPS_TYPE_CONFIG[type].bucket;
  getCurrentLog().dayOps[bucketName] = getCurrentLog().dayOps[bucketName].filter((item) => item.id !== id);
  persistDailyLogs(true);
  renderDayOps();
  renderNight();
}

function handleClick(event) {
  const target = event.target;

  if (target.id === "mission-next-button") {
    persistDailyLogs(true);
    if (state.settings.bootSequence.requireTimeMachine) {
      state.bootStep = "timeMachine";
      renderBootState();
      renderSaveFabVisibility();
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

  if (target.id === "dayops-next-button") {
    showScreen("night");
    return;
  }

  if (target.id === "floating-save-button") {
    if (state.activeScreen === "settings") {
      persistSettings(true);
    } else {
      persistDailyLogs(true);
    }
    return;
  }

  if (target.id === "add-reminder-button") {
    addReminder();
    return;
  }

  if (target.id === "markdown-export-button") {
    exportCurrentMarkdown();
    return;
  }

  if (target.id === "logs-markdown-button") {
    exportSelectedMarkdown();
    return;
  }

  if (target.id === "share-output-button") {
    shareOutput();
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

  if (target.dataset.dayopsAdd) {
    addDayOpsItem(target.dataset.dayopsAdd);
    return;
  }

  if (target.dataset.dayopsStatus) {
    const [type, id, status] = target.dataset.dayopsStatus.split(":");
    updateDayOpsStatus(type, id, status);
    return;
  }

  if (target.dataset.dayopsDelete) {
    const [type, id] = target.dataset.dayopsDelete.split(":");
    deleteDayOpsItem(type, id);
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

  if (target.dataset.dayopsDraft) {
    const [type, field] = target.dataset.dayopsDraft.split(":");
    state.dayOpsDrafts[type][field] = target.value;
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
  forceScrollTop();
}

boot();
