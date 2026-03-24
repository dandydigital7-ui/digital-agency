import type { MetadataRoute } from "next";

const BASE_URL = "https://ehstudio.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/sluzby",
    "/prace",
    "/proces",
    "/cenik",
    "/cenik/kalkulacka",
    "/kontakt",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
