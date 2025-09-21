"use client";
import { useState } from "react";
import Link from "next/link";


export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Logging in...");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.error ? data.error : "Login successful!");
  };

  return (
    <main className="max-w-md mx-auto py-4 mt-16">
        <div className="flex justify-center">
    <img
      src="/natural789.png"
      alt="Logo"
      className="h-32 w-32 object-contain" // made smaller
    />
  </div>

    <div className="max-w-md mx-auto mt-6"> {/* reduced from py-10 to mt-6 */}
    <div className="gap-2">
    <h1 className="text-2xl font-semibold mb-6 w-full text-center leading-0">Login</h1>
    <h5 className="text-sm font-regular mb-6 w-full text-center text-gray-500">Get back right into your account to explore</h5>
    </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input name="email" type="email" placeholder="Email" className="w-full border px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="w-full border px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" onChange={handleChange} />
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700">Login</button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>

    <p className="text-m text-center text-gray-600 mt-8 ">
         Don&apost have an account?{" "}
           <Link
            href="/signup"
            className="text-blue-600 hover:underline font-semibold"
          >
            Sign up
          </Link>
        </p>

    </main>
  );
}
