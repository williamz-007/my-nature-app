export default function Footer() {
  return (
    <footer className="bg-white text-black py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Nav Links */}
        <nav className="flex flex-wrap justify-center space-x-6">
          <a href="#home" className="hover:text-gray-400 text-[#4B5320]">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 text-[#4B5320]">
            About
          </a>
          <a href="#services" className="hover:text-gray-400 text-[#4B5320]">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-400 text-[#4B5320]">
            Contact
          </a>
        </nav>

        {/* Middle - Logo */}
        <div className="flex-shrink-0  md:pr-16">
          <img
            src="/natural789.png"
            alt="Logo"
            className="h-24 w-24 object-contain"
          />
        </div>

        {/* Right - Name */}
        <div className="text-lg text-[#4B5320] text-center md:text-center">
          © {new Date().getFullYear()} Nature
        </div>
      </div>
    </footer>
  );
}
