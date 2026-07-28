const products = [
  {
    category: 'Heterocyclic Building Blocks',
    title: 'Flavones & Isoflavones',
    text: 'High-purity flavone and isoflavone scaffolds for pharmaceutical discovery and nutraceutical research.',
  },
  {
    category: 'Heterocyclic Building Blocks',
    title: 'Coumarins & Chromones',
    text: 'Substituted coumarin and chromone derivatives engineered for fluorescence and API intermediates.',
  },
  {
    category: 'Advanced Intermediates',
    title: 'Oxazoles & Isoxazoles',
    text: 'Precision azole ring systems supplying critical intermediates for CNS and anti-infective programs.',
  },
  {
    category: 'Advanced Intermediates',
    title: 'Thiazoles',
    text: 'Functionalised thiazole cores delivered at research to multi-kilo commercial scale.',
  },
  {
    category: 'Aromatic & Heterocyclic',
    title: 'Quinolines & Indoles',
    text: 'Nitrogen heterocycles forming the backbone of modern small-molecule therapeutics.',
  },
  {
    category: 'Aromatic & Heterocyclic',
    title: 'Halogenated Aromatics',
    text: 'Selectively halogenated aromatic blocks enabling downstream cross-coupling chemistry.',
  },
  {
    category: 'Fine Chemicals',
    title: '1,2-Diamino Benzene Derivatives',
    text: 'Diamino and benzene derivatives for ligand design and coordination chemistry.',
  },
  {
    category: 'Fine Chemicals',
    title: 'Custom Organic Intermediates',
    text: 'Bespoke advanced organic intermediates synthesised to exact client specification.',
    featured: true,
  },
];

function FlaskIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 3h6" />
      <path d="M10 3v6.2L4.9 18a2 2 0 0 0 1.73 3h10.74a2 2 0 0 0 1.73-3L14 9.2V3" />
      <path d="M7.4 16h9.2" />
    </svg>
  );
}

export default function Products() {
  return (
    <section id="products" className="products-section">
      <div className="section-inner products-heading">
        <div>
          <p className="eyebrow dark"><span></span> Product Categories</p>
          <h2>Building blocks & advanced intermediates.</h2>
        </div>
        <a href="#contact">Request full catalogue <span aria-hidden="true">↗</span></a>
      </div>

      <div className="section-inner product-grid">
        {products.map((product, index) => (
          <article className={`product-card ${product.featured ? 'is-featured' : ''}`} key={product.title}>
            <div className="product-card-top">
              <span className="product-number">{String(index + 1).padStart(2, '0')}</span>
              <FlaskIcon />
            </div>
            <p className="product-category">{product.category}</p>
            <h3>{product.title}</h3>
            <p className="product-text">{product.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
