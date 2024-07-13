import { Arrow } from "@/components/arrow";
import { Box } from "@/components/box";
import { Doodle, DoodleResp } from "@/components/doodle";
import { PrettyFrame } from "@/components/pretty_frame";
import { Ghost, H1, H2, Small } from "@/components/typo";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useContext, useRef } from "react";
import pageStyles from './page.module.css';
import { SendIcon } from "@/components/icons/send";
import { getToken } from "@/components/csrf";

import localFont from 'next/font/local';
import { Player } from "./player";
import { Discord } from "./socials/discord";
import { GitHub } from "./socials/github";
import { Twitch } from "./socials/twitch";
import { TetrIO } from "./socials/tetrio";
import { EMail } from "./socials/email";
import { YouTube } from "./socials/youtube";
 
// Font files can be colocated inside of `pages`
const hun2 = localFont({ src: './fonts/hun2.ttf' });
const config = localFont({ src: './fonts/cr.ttf' });
const proFontWindows = localFont({ src: './fonts/pfw.ttf' });

function Section({ name, children }: SectionProps) {
  return (
    <div className="relative flex flex-col gap-4 w-full">
      { name && (
        <div className="flex gap-2 items-center w-full">
          <span className="font-mono font-bold">{ name }</span>
          <div className="flex-1 bg-zerotofull h-[0.375em] rounded-r-[0.25em]"></div>
        </div>
      ) }
      { children }
    </div>
  );
}

