import { pricing } from "../content";
import Reveal from "./Reveal";
import "./Pricing.css";

export default function Pricing() {
  return (
    <section id="planos" className="pricing">
      <div className="container">
        <Reveal as="div" className="pricing__intro">
          <h2 className="section-heading">{pricing.heading}</h2>
          <p className="section-lead">{pricing.lead}</p>
        </Reveal>

        <div className="pricing__grid">
          {pricing.plans.map((plan, index) => (
            <Reveal as="article" key={plan.title} delay={index * 70} className="pricing__card">
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
