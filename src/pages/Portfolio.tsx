import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TypingAnimation } from "@/components/TypingAnimation";
import { SkillBadge } from "@/components/SkillBadge";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactCard } from "@/components/ContactCard";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { AnimatedTimeline } from "@/components/AnimatedTimeline";
import {
  Download,
  User,
  Code,
  FolderOpen,
  Mail,
  Coffee,
  Database,
  Server,
  Brain,
  Eye,
  GitBranch,
  Cloud,
  Globe,
} from "lucide-react";

// Import project images
import expenseTrackerImg from "@/assets/expense-tracker.jpg";
import surveillanceSystemImg from "@/assets/surveillance-system.jpg";
import facialRecognitionImg from "@/assets/facial-recognition.jpg";
import canteenWalletImg from "@/assets/canteen-wallet.jpg";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "Java", icon: Coffee, level: "advanced" as const },
    { name: "Hibernate", icon: Database, level: "intermediate" as const },
    { name: "TensorFlow", icon: Brain, level: "intermediate" as const },
    { name: "OpenCV", icon: Eye, level: "intermediate" as const },
    { name: "React", icon: Globe, level: "intermediate" as const },
    { name: "Node.js", icon: Server, level: "intermediate" as const },
    { name: "MySQL", icon: Database, level: "advanced" as const },
    { name: "MongoDB", icon: Database, level: "intermediate" as const },
    { name: "Git", icon: GitBranch, level: "advanced" as const },
    { name: "AWS", icon: Cloud, level: "beginner" as const },
  ];

  const projects = [
    {
      title: "Smart Surveillance System",
      description:
        "YOLOv8 integrated Java backend system for real-time object detection and intelligent monitoring with automated alerts.",
      image: surveillanceSystemImg,
      videoUrl: "/demo-video.mp4",
      technologies: ["Python", "YOLOv8", "OpenCV"],
      githubUrl:
        "https://github.com/ravikumar8709/Object-detection-for-smart-surveillance-system.git",
      featured: true,
    },

    {
      title: "Edunexus Innovation",
      description:
        "Edunexus Innovation – Developed an integrated school management system to streamline operations, improve data access for teachers, and enhance student learning while reducing security risks.",
      image: expenseTrackerImg,
      technologies: ["TypeScript"],
      githubUrl: "https://github.com/ravikumar8709/edunexus-innovation.git",
      liveUrl: "https://edunexus-innovation.vercel.app/",
      featured: true,
    },

    {
      title: "Facial Recognition Attendance",
      description:
        "OpenCV integrated attendance management system with Java backend. Features real-time face detection and automated attendance tracking.",
      image: facialRecognitionImg,
      technologies: ["Java", "OpenCV", "Spring Boot", "MySQL", "React"],
      githubUrl:
        "https://github.com/ravikumar8709/FACE-RECOGNIZATION-ATTENDANCE-SYSTEM.git",
    },
    {
      title: "Campus card payment system",
      description:
        "Full-stack MERN application with role-based authentication for digital canteen payments and management.",
      image: canteenWalletImg,
      technologies: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      githubUrl: "https://github.com/yourusername/canteen-wallet",
      liveUrl: "https://canteen-wallet.demo.com",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border/50 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-lg text-primary">Portfolio</div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </div>

          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-70" />
        <div className="container mx-auto text-center relative z-20">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
              Java & Deep Learning Developer
            </h1>
          </div>

          <div className="animate-fade-in-up animation-delay-200 mb-8">
            <div className="text-xl md:text-2xl text-muted-foreground mb-4">
              <TypingAnimation
                text="Building scalable backends & intelligent AI systems"
                speed={50}
                pause={3000}
              />
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-400 space-x-4">
            <Button
              size="lg"
              className="bg-gradient-primary shadow-hero hover:shadow-glow hover-bounce"
              onClick={() => scrollToSection("projects")}
            >
              <FolderOpen className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-gradient-card hover:bg-primary/5 hover-bounce"
              asChild
            >
              <a href="/Ravi_kumar_Resume.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <User className="w-8 h-8 text-primary" />
              About Me
            </h2>
          </div>

          <div className="space-y-12">
           <Card className="bg-gradient-card shadow-hero max-w-4xl mx-auto border-border/50 card-hover">
  <div className="flex items-center p-8">
    <img
      src="/profile.png" // place your image in the public folder
      alt="Ravi Kumar"
      className="rounded-full w-36 h-36 object-cover border-4 border-primary shadow-md mr-8"
    />
    <div className="flex-1 text-center">
      <CardHeader>
        <CardTitle className="text-2xl">Passionate Developer</CardTitle>
      </CardHeader>
      <CardContent>
        <TypingAnimation 
          text="Hi, I'm Ravi Kumar — passionate about Java development and Deep Learning applications. 
          I've built projects ranging from AI-powered surveillance systems to full-stack web applications. 
          My expertise lies in creating scalable, intelligent solutions that bridge traditional 
          software engineering with modern AI technologies." 
          speed={10}
          pause={100000000}       
        />
      </CardContent>
    </div>
  </div>
</Card>


            <div>
              <h3 className="text-2xl font-bold text-center mb-8">
                My Journey
              </h3>
              <AnimatedTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Code className="w-8 h-8 text-primary" />
              Skills & Technologies
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SkillBadge {...skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <FolderOpen className="w-8 h-8 text-primary" />
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              A showcase of my technical skills and problem-solving abilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Mail className="w-8 h-8 text-primary" />
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to collaborate on your next project
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <ContactCard />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Java & Deep Learning Developer.</p>
        </div>
      </footer>
    </div>
  );
}
