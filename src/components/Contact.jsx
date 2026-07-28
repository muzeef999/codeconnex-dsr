export default function Contact() {
  return `
    <section id="contact" class="contact-section">
      <div class="section-inner contact-grid">
        <div class="contact-copy">
          <p class="eyebrow dark"><span></span> Get In Touch</p>
          <h2>Let's discuss your molecule.</h2>
          <p>
            Send us your specifications, quantities and timelines. Our chemistry
            team responds to every enquiry personally.
          </p>

          <div class="contact-methods">
            <a href="tel:+919144686868">
              <span aria-hidden="true">&#9742;</span>
              <small>Phone</small>
              <strong>+91 9144 68 68 68</strong>
            </a>
            <a href="mailto:info@dsrpharmachem.com">
              <span aria-hidden="true">&#9993;</span>
              <small>Email</small>
              <strong>info@dsrpharmachem.com</strong>
            </a>
            <div>
              <span aria-hidden="true">&#8982;</span>
              <small>Registered Office</small>
              <strong>
                P.No. 30/C, Sy. No. 83/1, Orbit By Auro Realty, Tower 1,
                1st Floor, Opposite T-HUB, Hitech City, Hyderabad - 500081
              </strong>
            </div>
          </div>
        </div>

        <form class="contact-form">
          <label>
            <span>Full Name *</span>
            <input type="text" name="name" placeholder="Jane Doe" />
          </label>
          <label>
            <span>Email *</span>
            <input type="email" name="email" placeholder="jane@company.com" />
          </label>
          <label>
            <span>Phone</span>
            <input type="tel" name="phone" placeholder="+91 ..." />
          </label>
          <label>
            <span>Company</span>
            <input type="text" name="company" placeholder="Company / Institute" />
          </label>
          <label class="is-wide">
            <span>Area Of Interest</span>
            <select name="interest">
              <option>Select a service</option>
              <option>Custom Synthesis</option>
              <option>Process R&D & Scale-Up</option>
              <option>Medicinal Chemistry</option>
              <option>Contract R&D</option>
            </select>
          </label>
          <label class="is-wide">
            <span>Message *</span>
            <textarea name="message" placeholder="Tell us about the compound, quantity and timeline..."></textarea>
          </label>
          <button class="btn btn-red" type="submit">Send Enquiry <span aria-hidden="true">&#10148;</span></button>
        </form>
      </div>
    </section>
  `;
}
