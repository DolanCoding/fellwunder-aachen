const ITEMS = [
  { emoji: '🐩', caption: 'Pudel-Styling' },
  { emoji: '🐕', caption: 'Vollpflege' },
  { emoji: '🦮', caption: 'Golden Retriever' },
  { emoji: '🐶', caption: 'Welpen-Erstpflege' },
  { emoji: '🐕‍🦺', caption: 'Labrador' },
]

import './GalerieSection.css'

export default function GalerieSection() {
  return (
    <section className="section galerie">
      <div className="galerie__inner">

        <div className="galerie__header">
          <p className="section__label animate" style={{ animationDelay: '0.05s' }}>
            Galerie
          </p>
          <h2 className="section__title animate" style={{ animationDelay: '0.15s', marginBottom: 0 }}>
            Unsere Arbeit
          </h2>
        </div>

        <div className="galerie__grid animate" style={{ animationDelay: '0.25s' }}>
          {ITEMS.map((item, i) => (
            <div className="gallery-item" key={i}>
              <div className="gallery-item__bg">{item.emoji}</div>
              <div className="gallery-item__overlay">
                <span className="gallery-item__caption">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
