"use client";

import { useEffect, useMemo, useState } from "react";

export interface TypewriterProps {
  text: string | string[];
  speed?: number;
  cursor?: string;
  loop?: boolean;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

export function Typewriter({
  text,
  speed = 100,
  cursor = "|",
  loop = false,
  deleteSpeed = 50,
  delay = 1500,
  className,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);

  const textArray = useMemo(
    () => (Array.isArray(text) ? [...text] : [text]),
    [text],
  );

  const currentText = textArray[textArrayIndex] ?? "";

  useEffect(() => {
    if (!currentText) return;

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (currentIndex < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev + currentText[currentIndex]!);
          setCurrentIndex((prev) => prev + 1);
        }, speed);
      } else if (loop) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    } else if (displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deleteSpeed);
    } else {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex(0);
        setTextArrayIndex((prev) => (prev + 1) % textArray.length);
      }, 0);
    }

    return () => clearTimeout(timer);
  }, [
    currentIndex,
    isDeleting,
    loop,
    speed,
    deleteSpeed,
    delay,
    displayText,
    textArray,
    textArrayIndex,
    currentText,
  ]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse" aria-hidden>
        {cursor}
      </span>
    </span>
  );
}
