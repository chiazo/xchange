import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";

import Comment from "./components/comment";
import { user } from "./data/user";

const DiscussionPost = ({ posts }) => {
  const { id } = useParams();
  const [comments, setComments] = useState(posts[id].comments);
  const [writingComment, setWritingComment] = useState(false);
  const [currComment, setCurrComment] = useState("");
  const {
    state: { post },
  } = useLocation();
  const { title, submission, category, author, date, icon } = post;

  const addComment = () => {
    setWritingComment(true);
  };

  const updateComment = (e) => {
    setCurrComment(e.target.value);
  };

  const submitComment = () => {
    const newComment = {
      submission: currComment,
      status: user.status,
      author: user.username,
      icon: user.icon,
      date: new Date("2022-03-04T03:24:00"),
      upvotes: 1,
      downvotes: 0,
      upvoted: true,
      downvoted: false,
    };
    setComments([...comments, newComment]);
    posts[id].comments = [...posts[id].comments, newComment];
    setWritingComment(false);
  };

  const changeCommentVoteStatus = (parentId, id, type) => {
    let filteredComment = posts[parentId].comments[id];
    if (type === "upvotes") {
      if (filteredComment.upvoted) {
        filteredComment = {
          ...filteredComment,
          upvoted: false,
          upvotes: filteredComment.upvotes - 1,
        };
      } else {
        filteredComment = {
          ...filteredComment,
          ...(filteredComment.downvoted && {
            downvoted: false,
            downvotes: filteredComment.downvotes - 1,
          }),
          upvoted: true,
          upvotes: filteredComment.upvotes + 1,
        };
      }
    } else if (type === "downvotes") {
      if (filteredComment.downvoted) {
        filteredComment = {
          ...filteredComment,
          downvoted: false,
          downvotes: filteredComment.downvotes - 1,
        };
      } else {
        filteredComment = {
          ...filteredComment,
          ...(filteredComment.upvoted && {
            upvoted: false,
            upvotes: filteredComment.upvotes - 1,
          }),
          downvoted: true,
          downvotes: filteredComment.downvotes + 1,
        };
      }
    }

    posts[parentId].comments[id] = filteredComment;
    return filteredComment;
  };

  return (
    <div className="discussion-post">
      <button className="add-comment-button" onClick={addComment}>
        +
      </button>
      <Card className="discussion-post-info">
        <div className="row">
          <div className="discussion-profile-pic col-2">
            <img className="profile-pic" alt="profile pic" src={icon} />
          </div>
          <div className="col-10">
            <Card.Title className="discussion-post-title">{title}</Card.Title>
            <div className="row categories justify-content-start">
              {category.map((c, idx) => (
                <div className="col-4 category" key={idx}>
                  <Card.Subtitle className="discussion-post-category">
                    {c}
                  </Card.Subtitle>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <Card.Body className="discussion-post-body">
            <Card.Text className="discussion-post-text">{submission}</Card.Text>
          </Card.Body>
        </div>
        <div className="row">
          <div className="col-9">
            <div className="row discussion-post-details">
              <div className="col-4">By: @{author} </div>
              <div className="col-1">|</div>
              <div className="col-4">{date.toDateString()}</div>
            </div>
          </div>

          <div className="col-3">
            <button className="discussion-button">Sort</button>
          </div>
        </div>
      </Card>
      <div className="comment-input">
        {writingComment && (
          <form>
            <textarea
              name="text"
              rows="3"
              cols="10"
              className="form-control"
              onChange={updateComment}
              placeholder="Write your comment here!"
            ></textarea>
            <button onClick={submitComment} className="submit-comment">
              Submit Comment
            </button>
          </form>
        )}
      </div>
      <div className="comment-section">
        {comments.map(({ author, title, submission, status, icon }, idx) => (
          <Comment
            key={idx + 35}
            parentId={id}
            id={idx}
            allComments={comments}
            changeCommentVoteStatus={changeCommentVoteStatus}
            author={author}
            title={title}
            submission={submission}
            status={status}
            icon={icon}
          />
        ))}
      </div>
      <div className="ending-text">
        {comments.length > 0 ? "Nothing left to see!" : "No comments!"}
      </div>
    </div>
  );
};

export default DiscussionPost;
