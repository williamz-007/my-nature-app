"use client";

import { useState, useEffect } from "react";
import { Menu, X, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  // Check authentication status
  useEffect(() => {
    setMounted(true);
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem("token");
      const userData = localStorage.getItem("user");
      
      if (token && userData) {
        setIsAuthenticated(true);
        try {
          setUser(JSON.parse(userData));
        } catch (error) {
          console.error("Error parsing user data:", error);
          handleLogout();
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    }
  };

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");
    
    // Update state
    setIsAuthenticated(false);
    setUser(null);
    
    // Close mobile menu if open
    setMenuOpen(false);
    
    // Redirect to login page
    router.push("/login");
  };

  const handleGetStarted = () => {
    setMenuOpen(false);
    router.push("/login");
  };

  if (!mounted) {
    // Return a static version during SSR
    return (
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <Link href="/">
            <Image
              src="/natural.png"
              alt="Nature Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            <nav className="flex space-x-6">
              <Link href="/" className="hover:underline text-white hover:text-gray-200">Home</Link>
              <Link href="/about" className="hover:underline text-white hover:text-gray-200">About</Link>
              <Link href="/services" className="hover:underline text-white hover:text-gray-200">Services</Link>
              <Link href="/contact" className="hover:underline text-white hover:text-gray-200">Contact</Link>
              <Link href="/submission" className="hover:underline text-white hover:text-gray-200">Submission</Link>
            </nav>
            <button className="border border-white text-white px-8 py-2 rounded-lg font-medium hover:bg-white/10">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>
    );
  }

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/natural.png"
            alt="Nature Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          <nav className="flex space-x-6">
            <Link href="/" className="hover:underline text-white hover:text-gray-200">Home</Link>
            <Link href="/about" className="hover:underline text-white hover:text-gray-200">About</Link>
            <Link href="/services" className="hover:underline text-white hover:text-gray-200">Services</Link>
            <Link href="/contact" className="hover:underline text-white hover:text-gray-200">Contact</Link>
            <Link href="/submission" className="hover:underline text-white hover:text-gray-200">Submission</Link>
          </nav>
          
          {/* Conditional Button - Logout if authenticated, Get Started if not */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              {/* {user && (
                <span className="text-white text-sm">
                  Welcome, {user.name || user.email}
                </span>
              )} */}
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 border border-red-400 text-[#ffffff] px-6 py-2 rounded-lg font-medium hover:bg-red-400/60 transition-colors bg-[#e90707] "
              >
                <LogOut className="w-4 h-4 text-white" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={handleGetStarted}
              className="border border-white text-white px-8 py-2 rounded-lg font-medium hover:bg-white/10"
            >
              Get Started
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-white text-2xl z-50">
         {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X className="w-7 h-7" />
          </button>
           
          <nav className="flex flex-col space-y-4 text-center">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/submission" onClick={() => setMenuOpen(false)}>Submission</Link>
          </nav>
          
          {/* Mobile Conditional Button */}
          {isAuthenticated ? (
            <div className="flex flex-col items-center space-y-4">
              {user && (
                <span className="text-white text-lg">
                  Welcome, {user.name || user.email}
                </span>
              )}
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 border border-red-400 text-red-400 px-8 py-2 rounded-lg font-medium hover:bg-red-400/10 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={handleGetStarted}
              className="mt-6 border border-white text-white px-8 py-2 rounded-lg font-medium hover:bg-white/10"
            >
              Get Started
            </button>
          )}
        </div>
      )}
    </header>
  );
}