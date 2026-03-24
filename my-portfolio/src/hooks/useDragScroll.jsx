// src/hooks/useDragScroll.js
import { useRef } from "react";

export default function useDragScroll() {
  const ref = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const didDrag = useRef(false); // true if mouse moved more than threshold

  const onMouseDown = (e) => {
    isDragging.current = true;
    didDrag.current = false;
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
    ref.current.style.cursor = "grabbing";
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    if (ref.current) ref.current.style.cursor = "grab";
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (ref.current) ref.current.style.cursor = "grab";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    // Mark as drag if moved more than 5px
    if (Math.abs(walk) > 5) didDrag.current = true;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  const handlers = { onMouseDown, onMouseLeave, onMouseUp, onMouseMove };

  return { ref, handlers, didDrag };
}