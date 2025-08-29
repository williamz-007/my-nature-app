// app/submission/page.tsx
import React from "react";
import SubmissionHero from "./components/SubsmissionHero";
import AllCards from "./components/AllCards";

type APISubmission = {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
};

type APIResponse = {
  submissions: APISubmission[];
  total: number;
};

async function getSubmissions() {
  try {
    // Use relative URL for local development, or process.env for production
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://carousel-hazel.vercel.app' 
      : 'http://localhost:3000';
    
    const res = await fetch(`${baseUrl}/api/contact`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Fetch failed with status:", res.status);
      return [];
    }

    const data: APIResponse = await res.json();
    console.log("API response:", data); // Debug log
    
    // The API returns { submissions: [...], total: number }
    const submissions = data.submissions || [];
    
    // Transform the data to match AllCards expected format
    return submissions.map((submission: APISubmission) => ({
      id: submission.id,
      name: submission.name,
      email: submission.email,
      message: submission.message,
      createdAt: submission.timestamp // Map timestamp to createdAt
    }));
    
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return [];
  }
}

export default async function SubmissionPage() {
  const submissions = await getSubmissions();

  return (
    <main>
        <SubmissionHero />
      <h1 className="text-2xl font-bold mb-8 max-w-6xl mx-auto pt-12">
        User Submissions ({submissions.length})
      </h1>
      <AllCards submissions={submissions} />
    </main>
  );
}