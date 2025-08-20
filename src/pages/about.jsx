import { Container, Typography, Box } from "@mui/material";
import { Button } from "@mui/material";
import { FolderDown } from "lucide-react";
import Theme from "../components/theme";
import { Mail } from "lucide-react";
import Togglebutton from "../components/Togglebutton";

const Header = () => (
  <div
    className="text-center lg:mb-8 mb-2 px-[5%]"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div className="inline-block relative group">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] sm:text-lg flex items-center justify-center gap-2">
        ABOUT ME
      </h2>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <section id="about">
        <Header />
        <Container maxWidth="lg" className="w-full mx-auto pt-8 sm:pt-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left: About Content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Hey, I&apos;m
                </span>
                <span
                  className="block mt-2 text-gray-200 text-7xl"
                  data-aos="fade-right"
                  data-aos-duration="1300"
                >
                  Keshiihan
                </span>
              </h2>

              <p
                className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed text-justify max-w-[520px] pb-4 sm:pb-0"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
               I am a dedicated Full-Stack developer with a solid foundation in HTML, CSS, JavaScript, and React. I specialize in creating responsive, user-centric web interfaces with a focus on performance and maintainability. Driven by a strong problem-solving mindset and attention to detail, I continuously seek opportunities to expand my skills and contribute to innovative digital solutions.
              </p>
              <div className="flex flex-row gap-14 mt-12 justify-center lg:justify-start">
                <button
                  className="group flex items-center gap-2 font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 border-0"
                  style={{
                    background: `linear-gradient(90deg, ${Theme.palette.primary.main}, ${Theme.palette.Accent.main})`,
                    color: "#fff",
                  }}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1500"
                >
                  <FolderDown className="w-5 h-5" />
                  <span
                    className="bg-clip-text text-transparent group-hover:from-gray-200 group-hover:to-white"
                    style={{
                      background: `linear-gradient(90deg, #fff, ${Theme.palette.Text.main})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Download CV
                  </span>
                </button>

                <Button
                  className="group flex items-center gap-2 font-semibold px-6 py-3 rounded-lg shadow-lg border-2 border-transparent hover:border-[#a855f7] transition-all duration-300 bg-gradient-to-r from-transparent to-transparent hover:from-[#6366f1]/10 hover:to-[#a855f7]/10 text-[#a855f7]"
                  variant="outlined"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2500"
                  style={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    letterSpacing: "0.02em",
                  }}
                  onClick={() => {
                    const aboutSection = document.getElementById("contact");
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span className="flex items-center gap-2">
                    Say Hello
                    <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  </span>
                </Button>
              </div>
            </div>
            {/* Right: Togglebutton */}
            <div className="flex-1 flex justify-center lg:justify-end w-full mb-10 lg:mb-50 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-xl">
              <Togglebutton />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
