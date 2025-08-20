import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Info } from "lucide-react";

export function ProjectCard({
  title,
  fullDescription,
  image,
  technologies,
  liveUrl,
  githubUrl,
  onViewMore,
}) {
  return (
    <Card
      className="group overflow-hidden rounded-2xl bg-black/40 backdrop-blur-lg bg-clip-padding border border-gradient-to-r from-white/30 via-white/10 to-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:backdrop-blur-2xl hover:border-white/60 text-white relative"
      style={{
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        border: "1px solid rgba(255,255,255,0.18)",
      }}
    >
      {/* Frosted glass overlay */}
      <div className="absolute inset-0 bg-white/10 rounded-2xl pointer-events-none" />
      <div className="relative overflow-hidden z-10">
        {/* <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        /> */}
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="flex gap-2">
            {liveUrl && (
              <Button
                size="sm"
                variant="secondary"
                className="backdrop-blur-sm bg-white/90 hover:bg-white"
                asChild
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button
                size="sm"
                variant="outline"
                className="backdrop-blur-sm bg-black/20 border-white/30 text-white hover:bg-black/40"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 text-white">
        <h3 className="mb-2 text-white">{title}</h3>
        <p className="text-white mb-4 line-clamp-2">{fullDescription}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md hover:from-blue-500 hover:to-cyan-400 transition-colors"
            >
              {tech}
            </Badge>
          ))}
          {technologies.length > 4 && (
            <Badge
              variant="secondary"
              className="text-xs bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md hover:from-blue-500 hover:to-cyan-400 transition-colors"
            >
              +{technologies.length - 4} more
            </Badge>
          )}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onViewMore}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none shadow-md hover:from-cyan-500 hover:to-blue-600 transition-all"
        >
          <Info className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </div>
    </Card>
  );
}
