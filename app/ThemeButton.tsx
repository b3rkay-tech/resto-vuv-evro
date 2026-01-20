"use client";

import { useTheme } from "./useTheme";

export default function ThemeButton() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="
        fixed top-5 right-5 z-50
        rounded-full px-4 py-2 text-sm font-medium
        bg-[var(--card)] text-[var(--text)]
        shadow-md
        transition
        hover:-translate-y-0.5 hover:shadow-lg
        active:translate-y-0 active:shadow-md
      "
    >
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
