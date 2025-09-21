// app/api/contacts/route.ts
import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = "https://carousel-hazel.vercel.app/api/contact";

// GET handler
export async function GET() {
  try {
    const response = await fetch(BACKEND_URL, { method: "GET" });

    if (!response.ok) {
      const text = await response.text();
      console.error("Backend error:", text);
      return NextResponse.json(
        { error: "Failed to fetch contact submissions" },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Ensure it's always an array
    const contacts = Array.isArray(data) ? data : data.data || [];

    return NextResponse.json(contacts, { status: 200 });
  } catch (err) {
    console.error("GET /contacts error:", err);
    return NextResponse.json(
      { error: "Unable to connect to backend" },
      { status: 500 }
    );
  }
}
