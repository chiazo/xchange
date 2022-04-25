import React, { useState } from "react";
import {user} from "./data/user";
import { posts } from "./data/posts";
import { Type } from "./models/post";
import { Category } from "./models/homeItems";


export const AddPost = () => {
  
  const [currPost, setCurrPost] = useState("");

  const [currType, setCurrType] = useState("");
  const [currCategory, setCurrCategory] = useState("");
  const [currTitle, setCurrTitle] = useState("");
  const [currText, setCurrText] = useState("");
  const [currStatus, setCurrStatus] = useState("");
  
  let discussionSelect = false
  
  const updatePost = (e) => {
    setCurrPost(e.target.value);
    console.log("currPost: ", currPost);
  }

  const updateType = (e) => {
    setCurrType(e.target.value);
    discussionSelect = !discussionSelect;
    console.log("currType: ", currType)
  }

  const updateCategory = (e) => {
    setCurrType(e.target.value);
    console.log("currCategory: ", currType)
  }

  const updateTitle = (e) => {
    setCurrType(e.target.value);
    console.log("currTitle: ", currType)
  }

  const updateText = (e) => {
    setCurrType(e.target.value);
    console.log("currText: ", currType)
  }
  
  const updateStatus = (e) => {
    setCurrType(e.target.value);
    console.log("currStatus: ", currType)
  }

  const submitPost =() => {
    const newPost = {
      id: (posts.length),
      type:Type.currType,
      title:currTitle,
      category:[Category.MainCategories.Academics],
      status: currStatus,
      author: user.username,
      icon: user.icon,
      date: new Date(),
      upvotes:0,
      downvotes:0,
      upvoted:false,
      downvoted:false,
      comments:[]
    }
    posts.push(newPost)
  };
  return (
    <div className="home">
      <div id="content">
<form>
<fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Type</legend>
      <div class="col-sm-10">
        <div class="custom-control custom-radio custom-control-inline">
          <input onClick={updateType} value="Discussion" type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"></input>
          <label class="custom-control-label" for="customRadioInline1">Discussion</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input onClick={updateType} type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"></input>
        <label class="custom-control-label" for="customRadioInline2">Q&amp;A</label>
      </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
  <legend class="col-form-label col-sm-2 pt-0">Category</legend>
    <div class="col-sm-10">
      <div class="form-check form-check-inline">
        <input onClick={updateCategory} value="Academics" class="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
        <label class="form-check-label" for="inlineCheckbox1">Academics</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
        <label class="form-check-label" for="inlineCheckbox2">Other</label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" onChange={updateTitle}></input>
    </div>
  </div>
  <div class="form-group row">
    <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label">Text</label>
    <div class="col-sm-10">
      <textarea onChange={updateText} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  </div>

  <div class="form-group row">
      <legend class="col-form-label col-sm-2 pt-0">Status</legend>
      <div class="col-sm-10">
        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" id="customRadioInline3" name="customRadioInline3" class="custom-control-input"></input>
          <label class="custom-control-label" for="customRadioInline3">by William</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline4" name="customRadioInline3" class="custom-control-input"></input>
        <label class="custom-control-label" for="customRadioInline4">by Anon</label>
      </div>
      </div>
    </div>
  
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary" onClick={submitPost}>Submit Post</button>
    </div>
  </div>
</form>
        
      </div>
      
    </div>
  );
};

export default AddPost;
