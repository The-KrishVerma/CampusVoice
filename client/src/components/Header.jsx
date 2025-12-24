import React, { useRef } from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = () => {
    setInput('');
    inputRef.current.value = '';
  };

  return (
    <div className="relative text-white bg-gray-900">
      <div className="container mx-auto px-4 pt-12 pb-6 text-center">
        <div className="inline-flex items-center justify-center gap-3 px-5 py-1.5 mb-4 bg-red-500/15 rounded-full text-sm">
          <p className="text-red-300">New: AI feature integrated</p>
          <img src={assets.star_icon} className="w-3.5" alt="" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold sm:leading-tight">
          Your Modern <span className="text-primary">Blogging</span> Platform
        </h1>
        <p className="my-6 sm:my-8 max-w-3xl mx-auto text-lg text-gray-400">
          This is your space to think out loud, share what matters, and write without filters. Whether it's one word or a thousand, your story starts right here.
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-xl mx-auto bg-gray-800 rounded-full overflow-hidden shadow-lg transition-all duration-300 focus-within:border-primary"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for blogs..."
            required
            className="w-full pl-6 pr-4 py-3 bg-transparent text-white placeholder-gray-500 outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 m-1.5 rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Search
          </button>
        </form>
        <div className="mt-4 text-center">
          {input && (
            <button
              onClick={onClear}
              className="bg-gray-700 text-gray-300 font-light text-xs py-1.5 px-4 rounded-full shadow-md cursor-pointer hover:bg-gray-600 transition-all duration-300"
            >
              Clear Search
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
