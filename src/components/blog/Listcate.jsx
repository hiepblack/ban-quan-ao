import React from 'react'
import "./listcate.css"


const Listcate = ({param}) => {
    console.log(param)
  return (
    <div className='list_categorys container'>
        <div><strong>Xem tất cả bài viết với tag:</strong></div>
        <div>
            <ul>
                 {param.map((cate)=>{
                    return(<li><button className='cate'>{cate}</button></li>)
                 })}
            </ul> 
        </div>
    </div>
  )
}

export default Listcate