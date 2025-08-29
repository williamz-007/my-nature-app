// app/submission/all-cards.tsx
import React from "react";

type Submission = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

interface AllCardsProps {
  submissions: Submission[];
}

const AllCards: React.FC<AllCardsProps> = ({ submissions }) => {
  if (submissions.length === 0) {
    return <p className="text-gray-500">No submissions yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pb-21">
      {submissions.map((submission) => (
        <div
          key={submission.id}
          className="border border-gray-200 rounded-xl p-4  transition "
        >
          <h2 className="text-lg font-semibold">{submission.name}</h2>
          <p className="text-sm text-gray-500">{submission.email}</p>
          <p className="mt-2 text-gray-700">{submission.message}</p>
          <p className="mt-2 text-xs text-gray-400">
            {new Date(submission.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllCards;
