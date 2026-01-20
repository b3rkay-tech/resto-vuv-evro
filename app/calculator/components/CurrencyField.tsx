"use client";

import { motion } from "framer-motion";

export default function CurrencyField({
  label,
  value,
  onChange,
  suffix,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
        {label}
      </label>
      <div className="relative">
        <motion.input
          type="text"
          inputMode="decimal"
          placeholder="0.00"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="
            w-full 
            rounded-xl 
            border-2 
            border-[var(--border)]
            px-4 
            py-3.5 
            pr-16
            bg-[var(--surface)]
            text-[var(--text)]
            text-lg
            font-medium
            outline-none
            transition-all
            duration-200
            focus:border-[var(--accent)]
            focus:ring-4 
            focus:ring-[var(--ring)]
            hover:border-[var(--accent)]/50
            placeholder:text-[var(--text-muted)]/50
          "
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[var(--accent)] bg-[var(--accent-soft)] px-2 py-1 rounded-lg">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
