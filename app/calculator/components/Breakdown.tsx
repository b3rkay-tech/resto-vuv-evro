"use client";

import { motion } from "framer-motion";
import { HISTORICAL_RATE } from "../hooks/useCalculator";

export default function Breakdown({
  labels,
  price,
  eur,
  bgn,
  total,
  change,
}: any) {
  if (!labels) return null;

  const items = [
    { label: labels.price, value: `€ ${price.toFixed(2)}`, highlight: false },
    { label: labels.paidEUR, value: `€ ${eur.toFixed(2)}`, highlight: false },
    ...(bgn > 0
      ? [
        {
          label: labels.paidBGN,
          value: `лв ${bgn.toFixed(2)}`,
          highlight: false,
        },
      ]
      : []),
    {
      label: labels.paidTotal,
      value: `€ ${total.toFixed(2)}`,
      highlight: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 pt-6 border-t border-[var(--border)] relative"
    >
      <div className="mb-4">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--text)] mb-1">
          {labels.breakdown}
        </h3>
        {bgn > 0 && (
          <p className="text-[10px] sm:text-xs text-[var(--text-muted)] mb-1 font-mono">
            {labels.rate}: 1 EUR = {HISTORICAL_RATE} BGN
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={`
              flex justify-between items-center
              px-3 py-2
              rounded-lg
              transition-all duration-200
              ${item.highlight
                ? "bg-[var(--accent-soft)] font-bold border border-[var(--accent)]/10"
                : "hover:bg-[var(--surface-soft)]"
              }
            `}
          >
            <span
              className={`text-xs sm:text-sm ${item.highlight
                  ? "text-[var(--accent)]"
                  : "text-[var(--text-muted)]"
                }`}
            >
              {item.label}
            </span>
            <span
              className={`text-xs sm:text-sm font-mono ${item.highlight
                  ? "text-[var(--accent)]"
                  : "text-[var(--text)]"
                }`}
            >
              {item.value}
            </span>
          </div>
        ))}

        {change > 0 && (
          <div
            className="flex justify-between items-center px-4 py-3 rounded-lg bg-[var(--accent)] text-white shadow-md mt-4"
          >
            <span className="text-sm font-bold uppercase tracking-wider">
              {labels.changeEUR || "Ресто"}
            </span>
            <span className="text-lg font-mono font-bold">
              € {change.toFixed(2)}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
