import { hero } from "../content";
import Icon from "./Icon";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="var(--border)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="800" height="600" fill="url(#grid)" />
          <g stroke="var(--primary)" strokeWidth="1" opacity="0.35">
            <line x1="120" y1="90" x2="320" y2="180" />
            <line x1="320" y1="180" x2="280" y2="380" />
            <line x1="320" y1="180" x2="560" y2="140" />
            <line x1="560" y1="140" x2="700" y2="300" />
            <line x1="280" y1="380" x2="520" y2="440" />
          </g>
          <g fill="var(--primary)">
            <circle cx="120" cy="90" r="4" />
            <circle cx="320" cy="180" r="5" />
            <circle cx="280" cy="380" r="4" />
            <circle cx="560" cy="140" r="4" />
            <circle cx="700" cy="300" r="5" />
            <circle cx="520" cy="440" r="4" />
          </g>
        </svg>
      </div>

      <div className="container hero__content">
        <p className="eyebrow">
          <Icon name="shield" size={16} />
          {hero.eyebrow}
        </p>
        <h1 className="hero__headline">{hero.headline}</h1>
        <p className="hero__sub prose">{hero.subheadline}</p>

        <ul className="hero__tags">
          {hero.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="hero__actions">
          <a href={hero.ctaPrimary.href} className="btn btn-primary">
            {hero.ctaPrimary.label}
            <Icon name="arrow-right" size={18} />
          </a>
          <a href={hero.ctaSecondary.href} className="btn btn-outline">
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
