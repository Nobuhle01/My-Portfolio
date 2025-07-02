import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Netflix Clone',
      description: 'A responsive Netflix homepage clone with HTML, CSS, and Bootstrap.',
      branches: [
        {
          name: 'Netflix-home-page',
          codeLink: 'https://github.com/Nobuhle01/Mini-projects/tree/Netflix-home-page',
        },
      ],
    },
    {
      title: 'Weather App',
      description: 'A weather forecast app using OpenWeather API and JavaScript.',
      branches: [
        {
          name: 'Weather-App',
          codeLink: 'https://github.com/Nobuhle01/Mini-projects/tree/Weather-App',
        },
      ],
    },
    {
      title: 'Women’s Clinic Website',
      description: 'A full frontend Angular website for a Women’s Clinic.',
      branches: [
        {
          name: 'ClinicCare',
          codeLink: 'https://github.com/Nobuhle01/Women-s-Clinic/tree/ClinicCare',
        },
        {
          name: 'main',
          codeLink: 'https://github.com/Nobuhle01/Women-s-Clinic/tree/main',
        },
      ],
    },
  ];

  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-5">Projects</h2>
      <div className="row">
        {projectList.map((project, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="mt-3">
                  {project.branches.map((branch, idx) => (
                    <a
                      key={idx}
                      href={branch.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-secondary btn-sm me-2 mb-2"
                    >
                      View <strong>{branch.name}</strong> Branch
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;