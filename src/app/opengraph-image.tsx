import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          fontSize: 48,
          fontWeight: "bold",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            backgroundColor: "#e63030",
          }}
        />

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 60px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              letterSpacing: 4,
              color: "#ffffff",
              marginBottom: 16,
            }}
          >
            ACADÉMIE
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              letterSpacing: 4,
              color: "#e63030",
              marginBottom: 32,
            }}
          >
            EUROPÉENNE
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 400,
              color: "#9ca3af",
              letterSpacing: 6,
            }}
          >
            DES SPORTS
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            fontSize: 28,
            color: "#6b7280",
            letterSpacing: 2,
          }}
        >
          {siteConfig.tagline}
        </div>

        {/* Location */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#4b5563",
          }}
        >
          📍 Strasbourg, France
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
