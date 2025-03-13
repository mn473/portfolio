import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectCard } from "../ProjectCard";
import ArdunioMachine from "/src/assets/ardunio.png";
import ContrastApp from "/src/assets/contrastApp.png";
import RodentVisual from "/src/assets/rodentVisual.png";

const projects = [
  {
    name: "Constrast Checker Prototype App",
    date: "Feb 2024",
    description:
      "Designed and implemented prototype app allowing users to input foreground and background colors, displaying the contrast ratio and WCAG accessibility level. App integrated Color Contrast Checker library for calculations.",
    image: ContrastApp,
    skills: ["Vue.js", "JavaScript", "HTML/CSS"],
    bgColor: "bg-amber-800/10",
    textColor: "text-amber-800",
  },
  {
    name: "Ardunio Drawing Machine",
    date: "Sept - Dec 2024",
    description:
      "2.5DoF gantry marker plotting machine created with ESP32 Feather, hardware, and 3D-printed components. Machine draws with automated text/shape input, with manual joystickcontrol for freedraw and marker pressure adjustment.",
    image: ArdunioMachine,
    skills: ["C++", "3D Modeling"],
    bgColor: "bg-sky-900/10",
    textColor: "text-sky-900",
  },
  {
    name: "Geospatial Data Visualization",
    date: "Oct - Nov 2024",
    description:
      "Multi-layered map using choropleth, contour, and clustering to highlight patterns of rodent activity across NYC boroughs. Map included interactive features for zoomming, hovering, and tooltips to reveal additional data.",
    image: RodentVisual,
    skills: ["D3.js", "JavaScript", "HTML/CSS"],
    bgColor: "bg-amber-800/10",
    textColor: "text-amber-800",
  },
];

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {projects.map((project, index) => (
              <div key={index} className="min-h-full">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
