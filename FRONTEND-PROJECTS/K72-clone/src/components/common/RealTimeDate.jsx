import React, { useEffect, useState } from 'react';

const RealTimeDate = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = time.toLocaleDateString('en-US', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  const clock = time.toLocaleTimeString('en-US');

  return (
    <div className="w-fit max-w-[90vw]">
      <div className="
        bg-black/60 backdrop-blur-xl 
        border border-white/10 
        rounded-xl shadow-lg
        
        px-3 py-2 
        sm:px-4 sm:py-2.5 
        md:px-5 md:py-3
      ">
        
        <div className="
          text-[10px] sm:text-xs md:text-sm 
          tracking-[0.2em] sm:tracking-[0.25em] 
          text-white/50 uppercase
        ">
          {date}
        </div>

        <div className="
          text-lg sm:text-xl md:text-2xl lg:text-3xl 
          font-semibold text-white 
          mt-0.5 sm:mt-1 
          tracking-wide
        ">
          {clock}
        </div>

      </div>
    </div>
  );
};

export default RealTimeDate;