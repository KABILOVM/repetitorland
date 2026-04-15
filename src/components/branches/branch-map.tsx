"use client";

import { useEffect, useRef } from "react";
import type { Branch } from "@/types";
import { localized } from "@/types";

interface BranchMapProps {
  branches: Branch[];
  locale: string;
}

export function BranchMap({ branches, locale }: BranchMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Dynamic import of leaflet (avoids SSR issues)
    import("leaflet").then((L) => {
      // Fix default icon paths for Leaflet in Next.js
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const center: [number, number] =
        branches.length > 0
          ? [branches[0].latitude, branches[0].longitude]
          : [38.5598, 68.787]; // Default: Dushanbe

      const map = L.map(mapRef.current!, {
        scrollWheelZoom: false,
      }).setView(center, 7);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      branches.forEach((branch) => {
        if (branch.latitude && branch.longitude) {
          L.marker([branch.latitude, branch.longitude])
            .addTo(map)
            .bindPopup(
              `<strong>${localized(branch, "city", locale)}</strong><br/>
               ${localized(branch, "address", locale)}<br/>
               <a href="tel:${branch.phone.replace(/\s/g, "")}">${branch.phone}</a>`
            );
        }
      });

      // Fit bounds if multiple branches
      if (branches.length > 1) {
        const group = L.featureGroup(
          branches
            .filter((b) => b.latitude && b.longitude)
            .map((b) => L.marker([b.latitude, b.longitude]))
        );
        map.fitBounds(group.getBounds().pad(0.3));
      }

      mapInstanceRef.current = map;
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [branches, locale]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <div ref={mapRef} className="h-[400px] w-full" />
    </>
  );
}
