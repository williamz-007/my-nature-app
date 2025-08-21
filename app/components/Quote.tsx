export default function Quote() {
  return (
    <section className="bg-[#f6f8f5] px-4 text-center pt-32 pb-24">
      <div className="max-w-3xl mx-auto">
        {/* Quote */}
        <h1 className="leading-0 text-8xl font-regular text-[#afb498] mb-2 px-10 font-serif">
          “
        </h1>
        <p className="text-3xl font-normal text-[#4B5320] mb-8 px-6 font-serif">
          “Original and with an innate understanding of their customer’s needs, the team at Love Nature are always a pleasure to work with.”
        </p>

        {/* Image */}
        <div className="flex flex-col items-center">
          <img
            src="/chi.jpg" // ✅ no /public here
            alt="Person Name"
            className="w-12 h-12 rounded-full object-cover mb-3"
          />
          <h4 className="text-sm font-sm text-gray-800">Chidinma Ejom</h4>
        </div>
      </div>
    </section>
  );
}
