import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  const activeLinkClass = "bg-primary/10 border-b-4 md:border-r-4 md:border-b-0 border-primary text-white";
  const inactiveLinkClass = "text-gray-400 hover:bg-gray-700 hover:text-white";

  return (
    <aside className="bg-gray-800 text-gray-300 flex md:flex-col md:w-64 w-full md:h-full">
      <nav className="flex md:flex-col w-full justify-around md:justify-start md:gap-2">
        <NavLink
          end={true}
          to='/admin'
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 py-3 md:flex-row md:justify-start md:gap-4 md:py-3.5 md:px-6 cursor-pointer transition-colors duration-200 ${isActive ? activeLinkClass : inactiveLinkClass}`
          }
        >
          <img src={assets.home_icon} alt="" className="w-5 icon-white" />
          <p className="font-medium text-xs md:text-base">Dashboard</p>
        </NavLink>

        <NavLink
          to='/admin/addBlog'
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 py-3 md:flex-row md:justify-start md:gap-4 md:py-3.5 md:px-6 cursor-pointer transition-colors duration-200 ${isActive ? activeLinkClass : inactiveLinkClass}`
          }
        >
          <img src={assets.add_icon} alt="" className="w-5 icon-white" />
          <p className="font-medium text-xs md:text-base">Add Blog</p>
        </NavLink>

        <NavLink
          to='/admin/listBlog'
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 py-3 md:flex-row md:justify-start md:gap-4 md:py-3.5 md:px-6 cursor-pointer transition-colors duration-200 ${isActive ? activeLinkClass : inactiveLinkClass}`
          }
        >
          <img src={assets.list_icon} alt="" className="w-5 icon-white" />
          <p className="font-medium text-xs md:text-base">Blog List</p>
        </NavLink>

        <NavLink
          to='/admin/comments'
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 py-3 md:flex-row md:justify-start md:gap-4 md:py-3.5 md:px-6 cursor-pointer transition-colors duration-200 ${isActive ? activeLinkClass : inactiveLinkClass}`
          }
        >
          <img src={assets.comment_icon} alt="" className="w-5 icon-white" />
          <p className="font-medium text-xs md:text-base">Comments</p>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
