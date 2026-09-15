import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for fine pointer devices (desktop/mouse)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);

    // Smooth trailing ring loop
    let animFrameId;
    const smoothFollow = () => {
      setRingPos((prev) => {
        const dx = pos.x - prev.x;
        const dy = pos.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animFrameId = requestAnimationFrame(smoothFollow);
    };
    animFrameId = requestAnimationFrame(smoothFollow);

    // Check hover states
    const onMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".skill-card") ||
        target.closest(".project-card") ||
        target.closest(".service-card") ||
        target.closest(".timeline-card") ||
        target.closest(".clickable");
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animFrameId);
    };
  }, [pos.x, pos.y, isVisible]);

  if (!isVisible) return null;

  return (
    <div className={isHovered ? "cursor-hover" : ""}>
      <div
        className="cursor-dot"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      />
      <div
        className="cursor-ring"
        style={{
          transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
