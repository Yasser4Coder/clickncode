import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Initialize i18n with static resources first
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          header: {
            home: "Home",
            services: "Services",
            products: "Products",
            pricing: "Pricing",
            contact: "Contact",
            cta: "Get Started",
          },
          hero: {
            title: "Build your smart digital product with just one click",
            subtitle:
              "No tech knowledge needed just bring your idea, we'll handle the rest",
            cta: "Start your journey with us",
          },
          services: {
            title:
              "We don't just offer services \nwe build tailored solutions to match your vision and budget",
            title2: "Let's work together \nwith our us",
            subtitle:
              "Websites, mobile apps, AI systems, and stunning visuals we're a full-stack team crafting digital solutions from idea to launch",
            subtitle2:
              "help you to build website company that is modern, user friendly, \ngood CEO, and Clean design",
            webDevelopment: {
              title: "Website Dev",
              description:
                "From sleek landing pages to complex multi-page websites fast, responsive, and built to drive results",
            },
            mobileDevelopment: {
              title: "Mobile Apps",
              description:
                "We build scalable Android & iOS apps with Flutter, ensuring smooth UX and a modern look",
            },
            uiUxDesign: {
              title: "UI/UX Design",
              description:
                "help you to build website company that is modern, user friendly, good CEO, and Clean design",
            },
            aiSolutions: {
              title: "AI & Automation",
              description:
                "We automate company from task routing to data syncing, Save time, cut errors, and scale smarter",
            },
          },
          contact: {
            title: "Let's Build Something Amazing Together",
            subtitle:
              "Ready to turn your vision into reality? Fill out the form below and let's discuss how we can bring your project to life.",
            name: "Full Name",
            email: "Email Address",
            phone: "Phone Number",
            message:
              "Tell us about your project. What are you looking to build? What are your goals and requirements?",
            sendMessage: "Send Message",
            sending: "Sending Message...",
            success: "Message sent successfully!",
            error: "Error sending message. Please try again.",
            responseTime: "We'll get back to you within 24-48 hours",
            requiredFields: "All fields marked with * are required",
          },
          products: {
            title: "Our Products",
            subtitle:
              "help you to build website company that is modern, user friendly, \ngood CEO, and Clean design",
          },
          pricing: {
            title: "Pricing Sneak Peek",
            startingAt: "starting at",
            getStarted: "Get started →",
            aiSolutions: {
              title: "AI Solutions",
              features: {
                customAI: "Custom AI logic",
                integrations: "App & tool integrations",
                documentation: "Documentation & support",
              },
            },
            mobileApp: {
              title: "Mobile App Development",
              features: {
                crossPlatform: "Cross-platform Flutter development",
                cleanCode:
                  "Clean, scalable code following industry best practices",
                backend: "Backend integration + API",
              },
            },
            uiUxDesign: {
              title: "UI/UX Design",
              features: {
                wireframes: "Wireframes & high-fidelity UI",
                figma: "Figma source file",
                designSystem: "Design system",
              },
            },
            websiteDevelopment: {
              title: "Website Development",
              features: {
                customWebsite: "Custom responsive website",
                hosting: "Hosting setup support",
                optimization: "Speed optimization",
              },
            },
          },
          testimonials: {
            title: "What they say about us",
            subtitle:
              "Work in the IT field includes Web Design, UI/UX Design, ai & automation",
            approvedCount: "5 approved testimonials displayed",
            addFeedback: "add your feedback about",
            ourServices: "our services",
            form: {
              title: "Share Your Experience",
              name: "Your Name *",
              namePlaceholder: "Enter your name",
              title_label: "Your Title *",
              titlePlaceholder: "e.g., CEO, Developer, Designer",
              company: "Company",
              companyPlaceholder: "Enter company name (optional)",
              email: "Email Address",
              emailPlaceholder: "Enter your email (optional, for newsletter)",
              newsletterNote:
                "We'll add you to our newsletter for updates and insights",
              serviceUsed: "Service Used",
              webDevelopment: "Web Development",
              mobileApp: "Mobile App",
              aiAutomation: "AI & Automation",
              uiUxDesign: "UI/UX Design",
              other: "Other",
              rating: "Rating *",
              experience: "Your Experience *",
              experiencePlaceholder:
                "Tell us about your experience with our services...",
              submit: "Submit Testimonial",
              success:
                "Thank you for your testimonial! It has been submitted for review and will be published once approved.",
              reviewNote:
                "Your testimonial will be reviewed and published within 24-48 hours",
            },
          },
          footer: {
            description:
              "Companies that can help you in developing your company for the future",
            services: "Services",
            allRightsReserved: "All rights reserved.",
          },
        },
      },
      fr: {
        translation: {
          header: {
            home: "Accueil",
            services: "Services",
            products: "Produits",
            pricing: "Tarifs",
            contact: "Contact",
            cta: "Commencer",
          },
          hero: {
            title:
              "Construisez votre produit numérique intelligent en un seul clic",
            subtitle:
              "Aucune connaissance technique requise, apportez simplement votre idée, nous nous occupons du reste",
            cta: "Commencez votre voyage avec nous",
          },
          services: {
            title:
              "Nous n'offrons pas seulement des services \nnous construisons des solutions sur mesure pour correspondre à votre vision et votre budget",
            title2: "Travaillons ensemble \navec nous",
            subtitle:
              "Sites web, applications mobiles, systèmes d'IA et visuels époustouflants, nous sommes une équipe full-stack créant des solutions numériques de l'idée au lancement",
            subtitle2:
              "vous aide à construire une entreprise de sites web qui est moderne, conviviale, \navec un bon SEO et un design propre",
            webDevelopment: {
              title: "Développement Web",
              description:
                "Des pages d'atterrissage élégantes aux sites web multi-pages complexes, rapides, responsives et conçus pour donner des résultats",
            },
            mobileDevelopment: {
              title: "Applications Mobiles",
              description:
                "Nous construisons des applications Android et iOS évolutives avec Flutter, garantissant une UX fluide et un look moderne",
            },
            uiUxDesign: {
              title: "Design UI/UX",
              description:
                "vous aide à construire une entreprise de sites web qui est moderne, conviviale, avec un bon SEO et un design propre",
            },
            aiSolutions: {
              title: "IA & Automatisation",
              description:
                "Nous automatisons l'entreprise du routage des tâches à la synchronisation des données, économisez du temps, réduisez les erreurs et évoluez plus intelligemment",
            },
          },
          contact: {
            title: "Construisons Quelque Chose d'Incroyable Ensemble",
            subtitle:
              "Prêt à transformer votre vision en réalité ? Remplissez le formulaire ci-dessous et discutons de la façon dont nous pouvons donner vie à votre projet.",
            name: "Nom Complet",
            email: "Adresse Email",
            phone: "Numéro de Téléphone",
            message:
              "Parlez-nous de votre projet. Que souhaitez-vous construire ? Quels sont vos objectifs et exigences ?",
            sendMessage: "Envoyer le Message",
            sending: "Envoi du Message...",
            success: "Message envoyé avec succès !",
            error: "Erreur lors de l'envoi du message. Veuillez réessayer.",
            responseTime: "Nous vous répondrons dans les 24-48 heures",
            requiredFields: "Tous les champs marqués d'un * sont obligatoires",
          },
          products: {
            title: "Nos Produits",
            subtitle:
              "vous aide à construire une entreprise de sites web qui est moderne, conviviale, \navec un bon SEO et un design propre",
          },
          pricing: {
            title: "Aperçu des Tarifs",
            startingAt: "à partir de",
            getStarted: "Commencer →",
            aiSolutions: {
              title: "Solutions IA",
              features: {
                customAI: "Logique IA personnalisée",
                integrations: "Intégrations d'applications et d'outils",
                documentation: "Documentation et support",
              },
            },
            mobileApp: {
              title: "Développement d'Applications Mobiles",
              features: {
                crossPlatform: "Développement Flutter multiplateforme",
                cleanCode:
                  "Code propre et évolutif suivant les meilleures pratiques",
                backend: "Intégration backend + API",
              },
            },
            uiUxDesign: {
              title: "Design UI/UX",
              features: {
                wireframes: "Maquettes et UI haute fidélité",
                figma: "Fichier source Figma",
                designSystem: "Système de design",
              },
            },
            websiteDevelopment: {
              title: "Développement de Sites Web",
              features: {
                customWebsite: "Site web responsive personnalisé",
                hosting: "Support de configuration d'hébergement",
                optimization: "Optimisation de la vitesse",
              },
            },
          },
          testimonials: {
            title: "Ce qu'ils disent de nous",
            subtitle:
              "Le travail dans le domaine informatique comprend la conception web, la conception UI/UX, l'IA et l'automatisation",
            approvedCount: "5 témoignages approuvés affichés",
            addFeedback: "ajoutez votre avis sur",
            ourServices: "nos services",
            form: {
              title: "Partagez Votre Expérience",
              name: "Votre Nom *",
              namePlaceholder: "Entrez votre nom",
              title_label: "Votre Titre *",
              titlePlaceholder: "ex., PDG, Développeur, Designer",
              company: "Entreprise",
              companyPlaceholder: "Entrez le nom de l'entreprise (optionnel)",
              email: "Adresse Email",
              emailPlaceholder:
                "Entrez votre email (optionnel, pour la newsletter)",
              newsletterNote:
                "Nous vous ajouterons à notre newsletter pour les mises à jour et les insights",
              serviceUsed: "Service Utilisé",
              webDevelopment: "Développement Web",
              mobileApp: "Application Mobile",
              aiAutomation: "IA & Automatisation",
              uiUxDesign: "Design UI/UX",
              other: "Autre",
              rating: "Note *",
              experience: "Votre Expérience *",
              experiencePlaceholder:
                "Parlez-nous de votre expérience avec nos services...",
              submit: "Soumettre le Témoignage",
              success:
                "Merci pour votre témoignage ! Il a été soumis pour examen et sera publié une fois approuvé.",
              reviewNote:
                "Votre témoignage sera examiné et publié dans les 24-48 heures",
            },
          },
          footer: {
            description:
              "Entreprises qui peuvent vous aider à développer votre entreprise pour l'avenir",
            services: "Services",
            allRightsReserved: "Tous droits réservés.",
          },
        },
      },
    },
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
