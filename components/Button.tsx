"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Button = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
        {resolvedTheme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default Button;
