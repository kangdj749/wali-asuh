import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://waliasuh.grahadhuafa.org",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://waliasuh.grahadhuafa.org/registrasi",
      lastModified: new Date(),
      priority: 0.9,
    },
  ]
}
