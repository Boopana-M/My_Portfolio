import React from 'react';
import { motion } from 'framer-motion';
import useTilt from '../hooks/useTilt';

const TiltCard = ({ children, className = '', strength = 10, ...motionProps }) => {
  const ref = useTilt(strength);
  return (
    <motion.div ref={ref} className={className} {...motionProps}>
      {children}
    </motion.div>
  );
};

export default TiltCard;
