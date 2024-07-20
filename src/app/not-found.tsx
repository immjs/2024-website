"use client";

import { Arrow } from "@/components/arrow";
import { Box } from "@/components/box";
import { Link } from "@/components/link";
import { PrettyFrame } from "@/components/pretty_frame";
import { H1, H2 } from "@/components/typo";

export default function Error() {
  return (
    <div className="flex justify-center items-center px-6 py-[calc(50vh-125px)]">
      <main className="flex flex-col gap-two text-cat-text justify-center max-w-[512px] xl:max-w-[800px]">
        <div className="flex xl:flex-row flex-col gap-two items-center">
          <div className="w-[256px] h-[256px] p-half">
            <div className="w-full h-full rounded-one flex items-center shadow-[0px_0px_0.8rem_0.8rem] p-zero">
              <div className="flex-1 flex justify-center items-center font-mono text-6xl font-bold leading-[0.5]">
                {"- -"}
                <br />
                4 4<br />
                &nbsp;0
                <br />
                &nbsp;-
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center flex-col gap-4">
            <span>
              <H1 semantic>Not found</H1>
              <H2 semantic>
                We don&apos;t have the ressource you&apos;re looking for.
              </H2>
            </span>
            <p>I did tell you the website was a work in progress</p>
            <Link href="/" title="Go back to homepage" className="w-full">
              <Box title="/">
                <div className="flex gap-half items-center">
                  <span className="font-bold">Homepage</span>
                  <Arrow />
                </div>
              </Box>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
