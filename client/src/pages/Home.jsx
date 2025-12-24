import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import BlogList from '../components/BlogList';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Header />
      <main className="container mx-auto px-4 pt-6 pb-12">
        <BlogList />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
