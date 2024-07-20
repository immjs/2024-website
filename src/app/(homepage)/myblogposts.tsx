import { useTheme } from "@/components/theme";
import { Section } from "./components/section";
import { BlogPostCard } from "./components/blogpostcard";
import { Box } from "@/components/box";
import { Arrow } from "@/components/arrow";
import { DoodleResp } from "@/components/doodle";

export function MyBlogPosts() {
  const theme = useTheme();
  return (
    <Section name="My Blog Posts">
      <BlogPostCard
        id="0"
        thumbnailAlt="Younger me having trouble"
        title="My experience as an underage developer"
        tags={["Rant"]}
        desc="As inspiring as it might sound, starting to code at 8 might not be the best idea"
        datePublished="7th of July, 2024"
        blogpostColor="red"
      />
      <BlogPostCard
        id="1"
        thumbnailAlt="It's a piece of cake!"
        title="Demystifying E-Mail"
        tags={["E-Mail"]}
        desc="I’ve been met with horrified reaction when saying I coded my own mail server. But... it was easy though"
        datePublished="7th of July, 2024"
        blogpostColor="peach"
      />
      <Box className="bright-bg bg-pink" title="/blog">
        <div className="flex gap-2 items-center">
          <span className="font-bold">More blog posts</span>
          <Arrow />
        </div>
      </Box>
      <DoodleResp
        alt="Doodle of me annoying my friends away"
        src={`/homepage/doodles/${theme}/blogposts.svg`}
        posx="left"
        dx={-256}
        posy="bottom"
        dy={0}
      />
    </Section>
  );
}
