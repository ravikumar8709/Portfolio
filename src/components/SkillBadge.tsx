import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";

interface SkillBadgeProps {
  name: string;
  icon: LucideIcon;
  level?: "beginner" | "intermediate" | "advanced";
}

export function SkillBadge({ name, icon: Icon, level = "intermediate" }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  const levelColors = {
    beginner: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
    intermediate: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    advanced: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
  };

  // Simple animation JSON for demonstration
  useEffect(() => {
    const simpleAnimation = {
      v: "5.7.4",
      fr: 60,
      ip: 0,
      op: 60,
      w: 100,
      h: 100,
      nm: "Simple Pulse",
      ddd: 0,
      assets: [],
      layers: [{
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Circle",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [50, 50, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { 
            a: 1, 
            k: [
              { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100] },
              { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 30, s: [120] },
              { t: 60, s: [100] }
            ]
          }
        },
        ao: 0,
        shapes: [{
          ty: "gr",
          it: [{
            d: 1,
            ty: "el",
            s: { a: 0, k: [20, 20] },
            p: { a: 0, k: [0, 0] }
          }, {
            ty: "fl",
            c: { a: 0, k: [0.2, 0.6, 1, 1] },
            o: { a: 0, k: 100 }
          }, {
            ty: "tr",
            p: { a: 0, k: [0, 0] },
            a: { a: 0, k: [0, 0] },
            s: { a: 0, k: [100, 100] },
            r: { a: 0, k: 0 },
            o: { a: 0, k: 100 }
          }]
        }],
        ip: 0,
        op: 60,
        st: 0
      }]
    };
    setAnimationData(simpleAnimation);
  }, []);

  return (
    <Badge 
      variant="outline" 
      className={`
        px-4 py-2 text-sm font-medium transition-all duration-300 cursor-default
        bg-gradient-card border-border/50 hover:border-primary/30 hover:shadow-glow
        transform hover:scale-105 hover:-translate-y-1
        ${levelColors[level]}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2">
        {animationData && isHovered ? (
          <Lottie
            animationData={animationData}
            className="w-4 h-4"
            loop={true}
            autoplay={true}
          />
        ) : (
          <Icon className="w-4 h-4" />
        )}
        {name}
      </div>
    </Badge>
  );
}