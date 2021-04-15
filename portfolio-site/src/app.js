import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'; //all browsers start with thier own default styles, set all to the same base before styling
import './styles/styles.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
