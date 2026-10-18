function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-container">
        <p className="section-label">SKILLS</p>

        <h2>Technologies I work with.</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Backend Development</h3>
            <p>
              Java, Spring Boot, REST APIs,
              Spring Security, Spring Data JPA,
              Hibernate
            </p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>
              MySQL, SQL, Database Design,
              CRUD Operations
            </p>
          </div>

          <div className="skill-card">
            <h3>Frontend Development</h3>
            <p>
              React, JavaScript, HTML, CSS
            </p>
          </div>

          <div className="skill-card">
            <h3>Testing & API Tools</h3>
            <p>
              JUnit, Mockito, Postman
            </p>
          </div>

          <div className="skill-card">
            <h3>Development Tools</h3>
            <p>
              Git, GitHub, Maven, VS Code
            </p>
          </div>

          <div className="skill-card">
            <h3>Additional Technologies</h3>
            <p>
              Appian, UiPath
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
