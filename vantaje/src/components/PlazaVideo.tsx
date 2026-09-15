"use client";

import { useEffect, useRef, useState } from "react";

export default function PlazaVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative block overflow-hidden leading-none">
      <video
        ref={videoRef}
        src={shouldLoad ? "/images/plaza-video.mp4" : undefined}
        poster="/images/plaza-poster.png"
        autoPlay
        muted
        loop
        controls={false}
        playsInline
        preload="none"
        width={1920}
        height={1080}
        className="block aspect-video w-full object-cover"
      />
    </section>
  );
}
