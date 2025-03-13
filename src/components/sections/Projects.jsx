import { RevealOnScroll } from "../RevealOnScroll";
import ArdunioMachine from "/src/assets/ardunio.png";
import ContrastApp from "/src/assets/contrastApp.png";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-slate-800 to-sky-900 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border shadow-sm border-sky-900/10 hover:-translate-y-1 hover:border-sky-900/20 transition-all">
              <div className="flex justify-between">
                <div className="mr-1">
                  <h3 className="text-xl font-bold">
                    Constrast Checker Prototype App
                  </h3>
                  <p className="text-neutral-800 mb-2 italic">Feb 2024</p>
                  <p className="text-neutral-800 mb-4">
                    Designed and implemented prototype app allowings users to
                    input foreground and background colors, displaying the
                    contrast ratio and WCAG accessibility level. App integrated
                    Color Contrast Checker library for calculations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Vue.js"].map((skill, key) => (
                      <span
                        key={key}
                        className="bg-amber-800/10 text-amber-800 py-1 px-4 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <img
                  src={ContrastApp}
                  alt="Constrast App Prototype"
                  className="w-1/3 h-auto rounded-xl object-cover mb-1 border shadow-sm border-amber-800/10 "
                />
              </div>
            </div>

            <div className="p-6 rounded-xl border shadow-sm border-sky-900/10 hover:-translate-y-1 hover:border-sky-900/20 transition-all">
              <div className="flex justify-between">
                <div className="mr-1">
                  <h3 className="text-xl font-bold">Ardunio Drawing Machine</h3>
                  <p className="text-neutral-800 mb-2 italic">
                    Sept - Dec 2024
                  </p>
                  <p className="text-neutral-800 mb-4">
                    2.5DoF gantry marker plotting machine created with ESP32
                    Feather, hardware, and 3D printed components. Machine draws
                    with automated text/shape input, with manual joystick
                    control for freedraw and marker pressure adjustment.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["C++", "3D Modeling"].map((skill, key) => (
                      <span
                        key={key}
                        className="bg-amber-800/10 text-amber-800 py-1 px-4 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <img
                  src={ArdunioMachine}
                  alt="Arduino Drawing Machine"
                  className="w-1/3 h-auto rounded-xl object-cover mb-1 border shadow-sm border-amber-800/10"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
