"use client";

import { Arrow } from "@/components/arrow";
import { Box } from "@/components/box";
import { Link } from "@/components/link";
import { H1, H2 } from "@/components/typo";

export default function Success() {
  const B = () => <br className="select-none" />;
  return (
    <div className="flex justify-center items-center px-6 py-[calc(50vh-125px)]">
      <main className="flex flex-col gap-two text-cat-text justify-center max-w-[512px] xl:max-w-[800px]">
        <div className="flex xl:flex-row flex-col gap-two items-center">
          <div className="w-[256px] h-[256px] p-half">
            <div className="w-full h-full rounded-one flex items-center shadow-[0px_0px_0.8rem_0.8rem] shadow-cat-green p-zero">
              <div className="flex-1 flex justify-center text-cat-green w-full font-mono text-nowrap h-min p-half appearance-none bg-transparent">
                &lt;a href=&quot;https:/<B />/immjs.dev/&quot;&gt;&lt;im<B />g src=&quot;https://i<B />mmjs.dev/88x31s/<B />immjs.dev.gif&quot;/&gt;&lt;<B />/a&gt;
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center flex-col gap-4">
            <span>
              <H1 semantic>Hotlink</H1>
              <H2 semantic>
                You found my hotlink! Feel free to add it to your own personal page!
              </H2>
            </span>
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
