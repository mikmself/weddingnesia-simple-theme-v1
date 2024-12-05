import React from 'react';

const DigitalWallet: React.FC = () => {
  return (
    <section className="p-6 text-center bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg rounded-lg">
      <h3 className="text-3xl font-bold mb-6">Dompet Digital</h3>
      <p className="text-lg italic mb-4">“Sebagai bentuk doa dan restu, Anda dapat berbagi kebahagiaan bersama kami”</p>
      <div className="flex flex-col gap-6">
        {['Bank BCA', 'Bank Mandiri', 'Bank BRI'].map((bank, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md border">
            <img src="https://mikmself.sirv.com/Images/qr.png" alt={`QR Code ${bank}`} className="w-38 h-38 mx-auto mb-4" />
            <p className="text-lg font-semibold">{bank}</p>
            <p>No Rek: 123-456-7890</p>
            <p className="text-sm italic">a/n Muhamad Irga Khoirul Mahfis</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalWallet;
