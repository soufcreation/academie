"use client";

import { useEffect, useRef } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";

interface VideoJSPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  aspectRatio?: "16:9" | "9:16" | "4:3" | "1:1";
}

export default function VideoJSPlayer({
  src,
  poster,
  className = "",
  aspectRatio = "16:9",
}: VideoJSPlayerProps) {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    const videoElement = document.createElement("video-js");
    videoElement.classList.add("vjs-big-play-centered");
    videoElement.setAttribute("playsinline", "true");
    videoElement.setAttribute("webkit-playsinline", "true");

    if (videoRef.current) {
      videoRef.current.appendChild(videoElement);

      // Détection mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      playerRef.current = videojs(videoElement, {
        controls: true,
        autoplay: false,
        preload: "auto",
        fluid: true,
        aspectRatio: aspectRatio,
        playsinline: true,
        muted: isMobile, // Muet sur mobile pour autoplay
        playbackRates: [0.5, 1, 1.5, 2],
        poster: poster,
        sources: [
          {
            src: src,
            type: "video/mp4",
          },
        ],
        // Options mobile
        ...(isMobile && {
          playbackRate: 1,
          bigPlayButton: true,
        }),
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src, poster, aspectRatio]);

  return (
    <div
      ref={videoRef}
      data-vjs-player
      className={`rounded-lg overflow-hidden ${className}`}
    />
  );
}