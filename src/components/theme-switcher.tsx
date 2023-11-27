"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      <button className="p-2" onClick={() => setTheme('light')}>Light Mode</button>
      <button className="p-2" onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
};