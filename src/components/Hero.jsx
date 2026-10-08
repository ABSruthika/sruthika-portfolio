function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>

        <h1>Sruthika A B</h1>

        <h2>Java Backend Developer</h2>

        <p className="hero-description">
          I build backend applications using Java, Spring Boot,
          REST APIs and MySQL, with a focus on clean and
          maintainable software.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>

          <a
            href="/resume/SRUTHIKA_A_B_RESUME_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View Resume
          </a>

          <a
            href="/resume/SRUTHIKA_A_B_RESUME_.pdf"
            download
            className="btn btn-secondary"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/ABSruthika"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sruthika-balamurugan1015/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;