import { NextRequest, NextResponse } from 'next/server';

// Define the structure of the contact form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// In-memory storage for submissions (replace with database in production)
let submissions: (ContactFormData & { id: string; timestamp: Date })[] = [];

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'All fields (name, email, message) are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create submission with ID and timestamp
    const submission = {
      id: Date.now().toString(),
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      message: body.message.trim(),
      timestamp: new Date()
    };

    // Store the submission
    submissions.push(submission);

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: submission.id 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return all submissions (you might want to add pagination)
    return NextResponse.json({
      submissions: submissions.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      ),
      total: submissions.length
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}