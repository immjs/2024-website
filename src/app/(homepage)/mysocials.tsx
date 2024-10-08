import { useTheme } from "@/components/theme";
import { Section } from "./components/section";
import pageStyles from "./page.module.css";
import { Box } from "@/components/box";
import { Discord } from "./socials/discord";
import { GitHub } from "./socials/github";
import { YouTube } from "./socials/youtube";
import { Twitch } from "./socials/twitch";
import { TetrIO } from "./socials/tetrio";
import { EMail } from "./socials/email";
import { Doodle } from "@/components/doodle";
import { Link } from "@/components/link";

export function MySocials() {
  const theme = useTheme();
  return (
    <Section name="My Socials">
      <div className={`${pageStyles.grid3} gap-one`}>
        <Link href="https://discord.com/users/443126331807629333">
          <Box title="://discord.com" className="bright-bg bg-lavender">
            <div className="flex gap-half">
              <Discord />
              immjs
            </div>
          </Box>
        </Link>
        <Link href="https://github.com/immjs" className="rounded-one bg-white">
          <Box title="://github.com" className="bg-transparent">
            <div className="flex gap-half">
              <GitHub />
              immjs
            </div>
          </Box>
        </Link>
        <Link href="https://youtube.com/@immjs">
          <Box title="://youtube.com" className="bright-bg bg-red">
            <div className="flex gap-half">
              <YouTube />
              immjs
            </div>
          </Box>
        </Link>
        <Link href="https://twitch.tv/immjs_">
          <Box title="://twitch.tv" className="bright-bg bg-mauve">
            <div className="flex gap-half">
              <Twitch />
              immjs_
            </div>
          </Box>
        </Link>
        <Link href="https://ch.tetr.io/u/immjs">
          <Box title="://ch.tetr.io" className="bright-bg bg-green">
            <div className="flex gap-half">
              <TetrIO />
              immjs
            </div>
          </Box>
        </Link>
        <Link
          href="mailto:mbfsa@immjs.dev"
          className="pointer-events-none cursor-default relative"
          tabIndex={-1}
        >
          <Box hasBorder undertitle="at this domain">
            <div className="flex gap-half">
              <EMail />
              immjs at here
            </div>
          </Box>
          <Doodle
            className="xl:block"
            dx={0}
            dy={-192}
            posx="left"
            height={192}
            posy="bottom"
            src={`/homepage/doodles/${theme}/socials1.svg`}
            alt="My E-Mail address which is immjs [at-sign] the domain of this webpage"
          />
        </Link>
      </div>
      {/* <Doodle className="absolute" dx={0} dy={-192} posx="left" height={192} posy="bottom" src="/homepage/doodles/socials1.svg" alt="My E-Mail address which is immjs [at-sign] the domain of this webpage" /> */}
      <Doodle
        className="hidden lg:flex justify-end"
        dx={0}
        dy={-320}
        posx="right"
        width={320}
        height={320}
        posy="bottom"
        src={`/homepage/doodles/${theme}/socials2.svg`}
        alt={`"Pourquoi tu l'as écrite comme ça?" "Pour éviter les bots (spam etc...)" "Ah ouais logique"`}
      />
      <div className="lg:hidden flex justify-end">
        <Doodle
          dx={0}
          dy={-320}
          posx="right"
          width={320}
          height={320}
          posy="bottom"
          src={`/homepage/doodles/${theme}/socials2.svg`}
          alt={`"Pourquoi tu l'as écrite comme ça?" "Pour éviter les bots (spam etc...)" "Ah ouais logique"`}
        />
      </div>
    </Section>
  );
}
