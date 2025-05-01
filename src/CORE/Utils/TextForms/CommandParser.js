import dayjs from 'dayjs';

/**
 * Парсит строку пользователя и возвращает массив dayjs и исходную строку
 * Parses user input string and returns an array of dayjs dates and the original input string
 * @param {string} input
 * @returns {{dates: dayjs.Dayjs[], input: string, user?: string, slots?: number[]}}
 */
function CommandParser(input) {
  const now = dayjs();

  // Результат / Result
  let dates = [];
  let user = null;
  let slots = [];

  // Уберём пробелы по краям / Trim whitespace from ends
  const str = input.trim();

  // Если строка начинается с # / If string starts with #
  if (str.startsWith('#')) {
    // Уберём # / Remove #
    const afterHash = str.slice(1);

    // Если пусто - самый последний слот (текущий день)
    // If empty - the very last slot (current day)
    if (afterHash === '') {
      dates.push(now);
      return { dates, input: str };
    }

    // Разобьём по дефисам / Split by dashes
    const parts = afterHash.split('-');

    // Возможные варианты:
    // Possible variants:
    // 1) # - последний слот (уже обработано)
    // 2) #-5 - пятый слот за сегодня
    // 3) #C-4 - слот 4 за сегодня для пользователя с ником на C
    // 4) #C-11-13 - 11-й слот за 13-й день для пользователя с ником на C

    // Проверим, начинается ли первый элемент с буквы (пользователь)
    // Check if first part starts with letters (user)
    if (/^[A-Za-z]+$/.test(parts[0])) {
      user = parts[0];
      slots = parts.slice(1).map(n => parseInt(n, 10)).filter(n => !isNaN(n));

      // Если есть 2 числа - второй это день (контейнер)
      // If there are 2 numbers - second is the day (container)
      if (slots.length === 2) {
        // slots[1] - номер дня, slots[0] - номер слота
        // slots[1] - day number, slots[0] - slot number
        const day = now.date(slots[1]); // меняем день месяца / set day of month
        dates.push(day);
      } else {
        // Если 1 число - сегодня / If 1 number - today
        dates.push(now);
      }
    } else {
      // Нет пользователя, только числа / No user, only numbers
      slots = parts.map(n => parseInt(n, 10)).filter(n => !isNaN(n));

      if (slots.length === 1) {
        // #-5 - пятый слот за сегодня / fifth slot today
        dates.push(now);
      } else if (slots.length === 2) {
        // #-11-13 - 11-й слот за 13-й день (контейнер)
        // 11th slot for 13th day (container)
        const day = now.date(slots[1]);
        dates.push(day);
      }
    }

    return { dates, input: str, user, slots };
  }

  // Если строка не начинается с #, то формат:
  // gerald-3-30-5
  // user-slots-containers-year

  const parts = str.split('-');

  if (parts.length >= 2) {
    user = parts[0];

    // Парсим числа из остальных частей / Parse numbers from the rest
    const nums = parts.slice(1).map(n => parseInt(n, 10)).filter(n => !isNaN(n));

    // Пример: gerald-3-30-5
    // 3 - слот / slot
    // 30 - контейнер (день) / container (day)
    // 5 - год (считаем по правилам) / year (calculated by rules)

    let slotNum = nums[0] || 1;
    let dayNum = nums[1] || now.date();
    let yearNum = nums[2] || 0;

    // Рассчитаем год
    // Calculate year
    // Если цифра одна - текущая декада (10 лет)
    // If one digit - current decade (10 years)
    // Если две - столетие (100 лет)
    // If two digits - century (100 years)
    // И так далее / and so on

    let baseYear = now.year();

    if (yearNum > 0) {
      const yearStr = nums[2].toString();
      const digits = yearStr.length;

      if (digits === 1) {
        // текущая декада: например, 2025 -> 2020 + yearNum
        // current decade: e.g. 2025 -> 2020 + yearNum
        baseYear = Math.floor(baseYear / 10) * 10 + yearNum;
      } else if (digits === 2) {
        // столетие: 2025 -> 2000 + yearNum
        // century: 2025 -> 2000 + yearNum
        baseYear = Math.floor(baseYear / 100) * 100 + yearNum;
      } else {
        // больше цифр - просто прибавляем
        // more digits - just take yearNum as is
        baseYear = yearNum;
      }
    }

    // Создаём дату / create date
    const date = dayjs(new Date(baseYear, now.month(), dayNum));

    dates.push(date);

    return { dates, input: str, user, slots: nums };
  }

  // Если не распознали формат - возвращаем текущий день и строку
  // If format not recognized - return current day and input string
  return { dates: [now], input: str };
}

export default CommandParser;
