import React from 'react';

const Quotes: React.FC = () => {
  return (
    <section className="py-8 bg-white text-center">
      <blockquote className="mx-4 border-l-4 border-gray-500 pl-4">
        <p className="font-light text-lg mb-4">"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."</p>
        <p className="font-light text-sm mb-2 italic">- QS. Ar-Rum: 21</p>
      </blockquote>
    </section>
  );
};

export default Quotes;
