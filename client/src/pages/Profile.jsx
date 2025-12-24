import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Profile = () => {
  const { axios, user, setUser, fetchMe, navigate, token, role } = useAppContext();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!token || role !== 'user') {
      navigate('/login');
      return;
    }
    if (!user) {
      fetchMe();
    }
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setBio(user.bio || '');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('bio', bio);
      if (avatar) {
        formData.append('avatar', avatar);
      }
      const { data } = await axios.put('/api/user/profile', formData);
      if (data.success) {
        setUser(data.user);
        toast.success('Profile updated');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      const msg = error?.response?.data?.message || error.message;
      toast.error(msg);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="bg-gray-800/70 border border-gray-700 rounded-2xl p-6 text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-700 overflow-hidden border-4 border-gray-900">
              {avatar ? (
                <img src={URL.createObjectURL(avatar)} alt="avatar preview" className="w-full h-full object-cover" />
              ) : user?.avatar ? (
                <img src={user.avatar} alt="avatar" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-3xl font-semibold text-gray-300">
                  {user?.name?.[0] || 'U'}
                </div>
              )}
            </div>
            <p className="mt-4 font-semibold text-lg">{user?.name || 'Your Profile'}</p>
            <p className="text-xs text-gray-400">{user?.email}</p>
            <label className="mt-4 inline-block text-xs text-primary cursor-pointer">
              Change photo
              <input type="file" className="hidden" onChange={(e) => setAvatar(e.target.files[0])} />
            </label>
          </div>
          <div className="bg-gray-800/70 border border-gray-700 rounded-2xl p-8">
            <h1 className="text-2xl font-semibold mb-2">Profile settings</h1>
            <p className="text-gray-400 mb-8">Update your profile information and bio.</p>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Full name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl bg-gray-900/60 border border-gray-700 px-4 py-3 text-white outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Bio</label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full rounded-xl bg-gray-900/60 border border-gray-700 px-4 py-3 text-white outline-none focus:border-primary h-28"
                  placeholder="Tell your story..."
                />
              </div>
              <button
                type="submit"
                disabled={isSaving}
                className="w-full sm:w-auto rounded-full bg-primary px-8 py-3 font-medium text-white hover:bg-primary/90 transition-colors disabled:opacity-60"
              >
                {isSaving ? 'Saving...' : 'Save changes'}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
