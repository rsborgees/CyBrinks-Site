import { hero } from "../content";
import Icon from "./Icon";
import HeroBackground from "./HeroBackground";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <HeroBackground />

      <div className="container hero__inner">
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

        <p className="hero__strapline">{hero.strapline}</p>
      </div>
    </section>
  );
}
