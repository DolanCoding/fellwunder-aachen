import "./KontaktSection.css";

export default function KontaktSection() {
  return (
    <section className="section kontakt">
      <div className="section__inner">
        <p className="section__label animate" style={{ animationDelay: "0.05s" }}>
          Kontakt
        </p>
        <h2 className="section__title animate" style={{ animationDelay: "0.15s" }}>
          Jetzt Termin anfragen
        </h2>

        <div className="kontakt__content animate" style={{ animationDelay: "0.25s" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              width: "100%",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {/* 2x2 Grid: Phone, Email, Opening Hours, Address */}
            <div
              className="kontakt__grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
            >
              <div className="kontakt__card">
                <div className="kontakt__icon">
                  <i className="fab fa-whatsapp" />
                </div>
                <div className="kontakt__label">Telefon / WhatsApp</div>
                <a href="tel:+4915776730003" className="kontakt__link">
                  01577 / 6730003
                </a>
              </div>

              <div className="kontakt__card">
                <div className="kontakt__icon">📧</div>
                <div className="kontakt__label">Email</div>
                <a href="mailto:Info@fellwunder-aachen.de" className="kontakt__link">
                  Info@fellwunder-aachen.de
                </a>
              </div>

              <div className="kontakt__card">
                <div className="kontakt__icon">🕐</div>
                <div className="kontakt__label">Öffnungszeiten</div>
                <div className="kontakt__text">
                  Mo–Fr: 10:00–19:00 Uhr
                  <br />
                  Sa: 10:00-16:00 Uhr
                  <span
                    style={{
                      fontSize: "0.85rem",
                      opacity: 0.8,
                      marginTop: "0.5rem",
                      display: "block",
                    }}
                  >
                    Termine nur nach Vereinbarung
                  </span>
                </div>
              </div>

              <div className="kontakt__card" style={{ textAlign: "center" }}>
                <div className="kontakt__icon">📍</div>
                <div className="kontakt__label">Adresse</div>
                <div className="kontakt__text">
                  Fellwunder <br />
                  Oberforstbacherstr. 354
                  <br />
                  52076 Aachen
                </div>
              </div>
            </div>

            {/* Row 3: Google Maps (large) */}
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                height: "500px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                width: "100%",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2589.8358937276!2d6.0857!3d50.8347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf223e8f3c8f3f%3A0x8f3c8f3f8f3c8f3f!2sOberforstbacherstr.%20354%2C%2052076%20Aachen!5e0!3m2!1sde!2sde!4v1234567890"
              />
            </div>
          </div>
        </div>

        <p className="kontakt__note animate" style={{ animationDelay: "0.35s" }}>
          Gerne über WhatsApp oder Telefon erreichbar
        </p>
      </div>
    </section>
  );
}
