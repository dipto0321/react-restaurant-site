import React from 'react';

export default (props) => {
  console.log(props);

  const { content } = props;
  return (
    <div className="tabContentDiv">
      <div className="content">{content}</div>
    </div>
  );
};
