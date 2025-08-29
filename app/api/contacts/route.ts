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
export async function fetchContactsFromBackend(): Promise<FrontendContact[]> {
  try {
    const response = await fetch(BACKEND_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Backend fetch failed with status:', response.status);
      throw new Error(`Backend fetch failed with status: ${response.status}`);
    }

    const data: BackendContact[] = await response.json();
    
    // Transform the data to match your component's expected format
    const transformedData: FrontendContact[] = data.map((item: BackendContact) => ({
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

// GET handler - fetch all contacts from backend
export async function GET(request: NextRequest) {
  try {
    const data = await fetchContactsFromBackend();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in GET handler:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST handler - submit contact form to backend
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
      console.error('Backend POST failed with status:', response.status);
      return NextResponse.json(
        { error: 'Failed to submit to backend' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}