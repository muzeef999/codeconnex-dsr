export default function Hero() {
  return `
    <section id="top" class="hero">
      <div class="hero-copy">
        <p class="eyebrow"><span></span> Organic Fine Chemicals - Hyderabad</p>
        <h1>Fine chemistry,<br />built for<br /><em>discovery.</em></h1>
        <p class="hero-text">
          DSR Pharmachem Private Limited manufactures high-purity building blocks,
          advanced intermediates and custom-synthesised compounds for the global pharma
          and chemical industries.
        </p>
        <div class="hero-actions">
          <a class="btn btn-red" href="#products">Explore Products <span aria-hidden="true">&searr;</span></a>
          <a class="btn btn-ghost" href="#contact">Request Quote</a>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="molecule molecule-one"></div>
        <div class="molecule molecule-two"></div>
        <div class="molecule molecule-three"></div>
      </div>
    </section>
  `;
}
