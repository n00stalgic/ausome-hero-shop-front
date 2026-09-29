import { useEffect, useState } from "react";
import QRCode from "qrcode";

type PocketHeroQrProps = { url: string; heroName: string; onClose: () => void };

export function PocketHeroQr({ url, heroName, onClose }: PocketHeroQrProps) {
  const [image, setImage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    setImage(""); setError(false);
    QRCode.toDataURL(url, { errorCorrectionLevel: "M", margin: 4, width: 280, color: { dark: "#07142C", light: "#FFFFFF" } })
      .then((data) => { if (active) setImage(data); })
      .catch(() => { if (active) setError(true); });
    return () => { active = false; };
  }, [url]);

  return <div className="hc-qr-panel" role="region" aria-label="Scan Pocket Heroes link">
    <button type="button" className="hc-qr-close" onClick={onClose} aria-label="Close QR code">Close</button>
    <strong>Scan to open Pocket Heroes</strong>
    <p>Show this to a friend to open the collection. Start with {heroName}.</p>
    {image ? <img src={image} width="220" height="220" alt={`QR code linking to ${url}`} /> : error ? <p>Couldn't make a QR code. Share the link instead.</p> : <p>Making QR code...</p>}
    <a href={url}>{url}</a>
  </div>;
}
