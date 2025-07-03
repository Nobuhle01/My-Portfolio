import React from 'react';
import { FaDownload, FaFilePdf } from 'react-icons/fa';

function Resume() {
  return (
    <section id="resume" className="container py-5 text-center">
      <h2 className="mb-4">My Resume</h2>

      <div className="mb-3">
        <a
          href="/Nobuhle-Ntshangase-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary me-2"
        >
          <FaFilePdf className="me-2" />
          View CV
        </a>

        <a
          href="/Nobuhle-Ntshangase-CV.pdf"
          download="Nobuhle-Ntshangase-CV.pdf"
          className="btn btn-primary"
        >
          <FaDownload className="me-2" />
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Resume;
