"use client";

import { motion } from "framer-motion";

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "⌫"];

export default function NumericKeyboard({
  onKey,
  onClear,
  clearLabel = "Изчисти всичко",
}: {
  onKey: (k: string) => void;
  onClear: () => void;
  clearLabel?: string;
}) {
  return (
    <motion.div
      data-keyboard
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="
        mt-6
        rounded-xl
        bg-[var(--surface-soft)]
        border
        border-[var(--border)]
        p-4
        sm:p-6
        shadow-xl
        relative
      "
    >
      <div className="grid grid-cols-3 gap-3 sm:gap-4 relative z-10">
        {KEYS.map((key, index) => (
          <motion.button
            key={key}
            onClick={() => onKey(key)}
            whileTap={{ scale: 0.96 }}
            className="
              h-14
              sm:h-16
              rounded-lg
              bg-[var(--surface)]
              text-xl
              font-bold
              text-[var(--text)]
              border
              border-[var(--border)]
              transition-all
              duration-200
              hover:bg-[var(--bg)]
              hover:border-[var(--accent)]
              active:bg-[var(--accent)]
              active:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-[var(--ring)]
            "
          >
            {key === "⌫" ? "⌫" : key}
          </motion.button>
        ))}
      </div>

      <motion.button
        onClick={onClear}
        whileTap={{ scale: 0.98 }}
        className="
          mt-4
          w-full
          rounded-lg
          bg-[var(--bg)]
          border
          border-[var(--border)]
          py-3
          text-sm
          font-bold
          text-[var(--text-muted)]
          hover:text-[var(--text)]
          hover:border-[var(--text-muted)]
          transition-all
          duration-200
          focus:outline-none
          focus:ring-2
          focus:ring-[var(--ring)]
        "
      >
        {clearLabel}
      </motion.button>
    </motion.div>
  );
}
