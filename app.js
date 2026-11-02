
"use strict";

/* ==========================================
   ARM PROGRESS 1.0
   Тренировочная система
========================================== */

const STORAGE_KEY = "arm_progress_v1";

const $ = (id) => document.getElementById(id);

const DAYS = [
  "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"
];

const LEVEL_NAMES = [
  "НАЧИНАЮЩИЙ",
  "ПЕРВЫЙ ШАГ",
  "СТАБИЛЬНОСТЬ",
  "РАЗВИТИЕ",
  "УВЕРЕННОСТЬ",
  "ПРОГРЕСС",
  "СИЛА",
  "ПРОДВИНУТЫЙ",
  "МАСТЕРСТВО",
  "ЭКСПЕРТ"
];

const WORKOUTS = [

  // ДЕНЬ 1 — РУКИ И КОРПУС
  {
    title: "ВОЗВРАЩЕНИЕ ФОРМЫ",
    description: "Начинаем с простых упражнений и привыкаем к нагрузке.",
    exercises: [
      {
        name: "Разминка рук",
        type: "time",
        amount: 40,
        icon: "🔄",
        description: "Вращай руками вперёд и назад, выполняй движения спокойно."
      },
      {
        name: "Отжимания от стены",
        type: "reps",
        amount: 8,
        icon: "💪",
        description: "Держи корпус ровно, сгибай и разгибай руки."
      },
      {
        name: "Сгибание рук",
        type: "reps",
        amount: 10,
        icon: "🏋️",
        description: "Сгибай руки с лёгкими бутылками воды или без веса."
      },
      {
        name: "Планка",
        type: "time",
        amount: 15,
        icon: "⏱️",
        description: "Держи корпус ровно. При необходимости используй опору на коленях."
      },
      {
        name: "Разгибание рук",
        type: "reps",
        amount: 8,
        icon: "💪",
        description: "Выполняй лёгкие разгибания рук без дополнительного веса."
      },
      {
        name: "Растяжка рук",
        type: "time",
        amount: 30,
        icon: "🧘",
        description: "Мягко потяни мышцы рук и плеч, не допуская боли."
      }
    ]
  },

  // ДЕНЬ 2 — БИЦЕПС И ПРЕДПЛЕЧЬЯ
  {
    title: "РАБОТА НАД РУКАМИ",
    description: "Лёгкая тренировка рук без перегрузки.",
    exercises: [
      {
        name: "Вращение кистей",
        type: "time",
        amount: 30,
        icon: "🔄",
        description: "Выполняй круговые движения кистями."
      },
      {
        name: "Сгибание рук",
        type: "reps",
        amount: 10,
        icon: "🏋️",
        description: "Используй небольшой вес или работай без него."
      },
      {
        name: "Сжатие ладоней",
        type: "reps",
        amount: 12,
        icon: "✊",
        description: "Сжимай и раскрывай ладони без чрезмерного усилия."
      },
      {
        name: "Отжимания от стены",
        type: "reps",
        amount: 8,
        icon: "💪",
        description: "Не прогибай поясницу, держи корпус ровно."
      },
      {
        name: "Планка на коленях",
        type: "time",
        amount: 15,
        icon: "⏱️",
        description: "Сохраняй устойчивое положение."
      },
      {
        name: "Растяжка",
        type: "time",
        amount: 30,
        icon: "🧘",
        description: "Мягко расслабь руки и плечи."
      }
    ]
  },

  // ДЕНЬ 3 — ПЛЕЧИ И ТРИЦЕПС
  {
    title: "КОНТРОЛЬ ДВИЖЕНИЙ",
    description: "Укрепляем плечевой пояс и возвращаем контроль.",
    exercises: [
      {
        name: "Круги плечами",
        type: "time",
        amount: 30,
        icon: "🔄",
        description: "Делай круги плечами вперёд и назад."
      },
      {
        name: "Отжимания от стены",
        type: "reps",
        amount: 8,
        icon: "💪",
        description: "Работай в комфортной амплитуде."
      },
      {
        name: "Разведение рук",
        type: "reps",
        amount: 10,
        icon: "🙌",
        description: "Разводи руки в стороны без веса, не поднимай плечи к ушам."
      },
      {
        name: "Разгибание рук",
        type: "reps",
        amount: 8,
        icon: "🏋️",
        description: "Выполняй плавно, без рывков."
      },
      {
        name: "Планка на коленях",
        type: "time",
        amount: 15,
        icon: "⏱️",
        description: "Не допускай прогиба в пояснице."
      },
      {
        name: "Растяжка плеч",
        type: "time",
        amount: 30,
        icon: "🧘",
        description: "Аккуратно расслабь плечевой пояс."
      }
    ]
  },

  // ДЕНЬ 4 — ВОССТАНОВЛЕНИЕ
  {
    title: "ВОССТАНОВЛЕНИЕ",
    description: "Сегодня лёгкий день. Мышцам необходимо восстановление.",
    exercises: [
      {
        name: "Спокойные движения кистями",
        type: "time",
        amount: 40,
        icon: "🔄",
        description: "Мягко разминай кисти."
      },
      {
        name: "Вращение плечами",
        type: "time",
        amount: 40,
        icon: "🙌",
        description: "Двигай плечами без резких движений."
      },
      {
        name: "Растяжка предплечий",
        type: "time",
        amount: 30,
        icon: "🧘",
        description: "Не тяни мышцы через боль."
      },
      {
        name: "Растяжка трицепса",
        type: "time",
        amount: 30,
        icon: "💪",
        description: "Мягко потяни руку за головой."
      },
      {
        name: "Расслабление",
        type: "time",
        amount: 40,
        icon: "🌿",
        description: "Расслабь руки и спокойно подыши."
      }
    ]
  },

  // ДЕНЬ 5 — РУКИ
  {
    title: "ВОЗВРАЩАЕМ СИЛУ",
    description: "Работаем над общей силой рук.",
    exercises: [
      {
        name: "Разминка",
        type: "time",
        amount: 40,
        icon: "🔄",
        description: "Разогрей плечи и кисти."
      },
      {
        name: "Отжимания от стены",
        type: "reps",
        amount: 10,
        icon: "💪",
        description: "Делай плавно, не торопись."
      },
      {
        name: "Сгибание рук",
        type: "reps",
        amount: 10,
        icon: "🏋️",
        description: "Работай с лёгким весом."
      },
      {
        name: "Разведение рук",
        type: "reps",
        amount: 10,
        icon: "🙌",
        description: "Держи спину ровно."
      },
      {
        name: "Разгибание рук",
        type: "reps",
        amount: 8,
        icon: "💪",
        description: "Не используй инерцию."
      },
      {
        name: "Растяжка",
        type: "time",
        amount: 30,
        icon: "🧘",
        description: "Заверши занятие расслаблением."
      }
    ]
  },

  // ДЕНЬ 6 — ЛЁГКАЯ ОБЩАЯ ПОДГОТОВКА
  {
    title: "ОБЩАЯ ПОДГОТОВКА",
    description: "Умеренная нагрузка с акцентом на контроль движений.",
    exercises: [
      {
        name: "Разминка плеч",
        type: "time",
        amount: 40,
        icon: "🔄",
        description: "Выполняй круговые движения."
      },
      {
        name: "Отжимания от стены",
        type: "reps",
        amount: 8,
        icon: "💪",
        description: "Сохраняй правильную технику."
      },
      {
        name: "Сгибание рук",
        type: "reps",
        amount: 10,
        icon: "🏋️",
        description: "Работай с комфортным сопротивлением."
      },
      {
        name: "Планка на коленях",
        type: "time",
        amount: 15,
        icon: "⏱️",
        description: "Держи корпус устойчиво."
      },
      {
        name: "Растяжка",
        type: "time",
        amount: 40,
        icon: "🧘",
        description: "Расслабь мышцы."
      }
    ]
  },

  // ДЕНЬ 7 — ВОССТАНОВЛЕНИЕ
  {
    title: "ДЕНЬ ВОССТАНОВЛЕНИЯ",
    description: "Завершаем цикл спокойно и готовимся к следующей неделе.",
    exercises: [
      {
        name: "Вращение кистей",
        type: "time",
        amount: 40,
        icon: "🔄",
        description: "Мягкие круговые движения."
      },
      {
        name: "Вращение плечами",
        type: "time",
        amount: 40,
        icon: "🙌",
        description: "Расслабленные движения."
      },
      {
        name: "Растяжка рук",
        type: "time",
        amount: 40,
        icon: "🧘",
        description: "Не допускай неприятных ощущений."
      },
      {
        name: "Спокойное дыхание",
        type: "time",
        amount: 40,
        icon: "🌿",
        description: "Расслабься и восстановись."
      }
    ]
  }
];


