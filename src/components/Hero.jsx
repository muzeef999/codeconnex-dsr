import heroMolecule from '../assets/hero-molecule.jpeg';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span></span> Organic Fine Chemicals - Hyderabad
        </p>
        <h1>Fine chemistry,<br />built for<br /><em>discovery.</em></h1>
        <p className="hero-text">
          DSR Pharmachem Private Limited manufactures high-purity building blocks,
          advanced intermediates and custom-synthesised compounds for the global pharma
          and chemical industries.
        </p>
        <div className="hero-actions">
          <a className="btn btn-red" href="#products">
            Explore Products <span aria-hidden="true">↘</span>
          </a>
          <a className="btn btn-ghost" href="#contact">Request Quote</a>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <img src={heroMolecule} alt="" />
      </div>
    </section>
  );
}
