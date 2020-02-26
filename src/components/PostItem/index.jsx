import React from 'react';
import { Link } from 'react-router-dom';

import './PostItems.scss';

const PostItem = (props) => {
  return (
    <div className="post-item">
      <div
        className="post__image"
        style={{ backgroundImage: `url(${props.img + props.id})` }}
      />
      <div className="post__info">
          <h2 className="post__title">{props.header}</h2>
        <p className="post__description">{props.body}</p>
        <p> Index Positivity : {props.indexOfPositive}</p>
        <p>
            <Link to={`/post/${props.id}`}><button type="button"  class="btn btn-outline-info">Info</button></Link>        
            <button className="btn btn-outline-danger"  onClick={props.onRemove.bind(this, props.id)}>Remove</button>
        </p>
      </div>
    </div>
  )
};

export default PostItem;