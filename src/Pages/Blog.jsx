import React from 'react';
import Banner from "../components/banner/Banner";
import BlogContent from '../components/blog/Blog';
import Listcate from '../components/blog/Listcate';
const Blog = () => {
    return (
        <div>
            <Banner param={"Trang Chủ / Tin Tức"} title={"Tin Tức"} />
            <Listcate param={["Tất cả","Đầm công sở","Đầm thu đông"]}/>
            <div className='content_blog'>
                <BlogContent/>
            </div>
        </div>
    );
};

export default Blog;