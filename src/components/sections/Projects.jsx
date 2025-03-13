import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r  from-slate-800 to-slate-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
        </div>
      </RevealOnScroll>
    </section>
  );
};
