import BlogList from "./blog/BlogList";
import { useState } from "react";
import React from "react";
function MainContent() {
  const [blogs, setBlogs] = useState([
    {
      title: "My New Website",
      body: "lorem...",
      author: "mario",
      link: "asd",
      id: 1,
    },
    {
      title: "My New Website",
      body: "lorem...",
      author: "mario",
      link: "asd",
      id: 2,
    },
    {
      title: "My New Website",
      body: "lorem...",
      author: "yoshi",
      link: "asd",
      id: 3,
    },
    {
      title: "My New Website",
      body: "lorem...",
      author: "yoshi",
      link: "asd",
      id: 4,
    },
    {
      title: "My New Website",
      body: "lorem...",
      author: "mario",
      link: "asd",
      id: 5,
    },
  ]);
  return (
    <div className="w-full">
      <BlogList blogs={blogs} title={"All Blogs"} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title={"Mario`s Blogs"}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "yoshi")}
        title={"Yoshi`s Blogs"}
      />
    </div>
  );
}

export default MainContent;
