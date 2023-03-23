import React from "react";
import { useState, useEffect } from "react";
function BlogList({ blogs, title, handleDelete }) {
  return (
    <div>
      <h1 className="text-center text-white font-bold text-5xl">{title}</h1>
      {blogs.map((blog) => (
        <div
          className="flex flex-col m-10 max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-indigo-500/40 shadow-lg "
          key={blog.id}
        >
          {/* asdasdasd */}
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {blog.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {blog.body}
          </p>
          <h6 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Written By : {blog.author}
          </h6>
          <a
            href={`/${blog.link}`}
            className="w-32 mb-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <button
            type="button"
            onClick={() => handleDelete(blog.id)}
            className="focus:outline-none text-white w-32 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
