"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Card from "@/ui/Card";

import AmountInput from "./components/AmountInput";
import NumericKeyboard from "./components/NumericKeyboard";
import ResultPanel from "./components/ResultPanel";
import Breakdown from "./components/Breakdown";
import LangToggle from "./components/LangToggle";

import { useCalculator } from "./hooks/useCalculator";
import { useLanguage } from "./hooks/useLanguage";
import { useChangeCurrency } from "./hooks/useChangeCurrency";

export default function CalculatorPage() {
  const calc = useCalculator();
  const lang = useLanguage();
  const change = useChangeCurrency();
  const [activeField, setActiveField] = useState<"price" | "paidEUR" | "paidBGN" | null>(null);

  const handleKey = (key: string) => {
    if (!activeField) return;

    const fields = {
      price: { value: calc.priceEUR, set: calc.setPriceEUR },
      paidEUR: { value: calc.paidEUR, set: calc.setPaidEUR },
      paidBGN: { value: calc.paidBGN, set: calc.setPaidBGN },
    };

    const field = fields[activeField];
    if (!field) return;

    if (key === "⌫") {
      field.set(field.value.slice(0, -1));
      return;
    }

    if ((key === "." || key === ",") && field.value.includes(key === "," ? "," : ".")) return;

    field.set(field.value + (key === "," ? "." : key));
  };

  const clearAll = () => {
    calc.clear();
    setActiveField(null);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-2 sm:p-4 md:p-6 pb-4 relative z-10"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (
          target.closest("[data-input]") ||
          target.closest("[data-keyboard]") ||
          target.closest("button")
        ) return;
        setActiveField(null);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl mb-3 sm:mb-4 md:mb-6 px-2"
      >
        <div className="flex items-center justify-between gap-2">
          <Link
            href="/"
            className="text-base sm:text-lg md:text-xl font-bold text-[var(--text)] hover:text-[var(--accent)] transition-colors truncate"
          >
            ← Ресто в евро
          </Link>
          <div className="flex gap-1.5 sm:gap-2 shrink-0">
            <LangToggle lang={lang.lang} onToggle={lang.toggle} />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-2xl"
      >
        <Card>
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center pb-3 sm:pb-4 border-b border-[var(--border)]"
            >
              <h1 className="text-xl sm:text-2xl font-bold text-[var(--text)] mb-1.5 sm:mb-2">
                Калкулатор за ресто
              </h1>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-1.5 sm:mb-2">
                Кликнете на полето за въвеждане на сума
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--surface-soft)] border border-[var(--border)]">
                <span className="text-base">🇪🇺</span>
                <span className="text-xs font-semibold text-[var(--accent)]">
                  {lang.t.euroAdoption}
                </span>
              </div>
            </motion.div>

            <div className="space-y-4 sm:space-y-5" data-input>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                data-input
              >
                <AmountInput
                  label={lang.t.total}
                  value={calc.priceEUR}
                  active={activeField === "price"}
                  onClick={() => setActiveField("price")}
                  suffix="EUR"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                data-input
              >
                <AmountInput
                  label={lang.t.payEUR}
                  value={calc.paidEUR}
                  active={activeField === "paidEUR"}
                  onClick={() => setActiveField("paidEUR")}
                  suffix="EUR"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                data-input
              >
                <div>
                  <AmountInput
                    label={lang.t.payBGN}
                    value={calc.paidBGN}
                    active={activeField === "paidBGN"}
                    onClick={() => setActiveField("paidBGN")}
                    suffix="BGN"
                  />
                  <p className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-1 sm:mt-1.5 ml-1">
                    {lang.t.legacyNote}
                  </p>
                </div>
              </motion.div>
            </div>

            <AnimatePresence>
              {activeField && (
                <div data-keyboard>
                  <NumericKeyboard
                    onKey={handleKey}
                    onClear={clearAll}
                    clearLabel={lang.t.clear}
                  />
                </div>
              )}
            </AnimatePresence>

            {calc.change > 0 && (
              <ResultPanel
                valueEUR={calc.change}
                currency={change.currency}
                onToggle={change.toggle}
                label={change.currency === "EUR" ? lang.t.changeEUR : lang.t.changeBGN}
                toggleLabel={change.currency === "EUR" ? lang.t.showBGN : lang.t.showEUR}
              />
            )}

            {(calc.price > 0 || calc.eur > 0 || calc.bgn > 0) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Breakdown
                  labels={lang.t}
                  price={calc.price}
                  eur={calc.eur}
                  bgn={calc.bgn}
                  total={calc.paidTotalEUR}
                  change={calc.change}
                />
              </motion.div>
            )}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

