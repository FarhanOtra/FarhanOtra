import { useState } from "react";
import earth from "../assets/earth.gif";

const Contact = () => {
  const [isCopy, setCopy] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText("otra.farhan@gmail.com");
    setCopy(true);
  };

  return (
    <section id="contact">
      <div className="container h-screen p-16 mx-auto px-4 lg:px-28">
        <h2 className="text-md pt-10 font-bold font-Dunk text-slate-900 text-center">Get in Touch</h2>
        <h1 className="text-4xl font-extrabold text-slate-500 text-center font-Dunk">CONTACT</h1>
        <div className="py-16 grid grid-cols-4 lg:grid-cols-8 gap-3">
          <div className="flex flex-wrap content-between p-10 lg:p-16 col-span-4 lg:col-span-6 row-span-2 bg-slate-950 rounded-xl">
            <div className="w-full">
              <h1 className="text-slate-100 font-Poppins">
                <span className="animate-ping absolute">🟢</span>
                <span>🟢</span> Available for Work
              </h1>
            </div>
            <div className="w-full">
              <h1 className="text-3xl font-Poppins text-slate-100 font-extrabold">Contact Me.</h1>
              <h2 className="text-xl font-Poppins text-slate-400 mb-12">otra.farhan@gmail.com</h2>
            </div>
            <div className="w-full flex">
              <a href="mailto:otra.farhan@gmail.com" className="block w-full px-8 py-3 bg-slate-300 mr-3 font-semibold font-Poppins text-xl rounded-xl text-center hover:bg-slate-400 hover:scale-[102%] transition-all duration-500 group">
                <button className="text-slate-950 group-hover:text-slate-100 group-hover:tracking-wider transition-all duration-500">Email Me!</button>
              </a>
              <button className="w-[50px] px-3 py-3 bg-slate-300 font-Poppins text-xl rounded-xl hover:bg-slate-400 hover:scale-[110%] focus:bg-slate-100 transition-all duration-500 group text-center flex justify-center items-center" onClick={copyHandler}>
                {isCopy ? (
                  <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 14L9 17L18 6" stroke="#33363F" strokeWidth="3" />
                  </svg>
                ) : (
                  <svg width="auto" height="auto" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                      fill="#000000"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/farhanotra/" target="_blank" rel="noreferrer">
            <div className="p-5 lg:p-12 bg-slate-950 rounded-xl hover:scale-105 hover:bg-slate-800 group transition-all duration-500">
              <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-1.svg" alt="" className="invert grayscale group-hover:scale-105 transition-all duration-500" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/farhanotra/" target="_blank" rel="noreferrer">
            <div className="p-5 lg:p-12 bg-slate-950 rounded-xl hover:scale-105 hover:bg-slate-800 group transition-all duration-500">
              <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="" className="invert grayscale-1 hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/farhanotra/" target="_blank" rel="noreferrer">
            <div className="p-5 lg:p-12 bg-slate-950 rounded-xl hover:scale-105 hover:bg-slate-800 group transition-all duration-500">
              <img src="https://cdn.worldvectorlogo.com/logos/whatsapp-glyph-black.svg" alt="" className="invert grayscale group-hover:scale-105 transition-all duration-500" />
            </div>
          </a>
          <div className="bg-slate-950 rounded-xl hover:scale-105 hover:bg-slate-800 group transition-all duration-500 overflow-hidden relative">
            <img src={earth} alt="" className="w-full h-full" />
            <h1 className="text-sm p-1 lg:p-4 absolute right-0 bottom-0 text-slate-100 font-Poppins">📍Indonesia</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
