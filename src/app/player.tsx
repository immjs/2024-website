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

export function Player() {
  const player = useRef<YouTubePlayer | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [curList, setCurList] = useState('PLkFJEmWGjvn0JocWGMlNO8XLZOWn8P2B4');

  const onPlayerStateChange: YouTubeProps['onStateChange'] = (event) => {
    if (event.data === YouTube.PlayerState.PLAYING) setIsPlaying(true);
    else if (event.data === YouTube.PlayerState.PAUSED) setIsPlaying(false);
  };
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.mute();
    event.target.playVideo();
    player.current = event.target;
    setTimeout(() => {
      event.target.pauseVideo();
      event.target.unMute();
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
          className="cursor-pointer bg-cat-red flex-1 absolute inset-0 p-one rounded-one appearance-none focus:outline-none" 
          id="media_player_select"
          defaultValue={curList}
          onChange={(e) => setCurList(e.target.value)}
        >
          <option value='PLkFJEmWGjvn0JocWGMlNO8XLZOWn8P2B4'>Vapor Wing</option>
          <option value='PLkFJEmWGjvn0MOxdlNqHGy87Fh77HF_QY'>Good Kid</option>
          <option value='PLkFJEmWGjvn3MmWxoahEdJiuW9CXHAJkF'>Brekcore</option>
          <option value='PLkFJEmWGjvn1bSyswSgkPDbyda1PF0_fu'>Bad Snacks</option>
          <option value='PLkFJEmWGjvn3IyBbEVdv6jTz2yo3QE9fT'>Liana Flores</option>
          <option value='PLkFJEmWGjvn2QjOBvGUwy092XTvpT3SX1'>Summer Vibes</option>
          <option value='PLkFJEmWGjvn3i_nCh5wg5pSp4EQFsqS7q'>Recovery Mode</option>
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
          <div className="h-full pointer-events-none flex justify-center flex-col blur-[50px] mx-[-50px]">
            <YouTube opts={opts} onReady={onPlayerReady} onStateChange={onPlayerStateChange} />
          </div>
        </div>
      </div>
      <div className="flex gap-half">
        <button className="appearance-none focus:outline-none" onClick={() => {
          player.current?.previousVideo();
        }}>
          <Box hasBorder className="cursor-pointer">
            <Prev />
          </Box>
        </button>
        <button className="appearance-none focus:outline-none flex-1" onClick={() => {
          if (isPlaying) player.current?.pauseVideo();
          else player.current?.playVideo();
        }}>
          <Box className="flex items-center bright-bg bg-cat-red cursor-pointer">
            { isPlaying ? <Pause /> : <Play /> }
          </Box>
        </button>
        <button className="appearance-none focus:outline-none" onClick={() => {
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
