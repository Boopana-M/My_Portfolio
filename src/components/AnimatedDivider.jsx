import React from 'react';

const AnimatedDivider = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-5 my-6">
      <div className="h-px w-full overflow-hidden rounded-full bg-gradient-to-r from-transparent via-primary/40 to-transparent">
        <div className="divider-shimmer" />
      </div>
    </div>
  );
};

export default AnimatedDivider;
