import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = "https://carousel-hazel.vercel.app/api/auth/me";

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get("Authorization"); // Bearer token expected

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const response = await fetch(BACKEND_URL, {
      method: "GET",
      headers: { Authorization: token },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}
