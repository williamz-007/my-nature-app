// components/OurServices.tsx
export default function OurServices() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-medium mb-8 pb-4 inline-block">
  Our Services
  <span className="block w-20 border-b-[3px] border-yellow-400 mt-1 mx-auto rounded-full"></span>
</h2>
      <div className="flex flex-wrap justify-center gap-0">
        {[
          { image: "/nature1.jpg", title: "Web Design", desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people." },
          { image: "/nature2.jpg", title: "Graphic Design", desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people." },
          { image: "/nature4.jpg", title: "Content Creation", desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people." },
        ].map((service, i) => (
          <div key={i} className=" rounded-lg overflow-hidden text-center w-sm">
            <img src={service.image} alt={service.title} className="w-86 h-106 mx-auto object-cover px-0" />
            <h3 className="mt-4 text-lg  font-semibold text-left px-8">{service.title}</h3>
            <p className="mt-2 text-gray-600 text-lg px-8 font-normal text-left">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
