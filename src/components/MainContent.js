import BlogList from "./blog/BlogList";
import { useState, useEffect, useCallback } from "react";
import React from "react";
import useFetch from "./blog/useFetch";

function MainContent() {
  // const [name, setName] = useState("mario");
  const handleDelete = (id) => {
    // const newBlogs = blogs.filter((blog) => blog.id !== id);
    // setBlogs(newBlogs);
  };

  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="w-full text-white">
      {error && (
        <div role="alert">
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Error
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>{error}</p>
          </div>
        </div>
      )}
      {isPending && (
        <div className="flex items-center justify-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-blue-900 motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
          </div>
          Loading...
        </div>
      )}
      {data && (
        <BlogList
          blogs={data}
          title={"All Blogs"}
          handleDelete={handleDelete}
        />
      )}

      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title={"Mario`s Blogs"}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "yoshi")}
        title={"Yoshi`s Blogs"}
      /> */}
      {/* <button onClick={() => setName("luigi")}>Change Name</button>
      <p>{name}</p> */}
    </div>
  );
}

export default MainContent;
