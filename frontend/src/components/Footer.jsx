import { brand, contact, nav } from "../content";
import logo from "../assets/logo.webp";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a href="#top" className="footer__brand">
            <img src={logo} alt={brand.fullName} className="footer__logo" />
          </a>
          <p className="footer__tagline">Segurança que protege o negócio.</p>
        </div>

        <nav aria-label="Links do rodapé">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            {contact.phoneDisplay}
          </a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {brand.fullName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
