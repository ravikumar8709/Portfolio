import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageCircle, Download } from "lucide-react";

export function ContactCard() {
  const contactLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "ravikumararaj01010@gmail.com",
      label: "ravikumarraj01010@gmail.com",
      primary: true,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ravi-kumar-7b2695268/",
      label: "LinkedIn Profile",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/ravikumar8709",
      label: "GitHub Profile",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/8709451727",
      label: "WhatsApp Chat",
    },
  ];

  return (
    <Card className="bg-gradient-card shadow-card border-border/50 hover:border-primary/20 transition-smooth">
      <CardContent className="p-6">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
            <p className="text-muted-foreground">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>
          
          <div className="space-y-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.name}
                  variant={link.primary ? "default" : "outline"}
                  className={`
                    w-full justify-start transition-smooth hover-lift
                    ${link.primary ? 'bg-gradient-primary shadow-soft' : 'bg-gradient-card'}
                  `}
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-4 h-4 mr-3" />
                    {link.label}
                  </a>
                </Button>
              );
            })}
          </div>
          
          <div className="pt-4 border-t border-border">
            <Button 
              variant="outline" 
              className="w-full bg-gradient-card hover:bg-primary/5 transition-smooth"
              asChild
            >
              <a href="\Ravi_kumar_Resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}