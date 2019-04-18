import React from 'react';

export default (props) => {
  const { content } = props;
  return (
    <div className="tabContentDiv">
      <div className="content">{content}</div>
    </div>
  );
};
