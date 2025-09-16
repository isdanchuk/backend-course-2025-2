// Константи для параметрів
const date = "20240801";          // серпень 2024
const time_period = "month";      // період - місяць

// Базова адреса НБУ
const baseUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/banks_income_expense";

// Створюємо об'єкт URL
const url = new URL(baseUrl);

// Додаємо параметри через searchParams
url.searchParams.append("date", date);
url.searchParams.append("time_period", time_period);
url.searchParams.append("json", "");

// Виводимо готовий URL у консоль
console.log("Сконструйований URL:", url.toString());
