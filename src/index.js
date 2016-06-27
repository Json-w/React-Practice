import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Link, Route ,browserHistory} from 'react-router';

import App from './container/app'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>, document.getElementById('content'));