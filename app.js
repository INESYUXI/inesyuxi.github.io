// Maison Yuxi · FR/EN bilingual switch
const dict = {
  fr: {
    slogan: "Fiable & Premium",
    badge: "Marches francophones · B2B Export",
    intro: "Nous sommes specialises dans les chargeurs (1 port, multiports, sans fil de bureau), cables, ecouteurs, montres connectees, powerbanks et autres accessoires electroniques pour mobile. Retrouvez-nous sur tous nos canaux :",
    chan_site: "Site Officiel",
    chan_wa: "WhatsApp Business",
    chan_li: "LinkedIn",
    chan_fb: "Facebook",
    chan_ig: "Instagram",
    chan_tt: "TikTok",
    chan_email: "Email",
    cta: "Demander un devis",
    footer: "\u00A9 2026 Maison Yuxi \u00B7 Yuxi Tech"
  },
  en: {
    slogan: "Reliable & High Quality",
    badge: "French-speaking markets · B2B Export",
    intro: "We specialize in chargers (1-port, multi-port, wireless desktop), cables, earphones, smartwatches, power banks and other mobile electronic accessories. Find us on all our channels:",
    chan_site: "Official Website",
    chan_wa: "WhatsApp Business",
    chan_li: "LinkedIn",
    chan_fb: "Facebook",
    chan_ig: "Instagram",
    chan_tt: "TikTok",
    chan_email: "Email",
    cta: "Request a Quote",
    footer: "\u00A9 2026 Maison Yuxi \u00B7 Yuxi Tech"
  }
};

function setLang(lang) {
  if (!dict[lang]) lang = "fr";
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[lang][key] != null) el.textContent = dict[lang][key];
  });

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    const active = b.dataset.lang === lang;
    b.classList.toggle("active", active);
    b.setAttribute("aria-pressed", active ? "true" : "false");
  });

  try { localStorage.setItem("my_lang", lang); } catch (e) {}
}

(function init() {
  let saved = "fr";
  try { saved = localStorage.getItem("my_lang") || "fr"; } catch (e) {}
  setLang(saved === "en" ? "en" : "fr");

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });
})();
