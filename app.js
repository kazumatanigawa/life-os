const STORAGE_KEYS = {
  appState: "lifeOS_appState",
  dailyLogs: "lifeOS_dailyLogs",
  settings: "lifeOS_settings",
  timeMachineVisions: "lifeOS_timeMachineVisions",
};

const APP_VERSION = "2026-06-03-life-goal-carryover";

const CHATGPT_WEB_URL = "https://chatgpt.com/";
const MORNING_NEWS_SHORTCUT_URL = "shortcuts://run-shortcut?name=%E4%BB%8A%E6%9C%9D%E3%81%AE%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9%E9%80%81%E4%BF%A1";
const AIRMATE_WEB_URL = "https://airmate.airregi.jp/";
const AIRMATE_LEGACY_REALTIME_URL = "https://airmate.jp/realtime/";
const AIRMATE_APP_URL =
  "https://faq.mate.airregi.jp/hc/ja/articles/4507008511646-%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%B3%E7%89%88-Air%E3%83%A1%E3%82%A4%E3%83%88-%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E6%96%B9%E6%B3%95";

const DAY_OPS_TYPES = {
  contact: "contact",
  schedule121: "schedule121",
  task: "task",
};

const TASK_TIMELINE_SECTION = "timeline";

const CONTACT_TOOL_OPTIONS = ["LINE", "FB", "Instagram", "電話", "直接", "その他"];

const DAY_OPS_TYPE_CONFIG = {
  [DAY_OPS_TYPES.contact]: {
    bucket: "contacts",
    label: "連絡",
  },
  [DAY_OPS_TYPES.schedule121]: {
    bucket: "schedule121",
    label: "日程調整",
  },
  [DAY_OPS_TYPES.task]: {
    bucket: "tasks",
    label: "タスク",
  },
};

const DEFAULT_TASK_SECTION_OPEN_STATE = {
  [DAY_OPS_TYPES.contact]: false,
  [DAY_OPS_TYPES.schedule121]: false,
  [DAY_OPS_TYPES.task]: false,
  [TASK_TIMELINE_SECTION]: true,
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
  { key: "financeNews", label: "今朝のニュース", linkKey: "morningNewsShortcut", hint: "タップして開く" },
  { key: "yearSchedule", label: "年スケ", linkKey: "yearSchedule", hint: "タップして開く" },
  { key: "googleCalendar", label: "Google Calendar", linkKey: "googleCalendar", hint: "タップして開く" },
  { key: "storeStatus", label: "店舗状況確認", linkKey: "storeStatus", hint: "タップして開く" },
  { key: "weeklyReport", label: "週次報告チェック", linkKey: "weeklyReport", hint: "タップして開く" },
  { key: "gakumeizaMeetingLog", label: "樂明座会議ログ", linkKey: "gakumeizaMeetingLog", hint: "タップして開く" },
];

const NIGHT_ROUTINE_ITEMS = [
  { key: "threeMeals", label: "3食", hint: "チェックのみ" },
  { key: "water", label: "水500ml", hint: "チェックのみ" },
  { key: "washFace", label: "洗顔", hint: "チェックのみ" },
  { key: "shower", label: "シャワー", hint: "チェックのみ" },
  { key: "baduanjin", label: "八段錦", hint: "チェックのみ" },
  { key: "oneMinuteReading", label: "1分読書", hint: "チェックのみ" },
  { key: "amonSalesReport", label: "亜門売上報告", linkKey: "amonSalesReport", hint: "タップして開く" },
  { key: "amonMasterSheet", label: "亜門マスターシート", linkKey: "amonMasterSheet", hint: "タップして開く" },
  { key: "householdBook", label: "家計簿", linkKey: "householdBook", hint: "タップして開く" },
  { key: "kpiLog", label: "KPI Log 2026", linkKey: "kpiLog", hint: "タップして開く" },
];

const TIME_MACHINE_FIELDS = [
  { key: "worksAndBusiness", label: "どんな作品・事業を生み出しているか" },
  { key: "solvedProblems", label: "誰のどんなお困りごとを解決しているか" },
  { key: "incomeStructure", label: "どんな収入構造を持っているか" },
  { key: "socialImpact", label: "周囲にどのような影響を与えているか" },
  { key: "coreValue", label: "最も重視しているものは何か" },
  { key: "appearanceAndExpression", label: "どんな見た目と表情か" },
  { key: "messageFromFuture", label: "3年後の自分から今の自分への一言" },
  { key: "todayMostImportantAction", label: "未来から逆算した今日の最重要アクション" },
];

const LINK_DEFINITIONS = [
  { key: "morningNewsShortcut", label: "今朝のニュース" },
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
  userBirthday: "",
  bootSequence: {
    showOnLaunch: true,
    showEveryOpen: true,
    requireReadAloud: true,
    requireTimeMachine: true,
  },
  links: {
    morningNewsShortcut: CHATGPT_WEB_URL,
    yearSchedule:
      "https://docs.google.com/spreadsheets/d/1d3mg9evgvgK5fof9gex_IG-RwSKq9Ei5fKo-6IkjhDQ/edit?gid=1124633243#gid=1124633243",
    googleCalendar: "https://calendar.google.com/calendar/u/0/r",
    storeStatus: AIRMATE_WEB_URL,
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
  appMeta: null,
  currentDateKey: "",
  selectedLogDate: "",
  activeScreen: "boot",
  bootStep: "mission",
  bootUnlocked: false,
  timeMachineVisions: [],
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
      scheduledDate: "",
      startTime: "",
      endTime: "",
      durationMinutes: "",
      name: "",
      requirement: "",
      contactTool: "",
      contactToolOther: "",
      memo: "",
    },
    schedule121: {
      scheduledDate: "",
      startTime: "",
      endTime: "",
      durationMinutes: "",
      name: "",
      job: "",
      contactTool: "",
      contactToolOther: "",
      candidateDatesText: "",
      memo: "",
    },
    task: {
      scheduledDate: "",
      startTime: "",
      durationMinutes: "",
      title: "",
      description: "",
      priority: "",
      memo: "",
    },
    nightTask: {
      scheduledDate: "",
      title: "",
      description: "",
    },
  },
  ui: {
    dayOpsDateKey: "",
    taskSections: { ...DEFAULT_TASK_SECTION_OPEN_STATE },
    taskForms: {
      contact: false,
      schedule121: false,
      task: false,
    },
    reschedulingTaskId: null,
    reschedulingTaskDate: "",
    reschedulingTaskStart: "",
    reschedulingTaskDuration: "",
    expandedTaskItems: {},
    expandedTimelineItems: {},
    completedTasksOpen: false,
    pendingScrollTargetId: null,
  },
  saveState: {
    status: "saved",
    debounceTimer: null,
  },
};

function createDefaultAppMeta() {
  return {
    version: APP_VERSION,
    lastActivePage: "today",
    lastActiveDate: "",
    lastOpenedAt: "",
    morningCompletedDate: null,
  };
}

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

