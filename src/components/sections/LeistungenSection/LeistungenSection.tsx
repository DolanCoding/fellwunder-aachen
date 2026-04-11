import './LeistungenSection.css'

const GRUNDPFLEGE = [
  "Waschen & Föhnen",
  "Schneiden (natürlich & gepflegt)",
  "Konturenschnitt",
  "Bürsten & Entfilzen",
  "Krallen schneiden",
  "Ohrenreinigung",
  "Augenpflege",
  "Trimmen (rassespezifisch)",
  "Zähne putzen (Hygienepflege)",
];

const ENTFILZUNG_ITEMS = [
  "Entfernen von Verfilzungen",
  "Waschen & Föhnen inklusive",
  "Pflege und Nachbearbeitung je nach Zustand",
];

const ENTFILZUNG_NOTES = [
  "Kann mehrere Sitzungen erfordern",
  "Bei starkem Filz ggf. Teil- oder Komplettschur notwendig",
  "Entscheidung erfolgt individuell nach Begutachtung",
];

const ZUSATZ_GROUPS = [
  {
    title: "Hygiene & Pflege",
    items: [
      "Pfotenpflege",
      "Augenpflege intensiv",
      "Ohrenpflege intensiv",
      "Geruchsbehandlung / Fellauffrischung",
      "Unterwoll-Entfernung",
    ],
  },
  {
    title: "Spezialpflege",
    items: [
      "Welpen-Eingewöhnung",
      "Senior-Hund-Pflege",
      "Angsthunde / schwierige Tiere",
      "Fellstruktur-Behandlung",
    ],
  },
  {
    title: "Optik & Pflegefinish",
    items: [
      "Fellglanz-Kur (Conditioner / Pflegebad)",
      "Pfoten ausscheren & formen",
      "Konturen auffrischen zwischen Terminen",
      "Pflegesprays / Entwirrungspflege",
    ],
  },
  {
    title: "Komfort",
    items: ["Express-Kleinpflege"],
  },
];

export default function LeistungenSection() {
  return (
    <section className="section leistungen">
      <div className="section__inner">
        <div className="leistungen__header">
          <p className="section__label animate" style={{ animationDelay: "0.05s" }}>
            Leistungen
          </p>
          <h2 className="section__title animate" style={{ animationDelay: "0.15s" }}>
            Was wir für Ihr Tier tun
          </h2>
          <p
            className="section__body animate"
            style={{ animationDelay: "0.22s", margin: "0 auto" }}
          >
            Alle Felltypen willkommen – natürliche, gepflegte Schnitte mit Erfahrung für schwierige
            und sensible Tiere.
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
            {ZUSATZ_GROUPS.map((group) => (
              <div key={group.title} className="leistungen-cat__subgroup">
                <p className="leistungen-cat__subgroup-title">{group.title}</p>
                <ul className="leistungen-cat__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
