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
        </div>
      </div>
    </section>
  );
}

export default Hero;