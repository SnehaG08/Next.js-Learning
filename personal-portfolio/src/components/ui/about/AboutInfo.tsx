import {
    LuUser,
    LuCode,
    LuRoute,
    LuTarget,
} from "react-icons/lu";

export default function AboutInfo() {
    return (
        <section className="about-info-section">

            {/* =========================
                WHO I AM
            ========================= */}

            <div className="about-info-card">

                <div className="about-info-icon">
                    <LuUser size={30} />
                </div>

                <h2 className="about-info-title">
                    WHO I AM
                </h2>

                <p className="about-info-text">
                    I&apos;m a developer and cybersecurity enthusiast who enjoys
                    understanding how technology works beneath the surface. I love
                    building things, solving problems, and constantly learning
                    something new.
                </p>

            </div>


            {/* =========================
                WHAT I DO
            ========================= */}

            <div className="about-info-card">

                <div className="about-info-icon">
                    <LuCode size={30} />
                </div>

                <h2 className="about-info-title">
                    WHAT I DO
                </h2>

                <p className="about-info-text">
                    I build modern web applications and explore cybersecurity,
                    networking, and secure system design. I enjoy turning ideas
                    into clean, functional, and secure experiences.
                </p>

            </div>


            {/* =========================
                MY JOURNEY
            ========================= */}

            <div className="about-info-card">

                <div className="about-info-icon">
                    <LuRoute size={30} />
                </div>

                <h2 className="about-info-title">
                    MY JOURNEY
                </h2>

                <p className="about-info-text">
                    My journey started with curiosity about computers and gradually
                    grew into a passion for development and cybersecurity. Every
                    project and challenge has helped me grow as a developer.
                </p>

            </div>


            {/* =========================
                MY GOALS
            ========================= */}

            <div className="about-info-card">

                <div className="about-info-icon">
                    <LuTarget size={30} />
                </div>

                <h2 className="about-info-title">
                    MY GOALS
                </h2>

                <p className="about-info-text">
                    I want to build meaningful products, deepen my cybersecurity
                    expertise, and eventually create solutions that make technology
                    safer, smarter, and more accessible.
                </p>

            </div>

        </section>
    );
}