import "./DatenschutzSection.css";

export default function DatenschutzSection() {
  return (
    <section className="section datenschutz">
      <div className="section__inner">
        <h1 className="section__title animate" style={{ animationDelay: "0.15s" }}>
          Datenschutz
        </h1>

        <div className="datenschutz__content animate" style={{ animationDelay: "0.25s" }}>
          <h2>1. Datenschutz auf einen Blick</h2>
          <p>
            Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung
            von personenbezogenen Daten (im Folgenden „Daten") auf dieser Website auf.
          </p>

          <h2>2. Allgemeine Hinweise</h2>
          <p>
            Die Betreiber dieser Website nehmen den Schutz Ihrer persönlichen Daten ernst. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
            Diese Erklärung hilft Ihnen zu verstehen, welche Daten wir sammeln und wofür wir sie
            nutzen.
          </p>

          <h2>3. Kontakt zum Datenschutzverantwortlichen</h2>
          <p>
            Sollten Sie Fragen zum Datenschutz haben, kontaktieren Sie uns bitte unter:
            <br />
            <strong>Fellwunder & Co.</strong>
            <br />
            <a href="tel:+4915776730003">01577 / 6730003</a>
            <br />
            Oberforstbacherstr. 354, 52076 Aachen
          </p>

          <h2>4. Erfassung von Daten auf dieser Website</h2>
          <h3>Wer ist verantwortlich für die Datenerfassung?</h3>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Webseitenbetreiber. Dessen
            Kontaktdaten entnehmen Sie dem Impressum dieser Website.
          </p>

          <h3>Wie erfassen wir Ihre Daten?</h3>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
            es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
            Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
            des Seitenzugriffs).
          </p>

          <h2>5. Google Maps</h2>
          <p>
            Diese Website nutzt Google Maps zur Anzeige von Kartenmaterial. Bei der Nutzung von
            Google Maps werden von Google auch Daten über die Nutzung der Kartenfunktionen durch
            Besucher erfasst, verarbeitet und genutzt. Weitere Informationen über die
            Datenverarbeitung durch Google erhalten Sie in der{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Datenschutzerklärung von Google
            </a>
            .
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>Sie haben das Recht:</p>
          <ul>
            <li>
              <strong>Auskunft:</strong> Sie können Auskunft über die zu Ihrer Person gespeicherten
              Daten verlangen.
            </li>
            <li>
              <strong>Berichtigung:</strong> Sie können die Berichtigung unrichtiger oder
              unvollständiger Daten verlangen.
            </li>
            <li>
              <strong>Löschung:</strong> Sie können die Löschung Ihrer Daten verlangen.
            </li>
            <li>
              <strong>Einschränkung:</strong> Sie können die Einschränkung der Verarbeitung
              verlangen.
            </li>
            <li>
              <strong>Datenportabilität:</strong> Sie können die Herausgabe Ihrer Daten in einem
              strukturierten, gängigen und maschinenlesbaren Format verlangen.
            </li>
            <li>
              <strong>Widerspruch:</strong> Sie können gegen die Verarbeitung Ihrer Daten
              Widerspruch einlegen.
            </li>
          </ul>

          <h2>7. Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie jederzeit den
            aktuellen gesetzlichen Anforderungen entspricht. Die Datenschutzerklärung wird
            regelmäßig überprüft und ggfs. aktualisiert.
          </p>

          <h2>8. Kontakt</h2>
          <p>
            Für weitere Fragen zum Datenschutz kontaktieren Sie uns bitte unter der im Impressum
            angegebenen Adresse oder Telefonnummer.
          </p>
        </div>
      </div>
    </section>
  );
}
