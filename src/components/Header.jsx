export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="DSR Pharmachem home">
        <img src="./favicon.png" alt="" />
        <span>DSR Pharmachem</span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#services">Services</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="btn btn-red" href="#contact">
        Enquire <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
