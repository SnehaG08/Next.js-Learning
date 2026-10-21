import Link from "next/link";
import { LuHeart, LuArrowRight } from "react-icons/lu";

export default function FeaturedWriting() {
    const favorites = [
        {
            category: "CYBERSECURITY",
            title: "Understanding the OSI Model",
            description:
                "A beginner-friendly guide to understanding how the OSI model works.",
            image: "/assets/test.png",
            href: "/articles/osi-model",
        },
        {
            category: "NETWORKING",
            title: "TCP/IP Explained",
            description:
                "Breaking down the TCP/IP model and how data travels across networks.",
            image: "/assets/test.png",
            href: "/articles/tcp-ip",
        },
        {
            category: "WEB DEVELOPMENT",
            title: "Getting Started with Next.js",
            description:
                "Everything you need to know before building your first Next.js project.",
            image: "/assets/test.png",
            href: "/articles/nextjs",
        },
    ];

    return (
        <section className="favorites-section">

            <div className="favorites-header">

                <div>
                    <h2 className="favorites-heading">
                        Featured Writing
                    </h2>
                </div>

                <Link
                    href="/favorites"
                    className="favorites-view-all"
                >
                    VIEW ALL
                    <LuArrowRight size={18} strokeWidth={1.8} />
                </Link>

            </div>


            <div className="favorites-grid">

                {favorites.map((article) => (
                    <article
                        key={article.title}
                        className="card profile-favorite-card"
                    >

                        <figure className="profile-favorite-image">

                            <img
                                src={article.image}
                                alt={article.title}
                            />

                            <button
                                className="profile-favorite-heart"
                                aria-label="Add to favorites"
                            >
                                <LuHeart
                                    size={20}
                                    strokeWidth={1.8}
                                />
                            </button>

                        </figure>


                        <div className="card-body profile-favorite-body">

                            <span className="profile-favorite-category">
                                {article.category}
                            </span>

                            <h3 className="profile-favorite-title">
                                {article.title}
                            </h3>

                            <p className="profile-favorite-description">
                                {article.description}
                            </p>

                            <div className="card-actions profile-favorite-actions">

                                <Link
                                    href={article.href}
                                    className="btn profile-favorite-button"
                                >
                                    READ ARTICLE

                                    <LuArrowRight
                                        size={16}
                                        strokeWidth={1.8}
                                    />
                                </Link>

                            </div>

                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}