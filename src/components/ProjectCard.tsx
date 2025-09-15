import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  videoUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  videoUrl,
  technologies, 
  githubUrl, 
  liveUrl, 
  featured = false 
}: ProjectCardProps) {
  return (
    <Card className={`
      group transition-smooth hover-lift h-full
      ${featured ? 'ring-2 ring-primary/20 shadow-hero' : 'shadow-card'}
      bg-gradient-card border-border/50 hover:border-primary/20
    `}>
      {(image || videoUrl) && (
        <div className="relative overflow-hidden rounded-t-lg">
          {videoUrl ? (
            <video 
              src={videoUrl}
              className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
              autoPlay
              muted
              loop
              playsInline
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            />
          ) : (
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
            />
          )}
          {featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-primary-foreground animate-pulse">Featured</Badge>
            </div>
          )}
        </div>
      )}
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl group-hover:text-primary transition-smooth">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2 pt-2">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" asChild className="flex-1 bg-gradient-primary">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}