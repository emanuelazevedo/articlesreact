import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LandingPage from "./LandingPage";
import Users from "./Users";
import Articles from "./Articles";
import Comments from "./Comments";
import UserInfo from "./userData";
import ArticleInfo from "./articleData";
import CommentInfo from "./commentData";
import Callback from "./Callback";

class App extends Component{
  render() {
    
    return(
      <Router>
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="nav navbar-nav col-md-12">
                <li><Link to={'/'} ><h4>Home</h4></Link></li>
                <li><Link to={'/users'} ><h4>Users</h4></Link></li>
                <li><Link to={'/articles'} ><h4>Articles</h4></Link></li>
                <li><Link to={'/comments'} ><h4>Comments</h4></Link></li>
              </ul>
            </nav>

            <Switch>
              <Route exact path='/' component={ LandingPage } />
              <Route exact path='/users' component={ Users } />
              <Route exact path='/articles' component={ Articles } />
              <Route exact path='/comments' component={ Comments } />
              <Route exact path='/user/:id' component={ UserInfo } />
              <Route exact path='/article/:id' component={ ArticleInfo } />
              <Route exact path='/comment/:id' component={ CommentInfo } />

              {/* Route que irá obter a resposta do Laravel (api) com o código para pedir o access token  */}
              <Route path="/callback" component={Callback} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
