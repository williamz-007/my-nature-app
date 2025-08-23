export default function Image() {
  const team = [
    { name: "John Doe", image: "/red.jpg" },
    { name: "Jane Smith", image: "/green.jpg" },
    { name: "Mike Johnson", image: "/blue.jpg" },
    { name: "Sarah Williams", image: "/Orangeeee.jpg" },
  ];

  return (
    <section className="py-16 bg-[#f6f8f5]">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-medium font-serif text-[#4B5320] px-130 h-100%">
          We are optimists who love to work together
        </h2>
      </div>

      {/* Team grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white   overflow-hidden flex flex-col items-center p-0"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full aspect-square object-cover "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
