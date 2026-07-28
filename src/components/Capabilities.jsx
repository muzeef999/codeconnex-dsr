const capabilities = [
  ['25+', 'Years of synthetic expertise'],
  ['500+', 'Fine chemical compounds'],
  ['100s', 'Kilos scale-up capacity'],
  ['Global', 'Pharma & chemical partners'],
];

const services = [
  [
    'Custom Synthesis',
    'Small to large-scale synthesis of non-commercially available compounds, tailored to your exact specification and delivery timeline.',
    true,
  ],
  ['Process R&D & Scale-Up', '', false],
  ['Medicinal Chemistry', '', false],
  ['Contract R&D', '', false],
];

export default function Capabilities() {
  return `
    <section id="capabilities" class="capabilities-section">
      <div class="section-inner capabilities-grid">
        <div class="capabilities-copy">
          <p class="eyebrow dark"><span></span> Capabilities</p>
          <h2>Scale-up without compromising purity.</h2>
          <p>
            Innovative, cost-effective synthetic routes take compounds from the
            bench to commercial manufacturing - backed by process development,
            validation and DMF filing.
          </p>
          <div class="capability-stats">
            ${capabilities
              .map(
                ([value, label]) => `
                  <article>
                    <strong>${value}</strong>
                    <span>${label}</span>
                  </article>
                `,
              )
              .join('')}
          </div>
        </div>

        <aside class="capabilities-image" aria-label="Research to several hundred kilos">
          <div>
            <span>Process R&D & Scale-Up</span>
            <strong>Research to several hundred kilos.</strong>
          </div>
        </aside>
      </div>
    </section>

    <section id="services" class="services-section">
      <div class="section-inner services-grid">
        <div>
          <p class="eyebrow"><span></span> What We Do</p>
          <h2>Services engineered around your programme.</h2>
          <p>
            From a single non-commercial compound to validated multi-kilo supply
            - we plug into your pipeline at any stage.
          </p>
        </div>

        <div class="service-accordion">
          ${services
            .map(
              ([title, text, open], index) => `
                <article class="${open ? 'is-open' : ''}">
                  <span>${String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>${title}</h3>
                    ${text ? `<p>${text}</p>` : ''}
                  </div>
                  <button type="button" aria-label="${open ? 'Collapse' : 'Expand'} ${title}">${open ? '&times;' : '+'}</button>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}
