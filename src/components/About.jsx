import labCleanroom from '../assets/lab-cleanroom.jpeg';

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
  return (
    <section id="about" className="about-section">
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, groupIndex) => (
            <div className="marquee-group" key={groupIndex}>
              <span>Building Blocks</span><b>♦</b>
              <span>Custom Synthesis</span><b>♦</b>
              <span>Process R&D</span><b>♦</b>
              <span>Medicinal Chemistry</span><b>♦</b>
              <span>Contract R&D</span><b>♦</b>
            </div>
          ))}
        </div>
      </div>

      <div className="section-inner about-intro">
        <p className="eyebrow dark"><span></span> Who We Are</p>
        <h2>An R&D house for the molecules medicine is built on.</h2>
      </div>

      <div className="section-inner about-grid">
        <div className="about-list">
          {points.map((point, index) => (
            <article className="about-point" key={point.title}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            </article>
          ))}
        </div>
        <aside className="lab-card">
          <div className="lab-photo">
            <img src={labCleanroom} alt="Scientist handling a petri dish in a laboratory" />
          </div>
          <div className="location-card">
            <span>Located At</span>
            <strong>Hitech City, Hyderabad — Opposite T-HUB</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
