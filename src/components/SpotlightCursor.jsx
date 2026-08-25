import React, { useEffect, useState } from 'react';

const SpotlightCursor = () => {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handler = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  const size = 380;
  const half = size / 2;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30"
      aria-hidden
    >
      <div
        className="absolute rounded-full opacity-20 blur-3xl"
        style={{
          left: pos.x - half,
          top: pos.y - half,
          width: size,
          height: size,
          background:
            'radial-gradient(circle, rgba(201,162,39,0.35) 0%, rgba(230,199,90,0.25) 35%, rgba(0,0,0,0) 60%)',
        }}
      />
    </div>
  );
};

export default SpotlightCursor;
