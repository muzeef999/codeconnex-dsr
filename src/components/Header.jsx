import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
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
