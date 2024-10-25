import { useEffect, useState } from 'react';

const DateTimeDisplay = () => {
  const [localTime, setLocalTime] = useState('');
  const [gmtTime, setGmtTime] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!forceShow) {
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition < 50);
      }
    };

    const handleNavClick = () => {
      setForceShow(true);
      setIsVisible(true);
      setTimeout(() => {
        setForceShow(false);
        setIsVisible(window.scrollY < 50);
      }, 3000);
    };

    const fetchTimes = () => {
      const localDate = new Date();
      const gmtDate = new Date(localDate.toLocaleString("en-US", { timeZone: "GMT" }));
      gmtDate.setHours(gmtDate.getHours() + 3);

      setLocalTime(localDate.toLocaleString());
      setGmtTime(gmtDate.toLocaleString());
    };

    window.addEventListener('navClick', handleNavClick);
    window.addEventListener('scroll', handleScroll);
    fetchTimes();
    const intervalId = setInterval(fetchTimes, 1000);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('navClick', handleNavClick);
    };
  }, [forceShow]);

  return (
    <div className={`fixed top-0 right-0 p-4 font-accents transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className='flex flex-col'>
        <div className={`flex justify-between items-center w-full text-[#289661] mb-4`}>
          <div className="gap-2.5 px-3 py-1.5 whitespace-nowrap rounded-md bg-zinc-500 bg-opacity-10 mr-2">
            {'You'}
          </div>
          <div className="flex gap-1.5 justify-center items-center px-3 py-1.5 rounded-md bg-zinc-500 bg-opacity-10">
            <time>{localTime}</time>
          </div>
        </div>
        <div className={`flex justify-between items-center w-full text-[#007AFF]`}>
          <div className="gap-2.5 px-3 py-1.5 whitespace-nowrap rounded-md bg-zinc-500 bg-opacity-10 mr-2">
            {'Me'}
          </div>
          <div className="flex gap-1.5 justify-center items-center px-3 py-1.5 rounded-md bg-zinc-500 bg-opacity-10">
            {gmtTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
