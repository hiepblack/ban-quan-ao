import React from "react";
import "./comment.css";
const Comment = () => {
  return (
    <div>
      <div className="comments">
        <div class="comment">
          <div className="comment__user">
            <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" />
            <div className="comment__username">
              <h4>Rob Simpson</h4>
              <span>20 October, 2018</span>
            </div>
          </div>
          <p className="commment__content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            numquam assumenda hic aliquam vero sequi velit molestias doloremque
            molestiae dicta?
          </p>
        </div>
        <div class="comment">
          <div className="comment__user">
            <img
              src="https://i.imgur.com/CFpa3nK.jpg"
              alt=""
              class="rounded-circle"
              width="50"
              height="50"
            />
            <div className="comment__username">
              <h4>Rob Simpson</h4>
              <span>20 October, 2018</span>
            </div>
          </div>
          <p className="commment__content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            numquam assumenda hic aliquam vero sequi velit molestias doloremque
            molestiae dicta?
          </p>
        </div>

        <form action="">
          <div className="form_comment">
            <p>Add a comment</p>
            <div className="form_comment__input">
              <textarea
                className="form-control"
                name=""
                id=""
                cols="60"
                rows="5"
                placeholder="Viết bình luận của bạn..."
              ></textarea>
            </div>
            <button>Bình Luận</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
