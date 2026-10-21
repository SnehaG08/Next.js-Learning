import Image from "next/image";
import Link from "next/link";
import { LuHeart, LuChevronLeft, LuChevronRight } from "react-icons/lu";

import { connectToDatabase } from "@/lib/db";
import { Article } from "@/models/Articles";

export default async function MyArticles() {

    await connectToDatabase();

    const articles = await Article.find({
        published: true,
    })
        .sort({
            publishedAt: -1,
        })
        .lean();


    const serializedArticles = articles.map((article) => ({
        ...article,
        _id: article._id.toString(),
        publishedAt: article.publishedAt
            ? article.publishedAt.toISOString()
            : null,
        createdAt: article.createdAt.toISOString(),
        updatedAt: article.updatedAt.toISOString(),
    }));


    const featuredArticle = serializedArticles[0];

    const remainingArticles = serializedArticles.slice(1);


    return (
        <section className="articles-section">

            {/* =========================
                HEADER
            ========================= */}

            <div className="articles-header">

                <div>

                    <h1 className="page-heading">
                        MY ARTICLES
                    </h1>

                    <p className="reading-space-description">
                        Some thoughts, stories, and everything in between.
                    </p>

                </div>

            </div>


            {/* =========================
                FEATURED ARTICLE
            ========================= */}

            {featuredArticle && (

                <Link
                    href={`/articles/${featuredArticle.slug}`}
                    className="featured-article"
                >

                    <div className="featured-image">

                        <Image
                            src={
                                featuredArticle.coverImage ||
                                "/assets/test.png"
                            }
                            alt={featuredArticle.title}
                            fill
                            className="object-cover"
                        />

                    </div>


                    <div className="featured-content">

                        <span className="article-category">
                            {featuredArticle.tags?.[0] || "WRITING"}
                        </span>

                        <h2>
                            {featuredArticle.title}
                        </h2>

                        <p>
                            {featuredArticle.excerpt}
                        </p>


                        <div className="featured-author">

                            <Image
                                src="/assets/myhomepfp.png"
                                alt="Sneha Gupta"
                                width={45}
                                height={45}
                                className="author-image"
                            />

                            <div>

                                <p>
                                    Sneha Gupta
                                </p>

                                <span>
                                    {featuredArticle.publishedAt
                                        ? new Date(
                                            featuredArticle.publishedAt
                                        ).toLocaleDateString(
                                            "en-US",
                                            {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            }
                                        )
                                        : "Unpublished"}

                                    <b>•</b>

                                    {Math.max(
                                        1,
                                        Math.ceil(
                                            featuredArticle.content.length / 1200
                                        )
                                    )}{" "}
                                    min read
                                </span>

                            </div>

                        </div>

                    </div>


                    <button
                        className="article-heart"
                        type="button"
                        onClick={(event) => {
                            event.preventDefault();
                        }}
                    >
                        <LuHeart size={27} />
                    </button>

                </Link>

            )}


            {/* =========================
                ARTICLES
            ========================= */}

            <div className="articles-grid">

                {remainingArticles.map((article) => (

                    <Link
                        href={`/articles/${article.slug}`}
                        className="article-card"
                        key={article._id}
                    >

                        {/* Image */}

                        <div className="article-image">

                            <Image
                                src={
                                    article.coverImage ||
                                    "/assets/test.png"
                                }
                                alt={article.title}
                                fill
                                className="object-cover"
                            />

                        </div>


                        {/* Content */}

                        <div className="article-content">

                            <span className="article-category">
                                {article.tags?.[0] || "WRITING"}
                            </span>

                            <h2>
                                {article.title}
                            </h2>

                            <p>
                                {article.excerpt}
                            </p>


                            <div className="article-meta">

                                <span>
                                    {article.publishedAt
                                        ? new Date(
                                            article.publishedAt
                                        ).toLocaleDateString(
                                            "en-US",
                                            {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            }
                                        )
                                        : ""}
                                </span>

                                <b>•</b>

                                <span>
                                    {Math.max(
                                        1,
                                        Math.ceil(
                                            article.content.length / 1200
                                        )
                                    )}{" "}
                                    min read
                                </span>

                            </div>

                        </div>


                        {/* Heart */}

                        <button
                            className="article-heart"
                            type="button"
                            onClick={(event) => {
                                event.preventDefault();
                            }}
                        >
                            <LuHeart size={24} />
                        </button>

                    </Link>

                ))}

            </div>


            {/* =========================
                EMPTY STATE
            ========================= */}

            {!featuredArticle && (

                <div className="article-empty">

                    <h2>
                        No articles yet.
                    </h2>

                    <p>
                        New writing will appear here soon.
                    </p>

                </div>

            )}


            {/* =========================
                PAGINATION
            ========================= */}

            {serializedArticles.length > 0 && (

                <div className="articles-pagination">

                    <button
                        className="pagination-arrow"
                        type="button"
                        disabled
                    >
                        <LuChevronLeft size={18} />
                    </button>


                    <button
                        className="pagination-number active"
                        type="button"
                    >
                        1
                    </button>


                    <button
                        className="pagination-arrow"
                        type="button"
                        disabled
                    >
                        <LuChevronRight size={18} />
                    </button>

                </div>

            )}

        </section>
    );
}