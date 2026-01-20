"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      className="
        inline-flex
        items-center
        justify-center
        rounded-xl
        bg-[var(--primary)]
        px-5
        py-3
        text-sm
        font-medium
        text-[var(--primary-text)]
        transition
        hover:opacity-90
        focus:outline-none
        focus:ring-4
        focus:ring-[var(--ring)]
      "
    >
      {children}
    </motion.button>
  );
}
