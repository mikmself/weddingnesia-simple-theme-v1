import React from 'react';

const Greeting: React.FC = () => {
  return (
    <section className="p-4 text-center">
      <div className="mb-4">
        <img src="https://mikmself.sirv.com/Images/mempelai.jpg" alt="Foto Mempelai" className="w-24 h-24 rounded-full mx-auto" />
      </div>
      <p className="text-lg font-light italic">"Dengan rahmat dan kasih sayang Allah, kami merasa sangat bersyukur atas berkah yang diberikan kepada kami."</p>
      <p className="text-lg font-light mt-4">Kami harap kehadiran dan doa restu Anda dapat menjadi awal dari perjalanan kami yang penuh berkah dan kebahagiaan.</p>
      <p className="mt-6 font-semibold text-xl">Irga & Lulu</p>
    </section>
  );
};

export default Greeting;
