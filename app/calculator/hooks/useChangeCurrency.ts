"use client";

import { useState } from "react";

export function useChangeCurrency() {
  const [currency, setCurrency] = useState<"EUR" | "BGN">("EUR");

  return {
    currency,
    toggle: () =>
      setCurrency((c) => (c === "EUR" ? "BGN" : "EUR")),
  };
}
