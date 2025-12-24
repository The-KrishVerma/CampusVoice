import React, { useState } from 'react';
import { blogCategories } from '../assets/assets';
import BlogCard from './BlogCard';
import { useAppContext } from '../context/AppContext';

const BlogList = () => {
    const [menu, setMenu] = useState("All");
    const { blogs, input } = useAppContext();

    const filteredBlogs = () => {
        let filtered = blogs;
        if (input !== '') {
            filtered = blogs.filter((blog) =>
                blog.title.toLowerCase().includes(input.toLowerCase())
            );
        }

        if (menu !== "All") {
            filtered = filtered.filter((blog) => blog.category === menu);
        }

        return filtered;
    };

    return (
        <div className="flex flex-col items-center">
            <div className='flex flex-wrap justify-center gap-4 sm:gap-6 relative mb-12'>
                {blogCategories.map((item) => (
                    <div key={item} className='relative'>
                        <button
                            onClick={() => setMenu(item)}
                            className={`cursor-pointer text-gray-400 ${menu === item && 'text-white'}`}>
                            {item}
                        </button>
                    </div>
                ))}
            </div>

            <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='overflow-y-auto h-[70vh]'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                        {filteredBlogs()
                            .slice()
                            .reverse()
                            .map((blog) => (
                                <BlogCard key={blog._id} blog={blog} />
                            ))}
                    </div>
                </div>
            </div>

            {filteredBlogs().length === 0 && (
                <p className="text-gray-400 text-sm mb-24">No blogs match your search.</p>
            )}
        </div>
    );
};

export default BlogList;
