import { useEffect, useRef, useState } from "react";

function hasReachedViewport(node) {
  const rect = node.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92;
}

export function useReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (hasReachedViewport(node)) {
      setIsVisible(true);
      return undefined;
    }

    let ticking = false;

    const check = () => {
      ticking = false;
      if (hasReachedViewport(node)) {
        setIsVisible(true);
        cleanup();
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };

    function cleanup() {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return cleanup;
  }, []);

  return { ref, isVisible };
}
