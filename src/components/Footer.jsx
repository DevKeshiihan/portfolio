import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Theme from "../components/theme";

const Footer = () => {
  return (
    <Box
      component="footer"
      className="bg-gray-800 text-white py-6 mt-15"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="body1" className="mb-2 text-gray-400">
        © {new Date().getFullYear()} Keshiihan.dev. All rights reserved.
      </Typography>
      <Box display="flex" gap={4} className="mt-5">
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
  );
};

export default Footer;
