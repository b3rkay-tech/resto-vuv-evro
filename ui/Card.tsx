"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        w-full
        relative
        max-w-full
        sm:max-w-[420px]
        md:max-w-[500px]
        lg:max-w-[760px]
        xl:max-w-[860px]
        rounded-xl
        bg-[var(--surface)]
        border
        border-[var(--border)]
        shadow-lg
        p-4
        sm:p-6
        md:p-8
        overflow-visible
      "
    >
      {children}
    </motion.div>
  );
}
