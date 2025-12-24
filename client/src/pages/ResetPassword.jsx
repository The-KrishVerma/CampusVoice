import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const ResetPassword = () => {
  const { axios, navigate } = useAppContext();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { data } = await axios.post('/api/user/reset-password', {
        email,
        otp,
        newPassword,
      });
      if (data.success) {
        localStorage.removeItem('resetEmail');
        toast.success(data.message);
        navigate('/login');
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

  useEffect(() => {
    const resetEmail = localStorage.getItem('resetEmail');
    if (resetEmail) {
      setEmail(resetEmail);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-20 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-24 -left-16 w-80 h-80 bg-sky-500/20 blur-3xl rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-xl mx-auto bg-gray-900/70 border border-gray-700 rounded-[28px] p-8 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-red-300">Secure Reset</p>
                <h1 className="text-3xl font-semibold mt-2">Set a new password</h1>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                CV
              </div>
            </div>
            <p className="text-gray-400 mb-8">
              Enter the verification code from your email and choose a new password that feels unstoppable.
            </p>
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
              <div>
                <label className="block text-sm text-gray-300 mb-2">Reset code</label>
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  maxLength={6}
                  className="w-full tracking-[0.4em] text-center rounded-xl bg-gray-900/60 border border-gray-700 px-4 py-3 text-white outline-none focus:border-primary"
                  placeholder="------"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">New password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full rounded-xl bg-gray-900/60 border border-gray-700 px-4 py-3 text-white outline-none focus:border-primary"
                  placeholder="Create a strong password"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 transition-colors disabled:opacity-60"
              >
                {isSubmitting ? 'Updating...' : 'Update password'}
              </button>
            </form>
            <div className="mt-6 text-sm text-gray-400 flex justify-between">
              <button onClick={() => navigate('/forgot-password')} className="hover:text-primary">
                Need a new code?
              </button>
              <button onClick={() => navigate('/login')} className="hover:text-primary">
                Back to login
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResetPassword;
