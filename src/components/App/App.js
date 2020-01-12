import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
//ROUTES
import Feeling from '../Pages/Feeling/Feeling';
import Understanding from '../Pages/Understanding/Understanding';
import Support from '../Pages/Support/Support';
import Comments from '../Pages/Comments/Comments';
import Admin from '../Pages/Admin/Admin';
import Review from '../Pages/Review/Review';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          <Route path="/" exact component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router >
    );
  }
}

export default connect(mapStoreToProps)(App);
