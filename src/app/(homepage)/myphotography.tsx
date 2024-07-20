import { useTheme } from "@/components/theme";
import { Section } from "./components/section";
import { DoodleResp } from "@/components/doodle";
import { Arrow } from "@/components/arrow";
import { Box } from "@/components/box";
import { PictureCard } from "./components/picturecard";

export function MyPhotography() {
  const theme = useTheme();
  return (
    <Section name="My Photography">
      <div className="flex flex-col gap-one">
        <div className="flex flex-col gap-one xl:flex-row xl:h-[calc(0.47*800px)]">
          <PictureCard
            src="/photography/fields.png"
            alt="Picture of fields seemingly leading to clouds, creating the illusion of altitude"
          />
          <PictureCard
            src="/photography/forest.png"
            alt="Picture of a forest with a rock"
          />
        </div>
        <div className="flex flex-col gap-one xl:flex-row-reverse xl:h-[calc(0.47*800px)]">
          <PictureCard
            src="/photography/studyone.png"
            alt="Picture of the François Mitterand library after a cram evening"
          />
          <PictureCard
            src="/photography/litsea.png"
            alt="Picture of a brutalis building lit amongst blue skyscrapers"
          />
        </div>
      </div>
      <Box className="bright-bg bg-lavender" title="/photography">
        <div className="flex gap-2 items-center">
          <span className="font-bold">More photography</span>
          <Arrow />
        </div>
      </Box>
      <DoodleResp
        alt="Doodle of me taking a picture"
        src={`/homepage/doodles/${theme}/photography.svg`}
        posx="right"
        dx={-256}
        posy="bottom"
        dy={0}
      />
    </Section>
  );
}
