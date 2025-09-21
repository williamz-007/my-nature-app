import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = "https://carousel-hazel.vercel.app/api/auth/login";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    // Store refresh token in cookie (HttpOnly recommended, but using JSON for simplicity here)
    if (response.ok && data.refreshToken) {
      const res = NextResponse.json(data, { status: 200 });
      res.cookies.set("refreshToken", data.refreshToken, { httpOnly: true, path: "/" });
      return res;
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
