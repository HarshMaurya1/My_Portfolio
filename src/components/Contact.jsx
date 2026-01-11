import React, { useEffect, useRef } from "react";
import "./Contact.css";

const Contact = () => {
    const items = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("show");
                        }, index * 150);
                    }
                });
            },
            { threshold: 0.2 }
        );

        items.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" className="contact-section">
            <div className="contact-wrapper">

                {/* LEFT CARD */}
                <div
                    className="contact-left hidden"
                    ref={(el) => (items.current[0] = el)}
                >
                    <h1>
                        <span>Let’s</span><br />connect<br />and <span>chat</span>
                    </h1>

                    {/* MAIL LINK */}
                    <a
                        href="mailto:harshly977@gmail.com?subject=Development%20Inquiry&body=Hi%20Harsh,%20I%20want%20to%20talk%20to%20you%20regarding%20development%20work%20or%20opportunities."
                        className="email"
                    >
                        harshly977@gmail.com
                        <span>↗</span>
                    </a>

                </div>

                {/* RIGHT CARD */}
                <div
                    className="contact-right hidden"
                    ref={(el) => (items.current[1] = el)}
                >
                    {/* FOLLOW */}
                    <a
                        href="https://www.linkedin.com/in/YOUR-LINKEDIN"
                        target="_blank"
                        rel="noreferrer"
                        className="bubble"
                    >
                        FOLLOW ME!
                    </a>
                    <a
                        href="https://www.linkedin.com/in/harsh-maurya-65a406264/"
                        target="_blank"
                        rel="noreferrer"
                        className="bubble"
                    >
                        LINKEDIN
                    </a>

                    <a
                        href="https://www.instagram.com/harshmalhhotra?igsh=MWZkaHZ3OGZtOTI3bw=="
                        target="_blank"
                        rel="noreferrer"
                        className="bubble rotate"
                    >
                        INSTAGRAM
                    </a>

                    <a
                        href="https://wa.me/918287679960?text=Hi%20Harsh,%20I%20want%20to%20talk%20to%20you%20regarding%20development%20work%20or%20opportunities."
                        target="_blank"
                        rel="noreferrer"
                        className="bubble"
                    >
                        WHATSAPP
                    </a>



                    <div className="bubble emoji">👀 ✨</div>
                </div>

                {/* FOOTER */}
                <div
                    className="contact-footer hidden"
                    ref={(el) => (items.current[2] = el)}
                >
                    <span className="brand">© HARSHMAURYA</span>
                    <span className="year">©2026</span>
                    <a
                        href="tel:+918287679960"
                        className="call-btn"
                    >
                        Book a Call
                    </a>



                </div>
            </div>
        </section>
    );
};

export default Contact;
