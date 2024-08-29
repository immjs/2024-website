import { useTheme } from "@/components/theme";
import customRules from "./badges.module.css";

const badges = [
  () => <a href="https://melankorin.net/"><img src="https://melankorin.net/assets/img/buttons/button-2.gif" alt=""/></a>,
  () => <a href="https://dimden.dev/"><img src="https://dimden.dev/services/images/88x31.gif"/></a>,
  () => <a href="https://sad.ovh"><img src="https://sad.ovh/assets/binkies/sadovh.png"/></a>,
  () => <a href="https://abtmtr.link/"><img src="https://cdn.abtmtr.link/site_content/88x31/abtmtr_link.png"/></a>,
  () => <a href="https://maia.crimew.gay/"><img src="https://maia.crimew.gay/badges/maia.crimew.gay.png"/></a>,
  () => <a href="https://pocl.vip/"><img src="https://pocl.vip/img/buttons/poclbutton.gif" alt="pocl.v button" title="he he hee its pockel vee"/></a>,
  () => <a href="https://enby.space"><img src="https://enby.space/media/badges/nbsp.gif"/></a>,
  () => <a href="https://circulars.dev"><img src="https://circulars.dev/circular-88x31.gif"/></a>,
  () => <a href="https://760ceb3b9c0ba4872cadf3ce35a7a494.neocities.org/"><img src="https://760ceb3b9c0ba4872cadf3ce35a7a494.neocities.org/people/760ceb3b9c0ba4872cadf3ce35a7a494.png"/></a>,
  () => <a href="https://bomberfish.ca"><img src="https://bomberfish.ca/buttons/button.gif" alt="BomberFish" title="BomberFish" /></a>,
  () => <a href="https://thinliquid.dev"><img src="https://thinliquid.dev/thnlqd.png" alt="thinliquid's button" /></a>,
  () => <a href="https://www.tanguy.cyou/" target="_blank"><img src="https://www.tanguy.cyou/assets/img/links/button.webp"/></a>,
  () => <a href="https://micro.niko.lgbt/"><img src="https://micro.niko.lgbt/assets/microbutton.png"/></a>,
  () => <a href="https://nat.envs.sh"><img src="/88x31s/nat.envs.sh.gif"/></a>,
  () => <a href="https://immjs.dev/hotlink"><img src="/88x31s/immjs.dev.gif"/></a>,
];

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
    <div
      className={`${customRules.container} relative overflow-visible h-[180px] w-[1644px] bg-repeat`}
      style={{ backgroundImage: `url(/homepage/doodles/${useTheme()}/badges.svg)` }}
    >
      {
        badges
          .map((Component, i) => (
            <div key={i} className={`absolute ${customRules.badge}`} style={{ left: xys[i][0], top: xys[i][1] }}>
              <Component />
            </div>
          ))
      }
      {
        badges
          .map((Component, i) => (
            <div key={i} className={`absolute ${customRules.badge}`} style={{ left: xys[i][0] + 822, top: xys[i][1] }}>
              <Component />
            </div>
          ))
      }
    </div>
  );
}
