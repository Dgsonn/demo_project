import React from 'react';
import './GeometricStalk.css';

/**
 * GeometricStalk - CSS-only wheat stalk (no SVG paths)
 * Pure geometric Bauhaus design with rectangles and circles
 */
interface GeometricStalkProps {
  grainCount?: number;
  height?: number;
  className?: string;
}

export const GeometricStalk: React.FC<GeometricStalkProps> = ({
  grainCount = 7,
  height = 120,
  className = ''
}) => {
  const grains = Array.from({ length: grainCount }, (_, i) => i);

  return (
    <div 
      className={`geometric-stalk ${className}`}
      style={{ '--stalk-height': `${height}px` } as React.CSSProperties}
    >
      <div className="stalk-container">
        {/* Main stem */}
        <div className="stalk-stem">
          {/* Geometric grain kernels - stacked rectangles */}
          {grains.map((_, index) => (
            <div 
              key={index} 
              className="stalk-grain"
              style={{ 
                '--grain-index': index,
                '--grain-position': `${20 + index * 12}%`
              } as React.CSSProperties}
            >
              <div className="grain-kernel" />
              <div className="grain-tip" />
            </div>
          ))}
        </div>
        
        {/* Top awn */}
        <div className="stalk-awn" />
      </div>
      
      {/* Subtle base shadow */}
      <div className="stalk-shadow" />
    </div>
  );
};

export default GeometricStalk;