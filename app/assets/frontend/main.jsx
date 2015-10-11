import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import Follow from './components/Follow';
import NoMatch from './components/NoMatch';

import { Router, Route, Link } from 'react-router';
import { createHistory } from 'history';
import createHashHistory from 'history/lib/createHashHistory';

class App extends React.Component {
  render (){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

let history = createHashHistory();

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(
      <Router history={history}>
        <Route component={App}>
          <Route path="/" component={Index}/>
          <Route path="/follow" component={Follow}/>
          <Route path="*" component={NoMatch}/>
        </Route>

      </Router>, reactNode
    );
  }
};

$(documentReady)
