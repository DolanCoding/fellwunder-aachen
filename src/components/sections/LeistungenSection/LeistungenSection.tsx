import "./LeistungenSection.css";

const GRUNDPFLEGE = [
  "Waschen & Föhnen",
  "Schneiden (natürlich & gepflegt)",
  "Bürsten & Entfilzen",
  "Krallen schneiden",
  "Ohren- & Augenpflege",
  "Trimmen (rassespezifisch)",
  "Zahnpflege (unterstützend)",
];

const ENTFILZUNG_ITEMS = [
  "Entfernen von Verfilzungen inkl. Waschen & Föhnen",
  "Pflege je nach Zustand des Fells",
];

const ENTFILZUNG_NOTES = [
  "Mehrere Sitzungen möglich",
  "Bei stark verfilztem Fell ist meist eine Teil- oder Komplettschur notwendig",
  "Bei Unterwoll- und Filzbehandlungen ist ein Bad zwingend notwendig",
];

const ZUSATZ_ITEMS = [
  "Pfotenpflege",
  "Unterwoll-Entfernung",
  "Welpen-Eingewöhnung",
  "Senioren- & Angsthunde",
  "Fellpflege & Auffrischung zwischen Terminen",
];

export default function LeistungenSection() {
  return (
    <section className="section leistungen">
      <div className="section__inner">
        <div className="leistungen__header">
          <h2 className="section__title animate" style={{ animationDelay: "0.15s" }}>
            Unsere Leistungen
          </h2>
          <p
            className="section__body leistungen_subtitle animate"
            style={{ animationDelay: "0.22s", margin: "0 auto" }}
          >
            Alle Felltypen willkommen – spezialisiert auf Grundpflege und stark verfilztes Fell.
          </p>
        </div>

        <div className="leistungen__categories animate" style={{ animationDelay: "0.3s" }}>
          {/* Grundpflege */}
          <div className="leistungen-cat">
            <div className="leistungen-cat__header">
              <span className="leistungen-cat__icon">🛁</span>
              <h3 className="leistungen-cat__title">Grundpflege</h3>
            </div>
            <ul className="leistungen-cat__list">
              {GRUNDPFLEGE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Entfilzung */}
          <div className="leistungen-cat leistungen-cat--highlight">
            <div className="leistungen-cat__header">
              <span className="leistungen-cat__icon">✂️</span>
              <h3 className="leistungen-cat__title">Entfilzung</h3>
            </div>
            <p className="leistungen-cat__subtitle">Komplettpaket inkl. Baden &amp; Föhnen</p>
            <ul className="leistungen-cat__list">
              {ENTFILZUNG_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="leistungen-cat__notes">
              <p className="leistungen-cat__notes-label">Wichtige Hinweise</p>
              <ul>
                {ENTFILZUNG_NOTES.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Zusatzleistungen */}
          <div className="leistungen-cat">
            <div className="leistungen-cat__header">
              <span className="leistungen-cat__icon">✂️</span>
              <h3 className="leistungen-cat__title">Zusatzleistungen</h3>
            </div>
            <ul className="leistungen-cat__list">
              {ZUSATZ_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
