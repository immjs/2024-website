import { Arrow } from "@/components/arrow";
import { Box } from "@/components/box";
import { H1, H2 } from "@/components/typo";
import Link from "next/link";
import { ReactNode } from "react";

export function ProjectCard({
  imageTitle,
  image,
  childrenTitle,
  title,
  shortDesc,
  longDesc,
  links,
}: ProjectCardProps) {
  return (
    <div className="w-full flex flex-col gap-half xl:flex-row bg-cat-surface0 rounded-one">
      <Box title={imageTitle} className="items-center xl:w-[276px]">
        <div className="xl:flex-1 flex justify-center items-center">
          { image }
        </div>
      </Box>
      <div className="xl:flex-1 flex flex-col gap-half">
        <Box title={childrenTitle} className="items-center">
          <div className="flex flex-col gap-4">
            <span>
              <H1 semantic>{ title }</H1>
              <H2 semantic>{ shortDesc }</H2>
            </span>
            <p>
              { longDesc }
            </p>
          </div>
        </Box>
        <div className="flex flex-col sm:flex-row gap-half">
          {
            links.map(
              ({
                className,
                border,
                linkTitle,
                linkAddress,
                linkName,
              }, idx) => (
                <Link replace key={idx} href={linkAddress} title={linkName} className="flex-1">
                  <Box title={linkTitle} className={className} hasBorder={border}>
                    <div className="flex gap-half items-center">
                      <span className="font-bold">{ linkName }</span>
                      <Arrow />
                    </div>
                  </Box>
                </Link>
              )
            )
          }
        </div>
      </div>
    </div>
  );
}
interface ProjectCardProps {
  imageTitle: string;
  image: ReactNode;
  childrenTitle: string;
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
}
