export default function Header() {
  return `
    <header class="site-header">
      <a class="brand" href="#top" aria-label="DSR Pharmachem home">
        <img src="./favicon.png" alt="" />
        <span>DSR Pharmachem</span>
      </a>
      <nav class="site-nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#services">Services</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#contact">Contact</a>
      </nav>
      <a class="btn btn-red" href="#contact">Enquire <span aria-hidden="true">&nearr;</span></a>
    </header>
  `;
}
