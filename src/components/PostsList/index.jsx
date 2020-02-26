import React from 'react'
import  PostItem  from '../PostItem';
import Loading from '../Loading/Loading.jsx';


const PostsList = ({ items, onRemove }) => {
  return (
    <div className="post-items">
      {items ? items.map(post => <PostItem {...post} onRemove={onRemove} />) : <Loading />}
    </div>
  );
};
export default PostsList;


