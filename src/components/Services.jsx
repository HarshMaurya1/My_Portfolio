import { useEffect, useRef } from "react";
import "./Services.css";

export default function Experience() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Experience" className="assist">
      <section className="experience-section">
        <div className="experience-grid">

          {/* CARD 1 */}
          <div
            className="card big-card"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <h2>Wanna see<br />my experience?</h2>
            <p>I have been actively building hands-on technical skills through projects, self-learning, and practical implementation.
              I am open to entry-level technical opportunities</p>
            <button> <a
              href="tel:+918287679960"
              className="call-btn"
            >
              Book a Call
            </a></button>
          </div>

          {/* CARD 2 */}
          <div
            className="card"
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <a href="#" className="logo">ACADEMIC PERSONAL PROJECT EXPERIENCE
            </a>
            <h3>
              Project 1: Clothing E-Commerce Website <br />
              Built a full-stack e-commerce platform using React.js, Node.js, Express.js, and MongoDB
              Implemented product listing, cart system, and user authentication
            </h3>
            <p>2025-26</p>
          </div>

          {/* CARD 3 */}
          <div
            className="card"
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <a href="#" className="logo">Project 2</a>
            <h3>Project 2: Hotel Booking Website (javaScript) <br />
              Developed a restaurant food booking interface with dynamic food item listings
              Implemented booking logic using JavaScript and DOM manipulation</h3>
            <p>2025-2026</p>
          </div>

          {/* CARD 4 */}
          <div
            className="card"
            ref={(el) => (cardsRef.current[3] = el)}
          >
            <a href="#" className="logo">Project 3</a>
            <h3>Project 3: Calculator Applications (javaScript ES6+) <br />
              Built multiple calculator apps to strengthen logic building skills
              Handled user inputs and real-time calculations efficiently</h3>
            <p>2025-26</p>
          </div>

        </div>
      </section>
    </section>
  );
}
