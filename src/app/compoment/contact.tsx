import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <section id="contact">...</section>
      <section className="text-gray-600 body-font relative bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="container px-5 py-24 mx-auto">
          <div className="w-full text-center mb-10">
            <h1 className="text-4xl font-medium text-white mb-4">Contact Me</h1>
            <p className="leading-relaxed text-white">Feel free to get in touch with me for any inquiries!</p>
          </div>


          <div className="flex flex-col md:flex-row justify-between items-stretch">
            {/* Contact Form */}
            <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0 p-8 rounded-lg shadow-lg md:mr-8">
              <h2 className="title-font text-3xl font-medium text-gray-900 mb-4 text-center">Contact</h2>
              <p className="leading-relaxed mb-5 text-gray-600 text-center">Feel free to contact me</p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send Message
              </button>
            </div>

            {/* Map Section */}
            <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden p-8 flex items-end justify-start relative mt-8 md:mt-0 shadow-lg">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ filter: 'contrast(1.2) opacity(0.4)' }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p className="mt-1"> 124/8 Market Karachi </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <a className="text-indigo-500 leading-relaxed">areeba12@gmail.com</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <p className="leading-relaxed">032-456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;