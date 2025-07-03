import React from 'react';
import { FaMusic, FaLaptopCode, FaBookOpen, FaQuoteLeft, FaHeart } from 'react-icons/fa';

function Personal() {
  return (
    <section className="bg-light py-5" id="personal">
      <div className="container">
        <h2 className="text-center mb-4">About Me Beyond Code</h2>

        <div className="row text-center mb-5">
          <div className="col-md-4">
            <FaMusic className="fs-1 text-primary mb-3" />
            <h5>Hobbies</h5>
            <p>Playing Netball, listening to music, exploring tech blogs, sketching UI ideas.</p>
          </div>
          <div className="col-md-4">
            <FaLaptopCode className="fs-1 text-success mb-3" />
            <h5>Favorite Tools</h5>
            <p>VSCode, Figma, GitHub, Universe.io, Netlify</p>
          </div>
          <div className="col-md-4">
            <FaBookOpen className="fs-1 text-warning mb-3" />
            <h5>Fun Fact</h5>
            <p>I code like I play netball — fast, focused, and with rhythm from my favorite music tracks!</p>
          </div>
        </div>

        <div className="text-center">
          <FaQuoteLeft className="fs-3 text-secondary me-2" />
          <em>“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.”</em>
          <br />
          <span className="text-muted">— Pelé</span>
        </div>
      </div>
    </section>
  );
}

export default Personal;
