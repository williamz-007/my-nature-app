'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';

interface Contact {
  Id: string;
  name: string;
  email: string;
  message: string;
  Createdat: string;
}

export default function SubmissionPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/contacts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch contacts: ${response.status}`);
      }

      // Raw backend data
      const rawData: {
        id: string;
        name: string;
        email: string;
        message: string;
        createdAt: string;
      }[] = await response.json();

      // Transform into frontend-friendly format
      const transformed: Contact[] = rawData.map((item) => ({
        Id: item.id,
        name: item.name,
        email: item.email,
        message: item.message,
        Createdat: item.createdAt,
      }));

      setContacts(transformed);
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
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
              Contact Submissions
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              View all contact form submissions
            </p>
          </div>
        </div>
      </section>

      {/* Submissions Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Recent Submissions ({contacts.length})
            </h2>
            <button
              onClick={fetchContacts}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-red-800 font-medium mb-2">Error Loading Submissions</h3>
              <p className="text-red-600">{error}</p>
              <button
                onClick={fetchContacts}
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && contacts.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-xl font-medium text-gray-600 mb-2">
                  No Submissions Yet
                </h3>
                <p className="text-gray-500">
                  Contact form submissions will appear here once received.
                </p>
              </div>
            </div>
          )}

          {!loading && !error && contacts.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {contacts.map((contact) => (
                <div
                  key={contact.Id}
                  className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {contact.name}
                      </h3>
                      <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
                        {formatDate(contact.Createdat)}
                      </span>
                    </div>

                    <div className="mb-3">
                      <p className="text-sm text-gray-600 font-medium">Email:</p>
                      <p className="text-blue-600 hover:text-blue-800 transition-colors break-all">
                        <a href={`mailto:${contact.email}`}>
                          {contact.email}
                        </a>
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 font-medium mb-2">Message:</p>
                      <div className="bg-gray-50 rounded-md p-3 max-h-32 overflow-y-auto">
                        <p className="text-sm text-gray-800 whitespace-pre-wrap">
                          {contact.message}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500">ID: {contact.Id}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
