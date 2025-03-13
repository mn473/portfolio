import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectCard } from "../ProjectCard";
import ArdunioMachine from "/src/assets/ardunio.png";
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
      "Designed and implemented prototype app allowing users to input foreground and background colors, displaying the contrast ratio and WCAG accessibility level. App integrated Color Contrast Checker library for calculations.",
    image: ContrastApp,
    skills: ["Vue.js", "JavaScript", "HTML/CSS"],
    bgColor: "bg-amber-800/10",
    textColor: "text-amber-800",
  },
  {
    name: "Ardunio Drawing Machine",
    date: "Sept 2024 - Dec 2024",
    description:
      "2.5DoF gantry marker plotting machine created with ESP32 Feather, hardware, and 3D-printed components. Machine draws with automated text/shape input, with manual joystickcontrol for freedraw and marker pressure adjustment.",
    image: ArdunioMachine,
    skills: ["C++", "3D Modeling"],
    bgColor: "bg-sky-900/10",
    textColor: "text-sky-900",
  },
  {
    name: "Geospatial Data Visualization",
    date: "Oct 2024 - Nov 2024",
    description:
      "Multi-layered map using choropleth, contour, and clustering to highlight patterns of rodent activity across NYC boroughs. Map included interactive features for zooming, hovering, and tooltips to reveal additional data.",
    image: RodentVisual,
    skills: ["D3.js", "JavaScript", "HTML/CSS"],
    bgColor: "bg-amber-800/10",
    textColor: "text-amber-800",
  },
  {
    name: "Media Catalog Website w/ Custom CMS",
    date: "Mar 2024 - May 2024",
    description:
      "Server-side interactive website for uploading concert memories and filtering between catalog content. The media contents were stored in SQL database, with PHP backend for user authentication and data retrieval.",
    image: MediaCatalog,
    skills: ["HTML/CSS", "PHP", "SQL"],
    bgColor: "bg-sky-900/10",
    textColor: "text-sky-900",
  },
  {
    name: "Career Prep VR Prototype",
    date: "Feb 2024 - May 2024",
    description:
      "Prototyped VR app for career preparation, demonstrating a virtual scenario for user to practice conflict resolution. Through user-centered interviews, designed user design journeys, value propositions, and problem/solutions frames.",
    image: CareerVRApp,
    skills: ["Figma"],
    bgColor: "bg-amber-800/10",
    textColor: "text-amber-800",
  },
  {
    name: "Cornell SensTech Website",
    date: "Jan 2024 - Mar 2024",
    description:
      "Cornell's biotechnology project team's website crafted with Figma and implemented using Bootstrap. Website showcase team's general information, team members, projects, and contact information.",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-1 bg-gradient-to-r from-slate-800 to-sky-900 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <p className="text-neutral-800 md:text-xl italic text-center mb-6">
            Some frontend development projects & other cool projects I've worked
            on...
          </p>
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
