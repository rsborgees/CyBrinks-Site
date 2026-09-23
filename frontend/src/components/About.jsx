import { about } from "../content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import "./About.css";

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="container about__grid">
        <Reveal as="div" className="about__intro">
          <p className="eyebrow">Sobre a Cybrinks</p>
          <h2 className="section-heading">{about.heading}</h2>
          <p className="about__lead prose">{about.lead}</p>
        </Reveal>

        <Reveal as="div" delay={80} className="about__mission">
          <h3>Missão</h3>
          <p className="prose">{about.mission}</p>

          <ul className="about__diff">
            {about.differentiators.map((item) => (
              <li key={item}>
                <Icon name="check" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
