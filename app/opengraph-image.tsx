import { ImageResponse } from "next/og";
import { site } from "./site";

export const alt = `${site.name} — environmental-health risk for your area`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(160deg, #0b1220 0%, #060b14 70%)",
          color: "#e6edf7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2">
            <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
          </svg>
          <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>{site.name}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 960 }}>
            One risk score for the water you swim in and the county you live in.
          </div>
          <div style={{ fontSize: 28, color: "#94a3b8", maxWidth: 900 }}>
            CDC, NWS, USGS and state open data, fused on your phone. Nothing leaves it.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {[
            ["Low", "#22c55e"], ["Moderate", "#f59e0b"], ["High", "#fb923c"],
            ["Critical", "#ef4444"], ["Unknown", "#94a3b8"],
          ].map(([label, color]) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 22, color: "#94a3b8" }}>
              <div style={{ width: 16, height: 16, borderRadius: 8, background: color }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
