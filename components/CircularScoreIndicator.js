import React, { useState, useEffect, useRef } from 'react';

const CircularScoreIndicator = ({ score = 806, maxScore = 1000 }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const animationRef = useRef(null);
  const animationDuration = 1500;

  useEffect(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    let startValue = animatedScore;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(startValue + (score - startValue) * easeOutQuart);
      setAnimatedScore(currentValue);

      if (progress < 1) animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [score]);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const scorePercentage = animatedScore / maxScore;
  const strokeDashoffset = circumference - scorePercentage * circumference;

  const arrowAngle = scorePercentage * 360 - 90;
  const arrowX = 110 + radius * Math.cos((arrowAngle * Math.PI) / 180);
  const arrowY = 105 + radius * Math.sin((arrowAngle * Math.PI) / 180);
  const headX = 45 + radius * Math.cos(((arrowAngle - 90) * Math.PI) / 180);
  const headY = -15 + radius * Math.sin(((arrowAngle - 90) * Math.PI) / 180);

  return (
    <div className="relative w-[300px] sm:w-[350px] md:w-[450px] h-[300px] sm:h-[350px] md:h-[450px] rounded-full mx-auto">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r={radius} fill="none" stroke="#f0f0f0" strokeWidth="8" />

        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#03DF7F" />
            <stop offset="33%" stopColor="#00A3FF" />
            <stop offset="66%" stopColor="#7051A1" />
            <stop offset="100%" stopColor="#E10042" />
          </linearGradient>
        </defs>

        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="url(#scoreGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 100 100)"
          className="transition-all duration-300 ease-out"
        />

        <g transform={`translate(${headX}, ${headY})`}>
          <circle r="10" fill="url(#scoreGradient)" />
          <circle r="6" fill="none" stroke="white" strokeWidth="2" />
        </g>

        <g transform={`translate(${arrowX}, ${arrowY}) rotate(${arrowAngle + 90})`}>
          <polygon points="0,0 -8,10 8,10" fill="#000" />
        </g>

        <circle cx="100" cy="100" r="8" fill="#4f46e5" />
      </svg>

      {/* Score Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 bg-gradient-to-br from-[#F8FBFD] to-[#FAFAFA] shadow-xl rounded-full">
          <div className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 shadow-[0_4px_36px_rgba(0,0,0,0.1)] rounded-full">
            <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800">{animatedScore}</span>
            <span className="text-base sm:text-lg md:text-xl font-semibold text-green-600 mt-2">Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularScoreIndicator;
