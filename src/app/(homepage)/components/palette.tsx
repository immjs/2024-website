import { headers } from "next/headers";
import JSON5 from 'json5';
import { getTheme } from "@/components/theme-server";
import { Small } from "@/components/typo";

export default function Palette({ palette: [prev, host, next] }: { palette: [string, string, string] }) {
  return (
    <>
      <img src="https://palette.nekoweb.org/icons/catppuccin.png" alt="Catppuccin" title="Catppuccin" style={{ imageRendering: "pixelated", aspectRatio: "1 / 1", width: "30px" }} />
      <p>
        <a><b>the aesthetically pleasing color palette webring</b></a>
      </p>
      <p>
        you&apos;re currently at: {host}
      </p>
      <p>
        <a className="underline" href={`https://${prev}`}>&lt;-- {prev}</a>
      </p>
      <p>
        <a className="underline" href={`https://${next}`}>--&gt; {next}</a>
      </p>
    </>
  );
}
