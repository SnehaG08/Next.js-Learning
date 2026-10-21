import { connectToDatabase } from "@/lib/db";
import { errorResponse, isValidEmail, MIN_PASSWORD_LENGTH } from "@/lib/utils";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { uname, email, password } = body;

        if ( typeof uname !== "string" || typeof email !== "string" || typeof password !== "string" ) {
            return NextResponse.json(
                errorResponse("Username, email, and password are required"),
                { status: 400 }
            );
        }

        const normalizedUname = uname.trim();
        const normalizedEmail = email.trim().toLowerCase();

        if (!normalizedUname || !normalizedEmail || !password) {
            return NextResponse.json(
                errorResponse("Username, email, and password are required"),
                { status: 400 }
            );
        }

        if (!isValidEmail(normalizedEmail)) {
            return NextResponse.json(
                errorResponse("Please provide a valid email address"),
                { status: 400 }
            );
        }

        if (password.length < MIN_PASSWORD_LENGTH) {
            return NextResponse.json(
                errorResponse(
                    `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`
                ),
                { status: 400 }
            );
        }

        await connectToDatabase();

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            uname: normalizedUname,
            email: normalizedEmail,
            password: hashedPassword,
        });

        return NextResponse.json(
            {
                message: "Admin account created successfully",
                user: {
                    id: user._id.toString(),
                    uname: user.uname,
                    email: user.email,
                },
            },
            {status: 201}
        );


    } catch (error) {
        if (typeof error === "object" && error !== null && "code" in error && error.code === 11000) {
            return NextResponse.json(
                errorResponse("Username or email already exists"),
                { status: 409 }
            );
        }

        console.error("Admin creation error:", error);

        return NextResponse.json(
            errorResponse("Unable to create admin account"),
            { status: 500 }
        );
    }
}