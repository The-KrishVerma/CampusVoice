import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const { axios, navigate } = useAppContext();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { data } = await axios.post('/api/user/request-password-reset', { email });
      if (data.success) {
        localStorage.setItem('resetEmail', email);
        toast.success(data.message);
        navigate('/reset-password');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      const msg = error?.response?.data?.message || error.message;
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto bg-gray-800/70 border border-gray-700 rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-semibold mb-2">Reset your password</h1>
          <p className="text-gray-400 mb-8">We’ll send a reset code to your email.</p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl bg-gray-900/60 border border-gray-700 px-4 py-3 text-white outline-none focus:border-primary"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send reset code'}
            </button>
          </form>
          <div className="mt-6 text-sm text-gray-400">
            <button onClick={() => navigate('/login')} className="hover:text-primary">
              Back to login
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
