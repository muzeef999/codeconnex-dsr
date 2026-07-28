const points = [
  {
    title: 'Molecules, engineered with intent.',
    text: 'DSR Pharmachem is an R&D-driven manufacturer of organic fine chemicals, building blocks and advanced intermediates for the global pharmaceutical and chemical industries. Every compound leaves our labs with purity you can build a drug on.',
  },
  {
    title: 'From milligram to multi-kilo.',
    text: 'We bridge discovery and commercial supply, synthesising non-commercial compounds at research scale, then scaling proven routes to hundreds of kilos with rigorous process control and documentation.',
  },
  {
    title: 'Chemistry as a partnership.',
    text: 'Custom synthesis, contract R&D and medicinal chemistry delivered as a collaboration. Your programme timelines, your specifications, our synthetic strategy.',
  },
];

export default function About() {
  return `
    <section id="about" class="about-section">
      <div class="marquee" aria-hidden="true">
        <div>
          <span>Building Blocks</span><b>&diams;</b><span>Custom Synthesis</span><b>&diams;</b>
          <span>Process R&D</span><b>&diams;</b><span>Medicinal Chemistry</span><b>&diams;</b>
          <span>Contract R&D</span><b>&diams;</b>
        </div>
      </div>

      <div class="section-inner about-intro">
        <p class="eyebrow dark"><span></span> Who We Are</p>
        <h2>An R&D house for the molecules medicine is built on.</h2>
      </div>

      <div class="section-inner about-grid">
        <div class="about-list">
          ${points
            .map(
              (point, index) => `
                <article class="about-point">
                  <strong>${String(index + 1).padStart(2, '0')}</strong>
                  <div>
                    <h3>${point.title}</h3>
                    <p>${point.text}</p>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
        <aside class="lab-card">
          <div class="lab-photo" aria-hidden="true"></div>
          <div class="location-card">
            <span>Located At</span>
            <strong>Hyderabad - Opposite T-HUB</strong>
          </div>
        </aside>
      </div>
    </section>
  `;
}
