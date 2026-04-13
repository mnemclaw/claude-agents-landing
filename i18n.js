/**
 * i18n - Lightweight multilingual support for claude-agents.ch
 * Supports: DE (German), FR (French), IT (Italian), EN (English)
 */

const i18n = {
  de: {
    nav: {
      home: 'Start',
      services: 'Services',
      pricing: 'Preise',
      process: 'Prozess',
      compliance: 'Compliance',
      bookDemo: 'Agent anfragen'
    },
    hero: {
      badge: 'Made in Switzerland nFADP-konform',
      title: 'Schweizer KI-Agenten für Ihr KMU',
      subtitle: 'Unsere Agenten übernehmen repetitive Aufgaben für Sie. 24/7 aktiv – Sie konzentrieren sich auf das Wesentliche. Ab CHF 500/Monat. Basel-basiert.',
      ctaPrimary: 'Agent anfragen',
      ctaSecondary: 'Anwendungsfälle',
      socialProof: '4.9/5 von Schweizer KMUs · Basel'
    },
    values: {
      swissBased: 'Schweizer-basiert',
      swissBasedDesc: 'Basler Büros. nFADP- und CH-Dat-konform. Ihre Daten bleiben in der Schweiz.',
      autonomous: 'Autonom',
      autonomousDesc: '24/7 aktiv – Sie konzentrieren sich auf das Wesentliche.',
      flatPricing: 'Pauschalpreis',
      flatPricingDesc: 'CHF 500–5.000 pro Monat. Einmalige Setup-Gebühr. Keine Überraschungen, keine Stundenabrechnung.'
    },
    services: {
      title: 'Was unsere Agenten für Sie tun',
      subtitle: 'Outcome-as-a-Service: Autonome 24/7-Ausführung für Schweizer Industrien',
      digitalFiduciary: 'Digitaler Treuhänder',
      forTreuhander: 'Für Treuhänder',
      dfFeature1: 'PDF-Beleg → Buchungsfertige Zusammenfassungen',
      dfFeature2: 'Automatische Zefix-Entitätsuche',
      dfFeature3: 'Tägliche Abstimmungs-Batching',
      dfMetric: '70-85%',
      dfMetricLabel: 'Zeitersparnis',
      constructionHub: 'Construction Hub',
      forPM: 'Für Projektleiter',
      chFeature1: 'Planänderung → Auto-Benachrichtigung Subunternehmer',
      chFeature2: 'Foto-Metadaten-Berichte',
      chFeature3: 'Fortschritts-Dashboard-Updates',
      chMetric: '12-16 Std',
      chMetricLabel: 'Wöchentliche Einsparung',
      multilingualSDR: 'Mehrsprachiger SDR',
      forSales: 'Für Vertriebsteams',
      sdrFeature1: 'DE/FR/IT Lead-Triage',
      sdrFeature2: 'Auto-Qualifikations-Scoring',
      sdrFeature3: 'Kalenderbuchungs-Integration',
      sdrMetric: '80%',
      sdrMetricLabel: 'Schnellere Antwort',
      supplyChain: 'Supply Chain Watchdog',
      forOps: 'Für Operationen',
      scFeature1: 'Echtzeit-Bestandsüberwachung',
      scFeature2: 'Saisonale Prognose-Alarme',
      scFeature3: 'Beschaffungs-Entwürfe',
      scMetric: '10-25%',
      scMetricLabel: 'Stock-Out-Reduktion',
      learnMore: 'Mehr erfahren →'
    },
    pricing: {
      title: 'Einfache Preise',
      subtitle: 'Einmal einrichten. Unendlich skalieren. Schweizer Qualität.',
      foundation: 'Foundation',
      growth: 'Growth',
      enterprise: 'Enterprise',
      mostPopular: 'Am beliebtesten',
      perMonth: '/Monat',
      setup: '+ Setup CHF {amount}',
      customSetup: 'Individuelles Setup CHF {amount}+',
      agent1: '1 Agent',
      agent3: '3 Agents',
      agentsUnlimited: 'Unbegrenzte Agents',
      dataSource1: '1 Datenquelle',
      multiLang: 'Mehrsprachig (DE/FR/IT)',
      apiAccess: 'API-Zugang',
      whatsapp: 'WhatsApp-Kanal',
      slack: 'Slack Connect',
      emailSupport: 'E-Mail-Support',
      prioritySupport: 'Prioritäts-Support',
      customIntegrations: 'Individuelle Integrationen',
      sla: 'SLAs',
      successManager: 'Dedizierter Success Manager',
      getStarted: 'Loslegen',
      contactSales: 'Vertrieb kontaktieren'
    },
    process: {
      title: 'So bauen wir Ihren Agenten',
      subtitle: 'Von der Idee zur autonomen Ausführung in 4 Wochen',
      step1: 'Discovery',
      step1Desc: 'Wir verstehen Ihre Pain Points und kartieren Datenquellen',
      step1Time: 'Woche 1',
      step2: 'Strategie',
      step2Desc: 'Wir entwerfen Ihre Agenten-Architektur und Workflows',
      step2Time: 'Woche 1',
      step3: 'Implementierung',
      step3Desc: 'Wir bauen, testen und deployen in Tagen, nicht Monaten',
      step3Time: 'Woche 2-3',
      step4: 'Support',
      step4Desc: '24/7 Überwachung, Optimierung und menschliche Backup',
      step4Time: 'Laufend'
    },
    trust: {
      title: 'Gebaut für Schweizer KMUs wie',
      testimonialQuote: '"Unser digitaler Treuhänder verarbeitet jetzt 200+ Belege pro Woche ohne menschliches Zutun. Die Zeitersparnis ist enorm."',
      testimonialAuthor: 'Marc Weber',
      testimonialRole: 'Geschäftsführer, Treuhand Weber GmbH, Basel'
    },
    compliance: {
      title: 'Swiss-Grade Compliance',
      nFADP: 'nFADP-konform',
      chDat: 'CH-Dat zertifiziert',
      gdpr: 'DSGVO-ready',
      iso: 'ISO 27001'
    },
    cta: {
      title: 'Bereit, Ihr Team zu verstärken?',
      subtitle: 'Sagen Sie uns, welche repetitiven Aufgaben Sie übernehmen möchten. In 3 einfachen Schritten beschreiben Sie Ihren Anwendungsfall – wir melden uns innerhalb 24h mit einem Angebot.',
      placeholder: 'ihre@email.ch',
      button: 'Agent anfragen',
      privacy: 'Kein Spam. Swiss-Datenschutz.'
    },
    footer: {
      tagline: 'Swiss AI Agents für KMUs',
      product: 'Produkt',
      company: 'Unternehmen',
      legal: 'Rechtliches',
      copyright: '© 2025 claude-agents.ch · Basel, Switzerland'
    }
  },

  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      pricing: 'Tarifs',
      process: 'Processus',
      compliance: 'Conformité',
      bookDemo: 'Demander un agent'
    },
    hero: {
      badge: 'Fabriqué en Suisse Conforme nFADP',
      title: 'Agents IA Suisses pour Votre PME',
      subtitle: 'Nos agents prennent en charge les tâches répétitives pour vous. 24/7 actifs – vous vous concentrez sur l\'essentiel. Dès CHF 500/mois. Basés à Bâle.',
      ctaPrimary: 'Demander un agent',
      ctaSecondary: 'Voir les cas d\'usage',
      socialProof: '4.9/5 par les PME suisses · Bâle'
    },
    values: {
      swissBased: 'Basé en Suisse',
      swissBasedDesc: 'Bureaux à Bâle. Conforme nFADP et CH-Dat. Vos données restent en Suisse.',
      autonomous: 'Autonome',
      autonomousDesc: '24/7 actifs – vous vous concentrez sur l\'essentiel.',
      flatPricing: 'Tarif fixe',
      flatPricingDesc: 'CHF 500–5\'000 par mois. Frais de configuration unique. Pas de surprises, pas de facturation horaire.'
    },
    services: {
      title: 'Ce que nos agents font pour vous',
      subtitle: 'Outcome-as-a-Service: Exécution autonome 24/7 pour industries suisses',
      digitalFiduciary: 'Fiduciaire Numérique',
      forTreuhander: 'Pour fiduciaires',
      dfFeature1: 'Reçu PDF → Résumés prêts à comptabiliser',
      dfFeature2: 'Recherche d\'entités Zefix automatique',
      dfFeature3: 'Batching de rapprochement quotidien',
      dfMetric: '70-85%',
      dfMetricLabel: 'Temps économisé',
      constructionHub: 'Construction Hub',
      forPM: 'Pour chefs de projet',
      chFeature1: 'Changement de plan → Notif auto sous-traitants',
      chFeature2: 'Rapports métadonnées photos',
      chFeature3: 'Mises à jour dashboard progrès',
      chMetric: '12-16 h',
      chMetricLabel: 'Gain hebd.',
      multilingualSDR: 'SDR Multilingue',
      forSales: 'Pour équipes commerciales',
      sdrFeature1: 'Triage leads DE/FR/IT',
      sdrFeature2: 'Scoring auto-qualification',
      sdrFeature3: 'Intégration calendrier',
      sdrMetric: '80%',
      sdrMetricLabel: 'R��ponse + rapide',
      supplyChain: 'Supply Chain Watchdog',
      forOps: 'Pour opérations',
      scFeature1: 'Surveillance stocks temps réel',
      scFeature2: 'Alertes prévisions saisonnières',
      scFeature3: 'Brouillons procurement',
      scMetric: '10-25%',
      scMetricLabel: 'Réduction ruptures',
      learnMore: 'En savoir plus →'
    },
    pricing: {
      title: 'Tarifs simples',
      subtitle: 'Configurez une fois. Scalez à l\'infini. Qualité suisse.',
      foundation: 'Foundation',
      growth: 'Growth',
      enterprise: 'Enterprise',
      mostPopular: 'Plus populaire',
      perMonth: '/mois',
      setup: '+ Setup CHF {amount}',
      customSetup: 'Setup custom CHF {amount}+',
      agent1: '1 Agent',
      agent3: '3 Agents',
      agentsUnlimited: 'Agents illimités',
      dataSource1: '1 Source de données',
      multiLang: 'Multilingue (DE/FR/IT)',
      apiAccess: 'Accès API',
      whatsapp: 'Canal WhatsApp',
      slack: 'Slack Connect',
      emailSupport: 'Support email',
      prioritySupport: 'Support prioritaire',
      customIntegrations: 'Intégrations custom',
      sla: 'SLAs',
      successManager: 'Success Manager dédié',
      getStarted: 'Commencer',
      contactSales: 'Contactez ventes'
    },
    process: {
      title: 'Comment nous construisons votre agent',
      subtitle: 'De l\'idée à l\'exécution autonome en 4 semaines',
      step1: 'Discovery',
      step1Desc: 'Nous comprenons vos pain points et cartographions les sources de données',
      step1Time: 'Semaine 1',
      step2: 'Stratégie',
      step2Desc: 'Nous concevons l\'architecture et les workflows de votre agent',
      step2Time: 'Semaine 1',
      step3: 'Implémentation',
      step3Desc: 'Nous construisons, testons et deployons en jours, pas mois',
      step3Time: 'Semaine 2-3',
      step4: 'Support',
      step4Desc: 'Surveillance 24/7, optimisation et backup humain',
      step4Time: 'Continu'
    },
    trust: {
      title: 'Conçu pour PME suisses comme',
      testimonialQuote: '"Notre fiduciaire numérique traite maintenant 200+ reçus par semaine sans intervention humaine. Le gain de temps est énorme."',
      testimonialAuthor: 'Marc Weber',
      testimonialRole: 'DG, Fiduciaire Weber Sàrl, Bâle'
    },
    compliance: {
      title: 'Conformité Niveau Suisse',
      nFADP: 'Conforme nFADP',
      chDat: 'Certifié CH-Dat',
      gdpr: 'RGPD-ready',
      iso: 'ISO 27001'
    },
    cta: {
      title: 'Prêt à renforcer votre équipe?',
      subtitle: 'Dites-nous quelles tâches répétitives vous souhaitez déléguer. En 3 étapes simples, décrivez votre cas d\'usage – nous vous revenons sous 24h avec une offre.',
      placeholder: 'votre@email.ch',
      button: 'Demander un agent',
      privacy: 'Pas de spam. Protection suisse des données.'
    },
    footer: {
      tagline: 'Agents IA Suisses pour PME',
      product: 'Produit',
      company: 'Entreprise',
      legal: 'Mentions légales',
      copyright: '© 2025 claude-agents.ch · Bâle, Suisse'
    }
  },

  it: {
    nav: {
      home: 'Home',
      services: 'Servizi',
      pricing: 'Prezzi',
      process: 'Processo',
      compliance: 'Compliance',
      bookDemo: 'Richiedi agente'
    },
    hero: {
      badge: 'Made in Switzerland Conforme nFADP',
      title: 'Agenti IA Svizzeri per la Sua PMI',
      subtitle: 'I nostri agenti si occupano dei compiti ripetitivi per lei. 24/7 attivi – lei si concentra sull\'essenziale. Da CHF 500/mese. Basilea.',
      ctaPrimary: 'Richiedi agente',
      ctaSecondary: 'Vedi i casi',
      socialProof: '4.9/5 da PMI svizzere · Basilea'
    },
    values: {
      swissBased: 'Basato in Svizzera',
      swissBasedDesc: 'Uffici a Basilea. Conforme nFADP e CH-Dat. I suoi dati rimangono in Svizzera.',
      autonomous: 'Autonomo',
      autonomousDesc: '24/7 attivi – lei si concentra sull\'essenziale.',
      flatPricing: 'Prezzo fisso',
      flatPricingDesc: 'CHF 500–5\'000 al mese. Setup una tantum. Nessuna sorpresa, nessuna tariffa oraria.'
    },
    services: {
      title: 'Cosa fanno i nostri agenti per lei',
      subtitle: 'Outcome-as-a-Service: Esecuzione autonoma 24/7 per industrie svizzere',
      digitalFiduciary: 'Fiduciario Digitale',
      forTreuhander: 'Per fiduciari',
      dfFeature1: 'Ricevuta PDF → Riepiloghi pronti per la contabilità',
      dfFeature2: 'Ricerca entità Zefix automatica',
      dfFeature3: 'Batching riconciliazione giornaliera',
      dfMetric: '70-85%',
      dfMetricLabel: 'Tempo risparmiato',
      constructionHub: 'Construction Hub',
      forPM: 'Per project manager',
      chFeature1: 'Modifica piano → Notifica auto subappaltatori',
      chFeature2: 'Report metadati foto',
      chFeature3: 'Aggiornamenti dashboard avanzamento',
      chMetric: '12-16 ore',
      chMetricLabel: 'Risparmio sett.',
      multilingualSDR: 'SDR Multilingue',
      forSales: 'Per team vendite',
      sdrFeature1: 'Triage lead DE/FR/IT',
      sdrFeature2: 'Scoring auto-qualificazione',
      sdrFeature3: 'Integrazione calendario',
      sdrMetric: '80%',
      sdrMetricLabel: 'Risposta più veloce',
      supplyChain: 'Supply Chain Watchdog',
      forOps: 'Per operazioni',
      scFeature1: 'Monitoraggio scorte real-time',
      scFeature2: 'Alert previsioni stagionali',
      scFeature3: 'Bozze procurement',
      scMetric: '10-25%',
      scMetricLabel: 'Riduzione stock-out',
      learnMore: 'Scopri di più →'
    },
    pricing: {
      title: 'Prezzi semplici',
      subtitle: 'Configura una volta. Scala all\'infinito. Qualità svizzera.',
      foundation: 'Foundation',
      growth: 'Growth',
      enterprise: 'Enterprise',
      mostPopular: 'Più popolare',
      perMonth: '/mese',
      setup: '+ Setup CHF {amount}',
      customSetup: 'Setup custom CHF {amount}+',
      agent1: '1 Agent',
      agent3: '3 Agent',
      agentsUnlimited: 'Agent illimitati',
      dataSource1: '1 Fonte dati',
      multiLang: 'Multilingue (DE/FR/IT)',
      apiAccess: 'Accesso API',
      whatsapp: 'Canale WhatsApp',
      slack: 'Slack Connect',
      emailSupport: 'Supporto email',
      prioritySupport: 'Supporto prioritario',
      customIntegrations: 'Integrazioni custom',
      sla: 'SLA',
      successManager: 'Success Manager dedicato',
      getStarted: 'Inizia',
      contactSales: 'Contatta vendite'
    },
    process: {
      title: 'Come costruiamo il suo agente',
      subtitle: 'Dall\'idea all\'esecuzione autonoma in 4 settimane',
      step1: 'Discovery',
      step1Desc: 'Comprendiamo i suoi pain point e mappiamo le fonti dati',
      step1Time: 'Settimana 1',
      step2: 'Strategia',
      step2Desc: 'Progettiamo architettura e workflow del suo agente',
      step2Time: 'Settimana 1',
      step3: 'Implementazione',
      step3Desc: 'Costruiamo, testiamo e deployiamo in giorni, non mesi',
      step3Time: 'Settimana 2-3',
      step4: 'Supporto',
      step4Desc: 'Monitoraggio 24/7, ottimizzazione e backup umano',
      step4Time: 'Continuo'
    },
    trust: {
      title: 'Creato per PMI svizzere come',
      testimonialQuote: '"Il nostro fiduciario digitale processa ora 200+ ricevute a settimana senza intervento umano. Il risparmio di tempo è enorme."',
      testimonialAuthor: 'Marc Weber',
      testimonialRole: 'CEO, Fiduciaria Weber SA, Basilea'
    },
    compliance: {
      title: 'Compliance Livello Svizzero',
      nFADP: 'Conforme nFADP',
      chDat: 'Certificato CH-Dat',
      gdpr: 'GDPR-ready',
      iso: 'ISO 27001'
    },
    cta: {
      title: 'Pronto a potenziare il suo team?',
      subtitle: 'Ci dica quali compiti ripetitivi vuole delegare. In 3 semplici passaggi descriva il suo caso d\'uso – le rispondiamo entro 24h con un\'offerta.',
      placeholder: 'sua@email.ch',
      button: 'Richiedi agente',
      privacy: 'Nessuno spam. Protezione dati svizzera.'
    },
    footer: {
      tagline: 'Agenti IA Svizzeri per PMI',
      product: 'Prodotto',
      company: 'Azienda',
      legal: 'Legale',
      copyright: '© 2025 claude-agents.ch · Basilea, Svizzera'
    }
  },

  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      pricing: 'Pricing',
      process: 'Process',
      compliance: 'Compliance',
      bookDemo: 'Request Agent'
    },
    hero: {
      badge: 'Made in Switzerland nFADP Compliant',
      title: 'Swiss AI Agents for Your KMU',
      subtitle: 'Our agents handle repetitive tasks for you. 24/7 active – you focus on what matters. From CHF 500/month. Basel-based.',
      ctaPrimary: 'Request Agent',
      ctaSecondary: 'View Use Cases',
      socialProof: '4.9/5 from Swiss KMUs · Basel-based'
    },
    values: {
      swissBased: 'Swiss-Based',
      swissBasedDesc: 'Basel offices. nFADP and CH-Dat compliant. Your data stays in Switzerland.',
      autonomous: 'Autonomous',
      autonomousDesc: '24/7 active – you focus on what matters.',
      flatPricing: 'Flat Pricing',
      flatPricingDesc: 'CHF 500–5,000 per month. Setup fee once. No surprises no hourly billing.'
    },
    services: {
      title: 'What Our Agents Do For You',
      subtitle: 'Outcome-as-a-Service: autonomous 24/7 execution for Swiss industries',
      digitalFiduciary: 'Digital Fiduciary',
      forTreuhander: 'For Treuhänder',
      dfFeature1: 'PDF Receipt → Ready-to-Post Summaries',
      dfFeature2: 'Automated Zefix entity lookup',
      dfFeature3: 'Daily reconciliation batching',
      dfMetric: '70-85%',
      dfMetricLabel: 'Time Saved',
      constructionHub: 'Construction Hub',
      forPM: 'For Project Managers',
      chFeature1: 'Plan change → Auto notify subcontractors',
      chFeature2: 'Photo metadata reports',
      chFeature3: 'Progress dashboard updates',
      chMetric: '12-16 hrs',
      chMetricLabel: 'Weekly Recovery',
      multilingualSDR: 'Multilingual SDR',
      forSales: 'For Sales Teams',
      sdrFeature1: 'DE/FR/IT lead triage',
      sdrFeature2: 'Auto-qualification scoring',
      sdrFeature3: 'Calendar booking integration',
      sdrMetric: '80%',
      sdrMetricLabel: 'Faster Response',
      supplyChain: 'Supply Chain Watchdog',
      forOps: 'For Operations',
      scFeature1: 'Real-time stock monitoring',
      scFeature2: 'Seasonal forecasting alerts',
      scFeature3: 'Procurement drafting',
      scMetric: '10-25%',
      scMetricLabel: 'Stock-Out Reduction',
      learnMore: 'Learn More →'
    },
    pricing: {
      title: 'Simple Pricing',
      subtitle: 'Setup once. Scale infinitely. Swiss quality.',
      foundation: 'Foundation',
      growth: 'Growth',
      enterprise: 'Enterprise',
      mostPopular: 'Most Popular',
      perMonth: '/month',
      setup: '+ Setup CHF {amount}',
      customSetup: 'Custom Setup CHF {amount}+',
      agent1: '1 Agent',
      agent3: '3 Agents',
      agentsUnlimited: 'Unlimited Agents',
      dataSource1: '1 Data Source',
      multiLang: 'Multi-language (DE/FR/IT)',
      apiAccess: 'API Access',
      whatsapp: 'WhatsApp Channel',
      slack: 'Slack Connect',
      emailSupport: 'Email Support',
      prioritySupport: 'Priority Support',
      customIntegrations: 'Custom Integrations',
      sla: 'SLAs',
      successManager: 'Dedicated Success Manager',
      getStarted: 'Get Started',
      contactSales: 'Contact Sales'
    },
    process: {
      title: 'How We Build Your Agent',
      subtitle: 'From idea to autonomous execution in 4 weeks',
      step1: 'Discovery',
      step1Desc: 'We understand your pain points and map data sources',
      step1Time: 'Week 1',
      step2: 'Strategy',
      step2Desc: 'We design your agent architecture and workflows',
      step2Time: 'Week 1',
      step3: 'Implementation',
      step3Desc: 'We build test and deploy in days not months',
      step3Time: 'Week 2-3',
      step4: 'Support',
      step4Desc: '24/7 monitoring optimization and human backup',
      step4Time: 'Ongoing'
    },
    trust: {
      title: 'Built for Swiss KMUs Like',
      testimonialQuote: '"Our digital fiduciary now processes 200+ receipts per week with no human intervention. The time savings are enormous."',
      testimonialAuthor: 'Marc Weber',
      testimonialRole: 'CEO, Treuhand Weber GmbH, Basel'
    },
    compliance: {
      title: 'Swiss-Grade Compliance',
      nFADP: 'nFADP Compliant',
      chDat: 'CH-Dat Certified',
      gdpr: 'GDPR-ready',
      iso: 'ISO 27001'
    },
    cta: {
      title: 'Ready to Empower Your Team?',
      subtitle: 'Tell us which repetitive tasks you want to offload. In 3 simple steps, describe your use case – we respond within 24h with a quote.',
      placeholder: 'your@email.ch',
      button: 'Request Agent',
      privacy: 'No spam. Swiss data protection.'
    },
    footer: {
      tagline: 'Swiss AI Agents for KMUs',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      copyright: '© 2025 claude-agents.ch · Basel, Switzerland'
    }
  }
};

