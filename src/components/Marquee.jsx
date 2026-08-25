import React from 'react';

const Marquee = ({ items = [] }) => {
  const row = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row.map((item, idx) => (
          <span key={idx} className="px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
