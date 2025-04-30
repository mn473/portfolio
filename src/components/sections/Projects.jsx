import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectCard } from "../ProjectCard";
import ArduinoMachine from "/src/assets/arduino.png";
import ContrastApp from "/src/assets/contrastApp.png";
import RodentVisual from "/src/assets/rodentVisual.png";
import CareerVRApp from "/src/assets/careerVR.png";
import MediaCatalog from "/src/assets/mediaCatalog.png";
import SensTechWeb from "/src/assets/sensTechWeb.png";

const projects = [
  {
    name: "Contrast Checker Prototype App",
    date: "Feb 2025",
    description:
      "Designed and implemented a prototype app allowing users to input foreground and background colors to display the contrast ratio and WCAG accessibility level. The app integrated the Color Contrast Checker library for calculations.",
    image: ContrastApp,
    skills: ["Vue.js", "JavaScript", "HTML/CSS"],
    bgColor: "bg-amber-800/10",
    textColor: "text-amber-800",
  },
  {
    name: "Arduino Drawing Machine",
    date: "Sept 2024 - Dec 2024",
    description:
      "2.5DoF gantry marker plotting machine created with ESP32 Feather, hardware, and 3D-printed components. Machine draws with automated text/shape input, with manual joystick control for free draw and marker pressure adjustment.",
    image: ArduinoMachine,
    skills: ["C++", "3D Modeling"],
    bgColor: "bg-sky-900/10",
    textColor: "text-sky-900",
  },
  {
    name: "Geospatial Data Visualization",
    date: "Oct 2024 - Nov 2024",
    description:
      "Multi-layered map using choropleth, contour, and clustering to highlight patterns of rodent activity across NYC boroughs. The map included interactive features for zooming, hovering, and tooltips to reveal additional information.",
    image: RodentVisual,
    skills: ["D3.js", "JavaScript", "HTML/CSS"],
    bgColor: "bg-amber-800/10",
    textColor: "text-amber-800",
  },
  {
    name: "Media Catalog Website with User Authentication",
    date: "Mar 2024 - May 2024",
    description:
      "Server-side interactive website for uploading concert memories and filtering between catalog content. The media contents were stored in a SQL database, with PHP backend for user authentication and data retrieval.",
    image: MediaCatalog,
    skills: ["HTML/CSS", "PHP", "SQL"],
    bgColor: "bg-sky-900/10",
    textColor: "text-sky-900",
  },
  {
    name: "Career Prep VR Prototype",
    date: "Feb 2024 - May 2024",
    description:
      "Prototyped a VR app for career preparation, providing a virtual scenario for the user to practice workplace situations. Prototype was designed with user-centered interviews, user design journeys, value propositions, and problem/solutions frames.",
    image: CareerVRApp,
    skills: ["Figma"],
    bgColor: "bg-amber-800/10",
    textColor: "text-amber-800",
  },
  {
    name: "Cornell SensTech Website",
    date: "Jan 2024 - Mar 2024",
    description:
      "Cornell's biotechnology project team's website was designed with Figma and implemented using Bootstrap. The website showcases the team's general information, team members, projects, and contact information.",
    image: SensTechWeb,
    skills: ["HTML/CSS", "Bootstrap", "Figma"],
    bgColor: "bg-sky-900/10",
    textColor: "text-sky-900",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-1 bg-gradient-to-r from-slate-800 to-sky-900 bg-clip-text text-transparent text-center leading-tight">
            Featured Projects
          </h2>
          <p className="text-neutral-800 md:text-xl italic text-center mb-6">
            Some front-end development & cool projects I've worked on...
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-3">
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
