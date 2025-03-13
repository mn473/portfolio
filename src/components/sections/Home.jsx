import { RevealOnScroll } from "../RevealOnScroll";
import LinkedinLogo from "/src/assets/linkedin.png";
import GithubLogo from "/src/assets/github.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-8xl font-bold mb-5 bg-gradient-to-r from-slate-800 to-sky-900 bg-clip-text text-transparent leading-right">
            Monica Nguyenduy
          </h1>
          <p className="text-neutral-800 md:text-3xl mb-2 max-w-lg mx-auto">
            Information Science, Systems, and Technology @ Cornell University
          </p>
          <p className="text-neutral-800 md:text-xl italic mb-4 max-w-lg mx-auto">
            Aspiring Developer
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/monica-nguyenduy/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <img
                src={LinkedinLogo}
                alt="LinkedIn Logo"
                className="w-12 h-12 md:w-16 md:h-16 mx-3 opacity-80"
              ></img>
            </a>
            <a
              href="https://github.com/mn473"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <img
                src={GithubLogo}
                alt="GitHub Logo"
                className="w-12 h-12 md:w-16 md:h-16 mx-3 opacity-80"
              ></img>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
