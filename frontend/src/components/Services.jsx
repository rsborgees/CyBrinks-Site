import { services } from "../content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import "./Services.css";

export default function Services() {
  return (
    <section id="servicos" className="services">
      <div className="container">
        <Reveal as="div" className="services__intro">
          <h2 className="section-heading">{services.heading}</h2>
          <p className="section-lead">{services.lead}</p>
        </Reveal>

        <div className="services__groups">
          {services.groups.map((group, index) => (
            <Reveal as="article" key={group.key} delay={index * 80} className="services__group">
              <div className="services__group-header">
                <Icon name={group.icon} size={28} className="services__group-icon" />
                <h3>{group.title}</h3>
              </div>

              <ul className="services__list">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <span className="services__list-title">{item.title}</span>
                    <span className="services__list-desc">{item.description}</span>
                  </li>
                ))}
              </ul>

              {group.note && <p className="services__note">{group.note}</p>}
              {group.highlight && (
                <p className="services__highlight">{group.highlight}</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
