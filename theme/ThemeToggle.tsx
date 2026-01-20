"use client";

import { useTheme } from "./useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="
        rounded-full px-4 py-2 text-sm font-medium
        bg-[var(--surface)]
        border border-[var(--border)]
        shadow-sm
        hover:shadow-md
        transition
      "
    >
      {theme === "light" ? "Тъмна тема" : "Светла тема"}
    </button>
  );
}
