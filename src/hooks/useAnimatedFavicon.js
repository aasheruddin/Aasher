import { useEffect } from 'react';

export function useAnimatedFavicon(frameUrls, speed = 100) {
  useEffect(() => {
    if (!frameUrls || frameUrls.length === 0) return;

    let currentFrame = 0;
    // Find the existing favicon link tag in your HTML head
    let link = document.querySelector("link[rel~='icon']");
    
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    // Set up an interval to constantly change the href attribute
    const interval = setInterval(() => {
      link.href = frameUrls[currentFrame];
      currentFrame = (currentFrame + 1) % frameUrls.length;
    }, speed);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [frameUrls, speed]);
}