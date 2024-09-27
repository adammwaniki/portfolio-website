import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DateTimeDisplay = () => {
  const [localTime, setLocalTime] = useState('');
  const [gmtTime, setGmtTime] = useState('');

  useEffect(() => {
    const fetchTimes = () => {
      const localDate = new Date();
      const gmtDate = new Date(localDate.toLocaleString("en-US", { timeZone: "GMT" }));
      gmtDate.setHours(gmtDate.getHours() + 3); // Adjust for GMT +3

      setLocalTime(localDate.toLocaleString());
      setGmtTime(gmtDate.toLocaleString());
    };

    fetchTimes(); // Initial fetch
    const intervalId = setInterval(() => {
      const localDate = new Date();
      const gmtDate = new Date(localDate.toLocaleString("en-US", { timeZone: "GMT" }));
      gmtDate.setHours(gmtDate.getHours() + 3); // Adjust for GMT +3

      setLocalTime(localDate.toLocaleString());
      setGmtTime(gmtDate.toLocaleString());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`fixed top-0 right-0 p-4 font-body`}>
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

DateTimeDisplay.propTypes = {
  label: PropTypes.string.isRequired,
};

export default DateTimeDisplay;
