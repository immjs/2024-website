import { useTheme } from "@/components/theme";
import { Section } from "./components/section";
import { ProjectCard } from "./components/projectcard";
import Image from "next/image";
import { DoodleResp } from "@/components/doodle";

export function MyProjects() {
  const theme = useTheme();
  return (
    <Section name="My Projects">
      <ProjectCard
        imageTitle="plurriel.lnk"
        image={
          <img
            alt="Plurriel logo"
            src={`/homepage/plurriel.lnk_${theme}.svg`}
            width={256}
            height={86}
          />
        }
        title="Plurriel"
        shortDesc="An e-mail service"
        longDesc="With the ability for you to create an infinite amount of e-mail addresses,
        Plurriel will make itself the only e-mail app you'll ever need.
        And as for privacy: it's by design"
        publishedAround="October 2023"
        links={[
          {
            className: "bright-bg bg-red",
            linkTitle: "://plurriel.email",
            linkAddress: "https://plurriel.email",
            linkName: "Homepage",
          },
          {
            className: "",
            border: true,
            linkTitle: "://github.com",
            linkAddress: "https://github.com/plurriel/",
            linkName: "Source code",
          },
        ]}
      />
      <ProjectCard
        imageTitle="leboneleve.svg"
        image={
          <img
            alt="Le Bon Élève logo"
            src={`/homepage/leboneleve.shortcut_${theme}.svg`}
            width={192}
            height={192}
          />
        }
        title="Le Bon Élève"
        shortDesc="A web-based proxy"
        longDesc="If your device can access some parts of the web including Le Bon Élève,
        consider the whole web to your reach."
        publishedAround="December 2022"
        links={[
          {
            className: "",
            border: true,
            linkTitle: "://github.com",
            linkAddress: "https://github.com/immjs/leboneleve",
            linkName: "Source code",
          },
        ]}
      />
      <ProjectCard
        imageTitle="minitel.svg"
        image={
          <img
            alt="A flat design of the minitel"
            src="/homepage/minitel.svg.svg"
            width={184}
            height={238}
          />
        }
        title="minitel-react"
        shortDesc="A react renderer for the minitel"
        longDesc="Interfacing the Minitel has now become as easy as creating a webpage - and centering is even easier than!"
        publishedAround="May 2024"
        links={[
          {
            className: "bright-bg bg-yellow",
            linkTitle: "://npmjs.com",
            linkAddress: "https://npmjs.com/package/minitel-react",
            linkName: "NPM Package",
          },
          {
            className: "",
            border: true,
            linkTitle: "://github.com",
            linkAddress: "https://github.com/immjs/minitel-react",
            linkName: "Source code",
          },
        ]}
      />
      <DoodleResp
        alt="Doodle of me coding late at night"
        src={`/homepage/doodles/${theme}/projects.svg`}
        height={384}
        posx="right"
        dx={-256}
        posy="bottom"
        dy={0}
      />
    </Section>
  );
}
