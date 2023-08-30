import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Marquee from "react-fast-marquee";
import photo from "../assets/photo.png";
import AboutDetail from "./AboutDetail";

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const paralaxText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <section ref={ref} id="about">
      <div className="w-full bg-slate-950">
        <motion.div style={{ y: paralaxText }} className="h-1/2 pt-40 pb-30 z-0">
          <div className="block overflow-hidden">
            <motion.h1 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5 }} className="text-slate-100 font-light text-3xl text-center font-Montserrat">
              WEB DEVELOPER
            </motion.h1>
          </div>
          <div className="block overflow-hidden">
            <motion.h2 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 1, delay: 0.5 }} className="text-slate-100 font-extrabold tracking-wide text-6xl text-center font-Montserrat">
              FARHAN NAUFAL OTRA
            </motion.h2>
          </div>
          <ul className="flex justify-center mt-4 mb-4 space-x-5">
            <motion.li initial={{ scale: 0, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 1.5 }}>
              <a href="https://www.linkedin.com/in/farhanotra/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </motion.li>
            <motion.li initial={{ scale: 0, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 2 }}>
              <a href="http://www.github.com/farhanotra" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-slate-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </motion.li>
            <motion.li initial={{ scale: 0, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.5, delay: 2.5 }}>
              <a href="https://api.whatsapp.com/send?phone=6282268328293" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </motion.li>
          </ul>
        </motion.div>
        <div className="h-1/2 justify-center flex">
          <img src={photo} alt="" className="h-[400px] min-h-min justify-center z-10"></img>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-slate-950">
        <Marquee speed={100} autoFill pauseOnHover className="bg-slate-500 text-7xl font-extrabold tracking-wide overflow-hidden font-Dunk pt-4">
          ABOUTMEABOUTME<p className="text-slate-100">&copy;FARHANOTRA</p>ABOUTMEABOUTME
        </Marquee>
      </div>
      <AboutDetail />
    </section>
  );
};
export default About;
