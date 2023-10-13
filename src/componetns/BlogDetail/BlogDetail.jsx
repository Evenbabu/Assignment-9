import React from 'react';
import './BlogDetail.css'

const BlogDetail = ({blog}) => {

        const {id, qus, ans} = blog;
        // console.log(id)

    return (
        <div className='blog-detail'>
            <h2>{qus}</h2>
            <p>Ans: {ans}</p>
        </div>
    );
};

export default BlogDetail;