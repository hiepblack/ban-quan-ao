import React from 'react'

const SigupMain = () => {
  return (
    <div className='container'>
      
      <form className='form_login'>
      <h2 className='title_sigin'>Tạo tài khoản</h2>
      <div className='lable_input'>
        <input type="text"  placeholder="Name" required/>
        </div>
        <div className='lable_input'>
        <input type="email"  placeholder="Email" required/>
        </div>

        <div className='lable_input'>
        <input type="password" placeholder="PassWord" required/>
        </div>
        <div className='lable_input'>
        <input type="password"  placeholder="Confirm passWord" required/>
        </div>
        <div className="btn-sumbit">
              <button type="submit" className="up">
               Xác nhận
              </button>
            </div>
      </form>
    </div>
  )
}

export default SigupMain