import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'
  ].map(img => `https://mikmself.sirv.com/Images/${img}`);

  return (
    <section className="p-4 grid grid-cols-3 gap-2">
      {images.map((image, index) => (
        <div key={index} className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      ))}
    </section>
  );
};

export default Gallery;
