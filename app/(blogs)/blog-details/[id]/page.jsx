import BlogDetails from "@/components/blog/BlogDetails";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import { allBlogs } from "@/data/blogs";
import React from "react";
export const metadata = {
  title:
    "Blog Details || Creatorsmela - India's Leading Talent Management Company",
  description: "Creatorsmela - India's Leading Talent Management Company",
};

export default function page({ params }) {
  const blog = allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];
  return (
    <>
      <Topbar />
      <Header4 />

      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <BlogDetails blog={blog} />
      <Footer3 />
    </>
  );
}
