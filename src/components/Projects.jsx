import React, { useEffect, useRef } from "react";
import "./Projects.css";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/Project2.png"
import Project3 from "../assets/Project3.png"
import Project4 from "../assets/Project4.png"
import Project5 from "../assets/Project5.png"
import Project6 from "../assets/Project6.png"
import Project7 from "../assets/Project7.png"
import Project8 from "../assets/Project8.png"
import Project9 from "../assets/Project9.png"

const Projects = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, i * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrapper">
        {/* LEFT */}
        <div
          className="projects-left hidden"
          ref={(el) => (refs.current[0] = el)}
        >
          <h2>Selected<br />work</h2>
          <button>See All</button>
        </div>

        {/* RIGHT */}
        <div className="projects-right">
          {/* BIG CARD */}
          <div
            className="project-card big hidden"
            ref={(el) => (refs.current[1] = el)}
          >
            <img
              src={Project1}
              alt="project"
            />

            <div className="card-info">
              <span>E-Commerce Shopping Web</span>
              <div className="tags">
                <span>UI UX DESIGN</span>
                <span>BUILD WITH JS & DOM</span>
              </div>
              <small>2025-Project</small>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="small-cards">
            <div
              className="project-card small hidden"
              ref={(el) => (refs.current[2] = el)}
            >
              <img
                src={Project2}
                alt="project"
              />
            </div>

            <div
              className="project-card small hidden"
              ref={(el) => (refs.current[3] = el)}
            >
              <img
                src={Project3}
                alt="project"
              />

            </div>
            <div
              className="project-card small hidden"
              ref={(el) => (refs.current[5] = el)}
            >
              <img
                src={Project5}
                alt="project"
              />

            </div>
            <div
              className="project-card small hidden"
              ref={(el) => (refs.current[6] = el)}
            >
              <img
                src={Project6}
                alt="project"
              />

            </div>
              <div
              className="project-card small hidden"
              ref={(el) => (refs.current[4] = el)}
            >
              <img
                src={Project4}
                alt="project"
              />

            </div>
              <div
              className="project-card small hidden"
              ref={(el) => (refs.current[7] = el)}
            >
              <img
                src={Project7}
                alt="project"
              />

            </div>
             <div
              className="project-card small hidden"
              ref={(el) => (refs.current[8] = el)}
            >
              <img
                src={Project8}
                alt="project"
              />

            </div>
             <div
              className="project-card small hidden"
              ref={(el) => (refs.current[9] = el)}
            >
              <img
                src={Project9}
                alt="project"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
