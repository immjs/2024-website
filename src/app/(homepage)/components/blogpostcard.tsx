import { Arrow } from "@/components/arrow";
import { Box, BoxLabelType } from "@/components/box";
import { Link } from "@/components/link";
import { useTheme } from "@/components/theme";
import { H1, H2 } from "@/components/typo";
import Image from "next/image";

export function BlogPostCard({
  id,
  thumbnailAlt,
  title,
  tags,
  desc,
  blogpostColor,
  datePublished,
}: BlogPostCardProps) {
  const theme = useTheme();
  return (
    <div className="w-full gap-half flex flex-col xl:flex-row-reverse rounded-one">
      <Box
        title={`/blog/id:${id}/thumb_${theme}.svg`}
        className="items-center xl:w-[256px]"
      >
        <div className="xl:flex-1 flex justify-center items-center">
          <img
            alt={thumbnailAlt}
            src={`/blog/id:${id}/thumb_${theme}.svg`}
            width={192}
            height={192}
          />
        </div>
      </Box>
      <div className="flex-1 flex flex-col gap-half">
        <Box
          title="Description"
          boxType={BoxLabelType.DESCRIPTN}
          className="items-center"
          undertitle={`Tags: ${tags.join(" ")}, Published: ${datePublished}`}
        >
          <div className="flex flex-col gap-4">
            <span>
              <H1 semantic>{title}</H1>
            </span>
            <p>{desc}</p>
          </div>
        </Box>
        <Link href={`/blog/id:${id}`} className="flex-1">
          <Box
            className={`bright-bg bg-${blogpostColor}`}
            title={`/blog/id:${id}`}
          >
            <div className="flex gap-2 items-center">
              <span className="font-bold">Read</span>
              <Arrow />
            </div>
          </Box>
        </Link>
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
