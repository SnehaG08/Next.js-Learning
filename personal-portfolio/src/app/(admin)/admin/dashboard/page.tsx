import Link from "next/link";
import "@/styles/admin-dashboard.css";
import Navbar from "@/components/ui/Navbar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }

    return (
        <>
        <Navbar />
        <main className="admin-dashboard">

            <div className="admin-dashboard-card">

                <span className="admin-dashboard-label">
                    ADMIN DASHBOARD
                </span>

                <h1 className="admin-dashboard-title">
                    Welcome Back, Sneha!
                </h1>

                <p className="admin-dashboard-description">
                    Manage your writing, create new articles, and keep
                    your thoughts organized.
                </p>


                <div className="admin-dashboard-actions">

                    <Link
                        href="/admin/articles"
                        className="admin-dashboard-button primary"
                    >
                        VIEW YOUR ARTICLES
                        <span>→</span>
                    </Link>

                    <Link
                        href="/admin/articles/new"
                        className="admin-dashboard-button secondary"
                    >
                        CREATE NEW ARTICLE
                        <span>+</span>
                    </Link>

                </div>

            </div>

        </main>
        </>
    );
}