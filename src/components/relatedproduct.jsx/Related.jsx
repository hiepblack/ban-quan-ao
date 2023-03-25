import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CardProducts from '../cardProduct/CardProducts'
import Comment from './comment/comment'
import Description from './description/description'
import "./related.css"

const Related = () => {
    const [hti,sethti] = useState(true)
  return (
    <div className='related container'>
        <div className='description'>
            <div className='nav__item_list'>
                <button onClick={()=>{sethti(!hti)}}>MÔ TẢ SẢN PHẨM</button>
                <button onClick={()=>{sethti(!hti)}}>REVIEW VỀ SẢN PHẨM</button>
            </div>
            <div>
                {hti?<div className=''><Description/></div>:<div className=''><Comment/></div>}
               
               
            </div>
        </div>
        <div className='related-products'>
            <h4>SẢN PHẨM LIÊN QUAN</h4>
            <div className='card-related'>
                <CardProducts/>
                <CardProducts/>
                <CardProducts/>
                <CardProducts/>
            </div>
        </div>

    </div>
  )
}

export default Related