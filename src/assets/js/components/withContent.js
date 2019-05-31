import React from 'react';
import contents from '../data/content';

const withContent = (path, Component) => {
  let content;
  switch (path) {
    case 'about':
      content = contents.about;
      break;
    case 'contact':
      content = contents.contact;
      break;
    default:
      content = contents.home;
  }
  return (...props) => <Component content={content} {...props} />;
};

export default withContent;
