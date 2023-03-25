import React,{useState} from 'react'

const FilterSize = () => {
  const [toggleSize, setToggleSize] = useState(true);
  return (
    <div className="filter__size">
        <div className="filter__size__header">
          <h3>Kích thước</h3>
          <span className={toggleSize ? "rotateX" : "rotateY"} onClick={()=>setToggleSize(!toggleSize)}>
            <i class="uil uil-angle-down"></i>
          </span>
        </div>
        <div className={toggleSize ? "filter__size__body":"filter__size__body show_body"}>
          <ul>
            <li>
              <a href="">
                <input type="checkbox" name="" id="" />
                <span className="check__mark">Size1</span>
              </a>
            </li>
            <li>
              <a href="">
                <input type="checkbox" name="" id="" />
                <span>Size1</span>
              </a>
            </li>
            <li>
              <a href="">
                <input type="checkbox" name="" id="" />
                <span>Size1</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default FilterSize