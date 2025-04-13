"use client";

import { Player } from "@/components/player";
import { H1, H2 } from "@/components/typo";

export default function Success() {
  const B = () => <br className="select-none" />;
  return (
    <div className="flex justify-center items-center px-6 py-[calc(50vh-125px)]">
      <main className="flex flex-col gap-two text-cat-text justify-center max-w-[512px] xl:max-w-[800px]">
        <div className="flex xl:flex-row flex-col gap-two items-center">
          <Player className="min-w-[316px] h-[calc(.8rem+214px+192px)]" />
          <div className="flex-1 flex justify-center flex-col gap-4">
            <span>
              <H1 semantic>Player</H1>
              <H2 semantic>
                Music is love. Music is life.
              </H2>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
