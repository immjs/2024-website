import { Arrow } from "@/components/arrow";
import { Box } from "@/components/box";
import { useTheme } from "@/components/theme";
import { H1, H2 } from "@/components/typo";
import Image from "next/image";
import Link from "next/link";

export function BlogPostCard({ id, thumbnailAlt, title, tags, desc, blogpostColor, datePublished }: BlogPostCardProps) {
  const theme = useTheme();
  return (
    <div className="w-full gap-half flex flex-col xl:flex-row-reverse bg-cat-surface0 rounded-one">
      <Box title={`/blog/id:${id}/thumb_${theme}.svg`} className="items-center">
        <div className="xl:flex-1 flex justify-center items-center">
          <Image alt={thumbnailAlt} src={`/blog/id:${id}/thumb_${theme}.svg`} width={192} height={192} />
        </div>
      </Box>
      <div className="flex-1 flex flex-col gap-half">
        <Box title={`/blog/id:${id}/desc`} className="items-center">
          <div className="flex flex-col gap-4">
            <span>
              <H1>{title}</H1>
              <H2>Tags: {tags.join(', ')}</H2>
            </span>
            <p>{desc}</p>
          </div>
        </Box>
        <div className="flex flex-col sm:flex-row gap-half">
          <Box title={`/blog/id:${id}/date`}>
            {datePublished}
          </Box>
          <Link replace href={`/blog/id:${id}`} className="flex-1">
            <Box className="bright-bg" style={{ backgroundColor: `rgb(var(--ctp-${blogpostColor}))` }} title={`/blog/id:${id}`}>
              <div className="flex gap-2 items-center">
                <span className="font-bold">Read</span>
                <Arrow />
              </div>
            </Box>
          </Link>
        </div>
      </div>
    </div>
  );
}
interface BlogPostCardProps {
  id: string;
  thumbnailAlt: string;
  title: string;
  tags: string[];
  desc: string;
  datePublished: string;
  blogpostColor: string;
}
