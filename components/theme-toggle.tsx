import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Button } from "./ui/button.tsx";

type Theme = "light" | "dark" | "system";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", 
        savedTheme === "dark" || 
        (savedTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
  }, []);

  useEffect(() => {
    const isDark = 
      theme === "dark" || 
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? (
        // Moon icon for dark mode
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-[1.2rem] w-[1.2rem]">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      ) : (
        // Sun icon for light mode
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-[1.2rem] w-[1.2rem]">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      )}
      <span class="sr-only">Toggle theme</span>
    </Button>
  );
}