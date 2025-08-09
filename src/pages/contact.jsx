import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import {
  User,
  SquareArrowOutUpRight,
  Mail,
  MessageCircle,
  Phone,
  Linkedin,
  GithubIcon,
  SendHorizontal,
} from "lucide-react";




const Header = () => (
  <div
    className="text-center lg:mb-8 mb-2 px-[5%]"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div className="inline-block relative group">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] sm:text-lg flex items-center justify-center gap-2">
        Contact
      </h2>
    </div>
  </div>
);

const Contact = () => {
  return (
    <>
      <section id="contact"></section>
      <Header />
      <Box
        className="w-full flex flex-col md:flex-row gap-10 md:gap-50 items-center justify-center"
        sx={{
          maxWidth: "lg",
          margin: "0 auto",
          alignItems: "stretch",
        }}
      >
        {/* Left: Let's Talk Card */}
        <Box
          className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl flex flex-col items-start"
          sx={{
            flex: 1,
            minWidth: 450,
            maxWidth: 380,
            padding: 4,
            borderRadius: 4,
            boxShadow: 6,
            background: "rgba(99,102,241,0.15)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            border: "1px solid rgba(168,85,247,0.25)",
            mb: { xs: 4, md: 0 },
          }}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <Typography
            variant="h5"
            component="h3"
            align="center"
            gutterBottom
            className="w-full text-center bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent font-bold"
            sx={{
              mb: 2,
              letterSpacing: 1,
              textShadow: "0 2px 16px #a855f7",
              fontSize: "2rem",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            Let's Talk
          </Typography>

          <Typography className=" text-gray-400 text-1xl font-semibold mb-4">
            Got something in mind? Let’s build it together. Have a question, or
            just want to connect.
          </Typography>
          {/* Email Card */}
          <a
            href="mailto:Keshiihan.dev@gmil.com"
            className="w-full"
            style={{ textDecoration: "none" }}
          >
            <Box
              className="flex flex-col items-start gap-2 mb-8 w-full px-4 py-3 rounded-lg group cursor-pointer transition-shadow duration-200 hover:shadow-2xl"
              sx={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(168,85,247,0.18)",
                boxShadow: "0 2px 12px 0 #a855f733",
                alignItems: "flex-start",
                marginTop: "2rem",
                position: "relative", // for absolute arrow
              }}
            >
              <Box className="flex items-center gap-3 w-full">
                <Mail className="w-7 h-6 text-purple-400" />
                <Typography
                  variant="subtitle2"
                  className="text-white font-bold"
                  sx={{ lineHeight: 1, fontSize: "1.2rem", fontWeight: 700 }}
                >
                  Email
                </Typography>
              </Box>
              <Typography
                variant="body2"
                className="text-white"
                sx={{
                  fontSize: "0.95rem",
                  opacity: 0.65,
                  paddingLeft: "2.2rem",
                  wordBreak: "break-all",
                }}
              >
                Keshiihan.dev@gmil.com
              </Typography>
              
            </Box>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/keshiihan-rajasekar-1897a5330/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            style={{ textDecoration: "none" }}
          >
            <Box
              className="flex flex-col items-start gap-2 mb-8 w-full px-4 py-3 rounded-lg group cursor-pointer transition-shadow duration-200 hover:shadow-2xl"
              sx={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(168,85,247,0.18)",
                boxShadow: "0 2px 12px 0 #a855f733",
                alignItems: "flex-start",
                position: "relative", // for absolute arrow
              }}
            >
              <Box className="flex items-center gap-3 w-full">
                <Linkedin className="w-7 h-6 text-purple-400" />
                <Typography
                  variant="subtitle2"
                  className="text-white font-bold"
                  sx={{ lineHeight: 1, fontSize: "1.2rem", fontWeight: 700 }}
                >
                  Let's connect on
                </Typography>
              </Box>
              <Typography
                variant="body2"
                className="text-white"
                sx={{
                  fontSize: "0.95rem",
                  opacity: 0.65,
                  paddingLeft: "2.2rem",
                  wordBreak: "break-all",
                }}
              >
                Linkedin
              </Typography>
              <SquareArrowOutUpRight
                className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:animate-bounce"
                size={22}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "18px",
                  transform: "translateY(-50%)",
                }}
              />
            </Box>
          </a>

          {/* Github Card */}
          <a
            href="https://github.com/DevKeshiihan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            style={{ textDecoration: "none" }}
          >
            <Box
              className="flex flex-col items-start gap-2 mb-8 w-full px-4 py-3 rounded-lg group cursor-pointer transition-shadow duration-200 hover:shadow-2xl"
              sx={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(168,85,247,0.18)",
                boxShadow: "0 2px 12px 0 #a855f733",
                alignItems: "flex-start",
                position: "relative", // for absolute arrow
              }}
            >
              <Box className="flex items-center gap-3 w-full">
                <GithubIcon className="w-7 h-6 text-purple-400" />
                <Typography
                  variant="subtitle2"
                  className="text-white font-bold"
                  sx={{ lineHeight: 1, fontSize: "1.2rem", fontWeight: 700 }}
                >
                  Github
                </Typography>
              </Box>
              <Typography
                variant="body2"
                className="text-white"
                sx={{
                  fontSize: "0.95rem",
                  opacity: 0.65,
                  paddingLeft: "2.2rem",
                  wordBreak: "break-all",
                }}
              >
                DevKeshiihan
              </Typography>
              <SquareArrowOutUpRight
                className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:animate-bounce"
                size={22}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "18px",
                  transform: "translateY(-50%)",
                }}
              />
            </Box>
          </a>
        </Box>

        {/* Right: Contact Form */}
        <Box
          component="form"
          className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl"
          sx={{
            flex: 1,
            minWidth: 260,
            maxWidth: 480,
            padding: 4,
            borderRadius: 4,
            boxShadow: 6,
            background: "rgba(99,102,241,0.15)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            border: "1px solid rgba(168,85,247,0.25)",
          }}
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Typography
            variant="h5"
            component="h2"
            align="center"
            gutterBottom
            className="bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent font-bold"
            sx={{
              mb: 2,
              letterSpacing: 1,
              textShadow: "0 2px 16px #a855f7",
              fontSize: "2rem",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Get in touch
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            placeholder="Your Name"
            InputProps={{
              style: {
                color: "#fff",
                background: "rgba(255,255,255,0.08)",
                borderRadius: 8,
              },
              startAdornment: <User className="w-5 h-5 text-purple-400 mr-2" />,
            }}
            InputLabelProps={{
              style: { color: "#a855f7" },
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            placeholder="Your Email"
            type="email"
            InputProps={{
              style: {
                color: "#fff",
                background: "rgba(255,255,255,0.08)",
                borderRadius: 8,
              },
              startAdornment: <Mail className="w-5 h-5 text-purple-400 mr-2" />,
            }}
            InputLabelProps={{
              style: { color: "#a855f7" },
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            id="message"
            name="message"
            label="Message"
            variant="outlined"
            placeholder="Your Message"
            multiline
            rows={4}
            InputProps={{
              style: {
                color: "#fff",
                background: "rgba(255,255,255,0.08)",
                borderRadius: 8,
              },
              startAdornment: (
                <MessageCircle className="w-5 h-5 text-purple-400 mr-2" />
              ),
            }}
            InputLabelProps={{
              style: { color: "#a855f7" },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-bold shadow-lg flex items-center justify-center gap-2 group py-3 text-base rounded-lg"
            sx={{
              marginTop: 4,
              letterSpacing: 1,
              fontWeight: 800,
              boxShadow: "0 4px 16px 0 #a855f7aa",
              fontSize: "1rem",
              paddingY: 1.5,
              borderRadius: 2,
              "&:hover": {
                background: "linear-gradient(90deg, #a855f7 0%, #6366f1 100%)",
              },
            }}
          >
            Submit
            <SendHorizontal
              className="transition-transform duration-300 group-hover:-rotate-z-45"
              size={20}
            />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
