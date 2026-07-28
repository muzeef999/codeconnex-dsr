const products = [
  'Fine chemicals',
  'Building blocks',
  'Advanced intermediates',
  'Reference compounds',
  'Custom libraries',
  'Specialty reagents',
];

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
          <article className="product-card" key={product}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{product}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