function Introduction () {
  return (
    <div className="flex flex-col items-center gap-16">
      <Small>
        I try to be elegant but I end up being akward
      </Small>
      <div className="flex gap-two flex-col xl:flex-row w-full">
        <div className="flex justify-center">
          <PrettyFrame className="p-zero">
            <Image alt="immjs logo" src="/homepage/logo.svg" width={224} height={224} className='max-sm:bg-[url(/homepage/doodles/intro_altern.svg)]' />
            <Doodle alt="Doodle of me gripping the logo" src="/homepage/doodles/intro.svg" posx="left" posy="top" dx={-150} dy={-80} className="absolute max-sm:hidden" />
          </PrettyFrame>
        </div>
        <div className="lg:flex-1 flex flex-col gap-4">
          <span>
            <H1>Hi, I&apos;m Juliet! <span className="opacity-ghost">(she/her)</span></H1>
            <H2>(but please call me Informa)</H2>
          </span>
          <p>I’m a 17 years old french student who codes for fun! My other hobbies are not really hobbies, more like variably lengthed obsessions of literally anything, such as The Minitel currently!</p>
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  name?: string;
  children?: ReactNode | ReactNode[];
}

function ProjectCard({
  imageTitle,
  image,
  childrenTitle,
  title,
  shortDesc,
  longDesc,
  links,
}: ProjectCardProps) {
  return (
    <div className="w-full flex flex-col gap-half xl:flex-row bg-cat-surface0 rounded-one">
      <Box title={imageTitle} className="items-center xl:w-[288px]">
        <div className="xl:flex-1 flex justify-center items-center">
          { image }
        </div>
      </Box>
      <div className="xl:flex-1 flex flex-col gap-half">
        <Box title={childrenTitle} className="items-center">
          <div className="flex flex-col gap-4">
            <span>
              <H1>{ title }</H1>
              <H2>{ shortDesc }</H2>
            </span>
            <p>
              { longDesc }
            </p>
          </div>
        </Box>
        <div className="flex flex-col sm:flex-row gap-half">
          {
            links.map(
              ({
                className,
                border,
                linkTitle,
                linkAddress,
                linkName,
              }, idx) => (
                <Link key={idx} href={linkAddress} title={linkName} className="flex-1">
                  <Box title={linkTitle} className={className} hasBorder={border}>
                    <div className="flex gap-half items-center">
                      <span className="font-bold">{ linkName }</span>
                      <Arrow />
                    </div>
                  </Box>
                </Link>
              )
            )
          }
        </div>
      </div>
    </div>
  );
}
interface ProjectCardProps {
  imageTitle: string;
  image: ReactNode;
  childrenTitle: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  links: {
    className: string;
    border?: boolean;
    linkTitle: string;
    linkAddress: string;
    linkName: string;
  }[];
}

function MyProjects() {
  return (
    <Section name="My Projects">
      <ProjectCard
        imageTitle="plurriel.lnk"
        image={<Image alt="Plurriel logo" src="/homepage/plurriel.lnk.svg" width={256} height={86} />}
        childrenTitle="plurriel.md"
        title="Plurriel"
        shortDesc="An e-mail service"
        longDesc="With the ability for you to create an infinite amount of e-mail addresses,
        Plurriel will make itself the only e-mail app you'll ever need.
        And as for privacy: it's by design"
        links={[
          {
            className: 'bright-bg bg-cat-red',
            linkTitle: '://plurriel.email',
            linkAddress: 'https://plurriel.email',
            linkName: 'Homepage',
          },
          {
            className: '',
            border: true,
            linkTitle: '://github.com',
            linkAddress: 'https://github.com/plurriel/',
            linkName: 'Source code',
          },
        ]}
      />
      <ProjectCard
        imageTitle="leboneleve.shortcut"
        image={<Image alt="Le Bon Élève logo" src="/homepage/leboneleve.shortcut.svg" width={192} height={192} />}
        childrenTitle="leboneleve.md"
        title="Le Bon Élève"
        shortDesc="A web-based proxy"
        longDesc="If your device can access some parts of the web including Le Bon Élève,
        consider the whole web to your reach."
        links={[
          {
            className: '',
            border: true,
            linkTitle: '://github.com',
            linkAddress: 'https://github.com/immjs/leboneleve',
            linkName: 'Source code',
          },
        ]}
      />
      <ProjectCard
        imageTitle="minitel.svg"
        image={<Image alt="A flat design of the minitel" src="/homepage/minitel.svg.svg" width={184} height={238} />}
        childrenTitle="minitel-react/README.md"
        title="minitel-react"
        shortDesc="A react renderer for the minitel"
        longDesc="Interfacing the Minitel has now become as easy as creating as webpage - and centering is even easier than!"
        links={[
          {
            className: 'bright-bg bg-cat-yellow',
            linkTitle: '://npmjs.com',
            linkAddress: 'https://npmjs.com/package/minitel-react',
            linkName: 'NPM Package',
          },
          {
            className: '',
            border: true,
            linkTitle: '://github.com',
            linkAddress: 'https://github.com/immjs/leboneleve',
            linkName: 'Source code',
          },
        ]}
      />
      <DoodleResp alt="Doodle of me coding late at night" src="/homepage/doodles/projects.svg" height={384} posx="right" dx={-256} posy="bottom" dy={0} />
    </Section>
  );
}

function BlogPostCard({ id, thumbnailAlt, title, tags, desc, blogpostColor, datePublished }: BlogPostCardProps) {
  return (
    <div className="w-full gap-half flex flex-col xl:flex-row-reverse bg-cat-surface0 rounded-one">
      <Box title={`/blog/id:${id}/thumb.svg`} className="items-center">
        <div className="xl:flex-1 flex justify-center items-center">
        <Image alt={thumbnailAlt} src={`/blog/id:${id}/thumb.svg`} width={192} height={192} />
        </div>
      </Box>
      <div className="flex-1 flex flex-col gap-half">
        <Box title={`/blog/id:${id}/desc`} className="items-center">
          <div className="flex flex-col gap-4">
            <span>
              <H1>{title}</H1>
              <H2>Tags: {tags.join(', ')}</H2>
            </span>
            <p>{desc}</p>
          </div>
        </Box>
        <div className="flex flex-col sm:flex-row gap-half">
          <Box title={`/blog/id:${id}/date`}>
            {datePublished}
          </Box>
          <Link href={`/blog/id:${id}`} className="flex-1">
            <Box className="bright-bg" style={{ backgroundColor: `rgb(var(--ctp-${blogpostColor}))` }} title={`/blog/id:${id}`}>
              <div className="flex gap-2 items-center">
                <span className="font-bold">Read</span>
                <Arrow />
              </div>
            </Box>
          </Link>
        </div>
      </div>
    </div>
  );
}
interface BlogPostCardProps {
  id: string;
  thumbnailAlt: string;
  title: string;
  tags: string[];
  desc: string;
  datePublished: string;
  blogpostColor: string;
}

function MyBlogPosts() {
  return (
    <Section name="My Blog Posts">
      <BlogPostCard
        id="0"
        thumbnailAlt="Younger me having trouble"
        title="My experience as an underage developer"
        tags={["Rant"]}
        desc="As inspiring as it might sound, starting to code at 8 might not be the best idea"
        datePublished="7th of July, 2024"
        blogpostColor="red"
      />
      <BlogPostCard
        id="1"
        thumbnailAlt="It's a piece of cake!"
        title="Demystifying E-Mail"
        tags={["E-Mail"]}
        desc="I’ve been met with horrified reaction when saying I coded my own mail server. But... it was easy though"
        datePublished="7th of July, 2024"
        blogpostColor="peach"
      />
      <Box className="bright-bg bg-cat-pink" title="/blog">
        <div className="flex gap-2 items-center">
          <span className="font-bold">More blog posts</span>
          <Arrow />
        </div>
      </Box>
      <DoodleResp alt="Doodle of me annoying my friends away" src="/homepage/doodles/blogposts.svg" posx="left" dx={-256} posy="bottom" dy={0} />
    </Section>
  );
}

function PictureCard({ src, alt }: { src: string, alt: string }) {
  return (
    <Image
      alt={alt}
      src={src}
      width={0}
      height={0}
      sizes="100%"
      className="w-full h-auto xl:w-auto xl:h-full rounded-one"
    />
  );
}

function MyPhotography() {
  return (
    <Section name="My Photography">
      <div className="flex flex-col gap-one">
        <div className="flex flex-col gap-one xl:flex-row xl:h-[calc(0.47*768px)]">
          <PictureCard src="/photography/fields.png" alt="Picture of fields seemingly leading to clouds, creating the illusion of altitude" />
          <PictureCard src="/photography/forest.png" alt="Picture of a forest with a rock" />
        </div>
        <div className="flex flex-col gap-one xl:flex-row-reverse xl:h-[calc(0.47*768px)]">
          <PictureCard src="/photography/studyone.png" alt="Picture of the François Mitterand library after a cram evening" />
          <PictureCard src="/photography/litsea.png" alt="Picture of a brutalis building lit amongst blue skyscrapers" />
        </div>
      </div>
      <Box className="bright-bg bg-cat-lavender" title="/photography">
        <div className="flex gap-2 items-center">
          <span className="font-bold">More photography</span>
          <Arrow />
        </div>
      </Box>
      <DoodleResp alt="Doodle of me taking a picture" src="/homepage/doodles/photography.svg" posx="right" dx={-256} posy="bottom" dy={0} />
    </Section>
  );
}

function BitsOfPersonality() {
  const token = getToken();
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
            <Image src="/homepage/tetrio-ranks/a.png" alt="A rank" width={96} height={96} />
            <span className={`leading-[1em] ${proFontWindows.className}`}>@ 14075.42 TR</span>
          </div>
        </Box>
        <Player />
        <Box title="rickroll.gif" undertitle="8.7mb, 320 x 240" className="!bg-black">
          <div className="xl:flex-1 bg-[url(/homepage/rickroll.webp)] bg-contain bg-no-repeat bg-center h-[256px]"></div>
        </Box>
        <DoodleResp posx="left" dx={-192} posy="bottom" dy={0} src="/homepage/doodles/personality.svg" altImgSrc="/homepage/doodles/personality_altern.svg" alt="Doodle pointing at you because YOU JUST GOT RICKROLLED!" />
      </div>
    </Section>
  );
}

