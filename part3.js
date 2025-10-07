const { URL, URLSearchParams } = require("url");

const date = "202408";
const time_period = "m";

const base = "https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincomeexp";

const url = new URL(base);

const params = new URLSearchParams();
params.set("date", date);
params.set("period", time_period);
params.set("json", "");

const search = params.toString().replace(/json=$/, "json");

url.search = search;

console.log(url.toString());

