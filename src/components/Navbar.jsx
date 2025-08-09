import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { text: "Home", path: "home" },
    { text: "About", path: "about" },
    { text: "Projects", path: "projects" },
    { text: "Contact", path: "contact" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false); // close drawer after click
  };

  return (
    <>
      <AppBar
        position="sticky"
        className="bg-opacity-10 backdrop-blur-lg shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          borderRadius: "0 0 16px 16px",
        }}
      >
        <Toolbar className="flex justify-between">
          <Typography
            variant="h6"
            className="text-white font-bold cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Keshiihan
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon className="text-white" />
              </IconButton>
            </>
          ) : (
            <div>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  className="text-white group relative overflow-hidden"
                  onClick={() => handleNavClick(item.path)}
                  sx={{
                    mx: 1,
                    position: "relative",
                    transition: "color 0.2s",
                    "&:hover": {
                      color: "#a855f7",
                    },
                    "& .underline": {
                      position: "absolute",
                      left: 0,
                      bottom: 4,
                      width: "100%",
                      height: 2,
                      background: "#a855f7",
                      borderRadius: 2,
                      transform: "scaleX(0)",
                      transition: "transform 0.3s",
                      transformOrigin: "left",
                      content: '""',
                      pointerEvents: "none",
                    },
                    "&:hover .underline": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {item.text}
                  <span className="underline" />
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { backgroundColor: "#1f1f1f", color: "#fff", width: 200 },
        }}
      >
        <List>
          {navItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleNavClick(item.path)}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
