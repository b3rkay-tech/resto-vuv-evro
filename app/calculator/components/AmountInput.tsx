"use client";

import { motion } from "framer-motion";

export default function AmountInput({
  label,
  value,
  active,
  onClick,
  suffix,
}: {
  label: string;
  value: string;
  active: boolean;
  onClick: () => void;
  suffix?: string;
}) {
  const formattedValue = value || "0.00";

  return (
    <motion.div
      onClick={onClick}
      whileTap={{ scale: 0.99 }}
      className={`
        w-full
        cursor-pointer
        rounded-xl
        border
        p-4
        sm:p-6
        transition-all duration-200
        ${active
          ? "border-[var(--accent)] bg-[var(--surface-soft)] ring-2 ring-[var(--ring)] shadow-md"
          : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-soft)] hover:border-[var(--text-muted)] shadow-sm"
        }
      `}
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">
        {label}
      </div>

      <div className="flex items-baseline justify-between gap-2 relative z-10">
        <div
          className={`text-2xl sm:text-3xl font-bold tracking-tight break-all ${active ? "text-[var(--accent)]" : "text-[var(--text)]"
            }`}
        >
          {formattedValue}
        </div>
        {suffix && (
          <span
            className="text-xs font-bold text-[var(--accent)] bg-[var(--accent-soft)] px-2.5 py-1 rounded-md shrink-0 border border-[var(--accent)]/20 shadow-sm"
          >
            {suffix}
          </span>
        )}
      </div>
    </motion.div>
  );
}
