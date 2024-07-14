import React, { useEffect, useState } from "react";

function calculateTimeLeft() {
  const targetDate = new Date("2024-07-25");
  const currentDate = new Date();
  const difference = targetDate - currentDate;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
    };
  }

  return timeLeft;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  const timerComponents = Object.keys(timeLeft).map(
    (interval, index, array) => {
      if (!timeLeft[interval]) {
        return null;
      }

      return (
        <span
          key={interval}
          className='text-[1.7rem] lg:text-6xl text-abugelap helvetica-rounded-text'
        >
          {timeLeft[interval]} {interval} {index < array.length - 1 ? "" : ""}
        </span>
      );
    }
  );

  return (
    <div className='text-center text-birutext'>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default Countdown;
