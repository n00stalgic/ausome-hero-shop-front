import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import FadeIn from "@/components/motion/FadeIn";

type Category = "Regional Centers" | "Schools & Therapy" | "Medical & Research" | "Community Orgs";

interface Resource {
  name: string;
  address: string;
  lat: number;
  lng: number;
  category: Category;
  blurb: string;
}

const resources: Resource[] = [
  {
    name: "The Help Group",
    address: "13130 Burbank Blvd, Sherman Oaks",
    lat: 34.17105,
    lng: -118.41923,
    category: "Schools & Therapy",
    blurb: "Nonprofit schools and therapy programs for neurodivergent kids. One of the largest organizations of its kind in the country.",
  },
  {
    name: "Frank D. Lanterman Regional Center",
    address: "3303 Wilshire Blvd, Los Angeles",
    lat: 34.0621,
    lng: -118.29449,
    category: "Regional Centers",
    blurb: "The regional center for central LA. If your child is diagnosed in this area, this is where early intervention services start.",
  },
  {
    name: "Westside Regional Center",
    address: "5901 Green Valley Cir, Culver City",
    lat: 33.98455,
    lng: -118.39247,
    category: "Regional Centers",
    blurb: "Serves the westside from Hollywood to the South Bay. Your gateway to state-funded developmental services.",
  },
  {
    name: "Harbor Regional Center",
    address: "21231 Hawthorne Blvd, Torrance",
    lat: 33.83667,
    lng: -118.35386,
    category: "Regional Centers",
    blurb: "Serves the South Bay and Torrance area, connecting families to evaluations and ongoing support.",
  },
  {
    name: "Exceptional Children's Foundation",
    address: "5350 Machado Rd, Culver City",
    lat: 33.99817,
    lng: -118.3961,
    category: "Community Orgs",
    blurb: "Job training, art programs, and community living support for neurodivergent teens and adults.",
  },
  {
    name: "Autism Society of Los Angeles",
    address: "21250 Hawthorne Blvd Ste 500, Torrance",
    lat: 33.8364,
    lng: -118.3526,
    category: "Community Orgs",
    blurb: "Runs a warmline for newly diagnosed families, plus advocacy and community events across LA County.",
  },
  {
    name: "UCLA Center for Autism Research & Treatment",
    address: "760 Westwood Plaza, Los Angeles",
    lat: 34.06658,
    lng: -118.44557,
    category: "Medical & Research",
    blurb: "Diagnostic evaluations, treatment programs, and research studies at UCLA.",
  },
];

const categories: ("All" | Category)[] = [
  "All",
  "Regional Centers",
  "Schools & Therapy",
  "Medical & Research",
  "Community Orgs",
];

const starIcon = (active: boolean) =>
  L.divIcon({
    className: "la-resource-marker",
    html: `<svg width="34" height="34" viewBox="0 0 24 24" fill="${active ? "#e8b34b" : "#8a7a55"}" stroke="#0d1230" stroke-width="1.2"><path d="M12 2l2.9 6.26L21.5 9.3l-4.75 4.87L17.8 21 12 17.77 6.2 21l1.05-6.83L2.5 9.3l6.6-1.04L12 2z"/></svg>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -16],
  });

const ResourceMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markersLayer = useRef<L.LayerGroup | null>(null);
  const [filter, setFilter] = useState<"All" | Category>("All");

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [34.02, -118.36],
      zoom: 10,
      scrollWheelZoom: true,
    });
    mapInstance.current = map;

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 19,
      }
    ).addTo(map);

    markersLayer.current = L.layerGroup().addTo(map);

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  useEffect(() => {
    const layer = markersLayer.current;
    if (!layer) return;
    layer.clearLayers();

    resources
      .filter((r) => filter === "All" || r.category === filter)
      .forEach((r) => {
        const marker = L.marker([r.lat, r.lng], { icon: starIcon(true) });
        marker.bindPopup(
          `<div class="la-popup">
             <div class="la-popup-category">${r.category}</div>
             <div class="la-popup-name">${r.name}</div>
             <div class="la-popup-address">${r.address}</div>
             <div class="la-popup-blurb">${r.blurb}</div>
             <a class="la-popup-link" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + " " + r.address)}">Get directions</a>
           </div>`,
          { className: "la-popup-wrap", closeButton: true }
        );
        marker.addTo(layer);
      });
  }, [filter]);

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-cosmic-dark">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="stars-small opacity-60" />
        <div className="stars-medium opacity-40" />
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl">
        <FadeIn className="text-center mb-8">
          <p className="text-cosmic-gold font-bold tracking-[0.3em] text-sm mb-4">
            LOS ANGELES RESOURCE MAP
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real help, pinned on a map
          </h2>
          <p className="text-cosmic-light max-w-2xl mx-auto">
            Regional centers, schools, clinics, and community orgs across LA that
            serve autistic kids and their families. Tap a star to learn more.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  filter === c
                    ? "bg-cosmic-gold text-cosmic-navy shadow-lg shadow-cosmic-gold/30"
                    : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden ring-1 ring-cosmic-gold/40 shadow-2xl shadow-black/50">
            <div ref={mapRef} className="h-[420px] md:h-[520px] w-full z-0" />
          </div>

          <p className="text-center text-white/40 text-xs mt-4">
            Know a resource we're missing? Email us and we'll add it to the map.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ResourceMap;
