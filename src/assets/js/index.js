import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import '../scss/main.scss';

require.context('../images', true, /\.(png|svg|jpg|gif)$/);


ReactDOM.render(<AppRouter />, document.getElementById('content'));
