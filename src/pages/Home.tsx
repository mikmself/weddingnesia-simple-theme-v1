import React from 'react';
import Cover from '../components/Cover';
import Quotes from '../components/Quotes';
import Gallery from '../components/Gallery';
import Greeting from '../components/Greeting';
import Bride from '../components/Bride';
import Groom from '../components/Groom';
import EventDetail from '../components/EventDetail';
import DigitalWallet from '../components/DigitalWallet';
import Form from '../components/Form';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Cover />
      <Quotes />
      <Gallery />
      <Greeting />
      <Bride />
      <Groom />
      <EventDetail />
      <DigitalWallet />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
