import { LuMapPin, LuArrowRight } from "react-icons/lu";

export default function ToolsAbout() {
    const tools = [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Linux",
        "Git",
        "Networking",
        "Cybersecurity",
    ];

    return (
        <section className="tools-about-section">

            {/* =========================
                TOOLS I USE
            ========================= */}

            <div className="card tools-card">

                <h2 className="tools-about-title">
                    TOOLS I USE
                </h2>

                <div className="tools-list">

                    {tools.map((tool) => (
                        <span
                            key={tool}
                            className="tool-pill"
                        >
                            {tool}
                        </span>
                    ))}

                </div>

            </div>


            {/* =========================
                ABOUT ME
            ========================= */}

            <div className="card about-card">

                <h2 className="tools-about-title">
                    ABOUT ME
                </h2>

                <div className="about-content">

                    <div className="about-image-wrapper">
                        <img
                            src="/assets/myhomepfp.png"
                            alt="Sneha Gupta"
                            className="about-image"
                        />
                    </div>


                    <div className="about-details">

                        <p className="about-description">
                            I’m a developer and cybersecurity writer based in
                            India. I love building secure, reliable
                            systems and crafting clear, practical content
                            that helps others learn and ship with confidence.
                        </p>


                        <a
                            href="/about"
                            className="about-link"
                        >
                            MORE ABOUT ME
                            <LuArrowRight
                                size={16}
                                strokeWidth={1.8}
                            />
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}