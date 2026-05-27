import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://ecritureweb.ch/",
    title: "Ecriture web",
    description:
      "Conseil et services de rédaction web, UX et SEO pour entreprises et institutions. Par Romain Pittet, consultant indépendant en communication basé à Lausanne.",
    author: "Romain Pittet",
    profile: "https://ecritureweb.ch/",
    ogImage: "default-og.jpg",
    lang: "fr",
    timezone: "Europe/Zurich",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "linkedin", url: "https://www.linkedin.com/in/romainpittet/" },
    { name: "mail",     url: "mailto:romain@ecritureweb.ch" },
  ],
  shareLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "mail",     url: "mailto:?subject=Article%20sur%20ecritureweb.ch&body=" },
  ],
});