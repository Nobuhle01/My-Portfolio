import React, { useState } from 'react';
import profileImg from '../assets/Profile.JPG';

function Hero() {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="bg-white text-center p-5 rounded shadow-sm my-5">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center">
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-circle mb-4 mb-md-0"
            onClick={handleImageClick}
            style={{
              width: '180px',
              height: '180px',
              objectFit: 'cover',
              marginRight: '2rem',
              cursor: 'pointer',
              border: '4px solid var(--color-primary)',
              transition: 'transform 0.2s ease',
            }}
          />
          <div>
            <h1>Hello, I'm Nobuhle Ntshangase</h1>
            <h4>Full Stack Software / Web Developer</h4>
            <p className="mt-3">
              Full Stack Software & Web Developer skilled in building modern, responsive and user-focused web applications using HTML5, CSS3, JavaScript, Angular, React, Node.js, Express.js and MongoDB. Passionate about clean code, problem-solving, and delivering impactful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Modal for Enlarged Image */}
      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          onClick={handleClose}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-transparent border-0 text-center">
              <img
                src={profileImg}
                alt="Profile Enlarged"
                className="img-fluid rounded"
                style={{ maxHeight: '90vh' }}
              />
              <button
                className="btn btn-light mt-3"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
