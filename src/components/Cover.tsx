import React from 'react';

const Cover: React.FC = () => {
  return (
    <section className="h-screen bg-cover bg-center text-center text-white relative" style={{ backgroundImage: "url('https://mikmself.sirv.com/Images/cover.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative pt-24">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-28 h-28 bg-cover rounded-lg border-4 border-white" style={{ backgroundImage: "url('https://mikmself.sirv.com/Images/pria.jpg')" }}></div>
          <div className="w-28 h-28 bg-cover rounded-lg border-4 border-white" style={{ backgroundImage: "url('https://mikmself.sirv.com/Images/wanita.jpg')" }}></div>
        </div>
        <h1 className="text-4xl font-black mb-2">The Wedding of</h1>
        <h2 className="text-3xl font-bold mb-4">Irga & Lulu</h2>
        <p className="text-lg font-regular mb-4">Kepada Yth. Bapak/Ibu/Saudara/i<br /><b>Didi Prasetyo</b></p>
        <button className="bg-white text-black px-6 py-2 rounded-full mb-6 font-semibold">Open Invitation</button>
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-12 h-12 bg-white rounded-full opacity-75 flex items-center justify-center text-black text-lg font-semibold">💍</div>
          <div className="w-12 h-12 bg-white rounded-full opacity-75 flex items-center justify-center text-black text-lg font-semibold">❤️</div>
          <div className="w-12 h-12 bg-white rounded-full opacity-75 flex items-center justify-center text-black text-lg font-semibold">🎉</div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
