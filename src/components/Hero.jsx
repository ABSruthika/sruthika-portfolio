
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">
          HELLO, I'M
        </p>

        <h1>Sruthika A B</h1>

        <h2>
          Java Backend Developer
        </h2>

        <p className="hero-description">
          I develop backend applications using Java,
          Spring Boot, REST APIs, and MySQL, with a
          focus on secure authentication, clean code,
          and reliable application design.
        </p>

        <div className="hero-buttons">
          <a
            href="#projects"
            className="btn btn-primary"
          >
            Explore My Projects
          </a>

          <a
            href="/resume/SRUTHIKA_A_B_RESUME_.pdf"
            download
            className="btn btn-secondary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
