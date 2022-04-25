import React, { useState } from "react";
import { Card } from "react-bootstrap";

export const Comment = ({
  id,
  parentId,
  author,
  title,
  submission,
  status,
  icon,
  changeCommentVoteStatus,
  allComments,
}) => {
  const [currDownvotes, setCurrDownvotes] = useState(allComments[id].downvotes);
  const [upvoted, setUpvoted] = useState(allComments[id].upvoted);
  const [downvoted, setDownvoted] = useState(allComments[id].downvoted);
  const [currUpvotes, setCurrUpvotes] = useState(allComments[id].upvotes);

  const increaseUpvotes = () => {
    const result = changeCommentVoteStatus(parentId, id, "upvotes");
    setCurrUpvotes(result.upvotes);
    setCurrDownvotes(result.downvotes);
    setUpvoted(result.upvoted);
    setDownvoted(result.downvoted);
  };

  const increaseDownvotes = () => {
    const result = changeCommentVoteStatus(parentId, id, "downvotes");
    setCurrUpvotes(result.upvotes);
    setCurrDownvotes(result.downvotes);
    setUpvoted(result.upvoted);
    setDownvoted(result.downvoted);
  };

  return (
    <Card className="comment" key={id}>
      <div className="row">
        <div className="votes col-3">
          <div className="comment-voting">
            <div className="comment-upvote row">
              <div className="col">
                <div className={`${upvoted ? "upvoted" : ""}`}>
                  <div className="vote-count">{currUpvotes}</div>
                  <button onClick={increaseUpvotes}>
                    <img
                      className="voting-arrow"
                      alt="up"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABa0lEQVRoge3ZsUsbYRiA8V8abS0ixdKhi3ToUIrgIJSCg1P/p/4BLgUXRyfBzcVBOnTo1GKhInQPdCiIgohFiuBoh/tCQjBegpq8yvvAweX73rs8DyRwcCQD8xGfxi1xU1ZwWY5VNMarMzwNrOlEtI91PBqj11A0saESv9CJaJ9vlJnQNLGpEj7HB52QZfwr51uYHJNjLY+xrRI9w1JZb4fAO5yWz58xNWLHWp5gRyX4F++79rpDYBEnZe0Lno7IsZZpfFWJHWOhZ783BN7isKx/w8wdO9byDD9UQkeYv2LmqhB4g4Oyt4/nd+RYyyz2isgfvO4z1y8EXuF32f+FF7fsOBDtiBbmrpm7LkS5tlVmft6a3RB8V/0kXtbM1YUo99hX/V/CMkjIjbk3jwt1ZEg0MiQaGRKNDIlGhkQjQ6KRIdHIkGhkSDQyJBoZEo0MiUaGRCNDopEh0ciQaDyYkIkRfMeuEbx6ezD8B3rST331FeP7AAAAAElFTkSuQmCC"
                    />
                    {/* credit: <a target="_blank" href="https://icons8.com/icon/39966/up-arrow">Up Arrow icon by Icons8</a> */}
                  </button>
                </div>
              </div>
            </div>
            <div className="comment-downvote row">
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
                  <div className="vote-count">{currDownvotes}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment-text col-9">
          <Card.Body className="comment-body">
            <div className="row">
              <div className="comment-profile-pic col-2">
                <img className="profile-pic" alt="profile pic" src={icon} />
              </div>
              <div className="comment-author-date col-8">
                <div className="row comment-details">
                  <div className="comment-author col-5">
                    <p>By: {author}</p>
                  </div>
                  <div className="comment-date col-7">
                    <p>{new Date().toDateString()}</p>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <button className="comment-settings">...</button>
              </div>
            </div>
            <div className="row">
              <div className="col-10 comment-text">
                <Card.Text className="comment-text">{submission}</Card.Text>
              </div>
              <div className="col-2 reply-button">
                <button className="comment-reply">
                  {" "}
                  <img
                    className="voting-arrow"
                    alt="up"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABI0lEQVRIie3VTSsFURgH8N8tJUpW91pZ2UgoG6XsKBvfxwewsvAFyFewsEU2RFiIDWVHWbCQt1LeFvfcmqaZa+5cjoX7r2cxp3nmd87pnIZOOqGGQ2zFRKs4xWeoP0GjwFnor8N56I/CldRzDdsYzXn/ETe4wwWOsI+TdiZRw5nslX5Xl1jEQBn4uCSarGcsoTc23KhzTBSF29nqrHrATFG82YkuUy+YzILSp7qx8ryT3Yf+MMEhDGMK02E8K9cYw33uclN41rbnpRvz2MB7Rt9qEbQZXiTj2E31vWGkFbzsT6KCBXwketdagamv/ACbrTYGPHnHe0p8o3TWE/hcTHgQTwFejgnDSoB3YsOzAb6KDVcD/NoY6IoE32JP/Xp18k/yBX9IqttW35coAAAAAElFTkSuQmCC"
                  />
                  {/* credit: <a href="https://icons8.com/icon/101380/reply-arrow">Reply Arrow icon by Icons8</a>*/}
                </button>
              </div>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default Comment;
