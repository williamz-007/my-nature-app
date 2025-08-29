import { NextRequest, NextResponse } from 'next/server';

// Define the structure of the contact form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

type StoredSubmission = ContactFormData & { 
  id: string; 
  timestamp: string; 
};

// Use environment variable or in-memory storage as fallback
// In production, this will reset between function calls, but won't crash
const submissions: StoredSubmission[] = [];

export async function POST(request: NextRequest) {
  try {
    console.log('POST request received');
    
    const body: ContactFormData = await request.json();
    console.log('Request body:', body);
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      console.log('Validation failed: missing fields');
      return NextResponse.json(
        { error: 'All fields (name, email, message) are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      console.log('Validation failed: invalid email');
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create submission with ID and timestamp
    const submission: StoredSubmission = {
      id: Date.now().toString(),
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      message: body.message.trim(),
      timestamp: new Date().toISOString()
    };

    console.log('Created submission:', submission);

    // Store the submission in memory
    submissions.push(submission);
    console.log('Total submissions:', submissions.length);

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
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    console.log('GET request received');
    console.log('Current submissions count:', submissions.length);
    
    return NextResponse.json({
      submissions: submissions.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      ),
      total: submissions.length,
      message: `Retrieved ${submissions.length} submissions`
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}