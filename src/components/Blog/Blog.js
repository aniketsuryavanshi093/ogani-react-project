import React, { useEffect } from "react";
import BreadCrumb from "../common components/BreadCrumb";
import BlogContent from "./BlogContent";
import BlogSideBar from "./BlogSideBar";

function Blog() {
  useEffect(()=>{
    window.location.hash = "blog"
  })
  return (
    <div>
      <BreadCrumb title="Blog"></BreadCrumb>

      <section class="blog spad">
        <div class="container">
          <div class="row">
              <BlogSideBar></BlogSideBar>
              <BlogContent></BlogContent>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
