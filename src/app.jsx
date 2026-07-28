import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Products from './components/Products.jsx';
import Capabilities from './components/Capabilities.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const root = document.getElementById('root');

if (root) {
  root.innerHTML = `
    <div class="page-shell">
      ${Header()}
      <main>
        ${Hero()}
        ${About()}
        ${Products()}
        ${Capabilities()}
        ${Contact()}
      </main>
      ${Footer()}
    </div>
  `;
}
