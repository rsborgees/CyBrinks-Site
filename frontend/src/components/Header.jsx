import { useState } from "react";
import Icon from "./Icon";
import logo from "../assets/logo.webp";
import { contact, nav } from "../content";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container header__bar">
        <div className="header__brand-group">
          <a href="#top" className="header__brand" onClick={closeMenu}>
            <img src={logo} alt="Cybrinks Digital Trust" className="header__logo" />
          </a>
          <span className="header__status" aria-hidden="true">
            <span className="header__status-dot" />
            Monitoramento ativo
          </span>
        </div>

        <nav className={`header__nav${isOpen ? " is-open" : ""}`} aria-label="Navegação principal">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary header__cta"
            onClick={closeMenu}
          >
            Falar no WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <Icon name={isOpen ? "x" : "menu"} />
        </button>
      </div>
    </header>
  );
}
