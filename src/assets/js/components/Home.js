import React from 'react';
import { log } from 'util';

export default (props) => {
  console.log(props);

  const { content, image } = props;
  return (
    <div className="tabContentDiv">
      <div className="content">{content}</div>
      <img className="content-img" src={image} alt="home" />
    </div>
  );
};
