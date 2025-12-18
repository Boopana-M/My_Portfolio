import React from 'react';

const ParallaxOrbs = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <style>{`
        .orb { position: absolute; border-radius: 9999px; filter: blur(40px); opacity: 0.18; }
        .orb-1 { width: 420px; height: 420px; left: -120px; top: 140px; background: radial-gradient(closest-side, var(--tw-gradient-from), transparent); }
        .orb-2 { width: 520px; height: 520px; right: -160px; bottom: -60px; background: radial-gradient(closest-side, var(--tw-gradient-to), transparent); }
      `}</style>
      <div className="hidden" style={{
        // These CSS variables pick up Tailwind gradient colors in containers using bg-gradient-to-r from-primary to-accent
        // We provide defaults to primary/accent colors.
        ['--tw-gradient-from']: 'rgba(201,162,39,0.5)',
        ['--tw-gradient-to']: 'rgba(230,199,90,0.45)'
      }} />
    </div>
  );
};

export default ParallaxOrbs;
