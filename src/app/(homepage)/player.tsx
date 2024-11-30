"use client";

import YouTube, { YouTubeProps } from "react-youtube";
import { YouTubePlayer } from "react-youtube";
import { Box, BoxLabelType } from "@/components/box";
import { Play } from "@/components/icons/play";
import { Prev } from "@/components/icons/prev";
import { Next } from "@/components/icons/next";
import { ChevDown } from "@/components/icons/chev_down";
import { useEffect, useRef, useState } from "react";
import { Pause } from "@/components/icons/pause";
import seedrandom from "seedrandom";
import { Link } from "@/components/link";
import playerStyles from "./player.module.css";

export function Player({ csrf }: { csrf: string }) {
  const player = useRef<YouTubePlayer | null>(null);

  const playlists = [
    ["PLkFJEmWGjvn1Z8uDE2jFHNL4RGj_5Z_Yy", "don't OD - a Femtanyl mix"],
    ["PLkFJEmWGjvn0JocWGMlNO8XLZOWn8P2B4", "Vapor Wing"],
    ["PLkFJEmWGjvn0MOxdlNqHGy87Fh77HF_QY", "Good Kid"],
    ["PLkFJEmWGjvn3MmWxoahEdJiuW9CXHAJkF", "Brekcore"],
    ["PLkFJEmWGjvn2QjOBvGUwy092XTvpT3SX1", "Summer Vibes"],
    ["OLAK5uy_mMHh73Ncdj_bfVlmrlGPG68DDOY1kn-Iw", "SHINBANGUMI"],
    ["PLkFJEmWGjvn3IyBbEVdv6jTz2yo3QE9fT", "Liana Flores"],
    ["PLkFJEmWGjvn18C2b-JqJdhC2z4IFAJ4-Z", "Bad Snacks"],
    ["PLkFJEmWGjvn1zXzlPMlAIwsBPONqSBnTm", "S K Y W A Y (Asthenic)"],
    ["PLkFJEmWGjvn3i_nCh5wg5pSp4EQFsqS7q", "Recovery Mode"],
    ["PLkFJEmWGjvn2FQj8VrTy8nLtkbEJSCpph", "Funk'n'Disco"],
  ];

  const randomIdxDeterministic = Math.floor(
    seedrandom(csrf)() * playlists.length,
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [curList, setCurList] = useState(playlists[randomIdxDeterministic][0]);

  const [loaded, setLoaded] = useState(false);
  const [curVideoAuthor, setCurVideoAuthor] = useState("");
  const [curVideoName, setCurVideoName] = useState("");
  const [curVideoUrl, setCurVideoUrl] = useState("");

  const iframeRefHack = useRef<YouTube | null>(null);

  const onPlayerStateChange: YouTubeProps["onStateChange"] = (event) => {
    console.log(event, YouTube.PlayerState);
    if (event.data === YouTube.PlayerState.PLAYING) {
      if (!isPlaying) {
        event.target.pauseVideo();
      }
      setLoaded(true);
    } else if (event.data === YouTube.PlayerState.PAUSED) {
      if (isPlaying) {
        event.target.unMute();
        event.target.playVideo();
      }
      setLoaded(true);
    } else if (event.data === YouTube.PlayerState.UNSTARTED) {
      return setLoaded(false);
    }
    setCurVideoAuthor(
      // @ts-ignore
      event.target.getVideoData().author?.replace(/( - Topic|VEVO)$/g, ""),
    );
    setCurVideoName(
      // @ts-ignore
      event.target.getVideoData().title?.replace(/ \(Official [^\)]+\)$/g, ""),
    );
    setCurVideoUrl(event.target.getVideoUrl() as unknown as string);
    event.target.setLoop(true);
  };
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    const iframes = document.querySelectorAll("iframe");
    // console.log(iframe);
    for (const iframe of [...iframes]) {
      iframe.tabIndex = -1;
    }
    // access to player in all event handlers via event.target
    if (!isPlaying) event.target.mute();
    event.target.playVideo();
    player.current = event.target;
    setTimeout(() => {
      if (!isPlaying) {
        event.target.pauseVideo();
        event.target.seekTo(0, true);
      } else {
        event.target.unMute();
      }
    }, 500);
  };

  const opts: YouTubeProps["opts"] = {
    height: "768",
    width: "100%",
    host: "https://www.youtube-nocookie.com",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      list: curList,
      listType: "playlist",
    },
  };

  // useEffect(() => {
  //   const actualContainer = iframeRefHack.current?.container;
  //   console.log(actualContainer?.children);
  //   // @ts-ignore
  //   window.actualContainer = actualContainer;
  //   if (!actualContainer) return;
  //   const containerObserver = new MutationObserver((mutationList, observer) => {
  //     if (actualContainer.children.length >= 1) {
  //       const iframe = actualContainer.children[0] as HTMLIFrameElement;
  //       console.log(iframe);
  //       iframe.tabIndex = -1;
  //     }
  //   });
  //   containerObserver.observe(actualContainer, { childList: true, subtree: true });
  //   // return () => containerObserver.disconnect();
  // }, [iframeRefHack?.current?.container?.children]);

  return (
    <div className="flex flex-col rounded-one gap-half">
      <div className="relative bright-bg">
        <label htmlFor="media_player_select">
          <Box
            className="bg-red !bg-transparent z-10 absolute rounded-one text-base pointer-events-none"
            title="Set Playlist:"
            boxType={BoxLabelType.USER_ACTN}
          >
            <div className="z-10w-full flex justify-end">
              <ChevDown />
            </div>
          </Box>
        </label>
        <select
          className="cursor-pointer bg-red flex-1 absolute inset-0 p-one rounded-one appearance-none focus:outline-none font-bold w-full"
          id="media_player_select"
          defaultValue={curList}
          onChange={(e) => {
            setLoaded(false);
            setCurList(e.target.value);
          }}
        >
          {playlists.map(([id, name]) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="rounded-one relative overflow-hidden w-full select-none bg-cat-base">
        <div className="xl:h-full h-[256px]">
          <noscript className="flex justify-center items-center p-one rounded-one">
            <p>
              Dear <code>&lt;noscript&gt;</code> friend,
              <br />
              <br />
              Due to technical and legal reasons, I cannot provide you with my
              banger music tastes :&#8288;(
              <br />
              But you can click this card to access the underlying YouTube
              playlist!
              <br />
              <br />- Hope you&apos;re enjoying your stay, Juliet
            </p>
          </noscript>
          <div className="h-full relative">
            <div className="h-full pointer-events-none flex justify-center flex-col blur-[20px] mx-[-50px]">
              <YouTube
                ref={iframeRefHack}
                opts={opts}
                onReady={onPlayerReady}
                onStateChange={onPlayerStateChange}
              />
            </div>
            <Link
              className="opacity-ghost hover:opacity-full focus-visible:opacity-full !absolute cursor-pointer left-0 right-0 top-0 appearance-none focus:outline-none text-left"
              href={curVideoUrl}
              target="_blank"
              title="Click to open"
            >
              <Box
                className="rounded-t-none"
                title="Now Playing"
                boxType={BoxLabelType.DESCRIPTN}
                undertitle="Click to open"
              >
                <b>{curVideoAuthor}</b>
                <p>{curVideoName}</p>
              </Box>
            </Link>
            {!loaded && (
              <div className="absolute inset-0 bg-cat-base p-one flex items-center justify-center">
                Loading...
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`${playerStyles.buttons} gap-half`}>
        <button
          title="Previous song"
          className="appearance-none focus:outline-none"
          onClick={() => {
            player.current?.mute();
            player.current?.previousVideo();
          }}
        >
          <Box hasBorder className="flex items-center cursor-pointer">
            <Prev />
          </Box>
        </button>
        <button
          title="Play song"
          className="appearance-none focus:outline-none flex-1"
          onClick={() => {
            if (isPlaying) {
              player.current?.pauseVideo();
            } else {
              player.current?.unMute();
              player.current?.playVideo();
            }
            setIsPlaying(!isPlaying);
          }}
        >
          <Box className="flex items-center bright-bg bg-red cursor-pointer">
            {isPlaying ? <Pause /> : <Play />}
          </Box>
        </button>
        <button
          title="Next song"
          className="appearance-none focus:outline-none"
          onClick={() => {
            player.current?.mute();
            player.current?.nextVideo();
          }}
        >
          <Box hasBorder className="flex items-center cursor-pointer">
            <Next />
          </Box>
        </button>
      </div>
    </div>
  );
}
