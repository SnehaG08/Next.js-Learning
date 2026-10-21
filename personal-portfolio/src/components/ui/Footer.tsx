import Link from "next/link";
import { FaMedium } from "react-icons/fa";
import {
    LuGithub,
    LuInstagram,
    LuLinkedin,
    LuRss,
    LuYoutube,
} from "react-icons/lu";

export default function Footer() {
    return (
        <footer className="profile-footer">

            <div className="profile-footer-content">

                {/* =========================
                    BRAND
                ========================= */}

                <div className="footer-brand">

                    <h2 className="footer-logo">
                        Sneha Gupta
                    </h2>

                    <p className="footer-description">
                        Some thoughts. Some stories.
                        Some nonsense.
                    </p>

                    <div className="footer-socials">

                        <a
                            href="#"
                            aria-label="Medium"
                        >
                            <FaMedium size={18} />
                        </a>

                        <a
                            href="#"
                            aria-label="LinkedIn"
                        >
                            <LuLinkedin size={18} />
                        </a>

                        <a
                            href="#"
                            aria-label="Instagram"
                        >
                            <LuInstagram size={18} />
                        </a>

                        <a
                            href="#"
                            aria-label="GitHub"
                        >
                            <LuGithub size={18} />
                        </a>

                    </div>

                    <div className="footer-tags">

                        <span>WRITING</span>
                        <span>IDEAS</span>
                        <span>THOUGHTS</span>

                    </div>

                </div>


                {/* =========================
                    EXPLORE
                ========================= */}

                <nav className="footer-column">

                    <h6 className="footer-title">
                        EXPLORE
                    </h6>

                    <Link href="/">
                        Home
                    </Link>

                    <Link href="/articles">
                        Articles
                    </Link>

                    <Link href="/about">
                        About Me
                    </Link>

                    <Link href="/contact">
                        Contact Me
                    </Link>

                </nav>


                {/* =========================
                    ELSEWHERE
                ========================= */}

                <nav className="footer-column">

                    <h6 className="footer-title">
                        ELSEWHERE
                    </h6>

                    <a href="#">
                        Medium
                    </a>

                    <a href="#">
                        LinkedIn
                    </a>

                    <a href="#">
                        Instagram
                    </a>

                    <a href="#">
                        GitHub
                    </a>

                </nav>


                {/* =========================
                    NEWSLETTER
                ========================= */}

                <form className="footer-newsletter">

                    <h6 className="footer-title">
                        NEWSLETTER
                    </h6>

                    <p>
                        Get new essays and notes
                        delivered to your inbox.
                    </p>

                    <input
                        type="email"
                        placeholder="your@email.com"
                    />

                    <button type="submit">
                        SUBSCRIBE
                    </button>

                </form>

            </div>


            {/* =========================
                COPYRIGHT
            ========================= */}

            <div className="footer-copyright">
                © 2026 Sneha Gupta. All rights reserved.
            </div>

        </footer>
    );
}