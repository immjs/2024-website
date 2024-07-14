"use client";

import YouTube, { YouTubeProps } from "react-youtube";
import { YouTubePlayer } from "react-youtube";
import { Box } from "@/components/box";
import { Play } from "@/components/icons/play";
import { Prev } from "@/components/icons/prev";
import { Next } from "@/components/icons/next";
import { ChevDown } from "@/components/icons/chev_down";
import Link from "next/link";
import { useRef, useState } from "react";
import { Pause } from "@/components/icons/pause";
import { H1 } from "@/components/typo";
import { getToken } from "@/components/csrf";

export function Player({ csrf }: { csrf: string }) {
  const player = useRef<YouTubePlayer | null>(null);

  const playlists = [
    ['PLkFJEmWGjvn0JocWGMlNO8XLZOWn8P2B4', 'Vapor Wing'],
    ['PLkFJEmWGjvn0MOxdlNqHGy87Fh77HF_QY', 'Good Kid'],
    ['PLkFJEmWGjvn3MmWxoahEdJiuW9CXHAJkF', 'Brekcore'],
    ['PLkFJEmWGjvn18C2b-JqJdhC2z4IFAJ4-Z', 'Bad Snacks'],
    ['PLkFJEmWGjvn3IyBbEVdv6jTz2yo3QE9fT', 'Liana Flores'],
    ['PLkFJEmWGjvn2QjOBvGUwy092XTvpT3SX1', 'Summer Vibes'],
    ['PLkFJEmWGjvn3i_nCh5wg5pSp4EQFsqS7q', 'Recovery Mode'],
    ['PLkFJEmWGjvn2FQj8VrTy8nLtkbEJSCpph', 'Funk\'n\'Disco'],
  ];
  
  // We are just looking for determinism
  function txtToInt(txt: string) {
    let view = new DataView(new TextEncoder().encode(txt).buffer, 0);
    return view.getBigUint64(0, true);
  }
  function mulberry32(a: number) {
    return function() {
      let t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
  }
  const randomIdxDeterministic = Math.floor(mulberry32(Number(txtToInt(csrf)))() * playlists.length);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [curList, setCurList] = useState(playlists[randomIdxDeterministic][0]);

  const [loaded, setLoaded] = useState(false);
  const [curVideoAuthor, setCurVideoAuthor] = useState('');
  const [curVideoName, setCurVideoName] = useState('');
  const [curVideoUrl, setCurVideoUrl] = useState('');

  const onPlayerStateChange: YouTubeProps['onStateChange'] = (event) => {
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
    // @ts-ignore
    setCurVideoAuthor(event.target.getVideoData().author?.replace(/( - Topic|VEVO)$/g, ''));
    // @ts-ignore
    setCurVideoName(event.target.getVideoData().title?.replace(/ \(Official [^\)]+\)$/g, ''));
    setCurVideoUrl(event.target.getVideoUrl() as unknown as string);
    event.target.setLoop(true);
  };
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    if (!isPlaying) event.target.mute();
    event.target.playVideo();
    player.current = event.target;
    setTimeout(() => {
      if (!isPlaying) {
        event.target.pauseVideo();
        event.target.unMute();
      }
      event.target.seekTo(0, true);
    }, 500);
  };
  
  const opts: YouTubeProps['opts'] = {
    height: '768',
    width: '100%',
    host: 'https://www.youtube-nocookie.com',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      list: curList,
      listType: 'playlist',
    },
  };

  return (
    <div className="flex flex-col bg-cat-surface0 rounded-one gap-half">
      <div className="relative bright-bg">
        <Box className="bg-transparent z-10 absolute rounded-one text-base pointer-events-none" title="set_playlist" intendedForUser htmlFor="media_player_select">
          <div className="z-10w-full flex justify-end">
            <ChevDown />
          </div>
        </Box>
        <select
          className="cursor-pointer bg-cat-red flex-1 absolute inset-0 p-one rounded-one appearance-none focus:outline-none font-bold" 
          id="media_player_select"
          defaultValue={curList}
          onChange={(e) => {
            setLoaded(false);
            setCurList(e.target.value);
          }}
        >
          {
            playlists.map(([id, name]) => (<option value={id} key={id}>{ name }</option>))
          }
        </select>
      </div>
      <div className="rounded-one relative overflow-hidden w-full select-none bg-cat-base">
        <div className="xl:h-full h-[256px]">
          <noscript className="flex justify-center items-center p-one rounded-one">
            <p>
              Dear <code>&lt;noscript&gt;</code> friend,<br/>
              <br/>
              Due to technical and legal reasons, I cannot provide you with my banger music tastes :&#8288;(<br/>
              But you can click this card to access the underlying YouTube playlist!<br/>
              <br/>
              - Hope you&apos;re enjoying your stay, Juliet
            </p>
          </noscript>
          <div className="h-full relative">
            <div className="h-full pointer-events-none flex justify-center flex-col blur-[20px] mx-[-50px]">
              <YouTube opts={opts} onReady={onPlayerReady} onStateChange={onPlayerStateChange} />
            </div>
            <Link
              className="!absolute cursor-pointer left-0 right-0 top-0 appearance-none focus:outline-none text-left"
              href={curVideoUrl}
              target="_blank"
              title="Click to open"
            >
              <Box className="opacity-ghost hover:opacity-full rounded-t-none" title="/sys/misc/now_playing" undertitle="Click to open">
                <b>{ curVideoAuthor }</b>
                <p>{ curVideoName }</p>
              </Box>
            </Link>
            {
              !loaded && (
                <div className="absolute inset-0 bg-cat-base p-one flex items-center justify-center">
                  Loading...
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div className="flex gap-half">
        <button className="appearance-none focus:outline-none" onClick={() => {
          player.current?.mute();
          player.current?.previousVideo();
        }}>
          <Box hasBorder className="cursor-pointer">
            <Prev />
          </Box>
        </button>
        <button className="appearance-none focus:outline-none flex-1" onClick={() => {
          if (isPlaying) {
            player.current?.pauseVideo();
          } else {
            player.current?.unMute();
            player.current?.playVideo();
          }
          setIsPlaying(!isPlaying);
        }}>
          <Box className="flex items-center bright-bg bg-cat-red cursor-pointer">
            { isPlaying ? <Pause /> : <Play /> }
          </Box>
        </button>
        <button className="appearance-none focus:outline-none" onClick={() => {
          player.current?.mute();
          player.current?.nextVideo();
        }}>
          <Box hasBorder className="cursor-pointer">
            <Next />
          </Box>
        </button>
      </div>
    </div>
  );
}