"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AmountInput from "./AmountInput";
import NumericKeyboard from "./NumericKeyboard";

export default function Calculator() {
  const [activeField, setActiveField] =
    useState<"eur" | "bgn" | null>(null);

  const [eur, setEur] = useState("");
  const [bgn, setBgn] = useState("");

  const handleKey = (key: string) => {
    if (!activeField) return;

    const value = activeField === "eur" ? eur : bgn;
    const setValue = activeField === "eur" ? setEur : setBgn;

    if (key === "⌫") {
      setValue(value.slice(0, -1));
      return;
    }

    if (key === "," && value.includes(",")) return;

    setValue(value + key);
  };

  const clearAll = () => {
    setEur("");
    setBgn("");
    setActiveField(null);
  };

  return (
    <div
      className="mx-auto max-w-2xl space-y-4"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("[data-input]")) return;
        setActiveField(null);
      }}
    >
      <div data-input>
        <AmountInput
          label="Плащане в EUR"
          value={eur}
          active={activeField === "eur"}
          onClick={() => setActiveField("eur")}
        />
      </div>

      <div data-input>
        <AmountInput
          label="Плащане в BGN"
          value={bgn}
          active={activeField === "bgn"}
          onClick={() => setActiveField("bgn")}
        />
      </div>

      <AnimatePresence>
        {activeField && (
          <NumericKeyboard
            onKey={handleKey}
            onClear={clearAll}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
