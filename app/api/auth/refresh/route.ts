import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = "https://carousel-hazel.vercel.app/api/auth/refresh";

export async function POST(request: NextRequest) {
  try {
    const cookie = request.cookies.get("refreshToken")?.value;

    if (!cookie) {
      return NextResponse.json({ error: "No refresh token" }, { status: 401 });
    }

    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: cookie }),
    });

    const data = await response.json();

    if (response.ok && data.refreshToken) {
      const res = NextResponse.json(data, { status: 200 });
      res.cookies.set("refreshToken", data.refreshToken, { httpOnly: true, path: "/" });
      return res;
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: "Token refresh failed" }, { status: 500 });
  }
}
