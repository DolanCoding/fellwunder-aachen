const FACTS = [
  { emoji: '🐾', label: 'Goldendoodle' },
  { emoji: '🎂', label: '4 Jahre' },
  { emoji: '⚖️', label: '22 kg' },
  { emoji: '❤️', label: 'Wasserliebhaber' },
  { emoji: '🏆', label: 'Kuschel-Experte' },
]

import './MeinHundSection.css'

export default function MeinHundSection() {
  return (
    <section className="section mein-hund">
      <div className="section__inner">
        <div className="mein-hund__grid">

          {/* Left half — portrait */}
          <div className="dog-portrait animate" style={{ animationDelay: '0.1s' }}>
            <div className="dog-portrait__ring-2" />
            <div className="dog-portrait__ring" />
            <div className="dog-portrait__img" aria-hidden="true">🐶</div>
          </div>

          {/* Right half — info */}
          <div className="mein-hund__info">
            <p className="section__label animate" style={{ animationDelay: '0.05s' }}>
              Mein Hund
            </p>
            <h2 className="dog-name animate" style={{ animationDelay: '0.15s' }}>
              Balu
            </h2>
            <p className="dog-breed animate" style={{ animationDelay: '0.2s' }}>
              Goldendoodle · Salon-Maskottchen
            </p>
            <div className="gold-line animate" style={{ animationDelay: '0.25s' }} />
            <p className="dog-bio animate" style={{ animationDelay: '0.3s' }}>
              Balu ist täglich im Salon dabei und sorgt mit seiner herzlichen Art
              für eine entspannte Atmosphäre. Er liebt es, neue Hunde kennenzulernen
              und macht jeden Besuch gleich ein bisschen angenehmer — besonders für
              nervöse Vierbeiner.
            </p>
            <div className="dog-facts animate" style={{ animationDelay: '0.38s' }}>
              {FACTS.map(f => (
                <div className="dog-fact" key={f.label}>
                  <span>{f.emoji}</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
