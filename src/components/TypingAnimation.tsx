import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;   // typing speed
  pause?: number;   // pause before deleting
  showCursor?: boolean; // optional toggle for cursor
}

export function TypingAnimation({ 
  text, 
  className = "", 
  speed = 100, 
  pause = 3000,
  showCursor = true
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!deleting && index < text.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(prev => prev + 1);
      }, speed);
    } else if (!deleting && index === text.length) {
      // Pause at full text
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && index > 0) {
      // Deleting backwards
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(prev => prev - 1);
      }, speed / 2);
    } else if (deleting && index === 0) {
      // Restart typing
      setDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, deleting, text, speed, pause]);

  return (
    <span className={`${className} relative`}>
      {displayedText}
      {/* Cursor only while typing or deleting */}
      {showCursor && (index < text.length || deleting) && (
        <span className="animate-pulse inline-block w-0.5 h-6 bg-primary ml-1" />
      )}
    </span>
  );
}
