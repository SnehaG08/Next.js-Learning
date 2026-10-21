import Link from "next/link";

export default function HeroHome() {
    return (
        <section className="home-hero">

            <div className="home-hero-content">

                <h1 className="home-hero-title">
                    DEVELOPER.
                    <br />
                    SECURITY THINKER.
                    <br />
                    WRITER.
                </h1>

                <p className="home-hero-description">
                    Hi, I’m Sneha Gupta—building thoughtful
                    <br className="hidden sm:block" />
                    digital products and writing about the
                    <br className="hidden sm:block" />
                    systems behind them.
                </p>

                <div className="home-hero-buttons">

                    <Link
                        href="/projects"
                        className="btn btn-primary home-hero-primary"
                    >
                        EXPLORE MY WORK
                        <span>→</span>
                    </Link>

                    <Link
                        href="/articles"
                        className="btn btn-outline home-hero-secondary"
                    >
                        READ MY ARTICLES
                    </Link>

                </div>

            </div>


            <div className="home-hero-image-wrapper">

                <div className="card home-hero-image-card">

                    <figure>
                        <img
                            src="/assets/myhomepfp.png"
                            alt="Sneha Gupta"
                            className="home-hero-image"
                        />
                    </figure>

                </div>

            </div>

        </section>
    );
}