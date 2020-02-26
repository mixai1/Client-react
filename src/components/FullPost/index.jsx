import React from 'react';
import { Link } from 'react-router-dom';
import AddForm from '../AddForm/index'
import './FullPost.scss';

const FullPost = ({ body, createdDate,id }) => (
  <div className="full-post">
    <div className="container">
      <Link to="/">
        <button className="btn btn-outline-primary">Back</button>
      </Link> 
      <Link to={`/post/${id}/edit`}><button type="button" class="btn btn-outline-secondary">Comment</button></Link>
      <div className="full-post__details">
        <i>Posted on {createdDate}</i>
      </div>
      <br />
      <p className="full-post__text">{body}</p>
    </div>
    <div>
<AddForm/>
    </div>
  </div>
);

export default FullPost;