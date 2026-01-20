"use client";

import { motion, AnimatePresence } from "framer-motion";

const HISTORICAL_RATE = 1.95583;

export default function ChangeDisplay({
  valueEUR,
  currency,
  onToggle,
  label,
  toggleLabel,
}: {
  valueEUR: number;
  currency: "EUR" | "BGN";
  onToggle: () => void;
  label: string;
  toggleLabel: string;
}) {
  const value =
    currency === "EUR"
      ? valueEUR
      : valueEUR * HISTORICAL_RATE;

  const symbol = currency === "EUR" ? "€" : "лв";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        w-full
        rounded-2xl
        bg-gradient-to-br from-[var(--accent-soft)] to-[var(--surface-soft)]
        shadow-xl
        border-2
        border-[var(--accent)]/30
        p-6
        flex
        flex-col
        gap-4
      "
    >
      <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wide">
        {label}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${currency}-${value}`}
          initial={{ opacity: 0, y: 6, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-end gap-3"
        >
          <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text)]">
            {symbol} {value.toFixed(2)}
          </span>

          <span
            className="
              mb-1
              rounded-lg
              bg-[var(--accent)]
              px-3
              py-1.5
              text-xs
              font-bold
              text-white
              shadow-md
            "
          >
            {currency}
          </span>
        </motion.div>
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        className="
          mt-1
          inline-flex
          items-center
          justify-center
          rounded-xl
          bg-[var(--primary)]
          px-5
          py-2.5
          text-sm
          font-semibold
          text-[var(--primary-text)]
          transition-all
          hover:opacity-90
          hover:shadow-lg
          focus:outline-none
          focus:ring-4
          focus:ring-[var(--ring)]
        "
      >
        {toggleLabel}
      </motion.button>
    </motion.div>
  );
}
