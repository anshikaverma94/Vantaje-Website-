export default function PlazaVideo() {
  return (
    <section className="relative block overflow-hidden leading-none">
      <video
        src="/images/plaza-video.mp4"
        poster="/images/plaza-poster.png"
        autoPlay
        muted
        loop
        controls={false}
        playsInline
        preload="auto"
        className="block aspect-video w-full object-cover"
      />
    </section>
  );
}
