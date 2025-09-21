// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation"; // ✅ for redirect
// import toast from "react-hot-toast"; // ✅ for toasts

// export default function SignupForm() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("/api/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         toast.success("Signup successful!");
//         router.push("/"); // ✅ redirect home
//       } else {
//         const data = await res.json();
//         toast.error(data.error || "Signup failed");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <main className="max-w-md mx-auto py-4 mt-2 ">
//       <div className="flex justify-center">
//         <img
//           src="/natural789.png"
//           alt="Logo"
//           className="h-28 w-28 object-contain"
//         />
//       </div>

//       <h1 className="text-2xl font-semibold mb-6 w-full text-center">Sign Up</h1>
//       <form onSubmit={handleSubmit} className="space-y-8">
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           value={formData.firstName}
//           onChange={handleChange}
//           className="w-full border px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
//           required
//         />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           value={formData.lastName}
//           onChange={handleChange}
//           className="w-full border px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full border px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full border px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
//           required
//         />
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           className="w-full border px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700"
//         >
//           Sign Up
//         </button>

//         {/* 🔹 Login redirect */}
//         <p className="text-m text-center text-gray-600">
//           Already have an account?{" "}
//           <Link
//             href="/login"
//             className="text-blue-600 hover:underline font-semibold"
//           >
//             Log in
//           </Link>
//         </p>
//       </form>
//     </main>
//   );
// }
