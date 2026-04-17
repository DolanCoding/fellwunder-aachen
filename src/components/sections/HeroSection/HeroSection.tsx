import "./HeroSection.css";

interface HeroSectionProps {
  navigateTo: (id: string) => void;
}

export default function HeroSection({ navigateTo }: HeroSectionProps) {
  return (
    <section className="section hero">
      <div className="hero__bg" />

      <div className="section__inner" style={{ textAlign: "center" }}>
        <p className="hero__eyebrow animate" style={{ animationDelay: "0.1s" }}>
          Hundesalon &amp; Katzenpflege · Aachen
        </p>

        <div style={{ position: "relative", display: "inline-block", width: "fit-content" }}>
          <h1 className="hero__title animate" style={{ animationDelay: "0.2s" }}>
            Fellwunder
          </h1>
          <svg
            className="hero__title-underline animate"
            style={{ animationDelay: "0.25s", width: "100%" }}
            viewBox="0 0 300 60"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 50 Q 150 10, 300 50"
              stroke="#ffb703"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="hero__divider animate" style={{ animationDelay: "0.35s" }} />

        <div
          style={{
            display: "flex",
            gap: "clamp(1rem, 3vw, 2rem)",
            alignItems: "stretch",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
            minHeight: 0,
          }}
        >
          <div
            style={{
              flexBasis: "100%",
              maxWidth: "440px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p className="hero__tagline animate" style={{ animationDelay: "0.42s" }}>
              Fellpflege für Hunde &amp; Katzen mit Liebe zum Detail. Professionelle Pflege für alle
              Felltypen – von der regelmäßigen Grundpflege bis hin zu anspruchsvollen Fällen wie
              stark verfilztem Fell oder sensiblen Tieren.
            </p>

            <p className="hero__note animate" style={{ animationDelay: "0.55s" }}>
              Auch schwierige, ängstliche oder unruhige Tiere werden einfühlsam und stressarm
              behandelt.
            </p>
          </div>

          <img
            src="/Doggo.png"
            alt="Hundefrisör Hund"
            className="animate hero__image"
            style={{
              animationDelay: "0.48s",
              height: "auto",
              maxHeight: "clamp(150px, 40vh, 300px)",
              width: "auto",
              flexShrink: 0,
              objectFit: "contain",
            }}
          />
        </div>

        <div className="hero__ctas animate" style={{ animationDelay: "0.62s" }}>
          <button className="btn btn--primary" onClick={() => navigateTo("kontakt")}>
            Termin vereinbaren
          </button>
          <button className="btn btn--ghost" onClick={() => navigateTo("leistungen")}>
            Leistungen ansehen
          </button>
        </div>
      </div>
    </section>
  );
}
