"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ Add this import

export default function LoginPage() {
  const router = useRouter(); // ✅ Add this hook
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      
      if (res.ok) {
        // ✅ Store user data and token in localStorage
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        
        setMessage("✅ Login successful! Redirecting...");
        
        // ✅ Redirect to home page after successful login
        setTimeout(() => {
          router.push("/"); // This takes you back to the main website
        }, 1000);
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <main className="max-w-md mx-auto py-4 mt-16 sm:px-60 md:px-0">
        <div className="flex justify-center">
    <img
      src="/natural789.png"
      alt="Logo"
      className="h-32 w-32 object-contain"
    />
  </div>

    <div className="max-w-md mx-auto mt-6">
    <div className="gap-2">
    <h1 className="text-2xl font-semibold mb-6 w-full text-center leading-0">Login</h1>
    <h5 className="text-sm font-regular mb-6 w-full text-center text-gray-500">Get back right into your account to explore</h5>
    </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          className="w-full border px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" 
          onChange={handleChange}
          value={form.email}
          required
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          className="w-full border px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" 
          onChange={handleChange}
          value={form.password}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700">Login</button>
      </form>
      {message && (
        <p className="mt-4 text-center" style={{
          color: message.includes('✅') ? 'green' : message.includes('❌') || message.includes('error') ? 'red' : 'inherit'
        }}>
          {message}
        </p>
      )}
    </div>

    <p className="text-m text-center text-gray-600 mt-8 ">
         Don&#39;t have an account?{" "}
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