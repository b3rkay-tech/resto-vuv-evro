"use client";

import { motion, AnimatePresence } from "framer-motion";

const HISTORICAL_RATE = 1.95583;

export default function ResultPanel({
  valueEUR,
  currency,
  onToggle,
  label,
  toggleLabel
}: {
  valueEUR: number;
  currency: "EUR" | "BGN";
  onToggle: () => void;
  label: string;
  toggleLabel: string;
}) {
  if (valueEUR <= 0) return null;

  const value = currency === "EUR" ? valueEUR : valueEUR * HISTORICAL_RATE;
  const symbol = currency === "EUR" ? "€" : "лв";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl bg-[var(--primary)] text-white p-6 sm:p-8 text-center shadow-xl border border-white/10 relative overflow-hidden"
    >
      <div
        className="text-xs sm:text-sm font-bold opacity-80 mb-3 relative z-10 uppercase tracking-widest text-white"
      >
        {label}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${currency}-${value}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight relative z-10 text-white mb-6"
        >
          <span className="inline-flex items-baseline gap-3">
            {symbol} {value.toFixed(2)}
            <span className="text-sm font-bold bg-white/20 px-2 py-1 rounded border border-white/30">
              {currency}
            </span>
          </span>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={onToggle}
        className="
          relative z-10
          w-full
          rounded-lg
          bg-white/10
          border
          border-white/20
          px-4
          py-3
          text-sm
          font-bold
          text-white
          transition-all
          duration-200
          hover:bg-white/20
          active:bg-white/30
          focus:outline-none
          focus:ring-2
          focus:ring-white/50
        "
      >
        <span className="flex items-center justify-center gap-2">
          <span>{toggleLabel}</span>
          <span>→</span>
        </span>
      </button>
    </motion.div>
  );
}
