import React from "react";


export const AddPost = () => {
  const submitPost =() => {
    
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
          <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"></input>
          <label class="custom-control-label" for="customRadioInline1">Discussion</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"></input>
        <label class="custom-control-label" for="customRadioInline2">Q&amp;A</label>
      </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
  <legend class="col-form-label col-sm-2 pt-0">Category</legend>
    <div class="col-sm-10">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
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
      <input type="email" class="form-control" id="inputEmail3"></input>
    </div>
  </div>
  <div class="form-group row">
    <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label">Text</label>
    <div class="col-sm-10">
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
