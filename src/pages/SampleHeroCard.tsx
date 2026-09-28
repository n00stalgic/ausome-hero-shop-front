import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, RotateCcw, Share2, Sparkles, VolumeX } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import "./SampleHeroCard.css";

const hero = {
  name: "Mariposa",
  epithet: "Keeper of the Quiet Garden",
  story: "Mariposa knows that every explorer has their own pace. When the garden feels too bright or too loud, she lights a softer path. She notices the tiny things others miss: a new leaf, a shy visitor, a friend who needs a little space. Her greatest power is making room for everyone to bloom.",
  powers: ["Gentle glow", "Pattern finder", "Space maker"],
};

const shareUrl = () => `${window.location.origin}/heroes/sample/`;

export default function SampleHeroCard() {
  usePageTitle("Mariposa | Pocket Heroes");
  const [revealed, setRevealed] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [motion, setMotion] = useState(false);
  const [systemReduced, setSystemReduced] = useState(false);
  const [permission, setPermission] = useState<"unknown" | "denied" | "granted">("unknown");
  const [shared, setShared] = useState("");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const prefersReduced = useRef(false);
  const cardRef = useRef<HTMLButtonElement>(null);

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
      // iOS requires this call inside a user gesture.
      const orientation = DeviceOrientationEvent as typeof DeviceOrientationEvent & { requestPermission?: () => Promise<string> };
      if (typeof orientation.requestPermission === "function") {
        const result = await orientation.requestPermission();
        if (result !== "granted") { setPermission("denied"); return; }
      }
      setPermission("granted");
      setMotion(true);
    } catch { setPermission("denied"); }
  }

  async function share() {
    const url = shareUrl();
    try {
      if (navigator.share) {
        await navigator.share({ title: "Meet Mariposa | Pocket Heroes", text: "Meet Mariposa, Keeper of the Quiet Garden.", url });
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        setShared("Link copied");
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
        <span className="hc-preview">EXPERIENCE PROTOTYPE <span aria-hidden="true">✦</span> FICTIONAL HERO</span>
      </header>
      <main className="hc-layout">
        <div className="hc-intro">
          <span className="hc-eyebrow"><Sparkles size={14} aria-hidden="true" /> POCKET HEROES · No. 001</span>
          <h1>Every way of seeing<br /><em>is a superpower.</em></h1>
          <p>Meet Mariposa. One little light, a whole universe of possibility. This is a made-up hero, a first look at Pocket Heroes in your hand.</p>
          <div className="hc-rule" aria-hidden="true" />
          <div className="hc-instructions"><span className="hc-instruction-number">01</span><span>Open your pack</span><ArrowRight size={16} aria-hidden="true"/><span className="hc-instruction-number">02</span><span>Tap to flip</span></div>
          <p className="hc-note"><VolumeX size={16} aria-hidden="true" /> No sound, flashing or motion until you choose it.</p>
        </div>

        <section className="hc-stage" aria-label="Mariposa digital hero card">
          {!revealed ? (
            <button className="hc-pack" onClick={() => setRevealed(true)} aria-label="Open Mariposa's hero card pack">
              <span className="hc-pack-star" aria-hidden="true">✦</span>
              <span className="hc-pack-brand">POCKET<br/>HEROES</span>
              <span className="hc-pack-line" aria-hidden="true" />
              <span className="hc-pack-title">A hero is waiting.</span>
              <span className="hc-pack-open">TAP TO OPEN <ArrowRight size={17} aria-hidden="true" /></span>
              <span className="hc-pack-serial">POCKET HEROES · FIRST EDITION</span>
            </button>
          ) : (
            <div className="hc-card-shell">
              <button ref={cardRef} type="button" className={`hc-card${flipped ? " is-flipped" : ""}${motion ? " has-motion" : ""}`} style={cardStyle} onClick={() => setFlipped((v) => !v)} aria-label={`Mariposa hero card, ${flipped ? "story side" : "portrait side"}. Tap to ${flipped ? "see portrait" : "read story"}`} aria-pressed={flipped}>
                <span className="hc-card-rotator">
                  <span className="hc-card-face hc-front">
                    <span className="hc-card-top"><span>POCKET <b>✦</b> HEROES</span><span>NO. 001</span></span>
                    <img src="/heroes/mariposa.webp" alt="Mariposa, an illustrated teal moth hero with a lantern in a moonlit garden" className="hc-portrait" />
                    <span className="hc-card-gradient" aria-hidden="true" />
                    <span className="hc-foil" aria-hidden="true" />
                    <span className="hc-card-bottom"><span className="hc-card-type">THE QUIET GARDEN COLLECTION</span><strong>MARIPOSA</strong><span className="hc-card-subtitle">Keeper of the Quiet Garden</span><span className="hc-card-stats"><span>✦ GENTLE GLOW</span><span>✦ PATTERN FINDER</span></span></span>
                  </span>
                  <span className="hc-card-face hc-back">
                    <span className="hc-back-top"><span>POCKET ✦ HEROES</span><span>NO. 001</span></span>
                    <span className="hc-back-emblem" aria-hidden="true">✦</span>
                    <span className="hc-back-kicker">THE STORY BEHIND THE CARD</span>
                    <strong>MARIPOSA</strong>
                    <span className="hc-back-story">{hero.story}</span>
                    <span className="hc-powers-title">HER POWERS</span>
                    <span className="hc-powers">{hero.powers.map((power) => <span key={power}>{power}</span>)}</span>
                    <span className="hc-back-foot">EVERY HERO BELONGS · FIRST EDITION</span>
                  </span>
                </span>
              </button>
              <p className="hc-flip-hint"><RotateCcw size={15} aria-hidden="true" /> Tap card to {flipped ? "see the portrait" : "read the story"}</p>
            </div>
          )}
          <div className="hc-controls">
            <button type="button" className="hc-share" onClick={share}><Share2 size={16} aria-hidden="true" /> Share card</button>
            {revealed && (motion ? <button type="button" className="hc-motion" onClick={() => { setMotion(false); setTilt({ x: 0, y: 0 }); }}>Turn off tilt</button> : <button type="button" className="hc-motion" onClick={enableMotion} disabled={systemReduced} title={systemReduced ? "Your device prefers reduced motion" : undefined}>{systemReduced ? "Tilt off (device setting)" : "Enable gentle tilt"}</button>)}
          </div>
          {permission === "denied" && <p role="status" className="hc-status">Tilt permission wasn't granted. The card still works with tap.</p>}
          {shared && <p role="status" className="hc-status">{shared}</p>}
          <p className="hc-footnote">Sample concept only. No child's name, photo, or story is used here.</p>
        </section>
      </main>
    </div>
  );
}
