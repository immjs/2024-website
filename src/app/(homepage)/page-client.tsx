"use client";

import { Introduction } from "./introduction";
import { MyProjects } from "./myprojects";
import { MyBlogPosts } from "./myblogposts";
import { MyPhotography } from "./myphotography";
import { BitsOfPersonality } from "./bitsofpersonality";
import { MySocials } from "./mysocials";

export function Home({ status }: { status: any }) {
  return (
    <div className="flex justify-center items-center px-6 py-[calc(50vh-125px-4.8rem)] pb-0 xl:pb-[320px] gutter-both-edges">
      <main className="flex flex-col gap-two text-cat-text justify-center max-w-[512px] xl:max-w-[800px]">
        <Introduction />
        <MyProjects />
        <MyBlogPosts />
        <MyPhotography />
        <BitsOfPersonality status={status} />
        <MySocials />
      </main>
    </div>
  );
}
