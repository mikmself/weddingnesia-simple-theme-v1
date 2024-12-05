import React, { useEffect, useState } from 'react';

const EventDetail: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("April 16, 2029 09:00:00").getTime();

    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(countdownInterval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
      <section className="p-6 text-center bg-white shadow-lg rounded-lg">
        <h3 className="text-3xl font-bold mb-4">Event Details</h3>
        {/* Event Countdown */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-lg text-white">
          <p className="text-xs font-light">Countdown to Our Big Day</p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="text-center">
              <p className="text-xs font-extrabold">{countdown.days}</p>
              <p className="text-xs">Days</p>
            </div>
            <span>:</span>
            <div className="text-center">
              <p className="text-xs font-extrabold">{countdown.hours}</p>
              <p className="text-xs">Hours</p>
            </div>
            <span>:</span>
            <div className="text-center">
              <p className="text-xs font-extrabold">{countdown.minutes}</p>
              <p className="text-xs">Minutes</p>
            </div>
            <span>:</span>
            <div className="text-center">
              <p className="text-xs font-extrabold">{countdown.seconds}</p>
              <p className="text-xs">Seconds</p>
            </div>
          </div>
        </div>
        {/* Akad Nikah and Resepsi */}
        <div className="mt-6">
          <h4 className="text-2xl font-semibold mb-2">💍 Akad Nikah</h4>
          <p className="text-lg">Senin, 16 April 2029</p>
          <p className="text-lg">09:00 - 11:00 WIB</p>
          <h4 className="text-2xl font-semibold mt-10 mb-2">🎉 Resepsi</h4>
          <p className="text-lg">Senin, 16 April 2029</p>
          <p className="text-lg">13:00 - 17:00 WIB</p>
        </div>
        {/* Lokasi Acara */}
        <div className="mt-10 bg-gray-100 p-6 rounded-lg">
          <h5 className="text-xl font-semibold mb-4">📍 Lokasi Acara</h5>
          <p>Hotel Java Heritage</p>
          <p className="italic text-gray-600 mb-8">Jl. DR. Angka No. 71, Purwokerto</p>
          <a href="https://maps.google.com?q=Hotel+Java+Heritage+Purwokerto" className="bg-blue-500 text-white px-6 py-2 rounded-full">Open in Maps</a>
        </div>
      </section>
  );
};

export default EventDetail;
