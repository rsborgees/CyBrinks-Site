import { caseStudy } from "../content";
import Reveal from "./Reveal";
import "./CaseStudy.css";

export default function CaseStudy() {
  return (
    <section id="cases" className="case">
      <div className="container case__grid">
        <Reveal as="div" className="case__info">
          <p className="eyebrow">{caseStudy.heading}</p>
          <h2 className="section-heading">{caseStudy.client}</h2>
          <p className="case__field">
            <strong>Desafio:</strong> {caseStudy.challenge}
          </p>
          <p className="case__field prose">
            <strong>Linha do tempo:</strong> {caseStudy.timeline}
          </p>
        </Reveal>

        <div className="case__metrics">
          {caseStudy.metrics.map((metric, index) => (
            <Reveal as="div" key={metric.label} delay={index * 80} className="case__metric">
              <span className="case__metric-value">{metric.value}</span>
              <span className="case__metric-label">{metric.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
