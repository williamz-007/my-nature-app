"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Signing up...");

    try {
      // ✅ Fixed: Use your Next.js API route instead of direct backend call
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Signup successful! Redirecting...");
        setTimeout(() => router.push("/login"), 1500); // ✅ redirect to login page
      } else {
        setMessage(data.error || "Signup failed. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again later.");
      console.error(error);
    }
  };

  return (
    <main className="max-w-md mx-auto py-4 mt-16 px-32 sm:px-0">
      {/* Logo */}
      <div className="flex justify-center">
        <img
          src="/natural789.png"
          alt="Logo"
          className="h-32 w-32 object-contain"
        />
      </div>

      {/* Form */}
      <div className="max-w-md mx-auto mt-6">
        <div className="gap-2">
          <h1 className="text-2xl font-semibold mb-2 text-center">Signup</h1>
          <h5 className="text-lg mb-6 text-center text-gray-500">
            Create an account and enjoy nature in its finest
          </h5>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            placeholder="Name"
            className="w-full border px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </div>

      {/* Login redirect */}
      <p className="text-lg text-center text-gray-600 mt-8">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 hover:underline font-semibold"
        >
          Log in
        </Link>
      </p>
    </main>
  );
}