import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, RotateCcw, Share2, Sparkles, VolumeX } from "lucide-react";
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
  { name: "Ona", epithet: "Current Rider", image: "ona-otter", alt: "An otter in a teal scarf rides a curling stream beneath a moonlit stone bridge", story: "The stream runs fast after the rain. Ona watches its turns, then slides into the current with a delighted splash. She shows her friends a calmer bend where they can float leaves beside her. What felt too wild from the bank becomes a game they can choose to join.", powers: ["Current rider", "Playful turns", "Shared adventure"] },
  { name: "Moss", epithet: "Deep Root", image: "moss-tortoise", alt: "A moss-shelled tortoise shelters a white flower from wind in a moonlit garden", story: "When the wind starts rattling every branch, Moss plants their feet beside a small flower. They hold steady and make a quiet space beneath their shell. Friends visit one at a time, and together they watch the gusts pass. Moss knows calm can be something you build and share.", powers: ["Steady ground", "Quiet shelter", "Patient strength"] },
  { name: "Nix", epithet: "Fresh Start", image: "nix-newt", alt: "An orange newt plants a seedling beside a broken flowerpot under a greenhouse lantern", story: "A flowerpot falls and breaks beside Nix. They gather the soil and the little plant, then find a new patch beneath the greenhouse window. Nix asks a friend to help hold the stem while they settle its roots. By morning, the leaves have turned toward the light again.", powers: ["Fresh start", "Careful repair", "Growing again"] },
  { name: "Cinder", epithet: "Fast Lane", image: "cinder-dragonfly", alt: "A copper and turquoise dragonfly loops over lily pads leaving a trail of golden lights", story: "Cinder spots three ways across the pond before the others see one. They zip over the lilies, circle back, and draw a glowing trail so everyone can follow at their own speed. Quick thoughts are Cinder's gift; sharing the path is their favorite part.", powers: ["Fast thoughts", "Bright trail", "Circle back"] },
  { name: "Tilly", epithet: "Rain Caller", image: "tilly-toad", alt: "A green toad in a yellow rain cape catches a raindrop beside a moonlit pond", story: "When soft rain begins, Tilly steps out in her yellow cape and holds up one hand. A drop lands on her palm. She listens to the patter on leaves, then invites anyone who likes rain to join her. Those who prefer to watch from shelter still get to share the moment.", powers: ["Rain joy", "Open invitation", "Patter listener"] },
  { name: "Birch", epithet: "Dam Builder", image: "birch-beaver", alt: "A young brown beaver in a teal tool belt sets a twig across a small garden stream", story: "Birch studies the stream before placing a single twig. Then comes another, angled just so the water can still pass. A friend asks why Birch checks every piece. Birch points to the little crossing taking shape. Careful steps can make a path for everyone.", powers: ["One stick at a time", "Flow finder", "Thoughtful builder"] },
  { name: "Vesper", epithet: "Hush Keeper", image: "vesper-nightjar", alt: "A mottled nightjar rests on an ivy branch above a lantern by a moonlit pond", story: "Vesper rests on an ivy branch as the garden settles. They hear a quiet call from the far side of the pond and answer with a soft note. Soon another friend joins the gentle exchange. Vesper knows that listening can be a way of finding each other.", powers: ["Hush keeper", "Far-off listener", "Soft reply"] },
  { name: "Juno", epithet: "Song Collector", image: "juno-jay", alt: "A blue jay holds a small songbook among white blossoms and glowing musical shapes", story: "Juno remembers the tune Wren sang at dawn and the one rain tapped on the greenhouse roof. She keeps each in her little songbook. When a friend misses a familiar sound, Juno sings it back, and the garden feels like home again.", powers: ["Song memory", "Sound keeper", "Familiar tune"] },
  { name: "Fen", epithet: "Leap Counter", image: "fen-frog", alt: "A green frog leaps across three lily pads in a lantern-lit garden pond", story: "Fen likes the little pattern across the pond: one pad, then two, then three. They hop the sequence and grin at the ripples. A friend tries it another way, and together they invent a new game with a rhythm all its own.", powers: ["Leap counter", "Pattern joy", "New rhythm"] },
  { name: "Hazel", epithet: "Dream Archivist", image: "hazel-dormouse", alt: "A brown dormouse in a cozy tree hollow holds a flower-tied story scroll under moonlight", story: "Hazel keeps the garden's stories in a small drawer beneath an old tree. One tells of the first flower after winter; another remembers a friend's brave hello. At night, Hazel picks a story to share, then tucks it away so it is still there when someone needs it tomorrow.", powers: ["Story keeper", "Dream drawer", "Remembered joy"] },
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLElement>(null);
  const drag = useRef<{ x: number; scroll: number; active: boolean } | null>(null);
  const suppressClick = useRef(false);
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

  function chooseHero(index: number, open = false) {
    setSelected(index);
    setRevealed(open);
    setFlipped(false);
    setTilt({ x: 0, y: 0 });
    setShared("");
    setShowQr(false);
    if (open) requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: prefersReduced.current ? "instant" : "smooth", block: "start" }));
  }

  function moveCarousel(direction: -1 | 1) {
    carouselRef.current?.scrollBy({ left: direction * 245 * 3, behavior: prefersReduced.current ? "instant" : "smooth" });
  }

  function carouselKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const cards = carouselRef.current?.querySelectorAll<HTMLButtonElement>(".hc-carousel-card");
    if (!cards?.length) return;
    const focused = document.activeElement instanceof HTMLButtonElement ? Array.from(cards).indexOf(document.activeElement) : -1;
    const next = Math.max(0, Math.min(cards.length - 1, (focused < 0 ? selected : focused) + direction));
    cards[next].focus({ preventScroll: true });
    cards[next].scrollIntoView({ behavior: prefersReduced.current ? "instant" : "smooth", block: "nearest", inline: "center" });
  }

  useEffect(() => {
    const shelf = carouselRef.current;
    if (!shelf) return;
    const onWheel = (event: globalThis.WheelEvent) => {
      if (shelf.scrollWidth <= shelf.clientWidth || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
      // At either end, keep normal page scrolling. Within the shelf, let a two-finger
      // vertical gesture advance cards without moving the entire page.
      if ((event.deltaY < 0 && shelf.scrollLeft <= 0) || (event.deltaY > 0 && shelf.scrollLeft >= shelf.scrollWidth - shelf.clientWidth - 1)) return;
      event.preventDefault();
      shelf.scrollLeft += event.deltaY * (event.deltaMode === 1 ? 16 : 1);
    };
    shelf.addEventListener("wheel", onWheel, { passive: false });
    return () => shelf.removeEventListener("wheel", onWheel);
  }, []);

  function carouselPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    drag.current = { x: event.clientX, scroll: event.currentTarget.scrollLeft, active: false };
  }
  function carouselPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current || event.pointerType !== "mouse") return;
    const distance = event.clientX - drag.current.x;
    if (!drag.current.active && Math.abs(distance) > 6) {
      drag.current.active = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (drag.current.active) event.currentTarget.scrollLeft = drag.current.scroll - distance;
  }
  function carouselPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    if (drag.current.active) {
      suppressClick.current = true;
      if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    }
    drag.current = null;
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
        <Link to="/" className="hc-home" aria-label="Ausome Heroes home"><ArrowLeft size={18} /> <img src="/lovable-uploads/ausome-painted-wordmark.png" alt="" className="hc-parent-logo" /></Link>
        <span className="hc-preview">THE QUIET GARDEN <span aria-hidden="true">✦</span> FIRST EDITION</span>
      </header>
      <section className="hc-discovery" aria-label="Browse the Quiet Garden hero cards">
        <div className="hc-discovery-heading">
          <div>
            <img src="/heroes/pocket-heroes-wordmark.svg" className="hc-discovery-logo" alt="Pocket Heroes" />
            <h1>Every way of seeing <em>is a superpower.</em></h1>
            <p>Meet the Quiet Garden. Pick a card to open its story.</p>
          </div>
          <div className="hc-carousel-controls">
            <span>{String(selected + 1).padStart(2, "0")} / {heroes.length}</span>
            <button type="button" aria-label="Previous cards" onClick={() => moveCarousel(-1)}><ChevronLeft size={22} aria-hidden="true" /></button>
            <button type="button" aria-label="Next cards" onClick={() => moveCarousel(1)}><ChevronRight size={22} aria-hidden="true" /></button>
          </div>
        </div>
        <div className="hc-carousel" ref={carouselRef} tabIndex={0} role="region" aria-label="All Pocket Heroes; use left and right arrow keys to browse" onKeyDown={carouselKeyDown} onPointerDown={carouselPointerDown} onPointerMove={carouselPointerMove} onPointerUp={carouselPointerUp} onPointerCancel={() => { drag.current = null; }} onClickCapture={(event) => { if (suppressClick.current) { event.stopPropagation(); event.preventDefault(); suppressClick.current = false; } }}>
          {heroes.map((entry, index) => <button type="button" key={entry.name} className={`hc-carousel-card${selected === index ? " is-selected" : ""}`} onClick={() => chooseHero(index, true)} aria-label={`Open ${entry.name}'s card, number ${String(index + 1).padStart(3, "0")}`} aria-pressed={selected === index}>
            <img src={`/heroes/${entry.image}.webp`} alt="" loading={index < 5 ? "eager" : "lazy"} />
            <span className="hc-carousel-shade" aria-hidden="true" />
            <span className="hc-carousel-number">NO. {String(index + 1).padStart(3, "0")}</span>
            <span className="hc-carousel-label"><strong>{entry.name}</strong><small>{entry.epithet}</small></span>
          </button>)}
        </div>
        <p className="hc-carousel-hint">Swipe, drag, or use the arrow keys to see all {heroes.length} heroes. Choose one to read the story.</p>
      </section>
      <main className="hc-layout">
        <div className="hc-intro">
          <span className="hc-eyebrow"><Sparkles size={14} aria-hidden="true" /> THE QUIET GARDEN · FIRST EDITION</span>
          <h2>Meet {hero.name}.</h2>
          <p>{hero.epithet}. Open the pack, flip the card, and read the story. There is no rush.</p>
          <div className="hc-rule" aria-hidden="true" />
          <div className="hc-instructions"><span className="hc-instruction-number">01</span><span>Pick a hero</span><ArrowRight size={16} aria-hidden="true"/><span className="hc-instruction-number">02</span><span>Open and flip</span></div>
          <p className="hc-note"><VolumeX size={16} aria-hidden="true" /> No sound or flashing. Tilt is always your choice.</p>
          <div className="hc-story-preview" aria-live="polite">
            <span className="hc-story-label">BEHIND THE CARD · NO. {number}</span>
            <p>{hero.story}</p>
            <span className="hc-story-label">THEIR POWERS</span>
            <div className="hc-story-powers">{hero.powers.map((power) => <span key={power}>✦ {power}</span>)}</div>
          </div>
        </div>

        <section ref={detailRef} className="hc-stage" aria-label={`${hero.name} digital hero card`}>
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