function MySocials() {
  return (
    <Section name="My Socials">
      <div className={`${pageStyles.grid3} gap-one`}>
        <Link href="https://discord.com/">
          <Box title="://discord.com" className="bright-bg bg-cat-lavender">
            <div className="flex gap-half">
              <Discord />
              immjs
            </div>
          </Box>
        </Link>
        <Link href="https://github.com/immjs" className="bg-cat-text rounded-one">
          <Box title="://github.com" className="bright-bg bg-transparent">
            <div className="flex gap-half">
              <GitHub />
              immjs
            </div>
          </Box>
        </Link>
        <Link href="https://youtube.com/@immjs">
          <Box title="://youtube.com" className="bright-bg bg-cat-red">
            <div className="flex gap-half">
              <YouTube />
              immjs
            </div>
          </Box>
        </Link>
        <Link href="https://twitch.tv/immjs_">
          <Box title="://twitch.tv" className="bright-bg bg-cat-mauve">
            <div className="flex gap-half">
              <Twitch />
              immjs_
            </div>
          </Box>
        </Link>
        <Link href="https://ch.tetr.io/u/immjs">
          <Box title="://ch.tetr.io" className="bright-bg bg-cat-green">
            <div className="flex gap-half">
              <TetrIO />
              immjs
            </div>
          </Box>
        </Link>
        <Link href="mailto:mbfsa@immjs.dev" className="pointer-events-none cursor-default relative">
          <Box title="mailto:" hasBorder>
            <div className="flex gap-half">
              <EMail />
              immjs at here
            </div>
          </Box>
          <Doodle className="xl:block" dx={0} dy={-192} posx="left" height={192} posy="bottom" src="/homepage/doodles/socials1.svg" alt="My E-Mail address which is immjs [at-sign] the domain of this webpage" />
        </Link>
      </div>
      {/* <Doodle className="absolute" dx={0} dy={-192} posx="left" height={192} posy="bottom" src="/homepage/doodles/socials1.svg" alt="My E-Mail address which is immjs [at-sign] the domain of this webpage" /> */}
      <Doodle className="hidden lg:flex justify-end" dx={0} dy={-320} posx="right" width={320} height={320} posy="bottom" src="/homepage/doodles/socials2.svg" alt={`"Pourquoi tu l'as écrite comme ça?" "Pour éviter les bots (spam etc...)" "Ah ouais logique"`} />
      <div className="lg:hidden flex justify-end">
        <Doodle dx={0} dy={-320} posx="right" width={320} height={320} posy="bottom" src="/homepage/doodles/socials2.svg" alt={`"Pourquoi tu l'as écrite comme ça?" "Pour éviter les bots (spam etc...)" "Ah ouais logique"`} />
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <div className="flex justify-center items-center px-6 py-[calc(50vh-125px-4.8rem)] pb-0 xl:pb-[320px] ml-4">
      <main className="flex flex-col gap-two text-cat-text justify-center max-w-[512px] xl:max-w-[calc(768px-2em)]">
        <Introduction />
        <MyProjects />
        <MyBlogPosts />
        <MyPhotography />
        <BitsOfPersonality />
        <MySocials />
      </main>
    </div>
  );
}
