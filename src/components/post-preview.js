import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PostPreview = ({
  id,
  updateCurrPost,
  currPostId,
  author,
  title,
  updateVotes,
  submission,
  category,
  status,
  icon,
  changeVoteStatus,
  allPosts,
}) => {
  const [currDownvotes, setCurrDownvotes] = useState(allPosts[id].downvotes);
  const [upvoted, setUpvoted] = useState(allPosts[id].upvoted);
  const [downvoted, setDownvoted] = useState(allPosts[id].downvoted);
  const [currUpvotes, setCurrUpvotes] = useState(allPosts[id].upvotes);

  const increaseUpvotes = () => {
    const result = changeVoteStatus(id, "upvotes");
    setCurrUpvotes(result.upvotes);
    setCurrDownvotes(result.downvotes);
    setUpvoted(result.upvoted);
    setDownvoted(result.downvoted);
  };

  const increaseDownvotes = () => {
    const result = changeVoteStatus(id, "downvotes");
    setCurrUpvotes(result.upvotes);
    setCurrDownvotes(result.downvotes);
    setUpvoted(result.upvoted);
    setDownvoted(result.downvoted);
  };

  return (
    <div className="post-preview">
      <Card className="preview" key={id}>
        <div className="row">
          <div className="col-9">
            <Link
              to={{
                pathname: `/post/${id}`,
                state: { post: allPosts[id] },
              }}
              style={{ textDecoration: "none" }}
            >
              <Card.Body className="preview-body">
                <div className="row">
                  <Card.Title className="preview-title">{title}</Card.Title>
                </div>
                <div className="row justify-content-start">
                  {category.map((c, idx) => (
                    <div className="col-4 category" key={idx}>
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
            </Link>
          </div>
          <div className="col-3">
            <div className="preview-voting">
              <div className="preview-upvote row">
                <div className="col">
                  <div className={`${upvoted ? "upvoted" : ""}`}>
                    <button onClick={increaseUpvotes}>
                      <img
                        className="voting-arrow"
                        alt="up"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABa0lEQVRoge3ZsUsbYRiA8V8abS0ixdKhi3ToUIrgIJSCg1P/p/4BLgUXRyfBzcVBOnTo1GKhInQPdCiIgohFiuBoh/tCQjBegpq8yvvAweX73rs8DyRwcCQD8xGfxi1xU1ZwWY5VNMarMzwNrOlEtI91PBqj11A0saESv9CJaJ9vlJnQNLGpEj7HB52QZfwr51uYHJNjLY+xrRI9w1JZb4fAO5yWz58xNWLHWp5gRyX4F++79rpDYBEnZe0Lno7IsZZpfFWJHWOhZ783BN7isKx/w8wdO9byDD9UQkeYv2LmqhB4g4Oyt4/nd+RYyyz2isgfvO4z1y8EXuF32f+FF7fsOBDtiBbmrpm7LkS5tlVmft6a3RB8V/0kXtbM1YUo99hX/V/CMkjIjbk3jwt1ZEg0MiQaGRKNDIlGhkQjQ6KRIdHIkGhkSDQyJBoZEo0MiUaGRCNDopEh0ciQaDyYkIkRfMeuEbx6ezD8B3rST331FeP7AAAAAElFTkSuQmCC"
                      />
                      {/* credit: <a target="_blank" href="https://icons8.com/icon/39966/up-arrow">Up Arrow icon by Icons8</a> */}
                    </button>
                    <div>{currUpvotes}</div>
                  </div>
                </div>
              </div>
              <div className="preview-downvote row">
                <div className="col">
                  <div className={`${downvoted ? "downvoted" : ""}`}>
                    <button onClick={increaseDownvotes}>
                      <img
                        className="voting-arrow"
                        alt="down"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABaklEQVRoge3ZP0tcQRSG8Z8u/gkiQUlhI2kEQQshTQoLSZFPlS6lVbp0gl0aC0mRwkLWEJINyQcQLAIhBAmEoISUm2JGVmRd78K9u7NyHhiYO+cw8z5Mc2EIKtPBx3GHqINuHo0y3fQBoyJESiNESiNESiNESiNESiNESiNESiNESiNESiNESiNESiNESiNESiNESiNESiNESiNE8B5fsFJDjpW810kNew1NR3obPMXqgL673hBX8x5dfKot3RAs5YO7+Ia1W/oGiTzGWa5/xaOaM1bmIT7kID+x2afnNpF1fM+1z1huKGNlFnAkBTrH1o16P5EN/MjrbSw2nLEycziUgv3G02u1myJP8CuvvcODEWWszCwOpICXeJbXr4ts40/+fov5EWesTAv7UtC/eK4nsoOLPH+DmTFlrEwLe1Lgf3oiV/O93DMRTOGVnsTVeG1C/yZe6knsSoKN0PQVH0s30MaLhs+6H/wHSQ5OY++CsssAAAAASUVORK5CYII="
                      />
                      {/* credit: <a href="https://icons8.com/icon/41189/down-arrow">Down Arrow icon by Icons8</a> */}
                    </button>
                    <div>{currDownvotes}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PostPreview;
