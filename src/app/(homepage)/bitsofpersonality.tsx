import { useToken } from "@/components/csrf";
import { useTheme } from "@/components/theme";
import { Section } from "./components/section";
import pageStyles from './page.module.css';
import { Box } from "@/components/box";
import { SendIcon } from "@/components/icons/send";
import Image from "next/image";
import { Player } from "./player";
import { DoodleResp } from "@/components/doodle";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const hun2 = localFont({ src: './fonts/hun2.ttf' });
// const config = localFont({ src: './fonts/cr.ttf' });
const proFontWindows = localFont({ src: './fonts/pfw.ttf' });

export function BitsOfPersonality() {
  const theme = useTheme();
  const token = useToken();
  return (
    <Section name="Bits of Personality">
      <div className={`${pageStyles.grid1} gap-one`}>
        <Box title="2023/prologin.png" undertitle="34.3kb, 256 x 256" className="!bg-black">
          <div className="flex-1 bg-[url(/homepage/2023/prologin.png)] bg-contain bg-no-repeat bg-center"/>
        </Box>
        <Box title="2024/cdr_fra.png" undertitle="34.3kb, 256 x 256" className="!bg-black">
          <div className="flex-1 bg-[url(/homepage/2024/cdr_fra.png)] bg-contain bg-no-repeat bg-center"/>
        </Box>
        <Box title="2024/prologin.png" undertitle="34.3kb, 256 x 256" className="!bg-black">
          <div className="flex-1 bg-[url(/homepage/2024/prologin.png)] bg-contain bg-no-repeat bg-center"/>
        </Box>
        <Box className="bg-[linear-gradient(0deg,rgb(var(--ctp-blue)),rgb(var(--ctp-sky)))] h-full bright-bg self-stretch" title="building.svg">
          <div className="flex-1 m-minone mt-0 bg-[url(/homepage/building.svg)] bg-no-repeat bg-[position:left_max(0px,100%)]" />
        </Box>
        <form className="h-fit flex flex-col rounded-one gap-half bg-cat-surface0" method="POST" action="/submit">
          <Box title="/sys/misc/status">
            <pre className="text-wrap">{"<immjs> The website's lookin good! (I think...)"}</pre>
          </Box>
          <input hidden name="csrf" defaultValue={ token } disabled />
          <div className="flex gap-half">
            <Box hasBorder title="sendmail" htmlFor="reply" className="flex-1">
              <input name="" className="appearance-none bg-transparent focus:outline-none font-mono w-full" type="text" placeholder="Reply to status..." id="reply"/>
            </Box>
            <button className="p-one bright-bg bg-cat-mauve rounded-one">
              <SendIcon />
            </button>
          </div>
        </form>
      </div>
      <div className={`${pageStyles.grid2} gap-one`}>
        <Box title="40lines_personal_best.ttr" undertitle="5 days ago, 108 pieces @ 1.78 PPS">
          <div className="flex flex-col gap-half items-center justify-center flex-1 w-full">
            <p>My 40L Personal best:</p>
            <span className={`text-[4.8rem] font-bold leading-[1em] drop-shadow-[0px_0.25rem_rgba(var(--ctp-text),0.75)] ${hun2.className}`}>1:00<small>.620</small></span>
          </div>
        </Box>
        <Box title="/sys/tetra/rank">
          <div className="flex flex-col items-center justify-center flex-1 w-full">
            <Image src="/homepage/tetrio-ranks/a.png" alt="A rank" width={96} height={96} draggable={false} />
            <span className={`leading-[1em] ${proFontWindows.className}`}>@ 14075.42 TR</span>
          </div>
        </Box>
        <Player csrf={useToken()} />
        <Box title="rickroll.gif" undertitle="8.7mb, 320 x 240" className="!bg-black">
          <div className="xl:flex-1 bg-[url(/homepage/rickroll.webp)] bg-contain bg-no-repeat bg-center h-[256px]"></div>
        </Box>
        <DoodleResp posx="left" dx={-192} posy="bottom" dy={0} src={`/homepage/doodles/${theme}/personality.svg`} altImgSrc={`/homepage/doodles/${theme}/personality_altern.svg`} alt="Doodle pointing at you because YOU JUST GOT RICKROLLED!" />
      </div>
    </Section>
  );
}
