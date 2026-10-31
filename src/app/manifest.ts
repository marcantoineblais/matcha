import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Matcha",
    short_name: "Matcha",
    description: "Media files manager for Mochi",
    start_url: "/",
    display: "standalone",
    // The app's background, which the in-app splash (components/splash)
    // takes over from as the app opens.
    background_color: "#090b0a",
    theme_color: "#090b0a",
    orientation: "portrait-primary",
    // The mark (the cup on its rounded gradient square), and a full-bleed
    // version with the cup padded inside Android's crop for the home screen.
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
