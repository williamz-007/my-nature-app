// app/submission/page.tsx
import React from "react";
import SubmissionHero from "./components/SubsmissionHero";
import AllCards from "./components/AllCards";
import { fetchContactsFromBackend } from "../api/contacts/route";

type Submission = {
  Id: string;
  name: string;
  email: string;
  message: string;
  Createdat: string;
};

async function getSubmissions(): Promise<Submission[]> {
  try {
    // Use the imported function directly for server-side rendering
    const submissions = await fetchContactsFromBackend();
    console.log("Fetched submissions:", submissions); // Debug log
    return submissions;
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