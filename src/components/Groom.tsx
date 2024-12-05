import React from 'react';

const Groom: React.FC = () => {
  return (
    <section className="p-4 text-center bg-gray-50">
      <h3 className="text-2xl font-bold">Groom</h3>
      <img src="https://mikmself.sirv.com/Images/wanita.jpg" alt="Foto Mempelai Pria" className="w-24 h-24 rounded-full mx-auto mt-4" />
      <p className="text-lg mt-2">Lulu Amnah Fitriya Maharani</p>
      <p className="font-regular">Anak kedua dari pasangan Bapak Akhmad Thoib dan Ibu Titik Herdi Astuti</p>
      <a href="https://instagram.com/_luluamnah" className="text-blue-500">@_luluamnah</a>
    </section>
  );
};

export default Groom;
