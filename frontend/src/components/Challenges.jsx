import { challenges } from "../content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import "./Challenges.css";

export default function Challenges() {
  return (
    <section className="challenges">
      <div className="container">
        <Reveal as="div" className="challenges__intro">
          <h2 className="section-heading">{challenges.heading}</h2>
          <p className="section-lead">{challenges.lead}</p>
        </Reveal>

        <div className="challenges__grid">
          {challenges.items.map((item, index) => (
            <Reveal
              as="article"
              key={item.title}
              delay={index * 60}
              className="challenges__card"
            >
              <Icon name={item.icon} size={26} className="challenges__icon" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
