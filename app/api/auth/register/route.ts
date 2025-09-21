import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = "https://carousel-hazel.vercel.app/api/auth/register";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    console.log("Register API called with:", { name, email, password: "***" }); // Debug log

    if (!name || !email || !password) {
      console.log("Missing fields:", { name: !!name, email: !!email, password: !!password });
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    console.log("Calling backend:", BACKEND_URL); // Debug log
    
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    console.log("Backend response status:", response.status); // Debug log

    const data = await response.json();
    console.log("Backend response data:", data); // Debug log

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Register API error:", error); // Debug log
    return NextResponse.json({ 
      error: "Signup failed", 
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}