import { ImageResponse } from "next/og";

export const alt =
  "Lily Home Interiors — Timeless Luxury Interior Design in Nairobi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social-share card, generated at build time — no external asset needed.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#001229",
          color: "#ffffff",
          fontFamily: "serif",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#a98851",
            marginBottom: 32,
          }}
        >
          Lily Home Interiors
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Designing homes where comfort thrives and love resides
        </div>
        <div
          style={{
            marginTop: 40,
            width: 120,
            height: 4,
            backgroundColor: "#a98851",
          }}
        />
        <div
          style={{
            marginTop: 40,
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
            fontFamily: "sans-serif",
          }}
        >
          Luxury Interior Design · Nairobi, Kenya
        </div>
      </div>
    ),
    { ...size }
  );
}
