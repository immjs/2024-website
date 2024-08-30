"use client";

import { Introduction } from "./introduction";
import { MyProjects } from "./myprojects";
import { MyBlogPosts } from "./myblogposts";
import { MyPhotography } from "./myphotography";
import { BitsOfPersonality, TetrioData } from "./bitsofpersonality";
import { MySocials } from "./mysocials";
import { useTheme } from "@/components/theme";

export function Home({ status, tetrio, palette }: { status: any; tetrio: TetrioData, palette: [string, string, string] }) {
  const theme = useTheme();

  return (
    <div className="flex justify-center items-center px-6 py-[max(calc(50vh-125px-4.8rem),192px)] pb-0 xl:pb-[320px] gutter-both-edges">
      <div className="absolute flex top-0 left-0 right-0 justify-center">
        <img
          className="absolute select-none"
          src={`/homepage/doodles/${theme}/flags.svg`}
          width={192}
          height={192}
        />
      </div>
      <main className="w-full flex flex-col gap-two text-cat-text justify-center max-w-[512px] xl:max-w-[800px]">
        <Introduction />
        <MyProjects />
        <MyPhotography />
        <BitsOfPersonality status={status} tetrio={tetrio} palette={palette} />
        <MySocials />
      </main>
    </div>
  );
}
