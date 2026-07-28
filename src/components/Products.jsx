const products = [
  'Fine chemicals',
  'Building blocks',
  'Advanced intermediates',
  'Reference compounds',
  'Custom libraries',
  'Specialty reagents',
];

export default function Products() {
  return `
    <section id="products" class="products-section">
      <div class="section-inner products-heading">
        <div>
          <p class="eyebrow dark"><span></span> Product Categories</p>
          <h2>Building blocks & advanced intermediates.</h2>
        </div>
        <a href="#contact">Request full catalogue <span aria-hidden="true">&nearr;</span></a>
      </div>
      <div class="section-inner product-grid">
        ${products
          .map(
            (product, index) => `
              <article class="product-card">
                <span>${String(index + 1).padStart(2, '0')}</span>
                <h3>${product}</h3>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}
