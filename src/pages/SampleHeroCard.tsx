import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, RotateCcw, Share2, Sparkles, VolumeX } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { PocketHeroQr } from "@/components/PocketHeroQr";
import "./SampleHeroCard.css";

type Hero = { name: string; epithet: string; image: string; alt: string; story: string; powers: string[] };
const heroes: Hero[] = [
  { name: "Mariposa", epithet: "Keeper of the Quiet Garden", image: "mariposa", alt: "A teal moth hero with a lantern in a moonlit garden", story: "Mariposa knows that every explorer has their own pace. When the garden feels too bright or too loud, she lights a softer path. She notices the tiny things others miss: a new leaf, a shy visitor, a friend who needs a little space. Her greatest power is making room for everyone to bloom.", powers: ["Gentle glow", "Pattern finder", "Space maker"] },
  { name: "Echo", epithet: "Sound Sorter", image: "echo-bat", alt: "A curious indigo bat among flowers and gentle golden sound waves", story: "Echo hears the whole garden at once. Wings, water, wind: so many sounds arrive together. She closes her eyes, takes her time, and finds the one small sound that matters: a friend calling softly from across the path. Her way of listening helps everyone find one another.", powers: ["Sound sorter", "Deep listener", "Quiet finder"] },
  { name: "Wren", epithet: "First Light", image: "wren-dawn-bird", alt: "A rust-and-blue bird greeting the sunrise from a flowering branch", story: "Every morning, Wren watches the sky change in the same familiar order. First blue, then peach, then gold. She shares her little sunrise song when she is ready, and the garden knows a new day has begun. Her steady rhythm gives friends a place to start.", powers: ["First light", "Morning rhythm", "Steady song"] },
  { name: "Spindle", epithet: "Web of Order", image: "spindle-spider", alt: "A gentle lavender spider weaving a starry geometric web", story: "Where others see tangled threads, Spindle sees a pattern waiting to be found. She traces one line, then another, until her web becomes a map of the stars. Friends come to her when things feel jumbled, because she can help them see how the pieces fit.", powers: ["Web of order", "Pattern maker", "Patient eyes"] },
  { name: "Fenn", epithet: "Why Collector", image: "fenn-fox", alt: "A curious copper fox kit exploring glowing fireflies and a garden notebook", story: "Fenn has questions about everything. Why do fireflies glow? Where do seeds sleep? He keeps each answer in his little explorer's notebook, and asks another. His curiosity opens doors in the garden that nobody knew were there.", powers: ["Why collector", "Wonder keeper", "Question finder"] },
  { name: "Sage", epithet: "Own Pace", image: "sage-snail", alt: "A smiling teal snail with an intricate glowing shell on a mossy path", story: "Sage carries a cozy home wherever they go. They stop to notice dew on the ferns and the shape of each pebble. The path never tells Sage to hurry. They always arrive with a story about something beautiful everyone else walked past.", powers: ["Own pace", "Little details", "Home anywhere"] },
  { name: "Ash", epithet: "Team Lifter", image: "ash-ant", alt: "A terracotta ant and friends carrying a glowing seed through the garden", story: "Ash found a seed too big to carry alone. So they asked two friends to walk beside them. One steadied it, one led the way, and Ash kept everyone together. By moonrise, they had planted something wonderful. Ash knows that asking for help is a power too.", powers: ["Team lifter", "Friend finder", "Growing together"] },
  { name: "Bramble", epithet: "Guard Down", image: "bramble-hedgehog", alt: "A small hedgehog steps from a leafy shelter to greet a glowing snail beside a moonlit pond", story: "Bramble has a safe little place beneath the leaves. When the garden grows busy, they curl up there and listen until they feel ready. One evening, a snail waits quietly nearby. Bramble peeks out, then steps into the lantern light. A hello feels easier when nobody makes it a race.", powers: ["Safe shelter", "Ready hello", "Gentle courage"] },
  { name: "Lumen", epithet: "Signal Finder", image: "lumen-firefly", alt: "A golden firefly on a flowering branch sends gentle light signals to a friend under the moon", story: "Lumen does not always use words to say hello. From the jasmine branch, they blink once, pause, then blink twice. Across the pond, a friend flashes the pattern back. Soon the garden has a new way to keep in touch, one small light at a time.", powers: ["Light language", "Own rhythm", "Connection spark"] },
  { name: "Pip", epithet: "Small Noticer", image: "pip-mouse", alt: "A brown mouse with a teal notebook points to a tiny sprout beneath a dew-covered leaf", story: "The garden crew almost walks past a new green sprout. Pip stops and points beneath the big dewy leaf. The others kneel down to see what Pip found, then move their tools so the little plant has room to grow. Pip knows that small things can change the whole path.", powers: ["Tiny details", "Careful eyes", "Growing room"] },
];

