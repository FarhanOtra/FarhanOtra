import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import scanlaptop from "../assets/scan-laptop.png";
import scanmobile from "../assets/scan-mobile.png";
import tmplaptop from "../assets/template-laptop.png";
import tmpmobile from "../assets/template-mobile.png";

const Project = () => {
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, { once: true });

  return (
    <section id="project" ref={projectRef} className="bg-slate-950 pt-16">
      <div className="container mx-auto mb-16 px-4 lg:px-28">
        <div className="block relative overflow-hidden">
          <motion.h2
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="text-sm md:text-xl font-bold font-Dunk text-slate-500 text-center relative"
          >
            List of
          </motion.h2>
        </div>
        <div className="block relative overflow-hidden">
          <motion.h2
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
            className="text-4xl md:text-5xl font-extrabold text-slate-100 text-center font-Dunk"
          >
            PROJECTS
          </motion.h2>
        </div>
      </div>
      <div className="block relative overflow-hidden">
        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(100%)",
            transition: "transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
          }}
          className="flex flex-wrap lg:flex-nowrap w-full mx-auto gap-4 group hover:bg-slate-100 transition-colors duration-500 px-4 lg:px-28 py-5 lg:py-16"
        >
          <div className="w-full lg:w-2/5">
            <h1 className="text-3xl text-slate-100 font-bold mb-3 font-Montserrat tracking-widest group-hover:text-slate-950">SCAN</h1>
            <h2 className="text-sm text-slate-300 font-Poppins group-hover:text-slate-900">SCAN is a mobile-based student attendance information system using the QR Code feature so that the attendance recording process can run faster and more effectively. Features owned by SCAN are recording student attendance, recapitulating student attendance and student leave letters through mobile applications</h2>
            <hr className="h-px my-3 bg-slate-100 group-hover:border-slate-950 border-1"></hr>
            <div className="w-full h-10 flex gap-3">
              <div className="flex flex-fit w-3/4 gap-3 rounded-md bg-slate-100 py-3 px-4 justify-center group-hover:ring-1 group-hover:ring-slate-950">
                <img src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg" alt="" />
                <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" alt="" />
                <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="" />
                <img src="https://cdn.worldvectorlogo.com/logos/android-logomark.svg" alt="" />
                <img src="https://cdn.worldvectorlogo.com/logos/java-4.svg" alt="" />
              </div>
              <div className="flex w-1/4 gap-1 rounded-md bg-slate-300 py-3 px-6 lg:px-10 justify-center cursor-pointer hover:scale-110 transition-all duration-500">
                <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="" />
                <img src="https://cdn.worldvectorlogo.com/logos/github-2.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-3/5 gap-4">
            <div className="flex w-full md:w-3/5 aspect-video bg-gradient-to-tr from-zinc-200 to-neutral-300 group-hover:bg-gradient-to-tr group-hover:from-zinc-900 group-hover:to-gray-700 rounded-xl overflow-hidden relative transition-all duration-308700">
              <img src={scanlaptop} alt="" className="w-3/4 h-3/4 absolute right-0 bottom-[100%] group-hover:bottom-0 duration-700" />
            </div>
            <div className="flex w-full md:w-2/5 aspect-video bg-gradient-to-tr from-zinc-200 to-neutral-300 group-hover:bg-gradient-to-tr group-hover:from-zinc-900 group-hover:to-gray-700 rounded-xl overflow-hidden relative group item">
              <img src={scanmobile} alt="" className="z-10 w-full h-full p-10 absolute left-0 bottom-[100%] group-hover:bottom-0 duration-700 self-center" />
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        style={{
          transform: isInView ? "none" : "translateX(-100%)",
          transition: "transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
        }}
        className="block relative overflow-hidden"
      >
        <div className="flex flex-wrap-reverse lg:flex-nowrap w-full mx-auto gap-4 group hover:bg-slate-100 transition-colors duration-500 px-4 lg:px-28 py-5 lg:py-16">
          <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-3/5 gap-4">
            <div className="w-full lg:w-2/5 aspect-video bg-gradient-to-tr from-zinc-200 to-neutral-300 group-hover:bg-gradient-to-tr group-hover:from-zinc-900 group-hover:to-gray-700 rounded-xl overflow-hidden relative group item">
              <img src={tmpmobile} alt="" className="z-10 w-full h-full p-10 absolute left-0 bottom-[100%] group-hover:bottom-0 duration-700 self-center" />
            </div>
            <div className="flex w-full lg:w-3/5 aspect-video bg-gradient-to-tr from-zinc-200 to-neutral-300 group-hover:bg-gradient-to-tr group-hover:from-zinc-900 group-hover:to-gray-700 rounded-xl overflow-hidden relative transition-all duration-308700">
              <img src={tmplaptop} alt="" className="w-3/4 h-3/4 absolute left-0 bottom-[100%] group-hover:bottom-0 duration-700" />
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <h1 className="text-3xl text-slate-100 font-bold mb-3 font-Montserrat tracking-widest group-hover:text-slate-950">COMING SOON</h1>
            <h2 className="text-sm text-slate-300 font-Poppins group-hover:text-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, excepturi inventore reprehenderit eius molestiae facilis repudiandae natus earum nisi deserunt porro officia quidem ut, dolorum modi quibusdam quam. Inventore, quasi! Commodi omnis minus totam dignissimos nisi unde vitae quos ullam, tempora error perferendis repellat obcaecati maiores esse laborum fugit magnam.</h2>
            <hr className="h-px my-3 bg-slate-100 group-hover:border-slate-950 border-1"></hr>
            <div className="w-full h-10 flex gap-3">
              <div className="flex flex-fit w-3/4 gap-3 rounded-md bg-slate-100 py-3 px-4 justify-center group-hover:ring-1 group-hover:ring-slate-950">
                <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="" />
                <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="" />
                <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="" />
              </div>
              <div className="flex w-1/4 gap-1 rounded-md bg-slate-300  py-3 px-6 lg:px-10 justify-center cursor-pointer hover:scale-110 transition-all duration-500">
                <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="" />
                <img src="https://cdn.worldvectorlogo.com/logos/github-2.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
