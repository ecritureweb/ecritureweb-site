import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Accueil",
    posts: "Le blog",
    services: "Mes services",
    about: "A propos",
    tags: "Tags",
    archives: "Archives",
    search: "Recherche",
  },
  post: {
    publishedAt: "Publié le",
    updatedAt: "Mis à jour",
    sharePostIntro: "Partager cet article :",
    sharePostOn: "Partager cet article sur {{platform}}",
    sharePostViaEmail: "Partager cet article par e-mail",
    tagLabel: "Tags",
    backToTop: "Retour en haut",
    goBack: "Retour",
    editPage: "Modifier la page",
    previousPost: "Article précédent",
    nextPost: "Article suivant",
  },
  pagination: {
    prev: "Préc.",
    next: "Suiv.",
    page: "Page",
  },
  home: {
    socialLinks: "Réseaux sociaux",
    featured: "À la une",
    recentPosts: "Articles récents",
    allPosts: "Tous les articles",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Tous droits réservés.",
  },
  pages: {
    servicesTitle: "Mes services",
    servicesDesc: "Tous les services proposés",

    tagTitle: "Tag",
    tagDesc: "Tous les articles avec le tag",

    tagsTitle: "Tags",
    tagsDesc: "Tous les tags utilisés dans les articles.",

    postsTitle: "Le blog",
    postsDesc: "Tous les articles publiés jusqu'ici.",

    archivesTitle: "Archives",
    archivesDesc: "Tous mes articles archivés.",

    searchTitle: "Recherche",
    searchDesc: "Rechercher un article…",
  },
  a11y: {
    skipToContent: "Aller au contenu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    toggleTheme: "Changer de thème",
    searchPlaceholder: "Rechercher des articles…",
    noResults: "Aucun résultat trouvé",
    goToPreviousPage: "Aller à la page précédente",
    goToNextPage: "Aller à la page suivante",
  },
  notFound: {
    title: "Erreur 404 — Page introuvable",
    message: "Page introuvable",
    goHome: "Retour à l'accueil",
  },
} satisfies UIStrings;