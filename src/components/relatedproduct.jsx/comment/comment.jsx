import React from 'react'
import "./comment.css"
const Comment = () => {
  return (
    <div>
        <div className='showComment'>
                <div class="user_commented card_comments">
                   <div className='avt'>
                    <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" class="rounded-circle" width="40" height="40"/>
                        <h4>Rob Simpson</h4>
                        <span>- 20 October, 2018</span>
                   </div>
                    
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                </div>
            <form action="">
            <div class="card_comments">
               <div class="row">  
                   <div class="avatar_user">  
                       <img src="https://i.imgur.com/xELPaag.jpg" width="70" class="rounded-circle mt-2"/> 
                       <h4>Rob Simpson</h4>                
                   </div>                  
                   <div class="">                   
                       <div class="comment-box">       
                           <h4>Add a comment</h4>                          
                           <div class="comment-area">
                                                        
                              <textarea className="form-control" name="" id="" cols="60" rows="5"></textarea>
                           
                           </div>
                           
                           <div class="comment-btns mt-2">
                               
                               <div class="row">
                                    <div className='btn_comment'>
                                        <button class="learn-more">
                                            <span class="circle" aria-hidden="true">
                                            <span class="icon arrow"></span>
                                            </span>
                                            <span class="button-text">Gửi Bình Luận</span>
                                        </button>
                                     </div>
                               
                               </div>
                           
                           </div>
                       
                       
                       </div>
                   
                   </div>
               
               
               </div>
     
           </div>

            </form>
        </div>
    </div>
  )
}

export default Comment