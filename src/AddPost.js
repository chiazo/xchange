import React, { useState } from "react";
import { user, anon_icon } from "./data/user";
import { Status, Type, Category } from "./models/post";
import { useHistory } from "react-router-dom";

export const AddPost = ({ posts, setAllPosts }) => {
  let currStatus = Status.Public;
  const history = useHistory();
  const [currType, setCurrType] = useState(Type.Discussion);
  const [currCategories, setCurrCategories] = useState([
    Category.MainCategories.Academics,
  ]);
  const [currTitle, setCurrTitle] = useState("");
  const [currText, setCurrText] = useState("");

  const updateType = (e) => {
    setCurrType(e.target.value);
  };

  const updateCategory = (e) => {
    const category = e.target.value;
    if (category !== Category.MainCategories.InterestGroups) {
      setCurrCategories([category]);
    } else {
      setCurrCategories([Category.MainCategories.InterestGroups]);
    }
  };

  const updateTitle = (e) => {
    setCurrTitle(e.target.value);
  };

  const updateText = (e) => {
    setCurrText(e.target.value);
  };

  const updateStatus = (e) => {
    currStatus = Number(e.target.value);
  };

  const submitPost = () => {
    const newPost = {
      id: posts.length,
      type: currType,
      title: currTitle,
      category: currCategories,
      submission: currText,
      author: user.username,
      status: currStatus,
      icon: user.icon,
      date: new Date(),
      upvotes: 1,
      downvotes: 0,
      upvoted: true,
      downvoted: false,
      comments: [],
    };
    if (newPost.status !== Status.Public) {
      newPost.author = `AnonUser${Math.floor(Math.random() * 1000) + 1}`;
      newPost.icon = anon_icon;
    }
    setAllPosts([...posts, newPost]);
    history.push("/xchange/discussions");
  };
  return (
    <div className="add-post">
      <div id="content">
        <form onSubmit={submitPost}>
          <div className="form-container">
            <fieldset className="">
              <div className="form-group row radio-type">
                <legend className="col-form-label col-sm-3 add-post-options">
                  Type
                </legend>
                <div className="col-sm-8 type-inline">
                  <div className="custom-radio custom-control-inline">
                    <input
                      onClick={updateType}
                      value={Type.Discussion}
                      type="radio"
                      id="customRadioInline1"
                      name="customRadioInline1"
                      className="custom-control-input"
                    ></input>
                    <label htmlFor="customRadioInline1">Discussion</label>
                    <div className="custom-radio custom-control-inline">
                      <input
                        onClick={updateType}
                        value={Type.Question}
                        type="radio"
                        id="customRadioInline2"
                        name="customRadioInline1"
                        className="custom-control-input"
                      ></input>

                      <label htmlFor="customRadioInline2">Q&amp;A</label>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form-group row radio-type">
              <legend className="col-form-label col-sm-3 pt-0 add-post-options cat">
                Category
              </legend>
              <div className="col-sm-8">
                <div className="col-sm-8">
                  <div className="form-check form-check-inline">
                    <input
                      onClick={updateCategory}
                      value="Academics"
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                    ></input>
                    <label className="back-color" htmlFor="inlineCheckbox1">
                      {currCategories}
                    </label>
                    <div className="dropdown padding" id="menu">
                      <button className="dropbtn" id="other-btn-select">
                        Select
                      </button>
                      <div className="dropdown-content" id="cat-drop">
                        <div className="custom-radio custom-control-inline">
                          <input
                            onClick={updateCategory}
                            value={Category.MainCategories.Academics}
                            type="radio"
                            id="cat-drop-down"
                            name="cat-drop-down"
                            className="custom-control-input"
                          ></input>
                          <label htmlFor="cat-drop-down">Academics</label>
                        </div>
                        <div className="custom-radio custom-control-inline">
                          <input
                            onClick={updateCategory}
                            value={Category.MainCategories.Housing}
                            type="radio"
                            id="cat-drop-down2"
                            name="cat-drop-down"
                            className="custom-control-input"
                          ></input>
                          <label htmlFor="cat-drop-down2">Housing</label>
                        </div>
                        <div className="custom-radio custom-control-inline">
                          <input
                            onClick={updateCategory}
                            value={Category.MainCategories.Dining}
                            type="radio"
                            id="cat-drop-down3"
                            name="cat-drop-down"
                            className="custom-control-input"
                          ></input>
                          <label htmlFor="cat-drop-down3">Dining</label>
                        </div>
                        <div className="custom-radio custom-control-inline">
                          <input
                            onClick={updateCategory}
                            value={Category.MainCategories.InterestGroups}
                            type="radio"
                            id="cat-drop-down4"
                            name="cat-drop-down"
                            className="custom-control-input"
                          ></input>
                          <label htmlFor="cat-drop-down4">
                            Interest Groups
                          </label>
                        </div>
                        <div className="custom-radio custom-control-inline">
                          <input
                            onClick={updateCategory}
                            value={Category.MainCategories.Miscellaneous}
                            type="radio"
                            id="cat-drop-down5"
                            name="cat-drop-down"
                            className="custom-control-input"
                          ></input>
                          <label htmlFor="cat-drop-down5">Miscellaneous</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="post-title"
                className="col-sm-3 col-form-label dropdown add-post-options"
              >
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
                  rows="12"
                  required
                ></textarea>
              </div>
            </div>
            <div className="form-group row radio-type">
              <legend className="col-form-label col-sm-3 pt-0 dropdown add-post-options">
                Status
              </legend>
              <div className="col-sm-9">
                <div className="custom-radio custom-control-inline">
                  <input
                    type="radio"
                    onChange={updateStatus}
                    id="customRadioInline3"
                    name="customRadioInline3"
                    className="custom-control-input"
                    value={Status.Public}
                  ></input>
                  <label className="" htmlFor="customRadioInline3">
                    by {user.name.split(" ")[0]}
                  </label>
                </div>
                <div className="custom-radio custom-control-inline">
                  <input
                    type="radio"
                    onChange={updateStatus}
                    id="customRadioInline4"
                    name="customRadioInline3"
                    className="custom-control-input"
                    value={Status.Anon}
                  ></input>
                  <label className="" htmlFor="customRadioInline4">
                    by Anon
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-10">
                <button className="submit-post-btn" type="submit">
                  Submit Post
                </button>
              </div>
            </div>
            <div className="add-post-buffer"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
