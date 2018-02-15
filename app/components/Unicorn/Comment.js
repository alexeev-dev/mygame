import React from 'react'

const Comment = ({ comment }) => (
  <div className="be-comment">
    <div className="be-img-comment">
      <a href="blog-detail-2.html">
        <img src="img/c1.png" alt="" className="be-ava-comment" />
      </a>
    </div>
    <div className="be-comment-content">

      <span className="be-comment-name">
        <a href="blog-detail-2.html">{comment.user}</a>
      </span>
      <span className="be-comment-time">
        <i className="fa fa-clock-o"></i>
        {comment.date}
      </span>

      <p className="be-comment-text">
        {comment.text}
      </p>
    </div>

  </div>
)

export default Comment