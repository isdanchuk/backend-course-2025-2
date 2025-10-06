// part3.js
const { URL, URLSearchParams } = require('url');

// Константи для варіанта 2 (Доходи та витрати банків)
const date = "202408";       // серпень 2024 (формат YYYYMM)
const time_period = "month"; // період - місяць

// Базовий URL API НБУ для доходів та витрат банків
const nbuUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp");

// Додаємо параметри запиту через searchParams
nbuUrl.search = new URLSearchParams({
  json: "",          // формат JSON
  date: date,
  period: time_period
});

// Виводимо готовий URL у консоль
console.log("Сконструйований URL для частини 2:", nbuUrl.toString());
