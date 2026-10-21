"use client";

import { useState } from "react";
import {
    LuCode,
    LuGraduationCap,
    LuAward,
} from "react-icons/lu";

export default function AboutSkills() {
    const [activeTab, setActiveTab] = useState("skills");

    return (
        <section className="about-skills-section">

            {/* =========================
                SECTION HEADING
            ========================= */}

            <h1 className="page-heading">
                SKILLS, EDUCATION & CERTIFICATES
            </h1>

            <p className="reading-space-description">
                A look at what I&apos;ve learned and what I&apos;m working towards.
            </p>


            {/* =========================
                TABS
            ========================= */}

            <div className="about-skills-tabs">

                <button
                    className={`about-skills-tab ${
                        activeTab === "skills" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("skills")}
                >
                    <LuCode size={20} />
                    <span>SKILLS</span>
                </button>


                <button
                    className={`about-skills-tab ${
                        activeTab === "education" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("education")}
                >
                    <LuGraduationCap size={20} />
                    <span>EDUCATION</span>
                </button>


                <button
                    className={`about-skills-tab ${
                        activeTab === "certificates" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("certificates")}
                >
                    <LuAward size={20} />
                    <span>CERTIFICATES</span>
                </button>

            </div>


            {/* =========================
                TAB CONTENT
            ========================= */}

            <div className="about-skills-content">


                {/* =========================
                    SKILLS
                ========================= */}

                {activeTab === "skills" && (
                    <div className="about-skills-list">

                        <div className="about-skill-item">

                            <div className="about-skill-header">
                                <span>HTML / CSS</span>
                                <span>90%</span>
                            </div>

                            <progress
                                className="progress about-skill-progress"
                                value="90"
                                max="100"
                            />

                        </div>


                        <div className="about-skill-item">

                            <div className="about-skill-header">
                                <span>JavaScript</span>
                                <span>80%</span>
                            </div>

                            <progress
                                className="progress about-skill-progress"
                                value="80"
                                max="100"
                            />

                        </div>


                        <div className="about-skill-item">

                            <div className="about-skill-header">
                                <span>React / Next.js</span>
                                <span>80%</span>
                            </div>

                            <progress
                                className="progress about-skill-progress"
                                value="80"
                                max="100"
                            />

                        </div>


                        <div className="about-skill-item">

                            <div className="about-skill-header">
                                <span>Cybersecurity</span>
                                <span>75%</span>
                            </div>

                            <progress
                                className="progress about-skill-progress"
                                value="75"
                                max="100"
                            />

                        </div>


                        <div className="about-skill-item">

                            <div className="about-skill-header">
                                <span>Networking</span>
                                <span>75%</span>
                            </div>

                            <progress
                                className="progress about-skill-progress"
                                value="75"
                                max="100"
                            />

                        </div>

                    </div>
                )}


                {/* =========================
                    EDUCATION
                ========================= */}

                {activeTab === "education" && (
                    <div className="about-education-content">

                        <div className="about-education-item">

                            <div className="about-education-dot"></div>

                            <div>

                                <span className="about-education-year">
                                    2026 — PRESENT
                                </span>

                                <h2>
                                    B.Tech in Computer Science
                                </h2>

                                <h3>
                                    IILM University, Gurugram
                                </h3>

                                <p>
                                    Pursuing Computer Science with a strong interest
                                    in cybersecurity, software development,
                                    networking, and emerging technologies.
                                </p>

                            </div>

                        </div>


                        <div className="about-education-item">

                            <div className="about-education-dot"></div>

                            <div>

                                <span className="about-education-year">
                                    2024 — 2026
                                </span>

                                <h2>
                                    Senior Secondary Education
                                </h2>

                                <h3>
                                    Class XII
                                </h3>

                                <p>
                                    Completed senior secondary education with a
                                    focus on building a strong foundation for
                                    computer science and technology.
                                </p>

                            </div>

                        </div>

                    </div>
                )}


                {/* =========================
                    CERTIFICATES
                ========================= */}

                {activeTab === "certificates" && (
                    <div className="about-certificates-content">

                        <div className="about-certificate-card">

                            <div className="about-certificate-icon">
                                <LuAward size={28} />
                            </div>

                            <div>

                                <h2>
                                    Google Cybersecurity Professional Certificate
                                </h2>

                                <p>
                                    Google Career Certificates
                                </p>

                                <span>
                                    Cybersecurity
                                </span>

                            </div>

                        </div>


                        <div className="about-certificate-card">

                            <div className="about-certificate-icon">
                                <LuAward size={28} />
                            </div>

                            <div>

                                <h2>
                                    TryHackMe Cybersecurity Training
                                </h2>

                                <p>
                                    TryHackMe
                                </p>

                                <span>
                                    Cybersecurity & Networking
                                </span>

                            </div>

                        </div>

                    </div>
                )}

            </div>

        </section>
    );
}