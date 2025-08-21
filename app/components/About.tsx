export default function About() {
  return (
   <section className="bg-[var(--background)] text-[var(--foreground)] py-16 min-h-screen flex items-center justify-center">
  <div className="w-full max-w-7xl px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-evenly gap-12">
    
    {/* Left Content */}
    <div className="flex-1 max-w-xl pl-4 pr-16">
        <p className="text-sm mb-6 text-[#4B5320]">
        ABOUT US
      </p>
      <h2 className="text-4xl font-medium mb-4">
        Tell website visitors who you are and why they should choose your business.
      </h2>
      <p className="text-lg mb-6 text-gray-600">
        Because when a visitor first lands on your website, you're a stranger to them. 
        They have to get to know you in order to want to read your blog posts, subscribe to your email newsletter, or buy what you're selling.
      </p>
      <button className="px-12 py-3 border border-[#4B5320] text-[#4B5320] rounded-lg w-48 hover:bg-[#4B5320]/8 hover:text-[#4B5320]">
        Get Started
      </button>
    </div>

    {/* Right Image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/handleaf.jpg"
        alt="Section Image"
        className="w-[400px] h-[500px] shadow-lg object-cover"
      />
    </div>
  </div>
</section>

  );
}
