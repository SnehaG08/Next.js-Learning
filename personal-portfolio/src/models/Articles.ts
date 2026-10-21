import mongoose, { Schema, type Document, type Model } from "mongoose";

export interface IArticle extends Document {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage?: string;
    tags: string[];
    published: boolean;
    publishedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

const ArticleSchema = new Schema<IArticle>(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
        },

        slug: {
            type: String,
            required: [true, "Slug is required"],
            trim: true,
        },

        excerpt: {
            type: String,
            trim: true,
        },

        content: {
            type: String,
            required: [true, "Content is required"],
        },

        coverImage: {
            type: String,
            trim: true,
        },

        tags: {
            type: [String],
            default: [],
        },

        published: {
            type: Boolean,
            default: false,
        },

        publishedAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

export const Article: Model<IArticle> =
    (mongoose.models.Article as Model<IArticle>) || mongoose.model<IArticle>("Article", ArticleSchema);