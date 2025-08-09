// src/sections/Projects.jsx
import { Container, Typography } from "@mui/material";

const Header = () => (
  <div
    className="text-center lg:mb-8 mb-2 px-[5%]"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div className="inline-block relative group">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] sm:text-lg flex items-center justify-center gap-2">
        
        Projects
       
      </h2>
    </div>
  </div>
);

const Projects = () => {
  return (
    <>
      <section id="projects"> </section>
      <Header />
    </>
  );
};

export default Projects;
