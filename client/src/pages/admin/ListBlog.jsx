import React, { useEffect, useState } from 'react';
import BlogTableItem from '../../components/admin/BlogTableItem';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const { axios } = useAppContext();

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get('/api/admin/blogs');
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className='flex-1 p-4 md:p-10 text-white'>
      <h1 className='text-2xl font-semibold mb-6'>All Blog Posts</h1>

      <div className='relative overflow-x-auto bg-gray-800 shadow-lg rounded-lg border border-gray-700'>
        <table className='w-full text-sm text-left text-gray-400'>
          <thead className='text-xs text-gray-400 uppercase bg-gray-800 border-b-2 border-gray-700'>
            <tr>
              <th scope='col' className='px-4 py-4 xl:px-6'>#</th>
              <th scope='col' className='px-4 py-4'>Blog Title</th>
              <th scope='col' className='px-4 py-4 max-sm:hidden'>Date</th>
              <th scope='col' className='px-4 py-4 max-sm:hidden'>Status</th>
              <th scope='col' className='px-4 py-4'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1} />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-10 text-gray-500">No blogs found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlog;
