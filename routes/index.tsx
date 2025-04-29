import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "@/utils/posts.ts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card.tsx";
import { Button } from "../components/ui/button.tsx";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <main class="container max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">Blog</h1>
      <div class="mt-8 grid gap-6">
        {posts.map(post => <PostCard post={post} />)}
      </div>
    </main>
  );
}

function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <Card className="transition-colors duration-200 dark:bg-[#0d1117]">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{post.snippet}</p>
      </CardContent>
      <CardFooter>
        <Button variant="default" asChild className="dark:bg-blue-600 dark:hover:bg-blue-700">
          <a href={`/${post.slug}`}>Read More</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
