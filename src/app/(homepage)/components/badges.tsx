import { useTheme } from "@/components/theme";
import customRules from "./badges.module.css";
import { Box, BoxLabelType } from "@/components/box";

const badges = [
  ["https://melankorin.net", () => <img src="https://melankorin.net/assets/img/buttons/button-2.gif" alt=""/>],
  ["https://dimden.dev", () => <img src="https://dimden.dev/services/images/88x31.gif"/>],
  ["https://sad.ovh", () => <img src="https://sad.ovh/assets/binkies/sadovh.png"/>],
  ["https://abtmtr.link", () => <img src="https://cdn.abtmtr.link/site_content/88x31/abtmtr_link.png"/>],
  ["https://maia.crimew.gay", () => <img src="https://maia.crimew.gay/badges/maia.crimew.gay.png"/>],
  ["https://pocl.vip", () => <img src="https://pocl.vip/img/buttons/poclbutton.gif" alt="pocl.v button" title="he he hee its pockel vee"/>],
  ["https://enby.space", () => <img src="https://enby.space/media/badges/nbsp.gif"/>],
  ["https://circulars.dev", () => <img src="https://circulars.dev/circular-88x31.gif"/>],
  ["https://760ceb3b9c0ba4872cadf3ce35a7a494.neocities.org", () => <img src="https://760ceb3b9c0ba4872cadf3ce35a7a494.neocities.org/people/760ceb3b9c0ba4872cadf3ce35a7a494.png"/>],
  ["https://bomberfish.ca", () => <img src="https://bomberfish.ca/buttons/button.gif" alt="BomberFish" title="BomberFish" />],
  ["https://thinliquid.dev", () => <img src="https://thinliquid.dev/thnlqd.png" alt="thinliquid's button" />],
  ["https://www.tanguy.cyou", () => <img src="https://www.tanguy.cyou/assets/img/links/button.webp"/>],
  ["https://micro.niko.lgbt", () => <img src="https://micro.niko.lgbt/assets/microbutton.png"/>],
  ["https://nat.envs.sh", () => <img src="/88x31s/nat.envs.sh.gif"/>],
  ["https://immjs.dev/hotlink", () => <img src="/88x31s/immjs.dev.gif"/>],
] as const;

const xys = [
  [62, 126],
  [140, 16],
  [155, 81],
  [263, 39],
  [272, 114],
  [388, 14],
  [398, 103],
  [462, 53],
  [561, 110],
  [576, 22],
  [658, 99],
  [694, 14],
  [696, 65],
  [752, 103],
  [810, 31],
];

export function Badges() {
  return (
    <div className="relative w-full">
      <div
        className={`${customRules.container} relative overflow-visible h-[180px] w-[1644px] bg-repeat`}
        style={{ backgroundImage: `url(/homepage/doodles/${useTheme()}/badges.svg)` }}
      >
        {
          badges
            .map(([url, Component], i) => (
              <a tabIndex={-1} href={url} key={i} className={`absolute ${customRules.badge}`} style={{ left: xys[i][0], top: xys[i][1] }}>
                <Component />
              </a>
            ))
        }
        {
          badges
            .map(([url, Component], i) => (
              <a tabIndex={-1} href={url} key={i} className={`absolute ${customRules.badge}`} style={{ left: xys[i][0] + 822, top: xys[i][1] }}>
                <Component />
              </a>
            ))
        }
      </div>
      {
        badges
          .map(([url, Component], i) => (
            <a href={url} className="[&:not(:focus-visible)>*]:hidden absolute -top-one -left-one -bottom-one -right-one" key={i}>
              <Box
                title="88x31 badges"
                boxType={BoxLabelType.DESCRIPTN}
                className="absolute flex z-20 w-full h-full bg-cat-base"
              >
                <div className="flex-1 w-full flex justify-center items-center gap-half flex-col [&>img]:w-[88px] [&>img]:h-[31px]">
                  <p className="overflow-ellipsis w-full overflow-hidden whitespace-nowrap text-center">
                    Currently selecting<br />
                    <b>{url.replace('https://', '')}</b>
                  </p>
                  <Component />
                </div>
              </Box>
            </a>
          ))
      }
    </div>
  );
}
