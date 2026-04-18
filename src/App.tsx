import { useState, useCallback, useEffect } from "react";
import type { ReactNode } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import PawBackground from "./components/PawBackground/PawBackground";
import HeroSection from "./components/sections/HeroSection/HeroSection";
import AboutSection from "./components/sections/AboutSection/AboutSection";
import LeistungenSection from "./components/sections/LeistungenSection/LeistungenSection";
import PreiseSection from "./components/sections/PreiseSection/PreiseSection";
import GalerieSection from "./components/sections/GalerieSection/GalerieSection";
import KontaktSection from "./components/sections/KontaktSection/KontaktSection";
import ImpressumSection from "./components/sections/ImpressumSection/ImpressumSection";
import DatenschutzSection from "./components/sections/DatenschutzSection/DatenschutzSection";

const SECTION_IDS = ["hero", "about", "leistungen", "preise", "galerie", "kontakt", "impressum", "datenschutz"] as const;
type SectionId = (typeof SECTION_IDS)[number];

export default function App() {
  const [active, setActive] = useState<SectionId>("hero");
  const [leaving, setLeaving] = useState<SectionId | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add Schema.org structured data for LocalBusiness
  useEffect(() => {
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Fellwunder & Co.",
      "description": "Professioneller Hundesalon und Katzenpflege in Aachen",
      "image": "https://fellwunder-aachen.de/og-image.png",
      "telephone": "+4915776730003",
      "email": "Info@fellwunder-aachen.de",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Oberforstbacherstr. 354",
        "addressLocality": "Aachen",
        "postalCode": "52076",
        "addressCountry": "DE"
      },
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "sameAs": [
        "https://www.google.com/maps/place/Oberforstbacherstr.+354,+52076+Aachen"
      ],
      "url": "https://fellwunder-aachen.de/"
    });
    document.head.appendChild(schemaScript);
  }, []);

  const navigateTo = useCallback(
    (id: string) => {
      const target = id as SectionId;
      if (target === active || transitioning) return;

      setMenuOpen(false);
      setTransitioning(true);
      setLeaving(active); // current page fades out (0.28s)

      setTimeout(() => {
        setLeaving(null);
        setActive(target); // new page fades in (0.4s)
        setTimeout(() => setTransitioning(false), 400);
      }, 280);
    },
    [active, transitioning]
  );

  const cls = (id: SectionId) => {
    if (id === active) return "page page--active";
    if (id === leaving) return "page page--leaving";
    return "page";
  };

  const renderSection = (id: SectionId, component: ReactNode) => {
    if (id === active || id === leaving) {
      return (
        <div key={id} className={cls(id)}>
          {component}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <Header
        activeSection={active}
        navigateTo={navigateTo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <PawBackground />
      <div className="app__content">
        {renderSection("hero", <HeroSection navigateTo={navigateTo} />)}
        {renderSection("about", <AboutSection />)}
        {renderSection("leistungen", <LeistungenSection />)}
        {renderSection("preise", <PreiseSection />)}
        {renderSection("galerie", <GalerieSection />)}
        {renderSection("kontakt", <KontaktSection />)}
        {renderSection("impressum", <ImpressumSection />)}
        {renderSection("datenschutz", <DatenschutzSection />)}
      </div>

      <footer className="footer">
        <div className="footer__inner">
          <span>© {new Date().getFullYear()} Fellwunder &amp; Co.</span>
          <a onClick={() => navigateTo("impressum")} style={{ cursor: "pointer" }}>
            Impressum
          </a>
          <a onClick={() => navigateTo("datenschutz")} style={{ cursor: "pointer" }}>
            Datenschutz
          </a>
        </div>
      </footer>
    </>
  );
}
