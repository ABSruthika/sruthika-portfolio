import { useState } from "react";

const projects = [
  {
    type: "FULL-STACK APPLICATION",
    title: "Student Management System",
    description:
      "A student management application built with Spring Boot, React, and MySQL, featuring secure authentication, role-based authorization, and student record management.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "React",
      "MySQL",
    ],

    features: [
      "Implemented student CRUD operations with JWT authentication and role-based access.",
      "Built REST APIs using Spring Boot with MySQL database integration.",
      "Added input validation and unit tests using JUnit and Mockito.",
    ],

    links: [
      {
        label: "GitHub",
        url: "https://github.com/ABSruthika/student-management",
      },
    ],
  },
  {
    type: "APPLICATION DEVELOPMENT",
    title: "Travel Booking Application",
    description:
      "An Appian application designed to streamline travel booking workflows, including traveller requests, bulk bookings, and email-triggered booking processes.",
    technologies: [
      "Appian",
      "SAIL",
      "Process Models",
      "Records",
    ],

    features: [
      "Designed traveller workflows and bulk travel booking processes.",
      "Developed interactive Appian UI screens for booking operations.",
      "Configured email-triggered booking flows and notification workflows.",
    ],

    links: [],
  },
  {
    type: "APPLICATION DEVELOPMENT",
    title: "Patient Management System",
    description:
      "An Appian application designed to support patient information management through structured intake, record viewing, and scheduling workflows.",
    technologies: [
      "Appian",
      "SAIL",
      "Process Models",
      "Records",
    ],

    features: [
      "Created patient intake workflows to capture patient information.",
      "Implemented patient record viewing interfaces.",
      "Designed scheduling workflows for appointment management.",
    ],

    links: [],
  },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = projects[currentIndex];

  function showPrevious() {
    setCurrentIndex(
      (currentIndex - 1 + projects.length) % projects.length
    );
  }

  function showNext() {
    setCurrentIndex((currentIndex + 1) % projects.length);
  }

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <p className="section-label">PROJECTS</p>

        <h2>Things I've built.</h2>

        <div className="projects-carousel">
          <article className="project-card" aria-live="polite">
            <div className="project-content">
              <p className="project-type">
                {currentProject.type}
              </p>

              <h3>{currentProject.title}</h3>

              <p className="project-description">
                {currentProject.description}
              </p>

              <div className="project-tech">
                {currentProject.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>

              <ul className="project-features">
                {currentProject.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              {currentProject.links.length > 0 && (
                <div className="project-links">
                  {currentProject.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>

          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-arrow"
              onClick={showPrevious}
              aria-label="View previous project"
            >
              ←
            </button>

            <div className="carousel-indicators">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  className={`carousel-dot ${index === currentIndex ? "active" : ""
                    }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`View project ${index + 1}: ${project.title}`}
                  aria-current={
                    index === currentIndex ? "true" : undefined
                  }
                />
              ))}
            </div>

            <span className="carousel-count" aria-live="off">
              {currentIndex + 1} / {projects.length}
            </span>

            <button
              type="button"
              className="carousel-arrow"
              onClick={showNext}
              aria-label="View next project"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
