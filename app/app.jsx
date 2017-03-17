var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
import Timer from 'Timer';
import Countdown from 'Countdown';

// Load foundation-sites
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!sass-loader!applicationStyles');
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="/timer" component={Timer}/>
        <Route path="/countdown" component={Countdown}/>
      </Route>
    </Router>,
    document.getElementById('app')
);
