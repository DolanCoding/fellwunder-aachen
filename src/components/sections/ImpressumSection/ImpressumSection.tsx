import "./ImpressumSection.css";

export default function ImpressumSection() {
  return (
    <section className="section impressum">
      <div className="section__inner">
        <h1 className="section__title animate" style={{ animationDelay: "0.15s" }}>
          Impressum
        </h1>

        <div className="impressum__content animate" style={{ animationDelay: "0.25s" }}>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>Fellwunder & Co.</strong>
            <br />
            Michelle Rodriguez
            <br />
            Oberforstbacherstr. 354
            <br />
            52076 Aachen
            <br />
            Deutschland
          </p>

          <h2>Kontaktinformationen</h2>
          <p>
            <strong>Telefon:</strong> <a href="tel:+4915776730003">01577 / 6730003</a>
            <br />
            <strong>WhatsApp:</strong> <a href="tel:+4915776730003">01577 / 6730003</a>
          </p>

          <h2>Verantwortlich für den Inhalt</h2>
          <p>
            Michelle Rodriguez
            <br />
            Oberforstbacherstr. 354
            <br />
            52076 Aachen
          </p>

          <h2>Disclaimer</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
        </div>
      </div>
    </section>
  );
}
