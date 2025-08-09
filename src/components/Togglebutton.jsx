import React, { useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { SiShadcnui } from "react-icons/si";

const skillIcons = [
  {
    icon: (
      <img src="javascript.png" alt="React" style={{ width: 53, height: 53 }} />
    ),
    label: "Javascrpit",
  },
  {
    icon: <img src="react.png" alt="React" style={{ width: 53, height: 53 }} />,
    label: "React.js",
  },
  {
    icon: (
      <img src="next.js.png" alt="React" style={{ width: 53, height: 53 }} />
    ),
    label: "Next.js",
  },

  {
    icon: (
      <img src="typescript.png" alt="React" style={{ width: 53, height: 53 }} />
    ),
    label: "TypeScript",
  },

  {
    icon: (
      <img
        src="tailwindcss.png"
        alt="React"
        style={{ width: 53, height: 53 }}
      />
    ),
    label: "Tailwindcss",
  },

  {
    icon: (
      <img src="nodejs.png" alt="React" style={{ width: 53, height: 53 }} />
    ),
    label: "Nodejs",
  },
  {
    icon: (
      <img src="postman.png" alt="React" style={{ width: 53, height: 53 }} />
    ),
    label: "Postman",
  },
  {
    icon: (
      <img src="express.png" alt="React" style={{ width: 53, height: 53 }} />
    ),
    label: "Express.js",
  },
  {
    icon: (
      <img
        src="material-ui.png"
        alt="React"
        style={{ width: 53, height: 53 }}
      />
    ),
    label: "MaterialUi",
  },
  {
    icon: (
      <img src="mongodb.png" alt="React" style={{ width: 53, height: 53 }} />
    ),
    label: "MongoDB",
  },
  {
    icon: <img src="Mysql.png" alt="React" style={{ width: 53, height: 53 }} />,
    label: "MySQL",
  },

  {
    icon: (
      <img src="restapi.png" alt="React" style={{ width: 53, height: 53 }} />
    ),
    label: "REST API",
  },
  {
    icon: <SiShadcnui style={{ width: 53, height: 53 }} />,
    label: "Shadcn UI",
  },
  {
    icon: (
      <img src="chatgpt.png" alt="React" style={{ width: 53, height: 53 }} />
    ),
    label: "OpenAI",
  },
  {
    icon: (
      <img src="github.png" alt="React" style={{ width: 53, height: 53 }} />
    ),
    label: "Github",
  },
  {
    icon: <img src="figma.png" alt="React" style={{ width: 53, height: 53 }} />,
    label: "Figma",
  },
  {
    icon: (
      <img src="photoshop.png" alt="React" style={{ width: 53, height: 53 }} />
    ),
    label: "Photoshop",
  },
];

const education = [
  {
    degree: "GCE O/L",
    school: "Alethea international School Dehiwala",
    year: "2022",
  },
  {
    degree: " Pearson BTEC HND in Software Engineering",
    school: "Achievers International Campus",
    year: "2023 - 2024",
  },
  {
    degree: "  Diploma in Graphic design",
    school: "AIC Campus",
    year: "2023 - 2024",
  },
];

const experiences = [
  {
    title: " 2+ years of experiences",
  },
];

const Togglebutton = () => {
  const [alignment, setAlignment] = useState("web");
  const isMobile = useMediaQuery("(max-width: 640px)");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Box data-aos="flip-left" data-aos-duration="1700">
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        orientation={isMobile ? "vertical" : "horizontal"}
        sx={{
          gap: 2,
          borderRadius: 2,
          background: "rgba(255,255,255,0.04)",
          boxShadow: "0 2px 12px 0 #a855f733",
          mb: 2,
          width: isMobile ? "100%" : "auto",
        }}
      >
        <ToggleButton
          value="web"
          sx={{
            color: alignment === "web" ? "#fff" : "#a855f7",
            fontWeight: 600,
            px: 3,
            py: 1.5,
            fontSize: "1rem",
            borderRadius: 2,
            textAlign: "left",
            "&.Mui-selected": {
              color: "#fff",
              background: "linear-gradient(90deg, #6366f1 0%, #a855f7 100%)",
            },
          }}
          fullWidth={isMobile}
        >
          <CodeIcon sx={{ mr: 1, fontSize: 20 }} />
          Skills
        </ToggleButton>
        <ToggleButton
          value="android"
          sx={{
            color: alignment === "android" ? "#fff" : "#a855f7",
            fontWeight: 600,
            px: 3,
            py: 1.5,
            fontSize: "1rem",
            borderRadius: 2,
            textAlign: "left",
            "&.Mui-selected": {
              color: "#fff",
              background: "linear-gradient(90deg, #6366f1 0%, #a855f7 100%)",
            },
          }}
          fullWidth={isMobile}
        >
          <SchoolIcon sx={{ mr: 1, fontSize: 20 }} />
          Education
        </ToggleButton>
        <ToggleButton
          value="work"
          sx={{
            color: alignment === "work" ? "#fff" : "#a855f7",
            fontWeight: 600,
            px: 3,
            py: 1.5,
            fontSize: "1rem",
            borderRadius: 2,
            textAlign: "left",
            "&.Mui-selected": {
              color: "#fff",
              background: "linear-gradient(90deg, #6366f1 0%, #a855f7 100%)",
            },
          }}
          fullWidth={isMobile}
        >
          <WorkIcon sx={{ mr: 1, fontSize: 20 }} />
          Experience
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Content below the toggle */}
      <Box
        sx={{
          mt: 2,
          minHeight: 120,
          color: "#fff",
        }}
      >
        {alignment === "web" && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: isMobile ? 2 : 5,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            {skillIcons.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: 48,
                  transition: "box-shadow 0.3s, transform 0.3s",
                  boxShadow: "none",
                  borderRadius: "12px",
                  "&:hover": {
                    boxShadow: "0 0 16px 4px #a855f7, 0 0 32px 8px #6366f1",
                    transform: "scale(1.08)",
                    background: "rgba(168,85,247,0.08)",
                  },
                  cursor: "pointer",
                }}
              >
                {item.icon}
                <Typography
                  variant="caption"
                  sx={{ color: "#fff", mt: 0.5, textAlign: "center" }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
        {alignment === "android" && (
          <List dense>
            {education.map((edu, idx) => (
              <ListItem key={idx} sx={{ py: 0 }}>
                <ListItemIcon>
                  <StarIcon sx={{ color: "#6366f1", fontSize: 20 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                      {edu.degree}
                    </span>
                  }
                  secondary={
                    <span style={{ color: "#a855f7" }}>
                      {`${edu.school} • ${edu.year}`}
                    </span>
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
        {alignment === "work" && (
          <List dense>
            {experiences.map((exp, idx) => (
              <ListItem key={idx} sx={{ py: 0 }}>
                <ListItemIcon>
                  <BusinessCenterIcon sx={{ color: "#a855f7", fontSize: 20 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                      {exp.title}
                    </span>
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
};

export default Togglebutton;
