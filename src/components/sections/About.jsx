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
const backendSkills = ["Python", "Java", "PHP", "C++", "OCaml"];
const dataSkills = [
  "SQL",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
];
const technology = [
  "Git",
  "VSCode",
  "Figma",
  "Tableau",
  "AutoDesk Fusion",
  "Ardunio",
];

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center
      relative"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-slate-800 to-sky-900 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src={Headshot}
              alt="Monica Nguyenduy"
              className="w-1/3 h-auto md:w-1/3 md:h-auto object-scale-down rounded-xl"
            />

            <div className="flex flex-col">
              <div>
                <p className="text-neutral-800 mb-6">
                  Hi, I'm Monica Nguyenduy! I'm a senior studying
                  <span className="text-amber-800">
                    {" "}
                    Information Science, Systems, and Technology{" "}
                  </span>
                  with a concentration in
                  <span className="text-amber-800"> Interactive Tech </span>
                  and <span className="text-amber-800">UX Design</span>. I have
                  a strong interest in software engineering, specially in
                  frontend development. With my experience in frontend
                  development, user experience research, and user-centered
                  designs, I'm seeking full-time job opportunities. My
                  experience further spans in backend development and data
                  analytics.
                </p>
                <p className="text-neutral-800 mb-6">
                  Feel free to contact me at mn473@cornell.edu!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-3">
                    {frontendSkills.map((skill, key) => (
                      <span
                        key={key}
                        className="bg-amber-800/10 text-amber-800 py-1 px-3 rounded-full text-sm
                    "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-3">
                    {backendSkills.map((skill, key) => (
                      <span
                        key={key}
                        className="bg-amber-800/10 text-amber-800 py-1 px-3 rounded-full text-sm
                    "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Data</h3>
                  <div className="flex flex-wrap gap-3">
                    {dataSkills.map((skill, key) => (
                      <span
                        key={key}
                        className="bg-amber-800/10 text-amber-800 py-1 px-3 rounded-full text-sm
                    "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {technology.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-amber-800/10 text-amber-800 py-1 px-3 rounded-full text-sm
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
