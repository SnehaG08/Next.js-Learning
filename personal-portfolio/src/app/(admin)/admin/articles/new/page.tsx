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

const initialValues = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  coverImage: "",
  tags: [],
  published: false,
};

export default function CreateArticle() {
    const router = useRouter();
    const [form, setForm] = useState(initialValues);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch("/api/article", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
            data.error || "Form submission failed"
            );
        }
        setForm(initialValues);
        } catch (error) {
            console.log(error);
        }
    };

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
                        Publish an article
                    </p>


                    {/* TITLE */}
                    <div className="login-form-group">

                        <label
                            htmlFor="title"
                            className="login-label"
                        >
                            TITLE
                        </label>

                        <div className="login-input-wrapper">

                            <input
                                id="title"
                                type="text"
                                required
                                placeholder="Title"
                                value={form.title}
                                onChange={handleChange}
                                name="title"
                                className="login-input"
                            />

                        </div>

                    </div>

                    {/* SLUG */}
                    <div className="login-form-group">

                        <label
                            htmlFor="slug"
                            className="login-label"
                        >
                            SLUG
                        </label>

                        <div className="login-input-wrapper">

                            <input
                                id="slug"
                                type="text"
                                required
                                placeholder="Slug"
                                value={form.slug}
                                name="slug"
                                onChange={handleChange}
                                className="login-input"
                            />

                        </div>

                    </div>

                    {/* EXCERPT */}
                    <div className="login-form-group">

                        <label
                            htmlFor="excerpt"
                            className="login-label"
                        >
                            EXCERPT
                        </label>

                        <div className="login-input-wrapper">

                            <input
                                id="excerpt"
                                type="text"
                                required
                                placeholder="Excerpt"
                                value={form.excerpt}
                                name="excerpt"
                                onChange={handleChange}
                                className="login-input"
                            />

                        </div>

                    </div>

                    {/* CONTENT */}
                    <div className="login-form-group">

                        <label
                            htmlFor="content"
                            className="login-label"
                        >
                            CONTENT
                        </label>

                        <div className="login-input-wrapper">

                            <input
                                id="content"
                                type="textarea"
                                required
                                placeholder="Content"
                                value={form.content}
                                name="content"
                                onChange={handleChange}
                                className="login-input"
                            />

                        </div>

                    </div>

                    {/* COVER IMAGE */}
                    <div className="login-form-group">

                        <label
                            htmlFor="coverImage"
                            className="login-label"
                        >
                            COVER IMAGE
                        </label>

                        <div className="login-input-wrapper">

                            <input
                                id="coverImage"
                                type="text"
                                required
                                placeholder="Cover Image Link"
                                value={form.coverImage}
                                name="coverImage"
                                onChange={handleChange}
                                className="login-input"
                            />

                        </div>

                    </div>

                    {/* TAGS */}
                    <div className="login-form-group">

                        <label
                            htmlFor="tags"
                            className="login-label"
                        >
                            TAGS
                        </label>

                        <div className="login-input-wrapper">

                            <input
                                id="tags"
                                type="text"
                                required
                                placeholder="Tags (Comma Seperated)"
                                value={form.tags}
                                name="tags"
                                onChange={handleChange}
                                className="login-input"
                            />

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
                            ? "PUBLISHING..."
                            : "PUBLISH"}
                    </button>

                </form>

            </div>

        </div>
    );
}