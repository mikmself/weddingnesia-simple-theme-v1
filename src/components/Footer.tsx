import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-6 text-center bg-gray-100 rounded-t-lg shadow-inner">
      <p className="text-lg italic mb-4">“Terima kasih atas doa dan kehadiran Anda yang telah menambah kebahagiaan kami.”</p>
      <p className="text-md font-semibold">Salam hangat dari keluarga besar mempelai</p>
      <div className="mt-6">
        <p>Undangan oleh <span className="font-semibold">Weddingnesia</span></p>
        <a href="https://weddingnesia.co.id" className="text-blue-500">weddingnesia.co.id</a>
      </div>
    </footer>
  );
};

export default Footer;
