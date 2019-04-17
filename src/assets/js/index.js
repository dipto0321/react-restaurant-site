import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';

import '../scss/main.scss';

require.context('../images', true, /\.(png|svg|jpg|gif)$/);

const Template = () => <div> Hello! </div>;

ReactDOM.render(<Template />, document.getElementById('content'));
