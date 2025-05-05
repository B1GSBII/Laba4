function displayCurrentDateTime() {
    formattedDateTime = formatCurrentDateTime();
    resultElement = document.getElementById('currentDateResult');
    resultElement.innerHTML = formattedDateTime;
}
function displayDayOfWeek() {
    currentDate = new Date();
    dayInfo = getDayOfWeekInfo(currentDate);
    resultElement = document.getElementById('dayOfWeekResult');
    resultElement.innerHTML = `Номер дня: ${dayInfo.dayNumber}<br>Назва дня: ${dayInfo.dayName}`;
}
function displayDateAgo() {
     inputElement = document.getElementById('daysAgoInput');
     resultElement = document.getElementById('dateAgoResult');

     daysValue = inputElement.value;
     days = parseInt(daysValue, 10);

     calculatedDate = getDateAgo(days);

    if (calculatedDate) {
         options = { year: 'numeric', month: 'long', day: 'numeric' };
         formattedDate = calculatedDate.toLocaleDateString('uk-UA', options);
         dayInfo = getDayOfWeekInfo(calculatedDate);
         dayName = dayInfo.dayName;

        resultElement.innerHTML = `Дата ${days} дн. тому (або вперед): ${formattedDate} (${dayName})`;
    } else {
         resultElement.innerHTML = "Не вдалося обчислити дату.";
    }
}
//Обробник для Завдання №4: Визначення останнього дня місяця.
function displayLastDayOfMonth() {
    const yearInput = document.getElementById('yearInput4');
    const monthInput = document.getElementById('monthInput4');
    const resultElement = document.getElementById('lastDayResult');

    if (!yearInput || !monthInput || !resultElement) return;

    const year = parseInt(yearInput.value, 10);
    const month = parseInt(monthInput.value, 10);

    if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
        resultElement.innerHTML = "Будь ласка, введіть коректний рік та місяць (1-12).";
        return;
    }

    const lastDay = getLastDayOfMonth(year, month);

    if (lastDay !== null) {
        resultElement.innerHTML = `Останній день місяця ${month}/${year}: ${lastDay}`;
    } else {
        resultElement.innerHTML = "Не вдалося визначити останній день.";
    }
}
// Обробник для Завдання №5: Виведення секунд від/до півночі.
function displaySecondsToday() {
    const resultElement = document.getElementById('secondsTodayResult');
    if (!resultElement) return;

    const secondsInfo = getSecondsToday();
    resultElement.innerHTML = `З початку дня пройшло: ${secondsInfo.secondsPassed} сек.<br>До кінця дня залишилось: ${secondsInfo.secondsLeft} сек.`;
}
// Обробник для Завдання №6: Форматування дати як ДД.ММ.РРРР.
function displayFormattedDateDDMMYYYY() {
    const dateInputElement = document.getElementById('dateInput6');
    const resultElement = document.getElementById('formatDDMMYYYYResult');
     if (!dateInputElement || !resultElement) return;
    const dateValue = dateInputElement.value;
     if (!dateValue) {
        resultElement.innerHTML = "Будь ласка, оберіть дату.";
        return;
     }
    const date = new Date(dateValue);
    const parts = dateValue.split('-');
    const localDate = new Date(parts[0], parts[1] - 1, parts[2]);


    resultElement.innerHTML = formatDateDDMMYYYY(localDate);
}
// Обробник для Завдання №7: Виведення різниці між датами.
function displayDateDifference() {
    const date1InputElement = document.getElementById('date1Input7');
    const date2InputElement = document.getElementById('date2Input7');
    const resultElement = document.getElementById('dateDiffResult');
    if (!date1InputElement || !date2InputElement || !resultElement) return;

    const date1Value = date1InputElement.value;
    const date2Value = date2InputElement.value;

     if (!date1Value || !date2Value) {
        resultElement.innerHTML = "Будь ласка, оберіть обидві дати.";
        return;
     }
    const date1Parts = date1Value.split('-');
    const date2Parts = date2Value.split('-');
    const date1 = new Date(date1Parts[0], date1Parts[1] - 1, date1Parts[2]);
    const date2 = new Date(date2Parts[0], date2Parts[1] - 1, date2Parts[2]);
    const diffDays = getDateDifferenceInDays(date1, date2);
    if (diffDays !== null) {
        resultElement.innerHTML = `Різниця між датами: ${diffDays} дн.`;
    } else {
        resultElement.innerHTML = "Не вдалося обчислити різницю. Перевірте дати.";
    }
}
// Обробник для Завдання №8: Виведення відносно відформатованої дати.
function displayRelativeFormat() {
    const dateTimeInputElement = document.getElementById('dateInput8');
    const resultElement = document.getElementById('relativeFormatResult');
    if (!dateTimeInputElement || !resultElement) return;
    const dateTimeValue = dateTimeInputElement.value;
     if (!dateTimeValue) {
         resultElement.innerHTML = "Будь ласка, оберіть дату та час.";
         return;
     }
    const date = new Date(dateTimeValue);
    resultElement.innerHTML = formatDateRelative(date);
}
// Обробник для Завдання №9: Розпізнавання дати з рядка.
function displayParsedDate() {
    const dateStringInputElement = document.getElementById('dateStringInput9');
    const resultElement = document.getElementById('parseDateResult');
    if (!dateStringInputElement || !resultElement) return;
    const dateString = dateStringInputElement.value.trim();
     if (!dateString) {
         resultElement.innerHTML = "Будь ласка, введіть рядок дати.";
         return;
     }
    const parsedDate = parseDateString(dateString);
    if (parsedDate) {
        resultElement.innerHTML = `Розпізнано дату: ${parsedDate.toLocaleDateString('uk-UA')} ${parsedDate.toLocaleTimeString('uk-UA')}`;
    } else {
        resultElement.innerHTML = "Не вдалося розпізнати дату з введеного рядка. Спробуйте інший формат.";
    }
}
// Обробник для Завдання №10: Виведення локалізованої дати.
function displayLocalizedDate() {
    const langCodeInputElement = document.getElementById('langCodeInput10');
    const resultElement = document.getElementById('localizedDateResult');
     if (!langCodeInputElement || !resultElement) return;
    const langCode = langCodeInputElement.value.trim() || 'uk';
    const currentDate = new Date();
    resultElement.innerHTML = formatDateLocalized(currentDate, langCode);
}