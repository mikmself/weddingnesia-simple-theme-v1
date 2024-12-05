import React from 'react';

const Form: React.FC = () => {
  return (
    <section className="p-8 text-center bg-white shadow-lg rounded-lg">
      <h3 className="text-3xl font-bold mb-4">Form Ucapan Selamat</h3>
      <p className="text-lg italic mb-6">“Bagikan doa dan harapan Anda untuk kami di hari bahagia ini.”</p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold mb-1">Nama Anda</label>
          <input type="text" id="name" className="w-full p-3 border rounded-lg" placeholder="Masukkan nama Anda" />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-semibold mb-1">Ucapan Selamat</label>
          <textarea id="message" rows={4} className="w-full p-3 border rounded-lg" placeholder="Tulis ucapan selamat dan doa untuk kami..."></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-full">Kirim Ucapan</button>
      </form>
    </section>
  );
};

export default Form;
