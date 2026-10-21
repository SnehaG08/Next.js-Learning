import Link from "next/link";

export default function AboutCardSec() {
    return (
        <section className="about-card-section">

            {/* Section Heading */}
            <h1 className="page-heading">
                ABOUT ME
            </h1>

            <p className="reading-space-description">
                The person behind the code and the stories
            </p>


            {/* =========================
                PROFILE CARD
            ========================= */}

            <div className="about-profile-card">

                {/* Profile Image */}
                <div className="about-profile-card-image">
                    <img
                        src="/assets/myhomepfp.png"
                        alt="Sneha Gupta"
                    />
                </div>


                {/* Profile Information */}
                <div className="about-profile-card-content">

                    <h2 className="about-profile-card-name">
                        Sneha Gupta
                    </h2>

                    <p className="about-profile-card-role">
                        Developer and Cybersecurity Enthusiast
                    </p>

                    <p className="about-profile-card-email">
                        snehaag.0821@gmail.com
                    </p>

                    <p className="about-profile-card-bio">
                        I build secure, scalable web applications and write about <br />
                        cybersecurity, privacy, and the systems we rely on every day.
                    </p>


                    {/* Actions */}
                    <div className="about-profile-card-actions">

                        <Link
                            href="/contact"
                            className="btn-primary-custom"
                        >
                            CONTACT ME
                            <span>→</span>
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}