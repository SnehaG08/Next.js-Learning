import Link from "next/link";
import { auth } from "@/lib/auth";
import {
    LuMenu,
    LuLogIn,
    LuLayoutDashboard
} from "react-icons/lu";
import LogoutButton from "@/components/auth/LogoutButton";

export default async function Navbar() {

    const session = await auth();
    const isLoggedIn = !!session?.user;

    return (
        <>

            {/* =========================
                NAVBAR
            ========================= */}

            <nav className="navbar sticky top-4 z-50 mx-auto mt-4 w-[calc(100%-30px)] max-w-[1300px] rounded-[28px] bg-[var(--green)] px-4 shadow-sm lg:px-6">


                {/* =========================
                    NAVBAR START
                ========================= */}

                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown lg:hidden">

                        <button
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle border-none outline-none text-[var(--white)] hover:!bg-white/10 hover:!text-[var(--white)] focus:!outline-none focus:!ring-0 active:!outline-none active:!ring-0"
                            aria-label="Open menu"
                        >
                            <LuMenu size={22} />
                        </button>


                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content z-[1] mt-3 w-52 rounded-2xl bg-[var(--surface)] p-3 text-sm text-[var(--foreground)] shadow-lg"
                        >
                            <li>
                                <Link href="/">
                                    HOME
                                </Link>
                            </li>

                            <li>
                                <Link href="/articles">
                                    ARTICLES
                                </Link>
                            </li>

                            <li>
                                <Link href="/about">
                                    ABOUT
                                </Link>
                            </li>

                            {isLoggedIn ? (
                                <li>
                                    <Link href="/admin/dashboard">
                                        ADMIN DASHBOARD
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    <Link href="/login">
                                        LOGIN
                                    </Link>
                                </li>
                            )}
                        </ul>

                    </div>


                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-script text-4xl font-normal text-[var(--white)] transition-all duration-200 ease-out hover:!text-[var(--muted)] active:translate-y-1 lg:text-5xl"
                    >
                        Sneha Gupta
                    </Link>

                </div>


                {/* =========================
                    NAVBAR CENTER
                ========================= */}

                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal items-center gap-5 px-1">

                        {/* HOME */}
                        <li>
                            <Link
                                href="/"
                                className="font-display rounded-none bg-transparent px-2 text-sm font-bold tracking-[0.12em] text-[var(--white)] transition-colors duration-200 hover:!bg-transparent hover:!text-[var(--muted)] focus:!bg-transparent focus:!outline-none"
                            >
                                HOME
                            </Link>
                        </li>


                        {/* ARTICLES */}
                        <li>
                            <Link
                                href="/articles"
                                className="font-display rounded-none bg-transparent px-2 text-sm font-bold tracking-[0.12em] text-[var(--white)] transition-colors duration-200 hover:!bg-transparent hover:!text-[var(--muted)] focus:!bg-transparent focus:!outline-none"
                            >
                                ARTICLES
                            </Link>
                        </li>


                        {/* ABOUT */}
                        <li>
                            <Link
                                href="/about"
                                className="font-display rounded-none bg-transparent px-2 text-sm font-bold tracking-[0.12em] text-[var(--white)] transition-colors duration-200 hover:!bg-transparent hover:!text-[var(--muted)] focus:!bg-transparent focus:!outline-none"
                            >
                                ABOUT
                            </Link>
                        </li>

                    </ul>

                </div>


                {/* =========================
                    NAVBAR END
                ========================= */}

                <div className="navbar-end gap-1 lg:gap-2">

                    {isLoggedIn ? (
                        <>

                            {/* ADMIN DASHBOARD */}
                            <Link
                                href="/admin/dashboard"
                                className="btn btn-ghost btn-circle border-none outline-none text-[var(--white)] hover:!bg-white/10 hover:!text-[var(--white)] focus:!bg-transparent focus:!outline-none focus:!ring-0 active:!outline-none active:!ring-0"
                                aria-label="Admin Dashboard"
                            >
                                <LuLayoutDashboard
                                    size={20}
                                    strokeWidth={1.8}
                                />
                            </Link>


                            {/* LOGOUT */}
                            <LogoutButton />

                        </>
                    ) : (

                        /* LOGIN */
                        <Link
                            href="/login"
                            className="btn ml-1 h-10 min-h-10 rounded-full border-none bg-[var(--navy)] px-4 font-display text-sm font-bold tracking-[0.08em] text-[var(--white)] transition-all duration-150 hover:bg-[#1D1F27] active:scale-95 active:bg-[#22242C] lg:px-5"
                        >
                            <LuLogIn
                                size={16}
                                strokeWidth={1.8}
                            />

                            <span className="hidden sm:inline">
                                LOGIN
                            </span>
                        </Link>

                    )}

                </div>

            </nav>

        </>
    );
}