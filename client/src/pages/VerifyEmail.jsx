import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const VerifyEmail = () => {
  const { axios, navigate, setAuth, fetchMe } = useAppContext();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { data } = await axios.post('/api/user/verify-email', { email, otp });
      if (data.success) {
        setAuth(data.token, data.role || 'user');
        await fetchMe();
        localStorage.removeItem('pendingEmail');
        toast.success('Email verified successfully');
        navigate('/profile');
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

  const handleResend = async () => {
    if (!email) {
      toast.error('Enter your email first');
      return;
    }
    setIsResending(true);
    try {
      const { data } = await axios.post('/api/user/resend-otp', { email });
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      const msg = error?.response?.data?.message || error.message;
      toast.error(msg);
    } finally {
      setIsResending(false);
    }
  };

  useEffect(() => {
    const pending = localStorage.getItem('pendingEmail');
    if (pending) {
      setEmail(pending);
    }
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto bg-gray-800/70 border border-gray-700 rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-semibold mb-2">Verify your email</h1>
          <p className="text-gray-400 mb-8">Enter the 6-digit code we sent to your inbox.</p>
          <form className="space-y-5" onSubmit={handleVerify}>
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
              <label className="block text-sm text-gray-300 mb-2">Verification code</label>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                maxLength={6}
                className="w-full tracking-[0.4em] text-center rounded-xl bg-gray-900/60 border border-gray-700 px-4 py-3 text-white outline-none focus:border-primary"
                placeholder="------"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {isSubmitting ? 'Verifying...' : 'Verify email'}
            </button>
          </form>
          <div className="mt-6 text-sm text-gray-400 flex justify-between">
            <button onClick={handleResend} disabled={isResending} className="hover:text-primary">
              {isResending ? 'Sending...' : 'Resend code'}
            </button>
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

export default VerifyEmail;
