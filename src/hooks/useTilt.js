import { useEffect, useRef } from 'react';

export default function useTilt(strength = 12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame;
    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width) * 2 - 1; // -1 to 1
      const py = (y / rect.height) * 2 - 1; // -1 to 1

      const rX = (-py * strength).toFixed(2);
      const rY = (px * strength).toFixed(2);

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `perspective(800px) rotateX(${rX}deg) rotateY(${rY}deg)`;
      });
    };

    const onMouseLeave = () => {
      cancelAnimationFrame(frame);
      el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    };

    el.style.transition = 'transform 200ms ease';
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [strength]);

  return ref;
}
