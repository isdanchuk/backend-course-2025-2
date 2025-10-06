const { URL, URLSearchParams } = require('url');

const date = "20240801";
const period = "month";

const nbuUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp");
nbuUrl.search = new URLSearchParams({
  date: date,
  period: period,
  json: ""
});

console.log(nbuUrl.toString());
