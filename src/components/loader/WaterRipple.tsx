import React from 'react';
import './WaterRipple.css';

/**
 * WaterRipple - 3 concentric rings with CSS keyframe animation
 * Bauhaus-inspired geometric design with clean circles
 */
interface WaterRippleProps {
  size?: number;
  color?: string;
  speed?: number;
  className?: string;
}

export const WaterRipple: React.FC<WaterRippleProps> = ({
  size = 60,
  color = '#e8d4a8',
  speed = 2,
  className = ''
}) => {
  return (
    <div 
      className={`water-ripple ${className}`}
      style={{ 
        '--ripple-color': color,
        '--ripple-size': `${size}px`,
        '--ripple-speed': `${speed}s`
      } as React.CSSProperties}
    >
      <div className="ripple-ring ring-1" />
      <div className="ripple-ring ring-2" />
      <div className="ripple-ring ring-3" />
    </div>
  );
};

export default WaterRipple;