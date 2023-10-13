import React, { useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import BlogDetail from '../BlogDetail/BlogDetail';
import './Blog.css'

const Blog = () => {
    const blogData = useLoaderData();

    console.log(blogData)
    return (
        <div className='blog-container'>
            {
                blogData.map((blog)=><BlogDetail
                key={blog.id}
                blog={blog}
                ></BlogDetail>)
            }

        </div>
    );
};

export default Blog;