import { Arrow } from "@/components/arrow";
import { Box, BoxLabelType } from "@/components/box";
import { Link } from "@/components/link";
import { H1, H2 } from "@/components/typo";
import { ReactNode } from "react";

export function ProjectCard({
  imageTitle,
  image,
  title,
  shortDesc,
  longDesc,
  links,
  publishedAround,
}: ProjectCardProps) {
  return (
    <div className="w-full flex flex-col gap-half xl:flex-row rounded-one">
      <Box title={imageTitle} className="items-center xl:w-[276px]">
        <div className="xl:flex-1 flex justify-center items-center">
          {image}
        </div>
      </Box>
      <div className="xl:flex-1 flex flex-col gap-half">
        <Box
          title="Description"
          boxType={BoxLabelType.DESCRIPTN}
          undertitle={`Published: Around ${publishedAround}`}
          className="items-center"
        >
          <div className="flex flex-col gap-4">
            <span>
              <H1 semantic>{title}</H1>
              <H2 semantic>{shortDesc}</H2>
            </span>
            <p>{longDesc}</p>
          </div>
        </Box>
        <div className="flex flex-col sm:flex-row gap-half">
          {links.map(
            ({ className, border, linkTitle, linkAddress, linkName }, idx) => (
              <Link
                key={idx}
                href={linkAddress}
                title={linkName}
                className="flex-1"
              >
                <Box title={linkTitle} className={className} hasBorder={border}>
                  <div className="flex gap-half items-center">
                    <span className="font-bold">{linkName}</span>
                    <Arrow />
                  </div>
                </Box>
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
interface ProjectCardProps {
  imageTitle: string;
  image: ReactNode;
  title: string;
  shortDesc: string;
  longDesc: string;
  links: {
    className: string;
    border?: boolean;
    linkTitle: string;
    linkAddress: string;
    linkName: string;
  }[];
  publishedAround: string;
}