export default function SampleHeroCard() {
  usePageTitle("The Quiet Garden | Pocket Heroes");
  const [selected, setSelected] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [motion, setMotion] = useState(false);
  const [systemReduced, setSystemReduced] = useState(false);
  const [permission, setPermission] = useState<"unknown" | "denied" | "granted">("unknown");
  const [shared, setShared] = useState("");
  const [showQr, setShowQr] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const prefersReduced = useRef(false);
  const hero = heroes[selected];
  const number = String(selected + 1).padStart(3, "0");
  const shareUrl = () => `${window.location.origin}/heroes/`;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      prefersReduced.current = query.matches;
      setSystemReduced(query.matches);
      if (query.matches) { setMotion(false); setTilt({ x: 0, y: 0 }); }
    };
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!motion || !revealed || prefersReduced.current) return;
    const onOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma === null || event.beta === null) return;
      setTilt({ x: Math.max(-8, Math.min(8, event.beta / -5)), y: Math.max(-8, Math.min(8, event.gamma / 5)) });
    };
    window.addEventListener("deviceorientation", onOrientation, { passive: true });
    return () => window.removeEventListener("deviceorientation", onOrientation);
  }, [motion, revealed]);

  async function enableMotion() {
    if (prefersReduced.current || typeof DeviceOrientationEvent === "undefined") { setPermission("denied"); return; }
    try {
      const orientation = DeviceOrientationEvent as typeof DeviceOrientationEvent & { requestPermission?: () => Promise<string> };
      if (typeof orientation.requestPermission === "function" && await orientation.requestPermission() !== "granted") {
        setPermission("denied"); return;
      }
      setPermission("granted");
      setMotion(true);
    } catch { setPermission("denied"); }
  }

  function chooseHero(index: number) {
    setSelected(index);
    setRevealed(false);
    setFlipped(false);
    setTilt({ x: 0, y: 0 });
    setShared("");
    setShowQr(false);
  }

  async function share() {
    const url = shareUrl();
    try {
      if (navigator.share) {
        await navigator.share({ title: "The Quiet Garden | Pocket Heroes", text: `Meet ${hero.name}, ${hero.epithet}. Explore the first edition of Pocket Heroes.`, url });
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        setShared("Collection link copied");
      } else {
        setShared("Select and copy the address in your browser");
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setShared("Share didn't open. Copy the address from your browser.");
    }
  }

  const cardStyle = { "--tilt-x": `${tilt.x}deg`, "--tilt-y": `${tilt.y}deg`, "--shine-x": `${50 + tilt.y * 3}%`, "--shine-y": `${50 - tilt.x * 3}%` } as CSSProperties;
  return (
    <div className="hc-page">
      <header className="hc-header">
        <Link to="/" className="hc-home" aria-label="Ausome Heroes home"><ArrowLeft size={18} /> <span>Ausome Heroes</span></Link>
        <span className="hc-preview">THE QUIET GARDEN <span aria-hidden="true">✦</span> FIRST EDITION</span>
      </header>
      <main className="hc-layout">
        <div className="hc-intro">
          <img src="/heroes/pocket-heroes-wordmark.svg" className="hc-logo-intro" alt="Pocket Heroes" />
          <span className="hc-eyebrow"><Sparkles size={14} aria-hidden="true" /> THE QUIET GARDEN · FIRST EDITION</span>
          <h1>Every way of seeing<br /><em>is a superpower.</em></h1>
          <p>Meet the first edition of Pocket Heroes. {heroes.length} garden friends, each with a different way of making the world brighter. Pick one to open their card.</p>
          <div className="hc-rule" aria-hidden="true" />
          <div className="hc-instructions"><span className="hc-instruction-number">01</span><span>Pick a hero</span><ArrowRight size={16} aria-hidden="true"/><span className="hc-instruction-number">02</span><span>Open and flip</span></div>
          <p className="hc-note"><VolumeX size={16} aria-hidden="true" /> No sound or flashing. Tilt is always your choice.</p>
          <p className="hc-roster-hint">Choose a hero <span>· Swipe to see all {heroes.length} →</span></p>
          <div className="hc-roster" aria-label="Choose a Pocket Hero">
            {heroes.map((entry, index) => <button key={entry.name} className={`hc-roster-item${selected === index ? " is-selected" : ""}`} onClick={() => chooseHero(index)} aria-pressed={selected === index} type="button">
              <img src={`/heroes/${entry.image}.webp`} alt="" loading={index < 3 ? "eager" : "lazy"} />
              <span><strong>{entry.name}</strong><small>{entry.epithet}</small></span>
            </button>)}
          </div>
        </div>

        <section className="hc-stage" aria-label={`${hero.name} digital hero card`}>
          {!revealed ? (
            <button key={hero.name} className="hc-pack" onClick={() => setRevealed(true)} aria-label={`Open ${hero.name}'s hero card pack`}>
              <span className="hc-pack-star" aria-hidden="true">✦</span>
              <img src="/heroes/pocket-heroes-wordmark.svg" className="hc-logo-pack" alt="Pocket Heroes" />
              <span className="hc-pack-line" aria-hidden="true" />
              <span className="hc-pack-title">{hero.name} is waiting.</span>
              <span className="hc-pack-open">TAP TO OPEN <ArrowRight size={17} aria-hidden="true" /></span>
              <span className="hc-pack-serial">QUIET GARDEN · NO. {number}</span>
            </button>
          ) : (
            <div className="hc-card-shell">
              <button type="button" className={`hc-card${flipped ? " is-flipped" : ""}${motion ? " has-motion" : ""}`} style={cardStyle} onClick={() => setFlipped((v) => !v)} aria-label={`${hero.name} hero card, ${flipped ? "story side" : "portrait side"}. Tap to ${flipped ? "see portrait" : "read story"}`} aria-pressed={flipped}>
                <span className="hc-card-rotator">
                  <span className="hc-card-face hc-front">
                    <span className="hc-card-top"><img className="hc-card-wordmark" src="/heroes/pocket-heroes-wordmark.svg" alt="Pocket Heroes" /><span>NO. {number}</span></span>
                    <img src={`/heroes/${hero.image}.webp`} alt={hero.alt} className="hc-portrait" />
                    <span className="hc-card-gradient" aria-hidden="true" />
                    <span className="hc-foil" aria-hidden="true" />
                    <span className="hc-card-bottom"><span className="hc-card-type">THE QUIET GARDEN COLLECTION</span><strong>{hero.name.toUpperCase()}</strong><span className="hc-card-subtitle">{hero.epithet}</span><span className="hc-card-stats"><span>✦ {hero.powers[0].toUpperCase()}</span><span>✦ {hero.powers[1].toUpperCase()}</span></span></span>
                  </span>
                  <span className="hc-card-face hc-back">
                    <span className="hc-back-top"><img className="hc-card-wordmark" src="/heroes/pocket-heroes-wordmark.svg" alt="Pocket Heroes" /><span>NO. {number}</span></span>
                    <span className="hc-back-emblem" aria-hidden="true">✦</span>
                    <span className="hc-back-kicker">THE STORY BEHIND THE CARD</span>
                    <strong>{hero.name.toUpperCase()}</strong>
                    <span className="hc-back-story">{hero.story}</span>
                    <span className="hc-powers-title">THEIR POWERS</span>
                    <span className="hc-powers">{hero.powers.map((power) => <span key={power}>{power}</span>)}</span>
                    <span className="hc-back-foot">EVERY HERO BELONGS · FIRST EDITION</span>
                  </span>
                </span>
              </button>
              <p className="hc-flip-hint"><RotateCcw size={15} aria-hidden="true" /> Tap card to {flipped ? "see the portrait" : "read the story"}</p>
            </div>
          )}
          <div className="hc-controls">
            <button type="button" className="hc-share" onClick={share}><Share2 size={16} aria-hidden="true" /> Share collection</button>
            <button type="button" className="hc-motion" aria-expanded={showQr} onClick={() => setShowQr((value) => !value)}>{showQr ? "Hide QR" : "Show QR"}</button>
            {revealed && (motion ? <button type="button" className="hc-motion" onClick={() => { setMotion(false); setTilt({ x: 0, y: 0 }); }}>Turn off tilt</button> : <button type="button" className="hc-motion" onClick={enableMotion} disabled={systemReduced} title={systemReduced ? "Your device prefers reduced motion" : undefined}>{systemReduced ? "Tilt off (device setting)" : "Enable gentle tilt"}</button>)}
          </div>
          {showQr && <PocketHeroQr url={shareUrl()} heroName={hero.name} onClose={() => setShowQr(false)} />}
          {permission === "denied" && <p role="status" className="hc-status">Tilt isn't available here. Every card still works with tap.</p>}
          {shared && <p role="status" className="hc-status">{shared}</p>}
          <p className="hc-footnote">These heroes are fictional. No real child's name, photo, or story is used.</p>
        </section>
      </main>
    </div>
  );
}
