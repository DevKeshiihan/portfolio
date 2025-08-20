import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Calendar, Users, Trophy } from "lucide-react";

export function ProjectDetailDialog({ project, open, onOpenChange }) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white text-black mt-10">
        <DialogHeader>
          <DialogTitle className="text-2xl text-black">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
          </div>
          {/* Project Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="text-black">
                Completed On: {project.duration}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground justify-end">
              <Trophy className="w-4 h-4" />
              <span className="text-black">{project.role}</span>
            </div>
          </div>
          {/* Full Description */}
          <div>
            <h3 className="mb-3 text-black font-bold">Project Overview</h3>
            <p className="text-black leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
          {/* Key Features */}
          <div>
            <h3 className="mb-3 text-black font-bold">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-black">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6">
            <h3 className="mb-3 text-black font-bold">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md hover:from-blue-500 hover:to-cyan-400 transition-colors border border-white/30 backdrop-blur-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            {project.liveUrl && (
              <Button asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
