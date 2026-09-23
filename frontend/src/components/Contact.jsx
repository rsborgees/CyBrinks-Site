import { contact, ctaFinal } from "../content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact__backdrop" aria-hidden="true" />
      <div className="container">
        <Reveal as="div" className="contact__inner">
          <h2 className="section-heading">{ctaFinal.heading}</h2>
          <p className="section-lead">{ctaFinal.lead}</p>

          <div className="contact__actions">
            <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              <Icon name="whatsapp" size={18} />
              WhatsApp
            </a>
            <a href={`mailto:${contact.email}`} className="btn btn-outline">
              <Icon name="mail" size={18} />
              {contact.email}
            </a>
            <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
              <Icon name="linkedin" size={18} />
              LinkedIn
            </a>
          </div>

          <p className="contact__signature">
            {contact.name} · {contact.phoneDisplay}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
