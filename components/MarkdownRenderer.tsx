import { h } from "preact";
import { CSS, KATEX_CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";

// Types for the component props
interface MarkdownRendererProps {
  content: string;
  disableHtmlSanitization?: boolean;
  allowMath?: boolean;
  className?: string;
}

export function MarkdownRenderer({
  content,
  disableHtmlSanitization = false,
  allowMath = false,
  className = "",
}: MarkdownRendererProps) {
  return (
    <>
      <MarkdownStyles />
      <div
        className={`markdown-body prose prose-slate max-w-none dark:prose-invert transition-colors duration-200 rounded-md p-4 ${className}`}
        dangerouslySetInnerHTML={{
          __html: render(content, {
            disableHtmlSanitization,
            allowMath,
          }),
        }}
      />
    </>
  );
}

// Separate component for styles to keep the renderer clean
export function MarkdownStyles() {
  return (
    <Head>
      {/* Default GFM styles */}
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {/* KaTeX styles for math rendering */}
      <style dangerouslySetInnerHTML={{ __html: KATEX_CSS }} />
      {/* Link to external dark mode styles */}
      <link rel="stylesheet" href="/markdown-dark.css" />
    </Head>
  );
}