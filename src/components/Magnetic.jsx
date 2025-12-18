import React, { useEffect, useRef } from 'react';

const clamp = (n, min, max) => Math.max(min, Math.min(n, max));

const Magnetic = ({ children, strength = 20, className = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame;
    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const moveX = clamp(x / 6, -strength, strength);
      const moveY = clamp(y / 6, -strength, strength);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    const onMouseLeave = () => {
      cancelAnimationFrame(frame);
      el.style.transform = 'translate(0px, 0px)';
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

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
};

export default Magnetic;
