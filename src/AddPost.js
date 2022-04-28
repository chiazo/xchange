import React, { useState } from "react";
import { user } from "./data/user";
import { Status, Type, Category } from "./models/post";
import { useHistory } from "react-router-dom";

export const AddPost = ({ posts, setAllPosts }) => {
  const history = useHistory();
  const [currType, setCurrType] = useState(Type.Discussion);
  const [currCategories, setCurrCategories] = useState([
    Category.MainCategories.Academics,
  ]);
  const [currTitle, setCurrTitle] = useState("");
  const [currText, setCurrText] = useState("");
  const [currStatus, setCurrStatus] = useState("");

  const updateType = (e) => {
    setCurrType(e.target.value);
  };

  const updateCategory = (e) => {
    const filteredCategories = currCategories.filter(
      (x) => x !== e.target.value
    );
    setCurrCategories([...filteredCategories, e.target.value]);
  };

  const updateTitle = (e) => {
    setCurrTitle(e.target.value);
  };

  const updateText = (e) => {
    setCurrText(e.target.value);
  };

  const updateStatus = (e) => {
    setCurrStatus(e.target.value);
  };

  const submitPost = () => {
    const newPost = {
      id: posts.length,
      type: currType,
      title: currTitle,
      category: currCategories,
      submission: currText,
      status: currStatus,
      author: user.username,
      icon: user.icon,
      date: new Date(),
      upvotes: 1,
      downvotes: 0,
      upvoted: true,
      downvoted: false,
      comments: [],
    };
    setAllPosts([...posts, newPost]);
    history.push("/xchange/discussions");
  };
  return (
    <div className="home">
      <div id="content">
        <form>
          <fieldset className="form-group">
            <div className="form-group row">
              <label className="col-form-label col-sm-3 discussion-button dropdown add-post-options">Type</label>
              <div className="col-sm-8">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    onClick={updateType}
                    value={Type.Discussion}
                    type="radio"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    className="custom-control-input"
                  ></input>
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline1"
                  >
                    Discussion
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    onClick={updateType}
                    value={Type.Question}
                    type="radio"
                    id="customRadioInline2"
                    name="customRadioInline1"
                    className="custom-control-input"
                  ></input>
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline2"
                  >
                    Q&amp;A
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="form-group row">
            <legend className="col-form-label col-sm-3 pt-0 discussion-button dropdown add-post-options-category">Category</legend>
            <div className="col-sm-8">
              <div className="form-check form-check-inline">
                <input
                  onClick={updateCategory}
                  value="Academics"
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                ></input>
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Academics
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  onClick={updateCategory}
                  value="Other"
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                ></input>
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="post-title" className="col-sm-3 col-form-label dropdown add-post-options">
              Title
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="post-title"
                onChange={updateTitle}
                required
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="col-sm-3 col-form-label dropdown add-post-options"
            >
              Text
            </label>
            <div className="col-sm-8">
              <textarea
                onChange={updateText}
                className="form-control comment-input comment-body"
                id="exampleFormControlTextarea1"
                rows="3"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-group row">
            <legend className="col-form-label col-sm-3 pt-0 dropdown add-post-options">Status</legend>
            <div className="col-sm-9">
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  onChange={updateStatus}
                  id="customRadioInline3"
                  name="customRadioInline3"
                  className="custom-control-input"
                  value={Status.Public}
                ></input>
                <label
                  className="custom-control-label"
                  htmlFor="customRadioInline3"
                >
                  by {user.name.split(" ")[0]}
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  onChange={updateStatus}
                  id="customRadioInline4"
                  name="customRadioInline3"
                  className="custom-control-input"
                  value={Status.Anon}
                ></input>
                <label
                  className="custom-control-label"
                  htmlFor="customRadioInline4"
                >
                  by Anon
                </label>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-10">
              <button className="submit-post-btn" onClick={submitPost}>
                Submit Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
