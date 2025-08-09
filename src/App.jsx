import React, { useState, useEffect } from "react";
import "./App.css";
import { Container, Typography, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./components/theme";
import Button from "@mui/material/Button";
import About from "./pages/about";
import { MoveRight } from "lucide-react";
import Projects from "./pages/Projects";
import Contact from "./pages/contact";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import BackgroundBoxes from "./components/ui/background-boxes";

function App() {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true); // State for blinking cursor

  const phrases = [
    "Software Engineer",
    "Technology Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopIndex % phrases.length];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        setTypingSpeed(95); // Faster when deleting
      } else {
        setDisplayedText((prev) => currentPhrase.slice(0, prev.length + 1));
        setTypingSpeed(150); // Slower when typing
      }

      if (!isDeleting && displayedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [displayedText, isDeleting, loopIndex, typingSpeed]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blinks every 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      {/* Header Section with BackgroundBoxes */}
      <Box
        component="header"
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {/* <BackgroundBoxes /> */}
        <section id="home"></section>
        <Container
          maxWidth="lg"
          className="
            flex flex-col-reverse md:flex-row
            items-center justify-between
            min-h-screen
            px-4 md:px-8 py-8 md:py-0
          "
          sx={{ position: "relative", zIndex: 1 }}
        >
          {/* Left Section: Text */}
          <Box className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <Typography
              variant="h3"
              color="Text.main"
              className="font-bold mb-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              style={{
                textShadow: `0 0 10px ${Theme.palette.Accent.main}, 0 0 20px ${Theme.palette.Accent.main}`,
                fontSize: "3.5rem",
                fontWeight: "bold",
              }}
            >
              Full-Stack Developer
            </Typography>
            <Typography
              variant="h4"
              color="Text.main"
              className="mt-4 mb-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1700"
              style={{
                marginTop: "2rem",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              {displayedText}
              {showCursor && (
                <span style={{ color: Theme.palette.Accent.main }}>|</span>
              )}
            </Typography>
            <Typography
              variant="h5"
              color="Text.main"
              className="mt-4 mb-6"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2200"
              style={{
                marginTop: "2rem",
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              Building the future through code, curiosity, and relentless
              ambition
            </Typography>

            <Button
              className="mt-8 md:mt-12 group flex items-center gap-2 mx-auto md:mx-0"
              style={{
                background: "transparent",
                border: `2px solid ${Theme.palette.Accent.main}`,
                borderRadius: "12px",
                color: Theme.palette.Text.main,
                padding: "0.5rem 1.5rem",
                boxShadow: `0 0 10px ${Theme.palette.Accent.main}, 0 0 20px ${Theme.palette.Accent.main}`,
                marginTop: "2rem",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2700"
              onMouseEnter={(e) => {
                e.target.style.boxShadow = `0 0 20px ${Theme.palette.Accent.main}, 0 0 40px ${Theme.palette.Accent.main}`;
                e.target.style.borderColor = Theme.palette.Accent.main;
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = `0 0 10px ${Theme.palette.Accent.main}, 0 0 20px ${Theme.palette.Accent.main}`;
                e.target.style.borderColor = Theme.palette.Accent.main;
              }}
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Projects
              <MoveRight
                size={16}
                strokeWidth={1.25}
                className="group-hover:animate-ping"
              />
            </Button>

            {/* Social Media Icons */}
            <Box
              className="flex justify-center md:justify-start gap-6 mt-8"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <a
                href=" https://github.com/Keshiihan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub
                  size={28}
                  style={{
                    color: Theme.palette.Accent.main,
                  }}
                  className="hover:text-white"
                />
              </a>
              <a
                href=" https://www.linkedin.com/in/keshiihan-rajasekar-1897a5330/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  size={28}
                  style={{
                    color: Theme.palette.Accent.main,
                  }}
                  className="hover:text-white"
                />
              </a>

              <a
                href="https://www.instagram.com/_keshiihan_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram
                  size={28}
                  style={{
                    color: Theme.palette.Accent.main,
                  }}
                  className="hover:text-white"
                />
              </a>
            </Box>
          </Box>

          {/* Right Section: Image */}
          <Box
            className="relative group w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
            style={{
              display: "flex",
            }}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            {/* Glow Effect */}
            <div
              className="absolute -inset-4 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle, ${Theme.palette.Accent.main} 0%, rgba(0, 0, 0, 0) 80%)`,
                zIndex: -1,
              }}
            ></div>

            {/* Image */}
            <img
              src="Me.jpg"
              alt="Profile"
              className="w-full max-w-xs md:max-w-md h-[220px] md:h-[500px] object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              style={{ marginTop: "-30px" }}
            />
          </Box>
        </Container>
      </Box>

      <About />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
