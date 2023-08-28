import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";

const Tech = () => {
  const techRef = useRef(null);
  const isInView = useInView(techRef, { once: true });
  const [frontend, setFrontend] = useState(false);
  const [backend, setBackend] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [database, setDatabase] = useState(false);

  const frontendHandler = () => {
    setFrontend((frontend) => !frontend);
  };
  const backendHandler = () => {
    setBackend((backend) => !backend);
  };
  const mobileHandler = () => {
    setMobile((mobile) => !mobile);
  };
  const databaseHandler = () => {
    setDatabase((database) => !database);
  };

  return (
    <section id="tech" ref={techRef} className="bg-slate-100">
      <div className="container mx-auto px-4 lg:px-28">
        <div className="pb-20">
          <div className="scene w-full h-full">
            <div className="w-full panel">
              <div className="pt-20">
                <div className="block relative overflow-hidden">
                  <motion.h2
                    style={{
                      transform: isInView ? "none" : "translateY(200px)",
                      opacity: isInView ? 1 : 0,
                      transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                    className="text-sm md:text-xl font-bold font-Dunk text-slate-900 text-right relative"
                  >
                    SET OF TECHNOLOGIES
                  </motion.h2>
                </div>
                <div className="block relative overflow-hidden">
                  <motion.h2
                    style={{
                      transform: isInView ? "none" : "translateY(200px)",
                      opacity: isInView ? 1 : 0,
                      transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                    }}
                    className="text-4xl md:text-5xl font-extrabold text-slate-500 text-right font-Dunk"
                  >
                    TECHSTACK
                  </motion.h2>
                </div>
              </div>
              <div className="block relative overflow-hidden techlist group" onClick={frontendHandler}>
                <motion.h1
                  style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
                  }}
                  className={`text-3xl md:text-8xl font-Dunk text-stroke ${frontend ? "text-slate-100" : "text-slate-900 hover:text-slate-100"}  cursor-pointer text-right py-3`}
                >
                  <span className="text-xl align-top">1</span>/FRONTEND
                </motion.h1>
                <AnimatePresence>
                  {frontend && (
                    <motion.div initial={{ opacity: 0, x: 1000 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 1000 }} transition={{ duration: 2 }} className="w-full md:w-2/3  float-right pb-3">
                      <Marquee speed={50} autoFill pauseOnHover gradient gradientWidth={100} gradientColor={[241, 245, 249]} className="h-[50px] overflow-hidden w-1/2">
                        <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" alt="" className="w-auto h-[40px] mr-10" />
                      </Marquee>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="block relative overflow-hidden techlist group" onClick={backendHandler}>
                <motion.h1
                  style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
                  }}
                  className={`text-3xl md:text-8xl font-Dunk text-stroke ${backend ? "text-slate-100" : "text-slate-900 hover:text-slate-100"}  cursor-pointer text-right py-3`}
                >
                  <span className="text-xl align-top">2</span>/BACKEND
                </motion.h1>
                <AnimatePresence>
                  {backend && (
                    <motion.div initial={{ opacity: 0, x: 1000 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 1000 }} transition={{ duration: 2 }} className="w-full md:w-2/3  float-right pb-3">
                      <Marquee speed={50} autoFill pauseOnHover gradient gradientWidth={100} gradientColor={[241, 245, 249]} className="h-[50px] overflow-hidden w-1/2">
                        <img src="https://cdn.worldvectorlogo.com/logos/nodejs.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/express-109.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/php-1.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/lumen-1.svg" alt="" className="w-auto h-[40px] mr-10" />
                      </Marquee>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="block relative overflow-hidden techlist group" onClick={mobileHandler}>
                <motion.h1
                  style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s",
                  }}
                  className={`text-3xl md:text-8xl font-Dunk text-stroke ${mobile ? "text-slate-100" : "text-slate-900 hover:text-slate-100"}  cursor-pointer text-right py-3`}
                >
                  <span className="text-xl align-top">3</span>/MOBILE APP
                </motion.h1>
                <AnimatePresence>
                  {mobile && (
                    <motion.div initial={{ opacity: 0, x: 1000 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 1000 }} transition={{ duration: 2 }} className="w-full md:w-2/3  float-right pb-3">
                      <Marquee speed={50} autoFill pauseOnHover gradient gradientWidth={100} gradientColor={[241, 245, 249]} className="h-[50px] overflow-hidden w-1/2">
                        <img src="https://cdn.worldvectorlogo.com/logos/android-studio-logo.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/java-4.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/kotlin-1.svg" alt="" className="w-auto h-[40px] mr-10" />
                      </Marquee>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="block relative overflow-hidden techlist group" onClick={databaseHandler}>
                <motion.h1
                  style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 3s",
                  }}
                  className={`text-3xl md:text-8xl font-Dunk text-stroke ${database ? "text-slate-100" : "text-slate-900 hover:text-slate-100"}  cursor-pointer text-right py-3`}
                >
                  <span className="text-xl align-top">4</span>/DATABASE
                </motion.h1>
                <AnimatePresence>
                  {database && (
                    <motion.div initial={{ opacity: 0, x: 1000 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 1000 }} transition={{ duration: 2 }} className="w-full md:w-2/3  float-right pb-3">
                      <Marquee speed={50} autoFill pauseOnHover gradient gradientWidth={100} gradientColor={[241, 245, 249]} className="h-[50px] overflow-hidden w-1/2">
                        <img src="https://cdn.worldvectorlogo.com/logos/mysql-logo.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="" className="w-auto h-[40px] mr-10" />
                        <img src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" alt="" className="w-auto h-[40px] mr-10" />
                      </Marquee>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