/* ==========================================
   СОСТОЯНИЕ И СОХРАНЕНИЕ
========================================== */

function getDefaultState() {
  return {
    completedDays: 0,
    history: [],
    lastCompletedDate: null,
    totalTasks: 0
  };
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return getDefaultState();

    const parsed = JSON.parse(saved);

    if (
      typeof parsed.completedDays !== "number" ||
      !Array.isArray(parsed.history)
    ) {
      return getDefaultState();
    }

    return {
      ...getDefaultState(),
      ...parsed
    };

  } catch (error) {
    console.error("Ошибка загрузки прогресса:", error);
    return getDefaultState();
  }
}

let state = loadState();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Не удалось сохранить прогресс:", error);
    showToast("Не удалось сохранить данные");
  }
}

function getLevel() {
  return Math.floor(state.completedDays / 7) + 1;
}

function getLevelProgress() {
  return state.completedDays % 7;
}

function getWorkoutIndex() {
  return state.completedDays % 7;
}

function getToday() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function isTodayCompleted() {
  return state.lastCompletedDate === getToday();
}

function getLevelName(level) {
  return LEVEL_NAMES[
    Math.min(level - 1, LEVEL_NAMES.length - 1)
  ] || "МАСТЕР";
}

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;

  return `${formatNumber(minutes)}:${formatNumber(remaining)}`;
}


