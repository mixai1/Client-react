import React from 'react';

import './HeaderBlock.scss';

const HeaderBlock = ({ title, description, imageUrl }) => {
  return (
    <div className="header-block" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="container">
        <div className="header-block__overlay" />
        <div className="header-block__center">
          <h1>{title}</h1>
          <h3>{description}</h3>
            <button  class="btn btn-outline-dark"><a href="https://github.com/mixai1/News"
            color="black" target="_blank"><font color ="black">GitHub</font></a></button>
        </div>
        </div>
      </div>
      );
    };
    
export default HeaderBlock;