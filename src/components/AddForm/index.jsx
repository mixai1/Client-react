import React from 'react';

const  AddForm = () => {
  return (
    <div>
    <form className="add-form">
      <div className="form-group">
        <div className="add-form__row">
          <h4>
            <label for="description">Your Comment</label>
          </h4>
          <textarea rows="8" className="form-control" placeholder="Please write your text for comment =)" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
    </div>
  );
};
export default AddForm;
