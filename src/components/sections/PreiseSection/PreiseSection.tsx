import "./PreiseSection.css";

export default function PreiseSection() {
  return (
    <section className="section preise">
      <div className="section__inner">
        <div className="preise__header">
          <p className="section__label animate" style={{ animationDelay: "0.05s" }}>
            Preise
          </p>
          <h2 className="section__title animate" style={{ animationDelay: "0.15s" }}>
            Individuelle Preisgestaltung
          </h2>
        </div>

        <div className="preise__content animate" style={{ animationDelay: "0.3s" }}>
          <div className="preise__card">
            <h3 className="preise__card-title"><i className="fas fa-euro-sign" /> Preisabsprache</h3>
            <p className="preise__card-text">
              Die Preise werden individuell festgelegt, da sie vom Zustand des Fells, der Mitarbeit
              des Tieres und dem zeitlichen Aufwand abhängen. Details werden vorab persönlich
              besprochen.
            </p>
          </div>

          <div className="preise__card">
            <h3 className="preise__card-title"><i className="fas fa-phone" /> Kontakt via WhatsApp</h3>
            <p className="preise__card-text">
              Gerne besprechen wir Ihren individuellen Fall und die damit verbundenen Kosten über
              WhatsApp. So können wir schnell und unkompliziert klären, was Ihr Hund braucht und was
              das kostet.
            </p>
            <div className="preise__contact">
              <a
                href="https://wa.me/4915150100352"
                className="preise__whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp" /> WhatsApp kontaktieren
              </a>
              <p className="preise__phone">Telefon: 0151 / 50100352</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
