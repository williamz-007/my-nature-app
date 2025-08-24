export default function Form() {
  return (
    <section className="w-full bg-white py-40 item-start justify-start ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">
          {/* Heading */}
          <h2 className="text-4xl font-medium font-serif text-[#4B5320]">You can find us at</h2>

          {/* Email */}
          <div className="space-y-1">
            <h3 className="text-sm font-regular text-gray-400">EMAIL</h3>
            <p className="text-gray-600 text-lg">hello@example.com</p>
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <h3 className="text-sm font-regular text-gray-400">PHONE NUMBER </h3>
            <p className="text-gray-600 text-lg">+1 (234) 567-890</p>
          </div>

          {/* Location */}
          <div className="space-y-1">
            <h3 className="text-sm font-regular text-gray-400">LOCATION</h3>
            <p className="text-gray-600 text-lg">2360 Hood Avenue, San Diego, CA, 92123</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {/* Twitter */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#4B5320] rounded-full cursor-pointer">
              <svg
      className="w-6 h-6 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 
        1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 
        1.195-.897-.959-2.178-1.559-3.594-1.559-2.72 
        0-4.924 2.204-4.924 4.924 0 .39.045.765.127 
        1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 
        1.577-.666 2.475 0 1.708.87 3.216 2.188 
        4.099-.807-.026-1.566-.247-2.229-.616v.062c0 
        2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 
        0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 
        3.419-1.68 1.318-3.809 2.105-6.102 
        2.105-.396 0-.787-.023-1.175-.068 2.179 1.397 4.768 
        2.212 7.557 2.212 9.054 0 14-7.496 
        14-13.986 0-.21 0-.423-.015-.634.961-.689 
        1.8-1.56 2.46-2.548z"/>
    </svg>
            </div>

            {/* Instagram */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#4B5320] rounded-full cursor-pointer">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
              </svg>
            </div>

            {/* YouTube */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#4B5320] rounded-full cursor-pointer">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.8 8.001a2.751 2.751 0 0 0-1.94-1.948C18.042 6 12 6 12 6s-6.042 0-7.86.053a2.75 2.75 0 0 0-1.94 1.948A28.892 28.892 0 0 0 2 12a28.89 28.89 0 0 0 .2 3.999 2.751 2.751 0 0 0 1.94 1.948C5.958 18 12 18 12 18s6.042 0 7.86-.053a2.75 2.75 0 0 0 1.94-1.948A28.89 28.89 0 0 0 22 12a28.892 28.892 0 0 0-.2-3.999ZM10 15.5v-7l6 3.5-6 3.5Z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white px-8 flex flex-col gap-8">
          <h3 className="text-4xl font-medium font-serif text-[#4B5320]">
            Let&apos;s Get In Touch
          </h3>

          <form className="flex flex-col gap-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className=" border-b-1 border-gray-300 py-3 focus:outline-none focus:border-yellow-500 placeholder-gray-400"
            />
            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="border-b-1 border-gray-300 py-3 focus:outline-none focus:border-yellow-500 placeholder-gray-400"
            />
            {/* Message */}
            <textarea
              rows={4}
              placeholder="Your Message"
              className="border-b-1 border-gray-300 py-3 focus:outline-none focus:border-yellow-500 placeholder-gray-400"
            ></textarea>
            
            {/* Button */}
            <button
              type="submit"
              className="mt-2 bg-yellow-300 text-[#4B5320] font-medium py-4 rounded-lg hover:bg-yellow-400/40 transition w-fit px-8 text-sm font"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
