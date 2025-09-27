// ЛР №2 — Частина III (Варіант 7)
const date = "202302";        // лютий 2023 (YYYYMM)
const time_period = "m";      // місяць
const base = "https://bank.gov.ua/";

const url = new URL("NBUStatService/v1/statdirectory/inflation", base);
url.searchParams.set("date", date);
url.searchParams.set("period", time_period);
url.searchParams.set("json", ""); // прапорець JSON

console.log(url.toString());
