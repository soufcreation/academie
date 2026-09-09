import type { MetadataRoute } from "next";
import { coaches } from "@/lib/data";

// Base absolue du site (doit rester alignée avec metadataBase et robots.txt)
const BASE_URL = "https://academie-europeenne.eu";

export const dynamic = "force-static";

type Route = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

// Les chemins portent un slash final pour correspondre à `trailingSlash: true`
const staticRoutes: Route[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/planning/", changeFrequency: "weekly", priority: 0.8 },
  { path: "/equipe/", changeFrequency: "weekly", priority: 0.8 },
  { path: "/equipements/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/partenaire/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/avis/", changeFrequency: "weekly", priority: 0.7 },
  { path: "/reglement-interieur/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/mentions-legales/", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const coachRoutes: Route[] = coaches.map((coach) => ({
    path: `/equipe/${coach.slug}/`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...coachRoutes].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
