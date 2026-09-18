window.SITE = {
  name: "Palmitessa family archive",
  description: "A private genealogy archive of the Palmitessa family: Monopoli, St. Paul, Plymouth. Documented facts kept apart from family account and hypotheses.",
  canonical: "",
  github: "https://github.com/spicefiendd/palmitessa-family-history",
  updated: "2026-09-18"
};

window.SITE.origin = function () {
  if (window.SITE.canonical) return window.SITE.canonical.replace(/\/$/, "");
  const path = location.pathname.replace(/index\.html$/, "").replace(/\/$/, "");
  return location.origin + path;
};
