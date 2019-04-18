import React from 'react';

export default (props) => {
  const { content } = props;
  const { text, imageUrl } = content;
  return (
    <div className="tabContentDiv">
      <img src={imageUrl} alt="home" />
      <div className="content">{text}</div>
    </div>
  );
};