/* ==========================================
   ПОСТЕПЕННОЕ УВЕЛИЧЕНИЕ НАГРУЗКИ
========================================== */

function getScaledExercises(workout, level) {

  /*
    Нагрузка увеличивается очень постепенно.
    Для восстановления не используем резкие скачки.
    Рост количества ограничен, а не бесконечен.
  */

  const growth = Math.min(level - 1, 10);
  const factor = 1 + growth * 0.05;

  return workout.exercises.map((exercise) => {

    const copy = { ...exercise };

    if (copy.type === "reps") {
      copy.amount = Math.round(copy.amount * factor);

      // Не допускаем чрезмерного количества повторений.
      copy.amount = Math.min(copy.amount, 18);
    }

    if (copy.type === "time") {
      copy.amount = Math.round(copy.amount * factor);

      // Ограничиваем время удержаний и заданий.
      copy.amount = Math.min(copy.amount, 60);
    }

    /*
      После 10-го уровня нагрузка не растёт автоматически.
      Новые уровни продолжают открываться, а прогресс
      можно расширять новыми безопасными упражнениями.
    */

    return copy;
  });
}


/* ==========================================
   ПЕРЕХОДЫ МЕЖДУ СТРАНИЦАМИ
========================================== */

function showPage(pageId) {

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  const target = $(pageId);

  if (target) {
    target.classList.add("active");
  }

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.page === pageId
    );
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    if (session.active) {
      showToast("Сначала закончи или выйди из тренировки");
      return;
    }

    showPage(button.dataset.page);

    if (button.dataset.page === "statsPage") {
      renderStats();
    }
  });
});


/* ==========================================
   УВЕДОМЛЕНИЯ
========================================== */

let toastTimeout;

