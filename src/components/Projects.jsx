function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-container">
        <p className="section-label">PROJECTS</p>

        <h2>Things I've built.</h2>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-content">
              <p className="project-type">FULL-STACK APPLICATION</p>

              <h3>Student Management System</h3>

              <p className="project-description">
                A full-stack student management application built
                with Spring Boot, React and MySQL, featuring secure
                authentication and role-based authorization.
              </p>

              <div className="project-tech">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>JWT</span>
                <span>React</span>
                <span>MySQL</span>
              </div>

              <ul className="project-features">
                <li>Student CRUD operations</li>
                <li>JWT authentication</li>
                <li>Role-based authorization</li>
                <li>Input validation</li>
                <li>Unit and security testing</li>
              </ul>

              <div className="project-links">
                <a
                  href="https://github.com/ABSruthika"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;