"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Image from "next/image";

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function SubmissionPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contacts", { cache: "no-store" });

      if (!res.ok) {
        throw new Error("Failed to fetch contact submissions");
      }

      const contactsData: Contact[] = await res.json();
      setContacts(contactsData);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 w-full bg-white">
        <Image
          src="/sub.jpg"
          alt="Submissions background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <Header />

        <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl text-white font-medium mb-4 tracking-wide">
              Submissions
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              View all contact form messages
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Contact Messages</h2>
          <button
            onClick={fetchContacts}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="text-red-800 font-medium mb-2">Error Loading</h3>
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {contacts.length === 0 ? (
              <p className="text-gray-500">No messages have been received yet.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="bg-white rounded-lg shadow-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {contact.name}
                      </h4>
                      <p className="text-blue-600">
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        {contact.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        {formatDate(contact.createdAt)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
