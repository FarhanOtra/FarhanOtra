import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import cv from "../assets/cv.pdf";

const AboutDetail = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true });

  return (
    <div ref={aboutRef} className=" bg-slate-950 overflow-hidden">
      <div className="container mx-auto pb-32 pt-4 px-4 lg:px-28 justify-center items-center  flex flex-wrap">
        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="w-full md:w-1/2 text-center md:text-left pr-5"
        >
          <h2 className="text-2xl pt-10 font-bold font-Montserrat text-slate-500">About Me</h2>
          <h1 className="text-4xl font-extrabold text-slate-100">Greetings!</h1>
          <p className="text-sm pt-4 text-slate-300 font-Poppins">I`m Farhan Naufal Otra, an aspiring ReactJS Developer fueled by a strong passion for web development and a desire to master the world of React. While my professional journey is just beginning, my enthusiasm and determination to learn are boundless.</p>
          <button className="mt-5 px-4 py-2 border text-xs text-slate-100 font-bold rounded-md hover:bg-slate-200 hover:text-slate-700 hover:scale-105 hover:tracking-wider duration-300">
            <a href={cv} download="CV_FarhanNaufalOtra" target="_blank" rel="noreferrer">
              DOWNLOAD CV
            </a>
          </button>
        </motion.div>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="w-full md:w-1/2 text-center md:text-right"
        >
          <h1 className="text-4xl pt-10 font-extrabold text-slate-100 ">Lets Connect!</h1>
          <p className="text-sm py-4 text-slate-300 font-Poppins">If youre looking for an aspiring ReactJS Developer whos brimming with enthusiasm, a hunger for learning, and a genuine interest in contributing, lets connect. Im eager to embark on this exciting journey and collaborate on projects that not only enhance my skills but also deliver valuable solutions. Lets explore the world of React together and create something remarkable!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutDetail;
