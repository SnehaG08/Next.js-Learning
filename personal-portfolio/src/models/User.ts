import mongoose, { Schema, type Document, type Model } from "mongoose";

export interface IUser extends Document {
    uname: string;
    email: string;
    password: string;
}

const UserSchema = new Schema<IUser>(
    {
        uname: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            trim: true,
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            select: false,
        },
    },
    {
        timestamps: true,
    }
);

export const User: Model<IUser> = 
    (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>("User", UserSchema);