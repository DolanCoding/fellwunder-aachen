import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="section about">
      <div className="section__number">01</div>
      <div className="section__inner">
        <div className="about__grid">
          {/* Text column */}
          <div className="about__text">
            <p className="section__label animate" style={{ animationDelay: "0.05s" }}>
              Über mich
            </p>
            <h2 className="section__title animate" style={{ animationDelay: "0.15s" }}>
              Hey, ich bin Michelle
            </h2>
            <div className="gold-line animate" style={{ animationDelay: "0.2s" }} />
            <p className="section__body animate" style={{ animationDelay: "0.25s" }}>
              In Aachen geboren und aufgewachsen, arbeite ich als Hundefriseurin mit ganz viel Herz
              für Tiere. Mit Fellwunder &amp; Co. in Aachen-Oberforstbach habe ich mir meinen Traum
              erfüllt: einen Ort zu schaffen, an dem sich Hunde und Katzen rundum wohlfühlen können.
            </p>
            <p
              className="section__body animate"
              style={{ animationDelay: "0.32s", marginTop: "1rem" }}
            >
              Als Hundebesitzerin seit über 10 Jahren und mit mehr als 5 Jahren Erfahrung in der
              Arbeit mit Hunden und anderen Tieren bringe ich viel Verständnis, Geduld und
              Einfühlungsvermögen mit. Besonders am Herzen liegt mir die Pflege von stark verfilztem
              Fell. Es ist jedes Mal schön zu sehen, wie erleichtert und zufrieden die Tiere danach
              sind.
            </p>
          </div>

          {/* Image column */}
          <div className="about__image-wrap animate" style={{ animationDelay: "0.3s" }}>
            <img className="about__image" src="/Michelle.png" alt="Michelle" aria-hidden="true" />
            <div className="about__image-frame" />
          </div>
        </div>
      </div>
    </section>
  );
}
