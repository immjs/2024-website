import { useToken } from "@/components/csrf";
import { useTheme } from "@/components/theme";
import { Section } from "./components/section";
import pageStyles from "./page.module.css";
import { Box, BoxLabelType } from "@/components/box";
import { SendIcon } from "@/components/icons/send";
import Image from "next/image";
import { Player } from "../../components/player";
import { DoodleResp } from "@/components/doodle";
import localFont from "next/font/local";
import { Badges } from "./components/badges";
import { useEffect, useState } from "react";
import Palette from "./components/palette";

// Font files can be colocated inside of `pages`
const hun2 = localFont({ src: "./fonts/hun2.ttf" });
// const config = localFont({ src: './fonts/cr.ttf' });
const proFontWindows = localFont({ src: "./fonts/pfw.ttf" });

export function BitsOfPersonality({
  status,
  tetrio,
  palette,
}: {
  status: any;
  tetrio: TetrioData;
  palette: [string, string, string],
}) {
  const theme = useTheme();
  const token = useToken();
  const minutes = Math.floor(tetrio[0].time / 60000);
  const seconds = Math.floor(tetrio[0].time / 1000) % 60;
  const milliseconds = Math.floor(tetrio[0].time % 1000);
  const piecesPerSecond = (
    tetrio[0].piecesPlaced /
    (tetrio[0].time / 1000)
  ).toFixed(2);

  const WebringContainer: string = 'webring-container';
  const Config: string = 'config';

  return (
    <Section name="Bits of Personality">
      <div className="flex flex-col gap-one">
        <div className={`${pageStyles.grid1} gap-one`}>
          <Box
            title="2023/prologin.png"
            undertitle="34.3kb, 256 x 256"
            className="max-[384px]:max-h-[calc(10vw+200px)] max-[384px]:aspect-square !bg-black"
          >
            <div className="flex-1 bg-[url(/homepage/2023/prologin.png)] bg-contain bg-no-repeat bg-center" />
          </Box>
          <Box
            title="2024/cdr_fra.png"
            undertitle="34.3kb, 256 x 256"
            className="max-[384px]:max-h-[calc(10vw+200px)] max-[384px]:aspect-square !bg-black"
          >
            <div className="flex-1 bg-[url(/homepage/2024/cdr_fra.png)] bg-contain bg-no-repeat bg-center" />
          </Box>
          <Box
            title="2024/prologin.png"
            undertitle="34.3kb, 256 x 256"
            className="max-[384px]:max-h-[calc(10vw+200px)] max-[384px]:aspect-square !bg-black"
          >
            <div className="flex-1 bg-[url(/homepage/2024/prologin.png)] bg-contain bg-no-repeat bg-center" />
          </Box>
          <Box
            className="bg-white bg-[linear-gradient(0deg,rgb(var(--ctp-blue)),rgb(var(--ctp-sky)))] h-0 min-h-full bright-bg self-stretch"
            title="building.svg"
          >
            <div className="sm:flex-1 flex-shrink-0 aspect-[2/3] max-w-[300px] m-minone mt-0 bg-[url(/homepage/building.svg)] bg-no-repeat bg-[position:left_max(0px,100%)]" />
          </Box>
          <form
            className="h-fit flex flex-col rounded-one gap-half"
            method="POST"
            action="/reply_status"
          >
            <Box
              title="Status"
              boxType={BoxLabelType.DESCRIPTN}
              undertitle={`Published: ${(status.updatedat as Date).toLocaleString("en-US", { timeZone: "UTC", dateStyle: "medium", timeStyle: "medium" })} UTC`}
            >
              <pre className="text-wrap">
                {status.status
                  .split("\n")
                  .map((v: any) => `<immjs> ${v}`)
                  .join("\n")}
              </pre>
            </Box>
            <input hidden name="csrf" value={token} readOnly />
            <div className="flex gap-half">
              <label
                htmlFor="reply"
                className="flex-1 cursor-pointer before:content-['Status_reply:'] before:absolute before:font-mono before:opacity-ghost before:text-small before:pl-one before:pt-[calc(0.5lh-0.4em)] before:inset-0 before:z-20 relative"
              >
                <div className="">
                  <input
                    name="reply"
                    className="p-[calc(1.6rem-4px)] bg-cat-base appearance-none focus:outline-none font-mono w-full rounded-one border-slim border-cat-text border-solid"
                    type="text"
                    placeholder="Reply to status..."
                    id="reply"
                    required
                    minLength={2}
                    maxLength={400}
                    autoComplete="off"
                  />
                </div>
              </label>
              <button className="p-one bright-bg bg-mauve rounded-one">
                <SendIcon />
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col md:flex-row gap-one">
          <Box
            className="!bg-black w-full md:w-fit h-fit"
            title="Navlink Ads"
            boxType={BoxLabelType.DESCRIPTN}
          >
            <div className="flex justify-center items-center">
              <iframe
                width="180"
                height="180"
                style={{ border: "none" }}
                src="/navlink/"
                name="neolink"
                tabIndex={-1}
              />
            </div>
          </Box>
          <Box
            className="w-full flex-grow md:basis-0"
            title="88x31 badges"
            undertitle="Please hotlink me! (click on my badge!)"
            boxType={BoxLabelType.DESCRIPTN}
          >
            <Badges />
          </Box>
        </div>
        <Box title="Aesthetically Pleasing Color Palette Webring" boxType={BoxLabelType.DESCRIPTN}>
          <Palette palette={palette} />
        </Box>
        <div className={`${pageStyles.grid2} gap-one`}>
          <Box
            title="40 lines personal best"
            undertitle={`${new Date(tetrio[0].at).toLocaleDateString("en-US", { timeZone: "UTC", dateStyle: "medium" })}, ${tetrio[0].piecesPlaced} pieces @ ${piecesPerSecond} PPS`}
            boxType={BoxLabelType.DESCRIPTN}
          >
            <div className="flex flex-col gap-half items-center justify-center flex-1 w-full">
              <span
                className={`text-[4.8rem] font-bold drop-shadow-[0px_0.25rem_rgba(var(--ctp-text),0.75)] ${hun2.className}`}
              >
                {minutes}:{String(seconds).padStart(2, "0")}
                <small className="max-[360px]:hidden">.{String(milliseconds).padStart(3, "0")}</small>
              </span>
            </div>
          </Box>
          <Box
            title="Tetra league rank"
            boxType={BoxLabelType.DESCRIPTN}
            undertitle={new Date(tetrio[1].at).toLocaleDateString("en-US", {
              timeZone: "UTC",
              dateStyle: "medium",
            })}
          >
            <div className="flex flex-col items-center justify-center flex-1 w-full">
              <img
                src={`/homepage/tetrio-ranks/${tetrio[1].rank}.png`}
                alt="A rank"
                width={96}
                height={96}
                draggable={false}
              />
              <span className="leading-[1em]">
                @ {tetrio[1].rating.toFixed(1)} TR
              </span>
            </div>
          </Box>
          <Player />
          <Box
            title="rickroll.gif"
            undertitle="8.7mb, 320 x 240"
            className="!bg-black"
          >
            <div className="xl:flex-1 bg-[url(/homepage/rickroll.webp)] bg-contain bg-no-repeat bg-center h-[256px]"></div>
          </Box>
          <DoodleResp
            posx="left"
            dx={-192}
            posy="bottom"
            dy={0}
            src={`/homepage/doodles/${theme}/personality.svg`}
            altImgSrc={`/homepage/doodles/${theme}/personality_altern.svg`}
            alt="Doodle pointing at you because YOU JUST GOT RICKROLLED!"
          />
        </div>
      </div>
    </Section>
  );
}

export type TetrioData = [
  {
    time: number;
    piecesPlaced: number;
    at: number;
  },
  {
    rank: string;
    rating: number;
    at: number;
  },
];
