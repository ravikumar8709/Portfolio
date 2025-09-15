import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Award } from "lucide-react";

interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  score?: string;
  location?: string;
}

const educationData: EducationItem[] = [
  {
    year: "2019 - 2020",
    degree: "10th (Secondary School)",
    institution: "Bihar School Examination Board",
    score: "78%",
    location: "Mohiuddinpur Rajwa, Samastipur, Bihar",
  },
  {
    year: "2020 - 2022",
    degree: "12th (Senior Secondary - PCM)",
    institution: "Bihar School Examination Board",
    score: "76.2%",
    location: "Samastipur, Bihar",
  },
  {
    year: "2022 - 2026",
    degree: "B.Tech in Computer Science",
    institution: "Kalasalingam Academy of Research and Education",
    score: "7.95 CGPA",
    location: "Virudunagar, Tamil Nadu, India",
  },
];

export function EducationTimeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observers = educationData.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, index]);
          }
        },
        { threshold: 0.3 }
      );

      const element = document.getElementById(`edu-${index}`);
      if (element) observer.observe(element);

      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50"></div>

      <div className="space-y-8">
        {educationData.map((item, index) => (
          <div
            key={index}
            id={`edu-${index}`}
            className={`relative flex items-start gap-6 transition-all duration-700 transform
              ${
                visibleItems.includes(index)
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }
            `}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Timeline dot */}
            <div
              className={`relative z-10 w-16 h-16 rounded-full bg-gradient-primary 
              flex items-center justify-center shadow-glow transition-all duration-500
              ${visibleItems.includes(index) ? "scale-100" : "scale-50"}`}
            >
              <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                <span className="text-sm font-bold text-primary">
                  {item.year.slice(-2)}
                </span>
              </div>
            </div>

            {/* Content card */}
            <Card
              className={`flex-1 bg-gradient-card border-border/50 hover:border-primary/20 
              transition-all duration-300 hover-lift
              ${visibleItems.includes(index) ? "shadow-hero" : "shadow-card"}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {item.degree}
                  </h3>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {item.year}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.institution}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {item.score && (
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {item.score}
                    </div>
                  )}
                  {item.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
