"use client";

import { useEffect, useRef } from "react";

import { useMotionOff } from "@/hooks/use-motion-off";

const BASE = "/media/stone-arch";

/**
 * The page backdrop: the GetLayers "Stone Arch" loop, re-encoded for the
 * layout (1920 wide for desktop, 960 for phones, WebM first, MP4 fallback).
 * Muted, looping, playsinline; the poster shows until the first frame decodes.
 * Reduced motion and the robot form keep the poster still (no playback).
 */
export const BackgroundVideo = () => {
  const ref = useRef<HTMLVideoElement>(null);
  const motionOff = useMotionOff();

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // `muted` is not reflected as an attribute in SSR — set it before play().
    video.muted = true;
    video.defaultMuted = true;
    if (motionOff) {
      video.pause();
      return;
    }
    video.play().catch(() => {
      // Autoplay refused (e.g. low-power mode): the poster stays, which is fine.
    });
  }, [motionOff]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <video
        ref={ref}
        className="h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="auto"
        poster={`${BASE}/stone-arch-poster-1920.webp`}
        disablePictureInPicture
        tabIndex={-1}
      >
        <source media="(max-width: 900px)" src={`${BASE}/stone-arch-960.webm`} type="video/webm" />
        <source media="(max-width: 900px)" src={`${BASE}/stone-arch-960.mp4`} type="video/mp4" />
        <source src={`${BASE}/stone-arch-1920.webm`} type="video/webm" />
        <source src={`${BASE}/stone-arch-1920.mp4`} type="video/mp4" />
      </video>
      <div className="video-scrim absolute inset-0" />
    </div>
  );
};
