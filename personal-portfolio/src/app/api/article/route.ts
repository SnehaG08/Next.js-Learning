import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { auth } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Article } from "@/models/Articles";
import { errorResponse, isValidEmail, MIN_PASSWORD_LENGTH } from "@/lib/utils";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, content, coverImage, tags } = body as {
      title?: string;
      slug?: string;
      excerpt?: string;
      content?: string;
      coverImage?: string;
      tags?: string[];
    };

    // --- Basic validation -------------------------------------------------
    if (!title || !title.trim()) {
      return NextResponse.json(errorResponse("Title is required"), { status: 400 });
    }

    if (!slug || !slug.trim()) {
      return NextResponse.json(errorResponse("A valid slug is required"), { status: 400 });
    }

    if (!excerpt || !excerpt.trim()) {
      return NextResponse.json(errorResponse("A valid excerpt is required"), { status: 400 });
    }

    if (!content) {
        return NextResponse.json(errorResponse("Content is required"), { status: 400 });
    }

    if (!coverImage || !coverImage.trim()) {
      return NextResponse.json(errorResponse("A valid cover image link is required"), { status: 400 });
    }

    if (!tags) {
      return NextResponse.json(errorResponse("Valid tags are required"), { status: 400 });
    }

    await connectToDatabase();


    const article = await Article.create({
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      content: content,
      coverImage: coverImage,
      tags: tags,
    });

    return NextResponse.json(
      {
        article: {
          id: article._id.toString(),
          title: article.title,
          slug: article.slug,
          excerpt: article.excerpt,
          content: article.content,
          coverImage: article.coverImage,
          tags: article.tags,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/users error:", error);
    return NextResponse.json(errorResponse("Something went wrong while creating the article"), {
      status: 500,
    });
  }
}