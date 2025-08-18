import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectDetailDialog } from "../components/ProjectDetail";

const projects = [
  {
    id: 1,
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard built with React and D3.js, featuring real-time data visualization, customizable charts, and interactive filtering capabilities.",
    fullDescription:
      "This advanced analytics dashboard was built to help businesses make data-driven decisions through intuitive visualizations. The project involved complex data processing, real-time updates, and a highly interactive user interface. I designed the architecture to handle large datasets efficiently while maintaining smooth user interactions.",
    image:
      "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    technologies: [
      "React",
      "TypeScript",
      "D3.js",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Redis",
    ],
    features: [
      "Real-time data visualization with WebSocket connections",
      "Interactive charts and graphs with zoom and pan capabilities",
      "Customizable dashboard layouts with drag-and-drop functionality",
      "Advanced filtering and search capabilities",
      "Export functionality for reports in PDF and Excel formats",
      "Role-based access control and user management",
    ],
    challenges: [
      "Optimized rendering performance for large datasets using virtualization",
      "Implemented efficient caching strategies with Redis for real-time updates",
      "Created responsive design that works seamlessly across all device sizes",
      "Built robust error handling and fallback mechanisms for data failures",
    ],
    duration: "4 months",
    teamSize: "Solo Project",
    role: "Full-Stack Developer",
    liveUrl: "https://analytics-demo.com",
    githubUrl: "https://github.com/yourusername/analytics-dashboard",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "Modern mobile banking application with secure authentication, transaction history, budget tracking, and real-time notifications. Built with React Native.",
    fullDescription:
      "A feature-rich mobile banking application designed with security and user experience as top priorities. The app includes biometric authentication, real-time transaction tracking, budgeting tools, and push notifications. I focused on creating an intuitive interface that makes complex financial operations simple and accessible.",
    image:
      "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Redux",
      "Expo",
      "Stripe API",
    ],
    features: [
      "Biometric authentication (Face ID/Touch ID)",
      "Real-time transaction notifications and history",
      "Budget tracking with spending categories and alerts",
      "Bill payment scheduling and reminders",
      "Money transfer between accounts and external banks",
      "Investment portfolio tracking and management",
    ],
    challenges: [
      "Implemented end-to-end encryption for all financial data transmission",
      "Optimized app performance for smooth animations and quick loading times",
      "Ensured compliance with banking regulations and security standards",
      "Created seamless offline functionality with data synchronization",
    ],
    duration: "6 months",
    teamSize: "3 developers",
    role: "Lead Mobile Developer",
    liveUrl: "https://banking-app-demo.com",
    githubUrl: "https://github.com/yourusername/mobile-banking-app",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with product catalog, shopping cart, payment integration, order management, and admin dashboard.",
    fullDescription:
      "A comprehensive e-commerce platform built from the ground up with modern web technologies. The platform includes a customer-facing storefront, vendor management system, and comprehensive admin dashboard. I designed the system to be scalable, secure, and easily maintainable while providing an excellent user experience.",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
      "Redis",
      "AWS S3",
    ],
    features: [
      "Multi-vendor marketplace with individual seller dashboards",
      "Advanced product search and filtering with Elasticsearch",
      "Shopping cart with guest checkout and account creation",
      "Multiple payment methods including digital wallets",
      "Order tracking and shipment management",
      "Inventory management with low-stock alerts",
    ],
    challenges: [
      "Built scalable database schema to handle complex product variations",
      "Implemented secure payment processing with PCI compliance",
      "Created responsive design optimized for mobile commerce",
      "Developed real-time inventory synchronization across multiple channels",
    ],
    duration: "8 months",
    teamSize: "5 developers",
    role: "Full-Stack Developer",
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Responsive portfolio website showcasing projects and skills with smooth animations, dark mode support, and optimized performance.",
    fullDescription:
      "A modern, responsive portfolio website designed to showcase my development skills and projects. The site features smooth animations, dark mode support, and is optimized for performance and SEO. I focused on creating a clean, professional design that effectively communicates my experience and capabilities.",
    image:
      "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite", "Vercel"],
    features: [
      "Smooth scroll animations and micro-interactions",
      "Dark/light mode toggle with system preference detection",
      "Fully responsive design optimized for all screen sizes",
      "SEO optimized with meta tags and structured data",
      "Contact form with email integration",
      "Performance optimized with lazy loading and code splitting",
    ],
    challenges: [
      "Achieved 100/100 Lighthouse performance score across all metrics",
      "Implemented accessible design following WCAG guidelines",
      "Created custom animations that enhance UX without affecting performance",
      "Built reusable component library for consistent design patterns",
    ],
    duration: "2 months",
    teamSize: "Solo Project",
    role: "Frontend Developer & Designer",
    liveUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewMore = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  
  

  return (
    <section id="Projects" className="py-16 px-4 max-w-7xl mx-auto">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 mt-20">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            onViewMore={() => handleViewMore(project)}
          />
        ))}
      </div>
      <ProjectDetailDialog
        project={selectedProject}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </section>
  );
}

export default Projects;
