import { methodology } from "../content";
import Reveal from "./Reveal";
import "./Methodology.css";

export default function Methodology() {
  return (
    <section id="metodologia" className="methodology">
      <div className="container">
        <Reveal as="div" className="methodology__intro">
          <h2 className="section-heading">{methodology.heading}</h2>
          <p className="section-lead">{methodology.lead}</p>
        </Reveal>

        <ol className="methodology__timeline">
          {methodology.steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 70}
              className="methodology__step"
            >
              <span className="methodology__index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