function showToast(message) {
  const toast = $("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}


/* ==========================================
   ГЛАВНАЯ СТРАНИЦА
========================================== */

function renderHome() {

  const level = getLevel();
  const progress = getLevelProgress();
  const workoutIndex = getWorkoutIndex();

  $("headerLevel").textContent = `УРОВЕНЬ ${level}`;
  $("levelNumber").textContent = formatNumber(level);
  $("levelName").textContent = getLevelName(level);

  $("levelProgressText").textContent = `${progress} / 7`;
  $("levelProgress").style.width = `${(progress / 7) * 100}%`;

  $("totalDays").textContent = state.completedDays;
  $("currentLevel").textContent = formatNumber(level);

  const workout = WORKOUTS[workoutIndex];

  $("workoutDay").textContent =
    `ДЕНЬ ${formatNumber(workoutIndex + 1)} / 07`;

  $("workoutTitle").textContent = workout.title;
  $("workoutDescription").textContent = workout.description;

  $("taskCount").textContent = workout.exercises.length;

  const completed = isTodayCompleted();

  $("startButton").classList.toggle("hidden", completed);
  $("completedMessage").classList.toggle("hidden", !completed);

  renderWeek();
}

function renderWeek() {

  const container = $("weekGrid");

  container.innerHTML = "";

  const progress = getLevelProgress();

  for (let i = 0; i < 7; i++) {

    const day = document.createElement("div");

    const isDone = i < progress;
    const isCurrent = i === progress && !isTodayCompleted();

    day.className = "week-day";

    if (isDone) day.classList.add("done");
    if (isCurrent) day.classList.add("current");

    day.innerHTML = `
      <span>${DAYS[i]}</span>
      <strong>${isDone ? "✓" : i + 1}</strong>
    `;

    container.appendChild(day);
  }
}


/* ==========================================
   СОСТОЯНИЕ ТРЕНИРОВКИ
========================================== */

const session = {
  active: false,
  exercises: [],
  index: 0,
  skipped: 0,
  startedAt: null,
  elapsedBefore: 0
};

let timerInterval = null;
let timerRemaining = 0;
let timerRunning = false;


/* ==========================================
   ЗАПУСК ТРЕНИРОВКИ
========================================== */

$("startButton").addEventListener("click", startWorkout);

function startWorkout() {

  if (isTodayCompleted()) {
    showToast("Сегодняшняя тренировка уже завершена");
    return;
  }

  if (session.active) return;

  const workoutIndex = getWorkoutIndex();
  const level = getLevel();
  const workout = WORKOUTS[workoutIndex];

  session.active = true;
  session.exercises = getScaledExercises(workout, level);
  session.index = 0;
  session.skipped = 0;
  session.startedAt = Date.now();
  session.elapsedBefore = 0;

  $("trainingTitle").textContent =
    `ДЕНЬ ${formatNumber(workoutIndex + 1)}`;

  $("trainingSubtitle").textContent = `УРОВЕНЬ ${level}`;

  showPage("trainingPage");

  renderExercise();
}


/* ==========================================
   ОТОБРАЖЕНИЕ УПРАЖНЕНИЯ
========================================== */

function renderExercise() {

  if (!session.active) return;

  stopTimer();

  const exercise = session.exercises[session.index];

  if (!exercise) {
    finishWorkout();
    return;
  }

  const total = session.exercises.length;
  const current = session.index + 1;
  const percentage = ((current - 1) / total) * 100;

  $("exerciseNumber").textContent = formatNumber(current);

  $("taskCounter").textContent =
    `ЗАДАНИЕ ${current} ИЗ ${total}`;

  $("taskPercent").textContent = `${Math.round(percentage)}%`;
  $("taskProgress").style.width = `${percentage}%`;

  $("exerciseName").textContent = exercise.name;
  $("exerciseVisual").textContent = exercise.icon;
  $("exerciseDescription").textContent = exercise.description;

  if (exercise.type === "time") {

    $("exerciseType").textContent = "НА ВРЕМЯ";
    $("exerciseAmount").textContent =
      `${exercise.amount} СЕК`;

    $("timerBlock").classList.remove("hidden");

    timerRemaining = exercise.amount;

    updateTimerDisplay();

  } else {

    $("exerciseType").textContent = "НА ПОВТОРЕНИЯ";

    $("exerciseAmount").textContent =
      `${exercise.amount} РАЗ`;

    $("timerBlock").classList.add("hidden");
  }

  $("completeTask").disabled = false;
  $("completeTask").textContent = "ВЫПОЛНЕНО →";

}


/* ==========================================
   ТАЙМЕР
========================================== */

function updateTimerDisplay() {
  $("timerDisplay").textContent = formatTime(timerRemaining);
}

function stopTimer() {

  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = null;
  timerRunning = false;
}

function startTimer() {

  if (timerRunning || timerRemaining <= 0) return;

  timerRunning = true;

  $("timerStart").textContent = "ПАУЗА";

  timerInterval = setInterval(() => {

    if (!session.active) {
      stopTimer();
      return;
    }

    timerRemaining--;

    updateTimerDisplay();

    if (timerRemaining <= 0) {

      stopTimer();

      $("timerStart").textContent = "ГОТОВО";
      $("completeTask").disabled = false;

      showToast("Время вышло! Можешь завершить задание.");

    }

  }, 1000);
}

function pauseTimer() {
  stopTimer();
  $("timerStart").textContent = "ПРОДОЛЖИТЬ";
}

function resetTimer() {

  stopTimer();

  const exercise = session.exercises[session.index];

  if (!exercise || exercise.type !== "time") return;

  timerRemaining = exercise.amount;

  updateTimerDisplay();

  $("timerStart").textContent = "СТАРТ";
}

$("timerStart").addEventListener("click", () => {

  if (timerRunning) {
    pauseTimer();
    return;
  }

  if (timerRemaining <= 0) {
    showToast("Время уже закончилось");
    return;
  }

  startTimer();
});

$("timerReset").addEventListener("click", resetTimer);


/* ==========================================
   ПЕРЕХОД К СЛЕДУЮЩЕМУ ЗАДАНИЮ
========================================== */

$("completeTask").addEventListener("click", () => {

  if (!session.active) return;

  nextExercise();
});

function nextExercise() {

  stopTimer();

  session.index++;

  if (session.index >= session.exercises.length) {
    finishWorkout();
    return;
  }

  renderExercise();
}


/* ==========================================
   ПРОПУСК УПРАЖНЕНИЯ
========================================== */

$("skipTask").addEventListener("click", () => {

  if (!session.active) return;

  session.skipped++;

  showToast("Упражнение пропущено");

  nextExercise();
});


/* ==========================================
   ЗАВЕРШЕНИЕ ТРЕНИРОВКИ
========================================== */

function finishWorkout() {

  stopTimer();

  if (!session.active) return;

  const completedBefore = state.completedDays;
  const previousLevel = getLevel();

  const elapsedSeconds = Math.max(
    0,
    Math.round((Date.now() - session.startedAt) / 1000)
  );

  const total = session.exercises.length;
  const completedTasks = total - session.skipped;

  /*
    Условие: для зачёта нужно выполнить
    хотя бы половину заданий.
  */

  if (completedTasks < Math.ceil(total / 2)) {

    showToast("Выполни хотя бы половину заданий для зачёта");

    session.active = false;

    showPage("homePage");

    return;
  }

  const workoutIndex = getWorkoutIndex();

  const record = {
    date: getToday(),
    day: workoutIndex + 1,
    level: previousLevel,
    tasks: completedTasks,
    totalTasks: total,
    skipped: session.skipped,
    seconds: elapsedSeconds
  };

  state.completedDays++;
  state.totalTasks += completedTasks;
  state.lastCompletedDate = getToday();

  state.history.unshift(record);

  // Ограничиваем размер истории, чтобы не раздувать хранилище.
  state.history = state.history.slice(0, 365);

  saveState();

  const newLevel = getLevel();
  const levelUp = newLevel > previousLevel;

  $("finishTasks").textContent =
    `${completedTasks}/${total}`;

  $("finishTime").textContent = formatTime(elapsedSeconds);

  $("finishLevel").textContent = formatNumber(previousLevel);

  $("finishDescription").textContent = levelUp
    ? "Ты завершил семь тренировочных дней. Открыт новый уровень!"
    : "Ещё один шаг к твоей цели. Продолжай в комфортном темпе.";

  $("levelUpMessage").classList.toggle("hidden", !levelUp);

  session.active = false;

  renderHome();
  renderStats();

  showPage("finishPage");
}


/* ==========================================
   ВЫХОД ИЗ ТРЕНИРОВКИ
========================================== */

$("exitTraining").addEventListener("click", () => {

  if (!session.active) {
    showPage("homePage");
    return;
  }

  const confirmed = confirm(
    "Выйти из тренировки? Текущий прогресс занятия не будет засчитан."
  );

  if (!confirmed) return;

  stopTimer();

  session.active = false;

  showPage("homePage");
});

$("finishButton").addEventListener("click", () => {

  showPage("homePage");

  renderHome();
});


/* ==========================================
   СТАТИСТИКА
========================================== */

function calculateStreak() {

  if (state.history.length === 0) return 0;

  const dates = [...new Set(
    state.history.map(item => item.date)
  )].sort().reverse();

  let streak = 0;

  const today = getToday();

  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);

  const yesterday = [
    yesterdayDate.getFullYear(),
    String(yesterdayDate.getMonth() + 1).padStart(2, "0"),
    String(yesterdayDate.getDate()).padStart(2, "0")
  ].join("-");

  if (dates[0] !== today && dates[0] !== yesterday) {
    return 0;
  }

  let expectedDate = new Date(
    `${dates[0]}T12:00:00`
  );

  for (const date of dates) {

    const expected = [
      expectedDate.getFullYear(),
      String(expectedDate.getMonth() + 1).padStart(2, "0"),
      String(expectedDate.getDate()).padStart(2, "0")
    ].join("-");

    if (date !== expected) break;

    streak++;

    expectedDate.setDate(expectedDate.getDate() - 1);
  }

  return streak;
}

function renderStats() {

  $("statsLevel").textContent = getLevel();
  $("statsDays").textContent = state.completedDays;
  $("statsStreak").textContent = calculateStreak();
  $("statsTasks").textContent = state.totalTasks;

  const container = $("historyList");

  container.innerHTML = "";

  if (state.history.length === 0) {

    container.innerHTML = `
      <div class="settings-card">
        <p>Пока нет завершённых тренировок. Начни свой путь сегодня!</p>
      </div>
    `;

    return;
  }

  state.history.forEach((item) => {

    const element = document.createElement("div");

    element.className = "history-item";

    const date = new Date(`${item.date}T12:00:00`);

    const formattedDate = date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });

    const left = document.createElement("div");
    const title = document.createElement("strong");
    const subtitle = document.createElement("p");

    title.textContent =
      `День ${item.day} · Уровень ${item.level}`;

    subtitle.textContent =
      `${formattedDate} · ${item.tasks}/${item.totalTasks} заданий · ${formatTime(item.seconds)}`;

    const status = document.createElement("span");
    status.textContent = "✓ ЗАВЕРШЕНО";

    left.append(title, subtitle);
    element.append(left, status);

    container.appendChild(element);
  });
}


/* ==========================================
   СБРОС ПРОГРЕССА
========================================== */

$("resetButton").addEventListener("click", () => {

  const confirmed = confirm(
    "Ты точно хочешь удалить весь прогресс? Это действие нельзя отменить."
  );

  if (!confirmed) return;

  if (session.active) {
    stopTimer();
    session.active = false;
  }

  state = getDefaultState();

  saveState();

  renderHome();
  renderStats();

  showPage("homePage");

  showToast("Прогресс сброшен");
});


/* ==========================================
   ЗАЩИТА ОТ СЛУЧАЙНОГО ЗАКРЫТИЯ
========================================== */

window.addEventListener("beforeunload", (event) => {

  if (!session.active) return;

  event.preventDefault();
  event.returnValue = "";
});


/* ==========================================
   ЗАПУСК ПРИЛОЖЕНИЯ
========================================== */

function init() {

  renderHome();
  renderStats();

  showPage("homePage");

  console.log("ARM PROGRESS 1.0 запущен");
}

init();
