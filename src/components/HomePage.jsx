import React from "react";
import { Helmet } from "react-helmet";

function HomePage({ lang }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ClicknCod",
    url: "https://www.clickncod.com",
    description:
      lang === "en"
        ? "ClicknCod builds websites, mobile apps, and smart automation to help businesses save time, reduce errors, and grow."
        : "ClicknCod crée des sites web, des applications mobiles et des solutions d'automatisation pour aider les entreprises à gagner du temps et réduire les erreurs.",
    inLanguage: lang,
  };

  return (
    <>
      {lang === "en" ? (
        <Helmet>
          <title>ClicknCod | Web & Mobile Development</title>
          <meta
            name="description"
            content="ClicknCod creates websites, mobile apps, and automation tools to save time, reduce errors, and help businesses grow efficiently with tailored solutions."
          />
          <meta
            name="keywords"
            content="ClicknCod, web development agency, website design company, mobile app development, business automation solutions, custom software development, digital transformation services, professional web apps, modern website design, AI automation tools"
          />
          <link
            rel="alternate"
            href="https://www.clickncod.com/en"
            hreflang="en"
          />
          <link
            rel="alternate"
            href="https://www.clickncod.com/fr"
            hreflang="fr"
          />
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>
      ) : (
        <Helmet>
          <title>
            ClicknCod | Développement Web, Applications Mobiles & Automatisation
          </title>
          <meta
            name="description"
            content="ClicknCod crée des sites web, des applications mobiles et des solutions d'automatisation pour aider les entreprises à gagner du temps et réduire les erreurs."
          />
          <meta
            name="keywords"
            content="ClicknCod, agence de développement web, société de conception de sites, développement d'applications mobiles, solutions d'automatisation d'entreprise, développement de logiciels sur mesure, services de transformation digitale, applications web professionnelles, conception de sites modernes, outils d'intelligence artificielle"
          />
          <link
            rel="alternate"
            href="https://www.clickncod.com/en"
            hreflang="en"
          />
          <link
            rel="alternate"
            href="https://www.clickncod.com/fr"
            hreflang="fr"
          />
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>
      )}
      <h1>
        {lang === "en" ? "Welcome to ClicknCod" : "Bienvenue chez ClicknCod"}
      </h1>
    </>
  );
}

export default HomePage;
