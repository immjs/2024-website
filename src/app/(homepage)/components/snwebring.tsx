import { headers } from "next/headers";
import JSON5 from 'json5';
import { getTheme } from "@/components/theme-server";
import { Small } from "@/components/typo";

export default function SNWebring() {
  return (
    <>
      <img src="https://snugnook.org/favicon.ico" alt="Pixel art of a panicking neofax" title="Snug Nook" style={{ imageRendering: "pixelated", aspectRatio: "1 / 1", width: "32px" }} />
      <p>
        <a href="https://snugnook.org/ring"><b>The Snug Ring</b></a>
      </p>
      <p>
        Webring of the community-focused community!
      </p>
      <p>
        <a className="underline" href="https://snugnook.org/ring?action=previouw">&lt;-- Previous website</a>
      </p>
      <p>
        <a className="underline" href="https://snugnook.org/ring?action=next">--&gt; Next website</a>
      </p>
    </>
  );
}
