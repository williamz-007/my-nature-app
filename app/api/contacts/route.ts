// app/api/contacts/route.ts
import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = 'https://carousel-hazel.vercel.app/api/contact';

// Type definitions
interface BackendContact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

interface FrontendContact {
  Id: string;
  name: string;
  email: string;
  message: string;
  Createdat: string;
}

// Reusable function to fetch contacts from backend
export async function fetchContactsFromBackend() {
  try {
    const response = await fetch(BACKEND_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Backend fetch failed with status: ${response.status}`);
    }

    const data: BackendContact[] = await response.json();
    
    // Transform the data to match your component's expected format
    const transformedData: FrontendContact[] = data.map((item) => ({
      Id: item.id,
      name: item.name,
      email: item.email,
      message: item.message,
      Createdat: item.createdAt
    }));

    return transformedData;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
}

// GET handler
export async function GET() {
  try {
    const data = await fetchContactsFromBackend();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to submit to backend' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}