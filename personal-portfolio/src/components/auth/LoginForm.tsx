"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import {
    LuArrowLeft,
    LuMail,
    LuLock,
    LuEye,
    LuEyeOff,
} from "react-icons/lu";

export default function LoginForm() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setError(null);
        setIsSubmitting(true);

        try {

            const result = await signIn("credentials", {
                email: email.trim(),
                password,
                redirect: false,
                
            });

            if (!result || result.error) {
                setError("Invalid email or password");
                return;
            }

            router.push("/admin/dashboard");
            router.refresh();
            
        } catch {
            
            setError(
                "Unable to sign in right now. Please try again"
            );
            
        } finally {

            setIsSubmitting(false);

        }
        
    }

    return (
        <div className="login-page">

            {/* Back */}
            <button
                className="login-back"
                type="button"
                onClick={() => router.back()}
            >
                <LuArrowLeft size={21} />
                <span>BACK</span>
            </button>


            {/* Login Card */}
            <div className="login-card">

                <form
                    onSubmit={handleSubmit}
                    className="login-content"
                >

                    {/* Brand */}
                    <div className="login-brand">
                        Sneha Gupta
                    </div>

                    <h1 className="login-title">
                        WELCOME BACK
                    </h1>

                    <p className="login-subtitle">
                        Sign in to manage your articles.
                    </p>


                    {/* EMAIL */}
                    <div className="login-form-group">

                        <label
                            htmlFor="email"
                            className="login-label"
                        >
                            EMAIL
                        </label>

                        <div className="login-input-wrapper">

                            <LuMail
                                className="login-input-icon"
                                size={23}
                            />

                            <input
                                id="email"
                                type="email"
                                required
                                autoComplete="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                className="login-input"
                            />

                        </div>

                    </div>


                    {/* PASSWORD */}
                    <div className="login-form-group">

                        <label
                            htmlFor="password"
                            className="login-label"
                        >
                            PASSWORD
                        </label>

                        <div className="login-input-wrapper">

                            <LuLock
                                className="login-input-icon"
                                size={22}
                            />

                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                required
                                autoComplete="current-password"
                                placeholder="••••••••••••"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                className="login-input"
                            />

                            <button
                                type="button"
                                className="login-password-toggle"
                                onClick={() =>
                                    setShowPassword((previous) => !(previous))
                                }
                                aria-label={
                                    showPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {showPassword ? (
                                    <LuEyeOff size={22} />
                                ) : (
                                    <LuEye size={22} />
                                )}
                            </button>

                        </div>

                    </div>


                    {/* ERROR */}
                    {error && (
                        <p className="login-error" role="alert">
                            {error}
                        </p>
                    )}


                    {/* SIGN IN */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="login-signin"
                    >
                        {isSubmitting
                            ? "SIGNING IN..."
                            : "SIGN IN"}
                    </button>

                </form>

            </div>

        </div>
    );
}