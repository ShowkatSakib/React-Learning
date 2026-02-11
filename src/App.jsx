import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {      //arrow function
  return (
    <div>
      <Header/>
      <Hero/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;