import React, { useEffect, useRef } from "react";
import "./Skills.css";

const Skills = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="assist" className="skills-section">
      {/* TOP MISSION BOX */}
      <div
        className="mission-box hidden"
        ref={(el) => (itemsRef.current[0] = el)}
      >
        <p>
          My mission is to engineer robust digital products that prioritize performance, clarity, and long-term scalability.
        </p>

        <div className="brands">
          <span>React.js</span>
          <span>JavaScript (ES6+)</span>
          <span>Node.js </span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>REST APIs</span>
          <span>HTML</span>
          <span>CSS3</span>
          <span>Git & GitHub</span>
          <span>My SQL</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="skills-content">
        {/* LEFT */}
        <div
          className="skills-left hidden"
          ref={(el) => (itemsRef.current[1] = el)}
        >
          <h2>
            How Can I <br /> Assist You?
          </h2>
        </div>

        {/* RIGHT CARDS */}
        <div className="skills-cards">
          <div
            className="skill-card hidden"
            ref={(el) => (itemsRef.current[2] = el)}
          >
            <div className="icon">⚙️</div>
            <p className="desc">
              I focus on building secure and efficient backend systems with Node.js,
              Express, and databases like MongoDB and SQL. I design clean APIs,
              implement proper error handling, and optimize data flow for
              performance and reliability.
            </p>
            <div className="card-footer">
              <h4>Backend Engineering</h4>
              <span>01</span>
            </div>
          </div>

          <div
            className="skill-card hidden"
            ref={(el) => (itemsRef.current[3] = el)}
          >
            <div className="icon">💻</div>
            <p className="desc">
              I build fast, responsive, and maintainable user interfaces using React and modern
              frontend practices. My focus is on component-driven architecture,
              clean state management, and performance optimization to ensure
              smooth user interactions.
            </p>
            <div className="card-footer">
              <h4>Frontend Engineering (React-Focused)</h4>
              <span>02</span>
            </div>
          </div>

          <div
            className="skill-card hidden"
            ref={(el) => (itemsRef.current[4] = el)}
          >
            <div className="icon">🎨</div>
            <p className="desc">
              I develop complete, production-ready web applications using the MERN stack (MongoDB, Express, React, Node.js). From designing RESTful APIs to handling authentication, database structure, and server logic
            </p>
            <div className="card-footer">
              <h4>Full-Stack MERN Development</h4>
              <span>03</span>
            </div>
          </div>

          <div
            className="skill-card hidden"
            ref={(el) => (itemsRef.current[5] = el)}
          >
            <div className="icon">🔤</div>
            <p className="desc">
              I craft efficient, optimized, and robust solutions using C++ and core programming concepts, excelling in data structures and algorithms to tackle complex problems. With a strong foundation in problem-solving,
            </p>
            <div className="card-footer">
              <h4>Code Mastery & Algorithmic Excellence</h4>
              <span>04</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
