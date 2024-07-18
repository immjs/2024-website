import { Doodle } from "@/components/doodle";
import { PrettyFrame } from "@/components/pretty_frame";
import { useTheme } from "@/components/theme";
import { H1, H2, Small } from "@/components/typo";
import Image from "next/image";

export function Introduction () {
  const theme = useTheme();
  return (
    <div className="flex flex-col items-center gap-16">
      <Small>
        I try to be elegant but I end up being awkward
      </Small>
      <h1 className="hidden">
        Introduction
      </h1>
      <div className="flex gap-two flex-col xl:flex-row w-full">
        <div className="flex justify-center">
          <PrettyFrame className="p-zero !bg-[#11111B]">
            <Image alt="immjs logo" src="/homepage/logo.svg" width={224} height={224} className='max-sm:bg-[url(/homepage/doodles/dark/intro_altern.svg)]' />
            <Doodle alt="Doodle of me gripping the logo" src={`/homepage/doodles/${theme}/intro.svg`} posx="left" posy="top" dx={-150} dy={-80} className="absolute max-sm:hidden" />
          </PrettyFrame>
        </div>
        <div className="lg:flex-1 flex flex-col gap-4">
          <span>
            <H1 semantic>Hi, I&apos;m Juliet! <span className="opacity-ghost">(she/her)</span></H1>
            <H2 semantic>(but please call me Informa)</H2>
          </span>
          <p>I’m a 17 years old french student who codes for fun! My other hobbies are not really hobbies, more like variably lengthed obsessions of literally anything, such as The Minitel currently!</p>
        </div>
      </div>
      <p className="w-full">
        Please note that this website is a work in progress.<br/>
        No pages but the homepage have been completed so far.<br/>
        <Small>Thanks for understanding!</Small>
      </p>
    </div>
  );
}