// Current language
let currentLang = 'en';

/**
 * Get nested value from object using dot notation
 * e.g., getValue(i18n.de, 'hero.title') → 'Schweizer KI-Agenten...'
 */
function getValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

/**
 * Set language and update all elements with data-i18n attribute
 */
function setLanguage(lang) {
  if (!['de', 'fr', 'it', 'en'].includes(lang)) return;

  currentLang = lang;
  const t = i18n[lang];

  // Update document language
  document.documentElement.lang = lang === 'en' ? 'en' : lang;

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = getValue(t, key);
    if (value) {
      // Handle nested objects with format strings
      if (typeof value === 'string') {
        el.textContent = value;
      }
    }
  });

  // Update active state on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update URL without reload
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  history.replaceState(null, '', url);

  // Store preference
  localStorage.setItem('cla-lang', lang);

  // Update page title
  const titleMap = {
    de: 'Claude Agents Schweiz — KI-Agenten für Ihr KMU',
    fr: 'Claude Agents Suisse — Agents IA pour Votre PME',
    it: 'Claude Agents Svizzera — Agenti IA per la Sua PMI',
    en: 'Claude Agents Switzerland — Swiss AI Agents for Your KMU'
  };
  document.title = titleMap[lang];
}

/**
 * Initialize language on page load
 */
function initI18n() {
  // Check URL param first
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');

  // Then check localStorage
  const storedLang = localStorage.getItem('cla-lang');

  // Then check browser language
  const browserLang = navigator.language?.slice(0, 2);

  // Determine language priority: URL > localStorage > browser > default
  const lang = (urlLang && ['de', 'fr', 'it', 'en'].includes(urlLang)) ? urlLang :
               (storedLang && ['de', 'fr', 'it', 'en'].includes(storedLang)) ? storedLang :
               (['de', 'fr', 'it'].includes(browserLang)) ? browserLang : 'en';

  setLanguage(lang);
}

// Export for use in other modules
window.i18n = { setLanguage, initI18n, getValue, i18n };

// Auto-initialize if DOM is ready
document.addEventListener('DOMContentLoaded', initI18n);
