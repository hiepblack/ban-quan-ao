import React from 'react'
import 'collectbanner.css';
import img1 from '../../assets/homepage_banner_box_1_image.webp';
import img2 from "../../assets/homepage_banner_box_2_image.webp";




const CollectBanner = () => {
  return (
    <div>
        <div>
            <div>
                <img src={img1} alt="" />
            </div>
            <div>
                content
            </div>
        </div>
        <div>
            <div>
                content
            </div>
            <div>
                <img src={img2} alt="" />
            </div>
        </div>
       
    </div>
  )
}

export default CollectBanner