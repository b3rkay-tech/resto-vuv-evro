"use client";

import { useState } from "react";

const translations = {
  bg: {
    total: "Цялата сметка в евро (EUR)",
    payBGN: "Плащане в BGN (легаси)",
    payEUR: "Плащане в EUR",
    changeEUR: "Ресто (EUR)",
    changeBGN: "Ресто (BGN)",
    showEUR: "Покажи EUR",
    showBGN: "Покажи BGN",
    clear: "Изчисти",
    breakdown: "Разбивка на изчисленията",
    rate: "Исторически курс (до 2026)",
    price: "Цена",
    paidEUR: "Платено (EUR)",
    paidBGN: "Платено (BGN)",
    paidTotal: "Общо платено (EUR)",
    euroAdoption: "България прие еврото на 1 януари 2026",
    legacyNote: "Поддръжка на лева за преходен период",
  },
  en: {
    total: "Total bill (EUR)",
    payBGN: "Paid (BGN - legacy)",
    payEUR: "Paid (EUR)",
    changeEUR: "Change (EUR)",
    changeBGN: "Change (BGN)",
    showEUR: "Show EUR",
    showBGN: "Show BGN",
    clear: "Clear",
    breakdown: "Calculation breakdown",
    rate: "Historical rate (until 2026)",
    price: "Price",
    paidEUR: "Paid (EUR)",
    paidBGN: "Paid (BGN)",
    paidTotal: "Total paid (EUR)",
    euroAdoption: "Bulgaria adopted the Euro on January 1, 2026",
    legacyNote: "Legacy BGN support for transition period",
  },
};

export function useLanguage() {
  const [lang, setLang] = useState<"bg" | "en">("bg");

  return {
    lang,
    t: translations[lang],
    toggle: () => setLang((l) => (l === "bg" ? "en" : "bg")),
  };
}
