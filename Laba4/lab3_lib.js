/// 1 завдання
function formatCurrentDateTime() {
    now = new Date();
    day = now.getDate();
    monthIndex = now.getMonth();
    year = now.getFullYear();
    dayOfWeekIndex = now.getDay();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    monthNames = ["січня", "лютого", "березня", "квітня", "травня", "червня","липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
    dayNames = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    date = `Дата: ${day} ${monthNames[monthIndex]} ${year} року`;
    dayOfWeek = `День: ${dayNames[dayOfWeekIndex]}`;
    time = `Час: ${hours}:${minutes}:${seconds}`; 

    return `${date}<br>${dayOfWeek}<br>${time}`;
}
/// 2 завдання
function getDayOfWeekInfo(dateObject) {
    dayIndex = dateObject.getDay();
    dayNames = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
    dayNumber = (dayIndex === 0) ? 7 : dayIndex;
    dayName = dayNames[dayIndex];

    return {dayNumber: dayNumber, dayName: dayName};
}
function getDateAgo(days) {
    today = new Date();
    targetDate = new Date(today); 
    targetDate.setDate(today.getDate() - days); // Встановлюємо нову дату
    return targetDate;
}
function getLastDayOfMonth(year, month) {
    if (month < 1 || month > 12 || isNaN(year) || isNaN(month)) {
        return null;
    }
    const date = new Date(year, month, 0);
    return date.getDate();
}
//Завдання 5: Повертає кількість секунд від початку дня та до кінця дня.
function getSecondsToday() {
    const now = new Date();
    // Створюємо об'єкт для початку поточного дня (00:00:00)
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    // Створюємо об'єкт для початку наступного дня
    const startOfNextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    const secondsPassed = Math.round((now - startOfDay) / 1000);
    const secondsLeft = Math.round((startOfNextDay - now) / 1000);

    return { secondsPassed, secondsLeft };
}
// Завдання 6: Форматує дату у вигляді ДД.ММ.РРРР
function formatDateDDMMYYYY(date) {
    if (!(date instanceof Date) || isNaN(date)) {
        return "Невірний формат дати";
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Місяці 0-11
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}
// Завдання 7: Обчислює різницю між двома датами в днях 
function getDateDifferenceInDays(date1, date2) {
    if (!(date1 instanceof Date) || isNaN(date1) || !(date2 instanceof Date) || isNaN(date2)) {
        return null;
    }
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    return Math.floor((utc2 - utc1) / MS_PER_DAY);
}
// Завдання 8: Форматує дату відносно поточного часу.
function formatDateRelative(date) {
     if (!(date instanceof Date) || isNaN(date)) {
        return "Невірна дата";
    }
    const now = new Date();
    const diffSeconds = Math.round((now - date) / 1000);
    const diffMinutes = Math.round(diffSeconds / 60);
    const diffHours = Math.round(diffSeconds / 3600);

    if (diffSeconds < 1) {
        return 'тільки що';
    } else if (diffSeconds < 60) {
        return `${diffSeconds} сек. назад`;
    } else if (diffMinutes < 60) {
        return `${diffMinutes} хв. назад`;
    } else if (diffHours < 24) { 
         return `${diffHours} год. назад`;
    } else {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}
// Завдання 9: Намагається розпізнати дату з рядка.
function parseDateString(dateString) {
    if (!dateString || typeof dateString !== 'string') return null;
    let date = null;
    date = new Date(dateString);
    if (!isNaN(date)) {
        return date;
    }

    let match = dateString.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
    if (match) {
        date = new Date(parseInt(match[3]), parseInt(match[2]) - 1, parseInt(match[1]));
         if (!isNaN(date) && date.getDate() === parseInt(match[1]) && date.getMonth() === parseInt(match[2]) - 1) {
            return date;
        }
    }
    match = dateString.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
     if (match) {
        date = new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]));
         if (!isNaN(date) && date.getDate() === parseInt(match[3]) && date.getMonth() === parseInt(match[2]) - 1) {
            return date;
        }
    }
     match = dateString.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
     if (match) {
        date = new Date(parseInt(match[3]), parseInt(match[1]) - 1, parseInt(match[2]));
         if (!isNaN(date) && date.getDate() === parseInt(match[2]) && date.getMonth() === parseInt(match[1]) - 1) {
            return date;
        }
    }
    return null;
}
// Завдання 10: Форматує дату для вказаної мови.
function formatDateLocalized(date, langCode) {
     if (!(date instanceof Date) || isNaN(date)) {
        return "Невірна дата";
    }
     if (!langCode || typeof langCode !== 'string' || langCode.length < 2) {
         langCode = 'uk';
     }

    try {
        const options = {
            weekday: 'long', 
            day: 'numeric',  
            month: 'long',  
            year: 'numeric', 
            era: 'long',     
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: false   
        };
        const formatter = new Intl.DateTimeFormat(langCode, options);
        return formatter.format(date);
    } catch (e) {
        console.error("Помилка локалізації дати:", e);
        return date.toLocaleString(langCode);
    }
}