import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import RootLayout from "./layout/root.layout.jsx";
import MainLayout from "./layout/main.layout.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
import About from "./pages/about.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
