"use client";

import { signOut } from "next-auth/react";
import { LuLogOut } from "react-icons/lu";

export default function LogoutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="btn ml-1 h-10 min-h-10 rounded-full border-none bg-[var(--navy)] px-4 font-display text-sm font-bold tracking-[0.08em] text-[var(--white)] transition-all duration-150 hover:bg-[#1D1F27] active:scale-95 active:bg-[#22242C] lg:px-5"
            aria-label="Logout"
        >
            <LuLogOut
                size={16}
                strokeWidth={1.8}
            />

            <span className="hidden sm:inline">
                LOGOUT
            </span>
        </button>
    );
}