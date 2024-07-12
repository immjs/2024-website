import { Arrow } from "@/components/arrow";
import { Box } from "@/components/box";
import { PrettyFrame } from "@/components/pretty_frame";
import { Ghost, H1, H2, Small } from "@/components/typo";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useRef } from "react";

function Section({ name, children }: SectionProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
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
      <div className="flex gap-two flex-col lg:flex-row w-full">
        <div className="flex justify-center">
          <PrettyFrame className="p-zero">
            <Image alt="immjs logo" src="/logo.svg" width={224} height={224} className='max-lg:bg-[url(/me.svg)]' />
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
    <div className="w-full flex flex-col gap-half lg:flex-row bg-cat-surface0 rounded-one">
      <Box title={imageTitle} className="items-center lg:w-[288px]">
        <div className="lg:flex-1 flex justify-center items-center">
          { image }
        </div>
      </Box>
      <div className="lg:flex-1 flex flex-col gap-half">
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
        image={<Image alt="Plurriel logo" src="/plurriel.lnk.svg" width={256} height={86} />}
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
        image={<Image alt="Le Bon Élève logo" src="/leboneleve.shortcut.svg" width={192} height={192} />}
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
        image={<Image alt="A flat design of the minitel" src="/minitel.svg.svg" width={184} height={238} />}
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
    </Section>
  );
}

function BlogPostCard({ id, thumbnailAlt, title, tags, desc, blogpostColor, datePublished }: BlogPostCardProps) {
  return (
    <div className="w-full gap-half flex flex-col lg:flex-row-reverse bg-cat-surface0 rounded-one">
      <Box title={`/blog/id:${id}/thumb.svg`} className="items-center">
        <div className="lg:flex-1 flex justify-center items-center">
        <Image alt={thumbnailAlt} src={`/blog/id:${id}/thumb.svg`} width={192} height={192} />
        </div>
      </Box>
      <div className="flex flex-col gap-half">
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
      <div className="flex flex-col gap-half">
        <div className="flex flex-col gap-half xl:flex-row xl:h-[376px]">
          <PictureCard src="/photography/fields.png" alt="Picture of fields seemingly leading to clouds, creating the illusion of altitude" />
          <PictureCard src="/photography/forest.png" alt="Picture of a forest with a rock" />
        </div>
        <div className="flex flex-col gap-half xl:flex-row-reverse xl:h-[376px]">
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
    </Section>
  );
}

export default function Home() {
  return (
    <div className="flex justify-center items-center px-6 py-24">
      <main className="flex flex-col gap-two text-cat-text justify-center max-w-[512px] lg:max-w-[800px]">
        <Introduction />
        <MyProjects />
        <MyBlogPosts />
        <MyPhotography />
      </main>
    </div>
  );
}
