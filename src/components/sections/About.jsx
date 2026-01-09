import { RevealOnScroll } from "../RevealOnScroll";
import Headshot from "/src/assets/headshot.jpg";

const frontendSkills = [
  "HTML/CSS",
  "Javascript",
  "TailwindCSS",
  "Bootstrap",
  "React.js",
  "Vue.js",
  "D3.js",
];
const backendSkills = ["Python", "Java", "C++", "PHP", "OCaml"];
const dataSkills = [
  "SQL",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
];
const technology = [
  "GitHub",
  "VSCode",
  "Figma",
  "Tableau",
  "Oracle SQL Developer",
  "WhereScape Red",
  "AutoDesk Fusion",
];

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center
      relative py-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 my-3">
          <h2 className="text-4xl md:text-5xl font-bold mb-1 bg-gradient-to-r from-slate-800 to-sky-900 bg-clip-text text-transparent text-center leading-tight">
            About Me
          </h2>
          <p className="text-neutral-800 md:text-xl italic text-center mb-6">
            A quick introduction of my background and interests...
          </p>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src={Headshot}
              alt="Monica Nguyenduy"
              className="w-1/3 h-auto md:w-1/3 md:h-auto object-scale-down rounded-xl"
            />

            <div className="flex flex-col">
              <div>
                <p className="text-neutral-800 mb-6">
                  Hi, I am Monica Nguyenduy! I'm a Cornell graduate with a{" "}
                  <span className="text-amber-800">
                    B.S. in Information Science, Systems, and Technology
                  </span>{" "}
                  with concentrations in
                  <span className="text-amber-800"> Interactive Tech </span>and
                  <span className="text-amber-800"> UX Design</span>. I'm into
                  coding all types of projects, especially interactive ones. I'm
                  always down to learn new skills, hoping to explore 3D modeling
                  for fun. I'm seeking full-time job opportunities in
                  technology!
                </p>
                <p className="text-neutral-800 mb-6">
                  Feel free to contact me at monicanguyenduy@gmail.com!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-3">
                    {frontendSkills.map((skill, key) => (
                      <span
                        key={key}
                        className="bg-amber-800/10 text-amber-800 py-1 px-3 rounded-full text-sm hover:-translate-y-1 transition-all
                    "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 ">
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-3">
                    {backendSkills.map((skill, key) => (
                      <span
                        key={key}
                        className="bg-amber-800/10 text-amber-800 py-1 px-3 rounded-full text-sm hover:-translate-y-1 transition-all
                    "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Data</h3>
                  <div className="flex flex-wrap gap-3">
                    {dataSkills.map((skill, key) => (
                      <span
                        key={key}
                        className="bg-amber-800/10 text-amber-800 py-1 px-3 rounded-full text-sm hover:-translate-y-1 transition-all
                    "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    {technology.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-sky-900/10 text-sky-900 py-1 px-3 rounded-full text-sm hover:-translate-y-1 transition-all
                    "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
