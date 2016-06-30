import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Link, Route ,browserHistory} from 'react-router';

import App from './src/container/App'

ReactDOM.render(
    <App />, document.getElementById('content'));

console.log(3);
