import React from 'react';

function Skills() {
  return (
    <section className="container py-5" id="skills">
      <h2 className="text-center mb-4">Skills / Tech Stack</h2>

      <div className="row">
        {/* Frontend */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Frontend</h5>
              <p className="card-text">HTML5, CSS3, JavaScript, TypeScript, Angular, React</p>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Backend</h5>
              <p className="card-text">Node.js, Express.js, REST APIs(SpringBoot)</p>
            </div>
          </div>
        </div>

        {/* Database */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Database</h5>
              <p className="card-text">MongoDB, MySQL</p>
            </div>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Tools & Platforms</h5>
              <p className="card-text">Git, GitHub, VSCode, Figma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
