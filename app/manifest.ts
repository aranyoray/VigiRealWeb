import type { MetadataRoute } from "next";
import { site } from "./site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#060b14",
    theme_color: "#060b14",
    icons: [
      { src: "/img/app-icon-256.png", sizes: "256x256", type: "image/png" },
      { src: "/img/app-icon-1024.png", sizes: "1024x1024", type: "image/png" },
    ],
  };
}
