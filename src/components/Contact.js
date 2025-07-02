import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      {/* Contact Info */}
      <div className="text-center mb-5">
        <p>
          <FaEnvelope className="me-2 text-primary" />
          <a href="mailto:nobuhlentshangase21@gmail.com">nobuhlentshangase21@gmail.com</a>
        </p>
        <p>
          <FaLinkedin className="me-2 text-primary" />
          <a
            href="https://www.linkedin.com/in/nobuhle-ntshangase"
            target="_blank"
            rel="noreferrer"
          >
            Nobuhle Ntshangase
          </a>
        </p>
        <p>
          <FaGithub className="me-2 text-dark" />
          <a
            href="https://github.com/Nobuhle01"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
        </p>
        <p>
          <FaPhoneAlt className="me-2 text-success" />
          071 574 2831 (Primary)
        </p>
        <p>
          <FaPhoneAlt className="me-2 text-muted" />
          075 198 3022 (Alternative)
        </p>
      </div>
    </section>
  );
}

export default Contact;
