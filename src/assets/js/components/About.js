import React from 'react';

export default (props) => {
  const { content } = props;
  const { text, imageUrl } = content;
  return (
    <div className="tabContentDiv">
      <img className="content-img" src={imageUrl} alt="about" />
      <div className="content">{text}</div>
    </div>
  );
};
