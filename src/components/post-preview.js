import React, { useState } from "react";
import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

const PostPreview = ({
  id,
  updateCurrPost,
  currPostId,
  author,
  title,
  updateVotes,
  submission,
  category,
  status,
  upvotes,
  downvotes,
  icon,
  upvoted,
  downvoted,
  changeVoteStatus,
}) => {
  const isCurrPost = currPostId === id;
  const [currDownvotes, setCurrDownvotes] = useState(downvotes);
  const [currUpvotes, setCurrUpvotes] = useState(upvotes);

  const increaseUpvotes = () => {
    if (!isCurrPost) {
      updateCurrPost(id);
    }
    const result = changeVoteStatus(id, "upvotes");
    setCurrUpvotes(result.upvotes);
    setCurrDownvotes(result.downvotes);
  };

  const increaseDownvotes = () => {
    if (!isCurrPost) {
      updateCurrPost(id);
    }

    const result = changeVoteStatus(id, "downvotes");
    setCurrUpvotes(result.upvotes);
    setCurrDownvotes(result.downvotes);
  };

  return (
    <div className="post-preview">
      <Card className="preview" key={id}>
        <div className="row">
          <div className="col-9">
            <Card.Body className="preview-body">
              <div className="row">
                <Card.Title className="preview-title">{title}</Card.Title>
              </div>
              <div className="row justify-content-start">
                {category.map((c) => (
                  <div className="col-4">
                    <Card.Subtitle className="preview-category">
                      {c}
                    </Card.Subtitle>
                  </div>
                ))}
              </div>
              <div className="row">
                <Card.Text className="preview-text">{submission}</Card.Text>
              </div>
            </Card.Body>
          </div>
          <div className="col-3">
            <div className="preview-voting">
              <div className="preview-upvote row">
                <div className="col">
                  <button onClick={increaseUpvotes}>u</button>
                </div>
                <div className="col">{currUpvotes}</div>
              </div>
              <div className="preview-downvote row">
                <div className="col">
                  <button onClick={increaseDownvotes}>d</button>
                </div>
                <div className="col">{currDownvotes}</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PostPreview;
