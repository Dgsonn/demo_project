import React from 'react';
import './WheatGrain.css';

/**
 * WheatGrain - Geometric grain shape with CSS animation
 * Bauhaus-inspired clean geometric design
 */
export const WheatGrain: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`wheat-grain ${className}`}>
      <div className="grain-body">
        <div className="grain-head" />
        <div className="grain-beard beard-left" />
        <div className="grain-beard beard-right" />
      </div>
      <div className="grain-stem" />
    </div>
  );
};

export default WheatGrain;