function createDefaultTaskItem(type, overrides = {}) {
  const now = new Date().toISOString();
  return {
    id: `${type}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    type,
    title: "",
    description: "",
    scheduledDate: state.currentDateKey || getDateKey(),
    startTime: "",
    endTime: "",
    durationMinutes: null,
    completed: false,
    completedAt: null,
    status: "todo",
    isImportantToday: false,
    postponedFrom: null,
    postponedTo: null,
    priority: null,
    source: "",
    contactPerson: null,
    contactTool: null,
    contactToolOther: null,
    candidateDates: [],
    memo: "",
    createdAt: now,
    updatedAt: now,
    sourceDate: state.currentDateKey || getDateKey(),
    sourceItemId: null,
    sourceType: null,
    originDate: null,
    addedToTimeline: false,
    handoverResolved: false,
    ...overrides,
  };
}

function createDefaultPriorityItems(date) {
  return Array.from({ length: 3 }, (_, index) =>
    createDefaultTaskItem("priority", {
      id: `priority-${date}-${index + 1}`,
      scheduledDate: date,
      priority: "high",
      isImportantToday: true,
    })
  );
}

function createDefaultDayOpsItem(type, overrides = {}) {
  if (type === DAY_OPS_TYPES.contact) {
    return createDefaultTaskItem("contact", {
      contactPerson: "",
      title: "",
      description: "",
      ...overrides,
    });
  }

  if (type === DAY_OPS_TYPES.schedule121) {
    return createDefaultTaskItem("schedule", {
      contactPerson: "",
      title: "",
      description: "",
      ...overrides,
    });
  }

  return createDefaultTaskItem("task", overrides);
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
    topPriorities: createDefaultPriorityItems(date),
    handoverItems: [],
    timelineItems: [],
    contactItems: [],
    scheduleItems: [],
    taskItems: [],
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

function normalizeLegacyStatus(status, completed = false) {
  if (completed || status === "done") {
    return "done";
  }
  if (status === "carryOver") {
    return "postponed";
  }
  if (status === "deleted") {
    return "deleted";
  }
  if (status === "pending" || status === "postponed" || status === "doing") {
    return status;
  }
  return "todo";
}

function normalizeContactTool(value) {
  const text = String(value || "").trim();
  if (!text) {
    return { contactTool: "", contactToolOther: "" };
  }
  if (CONTACT_TOOL_OPTIONS.includes(text)) {
    return { contactTool: text, contactToolOther: "" };
  }
  return { contactTool: "その他", contactToolOther: text };
}

function parseLegacyWhen(value) {
  const text = String(value || "").trim();
  if (!text) {
    return { startTime: "", endTime: "" };
  }
  const range = text.match(/^(\d{1,2}:\d{2})\s*[-~]\s*(\d{1,2}:\d{2})$/);
  if (range) {
    return { startTime: range[1], endTime: range[2] };
  }
  if (/^\d{1,2}:\d{2}$/.test(text)) {
    return { startTime: text, endTime: "" };
  }
  return { startTime: "", endTime: "" };
}

function parseTimeToMinutes(value) {
  const text = String(value || "").trim();
  if (!/^\d{1,2}:\d{2}$/.test(text)) {
    return null;
  }
  const [hours, minutes] = text.split(":").map(Number);
  return hours * 60 + minutes;
}

function formatMinutesToTime(totalMinutes) {
  if (!Number.isFinite(totalMinutes) || totalMinutes < 0) {
    return "";
  }
  const hours = Math.floor(totalMinutes / 60) % 24;
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function computeDurationMinutes(startTime, endTime) {
  const start = parseTimeToMinutes(startTime);
  const end = parseTimeToMinutes(endTime);
  if (start === null || end === null || end <= start) {
    return null;
  }
  return end - start;
}

function computeEndTime(startTime, durationMinutes) {
  const start = parseTimeToMinutes(startTime);
  const duration = Number(durationMinutes);
  if (start === null || !Number.isFinite(duration) || duration <= 0) {
    return "";
  }
  return formatMinutesToTime(start + duration);
}

function normalizeDurationMinutes(value) {
  const duration = Number(value);
  if (!Number.isFinite(duration) || duration <= 0) {
    return null;
  }
  return Math.round(duration);
}

function getItemDurationMinutes(item) {
  if (!item) {
    return null;
  }
  return normalizeDurationMinutes(item.durationMinutes) || computeDurationMinutes(item.startTime, item.endTime);
}

function applyScheduleToItem(item, scheduledDate, startTime, durationMinutes) {
  if (!item) {
    return;
  }
  const normalizedDuration = normalizeDurationMinutes(durationMinutes);
  item.scheduledDate = scheduledDate || item.scheduledDate || state.currentDateKey;
  item.startTime = startTime || "";
  item.durationMinutes = normalizedDuration;
  item.endTime = computeEndTime(item.startTime, normalizedDuration);
}

function hydrateDayOpsItem(type, savedItem) {
  const saved = savedItem || {};
  if (type === DAY_OPS_TYPES.contact) {
    const tool = normalizeContactTool(saved.contactTool || saved.tool);
    return mergeWithDefaults(
      createDefaultDayOpsItem(type, {
        title: saved.title || saved.requirement || saved.name || "",
        description: saved.description || saved.requirement || "",
        contactPerson: saved.contactPerson || saved.name || "",
        contactTool: tool.contactTool,
        contactToolOther: saved.contactToolOther || tool.contactToolOther,
        memo: saved.memo || "",
        scheduledDate: saved.scheduledDate || saved.sourceDate || state.currentDateKey || getDateKey(),
        startTime: saved.startTime || parseLegacyWhen(saved.when).startTime,
        endTime: saved.endTime || parseLegacyWhen(saved.when).endTime,
        durationMinutes: normalizeDurationMinutes(saved.durationMinutes) || computeDurationMinutes(saved.startTime, saved.endTime),
        completed: Boolean(saved.completed || saved.completedAt || saved.status === "done"),
        status: normalizeLegacyStatus(saved.status, saved.completed || saved.completedAt),
        postponedFrom: saved.postponedFrom || saved.carriedOverFrom || null,
        postponedTo: saved.postponedTo || saved.carriedForwardTo || null,
      }),
      saved
    );
  }

  if (type === DAY_OPS_TYPES.schedule121) {
    const tool = normalizeContactTool(saved.contactTool || saved.tool);
    return mergeWithDefaults(
      createDefaultDayOpsItem(type, {
        title: saved.title || saved.job || saved.name || "",
        description: saved.description || saved.job || "",
        contactPerson: saved.contactPerson || saved.name || "",
        contactTool: tool.contactTool,
        contactToolOther: saved.contactToolOther || tool.contactToolOther,
        candidateDates: Array.isArray(saved.candidateDates) ? saved.candidateDates : [],
        memo: saved.memo || "",
        scheduledDate: saved.scheduledDate || saved.sourceDate || state.currentDateKey || getDateKey(),
        startTime: saved.startTime || parseLegacyWhen(saved.when).startTime,
        endTime: saved.endTime || parseLegacyWhen(saved.when).endTime,
        durationMinutes: normalizeDurationMinutes(saved.durationMinutes) || computeDurationMinutes(saved.startTime, saved.endTime),
        completed: Boolean(saved.completed || saved.completedAt || saved.status === "done"),
        status: normalizeLegacyStatus(saved.status, saved.completed || saved.completedAt),
        postponedFrom: saved.postponedFrom || saved.carriedOverFrom || null,
        postponedTo: saved.postponedTo || saved.carriedForwardTo || null,
      }),
      saved
    );
  }

  const legacyTime = parseLegacyWhen(saved.when);
  return mergeWithDefaults(
    createDefaultDayOpsItem(type, {
      title: saved.title || "",
      description: saved.description || saved.goal || "",
      memo: saved.memo || "",
      priority: saved.priority || null,
      scheduledDate: saved.scheduledDate || saved.sourceDate || state.currentDateKey || getDateKey(),
      startTime: saved.startTime || legacyTime.startTime,
      endTime: saved.endTime || legacyTime.endTime,
      durationMinutes: normalizeDurationMinutes(saved.durationMinutes) || computeDurationMinutes(saved.startTime || legacyTime.startTime, saved.endTime || legacyTime.endTime),
      completed: Boolean(saved.completed || saved.completedAt || saved.status === "done"),
      status: normalizeLegacyStatus(saved.status, saved.completed || saved.completedAt),
      postponedFrom: saved.postponedFrom || saved.carriedOverFrom || null,
      postponedTo: saved.postponedTo || saved.carriedForwardTo || null,
    }),
    saved
  );
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
    worksAndBusiness: saved.worksAndBusiness || saved.artAndBusiness || "",
    solvedProblems: saved.solvedProblems || "",
    incomeStructure: saved.incomeStructure || "",
    socialImpact: saved.socialImpact || saved.influence || "",
    coreValue: saved.coreValue || saved.priorities || "",
    appearanceAndExpression: saved.appearanceAndExpression || appearanceParts.join(" / "),
    messageFromFuture: saved.messageFromFuture || saved.messageFromFutureSelf || "",
    todayMostImportantAction: saved.todayMostImportantAction || saved.todayActionFromFuture || "",
  };
}

function hydratePriorityItem(dateKey, savedItem, index) {
  const saved = savedItem || {};
  return mergeWithDefaults(
    createDefaultTaskItem("priority", {
      id: saved.id || `priority-${dateKey}-${index + 1}`,
      title: saved.title || "",
      description: saved.description || "",
      scheduledDate: saved.scheduledDate || dateKey,
      startTime: saved.startTime || "",
      endTime: computeEndTime(saved.startTime || "", normalizeDurationMinutes(saved.durationMinutes) || computeDurationMinutes(saved.startTime, saved.endTime)),
      durationMinutes: normalizeDurationMinutes(saved.durationMinutes) || computeDurationMinutes(saved.startTime, saved.endTime),
      completed: Boolean(saved.completed),
      completedAt: saved.completedAt || null,
      status: normalizeLegacyStatus(saved.status, saved.completed),
      memo: saved.memo || "",
      priority: saved.priority || "high",
      isImportantToday: true,
    }),
    saved
  );
}

function buildPrioritiesFromLegacyLog(dateKey, savedLog, futureVision) {
  const legacyMit = savedLog && savedLog.mit ? savedLog.mit : {};
  return [
    hydratePriorityItem(dateKey, { title: futureVision.todayMostImportantAction || legacyMit.mit1 || "" }, 0),
    hydratePriorityItem(dateKey, { title: legacyMit.mit2 || "" }, 1),
    hydratePriorityItem(dateKey, { title: legacyMit.mit3 || "" }, 2),
  ];
}

function hydrateDailyLog(dateKey, savedLog) {
  const merged = mergeWithDefaults(createDefaultDailyLog(dateKey), savedLog || {});
  merged.bootSequence.timeMachine10m.futureVision = hydrateFutureVision(
    savedLog && savedLog.bootSequence && savedLog.bootSequence.timeMachine10m
      ? savedLog.bootSequence.timeMachine10m.futureVision
      : merged.bootSequence.timeMachine10m.futureVision
  );
  merged.topPriorities = Array.isArray(savedLog && savedLog.topPriorities)
    ? savedLog.topPriorities.map((item, index) => hydratePriorityItem(dateKey, item, index))
    : buildPrioritiesFromLegacyLog(dateKey, savedLog, merged.bootSequence.timeMachine10m.futureVision);
  merged.handoverItems = Array.isArray(savedLog && savedLog.handoverItems)
    ? savedLog.handoverItems.map((item) => mergeWithDefaults(createDefaultTaskItem(item.type || "task"), item))
    : [];
  merged.timelineItems = Array.isArray(savedLog && savedLog.timelineItems)
    ? savedLog.timelineItems.map((item) => mergeWithDefaults(createDefaultTaskItem("timeline"), item))
    : [];
  merged.contactItems = Array.isArray(savedLog && savedLog.contactItems)
    ? savedLog.contactItems.map((item) => hydrateDayOpsItem(DAY_OPS_TYPES.contact, item))
    : [];
  merged.scheduleItems = Array.isArray(savedLog && savedLog.scheduleItems)
    ? savedLog.scheduleItems.map((item) => hydrateDayOpsItem(DAY_OPS_TYPES.schedule121, item))
    : [];
  merged.taskItems = Array.isArray(savedLog && savedLog.taskItems)
    ? savedLog.taskItems.map((item) => hydrateDayOpsItem(DAY_OPS_TYPES.task, item))
    : [];
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
  if (!merged.contactItems.length && merged.dayOps.contacts.length) {
    merged.contactItems = merged.dayOps.contacts.map((item) => hydrateDayOpsItem(DAY_OPS_TYPES.contact, item));
  }
  if (!merged.scheduleItems.length && merged.dayOps.schedule121.length) {
    merged.scheduleItems = merged.dayOps.schedule121.map((item) => hydrateDayOpsItem(DAY_OPS_TYPES.schedule121, item));
  }
  if (!merged.taskItems.length && merged.dayOps.tasks.length) {
    merged.taskItems = merged.dayOps.tasks.map((item) => hydrateDayOpsItem(DAY_OPS_TYPES.task, item));
  }
  return merged;
}

function syncPrimaryMit(log = getCurrentLog()) {
  const firstTitle = log.bootSequence.timeMachine10m.futureVision.todayMostImportantAction || "";
  if (!Array.isArray(log.topPriorities) || !log.topPriorities.length) {
    log.topPriorities = createDefaultPriorityItems(log.date);
  }
  log.topPriorities[0].title = firstTitle;
  log.topPriorities[0].scheduledDate = log.date;
  log.topPriorities.forEach((item, index) => {
    item.isImportantToday = true;
    item.priority = item.priority || "high";
    item.scheduledDate = item.scheduledDate || log.date;
    item.rank = index + 1;
  });
  log.mit.mit1 = firstTitle;
  log.mit.mit2 = log.topPriorities[1] ? log.topPriorities[1].title : "";
  log.mit.mit3 = log.topPriorities[2] ? log.topPriorities[2].title : "";
}

function getDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTomorrowDateKey(dateKey = state.currentDateKey || getDateKey()) {
  const date = new Date(`${dateKey}T00:00:00`);
  date.setDate(date.getDate() + 1);
  return getDateKey(date);
}

function getThreeYearsLaterDateKey(dateKey = state.currentDateKey || getDateKey()) {
  const date = new Date(`${dateKey}T00:00:00`);
  date.setFullYear(date.getFullYear() + 3);
  return getDateKey(date);
}

function formatLooseDateLabel(dateKey) {
  const date = new Date(`${dateKey}T00:00:00`);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function calculateAgeOnDate(birthday, targetDateKey) {
  if (!birthday || !targetDateKey) {
    return null;
  }
  const birth = new Date(`${birthday}T00:00:00`);
  const target = new Date(`${targetDateKey}T00:00:00`);
  if (Number.isNaN(birth.getTime()) || Number.isNaN(target.getTime())) {
    return null;
  }
  let age = target.getFullYear() - birth.getFullYear();
  const targetMonthDay = (target.getMonth() + 1) * 100 + target.getDate();
  const birthMonthDay = (birth.getMonth() + 1) * 100 + birth.getDate();
  if (targetMonthDay < birthMonthDay) {
    age -= 1;
  }
  return age >= 0 ? age : null;
}

function buildFutureSelfLabel(dateKey = state.currentDateKey || getDateKey()) {
  const targetDateKey = getThreeYearsLaterDateKey(dateKey);
  const age = calculateAgeOnDate(state.settings.userBirthday, targetDateKey);
  if (age === null) {
    return `${formatLooseDateLabel(targetDateKey)}の未来の私`;
  }
  return `${formatLooseDateLabel(targetDateKey)}の${age}歳の私`;
}

function getMatchingTimeMachineVisions(dateKey = state.currentDateKey || getDateKey()) {
  return (state.timeMachineVisions || []).filter((entry) => entry.targetDate === dateKey);
}

function storeCurrentTimeMachineVision() {
  const log = getCurrentLog();
  const entry = {
    createdDate: state.currentDateKey,
    targetDate: getThreeYearsLaterDateKey(state.currentDateKey),
    answers: mergeWithDefaults(createDefaultFutureVision(), log.bootSequence.timeMachine10m.futureVision),
  };
  state.timeMachineVisions.push(entry);
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

function formatMorningHeaderDate(dateKey) {
  const date = new Date(`${dateKey}T00:00:00`);
  const weekday = date.toLocaleDateString("ja-JP", {
    weekday: "short",
  });
  return `${dateKey} (${weekday})`;
}

function formatCompletedAtTime(value) {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return date.toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
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

function loadSettings(savedSettings = null) {
  const saved = savedSettings || loadJson(STORAGE_KEYS.settings, null);
  const merged = mergeWithDefaults(DEFAULT_SETTINGS, saved || {});
  if (
    merged.links.morningNewsShortcut === MORNING_NEWS_SHORTCUT_URL ||
    merged.links.morningNewsShortcut === "chatgpt://" ||
    !String(merged.links.morningNewsShortcut || "").trim()
  ) {
    merged.links.morningNewsShortcut = CHATGPT_WEB_URL;
  }
  if (
    merged.links.storeStatus === AIRMATE_APP_URL ||
    merged.links.storeStatus === AIRMATE_LEGACY_REALTIME_URL ||
    !String(merged.links.storeStatus || "").trim()
  ) {
    merged.links.storeStatus = AIRMATE_WEB_URL;
  }
  return merged;
}

function loadDailyLogs(savedLogs = null) {
  const rawLogs = savedLogs || loadJson(STORAGE_KEYS.dailyLogs, {});
  const hydrated = {};
  Object.keys(rawLogs || {}).forEach((dateKey) => {
    hydrated[dateKey] = hydrateDailyLog(dateKey, rawLogs[dateKey]);
  });
  return hydrated;
}

function loadTimeMachineVisions(savedVisions = null) {
  const raw = savedVisions || loadJson(STORAGE_KEYS.timeMachineVisions, []);
  if (!Array.isArray(raw)) {
    return [];
  }
  return raw
    .filter((entry) => entry && typeof entry === "object")
    .map((entry) => ({
      createdDate: String(entry.createdDate || ""),
      targetDate: String(entry.targetDate || ""),
      answers: mergeWithDefaults(createDefaultFutureVision(), entry.answers || {}),
    }))
    .filter((entry) => entry.createdDate && entry.targetDate);
}

function loadAppState() {
  const stored = loadJson(STORAGE_KEYS.appState, null);
  if (stored && stored.dailyData) {
    return {
      settings: loadSettings(stored.settings || null),
      dailyLogs: loadDailyLogs(stored.dailyData || {}),
      appMeta: mergeWithDefaults(createDefaultAppMeta(), stored),
      timeMachineVisions: loadTimeMachineVisions(stored.timeMachineVisions || null),
    };
  }

  return {
    settings: loadSettings(),
    dailyLogs: loadDailyLogs(),
    appMeta: createDefaultAppMeta(),
    timeMachineVisions: loadTimeMachineVisions(),
  };
}

function renderSaveStatus() {
  const node = document.getElementById("save-status");
  if (!node) {
    return;
  }
  const status = state.saveState.status;
  node.textContent = status === "saving" ? "保存中..." : status === "dirty" ? "未保存の変更あり" : status === "error" ? "保存失敗" : "保存済み";
  node.classList.toggle("hidden", !state.bootUnlocked && state.activeScreen === "boot");
  node.dataset.state = status;
}

function saveAppState(showToastMessage = false) {
  try {
    syncCarryOverReminders(getCurrentLog());
    getCurrentLog().updatedAt = new Date().toISOString();
    state.appMeta.version = APP_VERSION;
    state.appMeta.lastActivePage = state.activeScreen;
    state.appMeta.lastActiveDate = state.currentDateKey;
    state.appMeta.lastOpenedAt = new Date().toISOString();
    if (Object.values(getCurrentLog().morningRoutine).every(Boolean)) {
      state.appMeta.morningCompletedDate = state.currentDateKey;
    }

    const payload = {
      ...state.appMeta,
      settings: state.settings,
      dailyData: state.dailyLogs,
      timeMachineVisions: state.timeMachineVisions,
    };

    saveJson(STORAGE_KEYS.appState, payload);
    saveJson(STORAGE_KEYS.settings, state.settings);
    saveJson(STORAGE_KEYS.dailyLogs, state.dailyLogs);
    saveJson(STORAGE_KEYS.timeMachineVisions, state.timeMachineVisions);
    state.saveState.status = "saved";
    renderSaveStatus();
    if (showToastMessage) {
      showToast("保存しました");
    }
  } catch (error) {
    console.error("save failed", error);
    state.saveState.status = "error";
    renderSaveStatus();
  }
}

function scheduleAutoSave() {
  state.saveState.status = "dirty";
  renderSaveStatus();
  clearTimeout(state.saveState.debounceTimer);
  state.saveState.debounceTimer = window.setTimeout(() => {
    state.saveState.status = "saving";
    renderSaveStatus();
    saveAppState(false);
  }, 380);
}

function persistSettings(showToastMessage = false) {
  saveAppState(showToastMessage);
}

function persistSettingsImmediate(showToastMessage = false) {
  state.saveState.status = "saving";
  renderSaveStatus();
  saveAppState(showToastMessage);
}

function persistDailyLogs(showToastMessage = false) {
  state.saveState.status = "saving";
  renderSaveStatus();
  saveAppState(showToastMessage);
}

function persistDailyLogsDeferred() {
  scheduleAutoSave();
}

function saveCurrentPage(page = state.activeScreen) {
  state.appMeta.lastActivePage = page;
  state.appMeta.lastActiveDate = state.currentDateKey;
  state.appMeta.lastOpenedAt = new Date().toISOString();
  saveAppState(false);
}

function restoreLastPage() {
  if (state.appMeta.lastActiveDate === state.currentDateKey && state.appMeta.lastActivePage) {
    return state.appMeta.lastActivePage;
  }
  return "today";
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
    { type: DAY_OPS_TYPES.contact, items: log.contactItems || [] },
    { type: DAY_OPS_TYPES.schedule121, items: log.scheduleItems || [] },
    { type: DAY_OPS_TYPES.task, items: log.taskItems || [] },
  ];
}

function getAllDayOpsItems(log = getCurrentLog()) {
  return getDayOpsCollections(log).flatMap((entry) => entry.items);
}

function getActionSourceCollections(log = getCurrentLog()) {
  return [
    { type: "priority", items: log.topPriorities || [] },
    { type: DAY_OPS_TYPES.contact, items: log.contactItems || [] },
    { type: DAY_OPS_TYPES.schedule121, items: log.scheduleItems || [] },
    { type: DAY_OPS_TYPES.task, items: log.taskItems || [] },
  ];
}

function getAllActionItems(log = getCurrentLog()) {
  const seen = new Set();
  return getActionSourceCollections(log)
    .flatMap((entry) => entry.items)
    .filter((item) => {
      if (!itemHasContent(item)) {
        return false;
      }
      const key = item.sourceItemId ? `${item.id}:${item.sourceItemId}` : item.id;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
}

function itemHasContent(item) {
  if (!item) {
    return false;
  }
  if (item.type === "contact" || item.type === "schedule") {
    return Boolean(
      String(item.contactPerson || "").trim() ||
        String(item.title || "").trim() ||
        String(item.description || "").trim() ||
        String(item.memo || "").trim()
    );
  }
  return Boolean(
    String(item.title || "").trim() || String(item.description || "").trim() || String(item.memo || "").trim()
  );
}

function getItemDateKey(item) {
  return String(item && (item.scheduledDate || item.dueDate || item.sourceDate) ? item.scheduledDate || item.dueDate || item.sourceDate : "");
}

function isItemDeletedOrArchived(item) {
  return !item || item.status === "deleted" || item.archived === true;
}

function isItemCompleted(item) {
  return Boolean(item && (item.completed || item.status === "done"));
}

function getPriorityRank(value) {
  if (value === "high") {
    return 0;
  }
  if (value === "middle") {
    return 1;
  }
  if (value === "low") {
    return 2;
  }
  return 3;
}

function compareActionItems(left, right) {
  const leftDate = getItemDateKey(left) || "9999-99-99";
  const rightDate = getItemDateKey(right) || "9999-99-99";
  if (leftDate !== rightDate) {
    return leftDate.localeCompare(rightDate);
  }
  const leftPriority = getPriorityRank(left.priority);
  const rightPriority = getPriorityRank(right.priority);
  if (leftPriority !== rightPriority) {
    return leftPriority - rightPriority;
  }
  return String(left.createdAt || "").localeCompare(String(right.createdAt || ""));
}

function getAllActionItemsAcrossLogs() {
  const byId = new Map();
  Object.keys(state.dailyLogs)
    .sort((a, b) => a.localeCompare(b))
    .forEach((dateKey) => {
      getAllActionItems(state.dailyLogs[dateKey]).forEach((item) => {
        byId.set(item.id, item);
      });
    });
  return Array.from(byId.values());
}

function findActionItemById(id) {
  const items = getAllActionItemsAcrossLogs();
  return items.find((item) => item.id === id) || items.find((item) => item.sourceItemId === id) || null;
}

function isTodayTaskItem(item, dateKey = state.currentDateKey) {
  if (!itemHasContent(item) || isItemDeletedOrArchived(item)) {
    return false;
  }
  return getItemDateKey(item) === dateKey;
}

function isPreviousIncompleteItem(item, dateKey = state.currentDateKey) {
  if (!itemHasContent(item) || isItemDeletedOrArchived(item) || isItemCompleted(item)) {
    return false;
  }
  const itemDate = getItemDateKey(item);
  return Boolean(itemDate) && itemDate < dateKey;
}

function isTaskPageVisibleItem(item, dateKey = state.currentDateKey) {
  return isTodayTaskItem(item, dateKey) || isPreviousIncompleteItem(item, dateKey);
}

function itemNeedsReschedule(item, dateKey = state.currentDateKey) {
  return isTaskPageVisibleItem(item, dateKey) && !isItemCompleted(item);
}

function getTodaySectionItems(type, dateKey = state.currentDateKey) {
  const targetType =
    type === DAY_OPS_TYPES.contact ? "contact" : type === DAY_OPS_TYPES.schedule121 ? "schedule" : "task";
  return getAllActionItemsAcrossLogs()
    .filter((item) => item.type === targetType)
    .filter((item) => isTodayTaskItem(item, dateKey))
    .sort(compareActionItems);
}

function getPreviousIncompleteItems(dateKey = state.currentDateKey) {
  return getAllActionItemsAcrossLogs()
    .filter((item) => isPreviousIncompleteItem(item, dateKey))
    .sort(compareActionItems);
}

function getTimelineItems(dateKey = state.currentDateKey) {
  const items = getAllActionItemsAcrossLogs()
    .filter((item) => isTaskPageVisibleItem(item, dateKey))
    .filter((item) => String(item.startTime || "").trim())
    .sort((left, right) => {
      const leftStart = left.startTime || "99:99";
      const rightStart = right.startTime || "99:99";
      if (leftStart !== rightStart) {
        return leftStart.localeCompare(rightStart);
      }
      const leftDuration = getItemDurationMinutes(left) || 9999;
      const rightDuration = getItemDurationMinutes(right) || 9999;
      if (leftDuration !== rightDuration) {
        return leftDuration - rightDuration;
      }
      return String(left.createdAt || "").localeCompare(String(right.createdAt || ""));
    });
  return items;
}

function getUnscheduledTodayItems(dateKey = state.currentDateKey) {
  return getAllActionItemsAcrossLogs()
    .filter((item) => isTaskPageVisibleItem(item, dateKey))
    .filter((item) => !String(item.startTime || "").trim());
}

function getOpenTaskItems(items = getTodaySectionItems(DAY_OPS_TYPES.task)) {
  return items.filter((item) => !isItemDeletedOrArchived(item) && !isItemCompleted(item));
}

function getCompletedTaskItems(items = getTodaySectionItems(DAY_OPS_TYPES.task)) {
  return items.filter((item) => !isItemDeletedOrArchived(item) && isItemCompleted(item));
}

function getHandoverCandidates(dateKey = state.currentDateKey) {
  return Object.keys(state.dailyLogs)
    .filter((key) => key < dateKey)
    .sort((a, b) => b.localeCompare(a))
    .flatMap((key) => {
      const log = state.dailyLogs[key];
      const pool = [
        ...(log.topPriorities || []),
        ...(log.contactItems || []),
        ...(log.scheduleItems || []),
        ...(log.taskItems || []),
        ...(log.timelineItems || []),
      ];
      return pool.filter((item) => itemNeedsReschedule(item, dateKey) && (item.scheduledDate <= dateKey || item.postponedTo === dateKey));
    });
}

function ensureHandoverItems() {
  const log = getCurrentLog();
  const existingBySource = new Map((log.handoverItems || []).map((item) => [item.sourceItemId || item.id, item]));
  const next = [];
  getHandoverCandidates().forEach((item) => {
    const existing = existingBySource.get(item.id);
    if (existing && !existing.handoverResolved) {
      next.push(
        mergeWithDefaults(createDefaultTaskItem(existing.type || item.type), {
          ...existing,
          title: item.title,
          description: item.description,
          scheduledDate: item.scheduledDate,
          startTime: item.startTime,
          endTime: item.endTime,
          memo: item.memo,
          priority: item.priority,
          contactPerson: item.contactPerson,
          contactTool: item.contactTool,
          contactToolOther: item.contactToolOther,
          candidateDates: item.candidateDates,
          status: item.status,
          completed: item.completed,
        })
      );
      return;
    }
    next.push(
      mergeWithDefaults(createDefaultTaskItem(item.type), {
        ...item,
        id: `handover-${item.id}`,
        sourceItemId: item.id,
        sourceType: item.type,
        originDate: item.sourceDate || item.scheduledDate,
        handoverResolved: false,
      })
    );
  });
  log.handoverItems = next;
}

function getCarryOverReminderText(item) {
  if (item.type === "contact") {
    return `連絡: ${item.contactPerson || "相手未設定"} / ${item.contactTool || "ツール未設定"} / ${item.description || "内容未設定"}`;
  }
  if (item.type === "schedule") {
    return `日程調整: ${item.contactPerson || "相手未設定"} / ${item.description || "内容未設定"} / ${item.contactTool || "連絡手段未設定"}`;
  }
  return `タスク: ${item.title || "未設定"} / ${buildTimelineRange(item)} / ${item.memo || item.description || ""}`;
}

function syncCarryOverReminders(log = getCurrentLog()) {
  return log;
}

function inheritCarryOverItems() {
  return;
}

function ensureCurrentLog() {
  if (!state.dailyLogs[state.currentDateKey]) {
    state.dailyLogs[state.currentDateKey] = createDefaultDailyLog(state.currentDateKey);
  }
  state.dailyLogs[state.currentDateKey] = hydrateDailyLog(state.currentDateKey, state.dailyLogs[state.currentDateKey]);
  inheritCarryOverItems();
  syncPrimaryMit(getCurrentLog());
  ensureHandoverItems();
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
  const missionDone = log.bootSequence.missionStatement.completed;
  const timeMachineDone = !bootSettings.requireTimeMachine || log.bootSequence.timeMachine10m.completed;
  if (missionDone && timeMachineDone) {
    return false;
  }
  if (bootSettings.showEveryOpen) {
    return true;
  }
  return true;
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

  const loaded = loadAppState();
  state.settings = loaded.settings;
  state.dailyLogs = loaded.dailyLogs;
  state.appMeta = loaded.appMeta;
  state.timeMachineVisions = loaded.timeMachineVisions || [];
  state.currentDateKey = getDateKey();
  ensureCurrentLog();
  ensureTaskUiState();
  state.selectedLogDate = state.currentDateKey;
  hydrateTimerFromLog();
  state.bootUnlocked = !shouldShowBootOnLaunch();
  state.activeScreen = state.bootUnlocked ? restoreLastPage() : "boot";
  state.bootStep = "mission";
  state.appMeta.lastOpenedAt = new Date().toISOString();
  saveAppState(false);
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
  return getAllActionItemsAcrossLogs().some((item) => itemNeedsReschedule(item));
}

function countUnresolvedDayOps(log = getCurrentLog()) {
  return getAllActionItemsAcrossLogs().filter((item) => itemNeedsReschedule(item)).length;
}

function canEnterNight() {
  return !hasUnresolvedDayOps();
}

function buildDefaultTaskSectionState(log = getCurrentLog()) {
  const next = Object.keys(DAY_OPS_TYPE_CONFIG).reduce((accumulator, type) => {
    accumulator[type] = DEFAULT_TASK_SECTION_OPEN_STATE[type];
    return accumulator;
  }, {});
  next[TASK_TIMELINE_SECTION] = DEFAULT_TASK_SECTION_OPEN_STATE[TASK_TIMELINE_SECTION];
  return next;
}

function ensureTaskUiState(log = getCurrentLog()) {
  if (state.ui.dayOpsDateKey === log.date) {
    return;
  }
  state.ui.dayOpsDateKey = log.date;
  state.ui.taskSections = buildDefaultTaskSectionState(log);
  state.ui.taskForms = {
    contact: false,
    schedule121: false,
    task: false,
  };
  state.ui.reschedulingTaskId = null;
  state.ui.reschedulingTaskDate = "";
  state.ui.reschedulingTaskStart = "";
  state.ui.reschedulingTaskDuration = "";
  state.ui.expandedTaskItems = {};
  state.ui.expandedTimelineItems = {};
  state.ui.completedTasksOpen = false;
  state.ui.pendingScrollTargetId = null;
}

function toggleTaskSection(type) {
  ensureTaskUiState();
  state.ui.taskSections[type] = !state.ui.taskSections[type];
  renderDayOps();
}

function toggleTaskItemExpanded(id) {
  ensureTaskUiState();
  state.ui.expandedTaskItems[id] = !state.ui.expandedTaskItems[id];
  renderDayOps();
}

function toggleTimelineItemExpanded(id) {
  ensureTaskUiState();
  state.ui.expandedTimelineItems[id] = !state.ui.expandedTimelineItems[id];
  renderDayOps();
}

function toggleCompletedTaskGroup() {
  ensureTaskUiState();
  state.ui.completedTasksOpen = !state.ui.completedTasksOpen;
  renderDayOps();
}

function toggleTaskForm(type) {
  ensureTaskUiState();
  state.ui.taskForms[type] = !state.ui.taskForms[type];
  if (state.ui.taskForms[type]) {
    state.ui.taskSections[type] = true;
  }
  renderDayOps();
}

function resetTaskDraft() {
  state.dayOpsDrafts.task = {
    scheduledDate: state.currentDateKey,
    startTime: "",
    durationMinutes: "",
    title: "",
    description: "",
    priority: "",
    memo: "",
  };
}

function resetNightTaskDraft() {
  state.dayOpsDrafts.nightTask = {
    scheduledDate: getTomorrowDateKey(),
    title: "",
    description: "",
  };
}

function scrollToPendingTarget() {
  if (!state.ui.pendingScrollTargetId) {
    return;
  }
  const targetId = state.ui.pendingScrollTargetId;
  state.ui.pendingScrollTargetId = null;
  window.requestAnimationFrame(() => {
    const node = document.getElementById(targetId);
    if (!node) {
      return;
    }
    node.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function getTaskSectionForItem(item) {
  if (!item) {
    return null;
  }
  if (item.type === "contact") {
    return DAY_OPS_TYPES.contact;
  }
  if (item.type === "schedule") {
    return DAY_OPS_TYPES.schedule121;
  }
  if (item.type === "task") {
    return DAY_OPS_TYPES.task;
  }
  return null;
}

function startTaskReschedule(id, options = {}) {
  const item = findActionItemById(id);
  if (!item) {
    return;
  }
  state.ui.reschedulingTaskId = id;
  state.ui.reschedulingTaskDate = item.scheduledDate || state.currentDateKey;
  state.ui.reschedulingTaskStart = item.startTime || "";
  state.ui.reschedulingTaskDuration = String(getItemDurationMinutes(item) || "");
  if (options.fromTimeline) {
    const section = getTaskSectionForItem(item);
    if (section) {
      state.ui.taskSections[section] = true;
      state.ui.taskSections[TASK_TIMELINE_SECTION] = true;
      if (section === DAY_OPS_TYPES.task) {
        state.ui.expandedTaskItems[id] = true;
      }
      state.ui.pendingScrollTargetId = `dayops-item-${id}`;
    }
  } else {
    state.ui.taskSections.task = true;
  }
  renderDayOps();
}

function cancelTaskReschedule() {
  state.ui.reschedulingTaskId = null;
  state.ui.reschedulingTaskDate = "";
  state.ui.reschedulingTaskStart = "";
  state.ui.reschedulingTaskDuration = "";
  renderDayOps();
}

function updateTaskSchedule(taskId, newDate, newStartTime, durationMinutes) {
  const item = findActionItemById(taskId);
  if (!item) {
    return false;
  }
  applyScheduleToItem(item, newDate || state.currentDateKey, newStartTime || "", durationMinutes);
  item.postponedTo = item.scheduledDate > state.currentDateKey ? item.scheduledDate : null;
  item.postponedFrom = item.postponedTo ? state.currentDateKey : null;
  item.status = item.completed ? "done" : item.scheduledDate > state.currentDateKey ? "postponed" : "todo";
  item.updatedAt = new Date().toISOString();
  if (item.sourceItemId) {
    const source = findSourceItemById(item.sourceItemId);
    if (source) {
      applyScheduleToItem(source, item.scheduledDate, item.startTime, item.durationMinutes);
      source.postponedTo = item.postponedTo;
      source.postponedFrom = item.postponedFrom;
      source.status = item.status;
      source.updatedAt = item.updatedAt;
    }
  }
  return true;
}

function saveTaskReschedule(id) {
  const updated = updateTaskSchedule(
    id,
    state.ui.reschedulingTaskDate || state.currentDateKey,
    state.ui.reschedulingTaskStart || "",
    state.ui.reschedulingTaskDuration
  );
  if (!updated) {
    return;
  }
  state.ui.reschedulingTaskId = null;
  state.ui.reschedulingTaskDate = "";
  state.ui.reschedulingTaskStart = "";
  state.ui.reschedulingTaskDuration = "";
  persistDailyLogs(true);
  renderDayOps();
}

function renderTaskTimeline() {
  const container = document.getElementById("task-timeline-list");
  const unscheduled = document.getElementById("timeline-unscheduled-list");
  const timelineItems = getTimelineItems();
  const unscheduledItems = getUnscheduledTodayItems();

  if (!timelineItems.length) {
    container.innerHTML = '<div class="dayops-empty">今日の時間付きタスクはまだありません。</div>';
  } else {
    container.innerHTML = timelineItems
      .map((item) => {
        const expanded = Boolean(state.ui.expandedTimelineItems[item.id]);
        return `
          <article class="timeline-item status-${getItemStatusClass(item)} ${item.isImportantToday ? "is-important" : ""} ${expanded ? "is-expanded" : ""}" id="timeline-item-${item.id}">
            <div class="timeline-time">${escapeHtml(item.startTime || "--:--")}</div>
            <div class="timeline-card">
              <button class="timeline-accordion-toggle" data-timeline-item-toggle="${item.id}" type="button">
                <div class="timeline-card-head">
                  <div class="timeline-card-main">
                    ${item.isImportantToday ? '<span class="timeline-important-badge">最重要</span>' : ""}
                    <h4>${escapeHtml(item.title || item.contactPerson || "未設定")}</h4>
                    <p>${escapeHtml(getTaskTypeLabel(item))} / ${escapeHtml(getTimelineSubtitle(item) || "詳細なし")}</p>
                  </div>
                </div>
                <span class="task-section-chevron" aria-hidden="true"></span>
              </button>
              <div class="timeline-accordion-body ${expanded ? "" : "hidden"}">
                <div class="dayops-item-meta">
                  <span class="status-badge status-${getItemStatusClass(item)}">${escapeHtml(getTaskStatusLabel(item))}</span>
                  <span class="meta-chip">${escapeHtml(getItemDurationMinutes(item) ? `${getItemDurationMinutes(item)}分` : "所要未設定")}</span>
                  <span class="meta-chip">${escapeHtml(getTaskTypeLabel(item))}</span>
                </div>
                <div class="timeline-card-foot">
                  <p class="timeline-card-meta">${escapeHtml(buildScheduleMetaLine(item) || "日時未設定")}</p>
                  <div class="dayops-actions timeline-actions">
                    ${buildTaskActionButtons(item, { fromTimeline: true })}
                  </div>
                </div>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  if (!unscheduledItems.length) {
    unscheduled.innerHTML = "";
    return;
  }

  unscheduled.innerHTML = `
    <article class="card unscheduled-card">
      <div class="section-heading">
        <h3>時間未設定</h3>
      </div>
      <div class="dayops-list">
        ${unscheduledItems
          .map((item) => {
            const expanded = Boolean(state.ui.expandedTimelineItems[item.id]);
            return `
              <article class="dayops-item status-${getItemStatusClass(item)} ${item.isImportantToday ? "is-important" : ""} timeline-unscheduled-item ${expanded ? "is-expanded" : ""}" id="timeline-item-${item.id}">
                <button class="timeline-accordion-toggle" data-timeline-item-toggle="${item.id}" type="button">
                  <div class="dayops-item-content">
                    ${item.isImportantToday ? '<span class="timeline-important-badge">最重要</span>' : ""}
                    <h4 class="dayops-item-title">${escapeHtml(item.title || item.contactPerson || "未設定")}</h4>
                    <p>${escapeHtml(getTaskTypeLabel(item))} / ${escapeHtml(getTimelineSubtitle(item) || "各セクションから時間を設定してください")}</p>
                  </div>
                  <span class="task-section-chevron" aria-hidden="true"></span>
                </button>
                <div class="timeline-accordion-body ${expanded ? "" : "hidden"}">
                  <div class="dayops-item-meta">
                    <span class="status-badge status-${getItemStatusClass(item)}">${escapeHtml(getTaskStatusLabel(item))}</span>
                    <span class="meta-chip">${escapeHtml(getTaskTypeLabel(item))}</span>
                    <span class="meta-chip">時間未設定</span>
                  </div>
                  <div class="dayops-actions timeline-actions">
                    ${buildTaskActionButtons(item, { fromTimeline: true })}
                  </div>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function showScreen(screen) {
  if (screen === "night" && !canEnterNight()) {
    showToast("タスクの未整理項目を完了か明日回しにしてください");
    state.activeScreen = "dayOps";
    renderApp();
    forceScrollTop();
    return;
  }

  state.activeScreen = screen;
  state.appMeta.lastActivePage = screen;
  renderApp();
  saveCurrentPage(screen);
  forceScrollTop();
}

function setBootUnlocked() {
  state.bootUnlocked = true;
  stopTimer();
  showScreen("today");
}

function updateMissionCompletion() {
  const mission = getCurrentLog().bootSequence.missionStatement;
  const canComplete = mission.readAloud || mission.liveByPrinciples || mission.completed;
  mission.completed = canComplete;
  mission.completedAt = canComplete ? mission.completedAt || new Date().toISOString() : null;
}

function updateTimeMachineCompletion(forceComplete = false) {
  const timeMachine = getCurrentLog().bootSequence.timeMachine10m;
  const canComplete = forceComplete || timeMachine.completed;
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
  const futureLabel = document.getElementById("time-machine-future-label");
  const historyStack = document.getElementById("time-machine-history-stack");
  container.innerHTML = TIME_MACHINE_FIELDS.map(
    (field) => `
      <label class="card settings-field">
        <span>${escapeHtml(field.label)}</span>
        <textarea
          data-time-machine-field="${field.key}"
          rows="${field.key === "todayMostImportantAction" || field.key === "messageFromFuture" ? 4 : 3}"
          placeholder="${escapeHtml(field.label)}"
        >${escapeHtml(futureVision[field.key] || "")}</textarea>
      </label>
    `
  ).join("");
  if (futureLabel) {
    futureLabel.textContent = buildFutureSelfLabel();
  }
  if (historyStack) {
    const visions = getMatchingTimeMachineVisions();
    historyStack.classList.toggle("hidden", visions.length === 0);
    historyStack.innerHTML = visions
      .map(
        (vision) => `
          <article class="card time-machine-history-card">
            <div class="section-heading">
              <h4>3年前の私はこんなことを想像していた。</h4>
            </div>
            <div class="time-machine-history-list">
              ${TIME_MACHINE_FIELDS.map(
                (field) => `
                  <div class="time-machine-history-item">
                    <strong>${escapeHtml(field.label)}</strong>
                    <p>${escapeHtml(vision.answers[field.key] || "未入力")}</p>
                  </div>
                `
              ).join("")}
            </div>
          </article>
        `
      )
      .join("");
  }
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
  document.getElementById("timer-start-button").disabled = Boolean(state.timerIntervalId) || state.timerRemainingSeconds <= 0;

  updateTimerUi();
  document.querySelector(".boot-hero").classList.toggle("hidden", state.bootStep === "timeMachine");
  document.getElementById("mission-view").classList.toggle("hidden", state.bootStep !== "mission");
  document.getElementById("time-machine-view").classList.toggle("hidden", state.bootStep !== "timeMachine");
  renderFloatingTimerVisibility();
}

function renderRoutineList(containerId, items, values, type, options = {}) {
  const collapseCompleted = Boolean(options.collapseCompleted);
  const container = document.getElementById(containerId);
  const orderedItems = collapseCompleted
    ? [...items].sort((left, right) => Number(Boolean(values[left.key])) - Number(Boolean(values[right.key])))
    : items;

  container.innerHTML = orderedItems
    .map((item) => {
      const checked = Boolean(values[item.key]);
      const collapsed = collapseCompleted && checked;
      const openButton = item.linkKey
        ? `<button class="routine-name link-button" type="button" data-open-routine="${type}:${item.key}">${escapeHtml(
            item.label
          )}</button>`
        : `<span class="routine-label">${escapeHtml(item.label)}</span>`;
      const hint = item.textOnly ? "Obsidian内リンク扱い" : escapeHtml(item.hint || "チェックのみ");

      return `
        <div class="routine-tile ${checked ? "is-checked" : ""} ${collapsed ? "is-collapsed" : ""}">
          <div class="routine-main">
            <label class="routine-check">
              <input type="checkbox" data-routine-type="${type}" data-routine-key="${item.key}" ${checked ? "checked" : ""} />
              <span class="toggle-indicator"></span>
            </label>
            <span class="routine-copy">
              ${openButton}
              ${collapsed ? '<span class="routine-state">完了</span>' : `<span class="routine-hint">${hint}</span>`}
            </span>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderTaskHandoffCard() {
  const handoff = document.getElementById("task-handoff-card");
  if (!handoff) {
    return;
  }
  const items = (getCurrentLog().handoverItems || []).filter((item) => !item.handoverResolved && itemNeedsReschedule(item));
  if (!items.length) {
    handoff.innerHTML = '<div class="task-handoff-empty">昨日から引き継ぐものはありません。</div>';
    return;
  }

  handoff.innerHTML = items
    .map(
      (item) => `
        <article class="dayops-item status-${getItemStatusClass(item)}">
          <div class="dayops-item-header">
            <div class="dayops-item-content">
              <h4 class="dayops-item-title">${escapeHtml(item.title || item.contactPerson || "未設定")}</h4>
              <div class="dayops-item-meta">
                <span class="status-badge status-${getItemStatusClass(item)}">${escapeHtml(getTaskTypeLabel(item))}</span>
                <span class="meta-chip">元日付: ${escapeHtml(item.originDate || item.sourceDate || "")}</span>
                <span class="meta-chip">${escapeHtml(buildTimelineRange(item))}</span>
              </div>
              <p>${escapeHtml(getTimelineSubtitle(item) || "")}</p>
            </div>
          </div>
          <div class="dayops-actions">
            <button class="action-button action-complete" data-item-complete-button="${item.id}" type="button">完了</button>
            <button class="action-button action-reset" data-item-reset="${item.id}" type="button">未着手</button>
            <button class="action-button action-postpone" data-item-postpone="${item.id}" type="button">明日に回す</button>
            <button class="action-button action-reschedule" data-item-reschedule="${item.id}" type="button">時間変更</button>
            <button class="action-button action-activate" data-handover-activate="${item.id}" type="button">今日やる</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPreviousIncompleteSection() {
  const section = document.getElementById("previous-incomplete-section");
  const list = document.getElementById("previous-incomplete-list");
  if (!section || !list) {
    return;
  }
  const items = getPreviousIncompleteItems();
  section.classList.toggle("hidden", items.length === 0);
  if (!items.length) {
    list.innerHTML = "";
    return;
  }
  list.innerHTML = items
    .map(
      (item) => `
        <article class="dayops-item status-${getItemStatusClass(item)} previous-task-item" id="previous-item-${item.id}">
          <div class="dayops-item-header">
            <div class="dayops-item-content">
              <h4 class="dayops-item-title">${escapeHtml(buildDayOpsTitle(item))}</h4>
              <p>${escapeHtml(getTimelineSubtitle(item) || "")}</p>
              <div class="dayops-item-meta">
                <span class="status-badge status-${getItemStatusClass(item)}">${escapeHtml(getTaskTypeLabel(item))}</span>
                <span class="meta-chip">予定日 ${escapeHtml(getItemDateKey(item) || "未設定")}</span>
                <span class="meta-chip">${escapeHtml(buildTimelineRange(item))}</span>
              </div>
            </div>
          </div>
          <div class="dayops-actions">
            ${buildTaskActionButtons(item, { type: item.type === "schedule" ? DAY_OPS_TYPES.schedule121 : item.type })}
          </div>
        </article>
      `
    )
    .join("");
}

function calculateProgress() {
  const log = getCurrentLog();
  const gratitudeDone = Object.values(log.gratitude).every((value) => value.trim());
  const dayOpsItems = getAllActionItems(log);
  const dayOpsDone = dayOpsItems.filter((item) => item.completed || item.status === "done" || item.status === "postponed").length;
  const achieved = [
    log.bootSequence.missionStatement.completed && (!state.settings.bootSequence.requireTimeMachine || log.bootSequence.timeMachine10m.completed),
    ...MORNING_ROUTINE_ITEMS.map((item) => log.morningRoutine[item.key]),
    ...(log.topPriorities || []).map((item) => Boolean(item.title)),
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

function renderFloatingTimelineVisibility() {
  const floating = document.getElementById("floating-timeline");
  const summary = document.getElementById("floating-timeline-summary");
  if (!floating || !summary) {
    return;
  }
  const section = document.getElementById("task-section-timeline");
  const body = document.getElementById("task-section-body-timeline");
  const memo = document.getElementById("task-memo-section");
  const sourceSummary = document.getElementById("task-section-summary-timeline");
  const active = state.activeScreen === "dayOps" && section && body && memo && !body.classList.contains("hidden");
  if (!active) {
    floating.classList.add("hidden");
    floating.classList.remove("visible");
    return;
  }
  const sectionRect = section.getBoundingClientRect();
  const memoRect = memo.getBoundingClientRect();
  const visible = sectionRect.top <= 16 && memoRect.top > 96;
  summary.textContent = sourceSummary ? sourceSummary.innerText.replace(/\s+/g, " ").trim() : "";
  floating.classList.remove("hidden");
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
  syncPrimaryMit(log);
  document.getElementById("today-title").textContent = formatMorningHeaderDate(state.currentDateKey);
  document.getElementById("week-goal").value = log.weekGoal;
  (log.topPriorities || []).forEach((item, index) => {
    const order = index + 1;
    const title = document.getElementById(`priority-${order}-title`);
    const start = document.getElementById(`priority-${order}-start`);
    const duration = document.getElementById(`priority-${order}-duration`);
    const memo = document.getElementById(`priority-${order}-memo`);
    if (title) {
      title.value = item.title || "";
    }
    if (start) {
      start.value = item.startTime || "";
    }
    if (duration) {
      duration.value = item.durationMinutes || "";
    }
    if (memo) {
      memo.value = item.memo || "";
    }
  });
  renderRoutineList("morning-routine-list", MORNING_ROUTINE_ITEMS, log.morningRoutine, "morning", {
    collapseCompleted: true,
  });
  updateProgressUi();
}

function renderTaskFocusList() {
  const log = getCurrentLog();
  const container = document.getElementById("task-focus-list");
  if (!container) {
    return;
  }
  const priorities = (log.topPriorities || []).filter((item) => itemHasContent(item));
  if (!priorities.length) {
    container.innerHTML = '<div class="dayops-empty">今日の最重要はまだ未設定です。</div>';
    return;
  }
  container.innerHTML = priorities
    .map(
      (item, index) => `
        <article class="task-focus-item status-${getItemStatusClass(item)}">
          <div class="task-focus-copy">
            <div class="task-focus-head">
              <span class="task-focus-index">${index + 1}</span>
              <strong>${escapeHtml(item.title || "未設定")}</strong>
            </div>
            <p class="task-focus-meta">${escapeHtml(buildScheduleMetaLine(item) || "日時未設定")}</p>
            ${item.memo ? `<p class="task-focus-note">${escapeHtml(item.memo)}</p>` : ""}
          </div>
          <div class="dayops-actions">
            <button class="action-button action-complete" data-item-complete-button="${item.id}" type="button">完了</button>
            <button class="action-button action-reset" data-item-reset="${item.id}" type="button">未着手</button>
            <button class="action-button action-postpone" data-item-postpone="${item.id}" type="button">明日に回す</button>
            <button class="action-button action-reschedule" data-item-reschedule="${item.id}" type="button">時間変更</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTaskSection(type, items) {
  const visibleItems = type === DAY_OPS_TYPES.task ? getOpenTaskItems(items) : items.filter((item) => !isItemDeletedOrArchived(item));
  const article = document.getElementById(`task-section-${type}`);
  const body = document.getElementById(`task-section-body-${type}`);
  const summary = document.getElementById(`task-section-summary-${type}`);
  const formPanel = document.getElementById(`${type}-form-panel`);
  const formActions = document.getElementById(`${type}-form-actions`);
  const toggleButton = article.querySelector(`[data-task-form-toggle="${type}"]`);
  const unresolvedCount = visibleItems.filter((item) => itemNeedsReschedule(item)).length;
  const sectionOpen = Boolean(state.ui.taskSections[type]);
  const formOpen = Boolean(state.ui.taskForms[type]);
  article.classList.toggle("has-items", visibleItems.length > 0);
  article.classList.toggle("has-unresolved", unresolvedCount > 0);
  article.classList.toggle("is-open", sectionOpen);
  body.classList.toggle("hidden", !sectionOpen);
  formPanel.classList.toggle("hidden", !formOpen);
  formActions.classList.toggle("hidden", !formOpen);
  if (toggleButton) {
    toggleButton.textContent = formOpen ? "入力を閉じる" : "+ 追加する";
  }
  summary.innerHTML = [
    visibleItems.length ? `<span class="task-summary-pill has-items">${visibleItems.length}件</span>` : "",
    unresolvedCount ? `<span class="task-summary-pill is-alert">未整理${unresolvedCount}</span>` : "",
  ]
    .filter(Boolean)
    .join("");
  summary.classList.toggle("is-empty", !items.length && !unresolvedCount);
}

function renderTimelineSection() {
  const article = document.getElementById("task-section-timeline");
  const body = document.getElementById("task-section-body-timeline");
  const summary = document.getElementById("task-section-summary-timeline");
  if (!article || !body || !summary) {
    return;
  }
  const timelineItems = getTimelineItems();
  const unscheduledItems = getUnscheduledTodayItems();
  const sectionOpen = Boolean(state.ui.taskSections[TASK_TIMELINE_SECTION]);
  const importantCount = timelineItems.filter((item) => item.isImportantToday).length + unscheduledItems.filter((item) => item.isImportantToday).length;
  article.classList.toggle("has-items", timelineItems.length + unscheduledItems.length > 0);
  article.classList.toggle("is-open", sectionOpen);
  body.classList.toggle("hidden", !sectionOpen);
  summary.innerHTML = [
    timelineItems.length + unscheduledItems.length ? `<span class="task-summary-pill has-items">${timelineItems.length + unscheduledItems.length}件</span>` : "",
    importantCount ? `<span class="task-summary-pill has-items">最重要${importantCount}</span>` : "",
  ]
    .filter(Boolean)
    .join("");
  summary.classList.toggle("is-empty", timelineItems.length + unscheduledItems.length === 0);
  renderFloatingTimelineVisibility();
}

function getTaskStatusLabel(item) {
  if (item.completed || item.status === "done") {
    return "完了";
  }
  return "未着手";
}

function getDayOpsStatusLabel(status) {
  return getTaskStatusLabel({ status, completed: status === "done" });
}

function getItemStatusClass(item) {
  if (isItemCompleted(item)) {
    return "done";
  }
  if (item.status === "postponed" && getItemDateKey(item) > state.currentDateKey) {
    return "carryOver";
  }
  return "open";
}

function getTaskTypeLabel(item) {
  if (item.isImportantToday || item.type === "priority") {
    return "最重要";
  }
  if (item.type === "contact") {
    return "連絡";
  }
  if (item.type === "schedule") {
    return "日程調整";
  }
  if (item.type === "timeline") {
    return "タイムライン";
  }
  return "タスク";
}

function buildTimelineRange(item) {
  const duration = getItemDurationMinutes(item);
  if (item.startTime && duration) {
    return `${item.startTime} / ${duration}分`;
  }
  if (item.startTime) {
    return item.startTime;
  }
  if (duration) {
    return `${duration}分`;
  }
  return "時間未設定";
}

function buildScheduleMetaLine(item) {
  const parts = [];
  if (item.scheduledDate) {
    parts.push(item.scheduledDate);
  }
  if (item.startTime) {
    parts.push(`開始 ${item.startTime}`);
  }
  const duration = getItemDurationMinutes(item);
  if (duration) {
    parts.push(`所要 ${duration}分`);
  }
  return parts.join(" / ");
}

function buildTaskActionButtons(item, options = {}) {
  const isDone = item.completed || item.status === "done";
  const includeDelete = Boolean(options.includeDelete);
  const type = options.type || item.type || DAY_OPS_TYPES.task;
  const fromTimeline = Boolean(options.fromTimeline);
  const rescheduleAttr =
    fromTimeline && getTaskSectionForItem(item) ? `data-item-timeline-reschedule="${item.id}"` : `data-item-reschedule="${item.id}"`;
  const deleteAction = includeDelete
    ? `<button class="action-button action-delete" data-dayops-delete="${type}:${item.id}" type="button">削除</button>`
    : "";
  return `
    <button class="action-button action-complete ${isDone ? "is-active" : ""}" data-item-complete-button="${item.id}" type="button">✓ 完了</button>
    <button class="action-button action-reset ${!isDone ? "is-active" : ""}" data-item-reset="${item.id}" type="button">未着手</button>
    <button class="action-button action-postpone" data-item-postpone="${item.id}" type="button">明日に回す</button>
    <button class="action-button action-reschedule" ${rescheduleAttr} type="button">時間変更</button>
    ${deleteAction}
  `;
}

function getTimelineSubtitle(item) {
  if (item.type === "contact") {
    return [item.contactPerson, item.description, item.contactTool === "その他" ? item.contactToolOther : item.contactTool].filter(Boolean).join(" / ");
  }
  if (item.type === "schedule") {
    return [item.contactPerson, item.description, (item.candidateDates || []).join(" / ")].filter(Boolean).join(" / ");
  }
  return [item.description, item.memo].filter(Boolean).join(" / ");
}

function buildDayOpsMeta(item) {
  if (item.type === "contact") {
    return [
      buildScheduleMetaLine(item),
      item.contactTool ? `ツール: ${item.contactTool === "その他" ? item.contactToolOther || "その他" : item.contactTool}` : "",
    ].filter(Boolean);
  }
  if (item.type === "schedule") {
    return [
      buildScheduleMetaLine(item),
      item.contactTool ? `ツール: ${item.contactTool === "その他" ? item.contactToolOther || "その他" : item.contactTool}` : "",
    ].filter(Boolean);
  }
  return [
    buildScheduleMetaLine(item),
    item.priority ? `優先度: ${item.priority}` : "",
    item.description ? item.description : "",
  ].filter(Boolean);
}

function buildDayOpsTitle(item) {
  if (item.type === "contact" || item.type === "schedule") {
    return item.contactPerson || item.title || "名前未入力";
  }
  return item.title || "未設定";
}

function renderDayOpsList(containerId, items, type) {
  const container = document.getElementById(containerId);
  const visibleItems = type === DAY_OPS_TYPES.task ? getOpenTaskItems(items) : items.filter((item) => !isItemDeletedOrArchived(item));
  if (!visibleItems.length) {
    container.innerHTML = '<div class="dayops-empty">まだ項目はありません。</div>';
    return;
  }

  container.innerHTML = visibleItems
    .map((item) => {
      const meta = buildDayOpsMeta(item);
      const isDone = item.completed || item.status === "done";
      const isRescheduling = state.ui.reschedulingTaskId === item.id;
      const isTask = type === DAY_OPS_TYPES.task;
      const isExpanded = Boolean(state.ui.expandedTaskItems[item.id]);
      const scheduleMeta = buildScheduleMetaLine(item) || "日時未設定";
      const summaryMeta = [item.priority ? `優先度 ${item.priority}` : "", item.scheduledDate || ""].filter(Boolean).join(" / ");
      return `
        <article class="dayops-item status-${getItemStatusClass(item)} ${isTask ? "task-accordion-item" : ""} ${isExpanded ? "is-expanded" : ""}" id="dayops-item-${item.id}">
          ${
            isTask
              ? `<button class="task-accordion-toggle" data-task-item-toggle="${item.id}" type="button">
                  <div class="task-accordion-main">
                    <span class="status-dot status-${getItemStatusClass(item)}" aria-hidden="true"></span>
                    <div class="task-accordion-copy">
                      <h4 class="dayops-item-title">${escapeHtml(buildDayOpsTitle(item))}</h4>
                      ${summaryMeta ? `<p class="task-accordion-summary">${escapeHtml(summaryMeta)}</p>` : ""}
                    </div>
                  </div>
                  <span class="task-section-chevron" aria-hidden="true"></span>
                </button>`
              : `<div class="dayops-item-header">
                  <div class="dayops-item-content">
                    <h4 class="dayops-item-title">${escapeHtml(buildDayOpsTitle(item))}</h4>
                    <p>${escapeHtml(getTimelineSubtitle(item) || "")}</p>
                    <div class="dayops-item-meta">
                      <span class="status-badge status-${getItemStatusClass(item)}">${escapeHtml(getTaskStatusLabel(item))}</span>
                      ${meta.map((entry) => `<span class="meta-chip">${escapeHtml(entry)}</span>`).join("")}
                    </div>
                  </div>
                </div>`
          }
          <div class="${isTask ? `task-accordion-body ${isExpanded ? "" : "hidden"}` : ""}">
            ${
              isTask
                ? `<div class="dayops-item-content">
                    <p>${escapeHtml(getTimelineSubtitle(item) || "")}</p>
                    <div class="dayops-item-meta">
                      <span class="status-badge status-${getItemStatusClass(item)}">${escapeHtml(getTaskStatusLabel(item))}</span>
                      <span class="meta-chip">${escapeHtml(scheduleMeta)}</span>
                      ${item.memo ? `<span class="meta-chip">メモあり</span>` : ""}
                    </div>
                  </div>`
                : ""
            }
            <div class="dayops-actions">
              ${buildTaskActionButtons(item, { includeDelete: true, type })}
            </div>
          ${
            isRescheduling
              ? `<div class="task-reschedule-panel">
                  <label>
                    <span>日付</span>
                    <input type="date" data-task-reschedule-date="${item.id}" value="${escapeHtml(state.ui.reschedulingTaskDate)}" />
                  </label>
                  <div class="priority-editor-times">
                    <label>
                      <span>開始</span>
                      <input type="time" data-task-reschedule-start="${item.id}" value="${escapeHtml(state.ui.reschedulingTaskStart)}" />
                    </label>
                    <label>
                      <span>所要時間(分)</span>
                      <input type="number" min="1" inputmode="numeric" data-task-reschedule-duration="${item.id}" value="${escapeHtml(state.ui.reschedulingTaskDuration)}" />
                    </label>
                  </div>
                  <div class="action-row compact-row">
                    <button class="secondary-button" data-task-reschedule-save="${item.id}" type="button">保存</button>
                    <button class="ghost-button" data-task-reschedule-cancel type="button">キャンセル</button>
                  </div>
                </div>`
              : ""
          }
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCompletedTaskList() {
  const group = document.getElementById("task-completed-group");
  const count = document.getElementById("task-completed-count");
  const list = document.getElementById("task-completed-list");
  if (!group || !count || !list) {
    return;
  }
  const completedItems = getCompletedTaskItems();
  group.classList.toggle("hidden", completedItems.length === 0);
  count.textContent = `${completedItems.length}件`;
  group.classList.toggle("is-open", Boolean(state.ui.completedTasksOpen));
  list.classList.toggle("hidden", !state.ui.completedTasksOpen);
  if (!completedItems.length) {
    list.innerHTML = "";
    return;
  }
  list.innerHTML = completedItems
    .map(
      (item) => `
        <article class="completed-task-item">
          <span class="completed-task-label">完了</span>
          <strong>${escapeHtml(buildDayOpsTitle(item))}</strong>
        </article>
      `
    )
    .join("");
}

function renderDayOps() {
  const log = getCurrentLog();
  const todayContactItems = getTodaySectionItems(DAY_OPS_TYPES.contact);
  const todayScheduleItems = getTodaySectionItems(DAY_OPS_TYPES.schedule121);
  const todayTaskItems = getTodaySectionItems(DAY_OPS_TYPES.task);
  ensureTaskUiState(log);
  syncPrimaryMit(log);
  document.getElementById("contact-date").value = state.dayOpsDrafts.contact.scheduledDate || state.currentDateKey;
  document.getElementById("contact-start").value = state.dayOpsDrafts.contact.startTime;
  document.getElementById("contact-end").value = state.dayOpsDrafts.contact.endTime;
  document.getElementById("contact-name").value = state.dayOpsDrafts.contact.name;
  document.getElementById("contact-requirement").value = state.dayOpsDrafts.contact.requirement;
  document.getElementById("contact-tool").value = state.dayOpsDrafts.contact.contactTool;
  document.getElementById("contact-tool-other").value = state.dayOpsDrafts.contact.contactToolOther;
  document.getElementById("contact-memo").value = state.dayOpsDrafts.contact.memo;
  document.getElementById("schedule-date").value = state.dayOpsDrafts.schedule121.scheduledDate || state.currentDateKey;
  document.getElementById("schedule-start").value = state.dayOpsDrafts.schedule121.startTime;
  document.getElementById("schedule-end").value = state.dayOpsDrafts.schedule121.endTime;
  document.getElementById("schedule-name").value = state.dayOpsDrafts.schedule121.name;
  document.getElementById("schedule-job").value = state.dayOpsDrafts.schedule121.job;
  document.getElementById("schedule-tool").value = state.dayOpsDrafts.schedule121.contactTool;
  document.getElementById("schedule-tool-other").value = state.dayOpsDrafts.schedule121.contactToolOther;
  document.getElementById("schedule-candidate-dates").value = state.dayOpsDrafts.schedule121.candidateDatesText;
  document.getElementById("schedule-memo").value = state.dayOpsDrafts.schedule121.memo;
  document.getElementById("task-date").value = state.dayOpsDrafts.task.scheduledDate || state.currentDateKey;
  document.getElementById("task-start").value = state.dayOpsDrafts.task.startTime;
  document.getElementById("task-duration").value = state.dayOpsDrafts.task.durationMinutes;
  document.getElementById("task-title").value = state.dayOpsDrafts.task.title;
  document.getElementById("task-goal").value = state.dayOpsDrafts.task.description;
  document.getElementById("task-priority").value = state.dayOpsDrafts.task.priority;
  document.getElementById("task-memo").value = state.dayOpsDrafts.task.memo;
  document.getElementById("expense-memo").value = log.dayOps.expenseMemo;
  document.getElementById("task-form-submit-button").textContent = "タスクを追加";
  document.getElementById("global-reschedule-date").value = state.ui.reschedulingTaskDate || state.currentDateKey;
  document.getElementById("global-reschedule-start").value = state.ui.reschedulingTaskStart;
  document.getElementById("global-reschedule-duration").value = state.ui.reschedulingTaskDuration;
  document.getElementById("global-reschedule-panel").classList.toggle("hidden", !state.ui.reschedulingTaskId);

  renderPreviousIncompleteSection();
  renderDayOpsList("contact-list", todayContactItems, DAY_OPS_TYPES.contact);
  renderDayOpsList("schedule121-list", todayScheduleItems, DAY_OPS_TYPES.schedule121);
  renderDayOpsList("task-list", todayTaskItems, DAY_OPS_TYPES.task);
  renderTaskTimeline();
  renderTaskSection(DAY_OPS_TYPES.contact, todayContactItems);
  renderTaskSection(DAY_OPS_TYPES.schedule121, todayScheduleItems);
  renderTaskSection(DAY_OPS_TYPES.task, todayTaskItems);
  renderTimelineSection();
  renderCompletedTaskList(todayTaskItems);
  toggleToolOtherVisibility("contact", state.dayOpsDrafts.contact.contactTool);
  toggleToolOtherVisibility("schedule121", state.dayOpsDrafts.schedule121.contactTool);

  const unresolved = countUnresolvedDayOps(log);
  document.getElementById("dayops-status-note").textContent = unresolved ? `未整理 ${unresolved} 件` : "";
  document.getElementById("dayops-status-note").classList.toggle("hidden", unresolved === 0);
  document.getElementById("dayops-status-note").classList.toggle("is-alert", unresolved > 0);
  document.getElementById("dayops-next-button").disabled = unresolved > 0;
  updateProgressUi();
  scrollToPendingTarget();
}

function renderNight() {
  const log = getCurrentLog();
  if (!state.dayOpsDrafts.nightTask.scheduledDate) {
    resetNightTaskDraft();
  }
  document.getElementById("fb-learning").value = log.reflection.fbLearning;
  document.getElementById("next-action").value = log.reflection.nextAction;
  document.getElementById("good-and-new").value = log.reflection.goodAndNew;
  document.getElementById("gratitude-person").value = log.gratitude.person;
  document.getElementById("gratitude-what").value = log.gratitude.what;
  document.getElementById("gratitude-weekly-action").value = log.gratitude.weeklyAction;
  document.getElementById("night-task-date").value = state.dayOpsDrafts.nightTask.scheduledDate || getTomorrowDateKey();
  document.getElementById("night-task-title").value = state.dayOpsDrafts.nightTask.title;
  document.getElementById("night-task-description").value = state.dayOpsDrafts.nightTask.description;
  renderRoutineList("night-routine-list", NIGHT_ROUTINE_ITEMS, log.nightRoutine, "night");
  updateProgressUi();
}

function formatDayOpsPreview(items) {
  if (!items.length) {
    return "なし";
  }
  return items
    .map((item) => `${buildDayOpsTitle(item)} (${getTaskStatusLabel(item)})`)
    .join(" / ");
}

function getLogActionItems(dateKey) {
  return getAllActionItemsAcrossLogs()
    .filter((item) => isTaskPageVisibleItem(item, dateKey))
    .sort(compareActionItems);
}

function buildLogTaskRows(items, done) {
  if (!items.length) {
    return '<p class="inline-note">該当するタスクはありません。</p>';
  }
  return items
    .map((item) => {
      const scheduleMeta = buildScheduleMetaLine(item) || "予定未設定";
      const completedMeta = done ? ` / 完了 ${formatCompletedAtTime(item.completedAt) || "記録なし"}` : "";
      return `
        <article class="log-task-row ${done ? "is-done" : "is-open"}">
          <span class="log-task-icon" aria-hidden="true">${done ? "✓" : "□"}</span>
          <div class="log-task-copy">
            <strong>${escapeHtml(buildDayOpsTitle(item))}</strong>
            <p>${escapeHtml(getTaskTypeLabel(item))} / ${escapeHtml(scheduleMeta)}${escapeHtml(completedMeta)}</p>
          </div>
        </article>
      `;
    })
    .join("");
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
  const logItems = getLogActionItems(log.date);
  const completedItems = logItems.filter((item) => isItemCompleted(item));
  const incompleteItems = logItems.filter((item) => !isItemCompleted(item));
  detail.innerHTML = `
    <div class="log-detail-block">
      <strong>LIFE GOAL</strong>
      <p>Mission Statement: ${log.bootSequence.missionStatement.completed ? "完了" : "未完了"}</p>
      <p>10m Time Machine: ${log.bootSequence.timeMachine10m.completed ? "完了" : "未完了"}</p>
    </div>
    <div class="log-detail-block">
      <strong>今日の最重要</strong>
      ${(log.topPriorities || []).map((item) => `<p>${escapeHtml(item.title || "未入力")} / ${escapeHtml(buildTimelineRange(item))}</p>`).join("")}
    </div>
    <div class="log-detail-block">
      <strong>完了したタスク</strong>
      <div class="log-task-group">
        ${buildLogTaskRows(completedItems, true)}
      </div>
    </div>
    <div class="log-detail-block">
      <strong>未完了のタスク</strong>
      <div class="log-task-group">
        ${buildLogTaskRows(incompleteItems, false)}
      </div>
    </div>
    <div class="log-detail-block">
      <strong>明日のNEXT ACTION</strong>
      <p>${escapeHtml(log.reflection.nextAction || "未入力")}</p>
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

  const birthdayInput = document.getElementById("settings-user-birthday");
  if (birthdayInput) {
    birthdayInput.value = state.settings.userBirthday || "";
  }
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
  renderSaveStatus();
}

function renderApp() {
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
  renderFloatingTimelineVisibility();
  renderSaveFabVisibility();
  renderSaveStatus();
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
  return items.map((item) => `- [${item.completed ? "x" : " "}] ${formatter(item)} (${getTaskStatusLabel(item)})`);
}

function buildMarkdown(log) {
  const mark = (value) => (value ? "x" : " ");
  const lines = [
    "# LIFE GOAL",
    "",
    `## ${log.date}`,
    "",
    "## LIFE GOAL",
    "",
    "### Mission Statement",
    `- [${mark(log.bootSequence.missionStatement.readAloud)}] すべて声に出して読んだ`,
    `- [${mark(log.bootSequence.missionStatement.liveByPrinciples)}] 今日もこの原則で生きる`,
    "",
    "### 10mタイムマシン",
    `- どんな作品・事業を生み出しているか: ${log.bootSequence.timeMachine10m.futureVision.worksAndBusiness}`,
    `- 誰のどんなお困りごとを解決しているか: ${log.bootSequence.timeMachine10m.futureVision.solvedProblems}`,
    `- 収入構造: ${log.bootSequence.timeMachine10m.futureVision.incomeStructure}`,
    `- 周囲への影響: ${log.bootSequence.timeMachine10m.futureVision.socialImpact}`,
    `- 最も重視しているもの: ${log.bootSequence.timeMachine10m.futureVision.coreValue}`,
    `- 見た目と表情: ${log.bootSequence.timeMachine10m.futureVision.appearanceAndExpression}`,
    `- 3年後の自分から今の自分への一言: ${log.bootSequence.timeMachine10m.futureVision.messageFromFuture}`,
    `- 未来から逆算した今日の最重要アクション: ${log.bootSequence.timeMachine10m.futureVision.todayMostImportantAction}`,
    "",
    "## Week Goal",
    `- ${log.weekGoal}`,
    "",
    "## 朝ルーティン",
    ...MORNING_ROUTINE_ITEMS.map((item) => `- [${mark(log.morningRoutine[item.key])}] ${item.label}`),
    "",
    "## 今日の最重要",
    ...(log.topPriorities || []).map(
      (item, index) => `- [${mark(item.completed)}] ${index + 1}: ${item.title} / ${buildTimelineRange(item)} / ${item.memo || ""}`
    ),
    "",
    "## タスク / 連絡",
    ...formatMarkdownDayOps(log.contactItems || [], (item) => `${item.contactPerson} / ${item.contactTool || item.contactToolOther || ""} / ${item.description}`),
    "",
    "## タスク / 日程調整",
    ...formatMarkdownDayOps(log.scheduleItems || [], (item) => `${item.contactPerson} / ${item.description} / ${(item.candidateDates || []).join(" / ")}`),
    "",
    "## タスク / 作業タスク",
    ...formatMarkdownDayOps(log.taskItems || [], (item) => `${item.title} / ${item.description} / ${buildTimelineRange(item)}`),
    "",
    "## メモ",
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

function addNightTask() {
  const draft = state.dayOpsDrafts.nightTask;
  if (!draft.title.trim()) {
    return;
  }
  const log = getCurrentLog();
  const now = new Date().toISOString();
  log.taskItems.push(
    createDefaultDayOpsItem(DAY_OPS_TYPES.task, {
      title: draft.title.trim(),
      description: draft.description.trim(),
      scheduledDate: draft.scheduledDate || getTomorrowDateKey(),
      status: "todo",
      completed: false,
      source: "night",
      sourceDate: log.date,
      createdAt: now,
      updatedAt: now,
    })
  );
  resetNightTaskDraft();
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
    default:
      return false;
  }
  persistDailyLogsDeferred();
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
  persistDailyLogs(true);
  if (type === "morning") {
    renderRoutineList("morning-routine-list", MORNING_ROUTINE_ITEMS, log.morningRoutine, "morning", {
      collapseCompleted: true,
    });
  } else {
    renderRoutineList("night-routine-list", NIGHT_ROUTINE_ITEMS, log.nightRoutine, "night");
  }
  updateProgressUi();
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
    log.contactItems.push(
      createDefaultDayOpsItem(type, {
        contactPerson: draft.name.trim(),
        title: draft.requirement.trim() || draft.name.trim(),
        description: draft.requirement.trim(),
        scheduledDate: draft.scheduledDate || state.currentDateKey,
        startTime: draft.startTime || "",
        endTime: draft.endTime || "",
        durationMinutes: computeDurationMinutes(draft.startTime, draft.endTime),
        contactTool: draft.contactTool || "",
        contactToolOther: draft.contactToolOther || "",
        memo: draft.memo.trim(),
        sourceDate: log.date,
        createdAt: now,
        updatedAt: now,
      })
    );
    state.dayOpsDrafts.contact = {
      scheduledDate: state.currentDateKey,
      startTime: "",
      endTime: "",
      durationMinutes: "",
      name: "",
      requirement: "",
      contactTool: "",
      contactToolOther: "",
      memo: "",
    };
  } else if (type === DAY_OPS_TYPES.schedule121) {
    const draft = state.dayOpsDrafts.schedule121;
    if (!draft.name.trim()) {
      return;
    }
    log.scheduleItems.push(
      createDefaultDayOpsItem(type, {
        contactPerson: draft.name.trim(),
        title: draft.job.trim() || draft.name.trim(),
        description: draft.job.trim(),
        scheduledDate: draft.scheduledDate || state.currentDateKey,
        startTime: draft.startTime || "",
        endTime: draft.endTime || "",
        durationMinutes: computeDurationMinutes(draft.startTime, draft.endTime),
        contactTool: draft.contactTool || "",
        contactToolOther: draft.contactToolOther || "",
        candidateDates: String(draft.candidateDatesText || "")
          .split("/")
          .map((value) => value.trim())
          .filter(Boolean),
        memo: draft.memo.trim(),
        sourceDate: log.date,
        createdAt: now,
        updatedAt: now,
      })
    );
    state.dayOpsDrafts.schedule121 = {
      scheduledDate: state.currentDateKey,
      startTime: "",
      endTime: "",
      durationMinutes: "",
      name: "",
      job: "",
      contactTool: "",
      contactToolOther: "",
      candidateDatesText: "",
      memo: "",
    };
  } else {
    const draft = state.dayOpsDrafts.task;
    if (!draft.title.trim()) {
      return;
    }
    log.taskItems.push(
      createDefaultDayOpsItem(type, {
        title: draft.title.trim(),
        description: draft.description.trim(),
        memo: draft.memo.trim(),
        priority: draft.priority || null,
        scheduledDate: draft.scheduledDate || state.currentDateKey,
        startTime: draft.startTime || "",
        durationMinutes: normalizeDurationMinutes(draft.durationMinutes),
        endTime: computeEndTime(draft.startTime || "", normalizeDurationMinutes(draft.durationMinutes)),
        sourceDate: log.date,
        createdAt: now,
        updatedAt: now,
      })
    );
    resetTaskDraft();
  }

  state.ui.taskSections[type] = true;
  state.ui.taskForms[type] = false;
  persistDailyLogs(true);
  renderDayOps();
}

function getDayOpsBucketByType(log, type) {
  if (type === DAY_OPS_TYPES.contact) {
    return log.contactItems;
  }
  if (type === DAY_OPS_TYPES.schedule121) {
    return log.scheduleItems;
  }
  return log.taskItems;
}

function findItemById(id, log = getCurrentLog()) {
  const localPools = [
    ...(log.topPriorities || []),
    ...(log.handoverItems || []),
    ...(log.timelineItems || []),
    ...(log.contactItems || []),
    ...(log.scheduleItems || []),
    ...(log.taskItems || []),
  ];
  const localMatch = localPools.find((item) => item.id === id) || localPools.find((item) => item.sourceItemId === id);
  if (localMatch) {
    return localMatch;
  }
  return findActionItemById(id);
}

function findSourceItemById(sourceId) {
  if (!sourceId) {
    return null;
  }
  const logs = Object.values(state.dailyLogs);
  for (const log of logs) {
    const pools = [
      ...(log.topPriorities || []),
      ...(log.timelineItems || []),
      ...(log.contactItems || []),
      ...(log.scheduleItems || []),
      ...(log.taskItems || []),
    ];
    const found = pools.find((item) => item.id === sourceId);
    if (found) {
      return found;
    }
  }
  return null;
}

function toggleToolOtherVisibility(type, value) {
  const wrapId = type === "contact" ? "contact-tool-other-wrap" : "schedule-tool-other-wrap";
  const wrap = document.getElementById(wrapId);
  if (wrap) {
    wrap.classList.toggle("hidden", value !== "その他");
  }
}

function markItemCompleted(id, checked) {
  const item = findItemById(id);
  if (!item) {
    return;
  }
  const completedAt = checked ? new Date().toISOString() : null;
  item.completed = checked;
  item.completedAt = completedAt;
  item.status = checked ? "done" : "todo";
  item.updatedAt = new Date().toISOString();
  if (item.sourceItemId) {
    const source = findSourceItemById(item.sourceItemId);
    if (source) {
      source.completed = checked;
      source.completedAt = completedAt;
      source.status = checked ? "done" : "todo";
      source.updatedAt = item.updatedAt;
    }
    item.handoverResolved = checked;
  }
  persistDailyLogs(false);
  renderDayOps();
  renderNight();
}

function postponeItemToTomorrow(id) {
  const item = findItemById(id);
  if (!item) {
    return;
  }
  const date = new Date(`${state.currentDateKey}T00:00:00`);
  date.setDate(date.getDate() + 1);
  const tomorrow = getDateKey(date);
  updateTaskSchedule(id, tomorrow, item.startTime || "", getItemDurationMinutes(item));
  const target = findItemById(id);
  target.completed = false;
  target.completedAt = null;
  target.status = "todo";
  target.postponedFrom = state.currentDateKey;
  target.postponedTo = tomorrow;
  target.updatedAt = new Date().toISOString();
  if (target.sourceItemId) {
    const source = findSourceItemById(target.sourceItemId);
    if (source) {
      source.completed = false;
      source.completedAt = null;
      source.status = "todo";
      source.postponedFrom = state.currentDateKey;
      source.postponedTo = tomorrow;
      source.updatedAt = target.updatedAt;
    }
  }
  if (target.id.startsWith("handover-")) {
    target.handoverResolved = true;
  }
  persistDailyLogs(true);
  renderDayOps();
  renderNight();
}

function activateHandoverItem(id) {
  const handoverItem = (getCurrentLog().handoverItems || []).find((item) => item.id === id);
  if (!handoverItem) {
    return;
  }
  const targetType =
    handoverItem.sourceType === "contact"
      ? DAY_OPS_TYPES.contact
      : handoverItem.sourceType === "schedule"
        ? DAY_OPS_TYPES.schedule121
        : DAY_OPS_TYPES.task;
  const bucket = getDayOpsBucketByType(getCurrentLog(), targetType);
  const existing = bucket.find((item) => item.sourceItemId === handoverItem.sourceItemId || item.id === handoverItem.sourceItemId);
  if (existing) {
    updateTaskSchedule(existing.id, state.currentDateKey, existing.startTime || "", getItemDurationMinutes(existing));
    existing.postponedTo = null;
    existing.postponedFrom = null;
    existing.status = "todo";
    existing.updatedAt = new Date().toISOString();
  } else {
    bucket.push(
      mergeWithDefaults(createDefaultDayOpsItem(targetType), {
        ...handoverItem,
        id: handoverItem.sourceItemId || handoverItem.id,
        type: handoverItem.sourceType || handoverItem.type,
        scheduledDate: state.currentDateKey,
        postponedTo: null,
        postponedFrom: null,
        status: "todo",
        completed: false,
      })
    );
  }
  const source = findSourceItemById(handoverItem.sourceItemId);
  if (source) {
    updateTaskSchedule(source.id, state.currentDateKey, source.startTime || "", getItemDurationMinutes(source));
    source.postponedTo = null;
    source.postponedFrom = null;
    source.status = "todo";
    source.completed = false;
    source.updatedAt = new Date().toISOString();
  }
  handoverItem.handoverResolved = true;
  persistDailyLogs(true);
  renderDayOps();
}

function updateDayOpsStatus(type, id, status) {
  if (status === "done") {
    markItemCompleted(id, true);
    return;
  }
  if (status === "carryOver") {
    postponeItemToTomorrow(id);
    return;
  }
  markItemCompleted(id, false);
}

function deleteDayOpsItem(type, id) {
  const bucket = getDayOpsBucketByType(getCurrentLog(), type);
  const item = bucket.find((entry) => entry.id === id);
  if (item) {
    item.status = "deleted";
    item.updatedAt = new Date().toISOString();
  }
  if (state.ui.reschedulingTaskId === id) {
    state.ui.reschedulingTaskId = null;
    state.ui.reschedulingTaskDate = "";
    state.ui.reschedulingTaskStart = "";
    state.ui.reschedulingTaskDuration = "";
  }
  persistDailyLogs(true);
  renderDayOps();
  renderNight();
}

function handleClick(event) {
  const target = event.target.closest("button, [data-log-date]") || event.target;

  if (target.id === "mission-next-button") {
    const mission = getCurrentLog().bootSequence.missionStatement;
    mission.readAloud = true;
    mission.liveByPrinciples = true;
    mission.completed = true;
    mission.completedAt = mission.completedAt || new Date().toISOString();
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
    const timeMachine = getCurrentLog().bootSequence.timeMachine10m;
    timeMachine.visualizedFuture = true;
    timeMachine.actionVisible = true;
    updateTimeMachineCompletion(true);
    storeCurrentTimeMachineVision();
    persistDailyLogs(true);
    setBootUnlocked();
    return;
  }

  if (target.id === "timer-start-button") {
    startTimer();
    return;
  }

  if (target.id === "dayops-next-button") {
    showScreen("night");
    return;
  }

  if (target.id === "floating-save-button") {
    if (state.activeScreen === "settings") {
      persistSettingsImmediate(true);
    } else {
      persistDailyLogs(true);
    }
    return;
  }

  if (target.id === "add-night-task-button") {
    addNightTask();
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

  if (target.dataset.taskSectionToggle) {
    toggleTaskSection(target.dataset.taskSectionToggle);
    return;
  }

  if (target.dataset.taskItemToggle) {
    toggleTaskItemExpanded(target.dataset.taskItemToggle);
    return;
  }

  if (target.dataset.timelineItemToggle) {
    toggleTimelineItemExpanded(target.dataset.timelineItemToggle);
    return;
  }

  if (target.id === "task-completed-toggle") {
    toggleCompletedTaskGroup();
    return;
  }

  if (target.dataset.taskFormToggle) {
    toggleTaskForm(target.dataset.taskFormToggle);
    return;
  }

  if (target.dataset.dayopsAdd) {
    addDayOpsItem(target.dataset.dayopsAdd);
    return;
  }

  if (target.dataset.itemCompleteButton) {
    markItemCompleted(target.dataset.itemCompleteButton, true);
    return;
  }

  if (target.dataset.itemReset) {
    markItemCompleted(target.dataset.itemReset, false);
    return;
  }

  if (target.dataset.itemPostpone) {
    postponeItemToTomorrow(target.dataset.itemPostpone);
    return;
  }

  if (target.dataset.itemTimelineReschedule) {
    startTaskReschedule(target.dataset.itemTimelineReschedule, { fromTimeline: true });
    return;
  }

  if (target.dataset.itemReschedule) {
    startTaskReschedule(target.dataset.itemReschedule);
    return;
  }

  if (target.dataset.handoverActivate) {
    activateHandoverItem(target.dataset.handoverActivate);
    return;
  }

  if (target.id === "global-reschedule-save" && state.ui.reschedulingTaskId) {
    saveTaskReschedule(state.ui.reschedulingTaskId);
    return;
  }

  if (target.id === "global-reschedule-cancel") {
    cancelTaskReschedule();
    return;
  }

  if (target.dataset.taskRescheduleSave) {
    saveTaskReschedule(target.dataset.taskRescheduleSave);
    return;
  }

  if (target.dataset.taskRescheduleCancel !== undefined) {
    cancelTaskReschedule();
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

}

function handleChange(event) {
  const target = event.target;
  const log = getCurrentLog();

  if (target.dataset.routineType) {
    const bucket = target.dataset.routineType === "morning" ? log.morningRoutine : log.nightRoutine;
    bucket[target.dataset.routineKey] = target.checked;
    if (target.dataset.routineType === "morning" && Object.values(log.morningRoutine).every(Boolean)) {
      state.appMeta.morningCompletedDate = state.currentDateKey;
    }
    persistDailyLogs(true);
    toggleCheckedClass(target);
    if (target.dataset.routineType === "morning") {
      renderRoutineList("morning-routine-list", MORNING_ROUTINE_ITEMS, log.morningRoutine, "morning", {
        collapseCompleted: true,
      });
    }
    updateProgressUi();
    return;
  }

  if (target.dataset.itemComplete) {
    markItemCompleted(target.dataset.itemComplete, target.checked);
    return;
  }

  if (target.id === "contact-tool") {
    state.dayOpsDrafts.contact.contactTool = target.value;
    toggleToolOtherVisibility("contact", target.value);
    persistDailyLogsDeferred();
    return;
  }

  if (target.id === "schedule-tool") {
    state.dayOpsDrafts.schedule121.contactTool = target.value;
    toggleToolOtherVisibility("schedule121", target.value);
    persistDailyLogsDeferred();
    return;
  }

  if (target.dataset.settingsBoot) {
    state.settings.bootSequence[target.dataset.settingsBoot] = target.checked;
    persistSettingsImmediate(false);
    toggleCheckedClass(target);
    return;
  }

  if (target.dataset.settingsProfile) {
    state.settings[target.dataset.settingsProfile] = target.value;
    persistSettingsImmediate(false);
    return;
  }
}

function handleInput(event) {
  const target = event.target;

  if (updateCurrentLogField(target.id, target.value)) {
    return;
  }

  const priorityMatch = target.id.match(/^priority-(\d+)-(title|start|duration|memo)$/);
  if (priorityMatch) {
    const item = getCurrentLog().topPriorities[Number(priorityMatch[1]) - 1];
    if (item) {
      const field = priorityMatch[2];
      if (field === "title") {
        item.title = target.value;
      } else if (field === "start") {
        item.startTime = target.value;
        item.endTime = computeEndTime(target.value, item.durationMinutes);
      } else if (field === "duration") {
        item.durationMinutes = normalizeDurationMinutes(target.value);
        item.endTime = computeEndTime(item.startTime, item.durationMinutes);
      } else if (field === "memo") {
        item.memo = target.value;
      }
      if (Number(priorityMatch[1]) === 2) {
        getCurrentLog().mit.mit2 = getCurrentLog().topPriorities[1].title;
      }
      if (Number(priorityMatch[1]) === 3) {
        getCurrentLog().mit.mit3 = getCurrentLog().topPriorities[2].title;
      }
      persistDailyLogsDeferred();
    }
    return;
  }

  if (target.dataset.timeMachineField) {
    getCurrentLog().bootSequence.timeMachine10m.futureVision[target.dataset.timeMachineField] = target.value;
    if (target.dataset.timeMachineField === "todayMostImportantAction") {
      syncPrimaryMit(getCurrentLog());
      document.getElementById("priority-1-title").value = getCurrentLog().topPriorities[0].title;
    }
    persistDailyLogsDeferred();
    return;
  }

  if (target.dataset.dayopsDraft) {
    const [type, field] = target.dataset.dayopsDraft.split(":");
    state.dayOpsDrafts[type][field] = target.value;
    if (type === "contact" && field === "contactTool") {
      toggleToolOtherVisibility("contact", target.value);
    }
    if (type === "contact" && field === "contactToolOther") {
      toggleToolOtherVisibility("contact", state.dayOpsDrafts.contact.contactTool);
    }
    if (field === "contactTool" && type === "schedule121") {
      toggleToolOtherVisibility("schedule121", target.value);
    }
    if (field === "contactToolOther" && type === "schedule121") {
      toggleToolOtherVisibility("schedule121", state.dayOpsDrafts.schedule121.contactTool);
    }
    persistDailyLogsDeferred();
    return;
  }

  if (target.dataset.nightTaskDraft) {
    const field = target.dataset.nightTaskDraft;
    state.dayOpsDrafts.nightTask[field] = target.value;
    persistDailyLogsDeferred();
    return;
  }

  if (target.dataset.taskRescheduleDate) {
    state.ui.reschedulingTaskDate = target.value;
    return;
  }

  if (target.dataset.taskRescheduleStart) {
    state.ui.reschedulingTaskStart = target.value;
    return;
  }

  if (target.dataset.taskRescheduleDuration) {
    state.ui.reschedulingTaskDuration = target.value;
    return;
  }

  if (target.dataset.settingsMission) {
    state.settings.missionStatement[target.dataset.settingsMission] = target.value;
    persistSettingsImmediate(false);
    renderMissionCards();
    return;
  }

  if (target.dataset.settingsLink) {
    state.settings.links[target.dataset.settingsLink] = target.value;
    scheduleAutoSave();
  }
}

function handleScroll() {
  renderFloatingProgressVisibility();
  renderFloatingTimelineVisibility();
}

function handleVisibilitySave() {
  if (document.visibilityState === "hidden") {
    saveAppState(false);
  }
}

function attachListeners() {
  document.addEventListener("click", handleClick);
  document.addEventListener("change", handleChange);
  document.addEventListener("input", handleInput);
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("beforeunload", () => saveAppState(false));
  window.addEventListener("pagehide", () => saveAppState(false));
  document.addEventListener("visibilitychange", handleVisibilitySave);
}

function boot() {
  initializeState();
  attachListeners();
  renderApp();
  forceScrollTop();
}

boot();
