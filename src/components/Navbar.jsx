import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="w-full z-50 absolute md:fixed top-0 left-0 mt-3">
      <div className="container mx-auto p-4 bg-transparent flex items-center justify-between px-4">
        <div className="flex item-center font-bold text-md md:w-1/4">
          <div className="bg-slate-100 text-slate-800 px-4 py-2 rounded-xl ring-1 ring-slate-800 font-Montserrat text-xs font-extrabold">&lt;OTRA /&gt;</div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center mb-10 md:mb-0 md:static">
          <nav className="absolute mx-auto flex justify-center content-between rounded-full bg-slate-600 px-4 py-2 backdrop-filter backdrop-blur-md bg-opacity-30 lg:static gap-1">
            <Link to="about" activeClass="active" spy className="px-4 py-2 text-slate-400 text-xs font-semibold hover:bg-slate-100 hover:text-slate-800 hover:rounded-3xl cursor-pointer">
              ABOUT
            </Link>
            <Link to="tech" activeClass="active" spy className="px-4 py-2 text-slate-400 text-xs font-semibold hover:bg-slate-100 hover:text-slate-800 hover:rounded-3xl cursor-pointer">
              TECH
            </Link>
            <Link to="project" activeClass="active" spy className="px-4 py-2 text-slate-400 text-xs font-semibold hover:bg-slate-100 hover:text-slate-800 hover:rounded-3xl cursor-pointer">
              PROJECTS
            </Link>
            <Link to="contact" activeClass="active" spy className="px-4 py-2 text-slate-400 text-xs font-semibold hover:bg-slate-100 hover:text-slate-800 hover:rounded-3xl cursor-pointer">
              CONTACT
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-end md:w-1/4"></div>
      </div>
    </header>
  );
};

export default Navbar;
