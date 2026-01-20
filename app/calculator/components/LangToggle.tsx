"use client";

import { motion } from "framer-motion";

export default function LangToggle({
  lang,
  onToggle,
}: {
  lang: string;
  onToggle: () => void;
}) {
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.96 }}
      className="
        rounded-lg 
        px-4 py-2 
        text-xs font-bold
        border border-[var(--border)]
        bg-[var(--surface)]
        text-[var(--text)]
        hover:border-[var(--text-muted)]
        transition-all duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-[var(--ring)]
      "
      aria-label={`Switch to ${lang === "bg" ? "English" : "Български"}`}
    >
      {lang.toUpperCase()}
    </motion.button>
  );
}
