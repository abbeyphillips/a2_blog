import { type PageProps } from "$fresh/server.ts";
import ThemeToggle from "../islands/ThemeToggle.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blog</title>
        <link rel="stylesheet" href="/globals.css" />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Avoid Flash of Unstyled Content (FOUC) by setting theme early
            (function() {
              try {
                // Try to get the theme from localStorage
                let theme = 'system';
                try {
                  const storedTheme = localStorage.getItem('theme');
                  if (storedTheme) {
                    theme = storedTheme;
                  }
                } catch (storageErr) {
                  console.error('Could not access localStorage', storageErr);
                }
                
                // Apply the theme
                const isDark = theme === 'dark' || 
                  (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                
                // Remove any existing theme classes and add the current one
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(isDark ? 'dark' : 'light');
              } catch (e) {
                console.error('Failed to initialize theme', e);
              }
            })();
          `
        }}></script>
      </head>
      <body class="min-h-screen bg-background font-sans antialiased dark:bg-[#0d1117]">
        <div class="relative flex min-h-screen flex-col">
          <header class="sticky top-0 z-50 w-full border-b dark:border-[#30363d] bg-background/95 dark:bg-[#0d1117]/95 backdrop-blur">
            <div class="container flex h-14 items-center justify-between">
              <a href="/" class="font-bold">Blog</a>
              <ThemeToggle />
            </div>
          </header>
          <div class="flex-1">
            <Component />
          </div>
        </div>
      </body>
    </html>
  );
}