function Projects() {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div>
        <h3>Student Management System</h3>

        <p>
          A full-stack student management application built with
          Spring Boot, React and MySQL.
        </p>

        <h4>Tech Stack</h4>

        <p>
          Java, Spring Boot, Spring Security, JWT, React,
          MySQL, JUnit, Git
        </p>

        <h4>Features</h4>

        <ul>
          <li>Student CRUD operations</li>
          <li>JWT authentication</li>
          <li>Role-based authorization</li>
          <li>Input validation</li>
          <li>REST APIs</li>
          <li>Unit and security testing</li>
        </ul>

        <div>
          <a
            href="https://github.com/ABSruthika"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;