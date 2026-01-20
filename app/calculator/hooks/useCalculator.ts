"use client";

import { useState } from "react";

export const HISTORICAL_RATE = 1.95583;

export function useCalculator() {
  const [priceEUR, setPriceEUR] = useState("");
  const [paidEUR, setPaidEUR] = useState("");
  const [paidBGN, setPaidBGN] = useState("");

  const num = (v: string) => (v === "" ? 0 : Number(v));

  const price = num(priceEUR);
  const eur = num(paidEUR);
  const bgn = num(paidBGN);

  const total = eur + bgn / HISTORICAL_RATE;
  const change = Math.max(total - price, 0);

  const clear = () => {
    setPriceEUR("");
    setPaidEUR("");
    setPaidBGN("");
  };

  return {
    priceEUR,
    paidEUR,
    paidBGN,
    setPriceEUR,
    setPaidEUR,
    setPaidBGN,
    price,
    eur,
    bgn,
    paidTotalEUR: total,
    change,
    clear,
  };
}
