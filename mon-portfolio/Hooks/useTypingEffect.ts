"use client";

import { useEffect, useState } from "react";

export default function useTypingEffect(fullText: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!fullText) return;
    setDisplayedText("");

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(i));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [fullText, speed]);

  return displayedText;
}
