import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AddForm, NotFound } from 'components';
import { HeaderBlock, PostsList, FullPost } from 'modules';

// import {Authenticated} from './components/Authenticated';
import Login from './components/Login/Login';
import Register from './components/Register/register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <HeaderBlock />
            <div className="container">
              <div className="content">
                <div className="content">
                  <Switch>
                    <Route path="/" exact component={() => <PostsList />} />
                    <Route path="/login" component={ Login }/>
                    <Route path="/register" component={ Register }/>
                    <Route path="/post/:id" exact component={FullPost} />
                    <Route path="/post/:id/edit" exact component={AddForm} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;