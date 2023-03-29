import React from 'react'
import Banner from '../components/banner/Banner'
import BlogdetailContent from '../components/blogdetail/blogdetail'

const Blogdetail = () => {
  return (
    <div>
        <Banner param={"Trang chủ/Tin tức"} title={"Tin tức"}/>
        <BlogdetailContent/>
    </div>
  )
}

export default Blogdetail