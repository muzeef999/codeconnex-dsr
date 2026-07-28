export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="./favicon.png" alt="DSR Pharmachem" />
            <p>
              DSR Pharmachem Private Limited - a research-driven manufacturer of
              organic fine chemicals, building blocks and advanced intermediates
              for the global pharmaceutical and chemical industries.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <h2>Navigate</h2>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#services">Services</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-contact">
            <h2>Contact</h2>
            <a href="tel:+919144686868">+91 9144 68 68 68</a>
            <a href="mailto:info@dsrpharmachem.com">info@dsrpharmachem.com <span aria-hidden="true">↗</span></a>
            <p>
              P.No. 30/C, Sy. No. 83/1, Orbit By Auro Realty,<br />
              Tower 1, 1st Floor, Opposite T-HUB, Hitech<br />
              City, Hyderabad - 500081
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} DSR Pharmachem Private Limited. All rights reserved.</p>
          <p>Hyderabad&nbsp;&nbsp;-&nbsp;&nbsp;Telangana&nbsp;&nbsp;-&nbsp;&nbsp;India</p>
        </div>
      </div>
      <div className="footer-watermark" aria-hidden="true">DSR PHARM</div>
    </footer>
  );
}
