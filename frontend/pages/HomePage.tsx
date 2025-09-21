import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

interface HomePageProps {
  onSignInClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSignInClick }) => {
  return (
    <>
      <Header onSignInClick={onSignInClick} />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
