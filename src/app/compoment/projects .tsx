import React from 'react';
import Link from 'next/link';
import 'aos/dist/aos.css';  

const Projects = () => {
    return (
        <div id="projects" className="bg-pink-500 min-h-screen p-6">
            <h1 className="text-center font-bold text-4xl text-white">My Projects</h1>

            <main className="flex flex-wrap justify-center mt-8 gap-6">
                {/* Project 1: Calculator */}
                <div className="bg-white shadow-lg border p-4 w-full sm:w-[300px] lg:w-[320px] rounded-lg font-sans overflow-hidden flex flex-col justify-between">
                    <div className="min-h-[245px]">
                        <img
                            src="https://parentalcontrolnow.org/media/57/kTtip49IHzi9FQmYQNtYCvftPdGEjTMSd3yUrbpG.jpg"
                            alt="Calculator"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="pb-4 text-center flex-grow">
                        <h3 className="text-xl font-black">Project 1: Calculator</h3>
                        <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                            Description: A simple calculator app that performs basic arithmetic operations. Perfect for learning JavaScript functions and UI design.
                        </p>
                    </div>
                    <Link href="https://github.com/AreebaNadeem567/project00_calculator.git">
                        <button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold outline-none bg-blue-600 hover:bg-indigo-900">
                            Click here
                        </button>
                    </Link>
                </div>

                {/* Project 2: ATM */}
                <div className="bg-white shadow-lg border p-4 w-full sm:w-[300px] lg:w-[320px] rounded-lg font-sans overflow-hidden flex flex-col justify-between">
                    <div className="min-h-[245px]">
                        <img
                            src="https://play-lh.googleusercontent.com/HDvcBYx8o2RqTeviL40N_HyP-ccg68LH9Sa1MN_sEkxI8cOKwRYWS3XrEda38PolbT0"
                            alt="ATM"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="pb-4 text-center flex-grow">
                        <h3 className="text-xl font-black">Project 2: ATM</h3>
                        <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                            Description: An ATM simulation allowing users to check balances, withdraw and deposit money, and view transaction history.
                        </p>
                    </div>
                    <Link href="https://github.com/AreebaNadeem567/project-2-ATM.git">
                        <button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold outline-none bg-blue-600 hover:bg-indigo-900">
                            Click here
                        </button>
                    </Link>
                </div>

                {/* Project 3: Currency Converter */}
                <div className="bg-white shadow-lg border p-4 w-full sm:w-[300px] lg:w-[320px] rounded-lg font-sans overflow-hidden flex flex-col justify-between">
                    <div className="min-h-[245px]">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsYEZMWHSf7f5Yo4TPHQT3PMu7RkvB-zSdg&s"
                            alt="Currency Converter"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="pb-4 text-center flex-grow">
                        <h3 className="text-xl font-black">Project 3: Currency Converter</h3>
                        <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                            Description: A web app that converts currencies in real time using current exchange rates.
                        </p>
                    </div>
                    <Link href="https://github.com/AreebaNadeem567/project04-currency-converter.git">
                        <button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold outline-none bg-blue-600 hover:bg-indigo-900">
                            Click Here
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Projects;
