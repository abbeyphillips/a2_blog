import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, Post } from "@/utils/posts.ts";
import { Button } from "../components/ui/button.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card.tsx";
import { MarkdownRenderer } from "../components/MarkdownRenderer.tsx";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    try {
      const post = await getPost(ctx.params.slug);
      return ctx.render(post as Post);
    } catch {
      return ctx.renderNotFound();
    }
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <main class="container max-w-screen-md px-4 pt-16 mx-auto">
      <Card className="border-none shadow-none dark:bg-[#0d1117]">
        <CardHeader className="px-0">
          <CardTitle className="text-5xl">{post.title}</CardTitle>
          <CardDescription>
            {new Date(post.publishedAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          <MarkdownRenderer 
            content={post.content}
            disableHtmlSanitization={post.disableHtmlSanitization}
            allowMath={post.allowMath}
            className="mt-8"
          />
        </CardContent>
        <Button variant="outline" size="sm" asChild className="w-fit mb-4 dark:border-gray-600 dark:hover:bg-gray-800">
          <a href="/">← Back</a>
        </Button>
      </Card>
    </main>
  );
}
