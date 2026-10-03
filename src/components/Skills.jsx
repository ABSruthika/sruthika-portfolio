function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-container">
        <p className="section-label">SKILLS</p>

        <h2>Technologies I work with.</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Backend</h3>
            <p>
              Java, Spring Boot, Spring Security,
              Spring Data JPA, Hibernate, REST APIs
            </p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MySQL, SQL</p>
          </div>

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML, CSS</p>
          </div>

          <div className="skill-card">
            <h3>Testing</h3>
            <p>JUnit, Mockito, Postman</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, GitHub, Maven, VS Code</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;