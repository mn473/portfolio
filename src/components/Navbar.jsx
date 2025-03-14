import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-slate-50/5 backdrop-blur-lg border-b border-slate-50/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="text-xl font-bold bg-gradient-to-r  from-slate-800 to-sky-900 bg-clip-text text-transparent"
          >
            Monica Nguyenduy
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-neutral-800 hover:text-neutral-950 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-neutral-800 hover:text-neutral-950 transition-colors"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
