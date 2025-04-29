import { PageProps } from "$fresh/server.ts";
import { Post } from "@/utils/posts.ts";
import { Button } from "../components/ui/button.tsx";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card.tsx";

export default function Blog404Page(props: PageProps<Post[]>) {
  return (
    <main class="container flex items-center justify-center min-h-[70vh]">
      <Card className="w-full max-w-md transition-colors duration-200 dark:bg-[#0d1117]">
        <CardHeader>
          <CardTitle className="text-4xl">Oops!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">404 Error - Page not found</p>
          <p className="text-muted-foreground mt-2">Sorry about that!</p>
        </CardContent>
        <CardFooter>
          <Button asChild className="dark:bg-blue-600 dark:hover:bg-blue-700">
            <a href="/">Go back home</a>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
