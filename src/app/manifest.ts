import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Matcha",
    short_name: "Matcha",
    description: "Media files manager for Mochi",
    start_url: "/",
    display: "standalone",
    background_color: "#090b0a",
    theme_color: "#090b0a",
    orientation: "portrait-primary",
    // The cup alone on a transparent background, as Jelly's icon was:
    // Android plates it on the home screen and centres it on
    // background_color while the app opens.
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
