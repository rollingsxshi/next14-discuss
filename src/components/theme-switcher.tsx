"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button className="p-2" onClick={() => setTheme("light")}>
        <Sun />
      </button>
      <button className="p-2" onClick={() => setTheme("dark")}>
        <Moon />
      </button>
    </div>
  );
}
