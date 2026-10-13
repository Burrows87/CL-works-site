const translations = {
  it: {
    navProjects: "Progetti", navAbout: "Approccio", navContact: "Contatti",
    eyebrow: "Studio indipendente · Prodotti digitali",
    heroTitle: 'Idee semplici.<br><span class="accent-text">Strumenti utili.</span>',
    heroCopy: "CL Works è il mio spazio indipendente per progettare e costruire prodotti digitali che rendono più semplici le cose di ogni giorno.",
    seeProjects: "Scopri i progetti", learnMore: "Il mio approccio",
    heroNote: "Ideati con curiosità. Costruiti con cura.",
    projectsEyebrow: "IN EVIDENZA", projectsTitle: "Progetti in costruzione",
    projectsIntro: "Ogni progetto parte da un'esigenza concreta e cresce passo dopo passo.",
    statusLive: "Prossimamente", statusInDev: "In sviluppo", statusExploring: "In esplorazione",
    looplyDesc: "Un modo semplice per coordinarsi con gli amici e trovare il momento giusto per vedersi.",
    openApp: "Apri l'app", chordeezyDesc: "Un progetto musicale pensato per raccogliere brani e rendere più fluida la pratica con lo strumento.",
    comingSoon: "Maggiori dettagli in arrivo", labTitle: "Digital Lab",
    labDesc: "Esperimenti, prototipi e nuove idee che potrebbero diventare i prossimi strumenti digitali.",
    inProgress: "In progress", approachEyebrow: "L'APPROCCIO", aboutTitle: "Costruire con uno scopo.",
    aboutLead: "Non servono sempre più funzioni. Servono le funzioni giuste.",
    aboutCopy: "CL Works nasce dalla curiosità di trasformare problemi quotidiani e passioni personali in esperienze digitali accessibili. Progetto, provo, imparo e miglioro: un passo alla volta, con attenzione alle persone che useranno ciò che costruisco.",
    principleOne: "Semplicità", principleOneDesc: "Interfacce chiare, senza rumore.",
    principleTwo: "Utilità", principleTwoDesc: "Partire da bisogni reali.",
    principleThree: "Evoluzione", principleThreeDesc: "Migliorare attraverso la pratica.",
    contactEyebrow: "PARLIAMONE",
    contactTitle: "Hai un'idea in mente?",
    contactCopy: "Sono sempre curioso di conoscere nuove idee, collaborazioni e progetti interessanti.",
    contactButton: "Scrivimi",
    emailNote: "Per informazioni, collaborazioni o supporto, scrivi a",
    footerTagline: "Indipendente per natura. Curioso per scelta."
  },

  en: {
    navProjects: "Projects", navAbout: "Approach", navContact: "Contact",
    eyebrow: "Independent studio · Digital products",
    heroTitle: 'Simple ideas.<br><span class="accent-text">Useful tools.</span>',
    heroCopy: "CL Works is my independent space for designing and building digital products that make everyday things simpler.",
    seeProjects: "Explore projects", learnMore: "My approach",
    heroNote: "Curiosity in mind. Care in every detail.",
    projectsEyebrow: "SELECTED WORK", projectsTitle: "Projects in progress",
    projectsIntro: "Every project starts with a real need and grows one step at a time.",
    statusLive: "Coming soon", statusInDev: "In development", statusExploring: "Exploring",
    looplyDesc: "A simple way to coordinate with friends and find the right moment to get together.",
    openApp: "Open the app", chordeezyDesc: "A music project designed to organize songs and make instrument practice flow more smoothly.",
    comingSoon: "More details coming soon", labTitle: "Digital Lab",
    labDesc: "Experiments, prototypes and new ideas that may become the next digital tools.",
    inProgress: "In progress", approachEyebrow: "THE APPROACH", aboutTitle: "Build with purpose.",
    aboutLead: "You don't always need more features. You need the right ones.",
    aboutCopy: "CL Works comes from a curiosity to turn everyday problems and personal passions into accessible digital experiences. I design, test, learn and improve—one step at a time, with care for the people who will use what I build.",
    principleOne: "Simplicity", principleOneDesc: "Clear interfaces, less noise.",
    principleTwo: "Usefulness", principleTwoDesc: "Start with real needs.",
    principleThree: "Iteration", principleThreeDesc: "Improve through practice.",
    contactEyebrow: "LET'S TALK",
    contactTitle: "Have an idea in mind?",
    contactCopy: "I'm always curious to hear about new ideas, collaborations and interesting projects.",
    contactButton: "Get in touch",
    emailNote: "For inquiries, collaborations or support, email",
    footerTagline: "Independent by nature. Curious by choice."
  }
};

const languageToggle = document.querySelector(".language-toggle");
let currentLanguage = "it";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) {
      element.innerHTML = translations[language][key];
    }
  });

  document.querySelector(".lang-it").classList.toggle("active", language === "it");
  document.querySelector(".lang-en").classList.toggle("active", language === "en");
  languageToggle.setAttribute("aria-pressed", String(language === "en"));

  document.title = "CL Works — Independent digital maker";

  document.querySelector('meta[name="description"]').setAttribute(
    "content",
    language === "it"
      ? "CL Works — prodotti digitali indipendenti, idee trasformate in strumenti semplici e utili."
      : "CL Works — independent digital products, turning ideas into simple and useful tools."
  );

  try {
    localStorage.setItem("clworks-language", language);
  } catch (_) {}
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "it" ? "en" : "it");
});

document.getElementById("year").textContent = new Date().getFullYear();

try {
  const savedLanguage = localStorage.getItem("clworks-language");
  if (savedLanguage === "en") setLanguage("en");
} catch (_) {}
