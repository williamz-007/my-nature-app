export default function CTA () {
    return(

        <section
  className="relative bg-cover bg-center bg-no-repeat py-24 flex items-center justify-center text-center"
  style={{ backgroundImage: "url('/jungle.jpg')" }}
>
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl px-6 text-white">
    <h2 className="text-4xl md:text-5xl font-medium mb-6">
      QUESTIONS?
    </h2>
    <p className=" text-lg md:text-xl mb-8">
      Whether you&apos;re curious about features, a free trial, or even press, we&apos;re here to answer any questions.
    </p>
     <button className=" px-2 py-3 bg-yellow-300 text-black rounded-lg font-regular w-48 hover:bg-gray-200 hover:text-black">
          Let's Talk Now
        </button>
  </div>
</section>


    );
}