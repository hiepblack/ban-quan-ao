import React from "react";
import "./comment.css";

const Comment = ({ product, handlecomment, datacmt, setDataCmt }) => {

  const handleClick = (e) => {
    e.preventDefault();
    handlecomment();
  };

  return (
    <div>
      <div className="comments">
        {product?.comments?.map((item, index) => {
          return (
            <div class="comment" key={index}>
              <div className="comment__user">
                <img src={item.image} alt="" />
                <div className="comment__username">
                  <h4>{item.username}</h4>
                  <span>{item.createdAt}</span>
                </div>
              </div>
              <p className="commment__content">{item.textComment}</p>
            </div>
          );
        })}
        <form action="" onSubmit={handleClick}>
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
                value={datacmt.textComment}
                onChange={(e) =>
                  setDataCmt((pre) => {
                    return {
                      ...pre,
                      textComment: e.target.value,
                    };
                  })
                }
              ></textarea>
            </div>
            <button type="submit">Bình Luận</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
